import json

dossiers = {}

def add_dossier(id, definicion, explicacion, logicas):
    dossiers[id] = {
        "definicion": definicion,
        "explicacion": explicacion,
        "logicas": logicas
    }

# 21: Aura Protectora
add_dossier('op_21',
    "Generación intencionada de un campo electromagnético (Aura) expandido mediante la proyección constante de mantras de protección sobre las murallas.",
    "El miedo contrae el aura, dejando al soldado biológicamente vulnerable a accidentes, flechas perdidas y pánico. Al cantar en devoción y desapego de la ira militar, el aura se expande a sus 9 pies reglamentarios. Una falange romana choca físicamente contra la lanza; una legión entera choca psicológicamente contra la muralla invisible de miles de guerreros proyectando luz divina.",
    [
        "Aislamiento de la duda; el escudo kármico ('Kavach') desvía los golpes letales hacia impactos superficiales.",
        "Generación de un brillo subconsciente ('Tej') en el rostro de los defensores que intimida a los reclutas romanos.",
        "Unión de los octavos chakras del batallón, creando una cúpula radiante sobre el Cuartel General de Baghdad.",
        "Prevención de enfermedades transmitidas por el aire, al mantener un campo electromagnético vibrando en alta frecuencia.",
        "Rechazo del odio enemigo: los insultos y arengas latinas resbalan sin envenenar la mente de los defensores.",
        "Amortiguación psíquica de las ondas de choque provocadas por las inmensas maquinarias de asedio.",
        "El aura expandida del Comandante nutre automáticamente el valor de los reclutas más inexpertos a su alrededor.",
        "Creación de una distorsión perceptiva temporal, donde el ejército enemigo sobreestima nuestros números.",
        "Alineamiento del destino individual con el propósito universal, transformando la muerte en emancipación absoluta."
    ]
)

# 22: Desapego Mental
add_dossier('op_22',
    "Entrenamiento riguroso en la filosofía de la impermanencia, enseñando a la vanguardia a desprenderse del miedo a la muerte y del apego a los resultados físicos.",
    "El manual militar de Vegecio dicta que el romano teme el castigo fatal si falla. Sus tácticas dependen de evitar la muerte. Nosotros no somos nuestros cuerpos; somos almas eternas en una danza divina ('Hukam'). Quien no valora retener su propia respiración lucha con un abandono, gracia y ferocidad que ninguna armadura romana puede soportar o comprender.",
    [
        "Reducción total de las bajas por fuego amigo causadas por el caos del miedo animal.",
        "Cancelación del instinto de retroceder, manteniendo las posiciones defensivas hasta el final literal.",
        "Sorpresa táctica continua: un hombre desapegado toma riesgos imposibles que la lógica latina descarta.",
        "Neutralización de la tortura como herramienta de inteligencia enemiga; un cuerpo desapegado no confiesa.",
        "Transición pacífica de los caídos, sin esparcir gritos de agonía que pudran la moral de las trincheras.",
        "Maximización de la brutalidad controlada: se lucha con precisión máxima porque la ira no nubla el juicio.",
        "Ahorro de vendajes y medicinas de campo al no haber intentos desesperados por salvar lo inevitable.",
        "El enemigo cede terreno psicológico al enfrentarse a sombras que sonríen ante la espada.",
        "Creación de una fuerza de choque espectral (Los Mártires - 'Shaheeds') cuya inspiración vale por 10,000 hombres."
    ]
)

