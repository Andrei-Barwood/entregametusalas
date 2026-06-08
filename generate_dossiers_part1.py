import json

dossiers = {}

# We have 31 operations. op_0 to op_30.
# I will generate them directly with highly unique, non-mediocre text.

def add_dossier(id, definicion, explicacion, logicas):
    dossiers[id] = {
        "definicion": definicion,
        "explicacion": explicacion,
        "logicas": logicas
    }

# 0: Exploración de Rutas
add_dossier('op_0',
    "Mapeo sistemático y encubierto de los desfiladeros y valles que conectan el Mediterráneo con Baghdad, estableciendo puntos ciegos frente al avance romano.",
    "La legión romana avanza inexorablemente confiando en calzadas pavimentadas. Si alteramos las señales y mapeamos las dunas movedizas, su maquinaria logística se asfixiará. Un imperio que no conoce el desierto no puede conquistarlo.",
    [
        "Identificación de manantiales secos para enviar a sus caballos a una muerte por deshidratación.",
        "Mapeo de zonas de eco para amplificar el sonido de nuestras emboscadas, generando terror psicológico.",
        "Localización de suelos inestables donde su formación de 'Tortuga' se hundirá por su propio peso.",
        "Registro de tormentas de arena estacionales para coordinar nuestros ataques relámpago a ciegas.",
        "Ubicación de oasis envenenados naturalmente con alcalinidad alta, letales para los estómagos romanos.",
        "Trazado de rutas de escape escarpadas imposibles de escalar con armadura de hierro.",
        "Posicionamiento de vigías en formaciones rocosas que mimetizan sus túnicas con el entorno.",
        "Medición de los tiempos de marcha enemigos al estar cargados con sus 60 libras reglamentarias.",
        "Apertura de falsos senderos que desvían a sus exploradores hacia territorios hostiles beduinos."
    ]
)

# 1: Saqueo Rápido
add_dossier('op_1',
    "Intercepción agresiva y veloz de las líneas de suministro de la retaguardia romana, extrayendo granos y recursos sin entablar combate sostenido.",
    "Un soldado imperial sin su ración de trigo mensual se amotina. La táctica no busca destruir al ejército, sino matar de hambre a su burocracia. Al robar su comida y dársela a nuestra población, invertimos la economía de la guerra a nuestro favor.",
    [
        "Ataque exclusivo a carretas de intendencia, evitando a las cohortes armadas.",
        "Uso de caballos sin herraduras para amortiguar el sonido en la arena nocturna.",
        "Inutilización de las ruedas de los carros sobrevivientes para bloquear los caminos.",
        "Envenenamiento selectivo de los barriles de vino restantes con hierbas purgantes.",
        "Liberación de las bestias de carga para causar caos logístico en su campamento.",
        "Distribución inmediata del botín al Langar para elevar la moral de nuestros refugiados.",
        "Falsa bandera: dejar armas de mercenarios partos para desviar las represalias.",
        "Quema de las raciones de carne salada romana, forzándolos a cazar y separarse.",
        "Secuestro de los escribas contables para destruir el registro de salarios de la legión."
    ]
)

# 2: Mantenimiento
add_dossier('op_2',
    "Refuerzo estructural continuo de la arquitectura defensiva de la ciudad y limpieza de las armas de asedio para prevenir la fricción y el deterioro.",
    "La guerra de desgaste la gana quien tiene cimientos más fuertes. Mientras los romanos construyen campamentos de madera temporales, nuestros muros son extensiones de la tierra. Un mantenimiento constante reduce el desgaste logístico y desmotiva el asedio sostenido.",
    [
        "Revestimiento de las puertas principales con pieles húmedas para neutralizar el fuego griego enemigo.",
        "Afinación de las cuerdas de torsión de las balistas defensivas para maximizar su alcance letal.",
        "Sustitución de ladrillos fracturados en silencio durante la noche para no mostrar debilidad.",
        "Limpieza profunda de los canales de agua internos para prevenir asfixia hídrica.",
        "Mantenimiento espiritual: bendición diaria de las puertas por parte de los líderes religiosos.",
        "Refuerzo de las bases de las atalayas con arena compactada para resistir impactos de onagros.",
        "Afilado colectivo de espadas en estado meditativo, conservando el prana de la guarnición.",
        "Inspección de túneles de escape para evitar colapsos bajo presión de asedio.",
        "Optimización de la distribución de peso en los parapetos para evitar derrumbes accidentales."
    ]
)

