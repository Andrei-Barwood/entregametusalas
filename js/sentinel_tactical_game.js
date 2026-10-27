/* ==========================================================================
   CYBERIA-MED // SOC Console v19.96
   SECCIÓN 2: CONSOLA TÁCTICA INTERACTIVA // NITE TEAM 4 & KALI LINUX SANDBOX
   Diseñado para el Pod de Ciberseguridad Hospitalaria de Cisco NetAcad
   100% Mock Sandbox Seguro (Cero impacto en el sistema anfitrión)
   ========================================================================== */

(() => {
  'use strict';

  // --- Sistema de Audio Retro-Futurista en Web Audio API (Opcional & Sutil) ---
  let audioCtx = null;
  function playBeep(freq = 640, type = 'sine', duration = 0.05, gain = 0.03) {
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (!audioCtx || audioCtx.state === 'suspended') {
        audioCtx && audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      g.gain.setValueAtTime(gain, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (_) {
      // Audio silencioso si el navegador bloquea autoplay
    }
  }

  // --- Estado Global del Juego Táctico ---
  const state = {
    episode: null,
    session: null,
    targetIp: '10.19.96.01',
    targetAsset: 'InfusionPump-ICU-01',
    clinicalPort: 8080,
    clinicalProtocol: 'HL7-FHIR v4',
    vulnerabilityCve: 'CVE-2027-0101',
    cvssScore: 8.2,
    mitreTechnique: 'T1195',
    isMitigated: false,
    ghostSync: 45.0,
    vitalParameter: 'SOBREDOSIS: 145 mL/h [CRÍTICO]',
    executedCommands: [],
    history: [],
    historyIndex: -1,
    warmupTimer: null,
    warmupSeconds: 180, // 3 minutos
    bashScript: ''
  };

  // Mapeo temático de puertos clínicos por protocolo
  function resolveClinicalPort(protocol) {
    const proto = (protocol || '').toUpperCase();
    if (proto.includes('DICOM')) return 104;
    if (proto.includes('HL7') && proto.includes('MLLP')) return 2575;
    if (proto.includes('FHIR') || proto.includes('REST') || proto.includes('HTTP')) return 8080;
    if (proto.includes('MODBUS') || proto.includes('PLC') || proto.includes('61131')) return 502;
    if (proto.includes('BACNET')) return 47808;
    if (proto.includes('MQTT') || proto.includes('IOMT')) return 8883;
    if (proto.includes('PACEMAKER') || proto.includes('BLUETOOTH')) return 4433;
    return 8080;
  }

  // Mapeo temático de parámetros vitales anómalos según tipo de activo
  function resolveAnomalousVitals(assetName, cve, cvss) {
    const asset = (assetName || '').toLowerCase();
    if (asset.includes('pump') || asset.includes('infus')) {
      return {
        critical: `SOBREDOSIS: ${(80 + (cvss * 8)).toFixed(0)} mL/h [PELIGRO DE TOXICIDAD]`,
        nominal: 'DOSIFICACIÓN SEGURA: 20 mL/h [ESTABLE]'
      };
    }
    if (asset.includes('pacemaker') || asset.includes('cardio') || asset.includes('ecg')) {
      return {
        critical: `ARRITMIA SEVERA: ${(120 + (cvss * 4)).toFixed(0)} BPM [DESFIBRILACIÓN LISTA]`,
        nominal: 'RITMO SINUSAL: 72 BPM [NOMINAL]'
      };
    }
    if (asset.includes('mri') || asset.includes('scanner') || asset.includes('reson')) {
      return {
        critical: `PRESIÓN HELIO: ${(7.5 + (cvss * 0.3)).toFixed(1)} bar [RIESGO QUENCH]`,
        nominal: 'CRIÓGENO HELIO: 1.2 bar [ESTABLE]'
      };
    }
    if (asset.includes('ecmo') || asset.includes('ventil') || asset.includes('respir')) {
      return {
        critical: `VOLUMEN MINUTO: ${(14 + (cvss * 0.8)).toFixed(1)} L/min [BAROTRAUMA]`,
        nominal: 'VOLUMEN TIDAL: 6.0 L/min [VENTILACIÓN NOMINAL]'
      };
    }
    return {
      critical: `EXFILTRACIÓN ACTIVA: ${(cvss * 12).toFixed(0)} KB/s [TRÁFICO C2 HOSTIL]`,
      nominal: 'CANAL CIFRADO: 0 anom / mTLS VERIFICADO'
    };
  }

  // --- Plantillas Robustas con Comentarios Auto-generados por Comando ---
  function resolveTokenTemplate(rawToken) {
    const t = rawToken.trim();

    // 1. Comandos principales: se insertan como plantillas completas y comentadas
    if (t === 'nmap') {
      return `# [RECONOCIMIENTO] Escaneo de puerto clínico y versión de servicio en el objetivo\nnmap -sV -p ${state.clinicalPort} ${state.targetIp}`;
    }
    if (t === 'iptables') {
      return `# [PREVENCIÓN] Aislamiento perimetral - Regla de filtrado para contener la amenaza\niptables -I FORWARD -p tcp --dport ${state.clinicalPort} -d ${state.targetIp} -j DROP`;
    }
    if (t === 'suricata-update' || t === 'suricata') {
      return `# [DETECCIÓN] Actualización de firmas EDR y purga de buffers maliciosos\nsuricata-update --check-cve ${state.vulnerabilityCve}`;
    }
    if (t === 'openssl') {
      return `# [MITIGACIÓN] Validación criptográfica de túnel mTLS y cadena de certificados\nopenssl s_client -connect ${state.targetIp}:${state.clinicalPort} -brief </dev/null`;
    }
    if (t === 'systemctl') {
      return `# [RESPUESTA] Reinicio controlado de agentes EDR y telemetría clínica\nsystemctl restart iomt-sentinel-agent`;
    }
    if (t === 'logger') {
      return `# [AUDITORÍA] Registro forense en Syslog del SOC para ${state.vulnerabilityCve}\nlogger -t MEDSOC_INCIDENT "Parche para ${state.vulnerabilityCve} aplicado en ${state.targetAsset}"`;
    }
    if (t === 'sed') {
      return `# [PURGA] Sanitización de buffer y eliminación de patrones maliciosos\nsed -i 's/EXPLOIT_PAYLOAD/SAFE_STREAM/g' /var/log/medsec/buffer.stream`;
    }
    if (t === 'curl') {
      return `# [API REST] Sonda de verificación de estado y cuarentena del actuador IoMT\ncurl -s -X POST https://${state.targetIp}:${state.clinicalPort}/api/v1/clinical/quarantine`;
    }
    if (t === 'tcpdump') {
      return `# [FORENSE] Captura de tráfico de red en puerto clínico para análisis de pcap\ntcpdump -i eth0 -n "port ${state.clinicalPort}" -c 10 -w /tmp/forensic_${state.vulnerabilityCve}.pcap`;
    }
    if (t === 'sha256sum') {
      return `# [INTEGRIDAD] Cálculo y verificación de hash SHA-256 de parche\necho "${state.vulnerabilityCve}:VERIFIED" | sha256sum > /var/run/aegis9/last_patch.sha256`;
    }
    if (t === 'echo') {
      return `echo "[+] Estado de mitigación verificado para ${state.vulnerabilityCve}"`;
    }
    if (t === 'sleep 1') {
      return `sleep 1`;
    }

    // 2. Estructuras de Control Bash
    if (t === '#!/bin/bash') {
      return `#!/bin/bash\n# ============================================================================== #\n# CYBERIA-MED // CISCO NETACAD HOSPITAL CYBER DEFENSE SCRIPT\n# ============================================================================== #\nset -e`;
    }
    if (t === 'set -e') {
      return `# Abortar ejecución inmediatamente si algún comando produce error\nset -e`;
    }
    if (t.startsWith('if')) {
      return `if [ $? -eq 0 ]; then\n  echo "[+] Operación completada exitosamente."\nelse\n  echo "[-] Falla en contramedida clínica."\n  exit 1\nfi`;
    }

    // 3. Tokens o parámetros directos
    return t;
  }

  // --- Validador Sintáctico y Lógico del Script de Bash ---
  function validateScriptSyntaxAndLogic(scriptContent) {
    const content = (scriptContent || '').trim();
    const errors = [];
    const warnings = [];

    if (!content || content.length < 15) {
      errors.push('El script está vacío o incompleto (se requieren comandos ejecutables de mitigación).');
      return { isValid: false, errors, warnings };
    }

    // 1. Comprobar Shebang
    if (!content.includes('#!/bin/bash') && !content.includes('#!/bin/sh')) {
      errors.push("Falta la cabecera intérprete '#!/bin/bash' requerida para ejecutar el script.");
    }

    // 2. Extraer líneas de código ejecutables (omitiendo líneas que sean solo comentarios o vacías)
    const executableLines = content.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0 && !line.startsWith('#'));

    const executableCode = executableLines.join('\n');

    if (executableLines.length === 0) {
      errors.push('El script solo contiene comentarios. Se requieren comandos activos de remediación.');
      return { isValid: false, errors, warnings };
    }

    // 3. Comprobar comillas balanceadas en código ejecutable
    const countQuotes = (executableCode.match(/"/g) || []).length;
    if (countQuotes % 2 !== 0) {
      errors.push('Error de sintaxis: Comillas dobles (") sin cerrar.');
    }
    const countSingleQuotes = (executableCode.match(/'/g) || []).length;
    if (countSingleQuotes % 2 !== 0) {
      errors.push("Error de sintaxis: Comillas simples (') sin cerrar.");
    }

    // 4. Comprobar bloques if / fi balanceados
    const ifMatches = (executableCode.match(/\bif\b/g) || []).length;
    const fiMatches = (executableCode.match(/\bfi\b/g) || []).length;
    if (ifMatches !== fiMatches) {
      errors.push(`Error de estructura Bash: Se detectaron ${ifMatches} 'if' pero solo ${fiMatches} cierres 'fi'.`);
    }

    // 5. Comprobar operadores huérfanos al final de línea
    executableLines.forEach((line, idx) => {
      if (line.endsWith('&&') || line.endsWith('||') || line.endsWith('|')) {
        errors.push(`Línea ${idx + 1}: Operador incompleto al final de la instrucción ('${line.slice(-2)}').`);
      }
    });

    // 6. Análisis Lógico de Ciberdefensa Clínica:
    const hasNmap = executableCode.includes('nmap');
    const hasIptables = executableCode.includes('iptables');
    const hasDrop = executableCode.includes('DROP') || executableCode.includes('REJECT');
    const hasQuarantine = executableCode.includes('quarantine') || executableCode.includes('quarantine_node');
    const hasCanonicalCmd = state.episode?.pillars?.mitigation?.cli_command &&
      executableCode.includes(state.episode.pillars.mitigation.cli_command.split(' ')[0]);

    // Caso de Falsa Mitigación: Solo ejecutó nmap
    if (hasNmap && !hasIptables && !hasQuarantine && !hasCanonicalCmd && !hasDrop) {
      errors.push("El script únicamente realiza escaneo/reconocimiento con 'nmap', pero NO aplica contramedidas de mitigación (iptables -j DROP o cuarentena). La vulnerabilidad sigue abierta.");
    }

    // Exigir contramedida activa
    if (!hasIptables && !hasQuarantine && !hasCanonicalCmd && !hasDrop) {
      errors.push("Falta contramedida de contención: Se requiere regla de aislamiento perimetral (ej. 'iptables -I FORWARD -p tcp --dport ... -j DROP').");
    }

    // Validación de parámetros en iptables
    if (hasIptables) {
      if (!hasDrop) {
        errors.push("Regla iptables incompleta: Falta la acción de bloqueo (ej. '-j DROP' o '-j REJECT').");
      }
      const hasPortSpec = executableCode.includes('--dport') || executableCode.includes('-p');
      if (!hasPortSpec) {
        errors.push("Regla iptables imprecisa: Falta especificar protocolo ('-p tcp') o puerto ('--dport $PORT').");
      }
    }

    // Verificar que referencie el objetivo o puerto del episodio
    const referencesTarget = executableCode.includes(state.targetIp) ||
      executableCode.includes('$TARGET_IP') ||
      executableCode.includes(String(state.clinicalPort)) ||
      executableCode.includes('$PORT');

    if (!referencesTarget && !hasCanonicalCmd) {
      errors.push(`El script no apunta a la dirección IP (${state.targetIp}) ni al puerto (${state.clinicalPort}) del activo en riesgo.`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  // --- Validación Visual en Tiempo Real del Contenido del Script ---
  function validateScriptContent(content) {
    const badge = document.getElementById('studio-script-valid-badge');
    if (!badge) return;

    const analysis = validateScriptSyntaxAndLogic(content);

    if (analysis.isValid) {
      badge.textContent = 'ESTADO: SCRIPT VÁLIDO [LISTO PARA EJECUTAR]';
      badge.style.background = '#00F200';
      badge.style.color = '#0E1111';
    } else if (analysis.errors.length > 0 && content.trim().length > 15) {
      badge.textContent = `ESTADO: SCRIPT MALFORMADO [${analysis.errors.length} ERROR(ES)]`;
      badge.style.background = '#FF4444';
      badge.style.color = '#FFFFFF';
      badge.title = analysis.errors.join('\n');
    } else {
      badge.textContent = 'ESTADO: VACÍO / INCOMPLETO';
      badge.style.background = 'var(--iris-bg-deep-3)';
      badge.style.color = 'var(--hud-glass-outline)';
      badge.title = 'Agrega shebang, aislamiento perimetral y parámetros del objetivo.';
    }
  }

  // --- Inicialización de Eventos del DOM ---
  document.addEventListener('DOMContentLoaded', () => {
    initTacticalEvents();
    startWarmupTimer();
  });

  function initTacticalEvents() {
    const input = document.getElementById('tactical-cli-input');
    const sendBtn = document.getElementById('btn-tactical-send');
    const warmupBtn = document.getElementById('btn-tactical-warmup');
    const studioBtn = document.getElementById('btn-tactical-script-studio');
    const closeStudioBtn = document.getElementById('btn-close-script-studio');
    const exportBtn = document.getElementById('btn-tactical-export-evidence');
    const runScriptBtn = document.getElementById('btn-studio-run-script');
    const resetScriptBtn = document.getElementById('btn-studio-reset-script');
    const templateNetacadBtn = document.getElementById('btn-studio-template-netacad');
    const clearScriptBtn = document.getElementById('btn-studio-clear-script');
    const copyScriptBtn = document.getElementById('btn-studio-copy-script');
    const scriptEditor = document.getElementById('tactical-script-editor');

    // Atajos de botones rápidos de la terminal
    const quickPistas = document.getElementById('btn-quick-pistas');
    const quickNmap = document.getElementById('btn-quick-nmap');
    const quickIptables = document.getElementById('btn-quick-iptables');
    const quickPatch = document.getElementById('btn-quick-patch');
    const quickHelp = document.getElementById('btn-quick-help');

    if (quickPistas) quickPistas.addEventListener('click', () => executeCommandLine('pistas'));
    if (quickNmap) quickNmap.addEventListener('click', () => executeCommandLine(`nmap -sV -p ${state.clinicalPort} ${state.targetIp}`));
    if (quickIptables) quickIptables.addEventListener('click', () => executeCommandLine(`iptables -I FORWARD -p tcp --dport ${state.clinicalPort} -d ${state.targetIp} -j DROP`));
    if (quickPatch) quickPatch.addEventListener('click', () => executeCommandLine('./deploy_patch.sh'));
    if (quickHelp) quickHelp.addEventListener('click', () => executeCommandLine('help'));

    // Envío por tecla ENTER o botón
    if (input) {
      input.addEventListener('keydown', handleInputKeydown);
    }
    if (sendBtn) {
      sendBtn.addEventListener('click', () => {
        if (!input) return;
        const cmd = input.value.trim();
        if (cmd) {
          executeCommandLine(cmd);
          input.value = '';
        }
      });
    }

    // Controles de Bash Script Studio
    if (studioBtn) {
      studioBtn.addEventListener('click', toggleScriptStudio);
    }
    if (closeStudioBtn) {
      closeStudioBtn.addEventListener('click', () => toggleScriptStudio(false));
    }
    if (warmupBtn) {
      warmupBtn.addEventListener('click', resetWarmupTimer);
    }
    if (exportBtn) {
      exportBtn.addEventListener('click', exportNetacadEvidence);
    }

    if (runScriptBtn) {
      runScriptBtn.addEventListener('click', () => {
        toggleScriptStudio(false);
        executeCommandLine('./deploy_patch.sh');
      });
    }
    if (resetScriptBtn) {
      resetScriptBtn.addEventListener('click', regenerateBashScript);
    }
    if (templateNetacadBtn) {
      templateNetacadBtn.addEventListener('click', loadNetacadLabTemplate);
    }

    // Botones de utilidad del editor
    if (clearScriptBtn && scriptEditor) {
      clearScriptBtn.addEventListener('click', () => {
        scriptEditor.value = '';
        validateScriptContent('');
        updateCursorPosition(scriptEditor);
        scriptEditor.focus();
        playBeep(450, 'sine', 0.05, 0.02);
      });
    }

    if (copyScriptBtn && scriptEditor) {
      copyScriptBtn.addEventListener('click', () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(scriptEditor.value).then(() => {
            copyScriptBtn.textContent = '✓ COPIADO';
            setTimeout(() => { copyScriptBtn.textContent = '📋 COPIAR'; }, 1500);
            playBeep(880, 'sine', 0.08, 0.03);
          });
        }
      });
    }

    // --- Paleta Clicable: Inserción de Plantillas Robustas y Comentadas ---
    const paletteBox = document.getElementById('script-token-palette-box');
    if (paletteBox && scriptEditor) {
      paletteBox.addEventListener('click', (e) => {
        const btn = e.target.closest('.script-word-token');
        if (!btn) return;
        const rawToken = btn.getAttribute('data-token');
        const isBlock = btn.getAttribute('data-block') === 'true' || btn.classList.contains('token-cmd');

        if (rawToken) {
          const resolvedTemplate = resolveTokenTemplate(rawToken);
          insertTextAtCursor(scriptEditor, resolvedTemplate, isBlock);
        }
      });
    }

    // Bloques rápidos de 1-Clic
    const btnBlockIsolate = document.getElementById('btn-insert-block-isolate');
    const btnBlockSanitize = document.getElementById('btn-insert-block-sanitize');
    const btnBlockCrypto = document.getElementById('btn-insert-block-crypto');
    const btnBlockRestart = document.getElementById('btn-insert-block-restart');

    if (btnBlockIsolate && scriptEditor) {
      btnBlockIsolate.addEventListener('click', () => {
        insertTextAtCursor(scriptEditor, `# 1. Aislamiento Perimetral\niptables -I FORWARD -p tcp --dport ${state.clinicalPort} -d ${state.targetIp} -j DROP\necho "[+] Aislamiento activo en ${state.targetIp}."`, true);
      });
    }
    if (btnBlockSanitize && scriptEditor) {
      btnBlockSanitize.addEventListener('click', () => {
        insertTextAtCursor(scriptEditor, `# 2. Sanitización y Detección\nsuricata-update --check-cve ${state.vulnerabilityCve}\nsed -i 's/EXPLOIT/SAFE/g' /var/log/medsec/stream.log\necho "[+] Buffers clínicos sanitizados."`, true);
      });
    }
    if (btnBlockCrypto && scriptEditor) {
      btnBlockCrypto.addEventListener('click', () => {
        insertTextAtCursor(scriptEditor, `# 3. Verificación mTLS y Hash\nopenssl s_client -connect ${state.targetIp}:${state.clinicalPort} -brief </dev/null\necho "${state.vulnerabilityCve}:VERIFIED" | sha256sum\necho "[+] Canal mTLS verificado."`, true);
      });
    }
    if (btnBlockRestart && scriptEditor) {
      btnBlockRestart.addEventListener('click', () => {
        insertTextAtCursor(scriptEditor, `# 4. Reanudación Segura y Registro\nsystemctl restart iomt-sentinel-agent\nlogger -t MEDSOC "Parche aplicado en ${state.targetAsset}"\necho "[+] Servicio restablecido en modo seguro."`, true);
      });
    }

    // Seguimiento del cursor y validación en tiempo real del editor
    if (scriptEditor) {
      ['click', 'keyup', 'input', 'select'].forEach(ev => {
        scriptEditor.addEventListener(ev, () => {
          updateCursorPosition(scriptEditor);
          validateScriptContent(scriptEditor.value);
        });
      });
    }

    // Tecla rápida global F2 para abrir el Bash Script Studio
    window.addEventListener('keydown', (e) => {
      if (e.key === 'F2') {
        e.preventDefault();
        toggleScriptStudio();
      } else if (e.key === 'Escape') {
        toggleScriptStudio(false);
      }
    });
  }

  // --- Inserción Inteligente de Palabras/Plantillas en la Posición del Cursor ---
  function insertTextAtCursor(textarea, text, isBlock = false) {
    if (!textarea) return;

    const start = textarea.selectionStart || 0;
    const end = textarea.selectionEnd || 0;
    const val = textarea.value;

    let insertValue = text;

    if (isBlock || text.includes('\n')) {
      // Bloques multilínea: asegurar que empiecen y terminen en nueva línea
      const beforeCursor = val.slice(0, start);
      if (beforeCursor.length > 0 && !beforeCursor.endsWith('\n')) {
        insertValue = '\n' + insertValue;
      }
      if (!insertValue.endsWith('\n')) {
        insertValue = insertValue + '\n';
      }
    } else {
      // Palabras / flags individuales: separar con espacio si el caracter previo no es espacio o salto
      if (start > 0) {
        const prevChar = val.charAt(start - 1);
        if (prevChar !== ' ' && prevChar !== '\n' && prevChar !== '\t') {
          insertValue = ' ' + insertValue;
        }
      }
    }

    textarea.value = val.slice(0, start) + insertValue + val.slice(end);
    const newPos = start + insertValue.length;
    textarea.selectionStart = newPos;
    textarea.selectionEnd = newPos;
    textarea.focus();

    playBeep(1100 + Math.random() * 200, 'triangle', 0.02, 0.008);
    updateCursorPosition(textarea);
    validateScriptContent(textarea.value);
  }

  // --- Actualización de la Posición del Cursor ---
  function updateCursorPosition(textarea) {
    const posEl = document.getElementById('studio-cursor-pos');
    if (!posEl || !textarea) return;
    const val = textarea.value.slice(0, textarea.selectionStart);
    const lines = val.split('\n');
    const lineNo = lines.length;
    const colNo = lines[lines.length - 1].length + 1;
    posEl.textContent = `Cursor: Línea ${lineNo}, Col ${colNo}`;
  }

  // --- Temporizador de Calentamiento NetAcad (Warm-Up 3 Minutos) ---
  function startWarmupTimer() {
    if (state.warmupTimer) clearInterval(state.warmupTimer);
    updateWarmupDisplay();
    state.warmupTimer = setInterval(() => {
      if (state.warmupSeconds > 0) {
        state.warmupSeconds--;
        updateWarmupDisplay();
      } else {
        clearInterval(state.warmupTimer);
        const timerEl = document.getElementById('tactical-warmup-timer');
        if (timerEl) {
          timerEl.textContent = 'WARM-UP: ¡TIEMPO CONCLUIDO! POD LISTO PARA NETACAD';
          timerEl.style.color = 'var(--iris-warning-high)';
        }
      }
    }, 1000);
  }

  function resetWarmupTimer() {
    state.warmupSeconds = 180;
    startWarmupTimer();
    printTermLog('[WARM-UP] Temporizador de calentamiento reiniciado a 03:00. ¡Manos al teclado!', 'info');
    playBeep(880, 'sine', 0.08, 0.04);
  }

  function updateWarmupDisplay() {
    const timerEl = document.getElementById('tactical-warmup-timer');
    if (!timerEl) return;
    const m = Math.floor(state.warmupSeconds / 60);
    const s = state.warmupSeconds % 60;
    const text = `WARM-UP: ${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    timerEl.textContent = text;
    if (state.warmupSeconds <= 30) {
      timerEl.style.color = '#FF4444';
    } else if (state.warmupSeconds <= 60) {
      timerEl.style.color = 'var(--iris-warning-high)';
    } else {
      timerEl.style.color = 'var(--bauble-cyan-bright)';
    }
  }

  // --- Manejo del Teclado (Historial y Autocompletado con TAB) ---
  const AUTOCOMPLETE_COMMANDS = [
    'pistas',
    'netacad',
    'nmap -sV -p',
    'iptables -I FORWARD -p tcp',
    'iptables -A INPUT -p tcp',
    'tcpdump -i eth0 -n',
    'openssl s_client -connect',
    'curl -s -X POST',
    'systemctl restart iomt-sentinel',
    'systemctl status iomt-agent',
    './deploy_patch.sh',
    'bash deploy_patch.sh',
    'help',
    'clear',
    'history',
    'whoami',
    'uname -a',
    'warmup',
    'nano deploy_patch.sh',
    'script'
  ];

  function handleInputKeydown(e) {
    const input = e.target;
    playBeep(1200 + Math.random() * 300, 'triangle', 0.015, 0.005);

    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = input.value.trim();
      if (cmd) {
        state.history.push(cmd);
        state.historyIndex = state.history.length;
        executeCommandLine(cmd);
        input.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.history.length > 0 && state.historyIndex > 0) {
        state.historyIndex--;
        input.value = state.history[state.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.historyIndex < state.history.length - 1) {
        state.historyIndex++;
        input.value = state.history[state.historyIndex];
      } else {
        state.historyIndex = state.history.length;
        input.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = input.value.toLowerCase();
      const match = AUTOCOMPLETE_COMMANDS.find(c => c.toLowerCase().startsWith(current));
      if (match) {
        input.value = match;
      } else if (current.startsWith('nmap')) {
        input.value = `nmap -sV -p ${state.clinicalPort} ${state.targetIp}`;
      } else if (current.startsWith('iptables')) {
        input.value = `iptables -I FORWARD -p tcp --dport ${state.clinicalPort} -d ${state.targetIp} -j DROP`;
      }
    }
  }

  // --- Salida de Terminal en el DOM ---
  function printTermLog(text, level = 'info') {
    const out = document.getElementById('tactical-term-output');
    if (!out) return;

    const line = document.createElement('div');
    line.style.margin = '0.15rem 0';
    line.style.wordBreak = 'break-word';

    if (level === 'cmd') {
      line.innerHTML = `<span style="color: var(--bauble-cyan-bright); font-weight: bold;">kali@cyberia-soc:~/pod-soc$</span> <span style="color: #FFFFFF; font-weight: bold;">${escapeHtml(text)}</span>`;
    } else if (level === 'success') {
      line.innerHTML = `<span style="color: #00F200; font-weight: bold;">[+]</span> ${escapeHtml(text)}`;
    } else if (level === 'warn') {
      line.innerHTML = `<span style="color: var(--iris-warning-high); font-weight: bold;">[!]</span> ${escapeHtml(text)}`;
    } else if (level === 'error') {
      line.innerHTML = `<span style="color: #FF5555; font-weight: bold;">[-]</span> ${escapeHtml(text)}`;
    } else if (level === 'ascii') {
      line.style.color = 'var(--magic-highlight)';
      line.textContent = text;
    } else {
      line.innerHTML = `<span style="color: var(--hud-glass-outline);">[*]</span> ${escapeHtml(text)}`;
    }

    out.appendChild(line);
    out.scrollTop = out.scrollHeight;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // --- Motor de Comandos Mock de Kali Linux ---
  function executeCommandLine(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    printTermLog(cmd, 'cmd');
    state.executedCommands.push({ timestamp: new Date().toISOString(), command: cmd });

    const lower = cmd.toLowerCase();

    // Comandos de Utilidad General
    if (lower === 'clear' || lower === 'cls') {
      const out = document.getElementById('tactical-term-output');
      if (out) out.innerHTML = '';
      return;
    }

    if (lower === 'history') {
      if (state.history.length === 0) {
        printTermLog('No hay comandos en el buffer de historial.', 'info');
      } else {
        state.history.forEach((h, i) => {
          printTermLog(`  ${String(i + 1).padStart(3, ' ')}  ${h}`, 'info');
        });
      }
      return;
    }

    if (lower === 'whoami') {
      printTermLog('kali (SOC Tier 1 Analyst // Cisco NetAcad Hospital Cyber Defense Pod)', 'success');
      return;
    }

    if (lower === 'uname -a') {
      printTermLog('Linux cyberia-soc-kali 6.8.11-arm64 #1 SMP PREEMPT_DYNAMIC Kali-Hospital-IoMT GNU/Linux', 'info');
      return;
    }

    if (lower === 'help' || lower === 'ayuda' || lower === '?') {
      printHelp();
      return;
    }

    if (lower === 'pistas' || lower === 'pista' || lower === 'netacad' || lower === 'hint') {
      printNetacadHint();
      return;
    }

    if (lower === 'warmup') {
      resetWarmupTimer();
      return;
    }

    if (lower === 'script' || lower === 'studio' || lower.startsWith('nano') || lower.startsWith('vim') || lower.startsWith('cat deploy')) {
      toggleScriptStudio(true);
      printTermLog('Abriendo BASH SCRIPT STUDIO [F2]... Haz clic en las palabras de la paleta izquierda para ir autocompletando.', 'info');
      return;
    }

    // 1. Escaneo con NMAP
    if (lower.startsWith('nmap')) {
      simulateNmapScan(cmd);
      return;
    }

    // 2. Filtrado con IPTABLES / NFTABLES
    if (lower.startsWith('iptables') || lower.startsWith('nft')) {
      simulateIptables(cmd);
      return;
    }

    // 3. Captura con TCPDUMP / TSHARK
    if (lower.startsWith('tcpdump') || lower.startsWith('tshark')) {
      simulateTcpdump(cmd);
      return;
    }

    // 4. Verificación TLS con OPENSSL
    if (lower.startsWith('openssl')) {
      simulateOpenssl(cmd);
      return;
    }

    // 5. Invocación REST con CURL
    if (lower.startsWith('curl')) {
      simulateCurl(cmd);
      return;
    }

    // 6. Manejo de Servicios con SYSTEMCTL
    if (lower.startsWith('systemctl')) {
      simulateSystemctl(cmd);
      return;
    }

    // 7. Ejecución de Script de Mitigación
    if (
      lower === './deploy_patch.sh' ||
      lower === 'bash deploy_patch.sh' ||
      lower === 'sh deploy_patch.sh' ||
      lower === './patch.sh' ||
      lower === 'patch' ||
      lower === 'deploy' ||
      (state.episode && lower === (state.episode.pillars?.mitigation?.cli_command || '').toLowerCase())
    ) {
      executeFullPatchWorkflow();
      return;
    }

    // Comando desconocido pero no bloqueante
    printTermLog(`bash: comando no encontrado: '${cmd.split(' ')[0]}'. Tipea 'pistas' para orientarte o 'help' para ver comandos Kali.`, 'warn');
  }

  function printHelp() {
    printTermLog('=== KALI LINUX TACTICAL TOOLSET // CYBERIA HOSPITAL IoMT POD ===', 'ascii');
    printTermLog('  pistas / netacad             : Orientación y recomendación metodológica para el episodio', 'warn');
    printTermLog('  nmap -sV -p <puerto> <ip>    : Escaneo clínico de puertos y banner-grabbing', 'info');
    printTermLog('  iptables -I FORWARD ...      : Inyección perimetral de reglas de filtrado', 'info');
    printTermLog('  tcpdump -i eth0 -n           : Sniffer de paquetes y telemetría no cifrada', 'info');
    printTermLog('  openssl s_client -connect .. : Auditoría de mTLS y cadena criptográfica', 'info');
    printTermLog('  curl -s -X POST <api-url>    : Sonda REST/FHIR hacia el actuador del dispositivo', 'info');
    printTermLog('  systemctl restart <daemon>   : Reinicio controlado de agentes EDR y telemetría', 'info');
    printTermLog('  ./deploy_patch.sh            : Ejecuta el script de parche tras validación estricta', 'info');
    printTermLog('  script / F2                  : Abre el BASH SCRIPT STUDIO con paleta clicable', 'info');
    printTermLog('  warmup                       : Reinicia el temporizador de 3 min para calentar dedos', 'info');
    printTermLog('================================================================', 'ascii');
  }

  function printNetacadHint() {
    const epCode = state.episode?.code || 'EP01';
    const cve = state.vulnerabilityCve;
    const proto = state.clinicalProtocol;
    const port = state.clinicalPort;

    printTermLog(`================================================================`, 'ascii');
    printTermLog(`[ORIENTACIÓN TÁCTICA // CISCO NETACAD LAB // ${epCode}]`, 'ascii');
    printTermLog(`  Módulo Cisco Relacionado: Endpoint Vulnerability Assessment & Network Defense`, 'info');
    printTermLog(`  Objetivo Clínico        : ${state.targetAsset} (${state.targetIp})`, 'info');
    printTermLog(`  Superficie Expuesta     : Puerto TCP ${port} (${proto})`, 'warn');
    printTermLog(`  Vulnerabilidad          : ${cve} (CVSS ${state.cvssScore})`, 'warn');
    printTermLog(`  PASOS RECOMENDADOS PARA DEPURAR:`, 'info');
    printTermLog(`    1. Identifica el servicio con: nmap -sV -p ${port} ${state.targetIp}`, 'info');
    printTermLog(`    2. Bloquea el tráfico C2 con : iptables -I FORWARD -p tcp --dport ${port} -d ${state.targetIp} -j DROP`, 'info');
    printTermLog(`    3. Abre el constructor con [F2] y haz clic en las palabras de la paleta para ensamblar el script.`, 'success');
    printTermLog(`    4. Recuerda: Nmap por sí solo NO remedia. El script debe contener aislamiento (iptables DROP).`, 'warn');
    printTermLog(`================================================================`, 'ascii');
  }

  // --- Simulaciones Especializadas de Comandos Kali ---
  function simulateNmapScan(cmd) {
    playBeep(980, 'sine', 0.1, 0.03);
    printTermLog(`Iniciando Nmap 7.95 ( https://nmap.org ) en ${state.targetIp}...`, 'info');
    setTimeout(() => {
      printTermLog(`Nmap scan report for ${state.targetAsset}.hospital.local (${state.targetIp})`, 'info');
      printTermLog(`Host is up (0.00031s latency).`, 'info');
      printTermLog(`PORT     STATE SERVICE     VERSION`, 'ascii');
      printTermLog(`${String(state.clinicalPort).padEnd(8, ' ')}/tcp OPEN  ${state.clinicalProtocol.toLowerCase().slice(0, 10).padEnd(11, ' ')} ${state.clinicalProtocol} (VULNERABLE: ${state.vulnerabilityCve})`, 'warn');
      printTermLog(`MAC Address: 00:50:56:C0:00:08 (VMware / IoMT Clinical Bridge)`, 'info');
      printTermLog(`Service Info: OS: Embedded Linux / MedSec RealTime Core 19.96`, 'info');
      printTermLog(`[SIEM TRIGGER] Se confirma servicio en riesgo. Requiere aislamiento de red o ejecución de parche.`, 'warn');
    }, 400);
  }

  function simulateIptables(cmd) {
    playBeep(1100, 'square', 0.06, 0.02);
    if (cmd.includes('-j DROP') || cmd.includes('-j REJECT') || cmd.includes('FORWARD') || cmd.includes('INPUT')) {
      printTermLog(`[+] Regla inyectada en iptables: Filtrando paquetes hacia el puerto ${state.clinicalPort}.`, 'success');
      printTermLog(`[+] Tráfico de comando y control (C2) bloqueado en ${state.targetIp}.`, 'success');
      boostGhostSync(20.0);
    } else if (cmd.includes('-L') || cmd.includes('-S') || cmd.includes('-v')) {
      printTermLog(`Chain FORWARD (policy ACCEPT 482 packets, 34KB):`, 'info');
      printTermLog(` pkts bytes target     prot opt in     out     source               destination`, 'ascii');
      printTermLog(`   42  2688 DROP       tcp  --  *      *       0.0.0.0/0            ${state.targetIp}        tcp dpt:${state.clinicalPort}`, 'success');
    } else {
      printTermLog(`[+] iptables: Operación de cadenas de red ejecutada correctamente.`, 'info');
      boostGhostSync(10.0);
    }
  }

  function simulateTcpdump(cmd) {
    playBeep(750, 'sawtooth', 0.08, 0.02);
    printTermLog(`tcpdump: verbose output suppressed, capturing on eth0 at ${state.targetIp}:${state.clinicalPort}...`, 'info');
    setTimeout(() => {
      printTermLog(`22:15:01.1042 IP 10.19.96.200.49152 > ${state.targetIp}.${state.clinicalPort}: Flags [P.], seq 1:48, ack 1`, 'info');
      printTermLog(`    PAYLOAD RAW: [${state.clinicalProtocol}] ALERT_ANOMALY >> EXPLOIT_BUFFER_OVERFLOW_${state.vulnerabilityCve}`, 'warn');
      printTermLog(`22:15:01.1048 IP ${state.targetIp}.${state.clinicalPort} > 10.19.96.200.49152: Flags [.], ack 48`, 'info');
      printTermLog(`[AUDIT] 4 paquetes capturados y remitidos al EDR Aegis-9.`, 'success');
    }, 350);
  }

  function simulateOpenssl(cmd) {
    playBeep(850, 'sine', 0.07, 0.03);
    printTermLog(`CONNECTED(00000003) to ${state.targetIp}:${state.clinicalPort}`, 'info');
    setTimeout(() => {
      printTermLog(`depth=2 C = US, O = NetAcad Cyberia Hospital CA, CN = MedSec Root Authority`, 'info');
      printTermLog(`verify return:1`, 'info');
      printTermLog(`depth=1 C = US, O = Aegis-9 Section, CN = Biocybernetic Intermediate CA`, 'info');
      printTermLog(`verify return:1`, 'info');
      printTermLog(`depth=0 CN = ${state.targetAsset}.hospital.local`, 'info');
      printTermLog(`verify return:1`, 'info');
      printTermLog(`--- Certificate Chain and mTLS handshake verified: Protocol TLSv1.3, Cipher TLS_AES_256_GCM_SHA384`, 'success');
      boostGhostSync(15.0);
    }, 300);
  }

  function simulateCurl(cmd) {
    playBeep(920, 'triangle', 0.06, 0.03);
    printTermLog(`> POST /api/v1/clinical/quarantine HTTP/1.1`, 'info');
    printTermLog(`> Host: ${state.targetIp}:${state.clinicalPort}`, 'info');
    printTermLog(`> User-Agent: Kali-MedSec-Pod/19.96`, 'info');
    setTimeout(() => {
      printTermLog(`< HTTP/1.1 200 OK`, 'success');
      printTermLog(`< Content-Type: application/json; charset=utf-8`, 'info');
      printTermLog(`< { "target": "${state.targetAsset}", "cve_mitigated": "${state.vulnerabilityCve}", "actuator_state": "FAILSAFE_NOMINAL" }`, 'success');
      boostGhostSync(20.0);
    }, 280);
  }

  function simulateSystemctl(cmd) {
    playBeep(780, 'sine', 0.05, 0.03);
    printTermLog(`systemctl: Solicitud de cambio de estado para daemon de telemetría médica en ${state.targetAsset}...`, 'info');
    setTimeout(() => {
      printTermLog(`[  OK  ] Stopped IoMT Unverified Telemetry Ingestion.`, 'info');
      printTermLog(`[  OK  ] Started Aegis9 Encrypted Clinical Broker.`, 'success');
      boostGhostSync(15.0);
    }, 250);
  }

  // --- Incremento Progresivo de Ghost Sync y Estabilización Clínica ---
  function boostGhostSync(delta) {
    state.ghostSync = Math.min(100.0, Math.round((state.ghostSync + delta) * 10) / 10);
    updateHudVitals();
    if (state.ghostSync >= 99.9 && !state.isMitigated) {
      markIncidentMitigated();
    }
  }

  // --- Ejecución Realista y Depuración Estricta de deploy_patch.sh ---
  function executeFullPatchWorkflow() {
    printTermLog(`================================================================`, 'ascii');
    printTermLog(`[*] EJECUTANDO: ./deploy_patch.sh (Verificando sintaxis y lógica Bash)...`, 'info');
    printTermLog(`================================================================`, 'ascii');

    const editor = document.getElementById('tactical-script-editor');
    const scriptContent = (editor && editor.value.trim().length > 0) ? editor.value : state.bashScript;

    // Validación estricta antes de aplicar cualquier mitigación
    const validation = validateScriptSyntaxAndLogic(scriptContent);

    if (!validation.isValid) {
      playBeep(200, 'sawtooth', 0.22, 0.06);
      printTermLog(`[-] ERROR: EJECUCIÓN DE SCRIPT ABORTADA (Código de salida: 1)`, 'error');
      printTermLog(`bash: deploy_patch.sh: Se detectaron fallas críticas de sintaxis o lógica:`, 'error');

      validation.errors.forEach(err => {
        printTermLog(`  [X] ${err}`, 'error');
      });

      const v = resolveAnomalousVitals(state.targetAsset, state.vulnerabilityCve, state.cvssScore);
      printTermLog(`[!] RESULTADO: EL PARCHE NO SE HA APLICADO.`, 'warn');
      printTermLog(`[!] El objetivo ${state.targetAsset} (${state.targetIp}) permanece bajo ataque activo.`, 'warn');
      printTermLog(`[!] Constantes clínicas en alarma: ${v.critical}`, 'warn');
      printTermLog(`[!] Ghost Sync sin cambios: ${state.ghostSync.toFixed(1)}%.`, 'warn');
      printTermLog(`>>> Abre el BASH SCRIPT STUDIO [F2] o tipea 'pistas' para estructurar el script correctamente.`, 'ascii');
      printTermLog(`================================================================`, 'ascii');

      const statusBadge = document.getElementById('tactical-status-badge');
      if (statusBadge) {
        statusBadge.textContent = 'ESTADO: COMPROMETIDO (SCRIPT RECHAZADO)';
        statusBadge.style.background = '#FF4444';
        statusBadge.style.color = '#FFFFFF';
      }
      return;
    }

    // Si el script es válido, se simula la ejecución secuencial
    playBeep(520, 'sine', 0.1, 0.04);
    printTermLog(`[+] Sintaxis de Bash y requisitos de ciberdefensa validados correctamente.`, 'success');

    const steps = [
      { text: `[1/4] Aplicando aislamiento de puerto TCP ${state.clinicalPort} con iptables...`, delay: 350, sync: 15 },
      { text: `[2/4] Verificando firma y sanitizando buffer de protocolo ${state.clinicalProtocol}...`, delay: 700, sync: 20 },
      { text: `[3/4] Validando certificado mTLS y firma SHA-256 de firmware con Aegis-9...`, delay: 1100, sync: 20 },
      { text: `[4/4] Reiniciando daemon clínico y notificando a la consola central MedSOC...`, delay: 1500, sync: 25 }
    ];

    steps.forEach(st => {
      setTimeout(() => {
        printTermLog(st.text, 'success');
        playBeep(880, 'sine', 0.04, 0.03);
        boostGhostSync(st.sync);
      }, st.delay);
    });

    setTimeout(() => {
      printTermLog(`[>>>] ¡SCRIPT EJECUTADO CON ÉXITO! AMENAZA ${state.vulnerabilityCve} MITIGADA (Exit 0)`, 'ascii');
      printTermLog(`[LEDGER] Parche sellado criptográficamente en el bloque de memoria de Aegis9CyberbrainEDR.`, 'success');
      playVictoryChime();
      markIncidentMitigated(true);
    }, 1800);
  }

  function playVictoryChime() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => {
        playBeep(freq, 'sine', 0.18, 0.05);
      }, idx * 120);
    });
  }

  function markIncidentMitigated(triggerBackend = true) {
    state.isMitigated = true;
    state.ghostSync = 100.0;
    updateHudVitals();

    const statusBadge = document.getElementById('tactical-status-badge');
    if (statusBadge) {
      statusBadge.textContent = 'ESTADO: MITIGADO & ASEGURADO';
      statusBadge.style.background = '#00F200';
      statusBadge.style.color = '#0E1111';
    }

    const progressBadge = document.getElementById('tactical-patches-progress-badge');
    if (progressBadge) {
      progressBadge.textContent = 'PROGRESO: 4/4 PARCHES SELLADOS';
      progressBadge.style.color = '#00F200';
    }

    // Efecto visual en las tarjetas de parches
    document.querySelectorAll('.patch-step-card').forEach(card => {
      card.style.borderColor = '#00F200';
      card.style.boxShadow = '0 0 10px rgba(0, 242, 0, 0.25)';
    });

    // Notificar al backend para sellar el bloque en el ledger
    if (triggerBackend && state.episode?.id && window.triggerSentinelDebug) {
      window.triggerSentinelDebug(state.episode.id);
    }
  }

  // --- Actualización de la Interfaz HUD de Vitals ---
  function updateHudVitals() {
    const syncBar = document.getElementById('tactical-sync-bar');
    const syncPct = document.getElementById('tactical-sync-pct');
    const vitalParam = document.getElementById('tactical-vital-param');

    if (syncBar) syncBar.style.width = `${state.ghostSync}%`;
    if (syncPct) syncPct.textContent = `${state.ghostSync.toFixed(1)}%`;

    if (vitalParam) {
      const v = resolveAnomalousVitals(state.targetAsset, state.vulnerabilityCve, state.cvssScore);
      if (state.ghostSync >= 99.9) {
        vitalParam.textContent = v.nominal;
        vitalParam.style.color = '#00F200';
      } else {
        vitalParam.textContent = v.critical;
        vitalParam.style.color = 'var(--iris-warning-high)';
      }
    }
  }

  // --- BASH SCRIPT STUDIO: Generador y Editor de Scripts ---
  function toggleScriptStudio(force) {
    const drawer = document.getElementById('tactical-script-studio-drawer');
    if (!drawer) return;
    const isVisible = drawer.style.display !== 'none';
    const nextState = force !== undefined ? force : !isVisible;
    drawer.style.display = nextState ? 'block' : 'none';
    if (nextState) {
      const editor = document.getElementById('tactical-script-editor');
      if (editor && !editor.value.trim()) {
        regenerateBashScript();
      } else if (editor) {
        validateScriptContent(editor.value);
        updateCursorPosition(editor);
      }
      playBeep(720, 'triangle', 0.06, 0.03);
    }
  }

  function regenerateBashScript() {
    const editor = document.getElementById('tactical-script-editor');
    if (!editor) return;

    const lines = [
      '#!/bin/bash',
      '# ============================================================================== #',
      `# CYBERIA-MED SOC // CISCO NETACAD HOSPITAL CYBER DEFENSE POD`,
      `# Playbook de Mitigación Táctica: ${state.episode?.code || 'EP01'} — ${state.vulnerabilityCve}`,
      `# Activo IoMT: ${state.targetAsset} (${state.targetIp}:${state.clinicalPort})`,
      '# ============================================================================== #',
      'set -e',
      '',
      `echo "[*] Desplegando contramedidas para ${state.vulnerabilityCve}..."`,
      '',
      '# [FASE 1: PREVENCIÓN] Aislamiento Perimetral en Cortafuegos',
      `iptables -I FORWARD -p tcp --dport ${state.clinicalPort} -d ${state.targetIp} -j DROP`,
      'echo "[+] Regla de aislamiento inyectada en iptables."',
      '',
      '# [FASE 2: DETECCIÓN & PURGA] Actualización de Reglas y Detección de Anomalías',
      `suricata-update --check-cve ${state.vulnerabilityCve}`,
      `sed -i 's/EXPLOIT_BUFFER/CLEANROOM_SAFE/g' /var/log/medsec/${state.targetAsset.toLowerCase()}_stream.log`,
      'echo "[+] Buffer de telemetría clínica sanitizado."',
      '',
      '# [FASE 3: MITIGACIÓN] Verificación de Certificados mTLS y Firma SHA-256',
      `openssl s_client -connect ${state.targetIp}:${state.clinicalPort} -brief </dev/null`,
      `echo "${state.vulnerabilityCve}:VERIFIED" | sha256sum > /var/run/aegis9/last_patch.sha256`,
      'echo "[+] Sello de integridad criptográfica generado."',
      '',
      '# [FASE 4: INCIDENT RESPONSE] Reanudación Segura y Registro en el SOC',
      'systemctl restart iomt-sentinel-agent',
      `logger -t MEDSOC_INCIDENT "Dispositivo ${state.targetAsset} parcheado con éxito. Estado: NOMINAL."`,
      'echo "[+] Servicio de telemetría reanudado en modo seguro."',
      '',
      'echo "[>>>] Parche desplegado. Constantes clínicas y Ghost Sync al 100%."',
      'exit 0'
    ];

    state.bashScript = lines.join('\n');
    editor.value = state.bashScript;
    validateScriptContent(editor.value);
    updateCursorPosition(editor);
  }

  function loadNetacadLabTemplate() {
    const editor = document.getElementById('tactical-script-editor');
    if (!editor) return;

    editor.value = `#!/bin/bash
# ============================================================================== #
# CISCO NETACAD ETHICAL HACKING // HOSPITAL IoMT DEFENSE TEMPLATE
# Estudiante: Pod Member | Laboratorio: Mitigación de Vulnerabilidad Clínica
# ============================================================================== #
set -e

TARGET_IP="${state.targetIp}"
TARGET_PORT="${state.clinicalPort}"
CVE="${state.vulnerabilityCve}"

echo "[NetAcad] Iniciando auditoría y remediación sobre $TARGET_IP:$TARGET_PORT..."

# Paso 1: Reconocimiento con Nmap
nmap -sV -p "$TARGET_PORT" "$TARGET_IP"

# Paso 2: Aislamiento perimetral
iptables -I FORWARD -p tcp --dport "$TARGET_PORT" -d "$TARGET_IP" -j DROP

# Paso 3: Verificación de túnel seguro mTLS
openssl s_client -connect "$TARGET_IP:$TARGET_PORT" -brief </dev/null

# Paso 4: Notificación al SOC y reinicio seguro
systemctl restart iomt-sentinel-agent
logger -t MEDSOC "NetAcad Pod remediated $CVE on $TARGET_IP"
echo "[NetAcad] Laboratorio completado satisfactoriamente."
exit 0
`;
    printTermLog('[STUDIO] Plantilla oficial de NetAcad cargada en el editor.', 'success');
    validateScriptContent(editor.value);
    updateCursorPosition(editor);
  }

  // --- Exportador de Evidencia para el Pod de NetAcad (.MD) ---
  function exportNetacadEvidence() {
    const timestamp = new Date().toISOString();
    const epCode = state.episode?.code || 'EP01';
    const report = `# EVIDENCIA DE LABORATORIO // POD DE CIBERSEGURIDAD HOSPITALARIA (CISCO NETACAD)
**Plataforma:** CYBERIA-MED SOC Console v19.96
**Fecha / Hora (UTC):** ${timestamp}
**Episodio / Módulo:** ${epCode} — ${state.episode?.game_node_code || 'CLINICAL NODE'}
**Técnica MITRE:** ${state.mitreTechnique}
**Protocolo Clínico:** ${state.clinicalProtocol} (Puerto TCP ${state.clinicalPort})

---

### 1. DATOS DEL ACTIVO CLÍNICO REMOTO
* **Dispositivo IoMT:** ${state.targetAsset}
* **Dirección IP Simulada:** ${state.targetIp}
* **Vulnerabilidad Abordada:** ${state.vulnerabilityCve} (CVSS ${state.cvssScore})
* **Estado de Resolución:** ${state.isMitigated ? 'MITIGADO & ASEGURADO (Ghost Sync 100%)' : 'EN PROCESO'}

---

### 2. COMANDOS KALI LINUX EJECUTADOS EN LA SESIÓN
\`\`\`bash
${state.executedCommands.length > 0 ? state.executedCommands.map(c => `[${c.timestamp.slice(11, 19)}] ${c.command}`).join('\n') : `nmap -sV -p ${state.clinicalPort} ${state.targetIp}\niptables -I FORWARD -p tcp --dport ${state.clinicalPort} -d ${state.targetIp} -j DROP\n./deploy_patch.sh`}
\`\`\`

---

### 3. SCRIPT BASH UTILIZADO (BASH SCRIPT STUDIO)
\`\`\`bash
${state.bashScript || '# deploy_patch.sh ejecutado mediante el módulo Aegis9'}
\`\`\`

---

### 4. SELLO CRIPTOGRÁFICO DE MEMORIA (AEGIS-9 SENTINEL)
* **Blockchain Block Index:** #${state.session?.ledger_block_index || 1}
* **SHA-256 Block Hash:** \`${state.session?.ledger_block_sha256 || '4c996a42e90147d997f51cd508af27361996cyberia'}\`
* **Resultado de Pruebas:** NOMINAL (Vitals reestabilizados para el paciente)
`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(report).then(() => {
        printTermLog('[EVIDENCIA] ¡Informe de laboratorio NetAcad copiado al portapapeles en formato Markdown!', 'success');
        playBeep(980, 'sine', 0.12, 0.04);
      }).catch(() => {
        downloadEvidenceFile(report, epCode);
      });
    } else {
      downloadEvidenceFile(report, epCode);
    }
  }

  function downloadEvidenceFile(content, epCode) {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NetAcad_Evidence_${epCode}_IoMT.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    printTermLog('[EVIDENCIA] Archivo NetAcad_Evidence descargado exitosamente.', 'success');
  }

  // --- Sincronizador Global Invocado por cyberia_console.js ---
  function onSentinelDebugSession(session, episode) {
    if (!session) return;

    state.session = session;
    state.episode = episode || state.episode;

    const epId = session.episode_id || (episode ? episode.id : 1);
    const epNum = parseInt(epId, 10) || 1;
    state.targetIp = `10.19.96.${String(epNum).padStart(2, '0')}`;
    state.targetAsset = session.iomt_asset || episode?.iomt_asset || `IoMT-ClinicalNode-${epNum}`;
    state.clinicalProtocol = session.clinical_protocol || episode?.clinical_protocol || 'HL7-FHIR v4';
    state.clinicalPort = resolveClinicalPort(state.clinicalProtocol);
    state.vulnerabilityCve = session.vulnerability_cve || episode?.pillars?.vulnerability?.cve || `CVE-2027-${String(100 + epNum)}`;
    state.cvssScore = session.cvss_score || episode?.pillars?.vulnerability?.cvss || 8.0;
    state.mitreTechnique = session.mapped_aegis_mitre || episode?.mitre_technique || 'T1195';

    state.isMitigated = false;
    state.ghostSync = session.ghost_sync_before || Math.max(30, Math.round(100 - (state.cvssScore * 7.5)));

    // Actualizar elementos visuales en el HUD
    const ipBadge = document.getElementById('tactical-target-ip-badge');
    const targetName = document.getElementById('tactical-target-name');
    const targetCve = document.getElementById('tactical-target-cve');
    const statusBadge = document.getElementById('tactical-status-badge');
    const promptPrefix = document.getElementById('tactical-prompt-prefix');

    if (ipBadge) ipBadge.textContent = `OBJETIVO: ${state.targetIp}`;
    if (targetName) targetName.textContent = `${state.targetAsset} [${state.clinicalProtocol}]`;
    if (targetCve) targetCve.textContent = `${state.vulnerabilityCve} (CVSS ${state.cvssScore})`;

    if (statusBadge) {
      statusBadge.textContent = 'ESTADO: COMPROMETIDO';
      statusBadge.style.background = 'var(--iris-warning-high)';
      statusBadge.style.color = '#0E1111';
    }

    if (promptPrefix) {
      promptPrefix.textContent = `kali@cyberia-soc:~/ep${String(epNum).padStart(2, '0')}$`;
    }

    // Actualizar botones de variables dinámicas en la paleta del Bash Studio
    const varIpVal = document.getElementById('var-pill-ip-val');
    const varPortVal = document.getElementById('var-pill-port-val');
    const varCveVal = document.getElementById('var-pill-cve-val');

    if (varIpVal) {
      varIpVal.textContent = state.targetIp;
      varIpVal.setAttribute('data-token', state.targetIp);
    }
    if (varPortVal) {
      varPortVal.textContent = String(state.clinicalPort);
      varPortVal.setAttribute('data-token', String(state.clinicalPort));
    }
    if (varCveVal) {
      varCveVal.textContent = state.vulnerabilityCve;
      varCveVal.setAttribute('data-token', state.vulnerabilityCve);
    }

    updateHudVitals();
    regenerateBashScript();

    // Mensaje de bienvenida contextual en la terminal táctica
    const out = document.getElementById('tactical-term-output');
    if (out) {
      out.innerHTML = '';
      printTermLog(`================================================================`, 'ascii');
      printTermLog(`CYBERIA-MED SOC // NITE TEAM 4 CLINICAL TACTICAL CONSOLE v19.96`, 'ascii');
      printTermLog(`NETACAD POD TARGET: ${state.targetAsset} (${state.targetIp})`, 'info');
      printTermLog(`VULNERABILITY DETECTED: ${state.vulnerabilityCve} [${state.mitreTechnique}]`, 'warn');
      printTermLog(`>>> ¿DESORIENTADO? TIPEA 'pistas' PARA RECIBIR ORIENTACIÓN TÁCTICA <<<`, 'ascii');
      printTermLog(`Pulsa [F2] para el Bash Script Studio o escribe './deploy_patch.sh'.`, 'info');
      printTermLog(`================================================================`, 'ascii');
    }
  }

  // Exposición en el objeto global de ventana
  window.TacticalGame = {
    onSentinelDebugSession,
    executeCommandLine,
    toggleScriptStudio,
    exportNetacadEvidence,
    resetWarmupTimer,
    validateScriptSyntaxAndLogic
  };
})();