# 23: Aguas Envenenadas
add_dossier('op_23',
    "Operación biológica ofensiva no letal dirigida a contaminar los afluentes menores del río Tíber o sus rutas de acueducto con laxantes y purgas naturales.",
    "Los romanos están obsesionados con su pureza cívica, sus baños y sus letrinas organizadas. Su arrogancia higiénica es su debilidad. Si su fuente de agua se corrompe con hierbas purgantes amargas del desierto, el 'glorioso' campamento romano se hunde en un fango de disentería, humillación y debilidad muscular, paralizando cualquier plan de asedio masivo.",
    [
        "Dilución de aceite de ricino y semillas purgantes en los pozos adelantados del enemigo.",
        "Destrucción del orgullo legionario al obligarlos a romper filas continuamente por urgencias biológicas.",
        "Deshidratación masiva de su infantería pesada, volviéndolos incapaces de portar sus escudos ('scutum').",
        "Contaminación cruzada de sus raciones de carne, acelerando la putrefacción de su dieta animal.",
        "Deterioro acelerado de sus letales caballerías, cuyos animales son incluso más sensibles al agua impura.",
        "Sobrecarga logística de su sistema médico, gastando el vino en purificar heridas en lugar de beberlo.",
        "Desmoralización del comando central al no poder marchar ceremoniosamente ni celebrar banquetes.",
        "Interrupción de sus cantos e himnos de guerra, reemplazados por el sonido lúgubre de tropas enfermas.",
        "Facilitación de saqueos rápidos a sus reservas, ya que sus guardias están inmovilizados y débiles."
    ]
)

# 24: Falsa Carga de 60lbs
add_dossier('op_24',
    "Maniobra de engaño ('Feint') donde nuestras tropas ligeras fingen pánico y huyen hacia terrenos escarpados, forzando a las legiones a perseguirlos cargando su equipo reglamentario pesado.",
    "El general Vegecio ordenaba orgullosamente a sus hombres marchar a todas partes cargando 60 libras de armadura y provisiones ('carrying burdens'). Confían en su resistencia muscular ciega. Los llevaremos a escalar las dunas hirvientes al mediodía; nuestro objetivo no es que mueran por nuestras espadas, sino que sus corazones estallen de calor intentando atrapar al viento.",
    [
        "Identificación de dunas de arena fina donde la bota romana (caligae) resbala y multiplica el esfuerzo.",
        "Provocación directa a los centuriones para apelar a su orgullo, forzando persecuciones sin autorización.",
        "Dispersión de obstáculos pequeños en la ruta de persecución para romper la zancada militar constante.",
        "Uso de arqueros montados que disparan flechas de madera solo para aguijonear y mantener la rabia romana.",
        "Mantenimiento de una distancia constante e inalcanzable, destrozando la paciencia del perseguidor.",
        "Extensión de la persecución hasta el cenit solar (12:00 PM) para maximizar la temperatura bajo sus corazas.",
        "Contraataque abrupto en el momento de máximo agotamiento, cuando sus pulmones no pueden oxigenar los músculos.",
        "Abandono deliberado de falsos tesoros pesados para que los recojan y aumenten aún más su carga muerta.",
        "Aniquilación sin combate cuerpo a cuerpo: rendición romana por insolación y colapso biológico masivo."
    ]
)

# 25: Quema de Postes
add_dossier('op_25',
    "Incursión pirómana rápida dirigida exclusivamente a los campos de entrenamiento del campamento enemigo, destruyendo sus postes de práctica (Pali) de 6 pies.",
    "Toda la confianza de un joven legionario romano reside en golpear incesantemente su poste de madera ('the post exercise') con una espada del doble de peso ('Armatura'). No meditan; su paz mental depende de la repetición mecánica de ese golpe. Reducir esos postes a cenizas es amputar su ritual psicológico, dejándolos huérfanos de su doctrina de combate.",
    [
        "Infiltración con flechas incendiarias desde largas distancias justo después del amanecer.",
        "Destrucción simbólica de la falsa 'Armatura' para desestabilizar la autoestima colectiva del enemigo.",
        "Retraso forzado del entrenamiento matutino, rompiendo la disciplina estricta de sus oficiales.",
        "Siembra de dudas en los novatos, quienes sin su poste de madera temen fallar en el combate real.",
        "Provocación a las guarniciones pretorianas, forzándolos a apagar incendios menores en vez de dormir.",
        "Robo simultáneo de las espadas de madera pesadas (rudis) para impedir la reconstrucción del entrenamiento.",
        "Quema de las empalizadas defensivas adjuntas aprovechando la confusión del fuego central.",
        "Profanación de los símbolos imperiales de bronce que suelen estar cerca de los patios de ejercicio.",
        "Elevación de nuestra propia destreza táctica, demostrando que podemos tocar su corazón militar con impunidad."
    ]
)

