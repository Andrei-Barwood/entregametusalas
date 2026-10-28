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

let feedPosts = [...SEED_FEED_POSTS];
const FEED_KV_KEY = 'clinical_wall_posts_v1';

async function loadFeedPosts(env) {
  if (env && env.FEED_KV) {
    try {
      const data = await env.FEED_KV.get(FEED_KV_KEY, { type: 'json' });
      if (Array.isArray(data) && data.length > 0) {
        feedPosts = data;
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

function isMobileDevice(userAgent) {
  if (!userAgent) return false;
  return /Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Android/i.test(userAgent);
}

function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
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
    const mobileUser = (isMobileDevice(userAgent) || hasForceMobile) && !hasForceDesktop;

    // -------------------------------------------------------------
    // 1. API FEED (GET, POST, REACCIONES 👍 👎 💝)
    // -------------------------------------------------------------
    if (url.pathname === '/api/feed' || url.pathname === '/api/feed/') {
      await loadFeedPosts(env);

      if (method === 'GET') {
        const epFilter = url.searchParams.get('episode_id');
        let filtered = [...feedPosts];
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
    // Raíz /: Si es móvil sin ?desktop=1, sirve mobile.html (o redirige a /mobile)
    if (url.pathname === '/' || url.pathname === '') {
      if (url.searchParams.get('desktop') === '1') {
        // Establece cookie para recordar preferencia
        const assetResp = await serveAsset('index.html', env, request);
        const headers = new Headers(assetResp.headers);
        headers.append('Set-Cookie', 'force_desktop=1; Path=/; Max-Age=86400; SameSite=Lax');
        return new Response(assetResp.body, { status: assetResp.status, headers });
      }

      if (mobileUser) {
        return await serveAsset('mobile.html', env, request);
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
      if (res.status >= 200 && res.status < 400) return res;
    } catch (e) {}
  }

  // Fallback si corre fuera de Cloudflare Assets
  return new Response('Asset not found: ' + assetPath, {
    status: 404,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
