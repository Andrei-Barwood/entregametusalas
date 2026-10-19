import Foundation

public struct SiteGenerator {
    public let baseDir: URL
    public let contentDir: URL
    public let outputPostsDir: URL
    public let settingsFile: URL

    public init(baseDir: URL) {
        self.baseDir = baseDir
        self.contentDir = baseDir.appendingPathComponent("content/posts")
        self.outputPostsDir = baseDir.appendingPathComponent("posts")
        self.settingsFile = baseDir.appendingPathComponent("content/settings.json")
    }

    public func loadSettings() -> SiteSettings {
        return SiteSettings.load(from: settingsFile)
    }

    public func loadAllPosts() -> [Post] {
        let fm = FileManager.default
        guard fm.fileExists(atPath: contentDir.path) else { return [] }

        guard let files = try? fm.contentsOfDirectory(at: contentDir, includingPropertiesForKeys: nil) else {
            return [] }

        var posts: [Post] = []
        for file in files where file.pathExtension == "md" {
            if let post = Post.fromMarkdownFile(at: file) {
                posts.append(post)
            }
        }

        // Sort: Published first, then keep list
        return posts
    }

    @discardableResult
    public func build() -> Bool {
        let posts = loadAllPosts()
        let settings = loadSettings()
        let fm = FileManager.default

        // Ensure posts/ folder exists
        if !fm.fileExists(atPath: outputPostsDir.path) {
            try? fm.createDirectory(at: outputPostsDir, withIntermediateDirectories: true)
        }

        // 1. Build index.html
        let indexHTML = renderIndex(posts: posts, settings: settings)
        let indexPath = baseDir.appendingPathComponent("index.html")
        try? indexHTML.write(to: indexPath, atomically: true, encoding: .utf8)

        // 2. Build about.html
        let aboutHTML = renderAbout(settings: settings)
        let aboutPath = baseDir.appendingPathComponent("about.html")
        try? aboutHTML.write(to: aboutPath, atomically: true, encoding: .utf8)

        // 3. Build individual post pages: posts/<slug>.html
        for (idx, post) in posts.enumerated() {
            let prevPost = idx > 0 ? posts[idx - 1] : nil
            let nextPost = idx < posts.count - 1 ? posts[idx + 1] : nil

            let singleHTML = renderSinglePost(post: post, prevPost: prevPost, nextPost: nextPost, isSubdir: true, settings: settings)
            let postFile = outputPostsDir.appendingPathComponent("\(post.slug).html")
            try? singleHTML.write(to: postFile, atomically: true, encoding: .utf8)
        }

        // 4. Update root post.html with the first standard post
        if let firstPost = posts.first(where: { $0.format == .standard }) ?? posts.first {
            let prevPost = posts.count > 1 ? posts[1] : nil
            let postHTML = renderSinglePost(post: firstPost, prevPost: prevPost, nextPost: nil, isSubdir: false, settings: settings)
            let rootPostFile = baseDir.appendingPathComponent("post.html")
            try? postHTML.write(to: rootPostFile, atomically: true, encoding: .utf8)
        }

        // 5. Update search index for app.js
        updateSearchIndex(posts: posts)

        // 6. Generate admin.html for static serving if accessed
        let adminHTML = AdminDashboard.renderHTML(settings: settings)
        let adminFile = baseDir.appendingPathComponent("admin.html")
        try? adminHTML.write(to: adminFile, atomically: true, encoding: .utf8)

        print("✓ Sitio reconstruido con éxito (\(posts.count) artículos procesados)")
        return true
    }

    // --- Template Renders ---