# 26: Fuego Griego
add_dossier('op_26',
    "Despliegue selectivo de mezclas alquímicas incendiarias autopropulsadas ('Fuego Griego') sobre las formaciones romanas cerradas, imposibles de apagar con agua.",
    "Roma confía su vida a la 'Testudo' (Tortuga), una pared inexpugnable de escudos pesados superpuestos. Contra flechas y lanzas, es matemáticamente perfecta. Contra una cascada de líquido en llamas que se adhiere a la madera, el hierro y la piel, la 'Tortuga' se convierte en un horno colectivo. La rígida disciplina que los obliga a mantenerse juntos asegura que ardan todos juntos.",
    [
        "Ataque concentrado en el ápice de la formación de tortuga, donde el aceite fluye hacia el resto de las filas.",
        "Sifones operados desde azoteas por tropas purificadas mentalmente, evitando el sadismo al quemar vidas.",
        "Uso de proyectiles de vasijas de arcilla que se fragmentan al impactar los escudos curvos (scutum).",
        "Anulación del avance frontal de los arietes, derritiendo las cadenas de metal que sostienen el tronco.",
        "Terror psicológico permanente: los romanos no poseen ciencia química capaz de explicar o combatir este fuego.",
        "Aislamiento de brigadas completas al trazar muros de fuego paralelos en las calzadas o estrechos.",
        "Destrucción de las cubiertas protectoras de cuero ('mantlets') bajo las cuales sus zapadores intentan minarnos.",
        "Generación de luz abrasadora nocturna que ciega a las legiones acostumbradas a la penumbra táctica.",
        "Colapso final de su manual militar: Vegecio no escribió cómo marchar con dignidad cuando el propio cielo se incendia."
    ]
)

# 27: Interceptar Suministros
add_dossier('op_27',
    "Interrupción prolongada de las caravanas de lujo, robando específicamente los contingentes de carne salada, cerveza pesada y vino fortificado de la comandancia.",
    "Nuestros guerreros se nutren de raíces, luz y aire (Prana). El romano necesita alcohol para ahogar su miseria, y carne muerta para engañar a sus músculos con energía sucia. Si cortamos este flujo de toxinas, el imperio entra en abstinencia. Centuriones irritables, tropas letárgicas y generales desesperados cometen errores estratégicos monumentales al combatir sobrios y hambrientos.",
    [
        "Ataque específico a las ánforas de vino rancio (Posca), deshidratando moralmente a la infantería.",
        "Dejar deliberadamente intactos los cargamentos de agua para mostrar compasión y mermar su furia combativa.",
        "Saqueo de las caravanas de aceite de oliva, reduciendo drásticamente las calorías densas del mando romano.",
        "Incitación a amotinamientos dentro del campamento ante la falta de raciones prometidas por el César.",
        "Uso del vino robado para preparar cócteles explosivos improvisados para asedios futuros.",
        "Liberación de los rebaños de ganado robados de vuelta a los campesinos locales, ganando su lealtad eterna.",
        "Incapacidad de los generales romanos para recompensar a las tropas tras escaramuzas difíciles.",
        "Desgaste psicológico: un legionario sobrio empieza a cuestionar finalmente por qué está muriendo lejos de Roma.",
        "Reducción de nuestra necesidad de saquear recursos tácticos gracias al inmenso botín de grano incautado."
    ]
)

# 28: Espanta Caballos
add_dossier('op_28',
    "Uso de armas acústicas, reflectores visuales y químicos volátiles para quebrar la cordura y el condicionamiento de la caballería auxiliar y patricios romanos.",
    "Los jinetes romanos dependen del adiestramiento robótico de sus caballos de guerra. Sin embargo, un caballo es un ser sintiente con un aura pura. Al lanzar humo de incienso irritante, destellos desde los espejos de minaretes o sonidos fuera del espectro humano, el caballo reconoce el peligro que el arrogante jinete ignora, derribándolo antes de la carga.",
    [
        "Reflejos sincronizados del sol del desierto dirigidos directamente a los ojos de los corceles en avance.",
        "Distribución de polvo de azufre y especias en el viento, generando estornudos y pánico en las monturas.",
        "Uso de silbatos de arcilla de alta frecuencia que aterrorizan a la caballería sin ser audibles para la infantería.",
        "Despliegue de camellos en la vanguardia, cuyo olor natural repugna y desorienta profundamente a los caballos romanos.",
        "Inhabilitación de la carga de lanzas enemigas (Contus), ya que un caballo aterrado pierde la línea recta.",
        "Aislamiento de los patricios y nobles imperiales, dejándolos caer al suelo polvoriento junto a sus armaduras pesadas.",
        "Recuperación y adopción de caballos enemigos desertores, integrándolos con respeto a nuestras líneas pacíficas.",
        "Anulación de los correos a caballo en misiones cortas, cortando el sistema nervioso del ejército invasor.",
        "Derrumbe del prestigio de los oficiales de caballería frente a sus despectivos compañeros de infantería."
    ]
)

