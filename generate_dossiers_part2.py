import json

dossiers = {}

def add_dossier(id, definicion, explicacion, logicas):
    dossiers[id] = {
        "definicion": definicion,
        "explicacion": explicacion,
        "logicas": logicas
    }

# 11: Guardia Nocturna
add_dossier('op_11',
    "Despliegue de patrullas estáticas y móviles de alta disciplina alrededor de los epicentros de conocimiento (Casa de la Sabiduría) y reservas de grano.",
    "El enemigo sabe que destruir la biblioteca es destruir el alma de la ciudad, más que derribar un muro. La guardia nocturna no solo vigila, sino que emite una presencia de constante vigilia. Un centinela que respira rítmicamente en la oscuridad asusta más al infiltrado romano que un escuadrón ruidoso con antorchas.",
    [
        "Turnos basados en los ciclos pránicos de 2.5 horas, garantizando agudeza mental total.",
        "Uso de perros del desierto sin ladridos, entrenados para señalar presencias por vibración.",
        "Ubicación de arqueros en sombras profundas, evitando que la luz de la luna revele los filos.",
        "Prohibición estricta de carbohidratos simples en la cena de la guardia para prevenir somnolencia.",
        "Rotación aleatoria de contraseñas basadas en poesía persa y pasajes del SGGS Ji.",
        "Trampas de hilo invisibles en los perímetros, conectadas a pequeñas campanas de advertencia.",
        "Vigilancia invertida: observar las zonas iluminadas desde la oscuridad, y no al revés.",
        "Protocolo de silencio absoluto: comunicación basada exclusivamente en señales con las manos.",
        "Protección prioritaria de los pozos internos para evitar envenenamientos de infiltrados nocturnos."
    ]
)

# 12: Soborno de Guardias
add_dossier('op_12',
    "Manipulación de la codicia material de las tropas auxiliares y mercenarios romanos mediante pagos sistemáticos de oro y recursos alimenticios.",
    "El imperio romano integra tribus conquistadas en su vanguardia, tratándolos con desdén y pagándoles tarde. Su lealtad no es hacia el águila, sino hacia su estómago. Si ofrecemos más abundancia y mejor trato moral que sus amos latinos, sus guardias girarán la cabeza o abrirán las puertas para nosotros.",
    [
        "Identificación de cohortes auxiliares impagadas mediante espionaje de sus quejas nocturnas.",
        "Entrega de alimentos exóticos y especias que el cuartel maestre romano les niega.",
        "Corrupción de los vigilantes de las prisiones enemigas para liberar a nuestros cautivos.",
        "Pago directo en oro puro para que 'no vean' el paso de nuestras caravanas encubiertas.",
        "Fomento del resentimiento: pagar a un guardia el doble que a su oficial para sembrar rencor.",
        "Promesa de amnistía total y asilo en Baghdad a los desertores que colaboren pacíficamente.",
        "Soborno a los herreros enemigos para que entreguen flechas sin puntas afiladas.",
        "Compra de los planes de rotación de guardia, garantizando el éxito de infiltraciones futuras.",
        "Incitación a que los sobornados gasten el oro en el campamento, desatando envidia general."
    ]
)

# 13: Caravana Fantasma
add_dossier('op_13',
    "Organización de rutas de suministro logístico que se desplazan camufladas bajo tormentas de arena, oscuridad total o falsas banderas comerciales.",
    "Un asedio sobrevive gracias a la comida que entra, no a las rocas que se tiran. Los generales romanos bloquean las calzadas principales asumiendo que un ejército necesita vías anchas. Nuestras caravanas operan como fantasmas, cruzando cañones escarpados con camellos mudos y hombres que no dejan huellas.",
    [
        "Envolvimiento de las pezuñas de los camellos con cuero grueso para silenciar sus pasos.",
        "Movimiento exclusivo durante las noches sin luna, guiándose por constelaciones estelares.",
        "Uso de incienso pesado para camuflar el olor a especias y comida frente a las patrullas caninas.",
        "Desdoblamiento táctico: enviar tres caravanas ruidosas falsas para ocultar a la verdadera.",
        "Contrabando de acero de Damasco escondido bajo pieles de animales enfermos que el enemigo evita.",
        "Aprovechamiento de las tormentas de arena crudas que obligan al romano a cegarse y encerrarse.",
        "Ocultamiento del grano en tinajas de aceite falsamente etiquetadas para burlar las aduanas imperiales.",
        "Enterramiento sistemático de suministros en el desierto para recolección posterior por la infantería.",
        "Desplazamiento sin escolta pesada; la velocidad y la invisibilidad son su única y mejor coraza."
    ]
)

