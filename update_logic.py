import re
import json

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update CSS Theme (Function applyTheme)
new_theme = """        function applyTheme() {
            const root = document.documentElement;
            // Paleta estricta: #AEF504, #E7F800, #00383B, #093534, #0F5150, #2B87AB, #1A566D, #B2E5F2, #249BA7, #0C526A, #2196A3, #164E62, #51B14B, #218984
            root.style.setProperty('--dark', '#00383B');
            root.style.setProperty('--card', '#0F5150');
            root.style.setProperty('--primary', '#AEF504');
            root.style.setProperty('--secondary', '#249BA7');
            root.style.setProperty('--success', '#51B14B');
            root.style.setProperty('--danger', '#E7F800'); // Usado como contraste extremo
            root.style.setProperty('--warning', '#2B87AB');
            root.style.setProperty('--text', '#B2E5F2');
            root.style.setProperty('--text-muted', '#2196A3');
            root.style.setProperty('--border', '#1A566D');
            root.style.setProperty('--header-text', '#AEF504');
            root.style.setProperty('--stat-money', '#E7F800');
            root.style.setProperty('--stat-rep', '#218984');
            root.style.setProperty('--stat-emp', '#2B87AB');
            root.style.setProperty('--stat-day', '#B2E5F2');
            
            // Fondos generales
            document.body.style.backgroundColor = '#093534';
            document.body.style.color = '#B2E5F2';
        }"""
content = re.sub(r'function applyTheme\(\) \{[\s\S]*?setInterval\(applyTheme, 60000\);', new_theme + '\n        applyTheme();', content)

# 2. Update achievements CSS
new_ach_css = """        .achievement {
            background: linear-gradient(145deg, #093534, #00383B);
            border: 2px solid #164E62;
            border-radius: 4px;
            padding: 20px;
            text-align: center;
            opacity: 0.4;
            transition: all 0.5s ease;
            position: relative;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
        }

        .achievement::after {
            content: '';
            position: absolute;
            top: 4px; left: 4px; right: 4px; bottom: 4px;
            border: 1px dashed #1A566D;
            pointer-events: none;
            opacity: 0.5;
        }

        .achievement.unlocked {
            opacity: 1;
            border-color: #AEF504;
            background: linear-gradient(145deg, #0F5150, #00383B);
            box-shadow: 0 0 15px rgba(174, 245, 4, 0.2), inset 0 0 10px rgba(174, 245, 4, 0.1);
        }
        
        .achievement.unlocked::after {
            border-color: #E7F800;
            opacity: 0.8;
        }"""
content = re.sub(r'\.achievement \{[\s\S]*?\.achievement\.unlocked \{[\s\S]*?\}', new_ach_css, content)

# 3. Add El Langar to Sidebar
sidebar_str = """                <button class="nav-btn" onclick="showSection('blog')">
                    <span class="nav-icon">📰</span>
                    <span>Crónicas</span>
                </button>"""
langar_btn = """                <button class="nav-btn" onclick="showSection('langar')">
                    <span class="nav-icon">🍲</span>
                    <span>El Langar</span>
                </button>"""
content = content.replace(sidebar_str, sidebar_str + '\n' + langar_btn)

