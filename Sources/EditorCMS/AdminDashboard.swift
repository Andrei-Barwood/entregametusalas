import Foundation

public struct AdminDashboard {
    public static func renderHTML() -> String {
        return #"""
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Panel Editorial &mdash; EDITOR CMS</title>
          <link rel="stylesheet" href="/style.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <style>
            :root {
              --admin-sidebar-width: 340px;
            }
            body {
              background-color: var(--bg-primary);
              margin: 0;
              padding: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              overflow: hidden;
            }
            .admin-topbar {
              height: 60px;
              background-color: var(--bg-surface);
              border-bottom: 1px solid var(--border-color);
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 1.5rem;
              flex-shrink: 0;
              z-index: 100;
            }
            .admin-brand {
              display: flex;
              align-items: center;
              gap: 1rem;
            }
            .admin-brand h1 {
              font-family: var(--font-serif);
              font-size: 1.3rem;
              font-weight: 700;
              letter-spacing: -0.01em;
              margin: 0;
            }
            .admin-badge {
              font-family: var(--font-sans);
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
              background-color: var(--accent-subtle);
              color: var(--accent);
              padding: 0.25rem 0.5rem;
              border-radius: var(--radius-sm);
            }
            .admin-actions {
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }
            .admin-btn {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              padding: 0.5rem 1rem;
              font-family: var(--font-sans);
              font-size: 0.75rem;
              font-weight: 600;
              border-radius: var(--radius-full);
              transition: all var(--transition-fast);
              border: 1px solid var(--border-color);
              background-color: var(--bg-surface);
              color: var(--text-primary);
              cursor: pointer;
            }
            .admin-btn:hover {
              border-color: var(--text-primary);
            }
            .admin-btn-primary {
              background-color: var(--text-primary);
              color: var(--bg-primary);
              border-color: var(--text-primary);
            }
            .admin-btn-primary:hover {
              background-color: var(--accent);
              border-color: var(--accent);
              color: #ffffff;
            }
            .admin-btn-danger {
              color: #d93434;
              border-color: rgba(217, 52, 52, 0.3);
            }
            .admin-btn-danger:hover {
              background-color: #d93434;
              color: #ffffff;
            }

            /* Main Workspace Layout */
            .admin-workspace {
              display: flex;
              flex: 1;
              overflow: hidden;
            }

            /* Sidebar Posts List */
            .admin-sidebar {
              width: var(--admin-sidebar-width);
              background-color: var(--bg-surface);
              border-right: 1px solid var(--border-color);
              display: flex;
              flex-direction: column;
              flex-shrink: 0;
            }
            .sidebar-header {
              padding: 1rem 1.25rem;
              border-bottom: 1px solid var(--border-color);
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .sidebar-title {
              font-family: var(--font-sans);
              font-size: 0.72rem;
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: var(--text-secondary);
            }
            .posts-list {
              flex: 1;
              overflow-y: auto;
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .post-list-item {
              padding: 1.1rem 1.25rem;
              border-bottom: 1px solid var(--border-light);
              cursor: pointer;
              transition: background-color var(--transition-fast);
            }
            .post-list-item:hover {
              background-color: var(--bg-muted);
            }
            .post-list-item.active {
              background-color: var(--accent-subtle);
              border-left: 3px solid var(--accent);
            }
            .list-item-delete-btn {
              background: none;
              border: 1px solid transparent;
              color: var(--text-muted);
              font-size: 1.15rem;
              line-height: 1;
              padding: 0.15rem 0.4rem;
              border-radius: var(--radius-sm);
              cursor: pointer;
              transition: all var(--transition-fast);
              margin-left: 0.4rem;
            }
            .list-item-delete-btn:hover {
              color: #d93434;
              border-color: rgba(217, 52, 52, 0.25);
              background-color: rgba(217, 52, 52, 0.08);
            }
            .item-category {
              font-family: var(--font-sans);
              font-size: 0.65rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              color: var(--accent);
              margin-bottom: 0.25rem;
            }
            .item-title {
              font-family: var(--font-serif);
              font-size: 0.95rem;
              font-weight: 600;
              color: var(--text-primary);
              margin-bottom: 0.25rem;
              line-height: 1.3;
            }
            .item-meta {
              font-family: var(--font-sans);
              font-size: 0.72rem;
              color: var(--text-secondary);
              display: flex;
              justify-content: space-between;
            }

            /* Main Editor & Live Preview */
            .admin-editor-wrap {
              flex: 1;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              background-color: var(--bg-primary);
            }
            .editor-fields-bar {
              padding: 1.25rem 2rem;
              background-color: var(--bg-surface);
              border-bottom: 1px solid var(--border-color);
              overflow-y: auto;
              max-height: 280px;
            }
            .fields-grid {
              display: grid;
              grid-template-columns: 2fr 1fr 1fr;
              gap: 1rem;
              margin-bottom: 1rem;
            }
            .field-group {
              display: flex;
              flex-direction: column;
              gap: 0.35rem;
            }
            .field-group label {
              font-family: var(--font-sans);
              font-size: 0.7rem;
              font-weight: 700;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              color: var(--text-secondary);
            }
            .field-input, .field-select, .field-textarea {
              padding: 0.5rem 0.75rem;
              border: 1px solid var(--border-color);
              border-radius: var(--radius-sm);
              background-color: var(--bg-primary);
              font-family: var(--font-sans);
              font-size: 0.85rem;
              color: var(--text-primary);
              outline: none;
            }
            .field-input:focus, .field-select:focus, .field-textarea:focus {
              border-color: var(--accent);
            }
            .field-input-title {
              font-family: var(--font-serif);
              font-size: 1.4rem;
              font-weight: 700;
              padding: 0.5rem 0.75rem;
            }

            /* Toolbar */
            .editor-toolbar {
              padding: 0.5rem 1.5rem;
              background-color: var(--bg-muted);
              border-bottom: 1px solid var(--border-color);
              display: flex;
              align-items: center;
              gap: 0.5rem;
              flex-wrap: wrap;
            }
            .tool-btn {
              padding: 0.35rem 0.65rem;
              font-family: var(--font-sans);
              font-size: 0.75rem;
              font-weight: 600;
              border-radius: var(--radius-sm);
              border: 1px solid var(--border-color);
              background-color: var(--bg-surface);
              color: var(--text-primary);
              cursor: pointer;
            }
            .tool-btn:hover {
              background-color: var(--accent-subtle);
              color: var(--accent);
              border-color: var(--accent);
            }

            /* Split Panes: Markdown vs Live Preview */
            .editor-split-body {
              flex: 1;
              display: grid;
              grid-template-columns: 1fr 1fr;
              overflow: hidden;
            }
            .markdown-pane {
              display: flex;
              flex-direction: column;
              border-right: 1px solid var(--border-color);
              background-color: var(--bg-surface);
            }
            .markdown-textarea {
              flex: 1;
              width: 100%;
              padding: 2rem;
              font-family: 'JetBrains Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 0.95rem;
              line-height: 1.7;
              border: none;
              outline: none;
              resize: none;
              background-color: var(--bg-surface);
              color: var(--text-primary);
            }
            .preview-pane {
              flex: 1;
              overflow-y: auto;
              padding: 3rem 2.5rem;
              background-color: var(--bg-primary);
            }
            .preview-watermark {
              font-family: var(--font-sans);
              font-size: 0.68rem;
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: var(--text-muted);
              margin-bottom: 1.5rem;
              text-align: right;
            }

            /* Toast Notification */
            .toast {
              position: fixed;
              bottom: 2rem;
              right: 2rem;
              padding: 0.85rem 1.5rem;
              background-color: var(--text-primary);
              color: var(--bg-primary);
              border-radius: var(--radius-full);
              font-family: var(--font-sans);
              font-size: 0.82rem;
              font-weight: 600;
              box-shadow: var(--shadow-hover);
              opacity: 0;
              transform: translateY(15px);
              transition: all 0.3s ease;
              pointer-events: none;
              z-index: 9999;
            }
            .toast.show {
              opacity: 1;
              transform: translateY(0);
            }
          </style>
        </head>
        <body>

          <!-- Top Navigation Bar -->
          <header class="admin-topbar">
            <div class="admin-brand">
              <a href="/" target="_blank" style="text-decoration: none;">
                <h1>EDITOR</h1>
              </a>
              <span class="admin-badge">Swift CMS</span>
            </div>
            
            <div class="admin-actions">
              <button class="admin-btn" id="btn-new-post" title="Crear un nuevo ensayo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Nuevo Artículo
              </button>
              
              <button class="admin-btn" id="btn-rebuild" title="Regenerar todos los archivos estáticos">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
                Reconstruir Sitio
              </button>

              <button class="admin-btn admin-btn-danger" id="btn-delete" style="display: none;" title="Eliminar artículo actual">
                Eliminar
              </button>

              <button class="admin-btn admin-btn-primary" id="btn-save" title="Guardar cambios en archivo Markdown y publicar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                Guardar y Publicar
              </button>

              <a href="/" target="_blank" class="admin-btn" title="Abrir sitio web en nueva pestaña">
                Ver Sitio &rarr;
              </a>
            </div>
          </header>

          <!-- Workspace -->
          <div class="admin-workspace">
            
            <!-- Left Sidebar: Articles List -->
            <aside class="admin-sidebar">
              <div class="sidebar-header">
                <span class="sidebar-title">Artículos (<span id="posts-count">0</span>)</span>
                <span style="font-family: var(--font-sans); font-size: 0.72rem; color: var(--text-secondary);">Markdown en disco</span>
              </div>
              <ul class="posts-list" id="posts-list">
                <!-- Populated via JS fetch -->
              </ul>
            </aside>

            <!-- Main Editor Area -->
            <main class="admin-editor-wrap">
              
              <!-- Metadata Collapsible / Top Fields -->
              <div class="editor-fields-bar">
                <div style="margin-bottom: 0.75rem;">
                  <input type="text" id="post-title" class="field-input field-input-title" placeholder="Título del artículo..." style="width: 100%;">
                </div>

                <div class="fields-grid">
                  <div class="field-group">
                    <label for="post-slug">Slug (URL del artículo)</label>
                    <input type="text" id="post-slug" class="field-input" placeholder="titulo-del-articulo">
                  </div>
                  <div class="field-group">
                    <label for="post-category">Categoría</label>
                    <input type="text" id="post-category" class="field-input" placeholder="Arquitectura, Ensayo, Fotografía...">
                  </div>
                  <div class="field-group">
                    <label for="post-format">Formato</label>
                    <select id="post-format" class="field-select">
                      <option value="standard">Estándar (Con imagen bleed)</option>
                      <option value="quote">Cita Editorial</option>
                      <option value="gallery">Galería / Ensayo Visual</option>
                      <option value="audio">Audio / Podcast</option>
                    </select>
                  </div>
                </div>

                <div class="fields-grid">
                  <div class="field-group">
                    <label for="post-cover">Imagen de Portada (URL)</label>
                    <input type="text" id="post-cover" class="field-input" placeholder="https://images.unsplash.com/...">
                  </div>
                  <div class="field-group">
                    <label for="post-caption">Pie de foto / Créditos</label>
                    <input type="text" id="post-caption" class="field-input" placeholder="Fotografía de Kenzo Mori.">
                  </div>
                  <div class="field-group">
                    <label for="post-date">Fecha de Publicación</label>
                    <input type="text" id="post-date" class="field-input" placeholder="18 Octubre, 2026">
                  </div>
                </div>

                <div class="field-group">
                  <label for="post-excerpt">Extracto / Resumen (3-4 líneas)</label>
                  <textarea id="post-excerpt" class="field-textarea" rows="2" placeholder="Breve sinopsis que aparecerá en el feed..."></textarea>
                </div>
              </div>

              <!-- Markdown Quick Formatting Toolbar -->
              <div class="editor-toolbar">
                <span style="font-family: var(--font-sans); font-size: 0.72rem; font-weight: 700; color: var(--text-secondary); margin-right: 0.5rem;">HERRAMIENTAS:</span>
                <button type="button" class="tool-btn" onclick="insertSyntax('## ', '')">H2</button>
                <button type="button" class="tool-btn" onclick="insertSyntax('### ', '')">H3</button>
                <button type="button" class="tool-btn" onclick="insertSyntax('**', '**')"><strong>B</strong></button>
                <button type="button" class="tool-btn" onclick="insertSyntax('*', '*')"><em>I</em></button>
                <button type="button" class="tool-btn" onclick="insertSyntax('> ', '')">Cita</button>
                <button type="button" class="tool-btn" onclick="insertSyntax('```\\n', '\\n```')">Código</button>
                <button type="button" class="tool-btn" onclick="insertSyntax('- ', '')">Lista</button>
                <button type="button" class="tool-btn" onclick="insertSyntax('[Texto del enlace](', ')')">Enlace</button>
                <button type="button" class="tool-btn" onclick="insertSyntax('![Descripción de la imagen](', ')')">Imagen</button>
                <button type="button" class="tool-btn" onclick="insertSyntax('https://youtube.com/playlist?list=PLrnz4iRZQNleNFUmd-0ZHFafTvUuvhlXr', '')" title="Insertar Playlist o Video de YouTube">YouTube</button>
                <span style="flex: 1;"></span>
                <span style="font-family: var(--font-sans); font-size: 0.7rem; color: var(--accent);">Tip: El primer párrafo recibe Letra Capital automáticamente</span>
              </div>

              <!-- Split Screen: Markdown Input + Live Preview -->
              <div class="editor-split-body">
                <div class="markdown-pane">
                  <textarea id="post-content" class="markdown-textarea" placeholder="Escribe tu ensayo en Markdown puro...

                  El primer párrafo aparecerá con una elegante letra capital de estilo editorial.

                  ## Subtítulo de sección

                  Puedes incluir citas hermosas:
                  > «La simplicidad no es la falta de desorden, sino la presencia de propósito.»
                  > — Jony Ive

                  O bloques de código limpio:
                  ```css
                  :root {
                    --editorial-space: 2rem;
                  }
                  ```"></textarea>
                </div>

                <div class="preview-pane">
                  <div class="preview-watermark">&mdash; Vista Previa Editorial en Vivo &mdash;</div>
                  <div class="prose" id="live-preview-content">
                    <!-- Rendered live via JS -->
                  </div>
                </div>
              </div>

            </main>
          </div>

          <div class="toast" id="admin-toast">Cambios guardados con éxito</div>

          <script>
            let currentPostSlug = null;
            let postsCache = [];

            const titleInput = document.getElementById('post-title');
            const slugInput = document.getElementById('post-slug');
            const categoryInput = document.getElementById('post-category');
            const formatSelect = document.getElementById('post-format');
            const coverInput = document.getElementById('post-cover');
            const captionInput = document.getElementById('post-caption');
            const dateInput = document.getElementById('post-date');
            const excerptInput = document.getElementById('post-excerpt');
            const contentInput = document.getElementById('post-content');
            const previewEl = document.getElementById('live-preview-content');
            const deleteBtn = document.getElementById('btn-delete');
            const toastEl = document.getElementById('admin-toast');

            // Load Posts List on Init
            async function loadPosts() {
              try {
                const res = await fetch('/api/posts');
                postsCache = await res.json();
                renderSidebar(postsCache);

                if (!currentPostSlug && postsCache.length > 0) {
                  selectPost(postsCache[0].slug);
                }
              } catch (e) {
                console.error("Error al cargar artículos:", e);
              }
            }

            function renderSidebar(posts) {
              const listEl = document.getElementById('posts-list');
              document.getElementById('posts-count').textContent = posts.length;

              listEl.innerHTML = posts.map(p => `
                <li class="post-list-item ${p.slug === currentPostSlug ? 'active' : ''}" onclick="selectPost('${p.slug}')">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                    <div style="flex: 1; min-width: 0;">
                      <div class="item-category">${escapeHtml(p.category)} &bull; ${escapeHtml(p.format)}</div>
                      <div class="item-title">${escapeHtml(p.title)}</div>
                    </div>
                    <button type="button" class="list-item-delete-btn" onclick="deleteArticle('${p.slug}', event)" title="Eliminar este artículo" aria-label="Eliminar">&times;</button>
                  </div>
                  <div class="item-meta" style="margin-top: 0.35rem;">
                    <span>${escapeHtml(p.date)}</span>
                    <span>${p.isPublished ? 'Publicado' : 'Borrador'}</span>
                  </div>
                </li>
              `).join('');
            }

            async function selectPost(slug) {
              currentPostSlug = slug;
              renderSidebar(postsCache);
              deleteBtn.style.display = 'inline-flex';

              try {
                const res = await fetch(`/api/posts?slug=${encodeURIComponent(slug)}`);
                const post = await res.json();

                titleInput.value = post.title || '';
                slugInput.value = post.slug || '';
                slugInput.readOnly = true;
                categoryInput.value = post.category || '';
                formatSelect.value = post.format || 'standard';
                coverInput.value = post.coverImage || '';
                captionInput.value = post.imageCaption || '';
                dateInput.value = post.date || '';
                excerptInput.value = post.excerpt || '';
                contentInput.value = post.content || '';

                updateLivePreview();
              } catch (e) {
                console.error("Error al cargar post individual:", e);
              }
            }

            function resetForNewPost() {
              currentPostSlug = null;
              deleteBtn.style.display = 'none';

              titleInput.value = '';
              slugInput.value = '';
              slugInput.readOnly = false;
              categoryInput.value = 'Ensayo';
              formatSelect.value = 'standard';
              coverInput.value = '';
              captionInput.value = '';
              dateInput.value = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
              excerptInput.value = '';
              contentInput.value = '';

              document.querySelectorAll('.post-list-item').forEach(el => el.classList.remove('active'));
              titleInput.focus();
              updateLivePreview();
            }

            // Auto-slugify title for new posts
            titleInput.addEventListener('input', () => {
              if (!currentPostSlug || !slugInput.readOnly) {
                slugInput.value = titleInput.value
                  .toLowerCase()
                  .trim()
                  .replace(/[\s\W-]+/g, '-')
                  .replace(/^-+|-+$/g, '');
              }
              updateLivePreview();
            });

            contentInput.addEventListener('input', updateLivePreview);
            excerptInput.addEventListener('input', updateLivePreview);

            // Simple In-Browser Markdown Renderer for Instant Live Preview
            function updateLivePreview() {
              const text = contentInput.value;
              const title = titleInput.value || 'Título sin definir';
              const cover = coverInput.value;
              const excerpt = excerptInput.value;

              let html = `<h1 style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; margin-bottom: 0.5rem;">${escapeHtml(title)}</h1>`;
              if (excerpt) {
                html += `<p style="font-style: italic; color: var(--text-secondary); margin-bottom: 1.5rem;">${escapeHtml(excerpt)}</p>`;
              }
              if (cover) {
                html += `<div style="margin: 1.5rem 0; border-radius: 4px; overflow: hidden;"><img src="${escapeHtml(cover)}" style="width: 100%; height: auto; max-height: 380px; object-fit: cover;"></div>`;
              }

              const lines = text.split('\n');
              let inBlockquote = false;
              let inCode = false;
              let codeLines = [];
              let leadDone = false;

              for (let line of lines) {
                let trimmed = line.trim();

                if (trimmed.startsWith('```')) {
                  if (inCode) {
                    html += `<pre style="background: var(--code-bg); padding: 1.25rem; border-radius: var(--radius-sm); font-family: monospace; overflow-x: auto; margin: 1.5rem 0;"><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`;
                    codeLines = [];
                    inCode = false;
                  } else {
                    inCode = true;
                  }
                  continue;
                }

                if (inCode) {
                  codeLines.push(line);
                  continue;
                }

                if (!trimmed) {
                  continue;
                }

                // 1. Standalone Images ![alt](url)
                const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
                if (imgMatch) {
                  const alt = imgMatch[1];
                  const url = imgMatch[2];
                  html += `
                    <div class="post-media-bleed" style="margin: 2.25rem 0; text-align: center;">
                      <img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" style="width: 100%; max-height: 540px; object-fit: cover; border-radius: var(--radius-sm);" loading="lazy">
                      ${alt ? `<div class="media-caption" style="font-family: var(--font-sans); font-size: 0.8rem; color: var(--text-secondary); text-align: center; margin-top: 0.5rem; font-style: italic;">${escapeHtml(alt)}</div>` : ''}
                    </div>
                  `;
                  continue;
                }

                // 2. YouTube Video or Playlist Automatic Embed
                if (trimmed.startsWith('http') && (trimmed.includes('youtube.com') || trimmed.includes('youtu.be'))) {
                  const ytPlaylist = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
                  const ytVideo = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/);

                  if (ytPlaylist) {
                    const listId = ytPlaylist[1];
                    html += `
                      <div class="video-embed-wrap" style="margin: 2.25rem 0;">
                        <iframe src="https://www.youtube.com/embed/videoseries?list=${listId}" title="Reproductor de Playlist de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
                      </div>
                    `;
                    continue;
                  } else if (ytVideo) {
                    const videoId = ytVideo[1];
                    html += `
                      <div class="video-embed-wrap" style="margin: 2.25rem 0;">
                        <iframe src="https://www.youtube.com/embed/${videoId}" title="Reproductor de Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
                      </div>
                    `;
                    continue;
                  }
                }

                // 3. Raw <iframe> or <div class="video-embed-wrap">
                if (trimmed.startsWith('<iframe') && trimmed.includes('</iframe>')) {
                  html += `<div class="video-embed-wrap" style="margin: 2.25rem 0;">${trimmed}</div>`;
                  continue;
                } else if (trimmed.startsWith('<div class="video-embed-wrap')) {
                  html += trimmed;
                  continue;
                }

                // 4. Blockquotes >
                if (trimmed.startsWith('>')) {
                  const quoteContent = trimmed.substring(1).trim();
                  html += `<blockquote style="border-left: 3px solid var(--accent); padding-left: 1.25rem; margin: 2rem 0; font-family: var(--font-serif); font-style: italic; font-size: 1.25rem; line-height: 1.6;">${escapeHtml(quoteContent)}</blockquote>`;
                  continue;
                }

                // 3. Headings
                if (trimmed.startsWith('### ')) {
                  html += `<h3 style="font-family: var(--font-serif); font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 0.75rem;">${escapeHtml(trimmed.substring(4))}</h3>`;
                  continue;
                } else if (trimmed.startsWith('## ')) {
                  html += `<h2 style="font-family: var(--font-serif); font-size: 1.85rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem;">${escapeHtml(trimmed.substring(3))}</h2>`;
                  continue;
                } else if (trimmed.startsWith('# ')) {
                  html += `<h1 style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem;">${escapeHtml(trimmed.substring(2))}</h1>`;
                  continue;
                }

                // 4. Horizontal Rules
                if (trimmed === '---' || trimmed === '***') {
                  html += `<hr style="margin: 3rem 0; border: none; border-top: 1px solid var(--border-color);">`;
                  continue;
                }

                // 5. Lists
                if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                  html += `<ul style="margin: 1rem 0 1rem 1.5rem; list-style-type: disc;"><li>${escapeHtml(trimmed.substring(2))}</li></ul>`;
                  continue;
                }

                // 6. Paragraphs with inline formatting
                let formatted = escapeHtml(trimmed);

                // Inline images: ![alt](url)
                formatted = formatted.replace(/!\[(.*?)\]\((.*?)\)/g, (m, alt, url) => {
                  return `<div class="post-media-bleed" style="margin: 2rem 0; text-align: center;"><img src="${url}" alt="${alt}" style="width: 100%; max-height: 520px; object-fit: cover; border-radius: var(--radius-sm);">${alt ? `<div class="media-caption" style="font-family: var(--font-sans); font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem; font-style: italic;">${alt}</div>` : ''}</div>`;
                });

                // Inline links: [label](url)
                formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: var(--accent); text-decoration: underline;">$1</a>');

                // Bold: **text**
                formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

                // Italic: *text*
                formatted = formatted.replace(/\*([^*]+?)\*/g, '<em>$1</em>');

                // Inline code: `code`
                formatted = formatted.replace(/`([^`]+)`/g, '<code style="background-color: var(--code-bg); color: var(--accent); padding: 0.15rem 0.35rem; border-radius: 3px; font-family: monospace;">$1</code>');

                if (!leadDone && !trimmed.startsWith('![')) {
                  html += `<p class="lead">${formatted}</p>`;
                  leadDone = true;
                } else {
                  html += `<p>${formatted}</p>`;
                }
              }

              previewEl.innerHTML = html;
            }

            // Save / Publish
            document.getElementById('btn-save').addEventListener('click', async () => {
              const slug = slugInput.value.trim();
              if (!slug) {
                alert('Por favor especifica un slug para el artículo.');
                return;
              }

              const payload = {
                title: titleInput.value.trim() || 'Sin título',
                slug: slug,
                category: categoryInput.value.trim() || 'Ensayo',
                format: formatSelect.value,
                coverImage: coverInput.value.trim(),
                imageCaption: captionInput.value.trim(),
                date: dateInput.value.trim(),
                excerpt: excerptInput.value.trim(),
                content: contentInput.value,
                isPublished: true
              };

              try {
                const res = await fetch('/api/posts', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(payload)
                });
                const result = await res.json();
                if (result.success) {
                  showToast('✓ Artículo guardado y sitio reconstruido');
                  currentPostSlug = slug;
                  await loadPosts();
                } else {
                  alert('Error al guardar: ' + (result.error || 'Desconocido'));
                }
              } catch (e) {
                alert('Error al comunicarse con el servidor Swift CMS');
              }
            });

            // Rebuild
            document.getElementById('btn-rebuild').addEventListener('click', async () => {
              try {
                const res = await fetch('/api/build', { method: 'POST' });
                const result = await res.json();
                showToast('✓ ' + result.message);
              } catch (e) {
                alert('Error al reconstruir el sitio');
              }
            });

            async function deleteArticle(slug, event) {
              if (event) event.stopPropagation();
              if (!slug) return;

              const post = postsCache.find(p => p.slug === slug);
              const postTitle = post ? post.title : slug;

              if (!confirm(`¿Eliminar definitivamente el artículo "${postTitle}"?`)) {
                return;
              }

              try {
                // Try POST /api/posts/delete first for maximum browser compatibility
                let res = await fetch(`/api/posts/delete?slug=${encodeURIComponent(slug)}`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ slug: slug })
                });

                if (!res.ok) {
                  // Fallback to DELETE /api/posts
                  res = await fetch(`/api/posts?slug=${encodeURIComponent(slug)}`, { method: 'DELETE' });
                }

                const result = await res.json();
                if (result.success) {
                  showToast('✓ ' + (result.message || 'Artículo eliminado con éxito'));
                  if (currentPostSlug === slug) {
                    resetForNewPost();
                  }
                  await loadPosts();
                } else {
                  alert('Error al eliminar: ' + (result.error || 'Respuesta no exitosa'));
                }
              } catch (err) {
                console.error("Error al eliminar artículo:", err);
                alert('No se pudo comunicar con el servidor para eliminar el artículo. Verifica que el servidor Swift esté corriendo.');
              }
            }

            // Top Bar Delete button with 2-step in-place confirmation
            let deleteConfirmTimeout = null;
            deleteBtn.addEventListener('click', async () => {
              if (!currentPostSlug) return;

              if (deleteBtn.dataset.confirming !== 'true') {
                deleteBtn.dataset.confirming = 'true';
                deleteBtn.textContent = '¿Confirmar eliminación?';
                deleteBtn.style.backgroundColor = '#d93434';
                deleteBtn.style.color = '#ffffff';

                deleteConfirmTimeout = setTimeout(() => {
                  deleteBtn.dataset.confirming = 'false';
                  deleteBtn.textContent = 'Eliminar';
                  deleteBtn.style.backgroundColor = '';
                  deleteBtn.style.color = '';
                }, 4000);
                return;
              }

              // Confirmed!
              clearTimeout(deleteConfirmTimeout);
              deleteBtn.dataset.confirming = 'false';
              deleteBtn.textContent = 'Eliminar';
              deleteBtn.style.backgroundColor = '';
              deleteBtn.style.color = '';

              await deleteArticle(currentPostSlug, null);
            });

            document.getElementById('btn-new-post').addEventListener('click', resetForNewPost);

            function insertSyntax(prefix, suffix) {
              const start = contentInput.selectionStart;
              const end = contentInput.selectionEnd;
              const text = contentInput.value;
              const selected = text.substring(start, end);
              const replacement = prefix + selected + suffix;
              contentInput.value = text.substring(0, start) + replacement + text.substring(end);
              contentInput.focus();
              contentInput.selectionStart = start + prefix.length;
              contentInput.selectionEnd = start + prefix.length + selected.length;
              updateLivePreview();
            }

            function showToast(msg) {
              toastEl.textContent = msg;
              toastEl.classList.add('show');
              setTimeout(() => toastEl.classList.remove('show'), 2800);
            }

            function escapeHtml(str) {
              if (!str) return '';
              return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
            }

            // Start
            loadPosts();
          </script>
        </body>
        </html>
"""#
    }
}