    private func renderIndex(posts: [Post], settings: SiteSettings) -> String {
        var feedHTML = ""

        for post in posts where post.isPublished {
            switch post.format {
            case .standard:
                feedHTML += renderStandardFeedEntry(post: post)
            case .quote:
                feedHTML += renderQuoteFeedEntry(post: post)
            case .gallery:
                feedHTML += renderGalleryFeedEntry(post: post)
            case .audio:
                feedHTML += renderAudioFeedEntry(post: post)
            }
        }

        return """
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>\(escape(settings.siteTitle)) &mdash; \(escape(settings.siteTagline))</title>
          <meta name="description" content="\(escape(settings.siteDescription))">
          <link rel="stylesheet" href="style.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        </head>
        <body>
          <div class="reading-progress-container" aria-hidden="true">
            <div class="reading-progress-bar"></div>
          </div>

          <div class="site-wrapper">
            <header class="site-header">
              <div class="header-top-bar">
                <button class="header-action-btn search-open-btn" aria-label="Abrir buscador (Cmd+K)" title="Buscar (Cmd+K)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
                <button class="header-action-btn theme-toggle-btn" aria-label="Cambiar tema de color" title="Alternar modo claro / oscuro">
                  <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  <svg class="icon-sun" style="display: none;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </button>
              </div>

              <div class="site-branding">
                <h1 class="site-title">
                  <a href="index.html">\(escape(settings.siteTitle))</a>
                </h1>
                <p class="site-tagline">\(escape(settings.siteTagline))</p>
              </div>

              <nav class="site-nav" aria-label="Navegación principal">
                <a href="index.html" class="active">Inicio</a>
                <a href="#feed">Artículos</a>
                <a href="about.html">Sobre mí</a>
                <a href="about.html#contacto">Contacto</a>
                <a href="/admin" style="color: var(--accent);">CMS Admin</a>
              </nav>
            </header>

            <main class="site-main" id="feed">
              <div class="container-feed posts-feed">
                \(feedHTML)

                <div class="pagination-wrap">
                  <button class="pagination-btn" id="load-more-btn" onclick="this.textContent = 'Has llegado al final del archivo'; this.style.pointerEvents = 'none';">
                    Cargar más ensayos
                  </button>
                </div>
              </div>
            </main>

            <section class="newsletter-strip">
              <div class="newsletter-content">
                <h3>\(escape(settings.newsletterTitle))</h3>
                <p>\(escape(settings.newsletterText))</p>
                <form class="newsletter-form" onsubmit="event.preventDefault(); alert('¡Gracias por unirte a nuestro círculo de lectura dominical!'); this.reset();">
                  <input type="email" class="newsletter-input" placeholder="Tu correo electrónico..." required aria-label="Correo electrónico">
                  <button type="submit" class="newsletter-btn">\(escape(settings.newsletterButton))</button>
                </form>
              </div>
            </section>

            <footer class="site-footer">
              <div class="footer-inner">
                <nav class="footer-nav" aria-label="Navegación del pie">
                  <a href="index.html">Inicio</a>
                  <a href="post.html">Artículo destacado</a>
                  <a href="about.html">Sobre mí</a>
                  <a href="about.html#contacto">Contacto</a>
                  <a href="/admin">Panel CMS</a>
                  <a href="#feed" class="search-open-btn">Buscar</a>
                </nav>
                <p class="footer-copyright">
                  \(escape(settings.footerCopyright))
                </p>
                <a href="#top" class="footer-back-to-top">
                  Volver arriba
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                </a>
              </div>
            </footer>
          </div>

          <div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="Búsqueda instantánea de artículos">
            <button class="search-modal-close search-close-btn" aria-label="Cerrar búsqueda">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div class="search-box-wrap">
              <input type="search" class="search-input" placeholder="Escribe para buscar..." autocomplete="off" spellcheck="false">
              <div class="search-hint">
                <span>Presiona las flechas o haz clic para abrir</span>
                <div style="display: flex; gap: 0.4rem;">
                  <kbd class="kbd-badge">ESC</kbd>
                  <kbd class="kbd-badge">⌘K</kbd>
                </div>
              </div>
            </div>
            <div class="search-results-list" id="search-results"></div>
          </div>

          <script src="app.js"></script>
        </body>
        </html>
        """
    }

