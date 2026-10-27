#!/bin/zsh
set -euo pipefail

PROJECT_ROOT="${0:A:h}"
cd "$PROJECT_ROOT"

PORT="${PORT:-4567}"
URL="http://127.0.0.1:${PORT}/mobile"

command -v bundle >/dev/null 2>&1 || {
  print -u2 -- "Error: falta Bundler. Ejecuta ./instalador.zsh primero."
  exit 1
}

bundle check >/dev/null 2>&1 || {
  print -u2 -- "Error: faltan dependencias. Ejecuta ./instalador.zsh primero."
  exit 1
}

if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  print -u2 -- "Aviso: el puerto $PORT ya está ocupado."
  print -u2 -- "Si servidor.zsh está activo, puedes detenerlo con Ctrl+C o ejecutar en otro puerto:"
  print -u2 -- "  PORT=4568 ./servidor_movil.zsh"
  exit 1
fi

server_pid=""
cleanup() {
  if [[ -n "$server_pid" ]] && kill -0 "$server_pid" 2>/dev/null; then
    kill "$server_pid" 2>/dev/null || true
    wait "$server_pid" 2>/dev/null || true
  fi
}
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

# Detectar la dirección IP local para probar desde un teléfono físico en la misma red Wi-Fi
LAN_IP=""
if command -v ipconfig >/dev/null 2>&1; then
  LAN_IP="$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || true)"
elif command -v hostname >/dev/null 2>&1; then
  LAN_IP="$(hostname -I 2>/dev/null | awk '{print $1}' || true)"
fi

print -- "================================================================="
print -- "  CYBERIA-MED // SERVIDOR MÓVIL (MODO EXCLUSIVO FEED SOCIAL P2P) "
print -- "================================================================="
print -- "  Interface móvil ligera: caja de texto 2,000 caracteres y feed en vivo"
print -- "  Paleta: Queen Chrysalis #523 • Sin autenticación"
print -- "-----------------------------------------------------------------"
print -- "  🖥️  Navegador Local (Firefox / Modo Responsive): $URL"
if [[ -n "$LAN_IP" ]]; then
  print -- "  📱  Desde tu teléfono real (misma red Wi-Fi):   http://${LAN_IP}:${PORT}/mobile"
fi
print -- "================================================================="

# Forzar modo móvil estricto en el backend
export CYBERIA_FORCE_MOBILE=1

# Escuchar en 0.0.0.0 para que tanto localhost como tu teléfono por Wi-Fi puedan conectarse
bundle exec rackup -o 0.0.0.0 -p "$PORT" config.ru &
server_pid=$!

ready=false
for attempt in {1..60}; do
  if ! kill -0 "$server_pid" 2>/dev/null; then
    wait "$server_pid" || true
    print -u2 -- "Error: el servidor terminó antes de estar disponible."
    exit 1
  fi

  if curl --silent --fail "$URL" --output /dev/null; then
    ready=true
    break
  fi
  sleep 0.5
done

if [[ "$ready" != true ]]; then
  print -u2 -- "Error: el servidor móvil no respondió en $URL."
  exit 1
fi

open "$URL"
print -- "✓ Muro social móvil abierto en el navegador. Pulsa Ctrl+C para detener."
wait "$server_pid"
