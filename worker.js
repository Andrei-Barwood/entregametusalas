/**
 * CYBERIA-MED // SOC Console v19.96 — Cloudflare Serverless Edge Worker
 * Runtime: Cloudflare Workers / Pages with Static Assets
 * Handles:
 *  1. Serverless Edge Device Detection (Mobile Feed vs Desktop SOC Console)
 *  2. RESTful APIs (/api/feed, /api/episodes, /api/telemetry/vitals, /api/sentinel/*)
 *  3. Zero-Auth Clinical Wall Feed Storage with Live Reactions (👍, 👎, 💝)
 *  4. High-Performance Static Asset Delivery via env.ASSETS
 */

// Semillas iniciales del Muro Social Clínico (NetAcad Pod)
const SEED_FEED_POSTS = [
  {
    id: 'post_seed_habitat_01',
    episode_id: 1,
    author: 'Comandante_BLADES',
    avatar_color: '#29C2DA',
    content: '¡Atención cadetes de NetAcad! Se ha habilitado el acceso al Hábitat Submarino Lounge (#lounge). Cuentan con soporte vital autónomo a 420m de profundidad para descompresión sensorial tras auditorías de telemetría médica.',
    likes: 48,
    dislikes: 0,
    loves: 64,
    created_at: new Date(Date.now() - 900000).toISOString()
  },
  {
    id: 'post_seed_snocomm_01',
    episode_id: 4,
    author: 'Ing_BioSistemas',
    avatar_color: '#6CC929',
    content: 'Señalética activa en el corredor de tránsito: proceed to lounge relaxation sector (#snocomm). Consulten el blueprint holográfico 3D de la instalación principal antes de entrar al sector de relajación.',
    likes: 34,
    dislikes: 0,
    loves: 41,
    created_at: new Date(Date.now() - 1200000).toISOString()
  },
  {
    id: 'post_seed_ep12_01',
    episode_id: 12,
    author: 'BioIngeniero_DevlinHunter',
    avatar_color: '#E7F800',
    content: 'Al finalizar el Acto I en EP12 (STEAL PLANE), la firma criptográfica con `openssl dgst -sha256` garantiza la integridad del firmware antes de despegar. Recuerden: en ciberseguridad médica un parche mal formado puede costar vidas reales.',
    likes: 31,
    dislikes: 0,
    loves: 42,
    created_at: new Date(Date.now() - 1800000).toISOString()
  },
  {
    id: 'post_seed_ep04_01',
    episode_id: 4,
    author: 'Interno_Trauma_Zak',
    avatar_color: '#A4FF8E',
    content: 'En EP04 (SKEET SHOOT) el ataque DoS UDP flood a los ventiladores mecánicos simula el protocolo IEEE 11073. Con iptables limitamos el rate a 25 paquetes/seg y los signos vitales del paciente se estabilizaron inmediatamente. ¡La consola táctica de Kali ayuda muchísimo a memorizar los comandos antes del examen!',
    likes: 15,
    dislikes: 0,
    loves: 19,
    created_at: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'post_seed_ep01_02',
    episode_id: 1,
    author: 'Dra_BioCyber_96',
    avatar_color: '#6CC929',
    content: 'Excelente punto @Cadete_NetAcad_UCI. De acuerdo a la norma IEC 60601-1-1 y NFPA 99 capítulo 6, la resistencia de tierra equipotencial del quirófano debe ser < 0.1 Ω. Si el atacante intenta una inyección de memoria en las bombas Alaris, el script bash que armamos con nmap y openssl s_client aísla el bus sin reiniciar la infusión continua de noradrenalina.',
    likes: 27,
    dislikes: 1,
    loves: 35,
    created_at: new Date(Date.now() - 5400000).toISOString()
  },
  {
    id: 'post_seed_ep01_01',
    episode_id: 1,
    author: 'Cadete_NetAcad_UCI',
    avatar_color: '#29C2DA',
    content: '¡Compañeros de NetAcad! Ojo en el EP01 con el comando `nmap --script ssl-enum-ciphers -p 8443 192.168.10.50`. Si el sistema IT del quirófano tiene corrientes de fuga superiores a 10 µA, el monitor de aislamiento de línea (LIM) disparará la alarma acústica antes de que el parche TLS 1.3 conmute. Siempre verifiquen el transformador de aislamiento antes de inocular firmware.',
    likes: 18,
    dislikes: 0,
    loves: 24,
    created_at: new Date(Date.now() - 7200000).toISOString()
  }
];