# 14: Amrit Vela
add_dossier('op_14',
    "Invocación de la disciplina del Amrit Vela (oración de madrugada, entre las 3:00 y las 6:00 AM) para purificar la mente y elevar la vibración espiritual de las tropas antes del alba.",
    "El momento más frío y silencioso de la noche es cuando el ego del hombre está más débil y su alma más receptiva. Mientras el romano duerme embotado por el vino, nuestros guerreros se bañan en agua helada y cantan el Naam. Entran al amanecer limpios de pánico, con una resolución cristalina que aterroriza a un enemigo confundido por el alba.",
    [
        "Baño de agua fría (Ishnaan) que estimula el flujo capilar, garantizando alerta inmediata.",
        "Recitación colectiva del Japji Sahib, sincronizando la frecuencia neuronal del ejército completo.",
        "Eliminación de toxinas psíquicas, borrando los traumas de la batalla del día anterior.",
        "Carga energética del cuerpo pránico, permitiendo resistir el dolor físico que ocurrirá al mediodía.",
        "Forja de una determinación suicida, entendiendo que el cuerpo físico es temporal pero el alma eterna.",
        "Supresión biológica de la ansiedad, reduciendo el desgaste calórico por nerviosismo prematuro.",
        "Alineación de la voluntad del guerrero individual con el mando unificado y la voluntad divina.",
        "Preparación mental para el silencio en emboscadas al amanecer, controlando los latidos del corazón.",
        "Impacto psicológico: marchar al frente con un aura magnética de paz incomprensible para el latino."
    ]
)

# 15: Expansión del Langar
add_dossier('op_15',
    "Estructuración de cocinas comunitarias sagradas (Langar) para alimentar de manera igualitaria y devocional a miles de soldados y refugiados.",
    "La jerarquía romana alimenta a sus generales con pan de trigo y a sus tropas castigadas con cebada sucia, sembrando división. En Baghdad, comandantes y sirvientes se sientan juntos en el suelo a comer la misma comida santificada. Esto no es nutrición, es alquimia social que vuelve indestructible la hermandad de nuestro ejército.",
    [
        "Cancelación total de los motines: nadie pasa hambre mientras su hermano coma.",
        "Alimento consagrado (Prashad) que confiere una protección psicológica parecida al fervor místico.",
        "Recolección eficiente de ingredientes que evita la pudrición de las raciones individuales almacenadas.",
        "Destrucción del ego del general al obligarlo a barrer y servir la comida a sus infantes.",
        "Integración de refugiados forasteros al esfuerzo de guerra a través de la gratitud estomacal.",
        "Prevención de epidemias gástricas al centralizar la purificación por fuego y ebullición del agua.",
        "Absorción de desertores enemigos invitándolos a comer sin juzgarlos, rompiendo su lealtad a Roma.",
        "Mantenimiento del fuego de la cocina como símbolo de que el corazón de la ciudad sigue latiendo.",
        "Canto ininterrumpido durante la cocción, modificando la estructura vibracional del agua en los alimentos."
    ]
)

