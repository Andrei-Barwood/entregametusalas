import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Title and CSS variables
content = content.replace('<title>Startup Tycoon - Business Simulator</title>', '<title>Simulador de Sello Discográfico</title>')

# Update hardcoded dark colors in CSS to use variables or be more flexible
content = re.sub(r'background: linear-gradient\(145deg, #1e293b, #0f172a\);', 'background: var(--card);', content)
content = re.sub(r'background: linear-gradient\(145deg, #064e3b, #0f172a\);', 'background: var(--card);', content)
content = re.sub(r'background: linear-gradient\(145deg, #78350f, #0f172a\);', 'background: var(--card);', content)
content = re.sub(r'background: rgba\(15, 23, 42, 0\.95\);', 'background: var(--dark);', content)

# 2. Add Blog CSS
blog_css = """
    .blog-post {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 15px;
    }
    .blog-date {
        color: var(--primary);
        font-weight: bold;
        font-size: 0.9rem;
        margin-bottom: 5px;
    }
    .blog-title {
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .blog-content {
        color: var(--text-muted);
        line-height: 1.5;
    }
"""
content = content.replace('    </style>', blog_css + '    </style>')

# 3. HTML Translations - Tutorial
content = content.replace('🚀 Startup Tycoon', '🎧 Simulador de Discográfica')
content = content.replace('You are the founder of a tech startup. Begin with $50,000 and transform your idea into a billion-dollar company. Manage product development, hire talent, raise investments, and defeat competitors!', 'Eres el fundador de un nuevo sello discográfico. Comienza con $50,000 y transforma tu sello en un imperio musical. ¡Firma artistas, produce discos, consigue patrocinadores y domina las listas de éxitos!')
content = content.replace('Start Game', 'Comenzar Juego')
content = content.replace('TechStart Inc.', 'Ritmo Récords')

# Header stats
content = content.replace('💰 Capital', '💰 Presupuesto')
content = content.replace('⭐ Reputation', '⭐ Reputación')
content = content.replace('👥 Employees', '👥 Staff')
content = content.replace('📅 Day', '📅 Día')

# Sidebar
content = content.replace('<span>Office</span>', '<span>Operaciones</span>')
content = content.replace('<span>Products</span>', '<span>Lanzamientos</span>')
content = content.replace('<span>Team</span>', '<span>Staff</span>')
content = content.replace('<span>Research</span>', '<span>Estudio</span>')
content = content.replace('<span>Marketing</span>', '<span>Promoción</span>')
content = content.replace('<span>Investors</span>', '<span>Patrocinadores</span>')
content = content.replace('<span>Market</span>', '<span>Mercado</span>')
content = content.replace('<span>Achievements</span>', '<span>Logros</span>')

# Add Blog to Sidebar
blog_btn = """                <button class="nav-btn" onclick="showSection('blog')">
                    <span class="nav-icon">📰</span>
                    <span>Blog</span>
                </button>
"""
content = content.replace('            </aside>', blog_btn + '            </aside>')

# Sections Translations
# Office
content = content.replace('🏢 Operations Center', '🏢 Centro de Operaciones')
content = content.replace('Networking', 'Networking de Industria')
content = content.replace('Meet potential partners and clients. +2 reputation', 'Conoce a productores y promotores. +2 reputación')
content = content.replace('Consulting', 'Producir Jingles')
content = content.replace('Quick project for extra cash. +$2,000', 'Graba un comercial rápido para ingresos extra. +$2,000')
content = content.replace('Optimization', 'Mantenimiento')
content = content.replace('Improve processes. -10% costs for 5 days', 'Mantenimiento del estudio. -10% costos por 5 días')
content = content.replace('Team Training', 'Masterclass')
content = content.replace('Increase team productivity by 15%', 'Aumenta las habilidades del staff en 5 puntos')
content = content.replace('📜 Event Log', '📜 Registro de Eventos')
content = content.replace('You founded the company! Time to build an empire.', '¡Has fundado el sello! Es hora de crear un imperio musical.')