    private func renderAbout(settings: SiteSettings) -> String {
        let principlesHTML = settings.principles.map { p in
            """
            <div class="principle-item">
              <h4>\(escape(p.number)). \(escape(p.title))</h4>
              <p>\(escape(p.description))</p>
            </div>
            """
        }.joined(separator: "\n            ")

        let principlesBlock = settings.principles.isEmpty ? "" : """
        <div class="principles-grid">
          \(principlesHTML)
        </div>
        """

        return """
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sobre mí &mdash; \(escape(settings.authorName))</title>
          <meta name="description" content="Perfil de \(escape(settings.authorName)) &mdash; \(escape(settings.authorBio))">
          <link rel="stylesheet" href="style.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        </head>
        <body>
          <div class="reading-progress-container" aria-hidden="true">
            <div class="reading-progress-bar"></div>
          </div>

          <div class="site-wrapper">
            <header class="site-header">
              <div class="header-top-bar">
                <button class="header-action-btn search-open-btn" aria-label="Abrir buscador (Cmd+K)" title="Buscar (Cmd+K)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
                <button class="header-action-btn theme-toggle-btn" aria-label="Cambiar tema de color" title="Alternar modo claro / oscuro">
                  <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  <svg class="icon-sun" style="display: none;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </button>
              </div>

              <div class="site-branding">
                <div class="site-title">
                  <a href="index.html">\(escape(settings.siteTitle))</a>
                </div>
                <p class="site-tagline">\(escape(settings.siteTagline))</p>
              </div>

              <nav class="site-nav" aria-label="Navegación principal">
                <a href="index.html">Inicio</a>
                <a href="index.html#feed">Artículos</a>
                <a href="about.html" class="active">Sobre mí</a>
                <a href="about.html#contacto">Contacto</a>
              </nav>
            </header>

            <main class="site-main">
              <div class="container-prose">
                <section class="about-hero">
                  <div class="about-portrait-wrap">
                    <img src="\(settings.authorAvatar)" 
                         alt="Fotografía de \(escape(settings.authorName)) en luz natural">
                  </div>
                  <span class="about-tagline">\(escape(settings.aboutTagline))</span>
                  <h1 class="about-title">\(escape(settings.aboutTitle))</h1>
                  \(settings.authorQuote.isEmpty ? "" : "<p style=\"font-family: var(--font-serif); font-size: 1.25rem; font-style: italic; color: var(--text-primary); max-width: 540px; margin: 1rem auto 0 auto;\">&ldquo;\(escape(settings.authorQuote))&rdquo;</p>")
                </section>

                <div class="prose">
                  \(settings.aboutLead.isEmpty ? "" : "<p class=\"lead\" style=\"text-align: center; font-style: italic; margin: 2rem auto 3rem auto;\">\(escape(settings.aboutLead))</p>")

                  \(principlesBlock)

                  <section class="contact-section" id="contacto">
                    <h3>Iniciar una conversación</h3>
                    <p class="contact-intro">
                      \(escape(settings.contactIntro))
                    </p>

                    <form class="minimal-form" onsubmit="event.preventDefault(); alert('Gracias por tu mensaje. Responderé con calma en un plazo de dos a tres días laborables.'); this.reset();">
                      <div class="form-group">
                        <label for="contact-name" class="form-label">Tu nombre</label>
                        <input type="text" id="contact-name" class="form-input" placeholder="Elena Márquez" required>
                      </div>

                      <div class="form-group">
                        <label for="contact-email" class="form-label">Tu correo electrónico</label>
                        <input type="email" id="contact-email" class="form-input" placeholder="elena@ejemplo.com" required>
                      </div>

                      <div class="form-group">
                        <label for="contact-subject" class="form-label">Tema o motivo</label>
                        <input type="text" id="contact-subject" class="form-input" placeholder="Colaboración en ensayo / Consulta de diseño">
                      </div>

                      <div class="form-group">
                        <label for="contact-message" class="form-label">Mensaje</label>
                        <textarea id="contact-message" class="form-textarea" placeholder="Escribe aquí tus pensamientos con total libertad..." required></textarea>
                      </div>

                      <button type="submit" class="form-submit-btn">Enviar correspondencia &rarr;</button>
                    </form>
                  </section>
                </div>
              </div>
            </main>

            <footer class="site-footer">
              <div class="footer-inner">
                <nav class="footer-nav" aria-label="Navegación del pie">
                  <a href="index.html">Inicio</a>
                  <a href="post.html">Artículo destacado</a>
                  <a href="about.html">Sobre mí</a>
                  <a href="about.html#contacto">Contacto</a>
                  <a href="#contacto" class="search-open-btn">Buscar</a>
                </nav>
                
                <p class="footer-copyright">
                  \(escape(settings.footerCopyright))
                </p>

                <a href="#top" class="footer-back-to-top">
                  Volver arriba
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                </a>
              </div>
            </footer>
          </div>

          <div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="Búsqueda instantánea de artículos">
            <button class="search-modal-close search-close-btn" aria-label="Cerrar búsqueda">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div class="search-box-wrap">
              <input type="search" class="search-input" placeholder="Escribe para buscar..." autocomplete="off" spellcheck="false">
              <div class="search-hint">
                <span>Presiona las flechas o haz clic para abrir</span>
                <div style="display: flex; gap: 0.4rem;">
                  <kbd class="kbd-badge">ESC</kbd>
                  <kbd class="kbd-badge">⌘K</kbd>
                </div>
              </div>
            </div>
            <div class="search-results-list" id="search-results"></div>
          </div>

          <script src="app.js"></script>
        </body>
        </html>
        """
    }

