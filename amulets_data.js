const allTechs = {
    cloud: {
        name: "El Rosario del Nombre",
        cost: 5000,
        time: 5,
        icon: "📿",
        polygon: "Decágono Regular",
        material: "Madera de Sándalo Sagrado",
        desc: "<em>El Naam Ratan (la joya del Nombre) es el amuleto supremo que protege la mente en todo lugar. Su estructura de decágono regular posee 10 vértices de concentración simétrica que guían los vientos pránicos hacia la calma interior, disolviendo el miedo a la muerte y restableciendo la vibración original del alma.</em>"
    },
    mobile: {
        name: "El Peine de la Disciplina",
        cost: 3000,
        time: 3,
        icon: "🪮",
        polygon: "Semielipse Radial",
        material: "Madera de Ébano Índico",
        desc: "<em>El Kanga de madera pura representa la limpieza de los pensamientos dispersos. Su geometría semielíptica con 15 aristas radiales actúa como un filtro que peina y ordena las proyecciones del ego, devolviendo el equilibrio y la simetría al templo de la conciencia.</em>"
    },
    ai: {
        name: "El Brazalete del Freno",
        cost: 10000,
        time: 10,
        icon: "⭕",
        polygon: "Toroide Sinuoso",
        material: "Acero del Punyab",
        desc: "<em>El Kara de acero es un círculo eterno que no tiene principio ni fin. Su geometría toroide sin aristas representa la sumisión de la acción individual a la voluntad cósmica, actuando como un freno constante ante cualquier desviación ética de las manos y de la mente.</em>"
    },
    blockchain: {
        name: "La Vestidura del Recato",
        cost: 8000,
        time: 8,
        icon: "🩳",
        polygon: "Bipirámide Simétrica",
        material: "Algodón de Khadi Blanco",
        desc: "<em>El Kachera otorga agilidad mental y templanza moral. Su forma de bipirámide simétrica de base cuadrada equilibra la dualidad del ser, concentrando la energía creativa en dos polos opuestos de autocontrol que impiden la dispersión de los impulsos vitales.</em>"
    },
    vr: {
        name: "La Daga de la Compasión",
        cost: 12000,
        time: 12,
        icon: "🗡️",
        polygon: "Prisma Triangular Afilado",
        material: "Acero de Damasco Templado",
        desc: "<em>El Kirpan es el instrumento del deber y el honor divino. Sus tres caras triangulares afiladas cortan la ignorancia espiritual, el miedo y la tiranía, representando el compromiso inquebrantable de proteger al débil y defender la justicia eterna.</em>"
    },
    quantum: {
        name: "La Armadura del Canto",
        cost: 25000,
        time: 20,
        icon: "🪷",
        polygon: "Icosaedro Holográfico",
        material: "Luz Cósmica de Shabad",
        desc: "<em>La armadura tejida por el canto del Shabad protege al guerrero del alma. Las 20 caras triangulares del icosaedro holográfico difractan y anulan las ondas destructivas del odio terrenal, envolviendo al meditante en un escudo impenetrable de alta frecuencia vibratoria.</em>"
    },
    tech_7: {
        name: "El Diamante del Contentamiento",
        cost: 15000,
        time: 6,
        icon: "💎",
        polygon: "Octaedro Regular",
        material: "Diamante de Golconda",
        desc: "<em>El contentamiento es el diamante más puro tallado en el alma. Sus ocho caras triangulares simétricas refractan el dolor y el placer de forma idéntica, permitiendo que la conciencia permanezca inalterada en su centro absoluto.</em>"
    },
    tech_8: {
        name: "La Perla de la Devoción",
        cost: 18000,
        time: 7,
        icon: "⚪",
        polygon: "Cúpula Geodésica",
        material: "Perla del Golfo Pérsico",
        desc: "<em>La devoción pura es la perla oculta en el océano del ser. Su geometría de cúpula geodésica distribuye las presiones de las ansiedades mundanas uniformemente, protegiendo el núcleo blando del alma en un santuario esférico.</em>"
    },
    tech_9: {
        name: "El Rubí de la Sabiduría",
        cost: 20000,
        time: 8,
        icon: "🔴",
        polygon: "Dodecágono Áureo",
        material: "Rubí de Samarcanda",
        desc: "<em>La sabiduría divina es el rubí que resplandece en la noche espiritual. Sus doce vértices áureos corresponden a las doce facetas del intelecto purificado, donde la luz de la verdad destruye el velo de Maya.</em>"
    },
    tech_10: {
        name: "La Esmeralda de la Humildad",
        cost: 22000,
        time: 9,
        icon: "💚",
        polygon: "Hexágono Estirado",
        material: "Esmeralda de Nisibis",
        desc: "<em>La humildad es la joya verde que adorna el pecho del devoto. Su geometría hexagonal estirada simboliza la base ancha y firme del servicio a los demás, absorbiendo los humores del orgullo para transmutarlos en amor.</em>"
    },
    tech_11: {
        name: "El Zafiro del Silencio",
        cost: 26000,
        time: 10,
        icon: "💙",
        polygon: "Icosaedro Truncado",
        material: "Zafiro de Bagdad",
        desc: "<em>El silencio interior es un zafiro de quietud estelar. Las 32 caras de esta forma geométrica compleja actúan como trampas acústicas para el parloteo mental, sumergiendo al meditante en el sonido primordial inaudible (Anhad Shabad).</em>"
    },
    tech_12: {
        name: "El Coral de la Rectitud",
        cost: 28000,
        time: 11,
        icon: "🧡",
        polygon: "Cuboctaedro",
        material: "Coral del Mar Rojo",
        desc: "<em>La rectitud es el coral firme en medio de las corrientes de la ilusión. Sus 14 caras equilibran de forma geométrica los impulsos de acción y contemplación, impidiendo que el carácter del comandante se erosione bajo la tempestad.</em>"
    },
    tech_13: {
        name: "El Ópalo de la Iluminación",
        cost: 30000,
        time: 12,
        icon: "🔮",
        polygon: "Dodecaedro Regular",
        material: "Ópalo de Alamut",
        desc: "<em>La iluminación interior es el ópalo que encierra todos los colores de la creación. Sus 12 caras pentagonales representan la apertura de las 12 puertas del cuerpo sutil al flujo de la energía cósmica divina.</em>"
    },
    tech_14: {
        name: "La Turquesa de la Templanza",
        cost: 32000,
        time: 11,
        icon: "💠",
        polygon: "Trapezoide Áureo",
        material: "Turquesa del Jorasán",
        desc: "<em>La templanza calma los fuegos del deseo. Su estructura trapezoidal descentrada absorbe los impactos emocionales imprevistos, canalizando la fuerza reactiva del ego hacia el eje vertical de la devoción pura.</em>"
    },
    tech_15: {
        name: "La Calcedonia de la Compasión",
        cost: 35000,
        time: 12,
        icon: "🩵",
        polygon: "Prisma Hexagonal",
        material: "Calcedonia de Petra",
        desc: "<em>La compasión derretida sana las heridas de la separación espiritual. Sus 6 caras longitudinales actúan como canales de purificación, permitiendo que la vibración de la bondad fluya sin resistencia a todos los puntos cardinales.</em>"
    },
    tech_16: {
        name: "La Amatista de la Fe",
        cost: 38000,
        time: 13,
        icon: "💜",
        polygon: "Bipirámide Hexagonal",
        material: "Amatista del Cáucaso",
        desc: "<em>La fe inalterable es la amatista tallada por la instrucción del Gurú. Su doble punta hexagonal une simultáneamente los reinos mundano y espiritual, consolidando la lealtad del guerrero bajo un solo punto focal.</em>"
    },
    tech_17: {
        name: "El Jaspe del Esfuerzo",
        cost: 40000,
        time: 14,
        icon: "🧱",
        polygon: "Tetraedro Regular",
        material: "Jaspe de Basora",
        desc: "<em>El esfuerzo consciente es el jaspe que perfora la inercia mental. Sus 4 vértices agudos concentran la fuerza de voluntad del devoto, destruyendo la pereza física y el letargo espiritual con precisión milimétrica.</em>"
    },
    tech_18: {
        name: "La Cornalina de la Pureza",
        cost: 42000,
        time: 13,
        icon: "🍊",
        polygon: "Rombododecaedro",
        material: "Cornalina del Yemen",
        desc: "<em>La pureza de intención brilla como cornalina en la garganta del buscador. Sus 12 caras rómbicas forman una estructura defensiva perfecta que repele el veneno de la calumnia y el engaño exterior.</em>"
    },
    tech_19: {
        name: "El Topacio de la Verdad",
        cost: 45000,
        time: 14,
        icon: "💛",
        polygon: "Prisma Octogonal",
        material: "Topacio de Ofir",
        desc: "<em>La verdad es el topacio dorado del Creador que no se desgasta jamás. Sus 10 planos de corte estabilizan los 10 vientos del cuerpo, ordenando la respiración y el intelecto con la geometría del sonido inaudible.</em>"
    },
    tech_20: {
        name: "El Jade de la Paciencia",
        cost: 48000,
        time: 15,
        icon: "🟢",
        polygon: "Elipsoide Triaxial",
        material: "Jade de Kashgar",
        desc: "<em>La paciencia infinita es el jade que suaviza toda aspereza. Su geometría curva libre de aristas disuelve la tensión temporal del asedio, permitiendo que la voluntad del Gurú madure en el jardín de la mente.</em>"
    },
    tech_21: {
        name: "El Granate del Coraje",
        cost: 52000,
        time: 16,
        icon: "🍷",
        polygon: "Icosidodecaedro",
        material: "Granate de Samarcanda",
        desc: "<em>El coraje para la batalla justa es un granate ardiente. Sus 32 facetas simétricas equilibran la ira bélica y el discernimiento pacífico, garantizando que el guerrero combata con rectitud y sin crueldad.</em>"
    },
    tech_22: {
        name: "El Cuarzo de la Claridad",
        cost: 55000,
        time: 15,
        icon: "❄️",
        polygon: "Prisma Hexagonal Bipiramidal",
        material: "Cuarzo de Palmira",
        desc: "<em>La claridad es el cuarzo que disuelve los espejismos de la mente. Sus 18 facetas refractan la luz del Naam en patrones geométricos perfectos, desintegrando las dudas y sospechas del comandante de la fortaleza.</em>"
    },
    tech_23: {
        name: "El Ámbar de la Devoción",
        cost: 58000,
        time: 16,
        icon: "🍯",
        polygon: "Toroide Elíptico",
        material: "Ámbar del Báltico",
        desc: "<em>La devoción es el ámbar que captura y cristaliza la fragancia del Nombre divino. Su flujo toroide elíptico hace circular los pensamientos sagrados en un bucle cerrado y autosostenido de amor y agradecimiento.</em>"
    },
    tech_24: {
        name: "El Cristal del Desapego",
        cost: 60000,
        time: 17,
        icon: "💎",
        polygon: "Prisma Pentagonal",
        material: "Cristal del Tigris",
        desc: "<em>El desapego absoluto es el cristal a través del cual pasa la luz sin dejar huella. Sus 7 planos geométricos desvían la ilusión materialista de Maya, manteniendo al líder libre de codicia terrenal.</em>"
    },
    tech_25: {
        name: "La Obsidiana de la Guardia",
        cost: 63000,
        time: 18,
        icon: "🖤",
        polygon: "Pirámide de Base Cuadrada",
        material: "Obsidiana de Anatolia",
        desc: "<em>La vigilancia es la obsidiana negra que traga el odio enemigo. Sus 5 vértices actúan como un embudo energético que neutraliza los influjos psíquicos y sabotajes de los espías romanos.</em>"
    },
    tech_26: {
        name: "El Circón de la Justicia",
        cost: 66000,
        time: 17,
        icon: "⭐",
        polygon: "Heptágono Estrellado",
        material: "Circón de Ctesifonte",
        desc: "<em>La justicia imparcial es el circón que corta la falsedad de cuajo. Sus 7 puntas estrelladas representan los 7 preceptos de la ley cósmica del Gurú, ordenando el castigo justo sin deseos de venganza personal.</em>"
    },
    tech_27: {
        name: "La Malaquita de la Curación",
        cost: 70000,
        time: 18,
        icon: "🍀",
        polygon: "Paraboloide Elíptico",
        material: "Malaquita del Sinaí",
        desc: "<em>La sanación del alma es la malaquita que unifica los centros de energía. Su forma parabólica cóncava absorbe las toxinas emocionales de la derrota, devolviendo el vigor pránico al ejército herido.</em>"
    },
    tech_28: {
        name: "El Lapislázuli del Éxtasis",
        cost: 74000,
        time: 19,
        icon: "🌀",
        polygon: "Girobirocupola Triangular",
        material: "Lapislázuli del Tigris",
        desc: "<em>El éxtasis meditativo es el lapislázuli azul de la mente celestial. Sus 26 caras complejas inducen al cerebro a una frecuencia de paz inalterable, donde el ego se disuelve en el océano del Creador.</em>"
    },
    tech_29: {
        name: "El Aguamarina de la Paz",
        cost: 78000,
        time: 20,
        icon: "🌊",
        polygon: "Esfera Facetada",
        material: "Aguamarina de Tiro",
        desc: "<em>La paz mental es la aguamarina que apacigua la tormenta de los pensamientos. Sus microfacetas esféricas dispersan el clamor del combate, permitiendo al alma reposar en el Nombre inaudible del Gurú.</em>"
    },
    tech_30: {
        name: "El Espinelo de la Fuerza",
        cost: 82000,
        time: 19,
        icon: "🎖️",
        polygon: "Prisma Rectangular",
        material: "Espinelo de Samarcanda",
        desc: "<em>La fuerza interior es el espinelo que apuntala la resolución del devoto. Sus ángulos rectos otorgan resistencia estructural absoluta a la muralla del espíritu contra la embestida de las legiones.</em>"
    },
    tech_31: {
        name: "El Heliodoro del Alba",
        cost: 86000,
        time: 20,
        icon: "☀️",
        polygon: "Heptadecágono Regular",
        material: "Heliodoro de Ofir",
        desc: "<em>El amanecer de la conciencia es un heliodoro de luz dorada. Sus 17 vértices representan la disciplina del Amrit Vela (las horas del néctar), sintonizando los canales sutiles del cuerpo con los cantos sagrados del Gurú.</em>"
    },
    tech_32: {
        name: "El Ojo de Tigre de la Atención",
        cost: 90000,
        time: 21,
        icon: "👁️",
        polygon: "Bicúpula Pentagonal",
        material: "Ojo de Tigre de Basora",
        desc: "<em>La atención enfocada es el ojo que descubre la trampa en la penumbra. Su doble cúpula geométrica concentra el prana visual, disolviendo las mentiras y espejismos creados por los generales romanos.</em>"
    },
    tech_33: {
        name: "La Aventurina de la Suerte",
        cost: 94000,
        time: 20,
        icon: "🪙",
        polygon: "Trapezoedro Pentagonal",
        material: "Aventurina del Cáucaso",
        desc: "<em>La verdadera fortuna es la gracia del Gurú grabada en las caras del corazón. Sus 10 aristas trapezoidales neutralizan el infortunio exterior, canalizando las mareas del destino hacia el éxito defensivo.</em>"
    },
    tech_34: {
        name: "El Crisoberilo de la Protección",
        cost: 98000,
        time: 22,
        icon: "🛡️",
        polygon: "Icosaedro Estrellado",
        material: "Crisoberilo del Yemen",
        desc: "<em>La protección del Naam es un escudo de crisoberilo que repele el mal. Sus puntas estrelladas irradian un campo de alta tensión espiritual que disuelve la intención del atacante romano antes de llegar a la muralla.</em>"
    },
    tech_35: {
        name: "La Rodonita de la Reconciliación",
        cost: 102000,
        time: 21,
        icon: "🌸",
        polygon: "Cúpula Pentagonal",
        material: "Rodonita del Jorasán",
        desc: "<em>La reconciliación de las mentes disuelve el rencor entre los oficiales. Su base pentagonal y curvatura suavizan las fricciones del egoísmo, permitiendo que la tropa opere en perfecta cohesión fraternal.</em>"
    },
    tech_36: {
        name: "La Celestina del Coro",
        cost: 106000,
        time: 22,
        icon: "☄️",
        polygon: "Dodecaedro Estrellado",
        material: "Celestina de Palmira",
        desc: "<em>El coro sagrado es una celestina que limpia el cielo del asedio. Sus puntas de estrella pentagonales vibran al unísono con el Shabad eterno, disolviendo la zozobra y la fatiga mental de la población civil.</em>"
    },
    tech_37: {
        name: "El Diamante Negro de la Resistencia",
        cost: 110000,
        time: 23,
        icon: "🖤",
        polygon: "Bipirámide Pentagonal",
        material: "Diamante de Golconda Negro",
        desc: "<em>La resistencia de la fe es indestructible como el diamante negro. Su geometría piramidal doble soporta presiones colosales sin deformarse, manteniendo firme al Líder Supremo ante el asedio prolongado.</em>"
    },
    tech_38: {
        name: "El Rubí Estrella de la Guía",
        cost: 115000,
        time: 24,
        icon: "🧭",
        polygon: "Hexagrama Áureo",
        material: "Rubí Estrella de Samarcanda",
        desc: "<em>La instrucción del Gurú es la estrella de seis puntas que brilla en el corazón del general. Su geometría áurea orienta las fuerzas de vanguardia hacia los pasos libres de emboscadas romanas.</em>"
    },
    tech_39: {
        name: "El Zafiro Estrella del Norte",
        cost: 120000,
        time: 25,
        icon: "🌌",
        polygon: "Dodecagrama Regular",
        material: "Zafiro Estrella de Bagdad",
        desc: "<em>El polo espiritual es el zafiro estrella de la verdad inmutable. Sus 12 puntas orientan la brújula moral del comandante en medio de la niebla y la guerra psicológica desatada por el enemigo.</em>"
    },
    tech_40: {
        name: "La Esmeralda Trapiche de la Razón",
        cost: 125000,
        time: 24,
        icon: "❇️",
        polygon: "Rueda Hexagonal Facetada",
        material: "Esmeralda Trapiche de Nisibis",
        desc: "<em>La mente analítica estructurada gira en torno a la verdad divina. Sus 6 radios de carbón ordenan el pensamiento lógico y la estrategia, impidiendo el pánico irracional bajo el bombardeo de rocas.</em>"
    },
    tech_41: {
        name: "La Hematita del Anclaje",
        cost: 130000,
        time: 26,
        icon: "⚓",
        polygon: "Prisma Octogonal Bipiramidal",
        material: "Hematita del Cáucaso",
        desc: "<em>El anclaje espiritual estabiliza el pulso del meditante. Su cuerpo prismático de 8 lados clava la atención del alma en la tierra de la verdad eterna, evitando que los temores rompan la concentración táctica.</em>"
    },
    tech_42: {
        name: "El Heliodoro Estrella del Sol",
        cost: 135000,
        time: 25,
        icon: "☀️",
        polygon: "Estrella de 16 Puntas",
        material: "Heliodoro del Yemen",
        desc: "<em>La iluminación meridiana disipa los fantasmas de la noche. Sus 16 puntas simétricas irradian calor pránico sobre las murallas, despertando el coraje dormido en las tropas fatigadas por el asedio romano.</em>"
    },
    tech_43: {
        name: "La Morganita de la Ternura",
        cost: 140000,
        time: 27,
        icon: "💝",
        polygon: "Icosaedro Truncado Modificado",
        material: "Morganita de Basora",
        desc: "<em>La bondad sutil de la morganita lima la dureza de las intenciones bélicas. Sus planos biselados impiden el envenenamiento moral del comandante, transformando el deber de la defensa en un rito de compasión cósmica.</em>"
    },
    tech_44: {
        name: "La Tanzanita del Ocaso",
        cost: 145000,
        time: 26,
        icon: "🍇",
        polygon: "Prisma Heptagonal",
        material: "Tanzanita del Jorasán",
        desc: "<em>La disolución del ego prepara al alma para el descanso definitivo. Sus 7 lados canalizan la entrega total a la caída del sol, purgando la autotoxemia mental de las batallas del día.</em>"
    },
    tech_45: {
        name: "El Jade Imperial del Trono",
        cost: 150000,
        time: 28,
        icon: "👑",
        polygon: "Dodecaedro Truncado",
        material: "Jade Imperial de Kashgar",
        desc: "<em>El trono espiritual del Gurú es eterno e inamovible. Sus 36 aristas talladas consagran al Líder Supremo con la soberanía moral necesaria para dirigir con justicia sobre la fortaleza de Baghdad.</em>"
    },
    tech_46: {
        name: "El Ópalo Negro del Misterio",
        cost: 155000,
        time: 29,
        icon: "🔮",
        polygon: "Antiprisma Hexagonal",
        material: "Ópalo Negro de Alamut",
        desc: "<em>El misterio de la creación se desvela en la profundidad del ópalo negro. Sus 12 vértices curvan la luz de Maya, mostrando al meditante la irrealidad física de la guerra y la inmortalidad eterna del espíritu.</em>"
    },
    tech_47: {
        name: "El Granate Estrella de la Unión",
        cost: 160000,
        time: 28,
        icon: "💍",
        polygon: "Dodecaedro Romboidal",
        material: "Granate Estrella de Samarcanda",
        desc: "<em>La cohesión inquebrantable de la falange defensiva se representa en esta joya. Sus caras romboidales encajan sin dejar holguras, uniendo los corazones de los oficiales en una sola voluntad ante el asedio.</em>"
    },
    tech_48: {
        name: "La Turmalina de la Tensión",
        cost: 165000,
        time: 29,
        icon: "🔋",
        polygon: "Prisma Trigonal Bipiramidal",
        material: "Turmalina de Petra",
        desc: "<em>La tensión protectora de la turmalina neutraliza las cargas negativas del miedo. Su polaridad geométrica actúa como un pararrayos pránico, manteniendo el sistema nervioso de la tropa en perfecto estado operativo.</em>"
    },
    tech_49: {
        name: "La Alejandrita del Cambio",
        cost: 170000,
        time: 30,
        icon: "💎",
        polygon: "Prisma Romboédrico",
        material: "Alejandrita de Ctesifonte",
        desc: "<em>La transmutación interna del guerrero brilla en la alejandrita. Su simetría romboédrica cambia de tonalidad según la vibración mental del comandante, convirtiendo la fatiga en ímpetu de defensa justa.</em>"
    },
    tech_50: {
        name: "La Larimar de la Calma",
        cost: 172000,
        time: 28,
        icon: "🌊",
        polygon: "Toroide Plano",
        material: "Larimar de Tiro",
        desc: "<em>La calma espiritual es un remanso en medio de la carnicería mundana. Su geometría circular plana canaliza las energías destructivas del asedio romano y las disuelve en la inmensidad del Naam.</em>"
    },
    tech_51: {
        name: "La Sugilita de la Meditación",
        cost: 175000,
        time: 30,
        icon: "🔮",
        polygon: "Prisma Decagonal",
        material: "Sugilita del Sinaí",
        desc: "<em>La meditación en el Shabad abre las puertas del plano sutil. Sus 10 caras longitudinales alinean las 10 puertas del cuerpo con la vibración cósmica, trayendo desapego y paz absoluta al Líder Supremo.</em>"
    },
    tech_52: {
        name: "La Moldavita del Fuego",
        cost: 178000,
        time: 29,
        icon: "☄️",
        polygon: "Pirámide Estrellada",
        material: "Moldavita del Cáucaso",
        desc: "<em>El fuego sagrado quema las impurezas del orgullo terrenal. Las aristas afiladas de la moldavita liberan la energía vital estancada, rompiendo los bloqueos y llenando de prana al ejército sitiado.</em>"
    },
    tech_53: {
        name: "La Charoita del Destino",
        cost: 180000,
        time: 30,
        icon: "🌀",
        polygon: "Toroide Sinuoso de Möbius",
        material: "Charoita de Samarcanda",
        desc: "<em>El destino final del meditante es la liberación de la reencarnación y de Maya. Su geometría infinita de Möbius representa la unión definitiva de la conciencia individual con el Creador Supremo.</em>"
    },
    tech_54: {
        name: "La Esmeralda Estrella de la Corona",
        cost: 200000,
        time: 30,
        icon: "👑",
        polygon: "Cúpula Geodésica Estrellada",
        material: "Esmeralda Estrella de Nisibis",
        desc: "<em>La corona de la sabiduría suprema es la esmeralda estrella de 120 facetas triangulares. Unifica todas las virtudes consagradas del alma en una sola red geométrica infinita, consagrando la victoria definitiva de Baghdad.</em>"
    }
};