# 3: Entrenamiento de Élite
add_dossier('op_3',
    "Instrucción intensiva en artes marciales y control mental bajo presión, fusionando la letalidad física con la absoluta ecuanimidad espiritual.",
    "El manual de Vegecio dicta que el romano debe temer más a su comandante que al enemigo. Nosotros enseñamos a no temerle a nada. Un guerrero que ha conquistado el miedo a la muerte a través de la disciplina es biológicamente superior a un esclavo que pelea por miedo al látigo.",
    [
        "Práctica de combate a ciegas para agudizar el sexto sentido y el oído interno.",
        "Simulacros de asfixia controlada para evitar el pánico durante combates cuerpo a cuerpo.",
        "Entrenamiento de respiración abdominal (pranayama) mientras se sostiene el escudo pesado.",
        "Técnicas de desarme contra formaciones de falange o muros de escudos romanos.",
        "Memorización de mantras rítmicos que sincronizan el latido del corazón del batallón entero.",
        "Acondicionamiento térmico: meditación bajo el sol del mediodía sin agua temporalmente.",
        "Desensibilización al ruido mediante la exposición a tambores de guerra simulados a corta distancia.",
        "Estudio de la anatomía de la 'Armatura' romana para identificar brechas en las articulaciones.",
        "Juramento de hermandad: cada soldado emparejado con otro, fusionando sus destinos en el campo."
    ]
)

# 4: Vuelo del Águila
add_dossier('op_4',
    "Posicionamiento de observadores altamente entrenados en los minaretes y puntos más altos de Baghdad, sincronizando la inteligencia en tiempo real.",
    "La vasta maquinaria romana es ciega a su propio tamaño. Desde las alturas, sus campamentos son mapas abiertos. Utilizando espejos y señales de humo, nuestra red de observadores permite anticipar la posición de cada centuria horas antes de que golpeen nuestros muros.",
    [
        "Uso de cristales pulidos para transmitir códigos lumínicos incomprensibles para el invasor.",
        "Identificación de oficiales romanos por los penachos de sus cascos para asesinatos selectivos.",
        "Mapeo de la distribución de sus tiendas de intendencia para guiar el fuego de nuestras catapultas.",
        "Observación de las nubes de polvo para calcular la caballería auxiliar aproximándose.",
        "Vigilancia de aves carroñeras como indicador de escaramuzas ocultas en los cañones.",
        "Sincronización cartográfica para actualizar las rutas de nuestras patrullas terrestres.",
        "Alerta temprana contra ataques nocturnos mediante la contabilidad de sus antorchas encendidas.",
        "Análisis de las rutas de forrajeo enemigas para aislar y destruir sus grupos de recolección.",
        "Monitoreo de la moral del campamento romano observando la frecuencia de sus castigos físicos."
    ]
)