// ==============================================================================
// AEGIS-9 SENTINEL // CLOUDFLARE WORKER ANTI-SPAM FILTER & BLACKLIST
// ==============================================================================
const SPAM_BLACKLIST_IOCS = [
  'feedbackformeu',
  '375259112693',
  '+375259112693',
  't.me/feedbackformeu',
  'wa.me/375259112693'
];

const SPAM_PATTERNS = [
  { id: 'BELARUS_BOTNET_CONTACT', regex: /(?:t\.me\/feedbackformeu|wa\.me\/375259112693|wa\.me\/375\d{8,9}|375259112693)/i, reason: 'Contacto de botnet de spam masivo (Bielorrusia / FeedbackFormEU)' },
  { id: 'CONTACT_FORM_SPAM_PITCH', regex: /submitted\s+through\s+a\s+contact\s+form(?:\s+intended\s+for\s+messages)?/i, reason: 'Oferta comercial de inyección automatizada en formularios' },
  { id: 'LAWFUL_BUSINESS_MESSAGES', regex: /send\s+business\s+messages\s+in\s+a\s+lawful\s+way/i, reason: 'Frase de bot de contacto masivo' },
  { id: 'NO_PERSONAL_DATA_CLAIM', regex: /submitted\s+without\s+using\s+recipient\s+personal\s+data/i, reason: 'Patrón de spam que simula cumplimiento de privacidad' },
  { id: 'SPAM_FILTER_BYPASS_PITCH', regex: /reduce\s+the\s+chance\s+of\s+spam\s+filtering/i, reason: 'Venta de servicio para evadir filtros de spam' },
  { id: 'BULK_MESSAGES_PRICING', regex: /(?:cost\s+of\s+sending|sending)\s+(?:one|\d+)?\s*million\s+messages\s+is\s*\$?\d+/i, reason: 'Tarifario de spam masivo comercial (millones de mensajes)' },
  { id: 'FREE_TRIAL_MESSAGES', regex: /free\s+trial\s+(?:is\s+available|includes)\s+up\s+to\s+\d+[\d,]*\s*messages/i, reason: 'Oferta de prueba de envío de mensajes masivos' },
  { id: 'DUAL_CHANNEL_SOLICITATION', regex: /reach\s+us\s+on\s+(?:telegram|whatsapp)\s+or\s+(?:telegram|whatsapp)/i, reason: 'Captación de clientes vía Telegram / WhatsApp' },
  { id: 'TELEGRAM_WHATSAPP_SPAM_LINKS', regex: /(?:telegram\s*[-:]\s*t\.me\/[a-z0-9_]+)[\s\S]{0,100}(?:whatsapp\s*[-:]\s*wa\.me\/\d+)/i, reason: 'Combinación cruzada de enlaces t.me y wa.me de spam comercial' },
  { id: 'FORM_SUBMITTER_TOOLS', regex: /(?:xrumer|scrapebox|gsa\s+search\s+engine|contact\s+form\s+(?:submitter|blaster|spammer|marketing)|mass\s+form\s+submission)/i, reason: 'Herramientas de spam masivo a formularios' },
  { id: 'BULK_MESSAGING_SERVICES', regex: /(?:send\s+bulk\s+messages|blast\s+your\s+message|bulk\s+whatsapp\s+marketing|bulk\s+telegram\s+messages)/i, reason: 'Venta de mensajería masiva no solicitada' },
  { id: 'UNAUTHORIZED_COMMERCIAL_SCAM', regex: /(?:buy\s+cheap\s+viagra|cialis\s+without\s+prescription|online\s+casino\s+bonus|earn\s+\$\d+\s+daily\s+crypto)/i, reason: 'Publicidad engañosa o comercial no autorizada' }
];

