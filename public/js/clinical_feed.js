/**
 * CYBERIA-MED // SOC Console v19.96
 * Muro Social Clínico (Twitter/X style live feed for NetAcad Pod)
 * Storage: Ultracompact append-only JSONL format (~15,000 posts in 3MB, 5-year lifespan)
 * Zero-auth, instant interaction, live reactions: 👍 (Like), 👎 (Dislike), 💝 (Amor)
 */

(function () {
  'use strict';

  var MAX_CHARS = 2000;
  var currentFilterEpisode = 'all';
  var pollInterval = null;
  var isSubmitting = false;
  var audioCtx = null;
  var notificationsEnabled = false;
  var knownPostIds = {};
  var isFirstFetch = true;
  var myRecentPostIds = {};
  var originalDocumentTitle = typeof document !== 'undefined' ? document.title : '';
  var unreadCount = 0;

  function playNotificationSound() {
    try {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      var now = audioCtx.currentTime;
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.12);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (_) {}
  }

  function isNotificationsEnabled() {
    try {
      return localStorage.getItem('cyberia_feed_notifications_enabled') === 'true';
    } catch (e) {
      return false;
    }
  }

  function setNotificationsEnabled(enabled) {
    notificationsEnabled = !!enabled;
    try {
      localStorage.setItem('cyberia_feed_notifications_enabled', notificationsEnabled ? 'true' : 'false');
    } catch (e) {}
    updateNotificationButtonsUI();
  }

  function updateNotificationButtonsUI() {
    var buttons = document.querySelectorAll('.feed-notif-btn, #btn-feed-notifications, #btn-feed-notifications-header');
    buttons.forEach(function (btn) {
      var statusSpan = btn.querySelector('.feed-notif-status');
      var bellSpan = btn.querySelector('.feed-notif-bell');

      if (notificationsEnabled) {
        btn.classList.add('notif-active');
        if (bellSpan) bellSpan.textContent = '🔔';
        if (statusSpan) {
          statusSpan.textContent = 'NOTIFICACIONES: ACTIVAS';
        } else if (!bellSpan) {
          btn.textContent = '🔔 NOTIFICACIONES: ACTIVAS';
        }
        btn.setAttribute('title', 'Notificaciones activadas (Click para desactivar)');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('notif-active');
        if (bellSpan) bellSpan.textContent = '🔔';
        if (statusSpan) {
          statusSpan.textContent = 'ACTIVAR NOTIFICACIONES';
        } else if (!bellSpan) {
          btn.textContent = '🔔 ACTIVAR NOTIFICACIONES';
        }
        btn.setAttribute('title', 'Activar notificaciones de nuevos mensajes');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  function showToastAlert(title, message, postId) {
    if (typeof document === 'undefined') return;
    var container = document.getElementById('feed-notification-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'feed-notification-toast-container';
      document.body.appendChild(container);
    }

    var toast = document.createElement('div');
    toast.className = 'feed-toast-card';
    if (postId) {
      toast.setAttribute('data-target-post-id', postId);
    }

    toast.innerHTML = [
      '<div class="feed-toast-header">',
      '  <span class="feed-toast-title">📡 ' + escapeHtml(title) + '</span>',
      '  <button type="button" class="feed-toast-close" aria-label="Cerrar notificación">&times;</button>',
      '</div>',
      '<div class="feed-toast-body">' + escapeHtml(message) + '</div>'
    ].join('\n');

    var closeBtn = toast.querySelector('.feed-toast-close');
    var dismissTimeout = null;

    function dismissToast() {
      if (dismissTimeout) clearTimeout(dismissTimeout);
      toast.classList.add('feed-toast-hiding');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dismissToast();
      });
    }

    toast.addEventListener('click', function () {
      if (postId) {
        var postEl = document.querySelector('[data-post-id="' + postId + '"]');
        if (postEl) {
          postEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          postEl.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
          postEl.style.borderColor = 'var(--magic-ring, #30FF00)';
          postEl.style.boxShadow = '0 0 16px var(--magic-ring, #30FF00)';
          setTimeout(function () {
            postEl.style.borderColor = '';
            postEl.style.boxShadow = '';
          }, 2500);
        }
      }
      dismissToast();
    });

    container.appendChild(toast);
    dismissTimeout = setTimeout(dismissToast, 6000);
  }

  function handlePermission(perm) {
    if (perm === 'granted') {
      setNotificationsEnabled(true);
      playNotificationSound();
      showToastAlert('NOTIFICACIONES ACTIVADAS', 'Recibirás avisos en tiempo real cuando ingresen nuevos mensajes al feed.');
      try {
        new Notification('CYBERIA // SOC NetAcad', {
          body: '✓ Alertas del muro activadas. Recibirás avisos cuando haya nuevos mensajes.',
          tag: 'cyberia-notif-test'
        });
      } catch (_) {}
    } else {
      setNotificationsEnabled(true);
      playNotificationSound();
      showToastAlert('NOTIFICACIONES IN-APP ACTIVAS', 'Permiso del sistema no concedido. Se activaron alertas sonoras y visuales en pantalla.');
    }
  }

  function toggleNotifications() {
    if (notificationsEnabled) {
      setNotificationsEnabled(false);
      showToastAlert('NOTIFICACIONES DESACTIVADAS', 'Ya no recibirás alertas de nuevos comentarios del feed.');
      return;
    }

    // Activar notificaciones
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        setNotificationsEnabled(true);
        playNotificationSound();
        showToastAlert('NOTIFICACIONES ACTIVADAS', 'Recibirás avisos en tiempo real cuando ingresen nuevos mensajes al feed.');
        try {
          new Notification('CYBERIA // SOC NetAcad', {
            body: '✓ Alertas del muro activadas. Recibirás avisos cuando haya nuevos mensajes.',
            tag: 'cyberia-notif-test'
          });
        } catch (_) {}
      } else if (Notification.permission === 'denied') {
        setNotificationsEnabled(true);
        playNotificationSound();
        showToastAlert('NOTIFICACIONES IN-APP ACTIVAS', 'Las notificaciones del sistema están bloqueadas en tu navegador. Se activaron alertas sonoras y visuales en pantalla.');
      } else {
        var requestPromise;
        try {
          requestPromise = Notification.requestPermission();
        } catch (err) {
          Notification.requestPermission(function (perm) {
            handlePermission(perm);
          });
          return;
        }

        if (requestPromise && typeof requestPromise.then === 'function') {
          requestPromise.then(function (perm) {
            handlePermission(perm);
          }).catch(function () {
            handlePermission('default');
          });
        }
      }
    } else {
      setNotificationsEnabled(true);
      playNotificationSound();
      showToastAlert('ALERTAS IN-APP ACTIVADAS', 'Tu navegador no soporta Web Notifications nativas; se emitirán avisos visuales y sonoros.');
    }
  }

  function notifyIncomingPosts(newPosts) {
    if (!notificationsEnabled || !newPosts || newPosts.length === 0) return;

    playNotificationSound();

    var firstPost = newPosts[0];
    var author = firstPost.author || 'Cadete_NetAcad';
    var epTag = firstPost.episode_id ? ' [EP' + (firstPost.episode_id < 10 ? '0' + firstPost.episode_id : firstPost.episode_id) + ']' : '';
    var preview = firstPost.content ? (firstPost.content.length > 110 ? firstPost.content.slice(0, 110) + '…' : firstPost.content) : '';

    var toastTitle = newPosts.length === 1
      ? 'NUEVO MENSAJE DE ' + author.toUpperCase()
      : newPosts.length + ' NUEVOS MENSAJES EN EL FEED';
    var toastBody = newPosts.length === 1
      ? (epTag ? epTag + ' ' : '') + preview
      : 'Último de ' + author + ': "' + preview + '"';

    showToastAlert(toastTitle, toastBody, firstPost.id);

    // Notificación nativa del navegador
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        var notifTitle = newPosts.length === 1
          ? 'CYBERIA // Nuevo mensaje de ' + author + epTag
          : 'CYBERIA // ' + newPosts.length + ' nuevos mensajes en el feed';
        var notifBody = newPosts.length === 1
          ? preview
          : 'Comentarios recibidos en el muro clínico.';

        var notif = new Notification(notifTitle, {
          body: notifBody,
          tag: 'cyberia-feed-incoming-' + firstPost.id
        });
        notif.onclick = function () {
          window.focus();
          var postEl = document.querySelector('[data-post-id="' + firstPost.id + '"]');
          if (postEl) {
            postEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          this.close();
        };
      } catch (_) {}
    }

    // Insignia en el título de la pestaña si está en segundo plano
    if (document.hidden) {
      unreadCount += newPosts.length;
      document.title = '(' + unreadCount + ') ' + originalDocumentTitle;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatTimeAgo(isoString) {
    if (!isoString) return 'hace un momento';
    try {
      var date = new Date(isoString);
      var now = new Date();
      var diffSec = Math.floor((now - date) / 1000);
      if (diffSec < 15) return 'justo ahora';
      if (diffSec < 60) return 'hace ' + diffSec + 's';
      var diffMin = Math.floor(diffSec / 60);
      if (diffMin < 60) return 'hace ' + diffMin + 'm';
      var diffHours = Math.floor(diffMin / 60);
      if (diffHours < 24) return 'hace ' + diffHours + 'h';
      var diffDays = Math.floor(diffHours / 24);
      return 'hace ' + diffDays + 'd';
    } catch (e) {
      return 'reciente';
    }
  }

  function getStoredAuthor() {
    try {
      var saved = localStorage.getItem('cyberia_medsec_feed_author');
      if (saved && saved.trim().length > 0) return saved.trim();
    } catch (e) {}
    var randomId = Math.floor(100 + Math.random() * 900);
    return 'Cadete_NetAcad_' + randomId;
  }

  function setStoredAuthor(name) {
    try {
      if (name && name.trim().length > 0) {
        localStorage.setItem('cyberia_medsec_feed_author', name.trim());
      }
    } catch (e) {}
  }

  // Respaldo de comentarios locales creados por el usuario
  function getLocalUserPosts() {
    try {
      var raw = localStorage.getItem('cyberia_medsec_user_posts');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveLocalUserPost(post) {
    try {
      var posts = getLocalUserPosts();
      posts.unshift(post);
      // Mantener máximo 50 comentarios en caché local
      if (posts.length > 50) posts = posts.slice(0, 50);
      localStorage.setItem('cyberia_medsec_user_posts', JSON.stringify(posts));
    } catch (e) {}
  }

  function mergeLocalAndRemotePosts(remotePosts) {
    var localPosts = getLocalUserPosts();
    if (!localPosts || localPosts.length === 0) return remotePosts;

    var remoteIds = {};
    for (var i = 0; i < remotePosts.length; i++) {
      remoteIds[remotePosts[i].id] = true;
    }

    // Agregar aquellos comentarios del usuario que no estén en la respuesta del servidor todavía
    var merged = [].concat(remotePosts);
    for (var j = 0; j < localPosts.length; j++) {
      var lp = localPosts[j];
      if (!remoteIds[lp.id]) {
        merged.unshift(lp);
        remoteIds[lp.id] = true;
      }
    }

    // Ordenar por created_at descendente
    merged.sort(function (a, b) {
      var da = new Date(a.created_at || 0).getTime();
      var db = new Date(b.created_at || 0).getTime();
      return db - da;
    });

    return merged;
  }

  function updateCharCounter() {
    var textarea = document.getElementById('feed-post-content');
    var counter = document.getElementById('feed-char-counter');
    var submitBtn = document.getElementById('btn-feed-submit');
    if (!textarea || !counter) return;

    var len = textarea.value.length;
    var remaining = MAX_CHARS - len;
    counter.textContent = len + ' / ' + MAX_CHARS + ' caracteres';

    if (len > MAX_CHARS) {
      counter.style.color = '#FF4444';
      counter.style.fontWeight = 'bold';
      if (submitBtn) submitBtn.disabled = true;
    } else if (remaining <= 150) {
      counter.style.color = 'var(--iris-warning-high, #E7F800)';
      counter.style.fontWeight = 'bold';
      if (submitBtn) submitBtn.disabled = len === 0;
    } else {
      counter.style.color = 'var(--hud-glass-outline, #B2E5F2)';
      counter.style.fontWeight = 'normal';
      if (submitBtn) submitBtn.disabled = len === 0;
    }

    // Indicador dinámico en la caja de redacción cuando se detectan enlaces o hashtags temáticos
    var linkHint = document.getElementById('feed-link-detected-hint');
    var detectedUrls = extractUrls(textarea.value);
    var hasHabitatTag = /#(?:habitat|lounge|descanso|reposo|snocomm|relaxation)\b/i.test(textarea.value) ||
      /\b(?:habitat\s*lounge|sala\s*de\s*descanso|sector\s*descanso|sector\s*de\s*descanso|lounge|snocomm|submarino)\b/i.test(textarea.value);
    if (detectedUrls.length > 0 || hasHabitatTag) {
      if (!linkHint) {
        linkHint = document.createElement('div');
        linkHint.id = 'feed-link-detected-hint';
        linkHint.className = 'feed-link-detected-hint';
        if (textarea.parentNode) {
          textarea.parentNode.appendChild(linkHint);
        }
      }
      if (hasHabitatTag && detectedUrls.length === 0) {
        linkHint.innerHTML = '🛋️ <strong>Vista previa ambiental activa:</strong> Sector Lounge / Habitat Submarino de Cyberia.';
      } else {
        var count = detectedUrls.length;
        linkHint.innerHTML = '🔗 <strong>' + count + ' enlace' + (count > 1 ? 's' : '') + ' detectado' + (count > 1 ? 's' : '') + ':</strong> Previsualización multimedia activa (YouTube, SoundCloud, Spotify, Habitat Lounge, Imágenes o Web).';
      }
      linkHint.style.display = 'flex';
    } else if (linkHint) {
      linkHint.style.display = 'none';
    }

    // Actualizar vista previa en vivo en tiempo real mientras el usuario escribe
    updateLivePreview(textarea.value);
  }

  function updateLivePreview(content) {
    var previewBox = document.getElementById('feed-live-preview-box');
    if (!previewBox) return;

    if (!content || content.trim().length === 0) {
      previewBox.style.display = 'none';
      previewBox.innerHTML = '';
      return;
    }

    var parsed = formatContentWithPreviews(content);
    if (!parsed.previewsHtml) {
      previewBox.style.display = 'none';
      previewBox.innerHTML = '';
      return;
    }

    previewBox.style.display = 'block';
    previewBox.innerHTML = [
      '<div class="feed-live-preview-header">',
      '  <span class="live-preview-icon">👁️</span> TELEMETRÍA VISUAL // VISTA PREVIA EN VIVO DE TU PUBLICACIÓN',
      '</div>',
      '<div class="feed-live-preview-content">',
      '  <div class="feed-live-preview-text">' + parsed.textHtml + '</div>',
      '  <div class="feed-post-previews-container">' + parsed.previewsHtml + '</div>',
      '</div>'
    ].join('\n');
    enhanceSoundCloudCards();
  }

  // --- Detección y Previsualización de Enlaces Multimedia ---

  function extractUrls(text) {
    if (!text) return [];
    var urlRegex = /(https?:\/\/[^\s<>"'`]+|(?:^|[\s])(?:www\.|soundcloud\.com\/|on\.soundcloud\.com\/|youtube\.com\/|youtu\.be\/|\/?img\/[a-zA-Z0-9_\-\.]+)[^\s<>"'`]*)/gi;
    var matches = text.match(urlRegex) || [];
    var cleaned = [];
    var seen = {};

    for (var i = 0; i < matches.length; i++) {
      var raw = matches[i].trim();
      // Remover puntuación residual al final de la URL
      var u = raw.replace(/[.,)\]?!;:]+$/, '');
      if (u.indexOf('/img/') === 0 || u.indexOf('img/') === 0) {
        if (u.charAt(0) !== '/') u = '/' + u;
      } else if (!/^https?:\/\//i.test(u)) {
        u = 'https://' + u;
      }
      if (u && !seen[u]) {
        seen[u] = true;
        cleaned.push(u);
      }
    }
    return cleaned;
  }

  function parseYouTubeId(url) {
    if (!url) return null;
    try {
      var u = new URL(url);
      var host = u.hostname.replace(/^www\./, '').replace(/^m\./, '');
      if (host === 'youtube.com') {
        if (u.pathname === '/watch') {
          return u.searchParams.get('v');
        }
        var mShorts = u.pathname.match(/^\/(?:shorts|embed|v)\/([a-zA-Z0-9_-]{11})/);
        if (mShorts) return mShorts[1];
      } else if (host === 'youtu.be') {
        var mPath = u.pathname.match(/^\/([a-zA-Z0-9_-]{11})/);
        if (mPath) return mPath[1];
      }
    } catch (e) {}

    var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([a-zA-Z0-9_-]{11})/i);
    return m ? m[1] : null;
  }

  var soundCloudCache = {};
  var DEFAULT_SOUNDCLOUD_ARTWORK = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' width='200' height='200'><rect width='200' height='200' fill='%230E1418'/><defs><linearGradient id='scg' x1='0' y1='1' x2='0' y2='0'><stop offset='0%25' stop-color='%23FF5500'/><stop offset='100%25' stop-color='%2329C2DA'/></linearGradient></defs><g fill='url(%23scg)'><rect x='25' y='110' width='10' height='40' rx='3'/><rect x='45' y='80' width='10' height='70' rx='3'/><rect x='65' y='50' width='10' height='100' rx='3'/><rect x='85' y='30' width='10' height='120' rx='3'/><rect x='105' y='45' width='10' height='105' rx='3'/><rect x='125' y='75' width='10' height='75' rx='3'/><rect x='145' y='100' width='10' height='50' rx='3'/><rect x='165' y='120' width='10' height='30' rx='3'/></g><circle cx='100' cy='100' r='88' fill='none' stroke='%2329C2DA' stroke-width='3' stroke-dasharray='6,6'/></svg>";

  function parseSoundCloudSlug(url) {
    try {
      var u = new URL(url);
      var host = u.hostname.toLowerCase().replace(/^www\./, '');
      if (host === 'on.soundcloud.com') {
        return { artist: 'SoundCloud Track', title: 'Cargando pista de audio...' };
      }
      var parts = u.pathname.split('/').filter(function (p) { return p.length > 0; });
      if (parts.length >= 2) {
        var artist = decodeURIComponent(parts[0]).replace(/[-_]/g, ' ').replace(/\b\w/g, function (l) { return l.toUpperCase(); });
        var track = decodeURIComponent(parts[1]).replace(/[-_]/g, ' ').replace(/\b\w/g, function (l) { return l.toUpperCase(); });
        return { artist: artist, title: track };
      } else if (parts.length === 1) {
        var name = decodeURIComponent(parts[0]).replace(/[-_]/g, ' ').replace(/\b\w/g, function (l) { return l.toUpperCase(); });
        return { artist: name, title: 'Audio en SoundCloud' };
      }
    } catch (e) {}
    return { artist: 'SoundCloud Artist', title: 'Pista de Audio' };
  }

  function isSoundCloudUrl(url) {
    if (!url) return false;
    try {
      var u = new URL(url);
      var host = u.hostname.toLowerCase().replace(/^www\./, '');
      return host === 'soundcloud.com' || host === 'm.soundcloud.com' || host === 'on.soundcloud.com' || host.endsWith('.soundcloud.com');
    } catch (e) {
      return /https?:\/\/(?:[a-zA-Z0-9_-]+\.)?soundcloud\.com\/.+/i.test(url);
    }
  }

  function parseSpotifyEmbed(url) {
    if (!url) return null;
    try {
      var u = new URL(url);
      var host = u.hostname.replace(/^www\./, '');
      if (host === 'open.spotify.com') {
        var match = u.pathname.match(/^\/(track|album|playlist|episode)\/([a-zA-Z0-9]+)/);
        if (match) {
          return 'https://open.spotify.com/embed/' + match[1] + '/' + match[2] + '?utm_source=generator&theme=0';
        }
      }
    } catch (e) {}
    return null;
  }

  function isImageUrl(url) {
    if (!url) return false;
    try {
      var u = new URL(url);
      var path = u.pathname.toLowerCase();
      if (/\.(jpe?g|png|gif|webp|svg|bmp)$/i.test(path)) return true;
      if (u.hostname === 'i.imgur.com' || u.hostname === 'images.unsplash.com' || u.hostname === 'media.giphy.com') {
        return true;
      }
    } catch (e) {
      if (/\.(jpe?g|png|gif|webp|svg|bmp)(\?.*)?$/i.test(url)) return true;
    }
    return false;
  }

  function isHabitatLoungeUrl(url) {
    if (!url) return false;
    try {
      var u = new URL(url);
      var text = (u.hostname + u.pathname + u.search + u.hash).toLowerCase();
      return text.indexOf('underwater_lounge') >= 0 ||
             text.indexOf('habitat') >= 0 ||
             text.indexOf('lounge') >= 0 ||
             text.indexOf('descanso') >= 0 ||
             text.indexOf('reposo') >= 0 ||
             text.indexOf('sanctuary') >= 0;
    } catch (_) {
      var s = String(url).toLowerCase();
      return s.indexOf('habitat') >= 0 || s.indexOf('lounge') >= 0 || s.indexOf('descanso') >= 0;
    }
  }

  function isSnocommUrl(url) {
    if (!url) return false;
    try {
      var u = new URL(url);
      var text = (u.hostname + u.pathname + u.search + u.hash).toLowerCase();
      return text.indexOf('snocomm') >= 0 ||
             text.indexOf('relaxation_sector') >= 0 ||
             text.indexOf('relaxation-sector') >= 0;
    } catch (_) {
      var s = String(url).toLowerCase();
      return s.indexOf('snocomm') >= 0;
    }
  }

  function buildHabitatLoungeCard(url) {
    var safeUrl = escapeHtml(url || '/img/underwater_lounge_habitat.jpg');
    return [
      '<div class="feed-media-preview feed-habitat-lounge-preview">',
      '  <div class="feed-media-badge">',
      '    <span class="feed-media-badge-left">🛋️ HABITAT CLÍNICO // SECTOR DE DESCANSO &amp; SINCRONIZACIÓN</span>',
      '    <span class="feed-media-badge-tag">VISTA EN PROFUNDIDAD • 4.2 ATM</span>',
      '  </div>',
      '  <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-habitat-card-link" title="Click para ver habitat submarino en alta resolución">',
      '    <div class="feed-habitat-img-wrapper">',
      '      <img src="/img/underwater_lounge_habitat.jpg" alt="Cyberia Deep Habitat Lounge — Sala de Descanso y Meditación Submarina" class="feed-habitat-thumb" loading="lazy" onerror="if(!this.dataset.tried){this.dataset.tried=\'1\';this.src=\'./img/underwater_lounge_habitat.jpg\';}">',
      '      <div class="feed-habitat-hud-overlay">',
      '        <div class="feed-habitat-top-tags">',
      '          <span class="feed-habitat-sign-tag">🟢 HABITAT SUBMARINO // NIVEL -420M</span>',
      '          <span class="feed-habitat-status-tag"><span class="habitat-pulse-dot"></span> REPOSO NEURAL ACTIVO</span>',
      '        </div>',
      '        <div class="feed-habitat-bottom-vitals">',
      '          <span>🌡️ 21.4°C</span> • <span>💧 4.2 ATM</span> • <span>🫁 O₂ 98.6%</span> • <span>🔕 AMORTIGUACIÓN ACÚSTICA</span>',
      '        </div>',
      '      </div>',
      '    </div>',
      '    <div class="feed-habitat-info-box">',
      '      <div class="feed-habitat-title">CYBERIA DEEP HABITAT // SALA DE DESCANSO &amp; SINCRONIZACIÓN NEURAL</div>',
      '      <div class="feed-habitat-desc">Espacio de contención sensorial y reposo para cadetes e ingenieros clínicos. Vistas panorámicas al lecho marino con soporte vital autónomo y protección contra interferencias EMI.</div>',
      '    </div>',
      '  </a>',
      '  <div class="feed-preview-footer">',
      '    <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-preview-source-link">',
      '      <span>↗ Acceder al sector de reposo</span>',
      '      <span class="feed-preview-url-domain">cyberia.habitat/relaxation-suite</span>',
      '    </a>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  function buildSnocommCard(url) {
    var safeUrl = escapeHtml(url || '/img/snocomm_lounge_preview.jpg');
    return [
      '<div class="feed-media-preview feed-snocomm-preview">',
      '  <div class="feed-media-badge">',
      '    <span class="feed-media-badge-left">🏢 SNOCOMM MAIN BUILDING // SECTOR DE RELAJACIÓN</span>',
      '    <span class="feed-media-badge-tag">VISTA PREVIA HD</span>',
      '  </div>',
      '  <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-snocomm-card-link" title="Click para abrir sector Snocomm Lounge">',
      '    <div class="feed-snocomm-img-wrapper">',
      '      <img src="/img/snocomm_lounge_preview.jpg" alt="Snocomm Main Building — Proceed to Lounge Relaxation Sector" class="feed-snocomm-thumb" loading="lazy" onerror="if(!this.dataset.tried){this.dataset.tried=\'1\';this.src=\'./img/snocomm_lounge_preview.jpg\';}">',
      '      <div class="feed-snocomm-hud-overlay">',
      '        <div class="feed-snocomm-sign-tag">',
      '          <span class="snocomm-arrow">↓</span> PROCEED TO LOUNGE // RELAXATION SECTOR',
      '        </div>',
      '        <div class="feed-snocomm-blueprint-tag">',
      '          <span class="snocomm-pulse-dot"></span> SNOCOMM MAIN BUILDING // 3D BLUEPRINT',
      '        </div>',
      '      </div>',
      '    </div>',
      '    <div class="feed-snocomm-info-box">',
      '      <div class="feed-snocomm-title">SNOCOMM MAIN BUILDING // RELAXATION SECTOR &amp; UNDERWATER LOUNGE</div>',
      '      <div class="feed-snocomm-desc">Instalación bio-cibernética submarina de Cyberia. Mirador oceánico con amortiguación neuroquímica, telemetría de signos vitales y sector de descanso para cadetes.</div>',
      '    </div>',
      '  </a>',
      '  <div class="feed-preview-footer">',
      '    <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-preview-source-link">',
      '      <span>↗ Explorar sector en alta resolución</span>',
      '      <span class="feed-preview-url-domain">snocomm.facility/lounge</span>',
      '    </a>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  function buildPreviewCard(url) {
    var safeUrl = escapeHtml(url);

    // 0. Sector Habitat Lounge & Snocomm Facility
    if (isHabitatLoungeUrl(url)) {
      return buildHabitatLoungeCard(url);
    }
    if (isSnocommUrl(url)) {
      return buildSnocommCard(url);
    }

    // 1. YouTube
    var ytId = parseYouTubeId(url);
    if (ytId) {
      return [
        '<div class="feed-media-preview feed-youtube-preview">',
        '  <div class="feed-media-badge">',
        '    <span class="feed-media-badge-left">▶ YOUTUBE VIDEO STREAM</span>',
        '    <span class="feed-media-badge-tag">REPRODUCTOR HD</span>',
        '  </div>',
        '  <div class="feed-youtube-facade" data-video-id="' + escapeHtml(ytId) + '" title="Click para reproducir video">',
        '    <img src="https://img.youtube.com/vi/' + escapeHtml(ytId) + '/hqdefault.jpg" alt="Miniatura YouTube" loading="lazy" class="feed-youtube-thumb">',
        '    <div class="feed-youtube-play-btn" aria-hidden="true">',
        '      <svg viewBox="0 0 68 48" width="58" height="40"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>',
        '    </div>',
        '    <div class="feed-youtube-overlay-meta">▶ Click para reproducir en vivo</div>',
        '  </div>',
        '  <div class="feed-preview-footer">',
        '    <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-preview-source-link">',
        '      <span>↗ Abrir en YouTube</span>',
        '      <span class="feed-preview-url-domain">youtube.com/watch?v=' + escapeHtml(ytId) + '</span>',
        '    </a>',
        '  </div>',
        '</div>'
      ].join('\n');
    }

    // 2. SoundCloud
    if (isSoundCloudUrl(url)) {
      var slugInfo = parseSoundCloudSlug(url);
      var safeSlugTitle = escapeHtml(slugInfo.title);
      var safeSlugArtist = escapeHtml(slugInfo.artist);

      return [
        '<div class="feed-media-preview feed-soundcloud-preview" data-soundcloud-url="' + safeUrl + '">',
        '  <div class="feed-media-badge">',
        '    <span class="feed-media-badge-left">🎵 SOUNDCLOUD AUDIO STREAM</span>',
        '    <span class="feed-media-badge-tag">AUDIO • BUCLE ∞</span>',
        '  </div>',
        '  <div class="feed-soundcloud-facade" title="Click para reproducir audio en bucle infinito">',
        '    <div class="feed-soundcloud-artwork-box">',
        '      <img class="feed-soundcloud-artwork" src="' + DEFAULT_SOUNDCLOUD_ARTWORK + '" alt="' + safeSlugTitle + '" loading="lazy">',
        '      <div class="feed-soundcloud-play-overlay">',
        '        <div class="feed-soundcloud-play-btn" aria-label="Reproducir pista en bucle continuo">▶</div>',
        '      </div>',
        '    </div>',
        '    <div class="feed-soundcloud-info">',
        '      <div class="feed-soundcloud-title" title="' + safeSlugTitle + '">' + safeSlugTitle + '</div>',
        '      <div class="feed-soundcloud-artist">' + safeSlugArtist + '</div>',
        '      <div class="feed-soundcloud-status-row">',
        '        <span class="feed-soundcloud-status-tag">▶ REPRODUCIR (BUCLE ∞)</span>',
        '        <span class="feed-soundcloud-wave-bars" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></span>',
        '      </div>',
        '    </div>',
        '  </div>',
        '  <div class="feed-soundcloud-player-container" style="display: none;"></div>',
        '  <div class="feed-preview-footer">',
        '    <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-preview-source-link">',
        '      <span>↗ Escuchar en SoundCloud</span>',
        '      <span class="feed-preview-url-domain">soundcloud.com</span>',
        '    </a>',
        '    <span class="feed-soundcloud-loop-indicator" title="Reproducción continua en bucle infinito activa">🔁 Bucle ∞</span>',
        '    <button type="button" class="feed-soundcloud-toggle-btn" title="Alternar reproductor">',
        '      ▶ Reproducir',
        '    </button>',
        '  </div>',
        '</div>'
      ].join('\n');
    }

    // 3. Spotify
    var spotifyEmbedUrl = parseSpotifyEmbed(url);
    if (spotifyEmbedUrl) {
      return [
        '<div class="feed-media-preview feed-spotify-preview">',
        '  <div class="feed-media-badge">',
        '    <span class="feed-media-badge-left">🎧 SPOTIFY AUDIO STREAM</span>',
        '    <span class="feed-media-badge-tag">EMBED POD</span>',
        '  </div>',
        '  <div class="feed-spotify-frame-wrapper">',
        '    <iframe src="' + escapeHtml(spotifyEmbedUrl) + '" width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        '  </div>',
        '  <div class="feed-preview-footer">',
        '    <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-preview-source-link">',
        '      <span>↗ Abrir en Spotify</span>',
        '      <span class="feed-preview-url-domain">spotify.com</span>',
        '    </a>',
        '  </div>',
        '</div>'
      ].join('\n');
    }

    // 4. Direct Images
    if (isImageUrl(url)) {
      return [
        '<div class="feed-media-preview feed-image-preview">',
        '  <div class="feed-media-badge">',
        '    <span class="feed-media-badge-left">🖼️ TELEMETRÍA VISUAL // IMAGEN ADJUNTA</span>',
        '    <span class="feed-media-badge-tag">VISTA PREVIA</span>',
        '  </div>',
        '  <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-image-preview-link" title="Click para abrir imagen en tamaño original">',
        '    <img src="' + safeUrl + '" alt="Previsualización de imagen adjunta" loading="lazy" class="feed-preview-img" onerror="this.closest(\'.feed-image-preview\').style.display=\'none\';">',
        '    <span class="feed-image-zoom-tag">🔍 Ver original</span>',
        '  </a>',
        '  <div class="feed-preview-footer">',
        '    <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-preview-source-link">',
        '      <span>↗ Abrir enlace de imagen</span>',
        '      <span class="feed-preview-url-domain">' + escapeHtml(url.length > 50 ? url.slice(0, 47) + '…' : url) + '</span>',
        '    </a>',
        '  </div>',
        '</div>'
      ].join('\n');
    }

    // 5. Generic Link Card
    try {
      var u = new URL(url);
      var domain = u.hostname.replace(/^www\./, '');
      var path = u.pathname + u.search;
      var cleanPath = path === '/' ? '' : (path.length > 50 ? path.slice(0, 47) + '…' : path);
      return [
        '<div class="feed-media-preview feed-generic-link-preview">',
        '  <a href="' + safeUrl + '" target="_blank" rel="noopener noreferrer" class="feed-link-card">',
        '    <div class="feed-link-card-favicon">',
        '      <img src="https://www.google.com/s2/favicons?domain=' + encodeURIComponent(domain) + '&sz=32" alt="" width="18" height="18" loading="lazy" onerror="this.style.display=\'none\';">',
        '    </div>',
        '    <div class="feed-link-card-meta">',
        '      <div class="feed-link-card-domain">' + escapeHtml(domain.toUpperCase()) + ' <span class="feed-link-card-proto">' + escapeHtml(u.protocol.replace(':', '')) + '</span></div>',
        '      <div class="feed-link-card-url">' + escapeHtml(domain + cleanPath) + '</div>',
        '    </div>',
        '    <div class="feed-link-card-action">↗</div>',
        '  </a>',
        '</div>'
      ].join('\n');
    } catch (e) {
      return '';
    }
  }

  function formatContentWithPreviews(content) {
    if (!content) return { textHtml: '', previewsHtml: '' };

    // 1. Extraer bloques de código inline `...` para protegerlos
    var codeBlocks = [];
    var textWithoutCode = content.replace(/`([^`]+)`/g, function (match, p1) {
      codeBlocks.push(p1);
      return '___FEED_CODE_BLOCK_' + (codeBlocks.length - 1) + '___';
    });

    // 2. Extraer URLs del texto
    var urls = extractUrls(textWithoutCode);
    var previews = [];
    for (var i = 0; i < urls.length && previews.length < 2; i++) {
      var card = buildPreviewCard(urls[i]);
      if (card) {
        previews.push(card);
      }
    }

    // 2.b Si no hay previsualizaciones activas pero el mensaje invoca palabras clave o hashtags temáticos
    if (previews.length < 2) {
      var mentionsHabitat = /#(?:habitat|lounge|descanso|reposo|sanctuary|habitad|relax|submarino|underwater)\b/i.test(textWithoutCode) ||
        /\b(?:habitat\s*lounge|sala\s*de\s*descanso|sector\s*descanso|sector\s*de\s*descanso|sector\s*lounge|habitat\s*submarino|vista\s*submarina|lounge|descanso|reposo|habitad|relax|submarino)\b/i.test(textWithoutCode) ||
        textWithoutCode.indexOf('underwater_lounge') >= 0;

      var mentionsSnocomm = /#(?:snocomm|relaxation|facility|blueprint|corredor)\b/i.test(textWithoutCode) ||
        /\b(?:snocomm\s*main\s*building|relaxation\s*sector|edificio\s*principal|sector\s*relajacion|snocomm|corredor|blueprint)\b/i.test(textWithoutCode) ||
        textWithoutCode.indexOf('snocomm_lounge') >= 0;

      var alreadyHasHabitat = previews.some(function (p) { return p.indexOf('feed-habitat-lounge-preview') >= 0; });
      var alreadyHasSnocomm = previews.some(function (p) { return p.indexOf('feed-snocomm-preview') >= 0; });

      if (mentionsHabitat && !alreadyHasHabitat) {
        previews.push(buildHabitatLoungeCard('/img/underwater_lounge_habitat.jpg'));
      }
      if (mentionsSnocomm && !alreadyHasSnocomm && previews.length < 2) {
        previews.push(buildSnocommCard('/img/snocomm_lounge_preview.jpg'));
      }
    }

    // 3. Escapar HTML del texto
    var safeText = escapeHtml(textWithoutCode);

    // 4. Reemplazar URLs en el texto con enlaces clicables bonitos
    for (var j = 0; j < urls.length; j++) {
      var fullUrl = urls[j];
      var safeFullUrl = escapeHtml(fullUrl);
      var displayLabel = fullUrl.replace(/^https?:\/\/(?:www\.)?/, '');
      if (displayLabel.length > 50) {
        displayLabel = displayLabel.slice(0, 47) + '…';
      }
      var linkTag = '<a href="' + safeFullUrl + '" target="_blank" rel="noopener noreferrer" class="feed-content-link">' + escapeHtml(displayLabel) + '</a>';

      if (safeText.indexOf(safeFullUrl) >= 0) {
        safeText = safeText.split(safeFullUrl).join(linkTag);
      } else {
        var rawWithoutProto = escapeHtml(fullUrl.replace(/^https?:\/\//i, ''));
        if (safeText.indexOf(rawWithoutProto) >= 0) {
          safeText = safeText.split(rawWithoutProto).join(linkTag);
        }
      }
    }

    // 5. Restaurar bloques de código inline
    safeText = safeText.replace(/___FEED_CODE_BLOCK_(\d+)___/g, function (match, idx) {
      var code = codeBlocks[parseInt(idx, 10)] || '';
      return '<code class="feed-inline-code">' + escapeHtml(code) + '</code>';
    });

    // 6. Convertir saltos de línea a <br>
    safeText = safeText.replace(/\n/g, '<br>');

    return {
      textHtml: safeText,
      previewsHtml: previews.join('\n')
    };
  }

  function playYouTubeFacade(btnOrFacade, videoId) {
    if (!btnOrFacade || !videoId) return;
    var facade = btnOrFacade.classList.contains('feed-youtube-facade') ? btnOrFacade : btnOrFacade.closest('.feed-youtube-facade');
    if (!facade) return;

    var iframe = document.createElement('iframe');
    iframe.className = 'feed-youtube-iframe';
    // loop=1 y playlist=ID permiten bucle infinito nativo en reproductores de YouTube
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(videoId) + '?autoplay=1&loop=1&playlist=' + encodeURIComponent(videoId) + '&rel=0';
    iframe.title = 'Reproductor de video YouTube (Bucle Infinito)';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    facade.parentNode.replaceChild(iframe, facade);
  }

  // --- Soporte de Bucle Infinito (Loop ∞) para SoundCloud ---

  function ensureSoundCloudApi(callback) {
    if (typeof window === 'undefined') return;
    if (window.SC && window.SC.Widget) {
      if (callback) callback();
      return;
    }
    var existing = document.getElementById('sc-widget-api-script');
    if (existing) {
      existing.addEventListener('load', function () {
        if (callback) callback();
      });
      return;
    }
    var script = document.createElement('script');
    script.id = 'sc-widget-api-script';
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    script.onload = function () {
      if (callback) callback();
    };
    if (document.head) {
      document.head.appendChild(script);
    } else if (document.body) {
      document.body.appendChild(script);
    }
  }

  function attachSoundCloudInfiniteLoop(iframe) {
    if (!iframe) return;
    if (!iframe.id) {
      iframe.id = 'sc_widget_' + Math.random().toString(36).substr(2, 9);
    }

    // 1. Integración con API oficial SC.Widget (escucha evento FINISH y repite seekTo(0) + play())
    ensureSoundCloudApi(function () {
      try {
        if (!window.SC || !window.SC.Widget) return;
        var widget = window.SC.Widget(iframe);
        if (!widget) return;

        widget.bind(window.SC.Widget.Events.READY, function () {
          widget.bind(window.SC.Widget.Events.FINISH, function () {
            try {
              widget.seekTo(0);
              widget.play();
            } catch (err) {
              console.warn('[SoundCloud Loop] Error reiniciando pista:', err);
            }
          });
        });
      } catch (e) {
        console.warn('[SoundCloud Loop] Error vinculando widget:', e);
      }
    });
  }

  // 2. Fallback postMessage global: detecta evento 'finish' emitido por el iframe de SoundCloud
  if (typeof window !== 'undefined' && !window.__sc_loop_listener_attached__) {
    window.__sc_loop_listener_attached__ = true;
    window.addEventListener('message', function (e) {
      if (!e || !e.data) return;
      var data = null;
      if (typeof e.data === 'string') {
        try {
          data = JSON.parse(e.data);
        } catch (_) {}
      } else if (typeof e.data === 'object') {
        data = e.data;
      }
      if (data && (data.method === 'finish' || data.event === 'finish' || data.name === 'finish')) {
        var iframes = document.querySelectorAll('.feed-soundcloud-player-container iframe');
        for (var i = 0; i < iframes.length; i++) {
          var frame = iframes[i];
          if (frame && frame.contentWindow) {
            try {
              frame.contentWindow.postMessage(JSON.stringify({ method: 'seekTo', value: 0 }), '*');
              frame.contentWindow.postMessage(JSON.stringify({ method: 'play' }), '*');
            } catch (_) {}
          }
        }
      }
    });
  }

  function playOrToggleSoundCloud(cardEl) {
    if (!cardEl) return;
    var playerBox = cardEl.querySelector('.feed-soundcloud-player-container');
    var facade = cardEl.querySelector('.feed-soundcloud-facade');
    var toggleBtn = cardEl.querySelector('.feed-soundcloud-toggle-btn');
    var scUrl = cardEl.getAttribute('data-soundcloud-url');
    if (!playerBox || !scUrl) return;

    if (playerBox.style.display !== 'none' && playerBox.innerHTML.trim().length > 0) {
      playerBox.style.display = 'none';
      if (facade) facade.style.display = 'flex';
      if (toggleBtn) toggleBtn.textContent = '▶ Reproducir';
      return;
    }

    playerBox.style.display = 'block';
    if (facade) facade.style.display = 'none';
    if (toggleBtn) toggleBtn.textContent = '✕ Ocultar reproductor';

    var existingFrame = playerBox.querySelector('iframe');
    if (existingFrame) {
      attachSoundCloudInfiniteLoop(existingFrame);
      return;
    }

    playerBox.innerHTML = '<div class="feed-soundcloud-loading">⚡ Conectando telemetría de SoundCloud (Bucle ∞)...</div>';

    var embedHtml = cardEl.getAttribute('data-embed-html');
    if (embedHtml) {
      var activeHtml = embedHtml.replace(/auto_play=false/g, 'auto_play=true');
      if (activeHtml.indexOf('auto_play=true') === -1) {
        activeHtml = activeHtml.replace(/src="([^"]+)"/, function (m, src) {
          var sep = src.indexOf('?') >= 0 ? '&' : '?';
          return 'src="' + src + sep + 'auto_play=true"';
        });
      }
      if (activeHtml.indexOf('allow="') >= 0) {
        if (activeHtml.indexOf('autoplay') === -1) {
          activeHtml = activeHtml.replace('allow="', 'allow="autoplay; ');
        }
      } else {
        activeHtml = activeHtml.replace('<iframe ', '<iframe allow="autoplay; encrypted-media" ');
      }
      playerBox.innerHTML = activeHtml;
    } else {
      var fallbackSrc = 'https://w.soundcloud.com/player/?url=' + encodeURIComponent(scUrl) + '&color=%2329C2DA&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false';
      playerBox.innerHTML = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="' + fallbackSrc + '"></iframe>';
    }

    var newFrame = playerBox.querySelector('iframe');
    if (newFrame) {
      attachSoundCloudInfiniteLoop(newFrame);
    }
  }

  function enhanceSoundCloudCards() {
    if (typeof document === 'undefined') return;
    var cards = document.querySelectorAll('.feed-soundcloud-preview:not([data-enhanced="true"])');
    cards.forEach(function (card) {
      card.setAttribute('data-enhanced', 'true');
      var url = card.getAttribute('data-soundcloud-url');
      if (!url) return;

      var cachedData = soundCloudCache[url];
      if (!cachedData) {
        try {
          var stored = localStorage.getItem('cyberia_sc_' + encodeURIComponent(url));
          if (stored) cachedData = JSON.parse(stored);
        } catch (_) {}
      }

      function applyMetadata(data) {
        if (!data) return;
        soundCloudCache[url] = data;
        try {
          localStorage.setItem('cyberia_sc_' + encodeURIComponent(url), JSON.stringify(data));
        } catch (_) {}

        if (data.thumbnail_url) {
          var artworkImg = card.querySelector('.feed-soundcloud-artwork');
          if (artworkImg) {
            artworkImg.src = data.thumbnail_url;
          }
        }

        if (data.title) {
          var titleEl = card.querySelector('.feed-soundcloud-title');
          if (titleEl) {
            titleEl.textContent = data.title;
            titleEl.setAttribute('title', data.title);
          }
        }
        if (data.author_name) {
          var artistEl = card.querySelector('.feed-soundcloud-artist');
          if (artistEl) {
            artistEl.textContent = data.author_name;
          }
        }

        if (data.html) {
          card.setAttribute('data-embed-html', data.html);
        }
      }

      if (cachedData) {
        applyMetadata(cachedData);
        return;
      }

      var oembedUrl = 'https://soundcloud.com/oembed?format=json&maxheight=166&url=' + encodeURIComponent(url);
      fetch(oembedUrl)
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.json();
        })
        .then(function (data) {
          applyMetadata(data);
        })
        .catch(function () {
          fetch('/api/oembed?url=' + encodeURIComponent(url))
            .then(function (res2) {
              if (!res2.ok) throw new Error('Proxy HTTP ' + res2.status);
              return res2.json();
            })
            .then(function (data2) {
              applyMetadata(data2);
            })
            .catch(function () {});
        });
    });
  }

  // --- Utilidades de Compartición en WhatsApp ---

  function getShareBaseUrl() {
    if (typeof window === 'undefined') return 'https://entregametusalas.uk';
    var host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0') {
      return 'https://entregametusalas.uk';
    }
    return window.location.origin;
  }

  function openWhatsAppShare(text) {
    if (typeof window === 'undefined') return;
    var waUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  function handleSharePostToWhatsApp(btn) {
    if (!btn) return;
    var postId = btn.getAttribute('data-post-id');
    if (!postId) return;
    var card = btn.closest('.feed-post-card');
    if (!card) return;

    var authorEl = card.querySelector('.feed-post-author');
    var author = authorEl ? authorEl.textContent.trim() : 'Cadete NetAcad';

    var textEl = card.querySelector('.feed-post-text');
    var rawText = textEl ? (textEl.innerText || textEl.textContent || '') : '';
    var snippet = rawText.trim();
    if (snippet.length > 280) {
      snippet = snippet.substring(0, 277) + '...';
    }

    var epPill = card.querySelector('.feed-post-pill');
    var epLabel = epPill ? epPill.textContent.trim() : '';

    var baseUrl = getShareBaseUrl();
    var postUrl = baseUrl + '/muro?ref=wa#post-' + postId;

    var lines = [
      '💬 *Comentario de ' + author + ' en el Pod Clínico Cyberia*' + (epLabel ? ' [' + epLabel + ']' : '') + ':',
      '',
      '«' + snippet + '»',
      '',
      '📡 *Ver transmisión en vivo en el Muro:*',
      postUrl
    ];

    openWhatsAppShare(lines.join('\n'));

    var labelEl = btn.querySelector('.share-wa-label');
    if (labelEl) {
      var prev = labelEl.textContent;
      labelEl.textContent = '✓ Abriendo';
      setTimeout(function () {
        labelEl.textContent = prev;
      }, 2000);
    }
  }

  function handleShareMuroToWhatsApp() {
    var baseUrl = getShareBaseUrl();
    var lines = [
      '📡 *MURO SOCIAL CLÍNICO // CYBERIA POD NETACAD*',
      '',
      'Canal de telemetría P2P en tiempo real (sin login). Comparte análisis de vulnerabilidades, comandos Kali Linux y depuración táctica.',
      '',
      '💬 *Súmate a la transmisión en vivo:*',
      baseUrl + '/muro?ref=wa'
    ];
    openWhatsAppShare(lines.join('\n'));
  }

  function checkUrlHashForPostHighlight() {
    if (typeof window === 'undefined') return;
    var hash = window.location.hash || '';
    var targetId = null;
    var m = hash.match(/#post-([a-zA-Z0-9_-]+)/);
    if (m && m[1]) {
      targetId = m[1];
    } else {
      try {
        var params = new URLSearchParams(window.location.search);
        var p = params.get('post');
        if (p) targetId = p;
      } catch (_) {}
    }
    if (targetId) {
      var card = document.querySelector('[data-post-id="' + targetId + '"]');
      if (card) {
        setTimeout(function () {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('feed-post-highlight-pulse');
          setTimeout(function () {
            card.classList.remove('feed-post-highlight-pulse');
          }, 3500);
        }, 350);
      }
    }
  }

  function renderPostCard(post) {
    var isMobile = document.body && document.body.classList.contains('mobile-body');
    var epLabel = 'GENERAL';
    if (post.episode_id) {
      var num = parseInt(post.episode_id, 10);
      epLabel = 'EP' + (num < 10 ? '0' + num : num);
    }

    var avatarInitial = (post.author || 'C').charAt(0).toUpperCase();
    var avatarBg = post.avatar_color || '#29C2DA';
    var formattedTime = formatTimeAgo(post.created_at);
    var parsed = formatContentWithPreviews(post.content);

    var cardClasses = 'feed-post-card' + (isMobile ? ' mobile-post-card' : '');
    var avatarClasses = 'feed-post-avatar' + (isMobile ? ' mobile-avatar' : '');
    var actionsClasses = 'feed-post-actions' + (isMobile ? ' mobile-post-actions' : '');

    return [
      '<article class="' + cardClasses + '" id="post-' + escapeHtml(post.id) + '" data-post-id="' + escapeHtml(post.id) + '" data-episode-id="' + (post.episode_id || '') + '">',
      '  <div class="' + avatarClasses + '" style="background-color: ' + escapeHtml(avatarBg) + ';">' + avatarInitial + '</div>',
      '  <div class="feed-post-main">',
      '    <div class="feed-post-header">',
      '      <span class="feed-post-author">' + escapeHtml(post.author) + '</span>',
      '      <span class="feed-post-pill ' + (post.episode_id ? 'feed-post-ep-pill' : 'feed-post-gen-pill') + '">',
      '        ' + epLabel,
      '      </span>',
      '      <time class="feed-post-time" datetime="' + escapeHtml(post.created_at) + '">' + formattedTime + '</time>',
      '    </div>',
      '    <div class="feed-post-body">',
      '      <div class="feed-post-text">' + parsed.textHtml + '</div>',
      parsed.previewsHtml ? '      <div class="feed-post-previews-container">' + parsed.previewsHtml + '</div>' : '',
      '    </div>',
      '    <div class="' + actionsClasses + '" aria-label="Reacciones y acciones del comentario">',
      '      <button type="button" class="feed-react-btn feed-react-like" data-post-id="' + escapeHtml(post.id) + '" data-reaction="like" title="Pulgar arriba (Me gusta)">',
      '        <span class="react-emoji" aria-hidden="true">👍</span>',
      '        <span class="react-count" id="react-like-' + escapeHtml(post.id) + '">' + (post.likes || 0) + '</span>',
      '      </button>',
      '      <button type="button" class="feed-react-btn feed-react-dislike" data-post-id="' + escapeHtml(post.id) + '" data-reaction="dislike" title="Pulgar abajo (No me gusta)">',
      '        <span class="react-emoji" aria-hidden="true">👎</span>',
      '        <span class="react-count" id="react-dislike-' + escapeHtml(post.id) + '">' + (post.dislikes || 0) + '</span>',
      '      </button>',
      '      <button type="button" class="feed-react-btn feed-react-love" data-post-id="' + escapeHtml(post.id) + '" data-reaction="love" title="Amor Clínico (Corazón con lazo)">',
      '        <span class="react-emoji" aria-hidden="true">💝</span>',
      '        <span class="react-count" id="react-love-' + escapeHtml(post.id) + '">' + (post.loves || 0) + '</span>',
      '      </button>',
      '      <button type="button" class="feed-share-wa-btn" data-post-id="' + escapeHtml(post.id) + '" title="Compartir este comentario en WhatsApp" aria-label="Compartir en WhatsApp">',
      '        <span class="share-wa-icon" aria-hidden="true">💬</span>',
      '        <span class="share-wa-label">WhatsApp</span>',
      '      </button>',
      '    </div>',
      '  </div>',
      '</article>'
    ].join('\n');
  }

  function updateStorageStatsBadge(stats) {
    if (!stats) return;
    var badge = document.getElementById('feed-storage-stats-badge');
    if (badge) {
      badge.textContent = stats.kb + ' KB / 3,000 KB (JSONL • ' + stats.total_posts + ' posts)';
      badge.title = stats.lifespan_estimate || 'Formato ultracompacto para 5 años de debates clínicos';
    }
  }

  function updateFeedDOM(container, allPosts, preserveScroll, scrollPos) {
    if (!container) return;

    if (allPosts.length === 0) {
      container.innerHTML = [
        '<div class="feed-empty-state">',
        '  <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">📡</div>',
        '  <div style="color: var(--hud-glass-outline); font-weight: bold;">Sin comentarios para este episodio aún.</div>',
        '  <div style="color: #888; font-size: 0.75rem; margin-top: 0.25rem;">Sé el primer cadete de NetAcad en compartir hallazgos sobre parches y telemetría.</div>',
        '</div>'
      ].join('\n');
      return;
    }

    var existingCards = container.querySelectorAll('.feed-post-card');
    if (existingCards.length === 0) {
      container.innerHTML = allPosts.map(renderPostCard).join('\n');
      enhanceSoundCloudCards();
      if (preserveScroll) container.scrollTop = scrollPos;
      return;
    }

    var existingMap = {};
    existingCards.forEach(function (card) {
      var id = card.getAttribute('data-post-id');
      if (id) {
        existingMap[id] = card;
      }
    });

    var postMap = {};
    allPosts.forEach(function (p) {
      if (p && p.id) postMap[p.id] = p;
    });

    // 1. Eliminar del DOM las tarjetas que ya no existan en allPosts
    existingCards.forEach(function (card) {
      var id = card.getAttribute('data-post-id');
      if (id && !postMap[id]) {
        if (card.parentNode) {
          card.parentNode.removeChild(card);
        }
      }
    });

    // 2. Reconciliación no destructiva: insertar o mantener cada tarjeta en orden
    for (var i = 0; i < allPosts.length; i++) {
      var post = allPosts[i];
      if (!post || !post.id) continue;

      var currentChild = container.children[i];
      var existingCard = existingMap[post.id];

      if (existingCard) {
        // Actualizar contadores si cambiaron
        var likeCount = existingCard.querySelector('#react-like-' + post.id);
        if (likeCount && likeCount.textContent !== String(post.likes || 0)) {
          likeCount.textContent = post.likes || 0;
        }
        var dislikeCount = existingCard.querySelector('#react-dislike-' + post.id);
        if (dislikeCount && dislikeCount.textContent !== String(post.dislikes || 0)) {
          dislikeCount.textContent = post.dislikes || 0;
        }
        var loveCount = existingCard.querySelector('#react-love-' + post.id);
        if (loveCount && loveCount.textContent !== String(post.loves || 0)) {
          loveCount.textContent = post.loves || 0;
        }
        var timeEl = existingCard.querySelector('.feed-post-time');
        if (timeEl && post.created_at) {
          var formattedTime = formatTimeAgo(post.created_at);
          if (timeEl.textContent !== formattedTime) {
            timeEl.textContent = formattedTime;
          }
        }

        // Si la tarjeta en el DOM proviene de ERB o no tiene formateo de previews, enriquecerla
        var bodyEl = existingCard.querySelector('.feed-post-body');
        var parsed = formatContentWithPreviews(post.content);
        var hasTextDiv = existingCard.querySelector('.feed-post-text');
        var hasPreviewsDiv = existingCard.querySelector('.feed-post-previews-container');

        if (bodyEl && (!hasTextDiv || (!hasPreviewsDiv && parsed.previewsHtml))) {
          bodyEl.innerHTML = '<div class="feed-post-text">' + parsed.textHtml + '</div>' +
            (parsed.previewsHtml ? '<div class="feed-post-previews-container">' + parsed.previewsHtml + '</div>' : '');
        }

        // Si falta el botón de compartir en WhatsApp, agregarlo a las acciones
        if (!existingCard.querySelector('.feed-share-wa-btn')) {
          var actions = existingCard.querySelector('.feed-post-actions');
          if (actions) {
            var waBtn = document.createElement('button');
            waBtn.type = 'button';
            waBtn.className = 'feed-share-wa-btn';
            waBtn.setAttribute('data-post-id', post.id);
            waBtn.title = 'Compartir este comentario en WhatsApp';
            waBtn.setAttribute('aria-label', 'Compartir en WhatsApp');
            waBtn.innerHTML = '<span class="share-wa-icon" aria-hidden="true">💬</span> <span class="share-wa-label">WhatsApp</span>';
            actions.appendChild(waBtn);
          }
        }

        // Si ya está en la posición exacta, NO moverlo en el DOM (preserva iframes y reproducción de audio/video)
        if (currentChild !== existingCard) {
          container.insertBefore(existingCard, currentChild || null);
        }
      } else {
        // Nuevo post que no existía en el feed actual
        var temp = document.createElement('div');
        temp.innerHTML = renderPostCard(post);
        var newCard = temp.firstElementChild;
        if (newCard) {
          container.insertBefore(newCard, currentChild || null);
          existingMap[post.id] = newCard;
        }
      }
    }

    enhanceSoundCloudCards();
    checkUrlHashForPostHighlight();

    if (preserveScroll) {
      container.scrollTop = scrollPos;
    }
  }

  function fetchPosts(preserveScroll) {
    var container = document.getElementById('feed-stream-container');
    if (!container) return;

    var url = '/api/feed';
    if (currentFilterEpisode && currentFilterEpisode !== 'all') {
      url += '?episode_id=' + encodeURIComponent(currentFilterEpisode);
    }

    var scrollPos = container.scrollTop;

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (data.status === 'ok') {
          updateStorageStatsBadge(data.storage_stats);

          var allPosts = mergeLocalAndRemotePosts(data.posts || []);

          // Detección de nuevos mensajes para disparar notificaciones
          if (isFirstFetch) {
            for (var k = 0; k < allPosts.length; k++) {
              if (allPosts[k] && allPosts[k].id) {
                knownPostIds[allPosts[k].id] = true;
              }
            }
            isFirstFetch = false;
          } else {
            var incomingPosts = [];
            for (var m = 0; m < allPosts.length; m++) {
              var pid = allPosts[m] ? allPosts[m].id : null;
              if (pid && !knownPostIds[pid]) {
                knownPostIds[pid] = true;
                if (!myRecentPostIds[pid]) {
                  incomingPosts.push(allPosts[m]);
                }
              }
            }
            if (incomingPosts.length > 0) {
              notifyIncomingPosts(incomingPosts);
            }
          }
          if (currentFilterEpisode && currentFilterEpisode !== 'all') {
            var targetEp = parseInt(currentFilterEpisode, 10);
            allPosts = allPosts.filter(function (p) {
              return parseInt(p.episode_id, 10) === targetEp;
            });
          }

          var counterBadge = document.getElementById('feed-active-count-badge');
          if (counterBadge) {
            counterBadge.textContent = allPosts.length + ' MENSAJES';
          }

          updateFeedDOM(container, allPosts, preserveScroll, scrollPos);
        }
      })
      .catch(function (err) {
        console.warn('Error fetching clinical feed:', err);
      });
  }

  function handleReaction(btn) {
    var postId = btn.getAttribute('data-post-id');
    var reaction = btn.getAttribute('data-reaction');
    if (!postId || !reaction) return;

    // Optimistic UI update
    var countSpan = btn.querySelector('.react-count');
    if (countSpan) {
      var currentCount = parseInt(countSpan.textContent, 10) || 0;
      countSpan.textContent = currentCount + 1;
    }
    btn.classList.add('react-animated');
    setTimeout(function () {
      btn.classList.remove('react-animated');
    }, 400);

    fetch('/api/feed/' + encodeURIComponent(postId) + '/react', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: reaction })
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data.status === 'ok' && data.post) {
          var likeEl = document.getElementById('react-like-' + postId);
          var dislikeEl = document.getElementById('react-dislike-' + postId);
          var loveEl = document.getElementById('react-love-' + postId);
          if (likeEl) likeEl.textContent = data.post.likes;
          if (dislikeEl) dislikeEl.textContent = data.post.dislikes;
          if (loveEl) loveEl.textContent = data.post.loves;
        }
      })
      .catch(function (err) {
        console.warn('Error applying reaction:', err);
      });
  }

  // --- Centinela Aegis-9: Filtro Anti-Spam en el Cliente ---
  var SPAM_CLIENT_IOCS = [
    'feedbackformeu',
    '375259112693',
    '+375259112693',
    't.me/feedbackformeu',
    'wa.me/375259112693'
  ];

  var SPAM_CLIENT_PATTERNS = [
    { id: 'BELARUS_BOTNET_CONTACT', regex: /(?:t\.me\/feedbackformeu|wa\.me\/375259112693|wa\.me\/375\d{8,9}|375259112693)/i, reason: 'Contacto de botnet de spam masivo (Bielorrusia / FeedbackFormEU)' },
    { id: 'CONTACT_FORM_SPAM_PITCH', regex: /submitted\s+through\s+a\s+contact\s+form(?:\s+intended\s+for\s+messages)?/i, reason: 'Oferta comercial de inyección automatizada en formularios' },
    { id: 'LAWFUL_BUSINESS_MESSAGES', regex: /send\s+business\s+messages\s+in\s+a\s+lawful\s+way/i, reason: 'Frase típica de bypass de bot de contacto' },
    { id: 'NO_PERSONAL_DATA_CLAIM', regex: /submitted\s+without\s+using\s+recipient\s+personal\s+data/i, reason: 'Patrón de spam de evasión GDPR' },
    { id: 'SPAM_FILTER_BYPASS_PITCH', regex: /reduce\s+the\s+chance\s+of\s+spam\s+filtering/i, reason: 'Venta de servicio para evadir filtros de spam' },
    { id: 'BULK_MESSAGES_PRICING', regex: /(?:cost\s+of\s+sending|sending)\s+(?:one|\d+)?\s*million\s+messages\s+is\s*\$?\d+/i, reason: 'Tarifario de spam masivo comercial' },
    { id: 'FREE_TRIAL_MESSAGES', regex: /free\s+trial\s+(?:is\s+available|includes)\s+up\s+to\s+\d+[\d,]*\s*messages/i, reason: 'Oferta de prueba de envío masivo' },
    { id: 'DUAL_CHANNEL_SOLICITATION', regex: /reach\s+us\s+on\s+(?:telegram|whatsapp)\s+or\s+(?:telegram|whatsapp)/i, reason: 'Captación de clientes comercial vía Telegram / WhatsApp' },
    { id: 'TELEGRAM_WHATSAPP_SPAM_LINKS', regex: /(?:telegram\s*[-:]\s*t\.me\/[a-z0-9_]+)[\s\S]{0,100}(?:whatsapp\s*[-:]\s*wa\.me\/\d+)/i, reason: 'Combinación cruzada de enlaces t.me y wa.me de spam' },
    { id: 'FORM_SUBMITTER_TOOLS', regex: /(?:xrumer|scrapebox|gsa\s+search\s+engine|contact\s+form\s+(?:submitter|blaster|spammer|marketing)|mass\s+form\s+submission)/i, reason: 'Herramientas de spam masivo a formularios' },
    { id: 'BULK_MESSAGING_SERVICES', regex: /(?:send\s+bulk\s+messages|blast\s+your\s+message|bulk\s+whatsapp\s+marketing|bulk\s+telegram\s+messages)/i, reason: 'Venta de mensajería masiva no solicitada' },
    { id: 'UNAUTHORIZED_COMMERCIAL_SCAM', regex: /(?:buy\s+cheap\s+viagra|cialis\s+without\s+prescription|online\s+casino\s+bonus|earn\s+\$\d+\s+daily\s+crypto)/i, reason: 'Publicidad engañosa o comercial no autorizada' }
  ];

  function evaluateAntiSpamClient(content, author) {
    var normAuthor = (author || '').replace(/[\u200B-\u200D\uFEFF]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
    if (normAuthor && /(?:https?:\/\/|t\.me\/|wa\.me\/|feedbackform|\.com|\.ru|\.eu)/i.test(normAuthor)) {
      return { isSpam: true, rule: 'AEGIS9_AUTHOR_BLACKLIST', reason: 'Alias de autor con enlaces o identificador de botnet' };
    }
    var normContent = (content || '').replace(/[\u200B-\u200D\uFEFF]/g, '').toLowerCase().replace(/\s+/g, ' ').replace(/\s*\.\s*/g, '.').trim();
    for (var i = 0; i < SPAM_CLIENT_IOCS.length; i++) {
      if (normContent.indexOf(SPAM_CLIENT_IOCS[i]) !== -1) {
        return { isSpam: true, rule: 'AEGIS9_IOC_BLACKLIST', reason: 'Contiene indicador de compromiso bloqueado (' + SPAM_CLIENT_IOCS[i] + ')' };
      }
    }
    for (var j = 0; j < SPAM_CLIENT_PATTERNS.length; j++) {
      var p = SPAM_CLIENT_PATTERNS[j];
      if (p.regex.test(content) || p.regex.test(normContent)) {
        return { isSpam: true, rule: p.id, reason: p.reason };
      }
    }
    if (normContent.indexOf('t.me/') !== -1 || normContent.indexOf('wa.me/') !== -1 || normContent.indexOf('telegram') !== -1 || normContent.indexOf('whatsapp') !== -1) {
      var commercialTerms = ['million messages', 'free trial', 'cost of', 'dollar', '$59', '$', 'business messages', 'contact form'];
      var matchedCount = 0;
      for (var k = 0; k < commercialTerms.length; k++) {
        if (normContent.indexOf(commercialTerms[k]) !== -1) matchedCount++;
      }
      if (matchedCount >= 2) {
        return { isSpam: true, rule: 'AEGIS9_COMMERCIAL_MESSAGING_COMBO', reason: 'Combinación de mensajería externa con términos comerciales' };
      }
    }
    return { isSpam: false };
  }

  function submitNewPost() {
    if (isSubmitting) return;

    var authorInput = document.getElementById('feed-author-input');
    var contentTextarea = document.getElementById('feed-post-content');
    var epSelect = document.getElementById('feed-post-episode-select');
    var submitBtn = document.getElementById('btn-feed-submit');
    var alertBox = document.getElementById('feed-form-alert');
    var honeypotInput = document.getElementById('feed_security_token_hp');
    var honeypotValue = honeypotInput ? honeypotInput.value.trim() : '';

    if (!contentTextarea) return;

    var author = authorInput && authorInput.value.trim().length > 0 ? authorInput.value.trim() : getStoredAuthor();
    var content = contentTextarea.value.trim();
    var epId = epSelect ? epSelect.value : (currentFilterEpisode !== 'all' ? currentFilterEpisode : '');

    if (!content) {
      if (alertBox) {
        alertBox.textContent = 'Por favor escribe un comentario antes de publicar.';
        alertBox.style.display = 'block';
      }
      contentTextarea.focus();
      return;
    }

    if (content.length > MAX_CHARS) {
      if (alertBox) {
        alertBox.textContent = 'El mensaje no puede exceder los ' + MAX_CHARS + ' caracteres (actual: ' + content.length + ').';
        alertBox.style.display = 'block';
      }
      return;
    }

    // 1. Verificación Honeypot anti-bot
    if (honeypotValue.length > 0) {
      if (alertBox) {
        alertBox.textContent = '⛔ [AEGIS-9 SENTINEL] Envío bloqueado: Bot automatizado detectado vía trampa honeypot.';
        alertBox.style.color = '#FF3344';
        alertBox.style.borderColor = '#FF3344';
        alertBox.style.display = 'block';
      }
      return;
    }

    // 2. Pre-validación inmediata de spam y lista negra en el cliente
    var spamVerdict = evaluateAntiSpamClient(content, author);
    if (spamVerdict.isSpam) {
      if (alertBox) {
        alertBox.textContent = '⛔ [AEGIS-9 SENTINEL] Comentario bloqueado antes de publicar: ' + spamVerdict.reason + '. El feed se mantiene limpio.';
        alertBox.style.color = '#FF3344';
        alertBox.style.borderColor = '#FF3344';
        alertBox.style.display = 'block';
      }
      return;
    }

    if (alertBox) alertBox.style.display = 'none';
    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'PUBLICANDO...';
    }

    setStoredAuthor(author);

    fetch('/api/feed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        author: author,
        content: content,
        episode_id: epId === '' || epId === 'all' ? null : parseInt(epId, 10),
        website_url_hp: honeypotValue
      })
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { status: res.status, ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'PUBLICAR EN EL MURO';
        }

        if (result.ok && result.data.status === 'created') {
          if (result.data.post) {
            var createdPost = result.data.post;
            if (createdPost.id) {
              myRecentPostIds[createdPost.id] = Date.now();
              knownPostIds[createdPost.id] = true;
            }
            saveLocalUserPost(createdPost);
          }
          contentTextarea.value = '';
          updateCharCounter();
          fetchPosts(false);

          // Feedback visual
          if (alertBox) {
            alertBox.textContent = '✓ Mensaje transmitido al feed del pod clínico en tiempo real.';
            alertBox.style.color = 'var(--magic-ring, #30FF00)';
            alertBox.style.borderColor = 'var(--magic-pulse-core, #00F200)';
            alertBox.style.display = 'block';
            setTimeout(function () {
              alertBox.style.display = 'none';
              alertBox.style.color = '#FF4444';
              alertBox.style.borderColor = '#FF4444';
            }, 3000);
          }
        } else {
          if (alertBox) {
            alertBox.textContent = result.data.error || 'Error al publicar en el muro.';
            alertBox.style.color = '#FF4444';
            alertBox.style.borderColor = '#FF4444';
            alertBox.style.display = 'block';
          }
        }
      })
      .catch(function (err) {
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'PUBLICAR EN EL MURO';
        }
        if (alertBox) {
          alertBox.textContent = 'Error de conexión con el servidor Sinatra: ' + err.message;
          alertBox.style.display = 'block';
        }
      });
  }

  function setEpisodeFilter(epId) {
    currentFilterEpisode = epId ? epId.toString() : 'all';

    // Update filter selector
    var filterSelect = document.getElementById('feed-filter-select');
    if (filterSelect && filterSelect.value !== currentFilterEpisode) {
      filterSelect.value = currentFilterEpisode;
    }

    // Update post episode pre-select
    var postEpSelect = document.getElementById('feed-post-episode-select');
    if (postEpSelect && currentFilterEpisode !== 'all') {
      postEpSelect.value = currentFilterEpisode;
    }

    // Update filter buttons
    var buttons = document.querySelectorAll('.feed-filter-btn');
    buttons.forEach(function (btn) {
      var btnEp = btn.getAttribute('data-ep');
      if (btnEp === currentFilterEpisode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    fetchPosts(false);
  }

  function initFeed() {
    var authorInput = document.getElementById('feed-author-input');
    if (authorInput) {
      authorInput.value = getStoredAuthor();
      authorInput.addEventListener('change', function () {
        setStoredAuthor(authorInput.value);
      });
    }

    var contentTextarea = document.getElementById('feed-post-content');
    if (contentTextarea) {
      contentTextarea.addEventListener('input', updateCharCounter);
      contentTextarea.addEventListener('keyup', updateCharCounter);
      contentTextarea.addEventListener('change', updateCharCounter);
      updateCharCounter();
    }

    // Botones de presets rápidos (Lounge, Snocomm, Audio)
    document.addEventListener('click', function (e) {
      var presetBtn = e.target.closest('.feed-preset-btn');
      if (presetBtn) {
        e.preventDefault();
        var preset = presetBtn.getAttribute('data-preset');
        var textarea = document.getElementById('feed-post-content');
        if (!textarea) return;

        var snippet = '';
        if (preset === 'lounge') {
          snippet = ' #lounge';
        } else if (preset === 'snocomm') {
          snippet = ' #snocomm';
        } else if (preset === 'soundcloud') {
          snippet = ' https://soundcloud.com/weird-bananas/thats-not-my-house';
        } else if (preset === 'youtube') {
          snippet = ' https://youtu.be/dQw4w9WgXcQ';
        }

        if (snippet && textarea.value.indexOf(snippet.trim()) === -1) {
          textarea.value = (textarea.value.trim() + snippet).trim();
          updateCharCounter();
          textarea.focus();
        }
      }
    });

    var submitBtn = document.getElementById('btn-feed-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        submitNewPost();
      });
    }

    var form = document.getElementById('feed-post-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        submitNewPost();
      });
    }

    // Reactions delegation
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.feed-react-btn');
      if (btn) {
        e.preventDefault();
        handleReaction(btn);
      }
    });

    // Filter selector
    var filterSelect = document.getElementById('feed-filter-select');
    if (filterSelect) {
      filterSelect.addEventListener('change', function () {
        setEpisodeFilter(filterSelect.value);
      });
    }

    // Quick filter buttons
    document.querySelectorAll('.feed-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var ep = btn.getAttribute('data-ep');
        setEpisodeFilter(ep);
      });
    });

    // Sincronizar automáticamente con el episodio seleccionado en la consola SOC principal
    document.addEventListener('cyberia:episode-selected', function (e) {
      if (e.detail && e.detail.episodeId) {
        var epId = e.detail.episodeId;
        var postEpSelect = document.getElementById('feed-post-episode-select');
        if (postEpSelect) {
          postEpSelect.value = epId;
        }
        var activeEpPill = document.getElementById('feed-active-ep-label');
        if (activeEpPill) {
          var epCode = 'EP' + (epId < 10 ? '0' + epId : epId);
          activeEpPill.textContent = epCode;
        }
      }
    });

    // Detectar también clicks directos en los botones de episodio de la lista
    document.querySelectorAll('.episode-card-item').forEach(function (item) {
      item.addEventListener('click', function () {
        var epId = item.getAttribute('data-ep-id');
        if (epId) {
          var postEpSelect = document.getElementById('feed-post-episode-select');
          if (postEpSelect) {
            postEpSelect.value = epId;
          }
          var activeEpPill = document.getElementById('feed-active-ep-label');
          if (activeEpPill) {
            var num = parseInt(epId, 10);
            activeEpPill.textContent = 'EP' + (num < 10 ? '0' + num : num);
          }
        }
      });
    });

    // Inicializar estado y botones de notificación
    notificationsEnabled = isNotificationsEnabled();
    updateNotificationButtonsUI();

    // Delegación de click para botones de notificación
    document.addEventListener('click', function (e) {
      var notifBtn = e.target.closest('.feed-notif-btn, #btn-feed-notifications, #btn-feed-notifications-header');
      if (notifBtn) {
        e.preventDefault();
        toggleNotifications();
      }
    });

    // Limpiar contador en título al enfocar la pestaña
    window.addEventListener('focus', function () {
      unreadCount = 0;
      if (originalDocumentTitle) {
        document.title = originalDocumentTitle;
      }
    });

    // Delegación de click para reproductor YouTube en facade interactivo
    document.addEventListener('click', function (e) {
      var ytFacade = e.target.closest('.feed-youtube-facade');
      if (ytFacade) {
        e.preventDefault();
        var videoId = ytFacade.getAttribute('data-video-id');
        if (videoId) {
          playYouTubeFacade(ytFacade, videoId);
        }
      }
    });

    // Delegación de click para SoundCloud facade y toggle
    document.addEventListener('click', function (e) {
      var scFacade = e.target.closest('.feed-soundcloud-facade');
      var scToggle = e.target.closest('.feed-soundcloud-toggle-btn');
      if (scFacade || scToggle) {
        e.preventDefault();
        var card = (scFacade || scToggle).closest('.feed-soundcloud-preview');
        if (card) {
          playOrToggleSoundCloud(card);
        }
      }
    });

    // Delegación de click para botón de compartir comentario individual en WhatsApp
    document.addEventListener('click', function (e) {
      var waBtn = e.target.closest('.feed-share-wa-btn');
      if (waBtn) {
        e.preventDefault();
        handleSharePostToWhatsApp(waBtn);
      }
    });

    // Delegación de click para botón de compartir el Muro en WhatsApp
    document.addEventListener('click', function (e) {
      var muroWaBtn = e.target.closest('.btn-share-feed-wa, #btn-share-feed-wa, #btn-mobile-share-wa');
      if (muroWaBtn) {
        e.preventDefault();
        handleShareMuroToWhatsApp();
      }
    });

    // Cargar posts iniciales y mejorar tarjetas
    fetchPosts(false);
    enhanceSoundCloudCards();
    setTimeout(checkUrlHashForPostHighlight, 500);

    // Auto-polling en tiempo real cada 5 segundos
    if (pollInterval) clearInterval(pollInterval);
    pollInterval = setInterval(function () {
      var textarea = document.getElementById('feed-post-content');
      // No perturbar si el usuario está activamente redactando
      if (document.activeElement === textarea && textarea.value.length > 0) {
        return;
      }
      fetchPosts(true);
    }, 5000);
  }

  // Exportar al ámbito global para integración con consola
  window.CyberiaClinicalFeed = {
    init: initFeed,
    fetchPosts: fetchPosts,
    setEpisodeFilter: setEpisodeFilter,
    toggleNotifications: toggleNotifications,
    setNotificationsEnabled: setNotificationsEnabled,
    isNotificationsEnabled: isNotificationsEnabled,
    notifyIncomingPosts: notifyIncomingPosts,
    playNotificationSound: playNotificationSound,
    extractUrls: extractUrls,
    parseYouTubeId: parseYouTubeId,
    isSoundCloudUrl: isSoundCloudUrl,
    parseSoundCloudSlug: parseSoundCloudSlug,
    playOrToggleSoundCloud: playOrToggleSoundCloud,
    enhanceSoundCloudCards: enhanceSoundCloudCards,
    parseSpotifyEmbed: parseSpotifyEmbed,
    isImageUrl: isImageUrl,
    buildPreviewCard: buildPreviewCard,
    buildHabitatLoungeCard: buildHabitatLoungeCard,
    buildSnocommCard: buildSnocommCard,
    isHabitatLoungeUrl: isHabitatLoungeUrl,
    isSnocommUrl: isSnocommUrl,
    formatContentWithPreviews: formatContentWithPreviews,
    playYouTubeFacade: playYouTubeFacade,
    updateFeedDOM: updateFeedDOM,
    ensureSoundCloudApi: ensureSoundCloudApi,
    attachSoundCloudInfiniteLoop: attachSoundCloudInfiniteLoop,
    getShareBaseUrl: getShareBaseUrl,
    openWhatsAppShare: openWhatsAppShare,
    handleSharePostToWhatsApp: handleSharePostToWhatsApp,
    handleShareMuroToWhatsApp: handleShareMuroToWhatsApp,
    checkUrlHashForPostHighlight: checkUrlHashForPostHighlight
  };

  window.CyberiaShare = window.CyberiaShare || {};
  window.CyberiaShare.getBaseUrl = getShareBaseUrl;
  window.CyberiaShare.openWhatsApp = openWhatsAppShare;
  window.CyberiaShare.sharePost = handleSharePostToWhatsApp;
  window.CyberiaShare.shareMuro = handleShareMuroToWhatsApp;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeed);
  } else {
    initFeed();
  }
})();