# 16: Canto de Simran
add_dossier('op_16',
    "Implementación del Simran (repetición meditativa) como ancla psicológica y rítmica colectiva frente a la tortura acústica de las máquinas de asedio enemigas.",
    "Las catapultas romanas no solo lanzan piedras, sino terror sordo. El estruendo en la madera busca quebrar la mente. La meditación profunda (Simran) contrarresta este colapso aislando al cerebro de las respuestas de lucha o huida innecesarias, economizando la energía nerviosa hasta el momento exacto del choque físico.",
    [
        "Aislamiento de la respuesta del cortisol frente al ruido ensordecedor de los arietes enemigos.",
        "Ahorro drástico de raciones, ya que un cuerpo sereno quema muchas menos calorías bajo estrés.",
        "Prevención del 'Shock de Batalla' (TEPT temprano) manteniendo el sistema parasimpático activado.",
        "Sincronía colectiva: cuando mil hombres repiten el mismo mantra, el pánico individual desaparece.",
        "Transformación del miedo a la muerte en un éxtasis espiritual de aceptación del destino heroico.",
        "Mantenimiento del pulso estable en arqueros bajo lluvia de proyectiles incendiarios enemigos.",
        "Facilitación del descanso reparador en lapsos muy cortos (15 minutos) durante combates continuos.",
        "Elevación de la tolerancia al dolor de los heridos, reduciendo los gritos que desmoralizan la retaguardia.",
        "Generación de un ambiente vibracional en las trincheras que desconcierta y ahuyenta a los atacantes."
    ]
)

# 17: Dieta Sáttvica
add_dossier('op_17',
    "Eliminación total de carnes y alimentos rajasicos/tamasicos de las raciones militares, sustituyéndolos por alimentos sáttvicos (frijol mung, vegetales, almendras, ghee).",
    "Los romanos comen cerdos y aves en grandes banquetes, llenando sus hígados de toxinas y sus corazones de la rabia del animal muerto. Sus soldados son lentos, viscerales y huelen a putrefacción bajo el armazón. Nuestra dieta basada en prana puro forja músculos magros, mentes veloces como la luz y una agilidad física que convierte sus cargas lentas en golpes al vacío.",
    [
        "Eliminación del olor corporal penetrante, permitiendo infiltraciones sin ser olfateados en la noche.",
        "Absorción total del prana de verduras frescas, dotando a la sangre de niveles altísimos de oxígeno.",
        "Reducción del tiempo de sueño requerido, ya que el cuerpo no gasta energía digiriendo carne muerta.",
        "Inmunidad a brotes de disentería derivados de carnes en descomposición bajo el calor del desierto.",
        "Agilidad articular inigualable, evitando la inflamación inducida por la dieta del manual de Vegecio.",
        "Claridad mental para resolver problemas tácticos complejos y no reaccionar puramente desde la ira.",
        "Fomento de la piedad interior, lo que evita que nuestros guerreros cometan atrocidades deshonrosas.",
        "Uso del ghee (mantequilla clarificada) para lubricar los canales nerviosos y sanar los cerebros agotados.",
        "Aceleración de los reflejos visuales en combate a espada gracias a la pureza del tracto digestivo."
    ]
)

# 18: Trinidad de Raíces
add_dossier('op_18',
    "Protocolo preventivo crudo basado en Ajo, Cebolla y Jengibre ('Trinidad de Raíces') consumido religiosamente por la vanguardia y la guardia pretoriana defensiva.",
    "Bajo fuego continuo, la moral se oxida igual que el acero. Esta combinación alquímica recomendada por las escrituras sana el cerebro, calienta el torrente sanguíneo e inyecta un vigor animal purificado. Mientras el enemigo sucumbe al frío, la fatiga y el agotamiento mental, la Trinidad forja troncos de hierro vivos.",
    [
        "El ajo esteriliza internamente, operando como un escudo inmunológico contra infecciones por heridas sucias.",
        "La cebolla despierta y oxigena las células, aumentando el recuento de sangre vital para la cicatrización.",
        "El jengibre estimula brutalmente la columna vertebral, manteniendo alerta al centinela bajo fatiga extrema.",
        "Neuro-modulación: estabiliza el cerebro impidiendo el colapso depresivo de una derrota parcial.",
        "Calefacción biológica: permite sobrevivir guardias bajo cero en las dunas sin necesidad de mantas pesadas.",
        "Purificación sexual (Brahmacharya): canaliza la energía básica hacia la resistencia muscular y la devoción.",
        "Sinergia digestiva: maximiza la absorción de nutrientes escasos cuando las rutas de comercio son cortadas.",
        "Repelencia física: el sudor cargado de la trinidad actúa como antiséptico y desinfectante en contacto con el aire.",
        "Genera una agudeza visual penetrante al limpiar la mucosidad de los canales craneales (senos paranasales)."
    ]
)

