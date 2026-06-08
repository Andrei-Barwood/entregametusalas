const allAchievements = [
    {
        "id": "ach_d1",
        "icon": "🧘",
        "name": "Conciencia Primordial",
        "desc": "Despierta al flujo temporal en Baghdad. 'Todo es creado por su propia gracia'.",
        "checkType": "day",
        "checkVal": 2
    },
    {
        "id": "ach_d2",
        "icon": "🕊️",
        "name": "Gracia Natural",
        "desc": "Entiende que las oportunidades son atraídas por la gracia, no por el esfuerzo ciego.",
        "checkType": "day",
        "checkVal": 5
    },
    {
        "id": "ach_d3",
        "icon": "⚖️",
        "name": "Aceptación de Narayan",
        "desc": "Supera la inercia temporal reconociendo la ley del creador universal.",
        "checkType": "day",
        "checkVal": 10
    },
    {
        "id": "ach_d4",
        "icon": "🛡️",
        "name": "Flujo de Amor Puro",
        "desc": "Conserva la integridad en Baghdad durante quince amaneceres de paz mental.",
        "checkType": "day",
        "checkVal": 15
    },
    {
        "id": "ach_d5",
        "icon": "📿",
        "name": "Auto-realización Diaria",
        "desc": "Experimenta el amor como un flujo de iluminación interna en las dunas del desierto.",
        "checkType": "day",
        "checkVal": 20
    },
    {
        "id": "ach_d6",
        "icon": "🕯️",
        "name": "Auto-contención Espiritual",
        "desc": "Conserva tu mente en calma en medio de la tempestad de la invasión.",
        "checkType": "day",
        "checkVal": 25
    },
    {
        "id": "ach_d7",
        "icon": "🌅",
        "name": "Auto-iluminación Mental",
        "desc": "Alcanza treinta días guiando Baghdad con una conciencia libre de proyecciones.",
        "checkType": "day",
        "checkVal": 30
    },
    {
        "id": "ach_d8",
        "icon": "🌸",
        "name": "Dicha de Parmeshar",
        "desc": "Trasciende la dualidad mundana reconociendo la belleza divina en cada habitante.",
        "checkType": "day",
        "checkVal": 40
    },
    {
        "id": "ach_d9",
        "icon": "🕊️",
        "name": "El Sikh del Guru",
        "desc": "Abandona las imágenes de tus padres para empezar a vivir tu propia vida divina.",
        "checkType": "day",
        "checkVal": 50
    },
    {
        "id": "ach_d10",
        "icon": "🕌",
        "name": "Yogui de Yoguis",
        "desc": "Alcanza sesenta amaneceres de contemplación, meditación y acción defensiva impecable.",
        "checkType": "day",
        "checkVal": 60
    },
    {
        "id": "ach_d11",
        "icon": "✨",
        "name": "Danza de Electrones",
        "desc": "Reconoce que la coreografía de tus electrones, protones y neutrones es Dios en acción.",
        "checkType": "day",
        "checkVal": 70
    },
    {
        "id": "ach_d12",
        "icon": "📜",
        "name": "Vencer al Ángel de la Muerte",
        "desc": "Descubre el truco del ego del médico Diaphatoon tras ochenta días de resistencia.",
        "checkType": "day",
        "checkVal": 80
    },
    {
        "id": "ach_d13",
        "icon": "⚖️",
        "name": "Juicio de la Causa Justa",
        "desc": "Deja que la mano justa de Dios juegue su juego sin buscar venganza material.",
        "checkType": "day",
        "checkVal": 90
    },
    {
        "id": "ach_d14",
        "icon": "🪐",
        "name": "Más allá de los Sentidos",
        "desc": "Alcanza el éxtasis sagrado de cien días de defensa sin claudicar ante el invasor.",
        "checkType": "day",
        "checkVal": 100
    },
    {
        "id": "ach_d15",
        "icon": "🌀",
        "name": "El Camino de 3HO",
        "desc": "Consvalida ciento veinte días de un modo de vida saludable, feliz y santo en el simulador.",
        "checkType": "day",
        "checkVal": 120
    },
    {
        "id": "ach_r1",
        "icon": "🌾",
        "name": "Langar de las Dunas",
        "desc": "Acumula 20k de granos para abastecer la cocina sagrada de los defensores.",
        "checkType": "resources",
        "checkVal": 20000
    },
    {
        "id": "ach_r2",
        "icon": "🍲",
        "name": "Gracia de Lakshmi",
        "desc": "Alcanza 50k de granos sin prostituir la riqueza; atrayéndola dignamente.",
        "checkType": "resources",
        "checkVal": 50000
    },
    {
        "id": "ach_r3",
        "icon": "🍞",
        "name": "Langar Incorruptible",
        "desc": "Acumula 100k de granos atrayéndolos mediante la elevación del carácter.",
        "checkType": "resources",
        "checkVal": 100000
    },
    {
        "id": "ach_r4",
        "icon": "🌽",
        "name": "Cosecha de Abundancia",
        "desc": "Consvalida 250k de granos en almacenes, manteniendo el ego bajo control.",
        "checkType": "resources",
        "checkVal": 250000
    },
    {
        "id": "ach_r5",
        "icon": "🌾",
        "name": "El Negocio de la Verdad",
        "desc": "Alcanza 500k de granos mediante intercambios comerciales limpios y honestos.",
        "checkType": "resources",
        "checkVal": 500000
    },
    {
        "id": "ach_r6",
        "icon": "🕌",
        "name": "El Altar de Narayan",
        "desc": "Acumula 1 millón de granos y consérvalos con espíritu de servicio desapegado.",
        "checkType": "resources",
        "checkVal": 1000000
    },
    {
        "id": "ach_r7",
        "icon": "💎",
        "name": "Riqueza sin Misedia",
        "desc": "Acumula 2.5 millones de granos sin avivar la llama de la avaricia del ego.",
        "checkType": "resources",
        "checkVal": 2500000
    },
    {
        "id": "ach_r8",
        "icon": "🌟",
        "name": "Ojo de la Aguja",
        "desc": "Acumula 5 millones de granos manteniéndote espiritualmente liviano.",
        "checkType": "resources",
        "checkVal": 5000000
    },
    {
        "id": "ach_r9",
        "icon": "✨",
        "name": "Gracia Magnética de Oro",
        "desc": "Atrae 10 millones de granos gracias a la vibración mental y confianza del Gurú.",
        "checkType": "resources",
        "checkVal": 10000000
    },
    {
        "id": "ach_r10",
        "icon": "👑",
        "name": "El Tesoro de Sat Nam",
        "desc": "Acumula 20 millones de granos, reconociendo tu verdadera identidad interior.",
        "checkType": "resources",
        "checkVal": 20000000
    },
    {
        "id": "ach_r11",
        "icon": "🪐",
        "name": "Fondo de Auto-Contención",
        "desc": "Alcanza 50 millones de granos y úsalos para purificar el entorno bélico.",
        "checkType": "resources",
        "checkVal": 50000000
    },
    {
        "id": "ach_r12",
        "icon": "🌌",
        "name": "Luz de Parmeshar",
        "desc": "Acumula 100 millones de granos y desvanécelos en el servicio del Langar.",
        "checkType": "resources",
        "checkVal": 100000000
    },
    {
        "id": "ach_r13",
        "icon": "💫",
        "name": "Trinidad de Actividad",
        "desc": "Acumula 250 millones de granos entendiendo la relación de unidad divina.",
        "checkType": "resources",
        "checkVal": 250000000
    },
    {
        "id": "ach_r14",
        "icon": "🔱",
        "name": "Omnipotencia Espiritual",
        "desc": "Atrae 500 millones de granos manteniendo una mente libre de novocaína ególatra.",
        "checkType": "resources",
        "checkVal": 500000000
    },
    {
        "id": "ach_r15",
        "icon": "🪐",
        "name": "El Sol Dorado del Cosmos",
        "desc": "Consvalida 1 billón de granos sin perder la ligereza y el amor propio del alma.",
        "checkType": "resources",
        "checkVal": 1000000000
    },
    {
        "id": "ach_t1",
        "icon": "👥",
        "name": "El Inicio del Vínculo",
        "desc": "Recluta a 2 oficiales. 'Dos personas podrían no pronunciar palabra e igual amarse'.",
        "checkType": "troops",
        "checkVal": 2
    },
    {
        "id": "ach_t2",
        "icon": "🤝",
        "name": "Unión Sin Pegamento",
        "desc": "Consolida un equipo de 3 tropas. 'No hay nada que unir en 3HO, es un camino'.",
        "checkType": "troops",
        "checkVal": 3
    },
    {
        "id": "ach_t3",
        "icon": "🌾",
        "name": "Agallas y Coraje",
        "desc": "Contrata a 5 oficiales con la determinación de enfrentar la invasión.",
        "checkType": "troops",
        "checkVal": 5
    },
    {
        "id": "ach_t4",
        "icon": "🕊️",
        "name": "Liderazgo de Gracia",
        "desc": "Consolida 7 defensores en tu cuartel, atrayendo voluntades con tu carácter.",
        "checkType": "troops",
        "checkVal": 7
    },
    {
        "id": "ach_t5",
        "icon": "🫂",
        "name": "La Hermandad del Acero",
        "desc": "Alcanza 10 oficiales dedicados a la defensa material y espiritual de Baghdad.",
        "checkType": "troops",
        "checkVal": 10
    },
    {
        "id": "ach_t6",
        "icon": "🧘",
        "name": "Disciplina de Yogi",
        "desc": "Dirige a 12 oficiales sin apelar al But o ego que perturbe su lealtad.",
        "checkType": "troops",
        "checkVal": 12
    },
    {
        "id": "ach_t7",
        "icon": "🛡️",
        "name": "Escuadrón del Prana",
        "desc": "Recluta 15 tropas para blindar los muros del ego romano e invasor.",
        "checkType": "troops",
        "checkVal": 15
    },
    {
        "id": "ach_t8",
        "icon": "⚔️",
        "name": "Guerreros de Narayan",
        "desc": "Lidera a 18 oficiales instruidos en el arte de la guerra espiritual.",
        "checkType": "troops",
        "checkVal": 18
    },
    {
        "id": "ach_t9",
        "icon": "⚜️",
        "name": "Guardia de la Verdad",
        "desc": "Alcanza 20 defensores consagrados a la preservación del Langar y la fe.",
        "checkType": "troops",
        "checkVal": 20
    },
    {
        "id": "ach_t10",
        "icon": "💎",
        "name": "Carácter Inquebrantable",
        "desc": "Dirige a 22 tropas enseñándoles a enfrentar la calumnia con risas.",
        "checkType": "troops",
        "checkVal": 22
    },
    {
        "id": "ach_t11",
        "icon": "🕯️",
        "name": "El Sendero del Sat Nam",
        "desc": "Recluta 25 oficiales para expandir la salud, felicidad y santidad en Baghdad.",
        "checkType": "troops",
        "checkVal": 25
    },
    {
        "id": "ach_t12",
        "icon": "🌟",
        "name": "Guías del Desierto",
        "desc": "Lidera a 28 tropas libres de condicionamientos de sus padres.",
        "checkType": "troops",
        "checkVal": 28
    },
    {
        "id": "ach_t13",
        "icon": "🕌",
        "name": "Ejército de Parmeshar",
        "desc": "Recluta 30 oficiales leales a la defensa psíquica de la ciudad.",
        "checkType": "troops",
        "checkVal": 30
    },
    {
        "id": "ach_t14",
        "icon": "🌀",
        "name": "Trinidad de la Defensa",
        "desc": "Dirige a 35 tropas en el simulador coordinando sus acciones con el alma.",
        "checkType": "troops",
        "checkVal": 35
    },
    {
        "id": "ach_t15",
        "icon": "🪐",
        "name": "La Danza del Ejército Celeste",
        "desc": "Alcanza 40 oficiales que operan como una coreografía perfecta de Dios.",
        "checkType": "troops",
        "checkVal": 40
    },
    {
        "id": "ach_m1",
        "icon": "🛡️",
        "name": "Primer Flujo de Defensa",
        "desc": "Completa con éxito tu primera misión de defensa en el simulador.",
        "checkType": "missions",
        "checkVal": 1
    },
    {
        "id": "ach_m2",
        "icon": "🔥",
        "name": "Ira de las Úlceras",
        "desc": "Completa 3 misiones defensivas sin responder a los ataques de ira del invasor.",
        "checkType": "missions",
        "checkVal": 3
    },
    {
        "id": "ach_m3",
        "icon": "🌵",
        "name": "Aislar la Negatividad",
        "desc": "Completa 5 misiones erradicando la maleza del ego de las fronteras.",
        "checkType": "missions",
        "checkVal": 5
    },
    {
        "id": "ach_m4",
        "icon": "🏹",
        "name": "Ataque Quirúrgico de Fe",
        "desc": "Ejecuta con éxito 8 misiones contra las patrullas inglesas avanzadas.",
        "checkType": "missions",
        "checkVal": 8
    },
    {
        "id": "ach_m5",
        "icon": "🌾",
        "name": "Resistencia Sutil",
        "desc": "Logra completar 10 misiones manteniendo el flujo de prana de la retaguardia.",
        "checkType": "missions",
        "checkVal": 10
    },
    {
        "id": "ach_m6",
        "icon": "🗡️",
        "name": "Sigilo del Velo",
        "desc": "Completa 15 misiones de infiltración urbana sin alertar al mando anglicano.",
        "checkType": "missions",
        "checkVal": 15
    },
    {
        "id": "ach_m7",
        "icon": "🛡️",
        "name": "Muro del Langar",
        "desc": "Ejecuta 20 misiones logísticas para blindar los almacenes de la ciudad.",
        "checkType": "missions",
        "checkVal": 20
    },
    {
        "id": "ach_m8",
        "icon": "🍲",
        "name": "Servicio en la Realidad",
        "desc": "Completa 25 misiones neutralizando la calumnia con acciones positivas.",
        "checkType": "missions",
        "checkVal": 25
    },
    {
        "id": "ach_m9",
        "icon": "🕊️",
        "name": "Paso Ligero del Gurú",
        "desc": "Logra completar 30 misiones, consumiendo menos recursos y ego-calorías.",
        "checkType": "missions",
        "checkVal": 30
    },
    {
        "id": "ach_m10",
        "icon": "🕌",
        "name": "Defensores del Templo",
        "desc": "Completa 35 misiones salvaguardando la Gran Mezquita y la Casa de la Sabiduría.",
        "checkType": "missions",
        "checkVal": 35
    },
    {
        "id": "ach_m11",
        "icon": "⚓",
        "name": "Corte de Suministros Anglicanos",
        "desc": "Completa 40 misiones bloqueando los barcos e ingenieros del Almirantazgo.",
        "checkType": "missions",
        "checkVal": 40
    },
    {
        "id": "ach_m12",
        "icon": "✨",
        "name": "Luz de Auto-Logro",
        "desc": "Ejecuta con éxito 45 misiones bajo tormentas y condiciones climáticas adversas.",
        "checkType": "missions",
        "checkVal": 45
    },
    {
        "id": "ach_m13",
        "icon": "🧘",
        "name": "Consagración en Batalla",
        "desc": "Logra 50 misiones completadas con la guarnición inspirada en el Sat Nam.",
        "checkType": "missions",
        "checkVal": 50
    },
    {
        "id": "ach_m14",
        "icon": "🌌",
        "name": "Danza del Cosmos",
        "desc": "Completa 60 misiones defensivas sincronizando la logística de la ciudad.",
        "checkType": "missions",
        "checkVal": 60
    },
    {
        "id": "ach_m15",
        "icon": "🪐",
        "name": "Infalibilidad de Dios",
        "desc": "Alcanza 75 misiones de defensa de Baghdad completadas de forma perfecta.",
        "checkType": "missions",
        "checkVal": 75
    },
    {
        "id": "ach_te1",
        "icon": "📿",
        "name": "Primera Consagración",
        "desc": "Concluye tu primer amuleto de fe en la grilla de meditación.",
        "checkType": "tech",
        "checkVal": 1
    },
    {
        "id": "ach_te2",
        "icon": "💎",
        "name": "Rosario del Nombre",
        "desc": "Consagra 2 amuletos de geometría espiritual para guiar la respiración.",
        "checkType": "tech",
        "checkVal": 2
    },
    {
        "id": "ach_te3",
        "icon": "✨",
        "name": "Diamante de Contentamiento",
        "desc": "Activa 4 consagraciones desbloqueando doctrinas del Gurú en el simulador.",
        "checkType": "tech",
        "checkVal": 4
    },
    {
        "id": "ach_te4",
        "icon": "👑",
        "name": "Rubí de Sabiduría",
        "desc": "Medita y consagra 6 joyas espirituales para ahuyentar la inercia del ego.",
        "checkType": "tech",
        "checkVal": 6
    },
    {
        "id": "ach_te5",
        "icon": "🕊️",
        "name": "Zafiro del Silencio",
        "desc": "Alcanza 8 consagraciones completadas en la grilla del Camino Espiritual.",
        "checkType": "tech",
        "checkVal": 8
    },
    {
        "id": "ach_te6",
        "icon": "🕯️",
        "name": "Perla de Devoción",
        "desc": "Consagra 10 amuletos espirituales para robustecer el prana de las murallas.",
        "checkType": "tech",
        "checkVal": 10
    },
    {
        "id": "ach_te7",
        "icon": "🌅",
        "name": "Amatista de Fe",
        "desc": "Completa la meditación de 12 tecnologías geométricas en el árbol espiritual.",
        "checkType": "tech",
        "checkVal": 12
    },
    {
        "id": "ach_te8",
        "icon": "🌸",
        "name": "Esmeralda de Nisibis",
        "desc": "Desbloquea 15 consagraciones espirituales basadas en el tratado del SGGS Ji.",
        "checkType": "tech",
        "checkVal": 15
    },
    {
        "id": "ach_te9",
        "icon": "💎",
        "name": "Calcedonia de Petra",
        "desc": "Consagra 18 amuletos potenciados por las bendiciones de Guru Ram Das.",
        "checkType": "tech",
        "checkVal": 18
    },
    {
        "id": "ach_te10",
        "icon": "🍲",
        "name": "Alquimia de Cebolla y Ajo",
        "desc": "Llega a 20 consagraciones purificando la sangre del ejército con raíces sagradas.",
        "checkType": "tech",
        "checkVal": 20
    },
    {
        "id": "ach_te11",
        "icon": "⚜️",
        "name": "Fuerza Vital del Jengibre",
        "desc": "Consagra 25 joyas geométricas para incrementar la defensa diaria de la ciudad.",
        "checkType": "tech",
        "checkVal": 25
    },
    {
        "id": "ach_te12",
        "icon": "🕋",
        "name": "Camino Incorruptible",
        "desc": "Alcanza 30 tecnologías de fe consagradas para neutralizar al mando anglicano.",
        "checkType": "tech",
        "checkVal": 30
    },
    {
        "id": "ach_te13",
        "icon": "🌟",
        "name": "Destreza del Gurú",
        "desc": "Consagra 35 amuletos de metal y madera sagrada en el árbol de investigación.",
        "checkType": "tech",
        "checkVal": 35
    },
    {
        "id": "ach_te14",
        "icon": "🌌",
        "name": "Auto-Belleza Cósmica",
        "desc": "Medita y consagra 45 amuletos espirituales de la grilla de fe.",
        "checkType": "tech",
        "checkVal": 45
    },
    {
        "id": "ach_te15",
        "icon": "🪐",
        "name": "La Unidad de Saibhang",
        "desc": "Consagra todos los 54 amuletos de geometría espiritual en tu camino divino.",
        "checkType": "tech",
        "checkVal": 54
    },
    {
        "id": "ach_df1",
        "icon": "🛡️",
        "name": "Muro del Prana Inicial",
        "desc": "Eleva la defensa de la ciudad a 20 puntos mediante maniobras militares.",
        "checkType": "defense",
        "checkVal": 20
    },
    {
        "id": "ach_df2",
        "icon": "🧱",
        "name": "Fortificación de Gracia",
        "desc": "Alcanza 30 puntos de defensa atrayendo la ayuda de los Guardianes de Siwa.",
        "checkType": "defense",
        "checkVal": 30
    },
    {
        "id": "ach_df3",
        "icon": "🏰",
        "name": "Muralla del Sat Nam",
        "desc": "Consvalida 50 puntos de defensa para repeler las cargas del mando anglicano.",
        "checkType": "defense",
        "checkVal": 50
    },
    {
        "id": "ach_df4",
        "icon": "🛡️",
        "name": "El Fortín de la Humildad",
        "desc": "Llega a 80 puntos de defensa basándote en la fuerza de la auto-contención.",
        "checkType": "defense",
        "checkVal": 80
    },
    {
        "id": "ach_df5",
        "icon": "🧱",
        "name": "El Baluarte del Carácter",
        "desc": "Consvalida 120 puntos de defensa resistiendo el hostigamiento exterior.",
        "checkType": "defense",
        "checkVal": 120
    },
    {
        "id": "ach_df6",
        "icon": "🏰",
        "name": "Santuario de Guru Ram Das",
        "desc": "Alcanza 200 puntos de defensa protegiendo el Langar y los bazares.",
        "checkType": "defense",
        "checkVal": 200
    },
    {
        "id": "ach_df7",
        "icon": "✨",
        "name": "Blindaje de Protones",
        "desc": "Eleva la defensa a 350 puntos coordinando las tropas con energía atómica.",
        "checkType": "defense",
        "checkVal": 350
    },
    {
        "id": "ach_df8",
        "icon": "🌟",
        "name": "La Mano Justa de Dios",
        "desc": "Llega a 500 puntos de defensa dejando actuar el orden natural de la justicia.",
        "checkType": "defense",
        "checkVal": 500
    },
    {
        "id": "ach_df9",
        "icon": "🌌",
        "name": "Luz de la Infalibilidad",
        "desc": "Alcanza 800 puntos de defensa anulando la novocaína del ego civil.",
        "checkType": "defense",
        "checkVal": 800
    },
    {
        "id": "ach_df10",
        "icon": "🪐",
        "name": "La Rotación Divina",
        "desc": "Logra 1000 puntos de defensa blindando a Baghdad contra toda invasión.",
        "checkType": "defense",
        "checkVal": 1000
    },
    {
        "id": "ach_al1",
        "icon": "🤝",
        "name": "Primera Alianza Rebelde",
        "desc": "Firma tu primera alianza con una facción rebelde o tribu del desierto.",
        "checkType": "alliances",
        "checkVal": 1
    },
    {
        "id": "ach_al2",
        "icon": "🌾",
        "name": "Dos Almas en Negocios",
        "desc": "Firma 2 alianzas estratégicas atrayendo el apoyo material del desierto.",
        "checkType": "alliances",
        "checkVal": 2
    },
    {
        "id": "ach_al3",
        "icon": "🐪",
        "name": "Tres Tribus del Tigris",
        "desc": "Establece 3 alianzas activas para compartir recursos y mitigar el asedio.",
        "checkType": "alliances",
        "checkVal": 3
    },
    {
        "id": "ach_al4",
        "icon": "📚",
        "name": "Concordancia Política",
        "desc": "Firma 4 alianzas simultáneas para robustecer las maniobras del alminar.",
        "checkType": "alliances",
        "checkVal": 4
    },
    {
        "id": "ach_al5",
        "icon": "🪐",
        "name": "Unión Cósmica de Tribus",
        "desc": "Sostén 5 alianzas activas unificando la fe y el acero contra el invasor.",
        "checkType": "alliances",
        "checkVal": 5
    }
];
