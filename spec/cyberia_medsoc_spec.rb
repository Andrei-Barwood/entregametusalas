# frozen_string_literal: true

require_relative 'spec_helper'

RSpec.describe 'CYBERIA-MED // SOC Console v19.96 — Complete Verification Suite (Prompts 01-10)' do
  describe '1. Paleta Hexadecimal Estricta "Ultimate Queen Chrysalis (#523)"' do
    it 'sirve public/css/chrysalis_medsoc.css con todos los tokens HEX y RGBA obligatorios' do
      get '/css/chrysalis_medsoc.css'
      expect(last_response.status).to eq(200)
      css = last_response.body

      required_tokens = [
        # 1. Fondos Clínicos Oscuros (Coat)
        '#0E1111', '#121312', '#252525', '#292929', '#3D3E3D',
        # 2. Estructura de Ventanas y Navegación (Mane, Tail, Armor & Carapace)
        '#164E62', '#1A566D', '#2B87AB', '#218984', '#6CC929',
        '#00485C', '#14747E', '#409979', '#218595', '#29C2DA',
        # 3. Alertas Bio-Digitales, Escáner MRI y Telemetría Activa (Magic, Horn & Iris)
        '#00F200', '#30FF00', '#83FF65', '#A4FF8E',
        '#5B9E00', '#9DE209', '#E7F800', '#AEF504',
        '#00383B', '#093534', '#0F5150',
        # 4. Capas Translúcidas / HUD (Wings)
        '#B2E5F2', 'rgba(36, 155, 167, 0.6)', 'rgba(12, 82, 106, 0.3)'
      ]

      required_tokens.each do |token|
        expect(css).to include(token), "Falta el color obligatorio #{token} de Queen Chrysalis (#523) en el CSS"
      end
    end
  end

  describe '2. Matriz Completa de los 48 Episodios y Lore de Cyberia (1996)' do
    let(:episodes) { Episode.all }

    it 'contiene exactamente los 48 episodios numerados secuencialmente del EP01 al EP48' do
      expect(episodes.size).to eq(48)
      expect(episodes.map { |e| e['id'] }).to eq((1..48).to_a)
      expect(episodes.map { |e| e['code'] }).to eq((1..48).map { |n| format('EP%02d', n) })
    end

    it 'cubre los 6 Actos completos de principio a fin' do
      acts_summary = Episode.acts_summary
      expect(acts_summary.size).to eq(6)
      expect(Episode.by_act(1).size).to eq(12) # EP01 - EP12 (The Rig)
      expect(Episode.by_act(2).size).to eq(7)  # EP13 - EP19 (Ruta Ártica y Túnel)
      expect(Episode.by_act(3).size).to eq(8)  # EP20 - EP27 (Complejo Nivel 1)
      expect(Episode.by_act(4).size).to eq(8)  # EP28 - EP35 (Complejo Nivel 2)
      expect(Episode.by_act(5).size).to eq(9)  # EP36 - EP44 (Núcleo y Simbiosis)
      expect(Episode.by_act(6).size).to eq(4)  # EP45 - EP48 (Asalto Orbital contra Devlin)
    end

    it 'incluye todos los códigos de escena icónicos de Cyberia (1996) y spoilers exhaustivos' do
      node_codes = episodes.map { |e| e['game_node_code'] }
      iconic_nodes = [
        'FWA QUARANTINE DOCK', 'RIG DOCK', 'MEET GIA', 'SKEET SHOOT', 'BIG KISS',
        'GOING UP', 'ZAPPED', 'EASY RIDE', 'BIG SHOCK', 'OPEN OCEAN', 'CATWALK', 'STEAL PLANE',
        'ISLAND RUN', 'VALLEY RUN', 'ROUGH RIDE', 'PORT FLYBY', 'UNDERGROUND', 'PIT STOP', 'ICE SCREAM',
        'COLD FEET', 'DOOR MAN', 'LOCKED OUT', 'SLICEOMATIC', 'NOT FRIENDS', 'LISTEN IN', 'GENIUS',
        'RED LIGHT', 'DRUG STORE', 'UNSAFE DOOR', 'GRAFFITI',
        'FWA TELEMETRY LEAK', 'THE LIVING WEAPON', 'YOU WITH ME (PART 1)', 'YOU WITH ME (PART 2)',
        'COMMAND CORE BREACH', 'TOTAL THREAT ERADICATION'
      ]

      iconic_nodes.each do |node|
        expect(node_codes).to include(node)
      end

      episodes.each do |ep|
        expect(ep['cyberia_spoiler'].to_s.length).to be > 120,
          "El spoiler del episodio #{ep['code']} debe ser detallado y exhaustivo"
        expect(ep['hospital_counterpart'].to_s).not_to be_empty
        expect(ep['clinical_protocol'].to_s).not_to be_empty
        expect(ep['iomt_asset'].to_s).not_to be_empty
      end
    end

    it 'garantiza que cada uno de los 48 episodios tenga los 4 pilares clínicos obligatorios' do
      episodes.each do |ep|
        pillars = ep['pillars']
        expect(pillars).to be_a(Hash), "Faltan pilares en #{ep['code']}"

        # Pilar 1: Vulnerabilidad
        vuln = pillars['vulnerability']
        expect(vuln['cve']).to match(/\ACVE-2027-\d{4}\z/)
        expect(vuln['cvss']).to be_between(7.0, 10.0)
        expect(vuln['description'].to_s.length).to be > 30

        # Pilar 2: Detección
        det = pillars['detection']
        expect(det['engine'].to_s).not_to be_empty
        expect(det['rule_name'].to_s).not_to be_empty
        expect(det['signature'].to_s).not_to be_empty
        expect(det['telemetry_indicator'].to_s).not_to be_empty

        # Pilar 3: Mitigación
        mit = pillars['mitigation']
        expect(mit['action_code']).to start_with("MIT-#{ep['code']}")
        expect(mit['immediate_response'].to_s).not_to be_empty
        expect(mit['cli_command'].to_s).not_to be_empty

        # Pilar 4: Prevención
        prev = pillars['prevention']
        expect(prev['standard'].to_s).not_to be_empty
        expect(prev['hardening_policy'].to_s).not_to be_empty
        expect(prev['zero_trust_control'].to_s).not_to be_empty
      end
    end
  end

  describe '3. Endpoints Web y API RESTful Clínica en Sinatra' do
    it 'renderiza la consola principal GET / con los 48 episodios y los 6 nodos de soporte vital' do
      get '/'
      expect(last_response.status).to eq(200)
      expect(last_response.headers['X-Cyberia-SOC-Version']).to eq('19.96-BLADES')
      expect(last_response.body).to include('CYBERIA-MED // SOC CONSOLE v19.96')
      expect(last_response.body).to include('48 / 48')
      expect(last_response.body).to include('NODE-01')
      expect(last_response.body).to include('NODE-06')
    end

    it 'devuelve la lista filtrable de episodios en GET /api/episodes' do
      get '/api/episodes', { act: '4' }
      expect(last_response.status).to eq(200)
      json = JSON.parse(last_response.body)
      expect(json['total']).to eq(8)
      expect(json['episodes'].first['code']).to eq('EP28')
      expect(json['episodes'].last['code']).to eq('EP35')
    end

    it 'devuelve el detalle JSON de episodios clave (EP22 LOCKED OUT, EP33 DRUG STORE, EP48 OMEGA)' do
      [22, 33, 48].each do |id|
        get "/api/episodes/#{id}"
        expect(last_response.status).to eq(200)
        ep = JSON.parse(last_response.body)
        expect(ep['id']).to eq(id)
        expect(ep['pillars'].keys).to contain_exactly('vulnerability', 'detection', 'mitigation', 'prevention')
      end
    end

    it 'entrega telemetría de signos vitales ECG en GET /api/telemetry/vitals' do
      get '/api/telemetry/vitals'
      expect(last_response.status).to eq(200)
      vitals = JSON.parse(last_response.body)
      expect(vitals['ecg_color']).to eq('#00F200')
      expect(vitals['nodes'].size).to eq(6)
    end
  end

  describe '4. Simuladores Interactivos de Puzzles (BLADES MRI & Nanomedicine EDR)' do
    it 'resuelve correctamente el puzzle de puertas lógicas MRI de EP22 (LOCKED OUT)' do
      post '/api/blades/mri-scan',
           { mode: 'locked_out_gates', input_a: true, input_b: false, input_c: true }.to_json,
           { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(200)
      res = JSON.parse(last_response.body)
      expect(res['solenoid_unlocked']).to be(true)
      expect(res['status_color']).to eq('#00F200')
    end

    it 'verifica el enclavamiento de las 4 válvulas hidráulicas/ECMO de EP35 (GRAFFITI)' do
      # Caso 1: Fallo por válvula cerrada al encender la bomba central
      post '/api/blades/mri-scan',
           { mode: 'graffiti_hydraulics', valves: [true, true, false, true], main_pump: true }.to_json,
           { 'CONTENT_TYPE' => 'application/json' }
      res_fail = JSON.parse(last_response.body)
      expect(res_fail['safe_pressurization']).to be(false)
      expect(res_fail['status_color']).to eq('#E7F800')

      # Caso 2: Éxito con las 4 válvulas abiertas antes de la bomba maestra
      post '/api/blades/mri-scan',
           { mode: 'graffiti_hydraulics', valves: [true, true, true, true], main_pump: true }.to_json,
           { 'CONTENT_TYPE' => 'application/json' }
      res_ok = JSON.parse(last_response.body)
      expect(res_ok['safe_pressurization']).to be(true)
      expect(res_ok['status_color']).to eq('#00F200')
    end

    it 'desactiva la bomba lógica de símbolos de la sala de conferencias EP26 (GENIUS)' do
      post '/api/blades/mri-scan',
           {
             mode: 'genius_symbols',
             sequence: %w[BLUE_ARROW_DOWN RED_BROKEN_CIRCLE RED_SQUARE BLUE_TRIANGLE]
           }.to_json,
           { 'CONTENT_TYPE' => 'application/json' }
      res = JSON.parse(last_response.body)
      expect(res['logic_bomb_defused']).to be(true)
    end

    it 'sintetiza el antídoto en EP33 (DRUG STORE) e inocula el nodo en EP34 (UNSAFE DOOR)' do
      post '/api/medsec/inoculate',
           { compound: 'ANTIDOTE-01', strain: 'CYBERIA-RANSOM-ALPHA' }.to_json,
           { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(200)
      res = JSON.parse(last_response.body)
      expect(res['inoculation_status']).to eq('CLEANROOM_PURGE_COMPLETE')
      expect(res['purge_token']).to eq('CYB-3334-ALPHA')
      expect(res['patient_vital_integrity']).to eq(100)
    end
  end

  describe '5. Generador de Informes Forenses Post-Mortem y Exportación STIX' do
    it 'exporta el boletín individual en Markdown y STIX 2.1 JSON' do
      get '/reports/episode/40.md'
      expect(last_response.status).to eq(200)
      expect(last_response.body).to include('EP40')
      expect(last_response.body).to include('William Devlin')

      get '/reports/episode/40.json'
      expect(last_response.status).to eq(200)
      stix = JSON.parse(last_response.body)
      expect(stix['type']).to eq('bundle')
      expect(stix['spec_version']).to eq('2.1')
    end

    it 'exporta el expediente Post-Mortem maestro de los 48 episodios en GET /reports/postmortem-full-48.md' do
      get '/reports/postmortem-full-48.md'
      expect(last_response.status).to eq(200)
      body = last_response.body
      expect(body).to include('EXPEDIENTE FORENSE POST-MORTEM INTEGRAL (48 EPISODIOS)')
      expect(body).to include('EP01:')
      expect(body).to include('EP22:')
      expect(body).to include('EP33:')
      expect(body).to include('EP48:')
      expect(body).to include('William Devlin')
    end
  end

  describe '6. Sentinela Nativo Aegis9CyberbrainEDR y Orden de Despliegue de Parches' do
    before do
      post '/api/sentinel/reset'
    end

    it 'verifica el binario Mach-O arm64 incluido en el proyecto' do
      get '/api/sentinel/status', { verify_binary: 'true' }
      expect(last_response.status).to eq(200)
      status = JSON.parse(last_response.body)

      expect(status.dig('binary', 'configured_path')).to eq(Aegis9SentinelService::BINARY_PATH)
      expect(status.dig('binary', 'binary_present')).to be(true)
      expect(status.dig('binary', 'executable_mach_o_arm64')).to be(true)
      expect(status.dig('killchain_cli_verification', 'executed')).to be(true)
      expect(status.dig('killchain_cli_verification', 'exit_code')).to eq(0)
    end

    it 'depura reactivamente cada episodio y despliega 4 parches en orden estricto (PREVENCIÓN -> DETECCIÓN -> MITIGACIÓN -> INCIDENT RESPONSE)' do
      post '/api/sentinel/debug/1'
      expect(last_response.status).to eq(200)
      res1 = JSON.parse(last_response.body)
      patches1 = res1.dig('session', 'deployed_patches')

      expect(patches1.size).to eq(4)
      expect(patches1.map { |p| p['episode_deployment_order'] }).to eq([1, 2, 3, 4])
      expect(patches1.map { |p| p['global_deployment_order'] }).to eq([1, 2, 3, 4])
      expect(patches1.map { |p| p['classification'] }).to eq([
        'PREVENCIÓN',
        'DETECCIÓN',
        'MITIGACIÓN',
        'INCIDENT RESPONSE'
      ])

      # Al ocurrir el siguiente episodio (ej. EP22 LOCKED OUT), el orden global continúa del #5 al #8
      post '/api/sentinel/debug/22'
      expect(last_response.status).to eq(200)
      res22 = JSON.parse(last_response.body)
      patches22 = res22.dig('session', 'deployed_patches')

      expect(patches22.map { |p| p['episode_deployment_order'] }).to eq([1, 2, 3, 4])
      expect(patches22.map { |p| p['global_deployment_order'] }).to eq([5, 6, 7, 8])
      expect(res22['cumulative_patches_total']).to eq(8)
    end

    it 'permite filtrar el historial de parches desplegados por categoría en GET /api/sentinel/patches' do
      post '/api/sentinel/debug-batch', { start_id: 1, end_id: 5 }.to_json, { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(200)

      get '/api/sentinel/patches', { category: 'MITIGATION' }
      mit_res = JSON.parse(last_response.body)
      expect(mit_res['total_patches']).to eq(5)
      expect(mit_res['patches'].all? { |p| p['classification'] == 'MITIGACIÓN' }).to be(true)

      get '/api/sentinel/patches', { category: 'INCIDENT_RESPONSE' }
      ir_res = JSON.parse(last_response.body)
      expect(ir_res['total_patches']).to eq(5)
      expect(ir_res['patches'].all? { |p| p['classification'] == 'INCIDENT RESPONSE' }).to be(true)
    end
  end

  describe '7. Sección 2: Consola Táctica NITE Team 4 & Sandbox Kali Linux para NetAcad Pod' do
    it 'sirve el archivo public/js/sentinel_tactical_game.js con soporte de comandos y atajos' do
      get '/js/sentinel_tactical_game.js'
      expect(last_response.status).to eq(200)
      js = last_response.body.force_encoding('UTF-8')
      expect(js).to include('TacticalGame')
      expect(js).to include('nmap')
      expect(js).to include('iptables')
      expect(js).to include('deploy_patch.sh')
      expect(js).to include('exportNetacadEvidence')
      expect(js).to include('insertTextAtCursor')
      expect(js).to include('validateScriptContent')
      expect(js).to include('resolveTokenTemplate')
      expect(js).to include('validateScriptSyntaxAndLogic')
      expect(js).to include('RECONOCIMIENTO')
      expect(js).to include('PREVENCIÓN')
    end

    it 'renderiza la consola táctica, el target HUD y el Bash Script Studio en GET /' do
      get '/'
      expect(last_response.status).to eq(200)
      body = last_response.body
      expect(body).to include('id="aegis9-sentinel-panel"')
      expect(body).to include('sentinel-aegis-box')
      expect(body).to include('sentinel-tactical-game')
      expect(body).to include('tactical-target-ip-badge')
      expect(body).to include('tactical-terminal-window')
      expect(body).to include('tactical-cli-input')
      expect(body).to include('tactical-script-studio-drawer')
      expect(body).to include('tactical-script-editor')
      expect(body).to include('btn-tactical-warmup')
      expect(body).to include('btn-tactical-export-evidence')
      expect(body).to include('btn-quick-pistas')
      expect(body).to include("TIPEA 'pistas' PARA UBICARTE")
      expect(body).to include('script-token-palette-box')
      expect(body).to include('script-word-token')
      expect(body).to include('sentinel_tactical_game.js')

      # Verifica que el Sentinel está configurado a ancho completo en CSS
      get '/css/chrysalis_medsoc.css'
      expect(last_response.status).to eq(200)
      css = last_response.body
      expect(css).to include('sentinel-aegis-box')
      expect(css).to include('grid-column: 1 / -1;')
    end
  end

  describe '8. Landing Page & Tutorial Clínico Paso a Paso (Episodio 1 & Kali Linux White Hat)' do
    it 'sirve el landing page tutorial en GET /tutorial y alias GET /landing' do
      ['/tutorial', '/landing'].each do |path|
        get path
        expect(last_response.status).to eq(200)
        body = last_response.body.force_encoding('UTF-8')

        # Público objetivo: Estudiantes de medicina y NetAcad
        expect(body).to include('ESTUDIANTES DE MEDICINA')
        expect(body).to include('CISCO NETACAD')

        # Conceptos de Kali Linux para operaciones White Hat
        expect(body).to include('Bisturí Digital')
        expect(body).to include('White Hat')
        expect(body).to include('Primum non nocere')

        # Configuraciones de electricidad hospitalaria
        expect(body).to include('Sistema IT Aislado Grado Médico')
        expect(body).to include('IEC 60364-7-710')
        expect(body).to include('microchoque cardíaco')
        expect(body).to include('UPS MÉDICA ONLINE')
        expect(body).to include('Transformador 1:1 Galvánico')

        # Tutorial paso a paso para el Episodio 1
        expect(body).to include('InfusionPump-ICU-01')
        expect(body).to include('CVE-2027-0101')
        expect(body).to include('pistas')
        expect(body).to include('nmap -sV -p 8080 10.19.96.01')
        expect(body).to include('iptables -A INPUT -p tcp --dport 8080 -j DROP')
        expect(body).to include('Bash Script Studio')
        expect(body).to include('./deploy_patch.sh')
        expect(body).to include('145 mL/h')
        expect(body).to include('5.0 mL/h')

        # Explicación de que es muy similar en los demás 47 niveles
        expect(body).to include('48 NIVELES DE CYBERIA')
        expect(body).to include('Una Sola Doctrina Defensiva')

        # Consola de práctica interactiva embebida (sandbox demo)
        expect(body).to include('demo-term-output')
        expect(body).to include('demo-cli-input')
        expect(body).to include('demo-btn-pistas')
        expect(body).to include('demo-btn-nmap')
        expect(body).to include('demo-btn-iptables')
        expect(body).to include('demo-btn-patch')

        # Glosario médico-tecnológico
        expect(body).to include('GLOSARIO BILINGÜE')
        expect(body).to include('Canal Iónico o Receptor')
        expect(body).to include('Barrera Antifibrilación')
      end
    end

    it 'incluye enlace al tutorial en el menú principal y banner en GET /' do
      get '/'
      expect(last_response.status).to eq(200)
      body = last_response.body.force_encoding('UTF-8')
      expect(body).to include('href="/tutorial"')
      expect(body).to include('[00] GUÍA CLÍNICA &amp; TUTORIAL KALI (EP01)')
      expect(body).to include('tutorial-onboarding-banner')
      expect(body).to include('id="tutorial-overlay"')
      expect(body).to include('tutorial-overlay-backdrop')
      expect(body).to include('tutorial-overlay-sheet')
      expect(body).to include('btn-close-tutorial-overlay')

      # Verifica que el overlay tiene soporte de transparencia sobre negro en CSS
      get '/css/chrysalis_medsoc.css'
      expect(last_response.status).to eq(200)
      css = last_response.body
      expect(css).to include('tutorial-overlay-backdrop')
      expect(css).to include('backdrop-filter: blur(8px);')
      expect(css).to include('tutorial-overlay-sheet')
    end
  end

  describe '9. Sección Bibliografía Luminosa (HSB/HSL) y Roll de Créditos con Invitado Antagónico' do
    it 'sirve la página de bibliografía en GET /bibliografia con formato de créditos de videojuego' do
      get '/bibliografia'
      expect(last_response.status).to eq(200)
      body = last_response.body.force_encoding('UTF-8')

      # Formato de créditos de videojuego y cabecera luminosa
      expect(body).to include('credits-console-container')
      expect(body).to include('credits-luminous-header')
      expect(body).to include('BIBLIOGRAFÍA NORMATIVA')
      expect(body).to include('btn-toggle-autoscroll')
      expect(body).to include('AUTO-SCROLL CRÉDITOS')

      # Normativas de electricidad y seguridad hospitalaria
      expect(body).to include('IEC 60364-7-710')
      expect(body).to include('NFPA 99')
      expect(body).to include('IEC 60601-1')
      expect(body).to include('IEC 80001-1')
      expect(body).to include('ISO 14971')
      expect(body).to include('FDA')
      expect(body).to include('ITC-BT-38')

      # Normativas de ciberseguridad y redes clínicas
      expect(body).to include('NIST SP 800-53')
      expect(body).to include('NIST SP 800-66')
      expect(body).to include('ISO 27799')
      expect(body).to include('HL7 FHIR')
      expect(body).to include('DICOM')
      expect(body).to include('MITRE')
      expect(body).to include('RFC 8446')

      # Fundamentos matemáticos, criptografía y cibernética
      expect(body).to include('FIPS PUB 180-4')
      expect(body).to include('NIST SP 800-56A')
      expect(body).to include('Claude Shannon')
      expect(body).to include('Alan M. Turing')
      expect(body).to include('Norbert Wiener')
      expect(body).to include('John von Neumann')

      # Posturas filosóficas y bioética
      expect(body).to include('Principles of Biomedical Ethics')
      expect(body).to include('Hans Jonas')
      expect(body).to include('Donna J. Haraway')
      expect(body).to include('Gilbert Simondon')
      expect(body).to include('Declaración de Helsinki')
      expect(body).to include('Georges Canguilhem')

      # Enlaces a documentos PDF
      expect(body).to include('VER DOCUMENTO NORMATIVO EN PDF')

      # Invitado antagónico al final de los créditos
      expect(body).to include('invitado antagonico')
      expect(body).to include('https://sacred-geometry.uk/blog?post=11')
    end

    it 'incluye botón luminoso con colores HSL en la navegación y estilos en CSS' do
      get '/'
      expect(last_response.status).to eq(200)
      body = last_response.body.force_encoding('UTF-8')
      expect(body).to include('href="/bibliografia"')
      expect(body).to include('nav-btn-bibliography')

      get '/css/chrysalis_medsoc.css'
      expect(last_response.status).to eq(200)
      css = last_response.body
      expect(css).to include('nav-btn-bibliography')
      expect(css).to include('hsl(150, 100%,')
      expect(css).to include('credits-console-container')
      expect(css).to include('credit-card-antagonist')
    end
  end

  describe '10. Muro Social Clínico P2P (Twitter/X Style, Feed en Vivo Sin Autenticación, Emojis 👍 👎 💝 y Storage JSONL)' do
    before(:each) do
      WallPost.reset_feed!
    end

    it 'sirve la API GET /api/feed con la lista de posts y estadísticas de almacenamiento ultracompacto' do
      get '/api/feed'
      expect(last_response.status).to eq(200)
      data = JSON.parse(last_response.body)

      expect(data['status']).to eq('ok')
      expect(data['posts']).to be_an(Array)
      expect(data['posts'].size).to be >= 4

      # Valida estructura del almacenamiento ultracompacto JSONL
      stats = data['storage_stats']
      expect(stats).to be_a(Hash)
      expect(stats['file_path']).to include('clinical_wall_feed.jsonl')
      expect(stats['lifespan_estimate']).to include('5 años')
      expect(stats['kb']).to be_a(Numeric)
    end

    it 'permite publicar en el muro sin login ni credenciales respetando el límite estricto de 2000 caracteres' do
      # Publicación válida con menos de 2000 caracteres
      valid_content = "Compañeros de NetAcad: analizando el firewall en EP01, el aislamiento IT del quirófano previene microchoques durante el patch."
      post '/api/feed', JSON.generate({
        author: 'Cadete_BioMed_1996',
        content: valid_content,
        episode_id: 1
      }), { 'CONTENT_TYPE' => 'application/json' }

      expect(last_response.status).to eq(201)
      res = JSON.parse(last_response.body)
      expect(res['status']).to eq('created')
      expect(res['post']['author']).to eq('Cadete_BioMed_1996')
      expect(res['post']['content']).to eq(valid_content)
      expect(res['post']['episode_id']).to eq(1)
      expect(res['post']['likes']).to eq(0)
      expect(res['post']['dislikes']).to eq(0)
      expect(res['post']['loves']).to eq(0)

      # Rechaza publicación vacía
      post '/api/feed', JSON.generate({
        author: 'Cadete_BioMed_1996',
        content: ''
      }), { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(422)

      # Rechaza publicación que supera los 2000 caracteres
      too_long_content = 'A' * 2001
      post '/api/feed', JSON.generate({
        author: 'Spammer_NetAcad',
        content: too_long_content
      }), { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(422)
      error_res = JSON.parse(last_response.body)
      expect(error_res['error']).to include('2000')
    end

    it 'permite reaccionar con emojis: Like (👍), Dislike (👎) y Amor (💝)' do
      # Crear un post para reaccionar
      post '/api/feed', JSON.generate({
        author: 'Cadete_Tester',
        content: 'Probando telemetría de reacciones en vivo',
        episode_id: 4
      }), { 'CONTENT_TYPE' => 'application/json' }
      created_id = JSON.parse(last_response.body)['post']['id']

      # Reacción 1: like (👍)
      post "/api/feed/#{created_id}/react", JSON.generate({ type: 'like' }), { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(200)
      expect(JSON.parse(last_response.body)['likes']).to eq(1)

      # Reacción 2: dislike (👎)
      post "/api/feed/#{created_id}/react", JSON.generate({ type: 'dislike' }), { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(200)
      expect(JSON.parse(last_response.body)['dislikes']).to eq(1)

      # Reacción 3: love / amor (💝)
      post "/api/feed/#{created_id}/react", JSON.generate({ type: 'love' }), { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(200)
      expect(JSON.parse(last_response.body)['loves']).to eq(1)

      # Reacción también acepta el emoji directamente (💝)
      post "/api/feed/#{created_id}/react", JSON.generate({ type: '💝' }), { 'CONTENT_TYPE' => 'application/json' }
      expect(last_response.status).to eq(200)
      expect(JSON.parse(last_response.body)['loves']).to eq(2)
    end

    it 'renderiza la vista de muro social /muro y contiene la caja de texto de 2000 caracteres y emojis' do
      get '/muro'
      expect(last_response.status).to eq(200)
      body = last_response.body.force_encoding('UTF-8')

      expect(body).to include('MURO SOCIAL CLÍNICO')
      expect(body).to include('feed-post-content')
      expect(body).to include('name="content"')
      expect(body).to include('maxlength="2000"')
      expect(body).to include('2000 caracteres')
      expect(body).to include('👍')
      expect(body).to include('👎')
      expect(body).to include('💝')
      expect(body).to include('data/clinical_wall_feed.jsonl')
      expect(body).to include('5 años')

      # El tutorial overlay está oculto por defecto en el muro social para no bloquear al usuario
      expect(body).to include('tutorial-overlay-backdrop hidden')
    end

    it 'permite enviar comentarios vía formulario estándar en POST /muro y POST /api/feed con campos x-www-form-urlencoded' do
      # Envío mediante form data a /api/feed
      post '/api/feed', { 'author' => 'Cadete_Form_Tester', 'content' => 'Comentario enviado como formulario', 'episode_id' => '1' }
      expect(last_response.status).to eq(201)
      res = JSON.parse(last_response.body)
      expect(res['post']['content']).to eq('Comentario enviado como formulario')

      # Envío mediante POST /muro con redirección
      post '/muro', { 'author' => 'Cadete_Muro_Tester', 'content' => 'Comentario directo al muro', 'episode_id' => '4' }
      expect([302, 303]).to include(last_response.status)
      expect(last_response.headers['Location']).to include('/muro')
    end

    it 'garantiza que el overlay del tutorial se oculte al navegar y persista con cyberia_tutorial_dismissed' do
      get '/'
      expect(last_response.status).to eq(200)
      body = last_response.body.force_encoding('UTF-8')
      expect(body).to include('cyberia_tutorial_dismissed')
      expect(body).to include('btn-nav-tutorial')
    end

    it 'integra el muro en la consola principal / y el botón de navegación' do
      get '/'
      expect(last_response.status).to eq(200)
      body = last_response.body.force_encoding('UTF-8')

      expect(body).to include('id="clinical-wall-panel"')
      expect(body).to include('nav-btn-feed')
      expect(body).to include('MURO SOCIAL CLÍNICO')
      expect(body).to include('clinical_feed.js')
      expect(body).to include('maxlength="2000"')
      expect(body).to include('2000 caracteres')

      # Verifica estilos en CSS
      get '/css/chrysalis_medsoc.css'
      expect(last_response.status).to eq(200)
      css = last_response.body
      expect(css).to include('clinical-feed-panel')
      expect(css).to include('feed-react-love')
      expect(css).to include('feed-react-like')
      expect(css).to include('feed-react-dislike')
      expect(css).to include('nav-btn-feed')
    end
  end

  describe '11. Versión Móvil Exclusiva (Feed Móvil Ligero, Restricción de Consola de Escritorio y Sincronización P2P)' do
    let(:iphone_ua) { 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1' }
    let(:android_ua) { 'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36' }

    before(:each) do
      WallPost.reset_feed!
    end

    it 'sirve la interfaz móvil exclusiva en GET /mobile sin consola pesada ni telemetría de escritorio' do
      get '/mobile'
      expect(last_response.status).to eq(200)
      body = last_response.body.force_encoding('UTF-8')

      # Elementos clave de la interfaz móvil
      expect(body).to include('CYBERIA // MURO MÓVIL')
      expect(body).to include('mobile-compose-card')
      expect(body).to include('feed-post-content')
      expect(body).to include('maxlength="2000"')
      expect(body).to include('2000 caracteres')
      expect(body).to include('PUBLICAR EN EL MURO')
      expect(body).to include('👍')
      expect(body).to include('👎')
      expect(body).to include('💝')
      expect(body).to include('data/clinical_wall_feed.jsonl')
      expect(body).to include('clinical_feed.js')

      # No debe contener elementos pesados de escritorio
      expect(body).not_to include('id="six-hull-nodes"')
      expect(body).not_to include('id="blades-ecg-canvas"')
      expect(body).not_to include('id="aegis9-sentinel-panel"')
      expect(body).not_to include('tactical-script-editor')
    end

    it 'redirige alias corto GET /m hacia /mobile' do
      get '/m'
      expect(last_response.status).to eq(302)
      expect(last_response.headers['Location']).to include('/mobile')
    end

    it 'redirige automáticamente dispositivos móviles (iPhone/Android) que entran a / hacia /mobile' do
      # Acceso desde iPhone a la raíz
      header 'User-Agent', iphone_ua
      get '/'
      expect(last_response.status).to eq(302)
      expect(last_response.headers['Location']).to include('/mobile')

      # Acceso desde Android a la raíz
      header 'User-Agent', android_ua
      get '/'
      expect(last_response.status).to eq(302)
      expect(last_response.headers['Location']).to include('/mobile')
    end

    it 'restringe navegación móvil fuera del feed redirigiendo rutas de escritorio a /mobile' do
      header 'User-Agent', iphone_ua
      get '/simulators'
      expect(last_response.status).to eq(302)
      expect(last_response.headers['Location']).to include('/mobile')

      header 'User-Agent', iphone_ua
      get '/bibliografia'
      expect(last_response.status).to eq(302)
      expect(last_response.headers['Location']).to include('/mobile')
    end

    it 'permite a dispositivos móviles ver la versión de escritorio si se solicita explícitamente con ?desktop=1' do
      header 'User-Agent', iphone_ua
      get '/?desktop=1'
      expect(last_response.status).to eq(200)
      body = last_response.body.force_encoding('UTF-8')
      expect(body).to include('id="six-hull-nodes"')
    end

    it 'permite publicar en el feed desde el formulario móvil en POST /mobile y sincroniza con el archivo común' do
      post '/mobile', {
        'author' => 'Cadete_Mobile_Zak',
        'content' => 'Publicando desde terminal móvil iPhone en sala de aislamiento',
        'episode_id' => '1'
      }
      expect([302, 303]).to include(last_response.status)
      expect(last_response.headers['Location']).to include('/mobile')

      # El post debe estar disponible tanto en /api/feed como en /mobile y /muro
      posts = WallPost.all
      expect(posts.first.author).to eq('Cadete_Mobile_Zak')
      expect(posts.first.content).to include('terminal móvil iPhone')

      get '/mobile'
      expect(last_response.body.force_encoding('UTF-8')).to include('Cadete_Mobile_Zak')
    end

    it 'contiene clases CSS móviles específicas en public/css/chrysalis_medsoc.css y botón en la navegación de escritorio' do
      get '/css/chrysalis_medsoc.css'
      expect(last_response.status).to eq(200)
      css = last_response.body
      expect(css).to include('mobile-feed-header')
      expect(css).to include('mobile-compose-card')
      expect(css).to include('mobile-submit-btn')
      expect(css).to include('nav-btn-mobile')

      # Botón en navegación de escritorio
      get '/'
      body = last_response.body.force_encoding('UTF-8')
      expect(body).to include('nav-btn-mobile')
      expect(body).to include('href="/mobile"')
    end

    it 'incluye el script ejecutable servidor_movil.zsh para pruebas móviles dedicadas' do
      script_path = File.expand_path('../servidor_movil.zsh', __dir__)
      expect(File.exist?(script_path)).to be true
      expect(File.executable?(script_path)).to be true

      script_content = File.read(script_path)
      expect(script_content).to include('CYBERIA_FORCE_MOBILE=1')
      expect(script_content).to include('/mobile')
      expect(script_content).to include('0.0.0.0')

      # Forzar modo móvil por variable de entorno redirige a /mobile incluso con navegador de escritorio
      begin
        ENV['CYBERIA_FORCE_MOBILE'] = '1'
        get '/'
        expect(last_response.status).to eq(302)
        expect(last_response.headers['Location']).to include('/mobile')
      ensure
        ENV.delete('CYBERIA_FORCE_MOBILE')
      end
    end
  end
end