# Products
content = content.replace('💡 Product Management', '💿 Lanzamientos Musicales')
content = content.replace('Mobile App', 'Sencillo (Single)')
content = content.replace('Medium risk, steady income. Development: 10 days', 'Riesgo medio, ingresos estables. Grabación: 10 días')
content = content.replace('SaaS Platform', 'EP (Mini Álbum)')
content = content.replace('High risk, huge potential. Subscription model', 'Alto riesgo, gran potencial. Atrae buenos fans.')
content = content.replace('AI Solution', 'Álbum de Estudio')
content = content.replace('Cutting-edge tech, premium pricing. Requires AI research', 'Gran producción. Requiere Masterización IA.')
content = content.replace('Indie Game', 'Colaboración (Feat)')
content = content.replace('Low budget, viral potential', 'Bajo presupuesto, gran potencial viral.')
content = content.replace('📦 Active Products', '📦 Lanzamientos Activos')
content = content.replace('No active products. Create your first product!', 'No hay lanzamientos. ¡Graba tu primer disco!')

# Employees
content = content.replace('👥 Team', '👥 Staff y Artistas')
content = content.replace('Developer', 'Productor')
content = content.replace('Accelerates product development by 20%', 'Acelera las grabaciones musicales.')
content = content.replace('Designer', 'Director de Arte')
content = content.replace('Improves product quality and reputation', 'Mejora la calidad visual de los videoclips.')
content = content.replace('Manager', 'A&R')
content = content.replace('Increases team efficiency by 25%', 'Encuentra nuevo talento y mejora eficiencia.')
content = content.replace('Sales Manager', 'Relaciones Públicas')
content = content.replace('Increases product revenue by 30%', 'Aumenta los ingresos y streams de los lanzamientos.')
content = content.replace('👨‍💼 Employees', '👨‍💼 Staff')

# Research
content = content.replace('🔬 R&D Laboratory', '🎛️ Mejoras de Estudio')
content = content.replace('Cloud Tech', 'Sintetizadores')
content = content.replace('Mobile First', 'Afinación Vocal')
content = content.replace('AI/ML', 'Masterización IA')
content = content.replace('Blockchain', 'Distribución DRM')
content = content.replace('VR/AR', 'Videoclips 3D')
content = content.replace('Quantum', 'Sonido Espacial')

# Marketing
content = content.replace('📢 Marketing Campaigns', '📢 Campañas de Promoción')
content = content.replace('Social Media', 'TikTok / Reels')
content = content.replace('Viral content on Instagram and TikTok', 'Contenido viral con bailes y tendencias.')
content = content.replace('Influencer Marketing', 'Reseñas de Críticos')
content = content.replace('Partnership with popular bloggers', 'Reseñas en blogs de música populares.')
content = content.replace('TV Advertising', 'Gira de Medios')
content = content.replace('Mass audience reach', 'Entrevistas en TV y radio nacional.')
content = content.replace('Tech Conference', 'Festival de Música')
content = content.replace('Presentation at major conference', 'Presentación en un festival importante.')
content = content.replace('📈 Brand Awareness', '📈 Reconocimiento de Marca')

# Investors
content = content.replace('💎 Investment Offers', '💎 Patrocinios y Adelantos')
content = content.replace('No active offers at the moment. Check back next week.', 'No hay ofertas activas. Revisa la próxima semana.')

# Market
content = content.replace('📊 Market Analysis', '📊 Análisis de Mercado')
content = content.replace('🏢 Market Share', '🎧 Cuota de Reproducciones')
content = content.replace('🎯 Competitors', '🎯 Sellos Competidores')

# Achievements
content = content.replace('🏆 Achievements', '🏆 Discos y Reconocimientos')
content = content.replace('First Launch', 'Primer Lanzamiento')
content = content.replace('First Million', 'Disco de Platino')
content = content.replace('Dream Team (10)', 'Súper Grupo (10)')
content = content.replace('Unicorn Status', 'Sello Legendario')
content = content.replace('Market Domination', 'Monopolio Musical')
content = content.replace('Innovator', 'Sonido del Futuro')

# Misc
content = content.replace('⏭️ Next Day', '⏭️ Siguiente Día')

# Add Blog section HTML
blog_html = """                <section id="blog" class="section hidden">
                    <h2 class="section-title">📰 Blog de Noticias</h2>
                    <div id="blogPostsList">
                        <div class="blog-post">
                            <div class="blog-date">Día 1</div>
                            <div class="blog-title">¡Nace un nuevo sello discográfico!</div>
                            <div class="blog-content">El día de hoy se fundó oficialmente nuestro sello discográfico. Con grandes aspiraciones y un presupuesto inicial, la meta es dominar la industria musical.</div>
                        </div>
                    </div>
                </section>
"""
content = content.replace('            </main>', blog_html + '            </main>')

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

