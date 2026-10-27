# frozen_string_literal: true

require 'fileutils'
require 'rack/test'
require_relative 'spec/spec_helper'

output_dir = ARGV[0] || File.expand_path('dist', __dir__)
FileUtils.mkdir_p(output_dir)

puts "Exporting static site to: #{output_dir}"

def render_route(path, cookie = nil)
  env = Rack::MockRequest.env_for(path, method: 'GET')
  env['HTTP_COOKIE'] = cookie if cookie
  status, headers, body = ApplicationController.call(env)
  content = String.new
  body.each { |chunk| content << chunk }
  [status, content, headers]
end

# 1. Renderizar páginas principales
pages = {
  '/' => 'index.html',
  '/mobile' => 'mobile.html',
  '/muro' => 'muro.html',
  '/tutorial' => 'tutorial.html',
  '/bibliografia' => 'bibliografia.html',
  '/simulators' => 'simulators.html'
}

pages.each do |route, filename|
  status, html, _ = render_route(route)
  if status == 200
    target_path = File.join(output_dir, filename)
    File.write(target_path, html, encoding: 'UTF-8')
    puts "✓ [#{status}] #{route} -> #{filename} (#{html.bytesize} bytes)"
  else
    puts "✗ [#{status}] #{route} FAILED"
  end
end

# 2. Copiar directorios estáticos
dirs_to_copy = ['public', 'data']
dirs_to_copy.each do |dir|
  src = File.expand_path(dir, __dir__)
  dst = File.expand_path(dir, output_dir)
  next if src == dst
  FileUtils.cp_r(src, dst)
  puts "✓ Copiado directorio #{dir}/ -> #{dst}"
end

# Copiar css y js al nivel raíz para compatibilidad con rutas absolutas /css/... y /js/...
FileUtils.mkdir_p(File.join(output_dir, 'css'))
FileUtils.cp_r(File.expand_path('public/css/.', __dir__), File.join(output_dir, 'css'))
FileUtils.mkdir_p(File.join(output_dir, 'js'))
FileUtils.cp_r(File.expand_path('public/js/.', __dir__), File.join(output_dir, 'js'))
puts "✓ Enlazadas carpetas raíz /css y /js"

# 3. Exportar informes forenses
reports_dir = File.join(output_dir, 'reports')
FileUtils.mkdir_p(reports_dir)
FileUtils.mkdir_p(File.join(reports_dir, 'episode'))

# Master postmortem
master_status, master_md, _ = render_route('/reports/postmortem-full-48.md')
if master_status == 200
  File.write(File.join(reports_dir, 'postmortem-full-48.md'), master_md, encoding: 'UTF-8')
  puts "✓ Master postmortem -> reports/postmortem-full-48.md (#{master_md.bytesize} bytes)"
end

# Individual bulletins
(1..48).each do |id|
  _, md, _ = render_route("/reports/episode/#{id}.md")
  File.write(File.join(reports_dir, 'episode', "#{id}.md"), md, encoding: 'UTF-8') if md

  _, json_data, _ = render_route("/reports/episode/#{id}.json")
  File.write(File.join(reports_dir, 'episode', "#{id}.json"), json_data, encoding: 'UTF-8') if json_data
end
puts "✓ Exportados 48 boletines Markdown y STIX JSON en reports/episode/"

puts "¡Exportación completada con éxito!"