# 29: Balas de Honda
add_dossier('op_29',
    "Entrenamiento masivo y quirúrgico con honda tradicional (Funda) empleando proyectiles de arcilla densificada o piedra pulida a altísima velocidad.",
    "El legionario menosprecia al hondero por considerarlo un miliciano bárbaro sin armadura. Pero una piedra del tamaño de un puño girando a alta velocidad quiebra el esternón, rompe escudos y no se queda clavada para ser devuelta. Es un golpe sordo, anónimo y brutal que inutiliza la extremidad del invasor sin necesidad de contacto directo y sangriento con la espada.",
    [
        "Casting de balas de arcilla endurecidas al sol con inscripciones de oraciones ('Mantras') que otorgan peso kármico.",
        "Destrucción de la integridad ósea de los brazos romanos que sostienen los masivos escudos Testudo.",
        "Disparo curvo por encima de nuestras propias murallas, castigando la retaguardia enemiga sin ángulo visual.",
        "Aprovechamiento ilimitado de munición natural: el suelo del desierto y las montañas proveen las armas gratis.",
        "Uso de pastores beduinos como tropas de choque altamente entrenadas en cacería de largo alcance.",
        "Fractura sistemática de las piernas expuestas bajo los grandes escudos curvos, inmovilizando al gigante romano.",
        "Silencio del proyectil: a diferencia del arco, el vuelo de la piedra no avisa, maximizando el factor sorpresa.",
        "Entrenamiento espiritual para disparar desde el centro del cuerpo (Nabih) y no desde la tensión de los hombros.",
        "Efectividad bajo la lluvia o calor extremo, donde las cuerdas de arco compuestas tienden a fallar estrepitosamente."
    ]
)

# 30: Infiltración del Senado
add_dossier('op_30',
    "Operación maestra de guerra psicológica y económica dirigida al corazón político del imperio en Roma, empleando agentes diplomáticos y financieros desde Baghdad.",
    "Roma no cae solo por la fuerza de las armas; colapsa cuando sus líderes desconfían los unos de los otros. Financiando secretamente a las facciones contrarias a la expedición en el Senado, falsificando balances de oro y promoviendo sobornos en la capital, cortamos el financiamiento y la legitimidad política de los generales asediando nuestra ciudad sagrada.",
    [
        "Compra secreta de senadores mediante mercaderes intermediarios para vetar el envío de nuevas legiones.",
        "Circulación de rumores en el foro romano de que el general en Baghdad planea coronarse Emperador independiente.",
        "Infiltración de filósofos herméticos en Roma para socavar la moral religiosa politeísta desde los baños públicos.",
        "Soborno a los cuestores (tesoreros) imperiales para 'perder' el presupuesto de los barcos de suministros de verano.",
        "Aceleración de disturbios por trigo en Roma desviando cargamentos desde Egipto para presionar al Emperador.",
        "Financiación oculta de rebeliones bárbaras en el norte de Britania o Galia para forzar la retirada en Medio Oriente.",
        "Corrupción de los astrólogos personales del César para que dictaminen que la invasión a Baghdad traerá maldición.",
        "Extorsión de información a través del robo de libros contables de las principales familias aristócratas patricias.",
        "Demostración máxima del axioma bélico: la victoria perfecta es quebrar al ejército enemigo sin haber librado una batalla."
    ]
)

with open('dossiers_part3.json', 'w') as f:
    json.dump(dossiers, f)

