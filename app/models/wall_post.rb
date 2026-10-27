# frozen_string_literal: true

require 'json'
require 'securerandom'
require 'time'

class WallPost
  DATA_FILE = File.expand_path('../../data/clinical_wall_feed.jsonl', __dir__)
  MAX_CONTENT_LENGTH = 2000

  VALID_REACTIONS = %w[like dislike love likes dislikes loves].freeze

  AVATAR_COLORS = [
    '#29C2DA', # bauble cyan
    '#6CC929', # bright apple green
    '#A4FF8E', # iris neon highlight
    '#AEF504', # electric chartreuse
    '#E7F800', # bright yellow-green
    '#218595', # cyan ocean
    '#409979'  # emerald carapace
  ].freeze

  attr_accessor :id, :episode_id, :author, :avatar_color, :content, :likes, :dislikes, :loves, :created_at

  def initialize(attrs = {})
    @id = (attrs['id'] || attrs[:id] || "post_#{Time.now.to_i}_#{SecureRandom.hex(4)}").to_s
    @episode_id = attrs['episode_id'] || attrs[:episode_id]
    @episode_id = @episode_id.to_i if @episode_id && !@episode_id.to_s.strip.empty?
    @author = (attrs['author'] || attrs[:author] || 'Cadete_NetAcad').to_s.strip
    @author = 'Cadete_NetAcad' if @author.empty?
    @avatar_color = attrs['avatar_color'] || attrs[:avatar_color] || AVATAR_COLORS.sample
    @content = (attrs['content'] || attrs[:content] || '').to_s
    @likes = (attrs['likes'] || attrs[:likes] || 0).to_i
    @dislikes = (attrs['dislikes'] || attrs[:dislikes] || 0).to_i
    @loves = (attrs['loves'] || attrs[:loves] || 0).to_i
    @created_at = (attrs['created_at'] || attrs[:created_at] || Time.now.utc.iso8601).to_s
  end

  def to_h
    {
      'id' => @id,
      'episode_id' => @episode_id,
      'author' => @author,
      'avatar_color' => @avatar_color,
      'content' => @content,
      'likes' => @likes,
      'dislikes' => @dislikes,
      'loves' => @loves,
      'created_at' => @created_at
    }
  end

  def to_json(*_args)
    JSON.generate(to_h)
  end

  class << self
    def file_path
      @file_path || DATA_FILE
    end

    def file_path=(path)
      @file_path = path
    end

    def ensure_storage_ready!
      dir = File.dirname(file_path)
      FileUtils.mkdir_p(dir) unless Dir.exist?(dir)

      if !File.exist?(file_path) || File.zero?(file_path)
        seed_initial_feed!
      end
    end

    def all(episode_id: nil, limit: 100)
      ensure_storage_ready!

      posts = []
      File.open(file_path, 'r:UTF-8') do |file|
        file.flock(File::LOCK_SH)
        file.each_line do |line|
          line = line.strip
          next if line.empty?

          begin
            data = JSON.parse(line)
            posts << WallPost.new(data)
          rescue JSON::ParserError
            next
          end
        end
        file.flock(File::LOCK_UN)
      end

      # Filtro opcional por episodio si viene especificado
      if episode_id && !episode_id.to_s.strip.empty? && episode_id.to_s != 'all'
        target_ep = episode_id.to_i
        posts = posts.select { |p| p.episode_id == target_ep }
      end

      # Orden cronológico inverso: los más recientes arriba (estilo Twitter/X)
      posts.reverse.first(limit)
    end

    def find(id)
      ensure_storage_ready!
      id_str = id.to_s

      File.open(file_path, 'r:UTF-8') do |file|
        file.flock(File::LOCK_SH)
        file.each_line do |line|
          line = line.strip
          next if line.empty?

          begin
            data = JSON.parse(line)
            return WallPost.new(data) if data['id'] == id_str
          rescue JSON::ParserError
            next
          end
        end
        file.flock(File::LOCK_UN)
      end
      nil
    end

    def create(attrs = {})
      ensure_storage_ready!

      raw_content = (attrs['content'] || attrs[:content] || '').to_s.strip
      if raw_content.empty?
        raise ArgumentError, 'El contenido del comentario no puede estar vacío'
      end

      if raw_content.length > MAX_CONTENT_LENGTH
        raise ArgumentError, "El comentario excede el límite máximo de #{MAX_CONTENT_LENGTH} caracteres (longitud: #{raw_content.length})"
      end

      post = WallPost.new(attrs)
      post.content = raw_content

      # Almacenamiento ultracompacto en formato JSONL append-only con bloqueo exclusivo
      File.open(file_path, 'a:UTF-8') do |file|
        file.flock(File::LOCK_EX)
        file.puts(post.to_json)
        file.flock(File::LOCK_UN)
      end

      post
    end

    def react(id, reaction_type)
      ensure_storage_ready!
      type = reaction_type.to_s.downcase.strip
      type = 'like' if type == 'likes' || type == '👍'
      type = 'dislike' if type == 'dislikes' || type == '👎'
      type = 'love' if type == 'loves' || type == '💝'

      unless %w[like dislike love].include?(type)
        raise ArgumentError, "Reacción no válida '#{reaction_type}'. Permitidas: like (👍), dislike (👎), love (💝)"
      end

      target_post = nil
      lines = []

      # Lectura y reescritura atómica con flock exclusivo
      File.open(file_path, File::RDWR | File::CREAT, 0o644) do |file|
        file.flock(File::LOCK_EX)
        file.rewind
        raw_lines = file.readlines

        raw_lines.each do |line|
          stripped = line.strip
          next if stripped.empty?

          begin
            data = JSON.parse(stripped)
            if data['id'] == id.to_s
              case type
              when 'like'
                data['likes'] = (data['likes'] || 0) + 1
              when 'dislike'
                data['dislikes'] = (data['dislikes'] || 0) + 1
              when 'love'
                data['loves'] = (data['loves'] || 0) + 1
              end
              target_post = WallPost.new(data)
              lines << JSON.generate(data)
            else
              lines << stripped
            end
          rescue JSON::ParserError
            lines << stripped
          end
        end

        if target_post
          file.rewind
          file.truncate(0)
          lines.each { |l| file.puts(l) }
          file.flush
        end

        file.flock(File::LOCK_UN)
      end

      target_post
    end

    def storage_stats
      ensure_storage_ready!
      bytes = File.exist?(file_path) ? File.size(file_path) : 0
      count = 0
      if File.exist?(file_path)
        File.open(file_path, 'r:UTF-8') do |f|
          f.flock(File::LOCK_SH)
          f.each_line { |l| count += 1 unless l.strip.empty? }
          f.flock(File::LOCK_UN)
        end
      end

      # Estimación de compacidad: 3 MB (3,145,728 bytes) / ~200 bytes por mensaje ~= 15,700 mensajes
      max_bytes = 3 * 1024 * 1024
      pct_used = ((bytes.to_f / max_bytes) * 100).round(2)

      {
        file_path: file_path,
        bytes: bytes,
        kb: (bytes / 1024.0).round(2),
        total_posts: count,
        max_bytes: max_bytes,
        percentage_used: pct_used,
        lifespan_estimate: 'Capacidad estimada para ~15,000 publicaciones (5 años de debates en pod clínico sin base de datos pesada)'
      }
    end

    def reset_feed!
      File.open(file_path, 'w:UTF-8') do |f|
        f.flock(File::LOCK_EX)
        f.truncate(0)
        f.flock(File::LOCK_UN)
      end
      seed_initial_feed!
    end

    private

    def seed_initial_feed!
      initial_posts = [
        {
          'id' => 'post_seed_ep01_01',
          'episode_id' => 1,
          'author' => 'Cadete_NetAcad_UCI',
          'avatar_color' => '#29C2DA',
          'content' => "¡Compañeros de NetAcad! Ojo en el EP01 con el comando `nmap --script ssl-enum-ciphers -p 8443 192.168.10.50`. Si el sistema IT del quirófano tiene corrientes de fuga superiores a 10 µA, el monitor de aislamiento de línea (LIM) disparará la alarma acústica antes de que el parche TLS 1.3 conmute. Siempre verifiquen el transformador de aislamiento antes de inocular firmware.",
          'likes' => 18,
          'dislikes' => 0,
          'loves' => 24,
          'created_at' => (Time.now.utc - 7200).iso8601
        },
        {
          'id' => 'post_seed_ep01_02',
          'episode_id' => 1,
          'author' => 'Dra_BioCyber_96',
          'avatar_color' => '#6CC929',
          'content' => "Excelente punto @Cadete_NetAcad_UCI. De acuerdo a la norma IEC 60601-1-1 y NFPA 99 capítulo 6, la resistencia de tierra equipotencial del quirófano debe ser < 0.1 Ω. Si el atacante intenta una inyección de memoria en las bombas Alaris, el script bash que armamos con nmap y openssl s_client aísla el bus sin reiniciar la infusión continua de noradrenalina.",
          'likes' => 27,
          'dislikes' => 1,
          'loves' => 35,
          'created_at' => (Time.now.utc - 5400).iso8601
        },
        {
          'id' => 'post_seed_ep04_01',
          'episode_id' => 4,
          'author' => 'Interno_Trauma_Zak',
          'avatar_color' => '#A4FF8E',
          'content' => "En EP04 (SKEET SHOOT) el ataque DoS UDP flood a los ventiladores mecánicos simula el protocolo IEEE 11073. Con iptables limitamos el rate a 25 paquetes/seg y los signos vitales del paciente se estabilizaron inmediatamente. ¡La consola táctica de Kali ayuda muchísimo a memorizar los comandos antes del examen!",
          'likes' => 15,
          'dislikes' => 0,
          'loves' => 19,
          'created_at' => (Time.now.utc - 3600).iso8601
        },
        {
          'id' => 'post_seed_ep12_01',
          'episode_id' => 12,
          'author' => 'BioIngeniero_DevlinHunter',
          'avatar_color' => '#E7F800',
          'content' => "Al finalizar el Acto I en EP12 (STEAL PLANE), la firma criptográfica con `openssl dgst -sha256` garantiza la integridad del firmware antes de despegar. Recuerden: en ciberseguridad médica un parche mal formado puede costar vidas reales.",
          'likes' => 31,
          'dislikes' => 0,
          'loves' => 42,
          'created_at' => (Time.now.utc - 1800).iso8601
        }
      ]

      File.open(file_path, 'w:UTF-8') do |f|
        f.flock(File::LOCK_EX)
        initial_posts.each do |p|
          f.puts(JSON.generate(p))
        end
        f.flock(File::LOCK_UN)
      end
    end
  end
end
