/**
 * EDITOR THEME — Main JavaScript Application
 * Minimalist Editorial Blog & Magazine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadingTime();
  initReadingProgressBar();
  initLiveSearch();
  initScrollReveal();
  initAudioPlayer();
  initCodeCopy();
  initBackToTop();
});

/* ==========================================================================
   1. Theme Management (Light / Dark Mode with LocalStorage)
   ========================================================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('editor-theme');
  
  // Default to light mode by default as requested
  const initialTheme = storedTheme || 'light';
  applyTheme(initialTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('editor-theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  
  // Update icons if present
  const sunIcons = document.querySelectorAll('.icon-sun');
  const moonIcons = document.querySelectorAll('.icon-moon');
  
  if (theme === 'dark') {
    sunIcons.forEach(icon => icon.style.display = 'block');
    moonIcons.forEach(icon => icon.style.display = 'none');
  } else {
    sunIcons.forEach(icon => icon.style.display = 'none');
    moonIcons.forEach(icon => icon.style.display = 'block');
  }
}

/* ==========================================================================
   2. Dynamic Reading Time Calculator (Words / 200 wpm)
   ========================================================================== */
function initReadingTime() {
  // Single article view (.prose)
  const singleProse = document.querySelector('.single-post-body .prose');
  const singleReadTimeElem = document.querySelector('.single-post-meta .calc-read-time');

  if (singleProse && singleReadTimeElem) {
    const text = singleProse.textContent || '';
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    singleReadTimeElem.textContent = `${minutes} min de lectura`;
  }

  // Feed posts (.post-entry)
  const postEntries = document.querySelectorAll('.post-entry');
  postEntries.forEach(entry => {
    const readTimeElem = entry.querySelector('.calc-read-time');
    if (!readTimeElem) return;

    // If explicit data-words is provided, calculate from that; else inspect excerpt or text
    const textSource = entry.querySelector('.post-entry-excerpt') || entry.querySelector('.quote-text') || entry;
    const fullWordCount = entry.dataset.words ? parseInt(entry.dataset.words, 10) : 0;
    
    let minutes;
    if (fullWordCount > 0) {
      minutes = Math.max(1, Math.ceil(fullWordCount / 200));
    } else {
      const text = textSource.textContent || '';
      const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
      // Multiply excerpt words by 4 as estimation of full article if full text is not rendered
      minutes = Math.max(2, Math.ceil((words * 4) / 200));
    }
    
    readTimeElem.textContent = `${minutes} min de lectura`;
  });
}

/* ==========================================================================
   3. Reading Progress Bar (Fixed 2px Top Indicator on Single Posts)
   ========================================================================== */
function initReadingProgressBar() {
  const progressBar = document.querySelector('.reading-progress-bar');
  if (!progressBar) return;

  let ticking = false;

  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressBar.style.width = '0%';
      return;
    }
    const currentScroll = window.scrollY;
    const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
    progressBar.style.width = `${progress}%`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
}

/* ==========================================================================
   4. Live Search Overlay (Cmd/Ctrl + K and Instant DOM/Index Filtering)
   ========================================================================== */
function initLiveSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchInputs = document.querySelectorAll('.search-input');
  const searchOpenBtns = document.querySelectorAll('.search-open-btn');
  const searchCloseBtns = document.querySelectorAll('.search-close-btn');
  const resultsContainer = document.getElementById('search-results');

  if (!searchModal) return;

  // Editorial publication index for seamless search across all pages
  let editorialArticles = [
    {
      title: "La poética del espacio vacío en la arquitectura contemporánea",
      category: "Arquitectura",
      url: "post.html",
      date: "18 Octubre, 2026",
      readTime: "5 min",
      snippet: "Una exploración reflexiva sobre cómo el minimalismo japonés y el vacío consciente transforman el hábitat moderno en un refugio sensorial para la mente.",
      tags: ["arquitectura", "minimalismo", "diseño", "japon", "espacio"]
    },
    {
      title: "La simplicidad no es la falta de desorden, sino la presencia de propósito",
      category: "Cita Editorial",
      url: "post.html#cita",
      date: "14 Octubre, 2026",
      readTime: "2 min",
      snippet: "Reflexiones sobre el aforismo de Jony Ive y la filosofía de eliminar lo superfluo para descubrir la esencia intrínseca de los objetos cotidianos.",
      tags: ["cita", "filosofía", "diseño", "jony ive", "simplicidad"]
    },
    {
      title: "Crónicas del silencio: Un ensayo visual en los Alpes Suizos",
      category: "Fotografía",
      url: "post.html#galeria",
      date: "09 Octubre, 2026",
      readTime: "4 min",
      snippet: "Capturando la inmensidad monástica de las cumbres alpinas y la geometría pura de la niebla matutina a través de una óptica analógica de 50mm.",
      tags: ["fotografia", "alpes", "paisaje", "naturaleza", "silencio", "analogo"]
    },
    {
      title: "Ritmos analógicos en una era hiperdigital: Filosofía del tacto",
      category: "Discusiones",
      url: "post.html#audio",
      date: "03 Octubre, 2026",
      readTime: "12 min escucha",
      snippet: "Conversación sonora sobre la fascinación renovada por los vinilos, libretas de papel rugoso y teclados mecánicos en tiempos de pantallas infinitas.",
      tags: ["podcast", "audio", "tecnologia", "slow living", "analogico"]
    },
    {
      title: "El renacimiento de las herramientas lentas y la escritura sin distracciones",
      category: "Cultura",
      url: "post.html#herramientas-lentas",
      date: "27 Septiembre, 2026",
      readTime: "6 min",
      snippet: "Por qué volver a software sin notificaciones y procesadores de texto minimalistas está salvando la concentración de los escritores contemporáneos.",
      tags: ["escritura", "cultura", "herramientas", "concentracion", "productividad"]
    },
    {
      title: "Tipografía como voz: El poder de las fuentes serif en el diseño editorial",
      category: "Diseño Gráfico",
      url: "post.html#tipografia",
      date: "21 Septiembre, 2026",
      readTime: "7 min",
      snippet: "Un análisis de la legibilidad, la cadencia visual y el peso histórico de tipos como Lora, Garamond y Baskerville en medios digitales contemporáneos.",
      tags: ["tipografia", "diseño", "lora", "editorial", "letras"]
    }
  ];

  // Dynamically load search index from Swift CMS
  fetch('/search-index.json')
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        editorialArticles = data;
      }
    })
    .catch(() => {});

  const openSearch = () => {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const mainInput = searchModal.querySelector('.search-input');
    if (mainInput) {
      setTimeout(() => {
        mainInput.focus();
        mainInput.select();
      }, 50);
    }
    renderSearchResults('');
  };

  const closeSearch = () => {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  searchOpenBtns.forEach(btn => btn.addEventListener('click', openSearch));
  searchCloseBtns.forEach(btn => btn.addEventListener('click', closeSearch));

  // Close on backdrop click
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      closeSearch();
    }
  });

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K / Esc)
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    } else if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  // Live filtering
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      renderSearchResults(query);
    });
  });

  function renderSearchResults(query) {
    if (!resultsContainer) return;

    if (!query) {
      resultsContainer.innerHTML = `
        <div class="search-empty-state">
          <p>Escribe palabras clave como <em>"arquitectura"</em>, <em>"diseño"</em>, <em>"analógico"</em> o <em>"silencio"</em> para filtrar los ensayos.</p>
        </div>
      `;
      return;
    }

    const filtered = editorialArticles.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchCat = item.category.toLowerCase().includes(query);
      const matchSnippet = item.snippet.toLowerCase().includes(query);
      const matchTags = item.tags.some(tag => tag.toLowerCase().includes(query));
      return matchTitle || matchCat || matchSnippet || matchTags;
    });

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-empty-state">
          <p>No se encontraron artículos que coincidan con <strong>"${escapeHtml(query)}"</strong>.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(item => `
      <article class="search-result-card">
        <div class="search-result-cat">${escapeHtml(item.category)} &bull; ${escapeHtml(item.readTime)}</div>
        <h4 class="search-result-title">
          <a href="${item.url}">${highlightMatch(item.title, query)}</a>
        </h4>
        <p class="search-result-snippet">${highlightMatch(item.snippet, query)}</p>
      </article>
    `).join('');
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark style="background-color: var(--accent-subtle); color: var(--accent); padding: 0 2px; border-radius: 2px;">$1</mark>');
  }

  function escapeHtml(string) {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return String(string).replace(/[&<>"']/g, s => entityMap[s]);
  }
}

/* ==========================================================================
   5. Smooth Scroll Reveal (IntersectionObserver Lightweight)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.post-entry, .author-bio-card, .newsletter-strip, .principles-grid');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. Minimalist Audio Player Component
   ========================================================================== */
function initAudioPlayer() {
  const audioPlayers = document.querySelectorAll('.audio-player-card');

  audioPlayers.forEach(player => {
    const playBtn = player.querySelector('.audio-play-btn');
    const progressBar = player.querySelector('.audio-progress-bar-fill');
    const progressTrack = player.querySelector('.audio-progress-bar-bg');
    const currentTimeEl = player.querySelector('.audio-current-time');
    
    if (!playBtn) return;

    let isPlaying = false;
    let timer = null;
    let currentSeconds = 84; // 01:24 sample
    const totalSeconds = 872; // 14:32 sample

    const updateDisplay = () => {
      const minutes = Math.floor(currentSeconds / 60);
      const seconds = currentSeconds % 60;
      if (currentTimeEl) {
        currentTimeEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
      if (progressBar) {
        const percent = (currentSeconds / totalSeconds) * 100;
        progressBar.style.width = `${percent}%`;
      }
    };

    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      
      if (isPlaying) {
        // Change icon to pause
        playBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"></rect>
            <rect x="14" y="4" width="4" height="16" rx="1"></rect>
          </svg>
        `;
        playBtn.setAttribute('aria-label', 'Pausar audio');

        timer = setInterval(() => {
          if (currentSeconds < totalSeconds) {
            currentSeconds++;
            updateDisplay();
          } else {
            clearInterval(timer);
            isPlaying = false;
            playBtn.innerHTML = `
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            `;
          }
        }, 1000);
      } else {
        // Change icon back to play
        playBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        `;
        playBtn.setAttribute('aria-label', 'Reproducir audio');
        clearInterval(timer);
      }
    });

    if (progressTrack) {
      progressTrack.addEventListener('click', (e) => {
        const rect = progressTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const clickRatio = Math.max(0, Math.min(1, clickX / width));
        currentSeconds = Math.floor(clickRatio * totalSeconds);
        updateDisplay();
      });
    }

    updateDisplay();
  });
}

/* ==========================================================================
   7. Copy Code to Clipboard with Feedback
   ========================================================================== */
function initCodeCopy() {
  const copyButtons = document.querySelectorAll('.code-copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeWrap = btn.closest('.code-block-wrap');
      if (!codeWrap) return;
      const code = codeWrap.querySelector('pre code');
      if (!code) return;

      try {
        await navigator.clipboard.writeText(code.innerText);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>¡Copiado!</span>
        `;
        btn.style.color = 'var(--accent)';
        
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = '';
        }, 2200);
      } catch (err) {
        console.warn('No se pudo copiar el texto al portapapeles:', err);
      }
    });
  });
}

/* ==========================================================================
   8. Smooth Back to Top Scroll
   ========================================================================== */
function initBackToTop() {
  const backToTopBtns = document.querySelectorAll('.footer-back-to-top');
  backToTopBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}