# 19: Mantras de Cocina
add_dossier('op_19',
    "Institucionalización del canto devocional e ininterrumpido en las áreas logísticas y cocinas durante todo el proceso de lavado, picado y cocción de las raciones.",
    "La energía del cocinero se transfiere a la comida; una comida hecha con miedo o amargura envenena al soldado. Emulando a la joven devota que batía leche cantando a Shiva para espantar a la muerte, nuestras mujeres y hombres cargan la estructura molecular del alimento con sanación. El soldado que ingiere esto está comiendo literalmente un escudo espiritual.",
    [
        "Protección vibracional ('Kavach'): el alimento genera un campo de fuerza sutil que desvía fatalidades.",
        "Elevación moral masiva: el soldado recuerda la devoción de su pueblo en cada bocado que lo nutre.",
        "Mantenimiento de la cordura en los no-combatientes, dándoles un rol activo y letal en la guerra energética.",
        "Prevención del envenenamiento; un ambiente altamente consciente detecta cualquier anomalía en los insumos.",
        "Afinación de la intención del agua, transformando caldos simples en elixires biológicos comprobados.",
        "Reducción de rencillas e impaciencia en las filas de distribución, al imperar la atmósfera sagrada.",
        "Creación de una pared de sonido constante y pacífica que anula la acústica del asedio exterior.",
        "Sincronización de los ciclos respiratorios del campamento, forjando un solo cuerpo, una sola alma defensiva.",
        "Conexión con el Creador, garantizando que cada victoria sea dedicada al Gurú y no a la vanidad de los generales."
    ]
)

# 20: Ayuno de Silencio
add_dossier('op_20',
    "Interrupción voluntaria y temporal de la ingesta de alimentos sólidos combinada con voto de silencio (Maun) durante períodos tácticos de infiltración o acecho.",
    "Un sistema digestivo funcionando es ruidoso, pesado y consume una inmensa cantidad de energía sanguínea. Al vaciar el estómago y detener la lengua hablante, el guerrero elimina la necesidad de evacuar, enfoca la sangre en su cerebro y extremidades, y se funde completamente con el silencio del universo. Es la táctica definitiva del depredador invisible.",
    [
        "Eliminación total del ruido estomacal e intestinal, vital al esconderse bajo los suelos enemigos.",
        "Anulación de los olores del aliento que podrían alertar a los perros de presa romanos a la distancia.",
        "Ahorro de recursos logísticos en misiones profundas; el guerrero viaja vacío y por tanto, viaja rápido.",
        "Agudización extrema del oído al callar la mente oral; se escuchan pasos en la arena a cientos de metros.",
        "Dominio absoluto de la voluntad: un hombre que vence a su propia hambre no puede ser doblegado por tortura.",
        "Redirección de la energía digestiva hacia la regeneración de tejidos dañados por raspaduras o caídas.",
        "Incremento de la visión periférica debido al estado de alerta que induce el ayuno prolongado controlado.",
        "Mimetización psíquica: al no emitir ondas de deseo o ansiedad, el guerrero pasa desapercibido por los vigías.",
        "Reconexión con el 'Sunn' (el vacío divino), donde las respuestas tácticas surgen como intuición pura y perfecta."
    ]
)

with open('dossiers_part2.json', 'w') as f:
    json.dump(dossiers, f)
