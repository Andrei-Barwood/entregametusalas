import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Javascript Updates

content = content.replace("companyName: \"TechStart Inc.\"", "companyName: \"Ritmo Récords\"")
content = content.replace("role: \"founder\"", "role: \"fundador\"")
content = content.replace("{ name: \"TechGiant\", share: 35, growth: 2 }", "{ name: \"Sony Music\", share: 35, growth: 2 }")
content = content.replace("{ name: \"InnovateCorp\", share: 25, growth: 3 }", "{ name: \"Universal\", share: 25, growth: 3 }")
content = content.replace("{ name: \"StartupX\", share: 15, growth: 5 }", "{ name: \"Warner\", share: 15, growth: 5 }")
content = content.replace("{ name: \"DigitalPro\", share: 10, growth: 1 }", "{ name: \"Indie Label\", share: 10, growth: 1 }")

# showSection logic update
old_showsection = "if (sectionId === 'market') updateCharts();"
new_showsection = """if (sectionId === 'market') updateCharts();
        if (sectionId === 'blog') renderBlog();"""
content = content.replace(old_showsection, new_showsection)

# Action Notifications Update
content = content.replace("Insufficient funds!", "¡Fondos insuficientes!")
content = content.replace("Insufficient funds to hire!", "¡Fondos insuficientes para contratar!")
content = content.replace("Insufficient budget!", "¡Presupuesto insuficiente!")
content = content.replace("Action completed!", "¡Acción completada!")
content = content.replace("Product development started!", "¡Grabación comenzada!")
content = content.replace("Employee hired!", "¡Miembro del staff contratado!")
content = content.replace("Research completed!", "¡Sesión de estudio completada!")
content = content.replace("Research started!", "¡Sesión de estudio iniciada!")
content = content.replace("Campaign launched!", "¡Campaña lanzada!")
content = content.replace("Investment secured!", "¡Patrocinio asegurado!")
content = content.replace("Product launched!", "¡Lanzamiento publicado!")

# Add Event and Blog wrapper function
add_event_orig = """function addEvent(text) {
        const log = document.getElementById('eventLog');"""
add_event_new = """function addBlog(title, contentStr) {
        const list = document.getElementById('blogPostsList');
        const post = document.createElement('div');
        post.className = 'blog-post';
        post.innerHTML = `<div class="blog-date">Día ${game.day}</div><div class="blog-title">${title}</div><div class="blog-content">${contentStr}</div>`;
        list.insertBefore(post, list.firstChild);
    }
    
    function addEvent(text) {
        const log = document.getElementById('eventLog');"""
content = content.replace(add_event_orig, add_event_new)

# Modify product start and finish for Blog
content = content.replace("addEvent(`Started development: ${p.name}`);", "addEvent(`Comenzó grabación de: ${p.name}`); addBlog(`Nuevo Proyecto: ${p.name}`, `Hemos comenzado a trabajar en un nuevo proyecto musical: ${p.name}. Estará listo en ${p.time} días.`);")
content = content.replace("addEvent(`${p.name} is ready for launch!`);", "addEvent(`¡${p.name} está listo para lanzarse!`); addBlog(`¡Lanzamiento Disponible: ${p.name}!`, `Nuestros artistas han terminado el proyecto ${p.name} y ya está disponible en todas las plataformas. Esperamos grandes ingresos.`);")

content = content.replace("In Development", "Grabando")
content = content.replace("Active", "Lanzado")
content = content.replace("Failed", "Cancelado")

content = content.replace("Quality", "Calidad")
content = content.replace("Income/mo", "Ingresos/mes")
content = content.replace("Rating", "Puntuación")

content = content.replace("Founder", "Fundador")
content = content.replace("CEO", "CEO")
content = content.replace("Skill", "Habilidad")
content = content.replace("Fire", "Despedir")
content = content.replace("You will pay severance of $1,000", "Pagarás una indemnización de $1,000")
content = content.replace("was fired from the company", "fue despedido del sello discográfico")