# 5: Hoja Oculta
add_dossier('op_5',
    "Infiltración profunda orientada a la eliminación selectiva y sigilosa de altos mandos de mando romano, desestabilizando la cadena de mando sin provocar combate abierto.",
    "La rígida jerarquía romana es su mayor vulnerabilidad. Si un general cae, los centuriones dudan; si el centurión cae, la infantería colapsa. Cortar la cabeza de la serpiente con un solo tajo quirúrgico evita la muerte de miles de nuestros soldados en combate abierto.",
    [
        "Aislamiento de los Tribunos Militares durante sus inspecciones nocturnas del campamento.",
        "Envenenamiento progresivo de las dagas con toxinas paralizantes para un escape seguro.",
        "Mimetización de nuestros asesinos como esclavos o aguadores dentro del campamento enemigo.",
        "Golpe en el cuello cortando la cuerda vocal, asegurando la imposibilidad de gritar auxilio.",
        "Uso de distracciones acústicas lejanas para desviar a las guardias pretorianas del objetivo.",
        "Ocultamiento del cadáver en las letrinas o fardos de heno para retrasar el descubrimiento.",
        "Asesinato del portador del estandarte (Signifer) para destruir el orgullo de la legión.",
        "Sabotaje psicológico: dejar un emblema de Baghdad en el cuerpo para causar paranoia colectiva.",
        "Retirada por vías fluviales o precipicios, usando la armadura ligera como ventaja insuperable."
    ]
)

# 6: Parkour Urbano
add_dossier('op_6',
    "Estandarización de rutas de desplazamiento por azoteas y callejones estrechos de la ciudad, creando una red tridimensional de escape y asalto.",
    "Los invasores combaten en dos dimensiones, confinados a las calles y bloqueados por barricadas. Nuestros defensores fluyen por Baghdad en tres dimensiones, convirtiendo los tejados en autopistas y transformando la arquitectura de la ciudad en un laberinto mortal para el atacante pesado.",
    [
        "Instalación de tirolesas y cuerdas ocultas entre minaretes para despliegue ultra-rápido.",
        "Acondicionamiento de toldos de lona resistentes para amortiguar caídas de emboscadas aéreas.",
        "Remoción de barandas y obstáculos en rutas críticas para permitir la fluidez de la carrera.",
        "Entrenamiento de salto de precisión, minimizando el impacto articular en las rodillas.",
        "Creación de puentes de madera retráctiles entre azoteas que se quitan tras cruzar.",
        "Acumulación de proyectiles en los tejados para hostigar a la infantería acorralada abajo.",
        "Estudio biomecánico del peso del equipo: prohibición de armaduras que reduzcan la agilidad.",
        "Marcaje de rutas con símbolos de tiza que solo nuestros iniciados pueden comprender.",
        "Uso de polvo y especias lanzadas desde arriba para cegar a los perseguidores en callejones."
    ]
)

# 7: Red de los Ocultos
add_dossier('op_7',
    "Establecimiento de un sindicato de mendigos, comerciantes y sirvientes leales a Baghdad que operan dentro de los territorios ocupados por Roma.",
    "La información es la sangre de la guerra. Mientras Roma paga a sus espías con oro corruptible, nuestra red se mueve por lealtad espiritual y odio al opresor. El enemigo ignora al mendigo que cuenta sus caballos y al mercader que mide su hambre.",
    [
        "Soborno inverso: extorsión controlada de las rutas de mercaderes que abastecen al enemigo.",
        "Mensajes encriptados escondidos dentro del pan horneado por los panaderos locales.",
        "Infiltración de tejedoras en los campamentos para sabotear discretamente las túnicas de invierno.",
        "Difusión de rumores falsos sobre rebeliones en Roma para minar la moral de las tropas.",
        "Recolección diaria de reportes a través de la red de niños huérfanos ('los pajaritos').",
        "Robo sistemático de los fondos de pago de las tropas auxiliares extranjeras.",
        "Corrupción deliberada de los intérpretes romanos para darles traducciones tácticas erróneas.",
        "Falsificación de edictos imperiales para generar confusión en los rangos intermedios.",
        "Ocultamiento de armas en bazares para organizar levantamientos civiles repentinos."
    ]
)

