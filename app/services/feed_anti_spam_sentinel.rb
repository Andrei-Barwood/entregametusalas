# frozen_string_literal: true

require 'set'

# ==============================================================================
# CYBERIA-MED // AEGIS-9 FEED ANTI-SPAM SENTINEL SERVICE
# Módulo de defensa en profundidad contra bots de spam masivo en formularios
# y muros de comentarios (XRumer, ScrapeBox, botnets de Bielorrusia/Rusia, etc.)
# ==============================================================================
class FeedAntiSpamSentinel
  class SpamDetectedError < ArgumentError
    attr_reader :reason, :rule, :offending_text

    def initialize(reason, rule: 'AEGIS9_SPAM_FILTER', offending_text: nil)
      @reason = reason
      @rule = rule
      @offending_text = offending_text
      super("[AEGIS-9 SENTINEL] Comentario bloqueado por filtro anti-spam: #{reason} (Regla: #{rule})")
    end
  end

  # 1. Indicadores de Compromiso (IOCs) y Blacklist exacta de canales y contactos
  BLACKLIST_CONTACTS = [
    'feedbackformeu',
    '375259112693',
    '+375259112693',
    't.me/feedbackformeu',
    'wa.me/375259112693'
  ].freeze

  # 2. Reglas Heurísticas y Patrones de Frases de Spambots de Formularios de Contacto
  SPAM_PATTERNS = [
    # Patrones específicos de la campaña de Bielorrusia (+375 / FeedbackFormEU)
    {
      id: 'BELARUS_BOTNET_CONTACT',
      regex: /(?:t\.me\/feedbackformeu|wa\.me\/375259112693|wa\.me\/375\d{8,9}|375259112693)/i,
      reason: 'Contacto asociado a botnet de spam masivo (Bielorrusia / FeedbackFormEU)'
    },
    {
      id: 'CONTACT_FORM_SPAM_PITCH',
      regex: /submitted\s+through\s+a\s+contact\s+form(?:\s+intended\s+for\s+messages)?/i,
      reason: 'Oferta comercial de inyección automatizada en formularios de contacto'
    },
    {
      id: 'LAWFUL_BUSINESS_MESSAGES',
      regex: /send\s+business\s+messages\s+in\s+a\s+lawful\s+way/i,
      reason: 'Frase típica de bypass de spam de bots de contacto comercial'
    },
    {
      id: 'NO_PERSONAL_DATA_CLAIM',
      regex: /submitted\s+without\s+using\s+recipient\s+personal\s+data/i,
      reason: 'Patrón de spam que intenta simular cumplimiento de GDPR/privacidad'
    },
    {
      id: 'SPAM_FILTER_BYPASS_PITCH',
      regex: /reduce\s+the\s+chance\s+of\s+spam\s+filtering/i,
      reason: 'Venta de servicio para evadir filtros de spam'
    },
    {
      id: 'BULK_MESSAGES_PRICING',
      regex: /(?:cost\s+of\s+sending|sending)\s+(?:one|\d+)?\s*million\s+messages\s+is\s*\$?\d+/i,
      reason: 'Tarifario de spam masivo comercial (millones de mensajes)'
    },
    {
      id: 'FREE_TRIAL_MESSAGES',
      regex: /free\s+trial\s+(?:is\s+available|includes)\s+up\s+to\s+\d+[\d,]*\s*messages/i,
      reason: 'Oferta de prueba gratuita de envío de mensajes masivos'
    },
    {
      id: 'DUAL_CHANNEL_SOLICITATION',
      regex: /reach\s+us\s+on\s+(?:telegram|whatsapp)\s+or\s+(?:telegram|whatsapp)/i,
      reason: 'Captación de clientes vía Telegram / WhatsApp'
    },
    {
      id: 'TELEGRAM_WHATSAPP_SPAM_LINKS',
      regex: /(?:telegram\s*[-:]\s*t\.me\/[a-z0-9_]+)[\s\S]{0,100}(?:whatsapp\s*[-:]\s*wa\.me\/\d+)/i,
      reason: 'Combinación cruzada de enlaces t.me y wa.me de spam comercial'
    },
    # Patrones genéricos de herramientas de envío masivo a formularios (XRumer, ScrapeBox, GSA)
    {
      id: 'FORM_SUBMITTER_TOOLS',
      regex: /(?:xrumer|scrapebox|gsa\s+search\s+engine|contact\s+form\s+(?:submitter|blaster|spammer|marketing)|mass\s+form\s+submission)/i,
      reason: 'Mención o uso de herramientas de spam masivo a formularios'
    },
    {
      id: 'BULK_MESSAGING_SERVICES',
      regex: /(?:send\s+bulk\s+messages|blast\s+your\s+message|bulk\s+whatsapp\s+marketing|bulk\s+telegram\s+messages)/i,
      reason: 'Venta de servicios de mensajería masiva no solicitada'
    },
    # Phishing, medicamentos ilegales, casinos o criptoestafas en muro clínico
    {
      id: 'UNAUTHORIZED_COMMERCIAL_SCAM',
      regex: /(?:buy\s+cheap\s+viagra|cialis\s+without\s+prescription|online\s+casino\s+bonus|earn\s+\$\d+\s+daily\s+crypto)/i,
      reason: 'Publicidad engañosa o comercial no autorizada'
    }
  ].freeze

  # Palabras clave de alto riesgo que requieren análisis estricto si se combinan con enlaces
  SUSPICIOUS_KEYWORDS = [
    'feedbackform',
    'contact form',
    'million messages',
    'business messages',
    'free trial',
    'spam filtering',
    't.me/',
    'wa.me/'
  ].freeze

  class << self
    # Valida y lanza SpamDetectedError si el contenido o autor coincide con la lista negra
    def validate!(content, author: nil, honeypot: nil)
      result = inspect_text(content, author: author, honeypot: honeypot)
      if result[:is_spam]
        raise SpamDetectedError.new(result[:reason], rule: result[:rule], offending_text: result[:offending_text])
      end

      true
    end

    # Retorna true si es clasificado como spam, false si es legítimo
    def spam?(content, author: nil, honeypot: nil)
      inspect_text(content, author: author, honeypot: honeypot)[:is_spam]
    end

    # Inspecciona el contenido y devuelve un informe detallado
    def inspect_text(content, author: nil, honeypot: nil)
      # 1. Trampa Honeypot: si el campo señuelo oculto contiene cualquier valor, es un bot 100%
      if honeypot && !honeypot.to_s.strip.empty?
        return {
          is_spam: true,
          rule: 'AEGIS9_HONEYPOT_TRIGGERED',
          reason: 'Campo honeypot trampa completado por bot automatizado',
          offending_text: honeypot.to_s.strip[0..100]
        }
      end

      normalized_author = normalize_text(author)
      normalized_content = normalize_text(content)

      # 2. Validación de autor (nombres con enlaces, bots o canales de spam)
      if author && !author.to_s.strip.empty?
        if normalized_author =~ /(?:https?:\/\/|t\.me\/|wa\.me\/|feedbackform|\.com|\.ru|\.eu)/i
          return {
            is_spam: true,
            rule: 'AEGIS9_AUTHOR_BLACKLIST',
            reason: 'El alias del autor contiene enlaces promocionales o identificador de spambot',
            offending_text: author.to_s.strip
          }
        end
      end

      # 3. Verificación de IOCs exactos en el contenido
      BLACKLIST_CONTACTS.each do |ioc|
        if normalized_content.include?(ioc)
          return {
            is_spam: true,
            rule: 'AEGIS9_IOC_BLACKLIST',
            reason: "Contiene indicador de compromiso bloqueado: #{ioc}",
            offending_text: ioc
          }
        end
      end

      # 4. Verificación de patrones heurísticos de spam
      SPAM_PATTERNS.each do |pattern|
        if content =~ pattern[:regex] || normalized_content =~ pattern[:regex]
          match_data = content.match(pattern[:regex]) || normalized_content.match(pattern[:regex])
          return {
            is_spam: true,
            rule: pattern[:id],
            reason: pattern[:reason],
            offending_text: match_data ? match_data[0] : nil
          }
        end
      end

      # 5. Heurística combinada: menciones a Telegram o WhatsApp junto a palabras comerciales
      if (normalized_content.include?('t.me/') || normalized_content.include?('wa.me/') || normalized_content.include?('telegram') || normalized_content.include?('whatsapp'))
        commercial_terms = ['million messages', 'free trial', 'cost of', 'dollar', '$59', '$', 'business messages', 'contact form']
        matched_terms = commercial_terms.select { |term| normalized_content.include?(term) }
        if matched_terms.size >= 2
          return {
            is_spam: true,
            rule: 'AEGIS9_COMMERCIAL_MESSAGING_COMBO',
            reason: "Combinación de canales de mensajería con términos de venta masiva (#{matched_terms.join(', ')})",
            offending_text: matched_terms.join(' + ')
          }
        end
      end

      # Mensaje limpio
      {
        is_spam: false,
        rule: nil,
        reason: nil,
        offending_text: nil
      }
    end

    # Purga comentarios existentes en el archivo JSONL si coincidieran con la lista negra
    def purge_spam!(file_path = nil)
      require_relative '../models/wall_post'
      target_file = file_path || WallPost.file_path
      return 0 unless File.exist?(target_file)

      purged_count = 0
      retained_lines = []

      File.open(target_file, File::RDWR, 0o644) do |file|
        file.flock(File::LOCK_EX)
        file.rewind
        lines = file.readlines

        lines.each do |line|
          stripped = line.strip
          next if stripped.empty?

          begin
            data = JSON.parse(stripped)
            content = data['content'] || ''
            author = data['author'] || ''

            if spam?(content, author: author)
              purged_count += 1
            else
              retained_lines << stripped
            end
          rescue JSON::ParserError
            retained_lines << stripped
          end
        end

        if purged_count > 0
          file.rewind
          file.truncate(0)
          retained_lines.each { |l| file.puts(l) }
          file.flush
        end

        file.flock(File::LOCK_UN)
      end

      purged_count
    end

    private

    # Normaliza texto eliminando caracteres de espacio cero, dobles espacios y normalizando puntuación
    def normalize_text(text)
      return '' if text.nil?

      t = text.to_s.dup
      # Eliminar zero-width spaces y caracteres de control invisibles
      t.gsub!(/[\u200B-\u200D\uFEFF]/, '')
      # Convertir a minúsculas
      t = t.downcase
      # Reemplazar múltiples espacios y saltos de línea por un único espacio
      t.gsub!(/\s+/, ' ')
      # Normalizar trucos de puntos entre dominios (ej: "t . me" -> "t.me")
      t.gsub!(/\s*\.\s*/, '.')
      t.strip
    end
  end
end