    private func renderStandardFeedEntry(post: Post) -> String {
        let postUrl = "posts/\(post.slug).html"
        let mediaHtml: String
        if !post.coverImage.isEmpty {
            mediaHtml = """
            <div class="post-media-bleed">
              <a href="\(postUrl)" aria-label="Ver artículo completo: \(escape(post.title))">
                <img src="\(post.coverImage)" alt="\(escape(post.title))" loading="lazy">
              </a>
              \(post.imageCaption.isEmpty ? "" : "<div class=\"media-caption\">\(escape(post.imageCaption))</div>")
            </div>
            """
        } else {
            mediaHtml = ""
        }

        return """
        <article class="post-entry" id="post-\(post.slug)">
          <header class="post-entry-header">
            <a href="\(postUrl)" class="post-meta-category">\(escape(post.category))</a>
            <h2 class="post-entry-title">
              <a href="\(postUrl)">\(escape(post.title))</a>
            </h2>
            <div class="post-meta-bar">
              <time datetime="\(post.date)">\(escape(post.date))</time>
              <span class="post-meta-divider" aria-hidden="true"></span>
              <span class="post-read-time">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="calc-read-time">\(escape(post.calculatedReadingTime()))</span>
              </span>
            </div>
          </header>

          \(mediaHtml)

          <div class="post-entry-excerpt">
            \(escape(post.excerpt))
          </div>

          <div class="post-entry-footer">
            <a href="\(postUrl)" class="post-read-more">
              Continuar leyendo <span class="arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </article>
        """
    }

    private func renderQuoteFeedEntry(post: Post) -> String {
        let postUrl = "posts/\(post.slug).html"
        let quoteText = post.quoteText.isEmpty ? post.excerpt : post.quoteText
        let author = post.quoteAuthor.isEmpty ? post.authorName : post.quoteAuthor

        return """
        <article class="post-entry post-format-quote" id="post-\(post.slug)">
          <span class="quote-bg-icon" aria-hidden="true">&ldquo;</span>
          <div class="quote-content">
            <span class="post-meta-category">\(escape(post.category))</span>
            <blockquote class="quote-text">
              &laquo;\(escape(quoteText))&raquo;
            </blockquote>
            <div class="quote-author">
              \(escape(author)) \(post.quoteContext.isEmpty ? "" : "<span class=\"quote-context\">&mdash; \(escape(post.quoteContext))</span>")
            </div>
            <div class="post-meta-bar" style="margin-top: 1.5rem; margin-bottom: 0;">
              <time datetime="\(post.date)">\(escape(post.date))</time>
              <span class="post-meta-divider" aria-hidden="true"></span>
              <span class="post-read-time">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="calc-read-time">\(escape(post.calculatedReadingTime()))</span>
              </span>
              <span class="post-meta-divider" aria-hidden="true"></span>
              <a href="\(postUrl)" class="post-read-more" style="font-size: 0.72rem;">Leer reflexión <span class="arrow">&rarr;</span></a>
            </div>
          </div>
        </article>
        """
    }