function evaluateAntiSpam(content, author, honeypot) {
  if (honeypot && honeypot.toString().trim().length > 0) {
    return { isSpam: true, rule: 'AEGIS9_HONEYPOT_TRIGGERED', reason: 'Campo honeypot trampa completado por bot automatizado' };
  }
  const normAuthor = (author || '').toString().replace(/[\u200B-\u200D\uFEFF]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  if (normAuthor && /(?:https?:\/\/|t\.me\/|wa\.me\/|feedbackform|\.com|\.ru|\.eu)/i.test(normAuthor)) {
    return { isSpam: true, rule: 'AEGIS9_AUTHOR_BLACKLIST', reason: 'Alias de autor con enlaces o identificador de botnet' };
  }
  const normContent = (content || '').toString().replace(/[\u200B-\u200D\uFEFF]/g, '').toLowerCase().replace(/\s+/g, ' ').replace(/\s*\.\s*/g, '.').trim();
  for (const ioc of SPAM_BLACKLIST_IOCS) {
    if (normContent.includes(ioc)) {
      return { isSpam: true, rule: 'AEGIS9_IOC_BLACKLIST', reason: 'Contiene indicador de compromiso bloqueado: ' + ioc };
    }
  }
  for (const p of SPAM_PATTERNS) {
    if (p.regex.test(content) || p.regex.test(normContent)) {
      return { isSpam: true, rule: p.id, reason: p.reason };
    }
  }
  if (normContent.includes('t.me/') || normContent.includes('wa.me/') || normContent.includes('telegram') || normContent.includes('whatsapp')) {
    const commercialTerms = ['million messages', 'free trial', 'cost of', 'dollar', '$59', '$', 'business messages', 'contact form'];
    const matched = commercialTerms.filter(t => normContent.includes(t));
    if (matched.length >= 2) {
      return { isSpam: true, rule: 'AEGIS9_COMMERCIAL_MESSAGING_COMBO', reason: 'Combinación de mensajería externa con términos comerciales (' + matched.join(', ') + ')' };
    }
  }
  return { isSpam: false };
}

let feedPosts = [...SEED_FEED_POSTS];
const FEED_KV_KEY = 'clinical_wall_posts_v1';

async function loadFeedPosts(env) {
  if (env && env.FEED_KV) {
    try {
      const data = await env.FEED_KV.get(FEED_KV_KEY, { type: 'json' });
      if (Array.isArray(data) && data.length > 0) {
        // Purga determinista en tiempo real de cualquier post malicioso / spam residual en KV
        const cleanPosts = data.filter(p => {
          if (!p || !p.content) return false;
          if (p.id === 'post_1793545827_98cdb250') return false;
          const check = evaluateAntiSpam(p.content, p.author, null);
          return !check.isSpam;
        });

        if (cleanPosts.length !== data.length) {
          feedPosts = cleanPosts;
          await env.FEED_KV.put(FEED_KV_KEY, JSON.stringify(cleanPosts));
          console.log(`[AEGIS-9 SENTINEL] Purga completada en KV: ${data.length - cleanPosts.length} posts maliciosos eliminados permanentemente.`);
        } else {
          feedPosts = cleanPosts;
        }
        return feedPosts;
      } else {
        // Inicializar KV con las semillas si está vacío
        await env.FEED_KV.put(FEED_KV_KEY, JSON.stringify(feedPosts));
      }
    } catch (e) {
      console.warn('Error reading from FEED_KV:', e);
    }
  }
  return feedPosts;
}

async function saveFeedPosts(env, posts) {
  feedPosts = posts;
  if (env && env.FEED_KV) {
    try {
      await env.FEED_KV.put(FEED_KV_KEY, JSON.stringify(posts));
    } catch (e) {
      console.error('Error writing to FEED_KV:', e);
    }
  }
}

function isMobileDevice(userAgent, request) {
  if (request && request.headers.get('Sec-CH-UA-Mobile') === '?1') {
    return true;
  }
  if (!userAgent) return false;
  return /Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(userAgent);
}

function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Cyberia-SOC-Version': '19.96-BLADES-CLOUDFLARE',
      'X-Medical-Protocol-Engine': 'HL7-FHIR-DICOM-IEEE11073-ACTIVE',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      ...headers
    }
  });
}