# Investors
content = content.replace("days left", "días restantes")
content = content.replace("Accept investment from", "Aceptar patrocinio de")
content = content.replace("You will receive", "Recibirás")
content = content.replace("but give up", "pero cederás")
content = content.replace("of the company", "del sello")
content = content.replace("equity", "de regalías")
content = content.replace("for ${inv.equity}% equity", "por ${inv.equity}% de regalías")
content = content.replace("Raised", "Recaudado")
content = content.replace("from", "de")

# Market
content = content.replace("Your Company", "Tu Sello")

# Bankruptcy
content = content.replace("Bankruptcy!", "¡Bancarrota!")
content = content.replace("Your company has gone bankrupt. Game over.", "Tu sello discográfico se ha quedado sin dinero. Fin del juego.")

# Achievements JS translations
content = content.replace("🏆 New achievement unlocked!", "🏆 ¡Nuevo reconocimiento desbloqueado!")

# Product Names mapping in JS
content = content.replace("Mobile App", "Sencillo")
content = content.replace("SaaS Platform", "EP")
content = content.replace("AI Solution", "Álbum de Estudio")
content = content.replace("Indie Game", "Colaboración")

# Role names mapping in JS
content = content.replace("Developer", "Productor")
content = content.replace("Designer", "Dir. de Arte")
content = content.replace("Manager", "A&R")
content = content.replace("Sales Manager", "PR")

# Techs mapping in JS
content = content.replace("Cloud Tech", "Sintetizadores")
content = content.replace("Mobile First", "Afinación Vocal")
content = content.replace("AI/ML", "Masterización IA")
content = content.replace("Blockchain", "Distribución DRM")
content = content.replace("VR/AR", "Videoclips 3D")
content = content.replace("Quantum", "Sonido Espacial")

# Add Theme Logic inside script
theme_js = """
    function applyTheme() {
        const hour = new Date().getHours();
        const root = document.documentElement;
        
        if (hour >= 5 && hour < 12) {
            // Mañana
            root.style.setProperty('--dark', '#FEF7FB');
            root.style.setProperty('--card', '#F2E6E9');
            root.style.setProperty('--primary', '#3D9DC4');
            root.style.setProperty('--secondary', '#E599F2');
            root.style.setProperty('--success', '#50CDA5');
            root.style.setProperty('--danger', '#E68CE3');
            root.style.setProperty('--warning', '#FDD68F');
            root.style.setProperty('--text', '#5F2F7A');
            root.style.setProperty('--text-muted', '#9E5DB5');
            root.style.setProperty('--border', '#EECFE1');
        } else if (hour >= 12 && hour < 20) {
            // Tarde
            root.style.setProperty('--dark', '#FFFFFA');
            root.style.setProperty('--card', '#FBF3BA');
            root.style.setProperty('--primary', '#AB2449');
            root.style.setProperty('--secondary', '#E92B5C');
            root.style.setProperty('--success', '#DC9256');
            root.style.setProperty('--danger', '#C5244E');
            root.style.setProperty('--warning', '#FFB276');
            root.style.setProperty('--text', '#AB2449');
            root.style.setProperty('--text-muted', '#DC9256');
            root.style.setProperty('--border', '#FFB8F4');
        } else {
            // Noche
            root.style.setProperty('--dark', '#000000');
            root.style.setProperty('--card', '#323232');
            root.style.setProperty('--primary', '#905BBA');
            root.style.setProperty('--secondary', '#6B438C');
            root.style.setProperty('--success', '#E8EFEE');
            root.style.setProperty('--danger', '#352043');
            root.style.setProperty('--warning', '#5F3B7C');
            root.style.setProperty('--text', '#FFFFFF');
            root.style.setProperty('--text-muted', '#93A1A1');
            root.style.setProperty('--border', '#6B438D');
        }
    }

    // Apply theme on load and every minute
    applyTheme();
    setInterval(applyTheme, 60000);
"""
content = content.replace("// === INITIALIZATION ===", theme_js + "\n    // === INITIALIZATION ===")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