# 8: Robo de Edictos
add_dossier('op_8',
    "Operación de asalto quirúrgico sobre los correos imperiales (Cursus Publicus) para interceptar órdenes escritas, planes de marcha y correspondencia del Senado.",
    "El imperio romano es un monstruo de papel. No se mueven sin sellos de cera y despachos oficiales. Robar estas órdenes nos da clarividencia absoluta sobre sus movimientos, y destruirlas paraliza a sus comandantes, quienes temen actuar sin autorización escrita.",
    [
        "Emboscada selectiva a jinetes solitarios del correo imperial en pasos estrechos.",
        "Falsificación de los sellos de cera para enviar contra-órdenes destructivas.",
        "Extracción de información sobre la verdadera fortaleza numérica y brotes de enfermedad.",
        "Descubrimiento de qué facción política del Senado apoya a la expedición para manipularlos.",
        "Robo de códigos de comunicación de los centuriones para engañar a los puestos de avanzada.",
        "Neutralización de los mensajeros sin matarlos para evitar que Roma note la intercepción rápidamente.",
        "Traducción acelerada de latín antiguo por nuestros eruditos de la Casa de la Sabiduría.",
        "Lectura de la correspondencia personal de los generales para perfilar sus debilidades psicológicas.",
        "Siembra de cartas robadas en campamentos de tropas auxiliares para sembrar discordia por el botín."
    ]
)

# 9: Bomba de Humo
add_dossier('op_9',
    "Despliegue táctico masivo de mezclas químicas de salitre, azufre y especias picantes que generan espesas cortinas de humo irritante en el campo de batalla.",
    "El legionario confía en la visibilidad de su formación; si no ve a su compañero, el pánico rompe la falange. Nuestras bombas no solo ciegan, sino que irritan las mucosas, desorientando a un ejército pesado mientras nosotros, con los rostros cubiertos, nos desvanecemos o atacamos impunemente.",
    [
        "Cierre de válvulas de escape visual en callejones para atrapar a la infantería enemiga en el humo.",
        "Uso de extracto de pimiento rojo en la mezcla para generar ceguera temporal e incapacidad respiratoria.",
        "Extracción inmediata de nuestros guerreros heridos bajo la cobertura de la explosión sorda.",
        "Engaño óptico: crear humo en un flanco mientras la verdadera caballería ataca por el opuesto.",
        "Anulación de los arqueros romanos, dejándolos sin blancos durante los cruces a campo abierto.",
        "Sincronización de asaltos desde los tejados guiándose por la propagación acústica, no visual.",
        "Aislamiento táctico de oficiales, separándolos de sus escoltas protectoras en la confusión.",
        "Impregnación de las bombas en grasa para que el humo se adhiera a las armaduras pesadas.",
        "Reducción del estrés psicológico propio, al permitir retiradas honorables sin persecución."
    ]
)

# 10: Llave de Alamut
add_dossier('op_10',
    "Desbloqueo e instrumentación de las catacumbas, alcantarillas y túneles subterráneos milenarios que interconectan Baghdad bajo la arena.",
    "Las murallas detienen a los hombres, pero los túneles los devoran. Mientras el enemigo monta asedios monumentales en la superficie, nosotros reabastecemos la ciudad por debajo, evacuamos heridos y posicionamos tropas directamente detrás de sus empalizadas.",
    [
        "Limpieza de rutas subterráneas bloqueadas desde tiempos babilónicos para paso acelerado.",
        "Colocación de trampas de ruido en entradas falsas para ahogar a los exploradores romanos en la oscuridad.",
        "Transporte encubierto de munición de fuego desde las fábricas hasta los parapetos sin riesgo aéreo.",
        "Aislamiento acústico de los conductos de ventilación para evitar detección por tropas de superficie.",
        "Evacuación de la población civil vulnerable hacia oasis seguros fuera del cerco imperial.",
        "Ataques sorpresa emergiendo directamente en el centro del campamento logístico enemigo.",
        "Contrabando de agua fresca desde afluentes ocultos del Tigris, esquivando pozos envenenados.",
        "Creación de barracas subterráneas para proteger a las reservas del calor extremo y el bombardeo.",
        "Colapso estructural táctico: derrumbar pasajes justo cuando la infantería enemiga intenta infiltrarlos."
    ]
)

with open('dossiers_part1.json', 'w') as f:
    json.dump(dossiers, f)