    private func renderGalleryFeedEntry(post: Post) -> String {
        let postUrl = "posts/\(post.slug).html"
        let images = post.galleryImages.isEmpty ? [
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
        ] : post.galleryImages

        let firstImg = images[0]
        let secondImg = images.count > 1 ? images[1] : firstImg
        let thirdImg = images.count > 2 ? images[2] : secondImg

        return """
        <article class="post-entry" id="post-\(post.slug)">
          <header class="post-entry-header">
            <a href="\(postUrl)" class="post-meta-category">\(escape(post.category))</a>
            <h2 class="post-entry-title">
              <a href="\(postUrl)">\(escape(post.title))</a>
            </h2>
            <div class="post-meta-bar">
              <time datetime="\(post.date)">\(escape(post.date))</time>
              <span class="post-meta-divider" aria-hidden="true"></span>
              <span class="post-read-time">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="calc-read-time">\(escape(post.calculatedReadingTime()))</span>
              </span>
            </div>
          </header>

          <div class="post-media-bleed">
            <div class="gallery-grid trio">
              <div class="gallery-item">
                <a href="\(postUrl)">
                  <img src="\(firstImg)" alt="\(escape(post.title))" loading="lazy">
                </a>
              </div>
              <div class="gallery-stacked">
                <div class="gallery-item">
                  <a href="\(postUrl)">
                    <img src="\(secondImg)" alt="Fotografía secundaria" loading="lazy">
                  </a>
                </div>
                <div class="gallery-item">
                  <a href="\(postUrl)">
                    <img src="\(thirdImg)" alt="Fotografía terciaria" loading="lazy">
                  </a>
                </div>
              </div>
            </div>
            \(post.imageCaption.isEmpty ? "" : "<div class=\"media-caption\">\(escape(post.imageCaption))</div>")
          </div>

          <div class="post-entry-excerpt">
            \(escape(post.excerpt))
          </div>

          <div class="post-entry-footer">
            <a href="\(postUrl)" class="post-read-more">
              Ver serie fotográfica completa <span class="arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </article>
        """
    }

    private func renderAudioFeedEntry(post: Post) -> String {
        let postUrl = "posts/\(post.slug).html"
        let trackTitle = post.audioTrack.isEmpty ? post.title : post.audioTrack

        return """
        <article class="post-entry" id="post-\(post.slug)">
          <header class="post-entry-header">
            <a href="\(postUrl)" class="post-meta-category">\(escape(post.category))</a>
            <h2 class="post-entry-title">
              <a href="\(postUrl)">\(escape(post.title))</a>
            </h2>
            <div class="post-meta-bar">
              <time datetime="\(post.date)">\(escape(post.date))</time>
              <span class="post-meta-divider" aria-hidden="true"></span>
              <span class="post-read-time">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
                <span>\(escape(post.audioDuration)) de escucha</span>
              </span>
            </div>
          </header>

          <div class="audio-player-card">
            <div class="audio-player-header">
              <div class="audio-track-info">
                <span class="audio-track-badge">Audio Ensayo</span>
                <h4>\(escape(trackTitle))</h4>
              </div>
            </div>
            <div class="audio-controls-row">
              <button class="audio-play-btn" aria-label="Reproducir pista de audio">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <div class="audio-timeline-wrap">
                <div class="audio-progress-bar-bg" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100">
                  <div class="audio-progress-bar-fill"></div>
                </div>
                <div class="audio-time-row">
                  <span class="audio-current-time">01:24</span>
                  <span>\(escape(post.audioDuration))</span>
                </div>
              </div>
            </div>
          </div>

          <div class="post-entry-excerpt">
            \(escape(post.excerpt))
          </div>

          <div class="post-entry-footer">
            <a href="\(postUrl)" class="post-read-more">
              Leer notas del episodio <span class="arrow" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </article>
        """
    }