# 4. Add El Langar Section
langar_html = """
                <!-- El Langar -->
                <section id="langar" class="section hidden">
                    <h2 class="section-title">🍲 El Langar (La Cocina Sagrada)</h2>
                    <div style="background: var(--card); padding: 30px; border-radius: 8px; border: 1px solid var(--primary); margin-bottom: 30px;">
                        <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 1.4rem;">La Medicina de la Consciencia</h3>
                        <p style="margin-bottom: 15px; line-height: 1.8; color: var(--text);">
                            Comandante, la salud de tus tropas no se forja en el acero de sus espadas, sino en la pureza del alimento que asimilan. Como enseñó el maestro, <em>"eres lo que comes"</em>. El cuerpo humano posee un maravilloso sistema de autocuración; al proporcionarle la alquimia adecuada de alimentos, permitimos que esta fuerza vital se exprese.
                        </p>
                        <p style="margin-bottom: 15px; line-height: 1.8; color: var(--text);">
                            El universo está regido por tres cualidades fundamentales: <strong>Sáttva</strong> (la pureza y el equilibrio), <strong>Raya</strong> (la acción y el impulso) y <strong>Tama</strong> (la inercia y la oscuridad). Un guerrero que consume alimentos tamásicos como la carne puede experimentar estallidos de ira, pero la putrefacción lenta en su vientre reducirá su oxigenación, debilitará sus órganos y consumirá su resistencia. La verdadera potencia militar proviene de un sistema nervioso equilibrado y una sangre limpia, levemente alcalina.
                        </p>
                        <p style="margin-bottom: 15px; line-height: 1.8; color: var(--text);">
                            Para lograr un nivel óptimo de energía, necesitamos preparar el alimento con amor y consciencia. Una de las peores cosas es llenar el estómago a reventar; debemos comer sólo lo que podamos eliminar en 24 horas y permitir un cuarto del estómago vacío para los gases de la digestión. Así, la energía se vuelve prana puro. Las raíces sagradas: <strong>cebolla, ajo y jengibre</strong>, purifican la sangre y otorgan la energía atómica de la fuerza vital. Selecciona con cuidado la dieta que guiará los corazones y los cuerpos de quienes defienden Baghdad hoy.
                        </p>
                    </div>

                    <h3 style="margin-bottom: 20px;">Elija la Dieta para las Tropas:</h3>
                    <div class="actions-grid">
                        <div class="action-card" onclick="setDiet('sattvica')">
                            <div class="action-icon">🍚</div>
                            <div class="action-title">Dieta de Frijol Mung y Arroz Basmati</div>
                            <div class="action-desc">Una dieta de "ángeles", un alimento pre-digerido. Nutre profundamente, purifica la sangre y estabiliza la mente en un estado pacífico pero invencible.</div>
                            <div class="action-cost">
                                <span class="cost-item cost-money" style="color: var(--primary)">Efecto: Defensa ++ / Moral ++</span>
                            </div>
                        </div>
                        <div class="action-card" onclick="setDiet('rajasica')">
                            <div class="action-icon">🧅</div>
                            <div class="action-title">Trinidad de Raíces y Ghee</div>
                            <div class="action-desc">Cebolla, ajo y jengibre fritos en Ghee purificado. Una dieta de inmenso poder nervioso, antibiótico y energizante. Alta acción, alta capacidad de asedio.</div>
                            <div class="action-cost">
                                <span class="cost-item cost-money" style="color: var(--primary)">Efecto: Misiones ++ / Moral +</span>
                            </div>
                        </div>
                        <div class="action-card" onclick="setDiet('tamasica')">
                            <div class="action-icon">🍖</div>
                            <div class="action-title">Raciones Cárnicas Pesadas</div>
                            <div class="action-desc">Raciones de supervivencia altas en carne descompuesta y proteínas pesadas. Fomenta la agresión y la ira tamásica a corto plazo, pero envenena el cuerpo lentamente.</div>
                            <div class="action-cost">
                                <span class="cost-item cost-money" style="color: var(--danger)">Efecto: Combate Rápido + / Defensa - / Moral -</span>
                            </div>
                        </div>
                        <div class="action-card" onclick="setDiet('ayuno')">
                            <div class="action-icon">🍋</div>
                            <div class="action-title">Ayuno Purificador (Agua y Limón)</div>
                            <div class="action-desc">Detiene todas las raciones sólidas. Permite a los órganos descargar el exceso de mucosas y toxinas, dando a la tropa claridad espiritual profunda.</div>
                            <div class="action-cost">
                                <span class="cost-item cost-money" style="color: var(--secondary)">Efecto: Moral Extrema / Misiones Temporalmente -</span>
                            </div>
                        </div>
                    </div>
                </section>
"""
# Insert before </main>
content = content.replace("</main>", langar_html + "\n            </main>")


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
