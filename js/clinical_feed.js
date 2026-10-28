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
  }

  function renderPostCard(post) {
    var epLabel = 'GENERAL';
    if (post.episode_id) {
      var num = parseInt(post.episode_id, 10);
      epLabel = 'EP' + (num < 10 ? '0' + num : num);
    }

    var avatarInitial = (post.author || 'C').charAt(0).toUpperCase();
    var avatarBg = post.avatar_color || '#29C2DA';
    var formattedTime = formatTimeAgo(post.created_at);
    var safeContent = escapeHtml(post.content);

    // Formato de código inline o saltos de línea
    safeContent = safeContent.replace(/`([^`]+)`/g, '<code class="feed-inline-code">$1</code>');
    safeContent = safeContent.replace(/\n/g, '<br>');

    return [
      '<article class="feed-post-card" data-post-id="' + escapeHtml(post.id) + '" data-episode-id="' + (post.episode_id || '') + '">',
      '  <div class="feed-post-avatar" style="background-color: ' + escapeHtml(avatarBg) + ';">' + avatarInitial + '</div>',
      '  <div class="feed-post-main">',
      '    <div class="feed-post-header">',
      '      <span class="feed-post-author">' + escapeHtml(post.author) + '</span>',
      '      <span class="feed-post-pill ' + (post.episode_id ? 'feed-post-ep-pill' : 'feed-post-gen-pill') + '">',
      '        ' + epLabel,
      '      </span>',
      '      <time class="feed-post-time" datetime="' + escapeHtml(post.created_at) + '">' + formattedTime + '</time>',
      '    </div>',
      '    <div class="feed-post-body">' + safeContent + '</div>',
      '    <div class="feed-post-actions" aria-label="Reacciones al comentario">',
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

          var html = allPosts.map(renderPostCard).join('\n');
          container.innerHTML = html;

          if (preserveScroll) {
            container.scrollTop = scrollPos;
          }
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

  function submitNewPost() {
    if (isSubmitting) return;

    var authorInput = document.getElementById('feed-author-input');
    var contentTextarea = document.getElementById('feed-post-content');
    var epSelect = document.getElementById('feed-post-episode-select');
    var submitBtn = document.getElementById('btn-feed-submit');
    var alertBox = document.getElementById('feed-form-alert');

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
        episode_id: epId === '' || epId === 'all' ? null : parseInt(epId, 10)
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
            saveLocalUserPost(result.data.post);
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
      updateCharCounter();
    }

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

    // Cargar posts iniciales
    fetchPosts(false);

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
    setEpisodeFilter: setEpisodeFilter
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeed);
  } else {
    initFeed();
  }
})();