    private func renderSinglePost(post: Post, prevPost: Post?, nextPost: Post?, isSubdir: Bool, settings: SiteSettings) -> String {
        let prefix = isSubdir ? "../" : ""
        let bodyHTML = MarkdownParser.toHTML(post.content, enableLeadDropCap: true)

        let authorName = post.authorName.isEmpty ? settings.authorName : post.authorName
        let authorRole = post.authorRole.isEmpty ? settings.authorRole : post.authorRole
        let authorAvatar = post.authorAvatar.isEmpty ? settings.authorAvatar : post.authorAvatar
        let authorBio = post.authorBio.isEmpty ? settings.authorBio : post.authorBio

        let mediaHtml: String
        if !post.coverImage.isEmpty {
            mediaHtml = """
            <div class="container-feed">
              <div class="post-media-bleed">
                <img src="\(post.coverImage)" alt="\(escape(post.title))" loading="eager">
                \(post.imageCaption.isEmpty ? "" : "<div class=\"media-caption\">\(escape(post.imageCaption))</div>")
              </div>
            </div>
            """
        } else {
            mediaHtml = ""
        }

        let prevLinkHtml: String
        if let prev = prevPost {
            let targetUrl = isSubdir ? "\(prev.slug).html" : "posts/\(prev.slug).html"
            prevLinkHtml = """
            <a href="\(targetUrl)" class="post-nav-item prev">
              <span class="post-nav-direction">&larr; Anterior</span>
              <span class="post-nav-title">\(escape(prev.title))</span>
            </a>
            """
        } else {
            prevLinkHtml = "<div></div>"
        }

        let nextLinkHtml: String
        if let next = nextPost {
            let targetUrl = isSubdir ? "\(next.slug).html" : "posts/\(next.slug).html"
            nextLinkHtml = """
            <a href="\(targetUrl)" class="post-nav-item next">
              <span class="post-nav-direction">Siguiente &rarr;</span>
              <span class="post-nav-title">\(escape(next.title))</span>
            </a>
            """
        } else {
            nextLinkHtml = "<div></div>"
        }

        return """
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>\(escape(post.title)) &mdash; \(escape(settings.siteTitle))</title>
          <meta name="description" content="\(escape(post.excerpt))">
          <link rel="stylesheet" href="\(prefix)style.css">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        </head>
        <body>
          <div class="reading-progress-container" aria-hidden="true">
            <div class="reading-progress-bar"></div>
          </div>

          <div class="site-wrapper">
            <header class="site-header">
              <div class="header-top-bar">
                <button class="header-action-btn search-open-btn" aria-label="Abrir buscador (Cmd+K)" title="Buscar (Cmd+K)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
                <button class="header-action-btn theme-toggle-btn" aria-label="Cambiar tema de color" title="Alternar modo claro / oscuro">
                  <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                  <svg class="icon-sun" style="display: none;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </button>
              </div>

              <div class="site-branding">
                <div class="site-title">
                  <a href="\(prefix)index.html">\(escape(settings.siteTitle))</a>
                </div>
                <p class="site-tagline">\(escape(settings.siteTagline))</p>
              </div>

              <nav class="site-nav" aria-label="Navegación principal">
                <a href="\(prefix)index.html">Inicio</a>
                <a href="\(prefix)index.html#feed">Artículos</a>
                <a href="\(prefix)about.html">Sobre mí</a>
                <a href="\(prefix)about.html#contacto">Contacto</a>
                <a href="/admin" style="color: var(--accent);">CMS Admin</a>
              </nav>
            </header>

            <main class="site-main">
              <article class="single-post">
                <header class="single-post-header">
                  <a href="\(prefix)index.html#feed" class="post-meta-category">\(escape(post.category))</a>
                  <h1 class="single-post-title">\(escape(post.title))</h1>
                  \(post.excerpt.isEmpty ? "" : "<p class=\"single-post-subtitle\">\(escape(post.excerpt))</p>")

                  <div class="single-post-meta">
                    <div class="author-chip">
                      <img src="\(authorAvatar)" alt="\(escape(authorName))" class="author-chip-avatar">
                      <span>Por \(escape(authorName))</span>
                    </div>
                    <span class="post-meta-divider" aria-hidden="true"></span>
                    <time datetime="\(post.date)">\(escape(post.date))</time>
                    <span class="post-meta-divider" aria-hidden="true"></span>
                    <span class="post-read-time">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span class="calc-read-time">\(escape(post.calculatedReadingTime()))</span>
                    </span>
                  </div>
                </header>

                \(mediaHtml)

                <div class="container-prose single-post-body">
                  <div class="prose">
                    \(bodyHTML)

                    <div class="share-bar">
                      <span class="share-bar-title">Compartir ensayo:</span>
                      <a href="https://twitter.com/intent/tweet?text=\(escape(post.title))" target="_blank" rel="noopener noreferrer" class="share-btn">Twitter / X</a>
                      <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener noreferrer" class="share-btn">LinkedIn</a>
                      <button class="share-btn code-copy-btn" onclick="navigator.clipboard.writeText(window.location.href); alert('Enlace copiado al portapapeles.');">Copiar enlace</button>
                    </div>

                    <section class="author-bio-card">
                      <img src="\(authorAvatar)" alt="\(escape(authorName))" class="author-bio-avatar">
                      <div class="author-bio-info">
                        \(authorRole.isEmpty ? "" : "<span class=\"author-bio-role\">\(escape(authorRole))</span>")
                        <h3>\(escape(authorName))</h3>
                        <p class="author-bio-text">
                          \(escape(authorBio))
                        </p>
                        <div class="author-social-links">
                          <a href="\(prefix)about.html">Perfil completo &rarr;</a>
                          <a href="\(prefix)about.html#contacto">Contacto directo</a>
                        </div>
                      </div>
                    </section>

                    <nav class="post-pagination-nav" aria-label="Navegación entre artículos">
                      \(prevLinkHtml)
                      \(nextLinkHtml)
                    </nav>
                  </div>
                </div>
              </article>
            </main>

            <footer class="site-footer">
              <div class="footer-inner">
                <nav class="footer-nav" aria-label="Navegación del pie">
                  <a href="\(prefix)index.html">Inicio</a>
                  <a href="\(prefix)about.html">Sobre mí</a>
                  <a href="\(prefix)about.html#contacto">Contacto</a>
                  <a href="/admin">Panel CMS</a>
                </nav>
                <p class="footer-copyright">\(escape(settings.footerCopyright))</p>
              </div>
            </footer>
          </div>

          <div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="Búsqueda instantánea de artículos">
            <button class="search-modal-close search-close-btn" aria-label="Cerrar búsqueda">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div class="search-box-wrap">
              <input type="search" class="search-input" placeholder="Escribe para buscar..." autocomplete="off" spellcheck="false">
            </div>
            <div class="search-results-list" id="search-results"></div>
          </div>

          <script src="\(prefix)app.js"></script>
        </body>
        </html>
        """
    }

    private func updateSearchIndex(posts: [Post]) {
        struct SearchItem: Codable {
            let title: String
            let category: String
            let url: String
            let date: String
            let readTime: String
            let snippet: String
            let tags: [String]
        }

        let items = posts.map { p in
            SearchItem(
                title: p.title,
                category: p.category,
                url: "posts/\(p.slug).html",
                date: p.date,
                readTime: p.calculatedReadingTime(),
                snippet: p.excerpt,
                tags: [p.category.lowercased(), p.format.rawValue]
            )
        }

        let encoder = JSONEncoder()
        encoder.outputFormatting = [.prettyPrinted]
        if let data = try? encoder.encode(items) {
            let target = baseDir.appendingPathComponent("search-index.json")
            try? data.write(to: target)
        }
    }

    private func escape(_ string: String) -> String {
        return MarkdownParser.escapeHTML(string)
    }
}