function calculateStorageStats() {
  const bytes = JSON.stringify(feedPosts).length;
  const kb = (bytes / 1024).toFixed(2);
  const maxBytes = 3 * 1024 * 1024;
  const pctUsed = ((bytes / maxBytes) * 100).toFixed(2);

  return {
    file_path: 'data/clinical_wall_feed.jsonl',
    bytes: bytes,
    kb: parseFloat(kb),
    total_posts: feedPosts.length,
    max_bytes: maxBytes,
    percentage_used: parseFloat(pctUsed),
    lifespan_estimate: 'Capacidad estimada para ~15,000 publicaciones (5 años de debates en pod clínico sin base de datos pesada)'
  };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const method = request.method;
    const userAgent = request.headers.get('User-Agent') || '';
    const cookieHeader = request.headers.get('Cookie') || '';

    // Soporte CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // Preferencias de escritorio / móvil por parámetro o cookie
    const hasForceDesktop = url.searchParams.get('desktop') === '1' || cookieHeader.includes('force_desktop=1');
    const hasForceMobile = url.searchParams.get('mobile') === '1' || cookieHeader.includes('force_mobile=1') || (env && env.CYBERIA_FORCE_MOBILE === '1');
    const mobileUser = (isMobileDevice(userAgent, request) || hasForceMobile) && !hasForceDesktop;

    // -------------------------------------------------------------
    // 1. API FEED (GET, POST, REACCIONES 👍 👎 💝)
    // -------------------------------------------------------------
    if (url.pathname === '/api/feed' || url.pathname === '/api/feed/') {
      await loadFeedPosts(env);

      if (method === 'GET') {
        const epFilter = url.searchParams.get('episode_id');
        let filtered = [...feedPosts].filter(p => {
          if (!p || !p.content) return false;
          if (p.id === 'post_1793545827_98cdb250') return false;
          return !evaluateAntiSpam(p.content, p.author, null).isSpam;
        });
        if (epFilter && epFilter !== 'all') {
          const targetEp = parseInt(epFilter, 10);
          filtered = filtered.filter(p => p.episode_id === targetEp);
        }
        return jsonResponse({
          status: 'ok',
          total_posts: filtered.length,
          storage_stats: calculateStorageStats(),
          posts: filtered
        });
      }

      if (method === 'POST') {
        try {
          const contentType = request.headers.get('Content-Type') || '';
          let data = {};

          if (contentType.includes('application/json')) {
            data = await request.json();
          } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
            const formData = await request.formData();
            for (const [key, value] of formData.entries()) {
              data[key] = value;
            }
          } else {
            const text = await request.text();
            try { data = JSON.parse(text); } catch (e) { data = {}; }
          }

          const rawContent = (data.content || data.comment || data.comentario || data.message || data.text || data.texto || '').toString().trim();
          if (!rawContent) {
            return jsonResponse({ status: 'error', error: 'El contenido del comentario no puede estar vacío' }, 422);
          }

          if (rawContent.length > 2000) {
            return jsonResponse({ status: 'error', error: 'El comentario excede el límite máximo de 2000 caracteres' }, 422);
          }

          const author = (data.author || data.usuario || data.cadete || 'Cadete_NetAcad').toString().trim() || 'Cadete_NetAcad';
          const honeypot = (data.website_url_hp || data.website || data.hp_email || '').toString().trim();

          // Centinela Aegis-9 Edge: Inspección anti-spam y lista negra
          const spamCheck = evaluateAntiSpam(rawContent, author, honeypot);
          if (spamCheck.isSpam) {
            return jsonResponse({
              status: 'blocked',
              error: `[AEGIS-9 SENTINEL] Comentario bloqueado por filtro anti-spam: ${spamCheck.reason}`,
              rule: spamCheck.rule,
              reason: spamCheck.reason
            }, 403);
          }

          const epId = data.episode_id ? parseInt(data.episode_id, 10) : null;
          const colors = ['#29C2DA', '#6CC929', '#A4FF8E', '#AEF504', '#E7F800', '#218595', '#409979'];
          const avatarColor = data.avatar_color || colors[Math.floor(Math.random() * colors.length)];

          const newPost = {
            id: 'post_' + Math.floor(Date.now() / 1000) + '_' + Math.random().toString(16).substring(2, 10),
            episode_id: epId,
            author: author,
            avatar_color: avatarColor,
            content: rawContent,
            likes: 0,
            dislikes: 0,
            loves: 0,
            created_at: new Date().toISOString()
          };

          feedPosts.unshift(newPost);
          await saveFeedPosts(env, feedPosts);

          return jsonResponse({
            status: 'created',
            message: 'Publicación agregada al muro clínico con éxito',
            post: newPost,
            storage_stats: calculateStorageStats()
          }, 201);
        } catch (err) {
          return jsonResponse({ status: 'error', error: err.message }, 500);
        }
      }
    }

    // -------------------------------------------------------------
    // DELETE /api/feed/:id — Purga administrativa o eliminación de comentarios
    // -------------------------------------------------------------
    const deleteMatch = url.pathname.match(/^\/api\/feed\/([^\/]+)$/);
    if (deleteMatch && (method === 'DELETE' || (method === 'POST' && (url.searchParams.get('_method') === 'DELETE' || url.searchParams.get('action') === 'delete')))) {
      await loadFeedPosts(env);
      const targetId = deleteMatch[1];
      const initialCount = feedPosts.length;
      feedPosts = feedPosts.filter(p => p.id !== targetId);
      if (feedPosts.length !== initialCount) {
        await saveFeedPosts(env, feedPosts);
        return jsonResponse({
          status: 'ok',
          message: `Publicación '${targetId}' eliminada exitosamente del muro`,
          total_posts: feedPosts.length,
          storage_stats: calculateStorageStats()
        });
      } else {
        return jsonResponse({ status: 'not_found', error: `Publicación con ID '${targetId}' no encontrada` }, 404);
      }
    }

    // Reacciones a posts: /api/feed/:id/react
    const reactMatch = url.pathname.match(/^\/api\/feed\/([^\/]+)\/react$/);
    if (reactMatch && method === 'POST') {
      await loadFeedPosts(env);
      const postId = reactMatch[1];
      try {
        let payload = {};
        const contentType = request.headers.get('Content-Type') || '';
        if (contentType.includes('application/json')) {
          payload = await request.json();
        } else {
          const text = await request.text();
          try { payload = JSON.parse(text); } catch (e) { payload = {}; }
        }

        let type = (payload.type || payload.reaction || '').toString().toLowerCase().trim();
        if (type === 'likes' || type === '👍') type = 'like';
        if (type === 'dislikes' || type === '👎') type = 'dislike';
        if (type === 'loves' || type === '💝') type = 'love';

        if (!['like', 'dislike', 'love'].includes(type)) {
          return jsonResponse({ status: 'error', error: "Reacción no válida. Permitidas: like (👍), dislike (👎), love (💝)" }, 400);
        }

        const post = feedPosts.find(p => p.id === postId);
        if (!post) {
          return jsonResponse({ status: 'error', error: "Publicación con ID '" + postId + "' no encontrada" }, 404);
        }

        if (type === 'like') post.likes = (post.likes || 0) + 1;
        if (type === 'dislike') post.dislikes = (post.dislikes || 0) + 1;
        if (type === 'love') post.loves = (post.loves || 0) + 1;

        await saveFeedPosts(env, feedPosts);

        return jsonResponse({
          status: 'ok',
          id: post.id,
          reaction: type,
          likes: post.likes,
          dislikes: post.dislikes,
          loves: post.loves,
          post: post
        });
      } catch (err) {
        return jsonResponse({ status: 'error', error: err.message }, 500);
      }
    }

    // oEmbed Proxy para SoundCloud y reproductores
    if (url.pathname === '/api/oembed' && method === 'GET') {
      const targetUrl = url.searchParams.get('url');
      if (!targetUrl) return jsonResponse({ status: 'error', error: 'Missing url parameter' }, 400);
      try {
        const u = new URL(targetUrl);
        if (u.hostname.includes('soundcloud.com')) {
          const scRes = await fetch(`https://soundcloud.com/oembed?format=json&maxheight=166&url=${encodeURIComponent(targetUrl)}`);
          if (scRes.ok) {
            const data = await scRes.json();
            return jsonResponse(data, 200);
          }
        }
      } catch (e) {}
      return jsonResponse({ status: 'fallback', url: targetUrl }, 200);
    }

    // -------------------------------------------------------------
    // 2. ENVÍOS FORMULARIO POST /mobile Y POST /muro
    // -------------------------------------------------------------
    if ((url.pathname === '/mobile' || url.pathname === '/muro') && method === 'POST') {
      try {
        await loadFeedPosts(env);
        const formData = await request.formData();
        const rawContent = (formData.get('content') || '').toString().trim();
        const author = (formData.get('author') || 'Cadete_NetAcad').toString().trim() || 'Cadete_NetAcad';
        const epId = formData.get('episode_id') ? parseInt(formData.get('episode_id'), 10) : null;

        if (rawContent && rawContent.length <= 2000) {
          const colors = ['#29C2DA', '#6CC929', '#A4FF8E', '#AEF504', '#E7F800'];
          feedPosts.unshift({
            id: 'post_' + Math.floor(Date.now() / 1000) + '_' + Math.random().toString(16).substring(2, 10),
            episode_id: epId,
            author: author,
            avatar_color: colors[Math.floor(Math.random() * colors.length)],
            content: rawContent,
            likes: 0,
            dislikes: 0,
            loves: 0,
            created_at: new Date().toISOString()
          });
          await saveFeedPosts(env, feedPosts);
        }
      } catch (e) {}

      return Response.redirect(new URL(url.pathname, request.url).toString(), 303);
    }

    // -------------------------------------------------------------
    // 3. ENRUTAMIENTO INTELIGENTE: MÓVIL VS ESCRITORIO
    // -------------------------------------------------------------
    // Raíz /: Si es móvil sin ?desktop=1, redirigir con 302 a /mobile para evitar flasheos o colisiones con desktop
    if (url.pathname === '/' || url.pathname === '') {
      if (url.searchParams.get('desktop') === '1') {
        // Establece cookie para recordar preferencia
        const assetResp = await serveAsset('index.html', env, request);
        const headers = new Headers(assetResp.headers);
        headers.append('Set-Cookie', 'force_desktop=1; Path=/; Max-Age=86400; SameSite=Lax');
        return new Response(assetResp.body, { status: assetResp.status, headers });
      }

      if (mobileUser) {
        return Response.redirect(new URL('/mobile', request.url).toString(), 302);
      } else {
        return await serveAsset('index.html', env, request);
      }
    }

    // Rutas explícitas de vistas
    if (url.pathname === '/mobile' || url.pathname === '/m') {
      return await serveAsset('mobile.html', env, request);
    }

    if (url.pathname === '/muro' || url.pathname === '/feed') {
      if (mobileUser) return await serveAsset('mobile.html', env, request);
      return await serveAsset('muro.html', env, request);
    }

    if (url.pathname === '/tutorial' || url.pathname === '/landing' || url.pathname === '/guia') {
      return await serveAsset('tutorial.html', env, request);
    }

    if (url.pathname === '/bibliografia' || url.pathname === '/bibliography' || url.pathname === '/creditos') {
      if (mobileUser) return Response.redirect(new URL('/mobile', request.url).toString(), 302);
      return await serveAsset('bibliografia.html', env, request);
    }

    if (url.pathname === '/simulators') {
      if (mobileUser) return Response.redirect(new URL('/mobile', request.url).toString(), 302);
      return await serveAsset('simulators.html', env, request);
    }

    // -------------------------------------------------------------
    // 4. TELEMETRÍA Y CONTROLADORES OT/EDR
    // -------------------------------------------------------------
    if (url.pathname === '/api/telemetry/vitals') {
      return jsonResponse({
        bpm: 72,
        sync: 100,
        status: 'NOMINAL',
        nodes: [
          { id: 'NODE-01', name: 'ICU INFUSION SUITE', integrity: 100, protocol: 'IEEE 11073' },
          { id: 'NODE-02', name: 'VENTILATOR RACK A', integrity: 98, protocol: 'IEEE 11073' },
          { id: 'NODE-03', name: 'PACS MRI STORAGE', integrity: 100, protocol: 'DICOM' },
          { id: 'NODE-04', name: 'PHARMACY DISPENSER', integrity: 95, protocol: 'HL7 v2' },
          { id: 'NODE-05', name: 'ISOLATION HVAC', integrity: 100, protocol: 'BACnet' },
          { id: 'NODE-06', name: 'BACKUP UPS GENERATOR', integrity: 100, protocol: 'Modbus' }
        ]
      });
    }

    if (url.pathname === '/api/sentinel/status') {
      return jsonResponse({
        sentinel_online: true,
        binary_available: true,
        binary_path: '/bin/Aegis9CyberbrainEDR',
        architecture: 'Mach-O 64-bit arm64',
        deployed_patches_count: 4,
        status: 'PROTECTED'
      });
    }

    if (url.pathname === '/api/sentinel/patches') {
      return jsonResponse({
        total: 4,
        patches: [
          { order: 1, episode_id: 1, classification: 'PREVENTION', rule: 'FW_ISOLATE_RULE', id: 'EP01-PATCH-01' },
          { order: 2, episode_id: 1, classification: 'DETECTION', rule: 'IDS_SIGNATURE_ALERT', id: 'EP01-PATCH-02' },
          { order: 3, episode_id: 1, classification: 'MITIGATION', rule: 'RATE_LIMIT_DROP', id: 'EP01-PATCH-03' },
          { order: 4, episode_id: 1, classification: 'INCIDENT_RESPONSE', rule: 'CRYPTO_SEAL_HASH', id: 'EP01-PATCH-04' }
        ]
      });
    }

    if (url.pathname.startsWith('/api/sentinel/debug/')) {
      const epId = parseInt(url.pathname.split('/').pop(), 10) || 1;
      return jsonResponse({
        sentinel: 'Aegis9CyberbrainEDR',
        session: {
          episode_id: epId,
          status: 'SUCCESS',
          patches_generated: 4,
          patches: [
            { id: `EP${epId < 10 ? '0' + epId : epId}-PATCH-01`, classification: 'PREVENTION', rule: 'FW_ISOLATE_RULE' },
            { id: `EP${epId < 10 ? '0' + epId : epId}-PATCH-02`, classification: 'DETECTION', rule: 'IDS_SIGNATURE_ALERT' },
            { id: `EP${epId < 10 ? '0' + epId : epId}-PATCH-03`, classification: 'MITIGATION', rule: 'RATE_LIMIT_DROP' },
            { id: `EP${epId < 10 ? '0' + epId : epId}-PATCH-04`, classification: 'INCIDENT_RESPONSE', rule: 'CRYPTO_SEAL_HASH' }
          ]
        }
      });
    }

    // -------------------------------------------------------------
    // 5. ASSETS ESTÁTICOS (CSS, JS, DATA, IMAGES, REPORTS)
    // -------------------------------------------------------------
    if (env && env.ASSETS) {
      try {
        const assetResponse = await env.ASSETS.fetch(request);
        if (assetResponse.status !== 404) {
          return assetResponse;
        }
      } catch (e) {}
    }

    // Intentar servir como nombre directo de asset
    const cleanPath = url.pathname.replace(/^\//, '');
    if (cleanPath) {
      const directAsset = await serveAsset(cleanPath, env, request);
      if (directAsset.status !== 404) return directAsset;
    }

    return new Response('404 Not Found - Cyberia MedSOC Cloudflare Worker', { status: 404 });
  }
};

async function serveAsset(assetPath, env, request) {
  if (env && env.ASSETS) {
    try {
      const assetUrl = new URL(request.url);
      assetUrl.pathname = '/' + assetPath.replace(/^\//, '');
      const assetReq = new Request(assetUrl.toString(), request);
      const res = await env.ASSETS.fetch(assetReq);
      if (res.status >= 200 && res.status < 400) {
        // En páginas HTML y scripts de feed, evitar que el navegador almacene en caché versiones desactualizadas
        if (assetPath.endsWith('.html') || assetPath.includes('clinical_feed')) {
          const newHeaders = new Headers(res.headers);
          newHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');
          newHeaders.set('Pragma', 'no-cache');
          newHeaders.set('Expires', '0');
          return new Response(res.body, {
            status: res.status,
            statusText: res.statusText,
            headers: newHeaders
          });
        }
        return res;
      }
    } catch (e) {}
  }

  // Fallback si corre fuera de Cloudflare Assets
  return new Response('Asset not found: ' + assetPath, {
    status: 404,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
