const allRecruits = [
    {
        "id": "rec_1",
        "name": "Centinela de la Benevolencia",
        "desc": "Entrenado en el fundamento de la benevolencia política de la dinastía antigua; prioriza la reconciliación y la paz interna.",
        "role": "developer",
        "skill": 75,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_2",
        "name": "Guardia de la Rectitud",
        "desc": "Un comandante dispuesto a pacificar al pueblo y someter voluntariamente a las provincias mediante la rectitud.",
        "role": "developer",
        "skill": 78,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_3",
        "name": "Oficial de la Sabiduría",
        "desc": "Estratega que comprende el fin y el inicio del combate, sirviendo como guía de conducta para las masas.",
        "role": "developer",
        "skill": 82,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_4",
        "name": "Jefe del Coraje de Sima",
        "desc": "Soldado valiente que sabe cuándo indultar a los sometidos, aplicando el coraje sin crueldad innecesaria.",
        "role": "developer",
        "skill": 80,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_5",
        "name": "Custodio de la Integridad",
        "desc": "Fiel protector que espera a que el enemigo complete su formación antes de iniciar el asalto en honor a la integridad.",
        "role": "developer",
        "skill": 85,
        "hireCost": 1900,
        "salary": 3800
    },
    {
        "id": "rec_6",
        "name": "Sanador de Enemigos Heridos",
        "desc": "Médico de campaña instruido en el edicto del Primer Ministro: proporcionar atención médica a los heridos del enemigo y devolverlos.",
        "role": "sales",
        "skill": 72,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_7",
        "name": "Protector de la Ancianidad",
        "desc": "Guardia perimetral que protege y escolta a los niños y ancianos del offender en concordancia con los antiguos ritos de la Xia.",
        "role": "sales",
        "skill": 70,
        "hireCost": 1100,
        "salary": 2200
    },
    {
        "id": "rec_8",
        "name": "Pacificador de Templos",
        "desc": "Oficial que prohíbe violentar los templos y los dioses del territorio enemigo al entrar en su jurisdicción.",
        "role": "manager",
        "skill": 76,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_9",
        "name": "Conservador del Bosque Sagrado",
        "desc": "Encargado de vigilar que las tropas no talen bosques ni destruyan obras de tierra en territorio enemigo.",
        "role": "designer",
        "skill": 74,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_10",
        "name": "Inspector de Tributos y Ritos",
        "desc": "Inspector encargado de vigilar las aduanas y ritos de las cuatro esquinas del reino para evitar desvíos financieros.",
        "role": "sales",
        "skill": 81,
        "hireCost": 1650,
        "salary": 3300
    },
    {
        "id": "rec_11",
        "name": "Ejecutor de las 9 Prohibiciones",
        "desc": "Oficial estricto que castiga a quienes encrochan tierras de estados débiles o desplazan a su población civil.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_12",
        "name": "Azote de Tiranos Bully",
        "desc": "Comandante de vanguardia asignado a purgar a los nobles brutales que abusan de sus subordinados.",
        "role": "developer",
        "skill": 84,
        "hireCost": 1850,
        "salary": 3700
    },
    {
        "id": "rec_13",
        "name": "Restaurador de Tierras Agrícolas",
        "desc": "Agrónomo militar que castiga a quienes causan que los campos queden inutilizados y la población se disperse.",
        "role": "sales",
        "skill": 75,
        "hireCost": 1350,
        "salary": 2700
    },
    {
        "id": "rec_14",
        "name": "Guerrero del Respeto Familiar",
        "desc": "Soldado jurado que persigue y castiga con la muerte a quienes asesinan a sus propios familiares consanguíneos.",
        "role": "developer",
        "skill": 79,
        "hireCost": 1450,
        "salary": 2900
    },
    {
        "id": "rec_15",
        "name": "Vengador del Gobernante Digno",
        "desc": "Fuerza especial encargada de exterminar a los rebeldes que deponen o asesinan a su gobernante legítimo.",
        "role": "manager",
        "skill": 86,
        "hireCost": 2100,
        "salary": 4200
    },
    {
        "id": "rec_16",
        "name": "Martillo de la Insurrección",
        "desc": "Zapador pesado que destruye las fortificaciones de los que desobedecen las órdenes del Soberano.",
        "role": "designer",
        "skill": 88,
        "hireCost": 2200,
        "salary": 4400
    },
    {
        "id": "rec_17",
        "name": "Cazador de los Hombres-Animales",
        "desc": "Comandante implacable que extingue a las hordas corruptas y lujuriosas que actúan como bestias sin moral.",
        "role": "developer",
        "skill": 82,
        "hireCost": 1750,
        "salary": 3500
    },
    {
        "id": "rec_18",
        "name": "Señor de la Forma y la Tierra",
        "desc": "Cartógrafo que define la geografía de los señores feudales mediante la distribución justa de territorios.",
        "role": "manager",
        "skill": 77,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_19",
        "name": "Beduino de la Guía Silenciosa",
        "desc": "Explorador que lidera la caballería esquivando las tormentas de arena estacionales del mediodía.",
        "role": "manager",
        "skill": 80,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_20",
        "name": "Maestre de Armaduras de la Xia",
        "desc": "Artesano que forja protecciones metálicas optimizadas para las tropas ligeras del desierto.",
        "role": "designer",
        "skill": 79,
        "hireCost": 1380,
        "salary": 2760
    },
    {
        "id": "rec_21",
        "name": "Escriba del Mandato del Cielo",
        "desc": "Erudito que redacta edictos de paz y música para convencer a los estados extranjeros de someterse sin violencia.",
        "role": "sales",
        "skill": 73,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_22",
        "name": "Vigía del Paso Estacional",
        "desc": "Observador que calcula los ciclos celestes para evitar movilizar al ejército en el invierno o el verano severo.",
        "role": "manager",
        "skill": 78,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_23",
        "name": "Heraldo de la Campaña de Rectificación",
        "desc": "Mensajero veloz que anuncia las ofensas de los estados rebeldes a toda la nación antes de la marcha.",
        "role": "sales",
        "skill": 74,
        "hireCost": 1150,
        "salary": 2300
    },
    {
        "id": "rec_24",
        "name": "Ingeniero de Esclusas Hidráulicas",
        "desc": "Especialista en desviar el flujo de agua para proteger Baghdad de inundaciones o asedios prolongados.",
        "role": "designer",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_25",
        "name": "Capitán del Langar Equitativo",
        "desc": "Oficial encargado de repartir las raciones de grano de forma equitativa para evitar motines de hambre.",
        "role": "sales",
        "skill": 76,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_26",
        "name": "Guardián de la Moral de Sima",
        "desc": "Consejero espiritual que instruye a las tropas en las seis virtudes clásicas antes de salir a campaña.",
        "role": "developer",
        "skill": 81,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_27",
        "name": "Explorador de Pozos Secos",
        "desc": "Guía del desierto que localiza e inutiliza los pozos de agua que el enemigo pretende usar.",
        "role": "manager",
        "skill": 82,
        "hireCost": 1680,
        "salary": 3360
    },
    {
        "id": "rec_28",
        "name": "Oficial de la No Violencia",
        "desc": "Comandante que evita atacar estados en duelo o durante desastres naturales, respetando la moral cósmica.",
        "role": "developer",
        "skill": 75,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_29",
        "name": "Soldado de la Paz Armónica",
        "desc": "Infantería que entona cantos tradicionales durante la marcha para disolver el pánico al asedio enemigo.",
        "role": "developer",
        "skill": 73,
        "hireCost": 1100,
        "salary": 2200
    },
    {
        "id": "rec_30",
        "name": "Constructor del Campamento Humilde",
        "desc": "Carpintero de asedio que levanta tiendas perimetrales ordenadas para albergar a los refugiados del este.",
        "role": "designer",
        "skill": 77,
        "hireCost": 1320,
        "salary": 2640
    },
    {
        "id": "rec_31",
        "name": "Sanador con Trinity de Raíces",
        "desc": "Asistente médico especializado en la cocción de jengibre y ajo para purificar la sangre de los infectados.",
        "role": "sales",
        "skill": 74,
        "hireCost": 1180,
        "salary": 2360
    },
    {
        "id": "rec_32",
        "name": "Alquimista de Salitre y Cal",
        "desc": "Químico militar que prepara compuestos aglutinantes para sellar las murallas fracturadas por catapultas.",
        "role": "designer",
        "skill": 84,
        "hireCost": 1750,
        "salary": 3500
    },
    {
        "id": "rec_33",
        "name": "Instructor de la Dignidad",
        "desc": "Oficial que instruye a los reclutas en la distinción de rangos para evitar fricciones y desórdenes.",
        "role": "developer",
        "skill": 76,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_34",
        "name": "Comandante del Yuan Rong",
        "desc": "Piloto experto del carro de guerra Yuan Rong, valorado por su inmensa fuerza estructural en el choque.",
        "role": "designer",
        "skill": 85,
        "hireCost": 1850,
        "salary": 3700
    },
    {
        "id": "rec_35",
        "name": "Jefe del Carro de Gancho",
        "desc": "Conductor del carro de gancho de la dinastía Xia, famoso por su suave de desplazamiento en la arena.",
        "role": "designer",
        "skill": 80,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_36",
        "name": "Piloto del Carro Yin",
        "desc": "Conductor del veloz carro Yin de la dinastía Shang, optimizado para cargas tácticas de alta velocidad.",
        "role": "designer",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_37",
        "name": "Abanderado de la Bandera Negra",
        "desc": "Portador de la insignia negra de la Xia, que representa la guía suprema del líder de los hombres.",
        "role": "developer",
        "skill": 77,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_38",
        "name": "Abanderado de la Bandera Blanca",
        "desc": "Portador de la insignia blanca de la Shang, que simboliza la justicia del cielo en el campo de batalla.",
        "role": "developer",
        "skill": 79,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_39",
        "name": "Abanderado de la Bandera Amarilla",
        "desc": "Portador de la insignia amarilla de la Zhou, que manifiesta la verdad del camino de la Tierra.",
        "role": "developer",
        "skill": 81,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_40",
        "name": "Custodio del Sol y la Luna",
        "desc": "Oficial que porta la insignia luminosa del sol y la luna, guiando a la vanguardia en la penumbra.",
        "role": "manager",
        "skill": 83,
        "hireCost": 1750,
        "salary": 3500
    },
    {
        "id": "rec_41",
        "name": "Portador de la Insignia del Tigre",
        "desc": "Guerrero pesado que porta el emblema del tigre, infundiendo awesomeness y pavor en las legiones romanas.",
        "role": "developer",
        "skill": 84,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_42",
        "name": "Portador del Dragón de Zhou",
        "desc": "Oficial que porta el emblema del dragón, inspirando cultura, disciplina y fe en los defensores.",
        "role": "developer",
        "skill": 85,
        "hireCost": 1900,
        "salary": 3800
    },
    {
        "id": "rec_43",
        "name": "Centinela de la Casa de la Sabiduría",
        "desc": "Guardia jurado asignado a la Casa de la Sabiduría para proteger los manuscritos antiguos de incendios.",
        "role": "manager",
        "skill": 78,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_44",
        "name": "Maestre del Tambor del Caballo",
        "desc": "Músico de guerra que dirige el paso y el aliento de los corceles de caballería ligera.",
        "role": "designer",
        "skill": 75,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_45",
        "name": "Maestre del Tambor del Carro",
        "desc": "Percusionista de vanguardia que coordina las cargas y giros de los carros pesados de asedio.",
        "role": "designer",
        "skill": 76,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_46",
        "name": "Maestre del Tambor de Infantería",
        "desc": "Músico que marca el compás de la marcha síncrona para evitar que los lanceros rompan filas.",
        "role": "developer",
        "skill": 74,
        "hireCost": 1150,
        "salary": 2300
    },
    {
        "id": "rec_47",
        "name": "Ejecutor de Oaths de Xia",
        "desc": "Oficial que administra los juramentos sagrados dentro del campamento para elevar el espíritu combativo.",
        "role": "sales",
        "skill": 78,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_48",
        "name": "Heraldo del Juramento de Zhou",
        "desc": "Orador que proclama los edictos de Zhou justo antes del choque de espadas para motivar a las masas.",
        "role": "sales",
        "skill": 80,
        "hireCost": 1450,
        "salary": 2900
    },
    {
        "id": "rec_49",
        "name": "Herrero del Acero de Damasco",
        "desc": "Artesano que forja espadas y lanzas equilibradas, asegurando que no sean ni muy largas ni muy cortas.",
        "role": "designer",
        "skill": 84,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_50",
        "name": "Oficial de la No Jactancia",
        "desc": "Militar humilde y de gran talento que no presume de sus logros, garantizando informes verídicos de campaña.",
        "role": "developer",
        "skill": 86,
        "hireCost": 2000,
        "salary": 4000
    },
    {
        "id": "rec_51",
        "name": "Escriba de la Deferencia de Rango",
        "desc": "Contable militar que registra las hazañas de combate sin generar arrogancia entre los oficiales superiores.",
        "role": "sales",
        "skill": 77,
        "hireCost": 1350,
        "salary": 2700
    },
    {
        "id": "rec_52",
        "name": "Guardia de la Deferencia de Derrota",
        "desc": "Oficial que en caso de derrota asume la responsabilidad junto con el comandante, evitando recriminaciones.",
        "role": "developer",
        "skill": 80,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_53",
        "name": "Oficial de la Justicia Inmediata",
        "desc": "Ejecutor de recompensas y castigos rápidos para mantener la credibilidad de la ley sin demoras.",
        "role": "developer",
        "skill": 82,
        "hireCost": 1650,
        "salary": 3300
    },
    {
        "id": "rec_54",
        "name": "Arquero de la Calma Pránica",
        "desc": "Tirador de élite entrenado en regular su respiración bajo el estruendo de los proyectiles enemigos.",
        "role": "designer",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_55",
        "name": "Espía de la Infiltración Civil",
        "desc": "Agente infiltrado en las plazas públicas para evaluar el descontento popular y las conspiraciones.",
        "role": "manager",
        "skill": 81,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_56",
        "name": "Explorador de los Caminos de Tierra",
        "desc": "Rastreador que busca senderos libres de la caballería pesada y puestos avanzados enemigos.",
        "role": "manager",
        "skill": 82,
        "hireCost": 1680,
        "salary": 3360
    },
    {
        "id": "rec_57",
        "name": "Oficial de la Magnanimidad en Letrinas",
        "desc": "Sanitario militar que desinfecta campamentos y previene brotes de cólera y disentería.",
        "role": "sales",
        "skill": 75,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_58",
        "name": "Maestre de Campanas de Parada",
        "desc": "Militar encargado de hacer sonar las campanas de bronce para ordenar el repliegue ordenado de tropas.",
        "role": "designer",
        "skill": 74,
        "hireCost": 1100,
        "salary": 2200
    },
    {
        "id": "rec_59",
        "name": "Diseñador de Escudos Scutum Falsos",
        "desc": "Artesano que fabrica escudos de imitación para desorientar a los arqueros enemigos sobre nuestras líneas.",
        "role": "designer",
        "skill": 79,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_60",
        "name": "Especialista en Abrojos Metálicos",
        "desc": "Zapador ligero que siembra clavos en los valles estrechos para frenar el avance de las botas romanas.",
        "role": "designer",
        "skill": 82,
        "hireCost": 1550,
        "salary": 3100
    },
    {
        "id": "rec_61",
        "name": "Oficial del Silencio Absoluto",
        "desc": "Comandante que dirige emboscadas silenciosas prohibiendo el uso de antorchas y voces de mando.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1750,
        "salary": 3500
    },
    {
        "id": "rec_62",
        "name": "Guía de la Retirada del Desierto",
        "desc": "Conductor experto que lidera la retirada del convoy por desfiladeros de difícil acceso para la legión.",
        "role": "manager",
        "skill": 84,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_63",
        "name": "Negociador beduino de la Trinidad",
        "desc": "Delegado diplomático que convence a los beduinos de no guiar a los cartógrafos de Roma por el desierto.",
        "role": "sales",
        "skill": 82,
        "hireCost": 1650,
        "salary": 3300
    },
    {
        "id": "rec_64",
        "name": "Lector de Astrología Militar",
        "desc": "Sabio que lee el movimiento de las estrellas para predecir tormentas de arena propicias para el ataque.",
        "role": "manager",
        "skill": 76,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_65",
        "name": "Estratega del Acordar con el Cielo",
        "desc": "Planificador que utiliza los cambios climáticos repentinos y la neblina para iniciar emboscadas.",
        "role": "developer",
        "skill": 84,
        "hireCost": 1900,
        "salary": 3800
    },
    {
        "id": "rec_66",
        "name": "Oficial de Acumulación por Sequestro",
        "desc": "Especialista en requisar raciones y trigo del campamento enemigo para abastecer nuestras despensas.",
        "role": "sales",
        "skill": 80,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_67",
        "name": "Comandante del Placer del Pueblo",
        "desc": "Líder que solo inicia campañas militares que gozan de la aprobación moral y el fervor de la población.",
        "role": "developer",
        "skill": 81,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_68",
        "name": "Defensor de Puntos Estratégicos",
        "desc": "Oficial de infantería pesada experto en la defensa de cañones y pasos angostos en la frontera.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1750,
        "salary": 3500
    },
    {
        "id": "rec_69",
        "name": "Instructor del Arco y la Flecha",
        "desc": "Maestre que entrena a los reclutas en el uso de arcos compuestos para repeler asaltos a gran distancia.",
        "role": "designer",
        "skill": 78,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_70",
        "name": "Maestre de la Maza y la Lanza",
        "desc": "Entrenador en combate cerrado para defender las puertas principales contra el ariete romano.",
        "role": "designer",
        "skill": 79,
        "hireCost": 1350,
        "salary": 2700
    },
    {
        "id": "rec_71",
        "name": "Especialista en Alabardas Apoyadas",
        "desc": "Infantería de élite armada con alabardas largas para sostener la línea frente a cargas montadas.",
        "role": "designer",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_72",
        "name": "Copiador de Nuevas Armas",
        "desc": "Ingeniero metalúrgico que analiza y replica las armas de asedio romanas capturadas en combate.",
        "role": "designer",
        "skill": 85,
        "hireCost": 1950,
        "salary": 3900
    },
    {
        "id": "rec_73",
        "name": "Analista de Ventajas y Ganancias",
        "desc": "Financiero militar que evalúa el costo-beneficio de cada incursión antes de movilizar los camellos.",
        "role": "sales",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_74",
        "name": "Ordenador del Caos Urbano",
        "desc": "Oficial de policía militar que impone el orden civil en las calles de Baghdad bajo fuego de catapultas.",
        "role": "developer",
        "skill": 80,
        "hireCost": 1450,
        "salary": 2900
    },
    {
        "id": "rec_75",
        "name": "Regulador del Avance y Parada",
        "desc": "Heraldo que transmite las órdenes de avance y parada mediante banderas reflectantes de bronce.",
        "role": "sales",
        "skill": 76,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_76",
        "name": "Aceptador de Remonstrancias",
        "desc": "General de mente abierta que escucha los consejos de sus subalternos para evitar campañas desastrosas.",
        "role": "developer",
        "skill": 86,
        "hireCost": 2050,
        "salary": 4100
    },
    {
        "id": "rec_77",
        "name": "Nutridor del Sentido de Vergüenza",
        "desc": "Instructor que forja el pundonor en los reclutas para que prefieran la muerte honorable antes que la deserción.",
        "role": "developer",
        "skill": 78,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_78",
        "name": "Simplificador de Leyes de Sima",
        "desc": "Escriba que reduce el código militar a reglas sencillas de entender para evitar confusiones gástricas.",
        "role": "sales",
        "skill": 75,
        "hireCost": 1180,
        "salary": 2360
    },
    {
        "id": "rec_79",
        "name": "Vigilante de Ofensas Menores",
        "desc": "Oficial de disciplina que castiga las faltas pequeñas para evitar que las tropas cometan crímenes mayores.",
        "role": "developer",
        "skill": 79,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_80",
        "name": "Divinador de la Caparazón de Tortuga",
        "desc": "Sacerdote que realiza lecturas en caparazones para elegir en secreto el día propicio del ataque.",
        "role": "manager",
        "skill": 77,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_81",
        "name": "Maestre del Secreto Militar",
        "desc": "Oficial que coordina las operaciones encubiertas en silencio absoluto para evitar el espionaje de Roma.",
        "role": "manager",
        "skill": 85,
        "hireCost": 1900,
        "salary": 3800
    },
    {
        "id": "rec_82",
        "name": "Administrador de la Riqueza del Estado",
        "desc": "Tesorero que asegura que los recursos de Baghdad se mantengan abundantes antes de declarar la guerra.",
        "role": "sales",
        "skill": 84,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_83",
        "name": "Entrenador de Formaciones Flexibles",
        "desc": "Comandante que instruye a las tropas en cambiar de formación dispersa a cerrada en segundos.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_84",
        "name": "Planificador del Foreseeable",
        "desc": "Estratega que analiza los riesgos futuros de la campaña y prepara raciones de frijol mung de reserva.",
        "role": "developer",
        "skill": 85,
        "hireCost": 1950,
        "salary": 3900
    },
    {
        "id": "rec_85",
        "name": "Oficial de Con concordia de Chariots",
        "desc": "Coordinador de movimientos que asegura la sincronización entre la caballería y la infantería ligera.",
        "role": "designer",
        "skill": 80,
        "hireCost": 1450,
        "salary": 2900
    },
    {
        "id": "rec_86",
        "name": "Neutralizador de la Arrogancia Extrema",
        "desc": "Oficial de moral encargado de calmar las actitudes soberbias de los comandantes veteranos del este.",
        "role": "developer",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_87",
        "name": "Cazador de la Laxitud de Guardia",
        "desc": "Inspector que vigila que los centinelas nocturnos mantengan el estado de alerta sin caer en la somnolencia.",
        "role": "manager",
        "skill": 80,
        "hireCost": 1480,
        "salary": 2960
    },
    {
        "id": "rec_88",
        "name": "Espía del Sabotaje Interno",
        "desc": "Agente enviado al campamento enemigo para sembrar rumores de peste entre sus tropas auxiliares.",
        "role": "manager",
        "skill": 86,
        "hireCost": 2100,
        "salary": 4200
    },
    {
        "id": "rec_89",
        "name": "Observador del Terreno Cercano",
        "desc": "Explorador que analiza los valles secos cercanos a las murallas para sembrar trampas de foso.",
        "role": "manager",
        "skill": 81,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_90",
        "name": "Abonador del Fervor de Rectitud",
        "desc": "Predicador militar que estimula la moral de los soldados recordándoles su deber con el Creador.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_91",
        "name": "Jefe del Control Centralizado",
        "desc": "Oficial que asume el mando unificado cuando los métodos tradicionales de defensa fallan en el caos.",
        "role": "developer",
        "skill": 87,
        "hireCost": 2250,
        "salary": 4500
    },
    {
        "id": "rec_92",
        "name": "Oficial del Vestir por Protocolo",
        "desc": "Encargado de la uniformidad militar para mantener la distinción visual de los rangos en batalla.",
        "role": "sales",
        "skill": 73,
        "hireCost": 1100,
        "salary": 2200
    },
    {
        "id": "rec_93",
        "name": "Administrador de los Cuatro Controles",
        "desc": "Magistrado militar que gestiona la gloria, el lucro, la vergüenza y la muerte para mantener el orden.",
        "role": "developer",
        "skill": 84,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_94",
        "name": "Maestre de la Batalla Marina",
        "desc": "Ingeniero naval encargado de fortificar las barcazas del río Tigris para resistir ataques fluviales.",
        "role": "designer",
        "skill": 81,
        "hireCost": 1550,
        "salary": 3100
    },
    {
        "id": "rec_95",
        "name": "Especialista en Tácticas de Fuego",
        "desc": "Zapador de asedio que diseña compuestos de brea y azufre para quemar las arietes romanas.",
        "role": "designer",
        "skill": 85,
        "hireCost": 1900,
        "salary": 3800
    },
    {
        "id": "rec_96",
        "name": "Guardián de la Fe del Langar",
        "desc": "Cocinero militar consagrado que entona cantos sagrados sobre las raciones de basmati de los heridos.",
        "role": "sales",
        "skill": 76,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_97",
        "name": "Espía de la Retaguardia Romana",
        "desc": "Infiltrado en las cocinas del César que sabotea la carne salada enemiga introduciendo ricino.",
        "role": "manager",
        "skill": 87,
        "hireCost": 2150,
        "salary": 4300
    },
    {
        "id": "rec_98",
        "name": "Negociador de la Alianza Beduina",
        "desc": "Embajador que recluta a los jefes nómadas para que actúen como la caballería de choque de Baghdad.",
        "role": "sales",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_99",
        "name": "Oficial de la Calma en Cuclillas",
        "desc": "Comandante que entrena a la infantería a mantener la posición en cuclillas para resistir el bombardeo.",
        "role": "developer",
        "skill": 80,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_100",
        "name": "Lanzador de Abrojos de Templo",
        "desc": "Zapador de defensa que protege los templos sembrando abrojos metálicos en sus entradas.",
        "role": "designer",
        "skill": 78,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_101",
        "name": "Diseñador de la Defensa Estática",
        "desc": "Arquitecto que diseña barricadas móviles de madera y espinas para canalizar la caballería romana.",
        "role": "designer",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_102",
        "name": "Capitán del Tambor de Standing",
        "desc": "Músico de guerra que coordina el levantamiento y repliegue de los lanceros con ritmos de tambor.",
        "role": "developer",
        "skill": 75,
        "hireCost": 1150,
        "salary": 2300
    },
    {
        "id": "rec_103",
        "name": "Ejecutor de Deserción Inmediata",
        "desc": "Oficial de justicia que ejecuta sumariamente a los desertores en fuga para evitar el pánico colectivo.",
        "role": "developer",
        "skill": 84,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_104",
        "name": "Comandante del Vigor Magnánimo",
        "desc": "Líder que no castiga a las tropas asustadas por el ariete, sino que les muestra el camino a la victoria.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1750,
        "salary": 3500
    },
    {
        "id": "rec_105",
        "name": "Regulador de la Comida del Ejército",
        "desc": "Oficial de logística que prohíbe cortar las raciones de alimento como forma de castigo militar.",
        "role": "sales",
        "skill": 77,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_106",
        "name": "Custodio de los Confines del Sueño",
        "desc": "Inspector médico que vigila que las guardias de los soldados no excedan un solo ciclo de descanso.",
        "role": "sales",
        "skill": 76,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_107",
        "name": "Oficial de la Tensión del Escudo",
        "desc": "Comandante de infantería que calma el miedo de sus soldados ordenando asumir la posición de sentados.",
        "role": "developer",
        "skill": 81,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_108",
        "name": "Guerrero del Desapego de la Muerte",
        "desc": "Lancero entrenado en entender que el cuerpo físico es temporal, combatiendo sin pánico a la espada.",
        "role": "developer",
        "skill": 85,
        "hireCost": 1900,
        "salary": 3800
    },
    {
        "id": "rec_109",
        "name": "Sanador del Prana Capilar",
        "desc": "Masajista militar que estimula la columna vertebral de los guerreros para aliviar la fatiga muscular.",
        "role": "sales",
        "skill": 74,
        "hireCost": 1100,
        "salary": 2200
    },
    {
        "id": "rec_110",
        "name": "Alquimista de los Vientos de Baghdad",
        "desc": "Especialista en lanzar polvos irritantes al aire aprovechando la dirección de las corrientes de viento.",
        "role": "designer",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_111",
        "name": "Constructor de Trincheras de Arena",
        "desc": "Zapador civil que excava trincheras profundas en la arena fina para atrapar las caligae de los romanos.",
        "role": "designer",
        "skill": 79,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_112",
        "name": "Oficial del Silbato de Arcilla",
        "desc": "Vigía que utiliza silbatos de alta frecuencia para desorientar a los caballos de guerra enemigos.",
        "role": "manager",
        "skill": 78,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_113",
        "name": "Espía de la Cisterna Sagrada",
        "desc": "Guardia jurado que custodia los filtros de carbón vegetal y arena del pozo principal de la ciudad.",
        "role": "manager",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_114",
        "name": "Negociador del Trigo del Este",
        "desc": "Comerciante que escolta las caravanas de grano del este, asegurando el sustento del Langar.",
        "role": "sales",
        "skill": 81,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_115",
        "name": "Capitán del Tambor del Caballo",
        "desc": "Músico de guerra que dirige el galope de los caballos ligeros de Baghdad con toques de tambor de cuero.",
        "role": "designer",
        "skill": 76,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_116",
        "name": "Capitán del Tambor de la Infantería",
        "desc": "Percusionista que coordina el avance de la infantería a paso firme para mantener la formación cerrada.",
        "role": "developer",
        "skill": 75,
        "hireCost": 1180,
        "salary": 2360
    },
    {
        "id": "rec_117",
        "name": "Maestre del Tambor del Avance del Carro",
        "desc": "Percusionista que indica el momento preciso para acelerar las ruedas de los carros de asalto.",
        "role": "designer",
        "skill": 78,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_118",
        "name": "Maestre del Tambor de la Victoria",
        "desc": "Músico que entona las melodías de triunfo y rest del pueblo al culminar con éxito la campaña.",
        "role": "sales",
        "skill": 74,
        "hireCost": 1100,
        "salary": 2200
    },
    {
        "id": "rec_119",
        "name": "Oficial de la Sincronía del Latido",
        "desc": "Comandante que unifica la mente de sus hombres mediante cantos colectivos antes de la batalla.",
        "role": "developer",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_120",
        "name": "Guerrero del Amor y la Gratitud",
        "desc": "Soldado de vanguardia dispuesto a dar la vida por gratitud al Langar y a la protección de Baghdad.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_121",
        "name": "Guerrero de la Ira de la Trinidad",
        "desc": "Infantería pesada estimulada con ajo y jengibre, liberando una gran fuerza en la melé de vanguardia.",
        "role": "developer",
        "skill": 81,
        "hireCost": 1550,
        "salary": 3100
    },
    {
        "id": "rec_122",
        "name": "Guerrero del Deber Sagrado",
        "desc": "Soldado jurado que combate exclusivamente por justicia moral y desapego de los bienes terrenales.",
        "role": "developer",
        "skill": 85,
        "hireCost": 1950,
        "salary": 3900
    },
    {
        "id": "rec_123",
        "name": "Coordinador del Uniforme Ligero",
        "desc": "Intendente que suministra ropajes livianos de lino a las tropas para maximizar su agilidad táctica.",
        "role": "sales",
        "skill": 72,
        "hireCost": 1050,
        "salary": 2100
    },
    {
        "id": "rec_124",
        "name": "Oficial del Uniforme Stalwart",
        "desc": "Intendente que equipa a los defensores del muro con corazas reforzadas de cuero y bronce pulido.",
        "role": "sales",
        "skill": 75,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_125",
        "name": "Maestre de la Honda de Arcilla",
        "desc": "Tirador experto que utiliza proyectiles esféricos de arcilla secada al sol para hostigar sin sangre.",
        "role": "designer",
        "skill": 80,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_126",
        "name": "Vigía del Alerta de Espejos",
        "desc": "Operador de señales que reporta movimientos de caballería romana desde el alminar más alto.",
        "role": "manager",
        "skill": 81,
        "hireCost": 1450,
        "salary": 2900
    },
    {
        "id": "rec_127",
        "name": "Zapador de la Contramina Elevada",
        "desc": "Minero que excava galerías subterráneas para colapsar las minas de asedio del campamento romano.",
        "role": "designer",
        "skill": 84,
        "hireCost": 1850,
        "salary": 3700
    },
    {
        "id": "rec_128",
        "name": "Oficial de la Guerra Psicológica",
        "desc": "Orador que proyecta sombras gigantescas sobre las murallas para inducir paranoia en los vigías enemigos.",
        "role": "manager",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_129",
        "name": "Recolector de la Cosecha del Oasis",
        "desc": "Líder de brigada civil que recolecta dátiles y cebada al amanecer bajo el amparo de la neblina.",
        "role": "sales",
        "skill": 78,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_130",
        "name": "Estratega del Yunque y el Martillo",
        "desc": "General que coordina el envolvimiento de las legiones enemigas mediante cargas coordinadas de flanco.",
        "role": "developer",
        "skill": 86,
        "hireCost": 2100,
        "salary": 4200
    },
    {
        "id": "rec_131",
        "name": "Comandante del Cerco Abierto",
        "desc": "Estratega experto en rodear fuerzas enemigas a distancia, dejando siempre una salida falsa para emboscarlos.",
        "role": "developer",
        "skill": 84,
        "hireCost": 1850,
        "salary": 3700
    },
    {
        "id": "rec_132",
        "name": "Defensor de la Duna del Viento",
        "desc": "Soldado de vanguardia entrenado en combatir manteniendo el viento del desierto siempre a sus espaldas.",
        "role": "developer",
        "skill": 80,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_133",
        "name": "Oficial del Cañón del Desfiladero",
        "desc": "Lancero experto en defender pasos confinados manteniendo las alturas de piedra siempre a su derecha.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_134",
        "name": "Explorador de los Caminos de Lodo",
        "desc": "Rastreador que guía al convoy de grano esquivando las zonas pantanosas y los caminos rotos.",
        "role": "manager",
        "skill": 79,
        "hireCost": 1350,
        "salary": 2700
    },
    {
        "id": "rec_135",
        "name": "Constructor del Campamento Tortuga",
        "desc": "Carpintero militar que levanta empalizadas configuradas en forma de caparazón de tortuga para resistir onagros.",
        "role": "designer",
        "skill": 81,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_136",
        "name": "Observador del Alza de Masas",
        "desc": "Vigía que analiza los movimientos de la infantería romana, indicando el momento en que sus filas avanzan.",
        "role": "manager",
        "skill": 82,
        "hireCost": 1580,
        "salary": 3160
    },
    {
        "id": "rec_137",
        "name": "Cazador de la Incertidumbre Romana",
        "desc": "Comandante de caballería que asalta los puestos de avanzada cuando nota dudas o divisiones en sus filas.",
        "role": "developer",
        "skill": 83,
        "hireCost": 1750,
        "salary": 3500
    },
    {
        "id": "rec_138",
        "name": "Señuelo del Falso Repliegue",
        "desc": "Jinete ligero que finge huir abandonando su estandarte para tentar al enemigo a romper su formación.",
        "role": "manager",
        "skill": 84,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_139",
        "name": "Contraatacador de la Persecución",
        "desc": "Líder que gira sutilmente a sus tropas para golpear en los flancos al enemigo que los persigue fatigado.",
        "role": "developer",
        "skill": 85,
        "hireCost": 1900,
        "salary": 3800
    },
    {
        "id": "rec_140",
        "name": "Asaltante de la Muralla Ciega",
        "desc": "Zapador de asalto que ataca las secciones desprotegidas del campamento enemigo cuando están de espaldas.",
        "role": "designer",
        "skill": 86,
        "hireCost": 2000,
        "salary": 4000
    },
    {
        "id": "rec_141",
        "name": "Infiltrado de la Red Nocturna",
        "desc": "Agente que corta las comunicaciones entre las cohortes romanas y su servicio de correo imperial.",
        "role": "manager",
        "skill": 87,
        "hireCost": 2150,
        "salary": 4300
    },
    {
        "id": "rec_142",
        "name": "Oficial del Prohibido Escribir",
        "desc": "Censor militar que prohíbe la correspondencia familiar para concentrar la mente de las tropas en Baghdad.",
        "role": "sales",
        "skill": 73,
        "hireCost": 1100,
        "salary": 2200
    },
    {
        "id": "rec_143",
        "name": "Intendente de Raciones Mínimas",
        "desc": "Distribuidor de suministros que equipa a los asaltantes con raciones ultraligeras para marchas rápidas.",
        "role": "sales",
        "skill": 75,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_144",
        "name": "Despojador de Armaduras Pesadas",
        "desc": "Comando ligero que abandona su propia armadura pesada para maximizar su agilidad táctica en el desierto.",
        "role": "designer",
        "skill": 82,
        "hireCost": 1600,
        "salary": 3200
    },
    {
        "id": "rec_145",
        "name": "Instructor de la Vigilancia Cíclica",
        "desc": "Oficial que organiza los turnos de guardia fronteriza para que no excedan media jornada de luz.",
        "role": "developer",
        "skill": 78,
        "hireCost": 1350,
        "salary": 2700
    },
    {
        "id": "rec_146",
        "name": "Vigía de la Duna Silenciosa",
        "desc": "Observador que permanece inmóvil y cubierto en la arena para detectar exploradores enemigos.",
        "role": "manager",
        "skill": 79,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_147",
        "name": "Saboteador de las Ruedas de Bronce",
        "desc": "Infiltrado que quita los pasadores de los carros de asedio enemigos en la oscuridad de la noche.",
        "role": "designer",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_148",
        "name": "Lancero de la Calma en Muralla",
        "desc": "Defensor del muro que resiste el asalto de las escalas romanas manteniendo la pica firme en silencio.",
        "role": "developer",
        "skill": 81,
        "hireCost": 1450,
        "salary": 2900
    },
    {
        "id": "rec_149",
        "name": "Negociador del Trato de Dátiles",
        "desc": "Mercader que consigue suministros de dátiles y cebada de los oasis del sur a cambio de sal de Baghdad.",
        "role": "sales",
        "skill": 80,
        "hireCost": 1400,
        "salary": 2800
    },
    {
        "id": "rec_150",
        "name": "Portador de la Bandera de la Tierra",
        "desc": "Oficial que guía al convoy militar portando la bandera amarilla, símbolo del camino de la Tierra de Zhou.",
        "role": "developer",
        "skill": 78,
        "hireCost": 1300,
        "salary": 2600
    },
    {
        "id": "rec_151",
        "name": "Maestre de la Carga de Caballería",
        "desc": "Líder de jinetes que realiza cargas parabólicas rápidas sobre la infantería enemiga dispersa.",
        "role": "developer",
        "skill": 85,
        "hireCost": 1850,
        "salary": 3700
    },
    {
        "id": "rec_152",
        "name": "Sanador del Caldo Inmunológico",
        "desc": "Cocinero del campamento de sanación que prepara caldos de jengibre y ajo para restaurar la moral y el prana.",
        "role": "sales",
        "skill": 77,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_153",
        "name": "Operador de Códigos Lumínicos",
        "desc": "Encargado de los reflectores de bronce pulido, comunicando alertas fronterizas a los cañones del este.",
        "role": "manager",
        "skill": 82,
        "hireCost": 1500,
        "salary": 3000
    },
    {
        "id": "rec_154",
        "name": "Excavador de la Galería Doble",
        "desc": "Minero que refuerza las galerías de contramina subterránea con dobles muros de ladrillo refractario.",
        "role": "designer",
        "skill": 83,
        "hireCost": 1750,
        "salary": 3500
    },
    {
        "id": "rec_155",
        "name": "Oficial de la Perturbación de Sombras",
        "desc": "Operador de linternas en los muros que simula el movimiento de grandes divisiones militares en la noche.",
        "role": "manager",
        "skill": 81,
        "hireCost": 1480,
        "salary": 2960
    },
    {
        "id": "rec_156",
        "name": "Recolector del Amanecer Sagrado",
        "desc": "Brigadista que cosecha trigo y lentejas en las huertas urbanas antes del primer avistamiento del César.",
        "role": "sales",
        "skill": 76,
        "hireCost": 1200,
        "salary": 2400
    },
    {
        "id": "rec_157",
        "name": "Estratega del Paso Angosto",
        "desc": "Comandante que embosca y anula la fuerza numérica de una legión entera de 5,000 hombres en una quebrada.",
        "role": "developer",
        "skill": 87,
        "hireCost": 2200,
        "salary": 4400
    },
    {
        "id": "rec_158",
        "name": "Instructor de Formaciones en Cuclillas",
        "desc": "Oficial de adiestramiento que entrena a los lanceros jóvenes en la flexión y empuje síncrono.",
        "role": "developer",
        "skill": 78,
        "hireCost": 1250,
        "salary": 2500
    },
    {
        "id": "rec_159",
        "name": "Constructor del Foso de Ariete",
        "desc": "Ingeniero que profundiza los fosos defensivos perimetrales frente a las puertas principales de Baghdad.",
        "role": "designer",
        "skill": 84,
        "hireCost": 1800,
        "salary": 3600
    },
    {
        "id": "rec_160",
        "name": "Saboteador de Cuerdas de Onagro",
        "desc": "Infiltrado pirómano que corta e incendia los tensores de torsión de la artillería romana pesada.",
        "role": "designer",
        "skill": 85,
        "hireCost": 1950,
        "salary": 3900
    },
    {
        "id": "rec_161",
        "name": "Cazador de Jinetes Decumanos",
        "desc": "Arquero montado especializado en cazar a los mensajeros a caballo del correo militar romano.",
        "role": "manager",
        "skill": 83,
        "hireCost": 1700,
        "salary": 3400
    },
    {
        "id": "rec_162",
        "name": "Escolta del Trigo del Este",
        "desc": "Lancero perimetral que defiende a los camellos de carga de las caravanas de trigo de los ataques de bandidos.",
        "role": "sales",
        "skill": 80,
        "hireCost": 1450,
        "salary": 2900
    }
];