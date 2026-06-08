const allDiets = [
    {
        "id": "diet_0",
        "name": "Yantra Giro-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +5 / Velocidad Meditación +10%"
    },
    {
        "id": "diet_1",
        "name": "Yantra Giro-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 7,
            "moral": 5,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +5 / Granos Diarios -10"
    },
    {
        "id": "diet_2",
        "name": "Yantra Giro-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 6,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +4 / Moral +6 / Granos Diarios -10 / Habilidad Militar +5%"
    },
    {
        "id": "diet_3",
        "name": "Yantra Giro-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3950,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.15,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +15% / Granos Diarios -15"
    },
    {
        "id": "diet_4",
        "name": "Yantra Giro-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +4 / Granos Diarios -20"
    },
    {
        "id": "diet_5",
        "name": "Yantra Giro-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +5 / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_6",
        "name": "Yantra Giro-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 8,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +8 / Moral +4 / Granos Diarios -10"
    },
    {
        "id": "diet_7",
        "name": "Yantra Giro-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3500,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +4 / Granos Diarios -25"
    },
    {
        "id": "diet_8",
        "name": "Yantra Giro-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 6,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +6 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_9",
        "name": "Yantra Giro-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -15"
    },
    {
        "id": "diet_10",
        "name": "Yantra Giro-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3500,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Granos Diarios -25"
    },
    {
        "id": "diet_11",
        "name": "Yantra Giro-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3600,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +4 / Granos Diarios -25 / Habilidad Militar +5%"
    },
    {
        "id": "diet_12",
        "name": "Yantra Giro-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3350,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -30"
    },
    {
        "id": "diet_13",
        "name": "Yantra Giro-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3200,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Granos Diarios -35"
    },
    {
        "id": "diet_14",
        "name": "Yantra Giro-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +3 / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_15",
        "name": "Yantra Giro-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +2 / Granos Diarios -25"
    },
    {
        "id": "diet_16",
        "name": "Yantra Giro-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 2900,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -40,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +2 / Granos Diarios -40"
    },
    {
        "id": "diet_17",
        "name": "Yantra Giro-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3100,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -25"
    },
    {
        "id": "diet_18",
        "name": "Yantra Giro-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4450,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +25%"
    },
    {
        "id": "diet_19",
        "name": "Yantra Giro-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4250,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +15% / Granos Diarios -10"
    },
    {
        "id": "diet_20",
        "name": "Yantra Giro-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4350,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +15% / Granos Diarios -10 / Habilidad Militar +5%"
    },
    {
        "id": "diet_21",
        "name": "Yantra Giro-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +30% / Granos Diarios -15"
    },
    {
        "id": "diet_22",
        "name": "Yantra Giro-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3950,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +15% / Granos Diarios -20"
    },
    {
        "id": "diet_23",
        "name": "Yantra Giro-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4150,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +15% / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_24",
        "name": "Yantra Giro-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4550,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +3 / Velocidad Meditación +15% / Granos Diarios -10"
    },
    {
        "id": "diet_25",
        "name": "Yantra Giro-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3650,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +15% / Granos Diarios -25"
    },
    {
        "id": "diet_26",
        "name": "Yantra Giro-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3850,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +25% / Granos Diarios -10"
    },
    {
        "id": "diet_27",
        "name": "Yantra Giro-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 6,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +6 / Velocidad Meditación +10%"
    },
    {
        "id": "diet_28",
        "name": "Yantra Giro-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 6,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +6 / Granos Diarios -10"
    },
    {
        "id": "diet_29",
        "name": "Yantra Giro-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 7,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +3 / Moral +7 / Granos Diarios -10 / Habilidad Militar +5%"
    },
    {
        "id": "diet_30",
        "name": "Yantra Giro-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3650,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.15,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +5 / Velocidad Meditación +15% / Granos Diarios -15"
    },
    {
        "id": "diet_31",
        "name": "Yantra Giro-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3500,
        "effects": {
            "defense": 5,
            "moral": 5,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +5 / Granos Diarios -20"
    },
    {
        "id": "diet_32",
        "name": "Yantra Giro-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 3,
            "moral": 6,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +6 / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_33",
        "name": "Yantra Giro-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 7,
            "moral": 5,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +5 / Granos Diarios -10"
    },
    {
        "id": "diet_34",
        "name": "Yantra Giro-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3200,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +5 / Granos Diarios -25"
    },
    {
        "id": "diet_35",
        "name": "Yantra Giro-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 3,
            "moral": 7,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +7 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_36",
        "name": "Yantra Giro-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 5000,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_37",
        "name": "Yantra Giro-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4800,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_38",
        "name": "Yantra Giro-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4900,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +9%"
    },
    {
        "id": "diet_39",
        "name": "Yantra Giro-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4650,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_40",
        "name": "Yantra Giro-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_41",
        "name": "Yantra Giro-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_42",
        "name": "Yantra Giro-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 5100,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_43",
        "name": "Yantra Giro-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -30 / Habilidad Militar +4%"
    },
    {
        "id": "diet_44",
        "name": "Yantra Giro-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_45",
        "name": "Yantra Giro-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 7,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +3 / Velocidad Meditación +10%"
    },
    {
        "id": "diet_46",
        "name": "Yantra Giro-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 8,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +8 / Moral +3 / Granos Diarios -10"
    },
    {
        "id": "diet_47",
        "name": "Yantra Giro-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +5 / Moral +4 / Granos Diarios -10 / Habilidad Militar +5%"
    },
    {
        "id": "diet_48",
        "name": "Yantra Giro-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4250,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -15"
    },
    {
        "id": "diet_49",
        "name": "Yantra Giro-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +2 / Granos Diarios -20"
    },
    {
        "id": "diet_50",
        "name": "Yantra Giro-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +3 / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_51",
        "name": "Yantra Giro-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 9,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +9 / Moral +2 / Granos Diarios -10"
    },
    {
        "id": "diet_52",
        "name": "Yantra Giro-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +2 / Granos Diarios -25"
    },
    {
        "id": "diet_53",
        "name": "Yantra Giro-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_54",
        "name": "Yantra Giro-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_55",
        "name": "Yantra Giro-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +3 / Granos Diarios -20"
    },
    {
        "id": "diet_56",
        "name": "Yantra Giro-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +3 / Moral +4 / Granos Diarios -20 / Habilidad Militar +5%"
    },
    {
        "id": "diet_57",
        "name": "Yantra Giro-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3650,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -25"
    },
    {
        "id": "diet_58",
        "name": "Yantra Giro-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3500,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Granos Diarios -30"
    },
    {
        "id": "diet_59",
        "name": "Yantra Giro-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +3 / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_60",
        "name": "Yantra Giro-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +2 / Granos Diarios -20"
    },
    {
        "id": "diet_61",
        "name": "Yantra Giro-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3200,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Granos Diarios -35"
    },
    {
        "id": "diet_62",
        "name": "Yantra Giro-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -20"
    },
    {
        "id": "diet_63",
        "name": "Yantra Giro-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +5 / Velocidad Meditación +20%"
    },
    {
        "id": "diet_64",
        "name": "Yantra Giro-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_65",
        "name": "Yantra Giro-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 6,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +6 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +5%"
    },
    {
        "id": "diet_66",
        "name": "Yantra Giro-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3850,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +25% / Granos Diarios -15"
    },
    {
        "id": "diet_67",
        "name": "Yantra Giro-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -20"
    },
    {
        "id": "diet_68",
        "name": "Yantra Giro-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_69",
        "name": "Yantra Giro-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_70",
        "name": "Yantra Giro-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -25"
    },
    {
        "id": "diet_71",
        "name": "Yantra Giro-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 3600,
        "effects": {
            "defense": 2,
            "moral": 6,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +6 / Velocidad Meditación +20% / Granos Diarios -10"
    },
    {
        "id": "diet_72",
        "name": "Yantra Giro-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +10% / Habilidad Militar +6%"
    },
    {
        "id": "diet_73",
        "name": "Yantra Giro-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +3 / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_74",
        "name": "Yantra Giro-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4800,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +2 / Moral +4 / Granos Diarios -10 / Habilidad Militar +11%"
    },
    {
        "id": "diet_75",
        "name": "Yantra Giro-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4550,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_76",
        "name": "Yantra Giro-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +2 / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_77",
        "name": "Yantra Giro-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +2 / Moral +3 / Granos Diarios -10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_78",
        "name": "Yantra Giro-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 5000,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +6 / Moral +2 / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_79",
        "name": "Yantra Giro-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +2 / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_80",
        "name": "Yantra Giro-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de frijol mung y arroz basmati combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración estabiliza el prana digestivo en el colon, eliminando el adormecimiento del ego al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se visualiza como una fortificación inexpugnable; los almacenes rebosan prana y Baghdad resistirá indefinidamente al mando anglicano.",
        "icon": "🍚",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_81",
        "name": "Yantra Bi-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5800,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_82",
        "name": "Yantra Bi-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_83",
        "name": "Yantra Bi-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5700,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +10% / Habilidad Militar +13%"
    },
    {
        "id": "diet_84",
        "name": "Yantra Bi-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5450,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +25% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_85",
        "name": "Yantra Bi-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_86",
        "name": "Yantra Bi-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +10% / Habilidad Militar +12%"
    },
    {
        "id": "diet_87",
        "name": "Yantra Bi-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5900,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +6 / Moral +3 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_88",
        "name": "Yantra Bi-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_89",
        "name": "Yantra Bi-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +20% / Habilidad Militar +8%"
    },
    {
        "id": "diet_90",
        "name": "Yantra Bi-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_91",
        "name": "Yantra Bi-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_92",
        "name": "Yantra Bi-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 13
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +13%"
    },
    {
        "id": "diet_93",
        "name": "Yantra Bi-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4850,
        "effects": {
            "defense": 0,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -20,
            "combatSkill": 8
        },
        "effectDesc": "Moral +1 / Velocidad Meditación +25% / Granos Diarios -20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_94",
        "name": "Yantra Bi-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +8%"
    },
    {
        "id": "diet_95",
        "name": "Yantra Bi-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 12
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +12%"
    },
    {
        "id": "diet_96",
        "name": "Yantra Bi-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_97",
        "name": "Yantra Bi-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4400,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -30 / Habilidad Militar +8%"
    },
    {
        "id": "diet_98",
        "name": "Yantra Bi-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4600,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_99",
        "name": "Yantra Bi-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5950,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.35,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +35% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_100",
        "name": "Yantra Bi-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5750,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +25% / Habilidad Militar +8%"
    },
    {
        "id": "diet_101",
        "name": "Yantra Bi-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5850,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": 0,
            "combatSkill": 13
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +25% / Habilidad Militar +13%"
    },
    {
        "id": "diet_102",
        "name": "Yantra Bi-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.4,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +40% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_103",
        "name": "Yantra Bi-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5450,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_104",
        "name": "Yantra Bi-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5650,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": 0,
            "combatSkill": 12
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +25% / Habilidad Militar +12%"
    },
    {
        "id": "diet_105",
        "name": "Yantra Bi-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6050,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +25% / Habilidad Militar +8%"
    },
    {
        "id": "diet_106",
        "name": "Yantra Bi-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5150,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_107",
        "name": "Yantra Bi-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5350,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.35,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +35% / Habilidad Militar +8%"
    },
    {
        "id": "diet_108",
        "name": "Yantra Bi-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +5 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_109",
        "name": "Yantra Bi-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +5 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_110",
        "name": "Yantra Bi-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 1,
            "moral": 6,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +1 / Moral +6 / Velocidad Meditación +10% / Habilidad Militar +13%"
    },
    {
        "id": "diet_111",
        "name": "Yantra Bi-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5150,
        "effects": {
            "defense": 1,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +4 / Velocidad Meditación +25% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_112",
        "name": "Yantra Bi-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_113",
        "name": "Yantra Bi-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 1,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +1 / Moral +5 / Velocidad Meditación +10% / Habilidad Militar +12%"
    },
    {
        "id": "diet_114",
        "name": "Yantra Bi-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_115",
        "name": "Yantra Bi-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_116",
        "name": "Yantra Bi-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 1,
            "moral": 6,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +6 / Velocidad Meditación +20% / Habilidad Militar +8%"
    },
    {
        "id": "diet_117",
        "name": "Yantra Bi-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6500,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": 5,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +30% / Granos Diarios +5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_118",
        "name": "Yantra Bi-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6300,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_119",
        "name": "Yantra Bi-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6400,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 17
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +17%"
    },
    {
        "id": "diet_120",
        "name": "Yantra Bi-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6150,
        "effects": {
            "defense": 0,
            "moral": 1,
            "speed": 0.35,
            "resourceMod": -10,
            "combatSkill": 12
        },
        "effectDesc": "Moral +1 / Velocidad Meditación +35% / Granos Diarios -10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_121",
        "name": "Yantra Bi-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6000,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +12%"
    },
    {
        "id": "diet_122",
        "name": "Yantra Bi-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6200,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 16
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +16%"
    },
    {
        "id": "diet_123",
        "name": "Yantra Bi-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6600,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_124",
        "name": "Yantra Bi-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5700,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -20 / Habilidad Militar +12%"
    },
    {
        "id": "diet_125",
        "name": "Yantra Bi-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5900,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 12
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +30% / Granos Diarios -5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_126",
        "name": "Yantra Bi-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6100,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_127",
        "name": "Yantra Bi-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5900,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_128",
        "name": "Yantra Bi-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6000,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +10% / Habilidad Militar +13%"
    },
    {
        "id": "diet_129",
        "name": "Yantra Bi-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5750,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_130",
        "name": "Yantra Bi-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_131",
        "name": "Yantra Bi-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5800,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +12%"
    },
    {
        "id": "diet_132",
        "name": "Yantra Bi-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6200,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +7 / Moral +1 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_133",
        "name": "Yantra Bi-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_134",
        "name": "Yantra Bi-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +20% / Habilidad Militar +8%"
    },
    {
        "id": "diet_135",
        "name": "Yantra Bi-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +20% / Habilidad Militar +8%"
    },
    {
        "id": "diet_136",
        "name": "Yantra Bi-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_137",
        "name": "Yantra Bi-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +13%"
    },
    {
        "id": "diet_138",
        "name": "Yantra Bi-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5150,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_139",
        "name": "Yantra Bi-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_140",
        "name": "Yantra Bi-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_141",
        "name": "Yantra Bi-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_142",
        "name": "Yantra Bi-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +8%"
    },
    {
        "id": "diet_143",
        "name": "Yantra Bi-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_144",
        "name": "Yantra Bi-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5700,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.3,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +30% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_145",
        "name": "Yantra Bi-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +20% / Habilidad Militar +8%"
    },
    {
        "id": "diet_146",
        "name": "Yantra Bi-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 0,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 13
        },
        "effectDesc": "Moral +5 / Velocidad Meditación +20% / Habilidad Militar +13%"
    },
    {
        "id": "diet_147",
        "name": "Yantra Bi-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5350,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.35,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +35% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_148",
        "name": "Yantra Bi-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_149",
        "name": "Yantra Bi-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 12
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +20% / Habilidad Militar +12%"
    },
    {
        "id": "diet_150",
        "name": "Yantra Bi-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5800,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +20% / Habilidad Militar +8%"
    },
    {
        "id": "diet_151",
        "name": "Yantra Bi-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_152",
        "name": "Yantra Bi-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 0,
            "moral": 5,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Moral +5 / Velocidad Meditación +30% / Habilidad Militar +8%"
    },
    {
        "id": "diet_153",
        "name": "Yantra Bi-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6400,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +14%"
    },
    {
        "id": "diet_154",
        "name": "Yantra Bi-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6200,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +14%"
    },
    {
        "id": "diet_155",
        "name": "Yantra Bi-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6300,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 19
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +10% / Habilidad Militar +19%"
    },
    {
        "id": "diet_156",
        "name": "Yantra Bi-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6050,
        "effects": {
            "defense": 0,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -5,
            "combatSkill": 14
        },
        "effectDesc": "Moral +1 / Velocidad Meditación +25% / Granos Diarios -5 / Habilidad Militar +14%"
    },
    {
        "id": "diet_157",
        "name": "Yantra Bi-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5900,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +14%"
    },
    {
        "id": "diet_158",
        "name": "Yantra Bi-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6100,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 18
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +10% / Habilidad Militar +18%"
    },
    {
        "id": "diet_159",
        "name": "Yantra Bi-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 6500,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Habilidad Militar +14%"
    },
    {
        "id": "diet_160",
        "name": "Yantra Bi-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +14%"
    },
    {
        "id": "diet_161",
        "name": "Yantra Bi-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de manzanas horneadas y requesón combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración renueva el torrente pránico de la sangre, infundiendo un estado de éxtasis mental al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se proyecta en el plano de la regeneración; cada soldado combate con la fuerza de un alma recién nacida y pura.",
        "icon": "🍎",
        "category": "liver",
        "cost": 5800,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 14
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +20% / Habilidad Militar +14%"
    },
    {
        "id": "diet_162",
        "name": "Yantra Tri-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 7,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +7 / Moral +3 / Velocidad Meditación +10% / Granos Diarios +5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_163",
        "name": "Yantra Tri-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 8,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +8 / Moral +3 / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_164",
        "name": "Yantra Tri-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 7
        },
        "effectDesc": "Defensa +5 / Moral +4 / Granos Diarios -5 / Habilidad Militar +7%"
    },
    {
        "id": "diet_165",
        "name": "Yantra Tri-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4650,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -10 / Habilidad Militar +2%"
    },
    {
        "id": "diet_166",
        "name": "Yantra Tri-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +7 / Moral +2 / Granos Diarios -15 / Habilidad Militar +2%"
    },
    {
        "id": "diet_167",
        "name": "Yantra Tri-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +3 / Granos Diarios -5 / Habilidad Militar +6%"
    },
    {
        "id": "diet_168",
        "name": "Yantra Tri-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 9,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +9 / Moral +2 / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_169",
        "name": "Yantra Tri-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4200,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Moral +2 / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_170",
        "name": "Yantra Tri-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4400,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_171",
        "name": "Yantra Tri-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4400,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +2%"
    },
    {
        "id": "diet_172",
        "name": "Yantra Tri-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4200,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Moral +1 / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_173",
        "name": "Yantra Tri-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4300,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 7
        },
        "effectDesc": "Defensa +3 / Moral +2 / Granos Diarios -20 / Habilidad Militar +7%"
    },
    {
        "id": "diet_174",
        "name": "Yantra Tri-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4050,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -25,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +3 / Velocidad Meditación +15% / Granos Diarios -25 / Habilidad Militar +2%"
    },
    {
        "id": "diet_175",
        "name": "Yantra Tri-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 3900,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Granos Diarios -30 / Habilidad Militar +2%"
    },
    {
        "id": "diet_176",
        "name": "Yantra Tri-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4100,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +1 / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_177",
        "name": "Yantra Tri-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +7 / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_178",
        "name": "Yantra Tri-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 3600,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +4 / Granos Diarios -35 / Habilidad Militar +2%"
    },
    {
        "id": "diet_179",
        "name": "Yantra Tri-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 3800,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_180",
        "name": "Yantra Tri-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5150,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": 5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +25% / Granos Diarios +5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_181",
        "name": "Yantra Tri-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4950,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_182",
        "name": "Yantra Tri-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5050,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": -5,
            "combatSkill": 7
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +15% / Granos Diarios -5 / Habilidad Militar +7%"
    },
    {
        "id": "diet_183",
        "name": "Yantra Tri-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.3,
            "resourceMod": -10,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +30% / Granos Diarios -10 / Habilidad Militar +2%"
    },
    {
        "id": "diet_184",
        "name": "Yantra Tri-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4650,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": -15,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +15% / Granos Diarios -15 / Habilidad Militar +2%"
    },
    {
        "id": "diet_185",
        "name": "Yantra Tri-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4850,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -5,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -5 / Habilidad Militar +6%"
    },
    {
        "id": "diet_186",
        "name": "Yantra Tri-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5250,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +7 / Moral +1 / Velocidad Meditación +15% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_187",
        "name": "Yantra Tri-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4350,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +15% / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_188",
        "name": "Yantra Tri-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4550,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +25% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_189",
        "name": "Yantra Tri-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Moral +4 / Velocidad Meditación +10% / Granos Diarios +5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_190",
        "name": "Yantra Tri-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 7,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +7 / Moral +4 / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_191",
        "name": "Yantra Tri-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4600,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 7
        },
        "effectDesc": "Defensa +4 / Moral +5 / Granos Diarios -5 / Habilidad Militar +7%"
    },
    {
        "id": "diet_192",
        "name": "Yantra Tri-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4350,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +15% / Granos Diarios -10 / Habilidad Militar +2%"
    },
    {
        "id": "diet_193",
        "name": "Yantra Tri-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4200,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Moral +3 / Granos Diarios -15 / Habilidad Militar +2%"
    },
    {
        "id": "diet_194",
        "name": "Yantra Tri-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4400,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +4 / Granos Diarios -5 / Habilidad Militar +6%"
    },
    {
        "id": "diet_195",
        "name": "Yantra Tri-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 8,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +8 / Moral +3 / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_196",
        "name": "Yantra Tri-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 3900,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Moral +3 / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_197",
        "name": "Yantra Tri-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4100,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +4 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_198",
        "name": "Yantra Tri-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5700,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +20% / Habilidad Militar +6%"
    },
    {
        "id": "diet_199",
        "name": "Yantra Tri-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_200",
        "name": "Yantra Tri-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +11%"
    },
    {
        "id": "diet_201",
        "name": "Yantra Tri-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5350,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_202",
        "name": "Yantra Tri-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_203",
        "name": "Yantra Tri-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_204",
        "name": "Yantra Tri-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5800,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +7 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_205",
        "name": "Yantra Tri-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_206",
        "name": "Yantra Tri-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_207",
        "name": "Yantra Tri-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 8,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": 5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +8 / Moral +1 / Velocidad Meditación +10% / Granos Diarios +5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_208",
        "name": "Yantra Tri-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 9,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +9 / Moral +1 / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_209",
        "name": "Yantra Tri-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 7
        },
        "effectDesc": "Defensa +6 / Moral +2 / Granos Diarios -5 / Habilidad Militar +7%"
    },
    {
        "id": "diet_210",
        "name": "Yantra Tri-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4950,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Velocidad Meditación +15% / Granos Diarios -10 / Habilidad Militar +2%"
    },
    {
        "id": "diet_211",
        "name": "Yantra Tri-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 8,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +8 / Granos Diarios -15 / Habilidad Militar +2%"
    },
    {
        "id": "diet_212",
        "name": "Yantra Tri-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +6 / Moral +1 / Granos Diarios -5 / Habilidad Militar +6%"
    },
    {
        "id": "diet_213",
        "name": "Yantra Tri-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 10,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +10 / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_214",
        "name": "Yantra Tri-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +7 / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_215",
        "name": "Yantra Tri-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_216",
        "name": "Yantra Tri-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_217",
        "name": "Yantra Tri-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +7 / Moral +1 / Granos Diarios -15 / Habilidad Militar +2%"
    },
    {
        "id": "diet_218",
        "name": "Yantra Tri-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4600,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 7
        },
        "effectDesc": "Defensa +4 / Moral +2 / Granos Diarios -15 / Habilidad Militar +7%"
    },
    {
        "id": "diet_219",
        "name": "Yantra Tri-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4350,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +15% / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_220",
        "name": "Yantra Tri-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4200,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Granos Diarios -25 / Habilidad Militar +2%"
    },
    {
        "id": "diet_221",
        "name": "Yantra Tri-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4400,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +1 / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_222",
        "name": "Yantra Tri-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 8,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +8 / Granos Diarios -15 / Habilidad Militar +2%"
    },
    {
        "id": "diet_223",
        "name": "Yantra Tri-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 3900,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Granos Diarios -30 / Habilidad Militar +2%"
    },
    {
        "id": "diet_224",
        "name": "Yantra Tri-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4100,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +2%"
    },
    {
        "id": "diet_225",
        "name": "Yantra Tri-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +20% / Granos Diarios +5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_226",
        "name": "Yantra Tri-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +6 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_227",
        "name": "Yantra Tri-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 7
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +7%"
    },
    {
        "id": "diet_228",
        "name": "Yantra Tri-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4550,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -10 / Habilidad Militar +2%"
    },
    {
        "id": "diet_229",
        "name": "Yantra Tri-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4400,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +2%"
    },
    {
        "id": "diet_230",
        "name": "Yantra Tri-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4600,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +6%"
    },
    {
        "id": "diet_231",
        "name": "Yantra Tri-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +7 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_232",
        "name": "Yantra Tri-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4100,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +2%"
    },
    {
        "id": "diet_233",
        "name": "Yantra Tri-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4300,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 2
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +2%"
    },
    {
        "id": "diet_234",
        "name": "Yantra Tri-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": 5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +10% / Granos Diarios +5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_235",
        "name": "Yantra Tri-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +6 / Moral +1 / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_236",
        "name": "Yantra Tri-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +3 / Moral +2 / Granos Diarios -5 / Habilidad Militar +13%"
    },
    {
        "id": "diet_237",
        "name": "Yantra Tri-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5250,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Velocidad Meditación +15% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_238",
        "name": "Yantra Tri-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_239",
        "name": "Yantra Tri-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +3 / Moral +1 / Granos Diarios -5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_240",
        "name": "Yantra Tri-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5700,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +7 / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_241",
        "name": "Yantra Tri-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Granos Diarios -20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_242",
        "name": "Yantra Tri-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de remolacha al vapor y hojas verdes combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración descongestiona la pesadez del hígado y purifica las células contra la toxemia al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se vislumbra una victoria silenciosa y purificadora; el enemigo se secará ante nuestra inmunidad espiritual, disolviéndose como cenizas al viento.",
        "icon": "⚗️",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_243",
        "name": "Yantra Tetra-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5000,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.3,
            "resourceMod": 10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +30% / Granos Diarios +10"
    },
    {
        "id": "diet_244",
        "name": "Yantra Tetra-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4800,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +4 / Velocidad Meditación +20%"
    },
    {
        "id": "diet_245",
        "name": "Yantra Tetra-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4900,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +3 / Moral +5 / Velocidad Meditación +20% / Habilidad Militar +5%"
    },
    {
        "id": "diet_246",
        "name": "Yantra Tetra-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4650,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.35,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +35% / Granos Diarios -5"
    },
    {
        "id": "diet_247",
        "name": "Yantra Tetra-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -10"
    },
    {
        "id": "diet_248",
        "name": "Yantra Tetra-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4700,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +20% / Habilidad Militar +4%"
    },
    {
        "id": "diet_249",
        "name": "Yantra Tetra-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5100,
        "effects": {
            "defense": 7,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +3 / Velocidad Meditación +20%"
    },
    {
        "id": "diet_250",
        "name": "Yantra Tetra-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_251",
        "name": "Yantra Tetra-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4400,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +5 / Velocidad Meditación +30%"
    },
    {
        "id": "diet_252",
        "name": "Yantra Tetra-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4400,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +30% / Granos Diarios -5"
    },
    {
        "id": "diet_253",
        "name": "Yantra Tetra-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_254",
        "name": "Yantra Tetra-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4300,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +5%"
    },
    {
        "id": "diet_255",
        "name": "Yantra Tetra-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4050,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.35,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +35% / Granos Diarios -20"
    },
    {
        "id": "diet_256",
        "name": "Yantra Tetra-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -25"
    },
    {
        "id": "diet_257",
        "name": "Yantra Tetra-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4100,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_258",
        "name": "Yantra Tetra-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_259",
        "name": "Yantra Tetra-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 3600,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -30"
    },
    {
        "id": "diet_260",
        "name": "Yantra Tetra-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 3800,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +30% / Granos Diarios -15"
    },
    {
        "id": "diet_261",
        "name": "Yantra Tetra-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5150,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.45,
            "resourceMod": 10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +45% / Granos Diarios +10"
    },
    {
        "id": "diet_262",
        "name": "Yantra Tetra-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4950,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.35,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +35%"
    },
    {
        "id": "diet_263",
        "name": "Yantra Tetra-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5050,
        "effects": {
            "defense": 1,
            "moral": 4,
            "speed": 0.35,
            "resourceMod": 0,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +1 / Moral +4 / Velocidad Meditación +35% / Habilidad Militar +5%"
    },
    {
        "id": "diet_264",
        "name": "Yantra Tetra-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4800,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.5,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +50% / Granos Diarios -5"
    },
    {
        "id": "diet_265",
        "name": "Yantra Tetra-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4650,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.35,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +35% / Granos Diarios -10"
    },
    {
        "id": "diet_266",
        "name": "Yantra Tetra-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4850,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.35,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +35% / Habilidad Militar +4%"
    },
    {
        "id": "diet_267",
        "name": "Yantra Tetra-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5250,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.35,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +35%"
    },
    {
        "id": "diet_268",
        "name": "Yantra Tetra-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4350,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.35,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +35% / Granos Diarios -15"
    },
    {
        "id": "diet_269",
        "name": "Yantra Tetra-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4550,
        "effects": {
            "defense": 1,
            "moral": 4,
            "speed": 0.45,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +1 / Moral +4 / Velocidad Meditación +45%"
    },
    {
        "id": "diet_270",
        "name": "Yantra Tetra-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4700,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.3,
            "resourceMod": 10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +5 / Velocidad Meditación +30% / Granos Diarios +10"
    },
    {
        "id": "diet_271",
        "name": "Yantra Tetra-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +5 / Velocidad Meditación +20%"
    },
    {
        "id": "diet_272",
        "name": "Yantra Tetra-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4600,
        "effects": {
            "defense": 2,
            "moral": 6,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +6 / Velocidad Meditación +20% / Habilidad Militar +5%"
    },
    {
        "id": "diet_273",
        "name": "Yantra Tetra-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4350,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.35,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +35% / Granos Diarios -5"
    },
    {
        "id": "diet_274",
        "name": "Yantra Tetra-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -10"
    },
    {
        "id": "diet_275",
        "name": "Yantra Tetra-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4400,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +20% / Habilidad Militar +4%"
    },
    {
        "id": "diet_276",
        "name": "Yantra Tetra-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4800,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +4 / Velocidad Meditación +20%"
    },
    {
        "id": "diet_277",
        "name": "Yantra Tetra-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_278",
        "name": "Yantra Tetra-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 6,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +6 / Velocidad Meditación +30%"
    },
    {
        "id": "diet_279",
        "name": "Yantra Tetra-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5700,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.4,
            "resourceMod": 5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +40% / Granos Diarios +5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_280",
        "name": "Yantra Tetra-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5500,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +30% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_281",
        "name": "Yantra Tetra-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5600,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +30% / Granos Diarios -5 / Habilidad Militar +9%"
    },
    {
        "id": "diet_282",
        "name": "Yantra Tetra-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5350,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.45,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +45% / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_283",
        "name": "Yantra Tetra-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5200,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.3,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +30% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_284",
        "name": "Yantra Tetra-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5400,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +30% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_285",
        "name": "Yantra Tetra-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5800,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +30% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_286",
        "name": "Yantra Tetra-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4900,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.3,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +30% / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_287",
        "name": "Yantra Tetra-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5100,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.4,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +40% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_288",
        "name": "Yantra Tetra-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5300,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": 10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +30% / Granos Diarios +10"
    },
    {
        "id": "diet_289",
        "name": "Yantra Tetra-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5100,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +2 / Velocidad Meditación +20%"
    },
    {
        "id": "diet_290",
        "name": "Yantra Tetra-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5200,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +20% / Habilidad Militar +5%"
    },
    {
        "id": "diet_291",
        "name": "Yantra Tetra-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4950,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.35,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +35% / Granos Diarios -5"
    },
    {
        "id": "diet_292",
        "name": "Yantra Tetra-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4800,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -10"
    },
    {
        "id": "diet_293",
        "name": "Yantra Tetra-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5000,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +20% / Habilidad Militar +4%"
    },
    {
        "id": "diet_294",
        "name": "Yantra Tetra-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5400,
        "effects": {
            "defense": 8,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +8 / Moral +1 / Velocidad Meditación +20%"
    },
    {
        "id": "diet_295",
        "name": "Yantra Tetra-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_296",
        "name": "Yantra Tetra-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4700,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +30%"
    },
    {
        "id": "diet_297",
        "name": "Yantra Tetra-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4700,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +30%"
    },
    {
        "id": "diet_298",
        "name": "Yantra Tetra-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -10"
    },
    {
        "id": "diet_299",
        "name": "Yantra Tetra-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4600,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +5%"
    },
    {
        "id": "diet_300",
        "name": "Yantra Tetra-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4350,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.35,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +35% / Granos Diarios -15"
    },
    {
        "id": "diet_301",
        "name": "Yantra Tetra-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -20"
    },
    {
        "id": "diet_302",
        "name": "Yantra Tetra-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4400,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_303",
        "name": "Yantra Tetra-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4800,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -10"
    },
    {
        "id": "diet_304",
        "name": "Yantra Tetra-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -25"
    },
    {
        "id": "diet_305",
        "name": "Yantra Tetra-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +30% / Granos Diarios -10"
    },
    {
        "id": "diet_306",
        "name": "Yantra Tetra-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4900,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.4,
            "resourceMod": 10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +40% / Granos Diarios +10"
    },
    {
        "id": "diet_307",
        "name": "Yantra Tetra-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4700,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +30%"
    },
    {
        "id": "diet_308",
        "name": "Yantra Tetra-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4800,
        "effects": {
            "defense": 1,
            "moral": 5,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +1 / Moral +5 / Velocidad Meditación +30% / Habilidad Militar +5%"
    },
    {
        "id": "diet_309",
        "name": "Yantra Tetra-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4550,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.45,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +45% / Granos Diarios -5"
    },
    {
        "id": "diet_310",
        "name": "Yantra Tetra-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4400,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +30% / Granos Diarios -10"
    },
    {
        "id": "diet_311",
        "name": "Yantra Tetra-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4600,
        "effects": {
            "defense": 1,
            "moral": 4,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +1 / Moral +4 / Velocidad Meditación +30% / Habilidad Militar +4%"
    },
    {
        "id": "diet_312",
        "name": "Yantra Tetra-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5000,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +30%"
    },
    {
        "id": "diet_313",
        "name": "Yantra Tetra-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +30% / Granos Diarios -15"
    },
    {
        "id": "diet_314",
        "name": "Yantra Tetra-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4300,
        "effects": {
            "defense": 1,
            "moral": 5,
            "speed": 0.4,
            "resourceMod": 0,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +1 / Moral +5 / Velocidad Meditación +40%"
    },
    {
        "id": "diet_315",
        "name": "Yantra Tetra-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5600,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": 10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +30% / Granos Diarios +10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_316",
        "name": "Yantra Tetra-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5400,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +20% / Habilidad Militar +6%"
    },
    {
        "id": "diet_317",
        "name": "Yantra Tetra-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5500,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +20% / Habilidad Militar +11%"
    },
    {
        "id": "diet_318",
        "name": "Yantra Tetra-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5250,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.35,
            "resourceMod": -5,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +35% / Granos Diarios -5 / Habilidad Militar +6%"
    },
    {
        "id": "diet_319",
        "name": "Yantra Tetra-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5100,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_320",
        "name": "Yantra Tetra-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5300,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +20% / Habilidad Militar +10%"
    },
    {
        "id": "diet_321",
        "name": "Yantra Tetra-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5700,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +20% / Habilidad Militar +6%"
    },
    {
        "id": "diet_322",
        "name": "Yantra Tetra-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 4800,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_323",
        "name": "Yantra Tetra-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de apio al vapor con hebras combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración seda el sistema nervioso simpático, permitiendo a la mente entrar en auto-contención al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La perspectiva de la victoria es de serenidad absoluta; enfrentamos la muerte con una sonrisa, lo que desconcierta y debilita al invasor británico.",
        "icon": "🌿",
        "category": "nerves",
        "cost": 5000,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +30% / Habilidad Militar +6%"
    },
    {
        "id": "diet_324",
        "name": "Yantra Penta-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_325",
        "name": "Yantra Penta-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 7,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +3 / Granos Diarios -20"
    },
    {
        "id": "diet_326",
        "name": "Yantra Penta-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +4 / Moral +4 / Granos Diarios -20 / Habilidad Militar +5%"
    },
    {
        "id": "diet_327",
        "name": "Yantra Penta-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3950,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -25"
    },
    {
        "id": "diet_328",
        "name": "Yantra Penta-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +2 / Granos Diarios -30"
    },
    {
        "id": "diet_329",
        "name": "Yantra Penta-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +3 / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_330",
        "name": "Yantra Penta-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 8,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +8 / Moral +2 / Granos Diarios -20"
    },
    {
        "id": "diet_331",
        "name": "Yantra Penta-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3500,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Granos Diarios -35"
    },
    {
        "id": "diet_332",
        "name": "Yantra Penta-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -20"
    },
    {
        "id": "diet_333",
        "name": "Yantra Penta-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25"
    },
    {
        "id": "diet_334",
        "name": "Yantra Penta-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3500,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +1 / Granos Diarios -35"
    },
    {
        "id": "diet_335",
        "name": "Yantra Penta-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3600,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +2 / Granos Diarios -35 / Habilidad Militar +5%"
    },
    {
        "id": "diet_336",
        "name": "Yantra Penta-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3350,
        "effects": {
            "defense": 2,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -40,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Velocidad Meditación +15% / Granos Diarios -40"
    },
    {
        "id": "diet_337",
        "name": "Yantra Penta-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3200,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -45,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Granos Diarios -45"
    },
    {
        "id": "diet_338",
        "name": "Yantra Penta-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +1 / Granos Diarios -35 / Habilidad Militar +4%"
    },
    {
        "id": "diet_339",
        "name": "Yantra Penta-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Granos Diarios -35"
    },
    {
        "id": "diet_340",
        "name": "Yantra Penta-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 2900,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -50,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Granos Diarios -50"
    },
    {
        "id": "diet_341",
        "name": "Yantra Penta-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3100,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -35"
    },
    {
        "id": "diet_342",
        "name": "Yantra Penta-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4450,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -10"
    },
    {
        "id": "diet_343",
        "name": "Yantra Penta-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4250,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -20"
    },
    {
        "id": "diet_344",
        "name": "Yantra Penta-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4350,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": -20,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +15% / Granos Diarios -20 / Habilidad Militar +5%"
    },
    {
        "id": "diet_345",
        "name": "Yantra Penta-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.3,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +30% / Granos Diarios -25"
    },
    {
        "id": "diet_346",
        "name": "Yantra Penta-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3950,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +15% / Granos Diarios -30"
    },
    {
        "id": "diet_347",
        "name": "Yantra Penta-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4150,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_348",
        "name": "Yantra Penta-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4550,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +15% / Granos Diarios -20"
    },
    {
        "id": "diet_349",
        "name": "Yantra Penta-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3650,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +15% / Granos Diarios -35"
    },
    {
        "id": "diet_350",
        "name": "Yantra Penta-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3850,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +25% / Granos Diarios -20"
    },
    {
        "id": "diet_351",
        "name": "Yantra Penta-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_352",
        "name": "Yantra Penta-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +4 / Granos Diarios -20"
    },
    {
        "id": "diet_353",
        "name": "Yantra Penta-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +3 / Moral +5 / Granos Diarios -20 / Habilidad Militar +5%"
    },
    {
        "id": "diet_354",
        "name": "Yantra Penta-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3650,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +15% / Granos Diarios -25"
    },
    {
        "id": "diet_355",
        "name": "Yantra Penta-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3500,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Granos Diarios -30"
    },
    {
        "id": "diet_356",
        "name": "Yantra Penta-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +4 / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_357",
        "name": "Yantra Penta-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 7,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +3 / Granos Diarios -20"
    },
    {
        "id": "diet_358",
        "name": "Yantra Penta-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3200,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Granos Diarios -35"
    },
    {
        "id": "diet_359",
        "name": "Yantra Penta-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -20"
    },
    {
        "id": "diet_360",
        "name": "Yantra Penta-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 5000,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_361",
        "name": "Yantra Penta-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4800,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_362",
        "name": "Yantra Penta-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4900,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +9%"
    },
    {
        "id": "diet_363",
        "name": "Yantra Penta-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4650,
        "effects": {
            "defense": 2,
            "moral": 0,
            "speed": 0.25,
            "resourceMod": -30,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Velocidad Meditación +25% / Granos Diarios -30 / Habilidad Militar +4%"
    },
    {
        "id": "diet_364",
        "name": "Yantra Penta-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -35,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +10% / Granos Diarios -35 / Habilidad Militar +4%"
    },
    {
        "id": "diet_365",
        "name": "Yantra Penta-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +8%"
    },
    {
        "id": "diet_366",
        "name": "Yantra Penta-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 5100,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_367",
        "name": "Yantra Penta-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -40,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Velocidad Meditación +10% / Granos Diarios -40 / Habilidad Militar +4%"
    },
    {
        "id": "diet_368",
        "name": "Yantra Penta-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_369",
        "name": "Yantra Penta-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10"
    },
    {
        "id": "diet_370",
        "name": "Yantra Penta-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 8,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +8 / Moral +1 / Granos Diarios -20"
    },
    {
        "id": "diet_371",
        "name": "Yantra Penta-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +5 / Moral +2 / Granos Diarios -20 / Habilidad Militar +5%"
    },
    {
        "id": "diet_372",
        "name": "Yantra Penta-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4250,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Velocidad Meditación +15% / Granos Diarios -25"
    },
    {
        "id": "diet_373",
        "name": "Yantra Penta-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Granos Diarios -30"
    },
    {
        "id": "diet_374",
        "name": "Yantra Penta-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +1 / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_375",
        "name": "Yantra Penta-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 9,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +9 / Granos Diarios -20"
    },
    {
        "id": "diet_376",
        "name": "Yantra Penta-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Granos Diarios -35"
    },
    {
        "id": "diet_377",
        "name": "Yantra Penta-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -20"
    },
    {
        "id": "diet_378",
        "name": "Yantra Penta-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -20"
    },
    {
        "id": "diet_379",
        "name": "Yantra Penta-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3800,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +1 / Granos Diarios -30"
    },
    {
        "id": "diet_380",
        "name": "Yantra Penta-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +3 / Moral +2 / Granos Diarios -30 / Habilidad Militar +5%"
    },
    {
        "id": "diet_381",
        "name": "Yantra Penta-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3650,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Velocidad Meditación +15% / Granos Diarios -35"
    },
    {
        "id": "diet_382",
        "name": "Yantra Penta-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3500,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -40,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Granos Diarios -40"
    },
    {
        "id": "diet_383",
        "name": "Yantra Penta-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +1 / Granos Diarios -30 / Habilidad Militar +4%"
    },
    {
        "id": "diet_384",
        "name": "Yantra Penta-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Granos Diarios -30"
    },
    {
        "id": "diet_385",
        "name": "Yantra Penta-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3200,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -45,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Granos Diarios -45"
    },
    {
        "id": "diet_386",
        "name": "Yantra Penta-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -30"
    },
    {
        "id": "diet_387",
        "name": "Yantra Penta-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -10"
    },
    {
        "id": "diet_388",
        "name": "Yantra Penta-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -20"
    },
    {
        "id": "diet_389",
        "name": "Yantra Penta-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +5%"
    },
    {
        "id": "diet_390",
        "name": "Yantra Penta-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3850,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -25"
    },
    {
        "id": "diet_391",
        "name": "Yantra Penta-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -30"
    },
    {
        "id": "diet_392",
        "name": "Yantra Penta-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_393",
        "name": "Yantra Penta-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -20"
    },
    {
        "id": "diet_394",
        "name": "Yantra Penta-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -35"
    },
    {
        "id": "diet_395",
        "name": "Yantra Penta-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 3600,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -20"
    },
    {
        "id": "diet_396",
        "name": "Yantra Penta-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_397",
        "name": "Yantra Penta-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +1 / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_398",
        "name": "Yantra Penta-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4800,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +2 / Moral +2 / Granos Diarios -20 / Habilidad Militar +11%"
    },
    {
        "id": "diet_399",
        "name": "Yantra Penta-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4550,
        "effects": {
            "defense": 2,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Velocidad Meditación +15% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_400",
        "name": "Yantra Penta-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Granos Diarios -30 / Habilidad Militar +6%"
    },
    {
        "id": "diet_401",
        "name": "Yantra Penta-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +2 / Moral +1 / Granos Diarios -20 / Habilidad Militar +10%"
    },
    {
        "id": "diet_402",
        "name": "Yantra Penta-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 5000,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +6 / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_403",
        "name": "Yantra Penta-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -35,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Granos Diarios -35 / Habilidad Militar +6%"
    },
    {
        "id": "diet_404",
        "name": "Yantra Penta-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de caldo de piel de papas y calabacín combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración elimina las acumulaciones de ácido úrico y gota, liberando las articulaciones del miedo al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se consolida desde las bases logísticas y físicas; nuestras tropas marchan sin dolor ni rigidez, superando cualquier obstáculo geográfico.",
        "icon": "🥔",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_405",
        "name": "Yantra Hexa-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +20% / Habilidad Militar +6%"
    },
    {
        "id": "diet_406",
        "name": "Yantra Hexa-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_407",
        "name": "Yantra Hexa-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +11%"
    },
    {
        "id": "diet_408",
        "name": "Yantra Hexa-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5050,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_409",
        "name": "Yantra Hexa-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_410",
        "name": "Yantra Hexa-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_411",
        "name": "Yantra Hexa-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_412",
        "name": "Yantra Hexa-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4600,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_413",
        "name": "Yantra Hexa-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_414",
        "name": "Yantra Hexa-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_415",
        "name": "Yantra Hexa-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4600,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_416",
        "name": "Yantra Hexa-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 11
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +11%"
    },
    {
        "id": "diet_417",
        "name": "Yantra Hexa-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4450,
        "effects": {
            "defense": 0,
            "moral": 0,
            "speed": 0.25,
            "resourceMod": -30,
            "combatSkill": 6
        },
        "effectDesc": "Velocidad Meditación +25% / Granos Diarios -30 / Habilidad Militar +6%"
    },
    {
        "id": "diet_418",
        "name": "Yantra Hexa-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4300,
        "effects": {
            "defense": 2,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -35,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Velocidad Meditación +10% / Granos Diarios -35 / Habilidad Militar +6%"
    },
    {
        "id": "diet_419",
        "name": "Yantra Hexa-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 0,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 10
        },
        "effectDesc": "Moral +1 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +10%"
    },
    {
        "id": "diet_420",
        "name": "Yantra Hexa-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_421",
        "name": "Yantra Hexa-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4000,
        "effects": {
            "defense": 1,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -40,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Velocidad Meditación +10% / Granos Diarios -40 / Habilidad Militar +6%"
    },
    {
        "id": "diet_422",
        "name": "Yantra Hexa-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4200,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +20% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_423",
        "name": "Yantra Hexa-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5550,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.35,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +35% / Habilidad Militar +6%"
    },
    {
        "id": "diet_424",
        "name": "Yantra Hexa-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5350,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_425",
        "name": "Yantra Hexa-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5450,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 11
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +25% / Granos Diarios -10 / Habilidad Militar +11%"
    },
    {
        "id": "diet_426",
        "name": "Yantra Hexa-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 0,
            "moral": 1,
            "speed": 0.4,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Moral +1 / Velocidad Meditación +40% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_427",
        "name": "Yantra Hexa-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5050,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_428",
        "name": "Yantra Hexa-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5250,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 10
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +25% / Granos Diarios -10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_429",
        "name": "Yantra Hexa-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5650,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_430",
        "name": "Yantra Hexa-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4750,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_431",
        "name": "Yantra Hexa-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4950,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.35,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +35% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_432",
        "name": "Yantra Hexa-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +20% / Habilidad Militar +6%"
    },
    {
        "id": "diet_433",
        "name": "Yantra Hexa-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_434",
        "name": "Yantra Hexa-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 1,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +1 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +11%"
    },
    {
        "id": "diet_435",
        "name": "Yantra Hexa-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4750,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_436",
        "name": "Yantra Hexa-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4600,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_437",
        "name": "Yantra Hexa-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 1,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +1 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_438",
        "name": "Yantra Hexa-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_439",
        "name": "Yantra Hexa-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4300,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_440",
        "name": "Yantra Hexa-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 1,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Moral +5 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_441",
        "name": "Yantra Hexa-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 6100,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +30% / Granos Diarios -5 / Habilidad Militar +10%"
    },
    {
        "id": "diet_442",
        "name": "Yantra Hexa-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5900,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +10%"
    },
    {
        "id": "diet_443",
        "name": "Yantra Hexa-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 6000,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 15
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +15%"
    },
    {
        "id": "diet_444",
        "name": "Yantra Hexa-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5750,
        "effects": {
            "defense": 0,
            "moral": 0,
            "speed": 0.35,
            "resourceMod": -20,
            "combatSkill": 10
        },
        "effectDesc": "Velocidad Meditación +35% / Granos Diarios -20 / Habilidad Militar +10%"
    },
    {
        "id": "diet_445",
        "name": "Yantra Hexa-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 2,
            "moral": 0,
            "speed": 0.2,
            "resourceMod": -25,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +2 / Velocidad Meditación +20% / Granos Diarios -25 / Habilidad Militar +10%"
    },
    {
        "id": "diet_446",
        "name": "Yantra Hexa-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5800,
        "effects": {
            "defense": 0,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 14
        },
        "effectDesc": "Moral +1 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +14%"
    },
    {
        "id": "diet_447",
        "name": "Yantra Hexa-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 6200,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +10%"
    },
    {
        "id": "diet_448",
        "name": "Yantra Hexa-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 1,
            "moral": 0,
            "speed": 0.2,
            "resourceMod": -30,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +1 / Velocidad Meditación +20% / Granos Diarios -30 / Habilidad Militar +10%"
    },
    {
        "id": "diet_449",
        "name": "Yantra Hexa-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": -15,
            "combatSkill": 10
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +30% / Granos Diarios -15 / Habilidad Militar +10%"
    },
    {
        "id": "diet_450",
        "name": "Yantra Hexa-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5700,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +20% / Habilidad Militar +6%"
    },
    {
        "id": "diet_451",
        "name": "Yantra Hexa-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_452",
        "name": "Yantra Hexa-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5600,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +11%"
    },
    {
        "id": "diet_453",
        "name": "Yantra Hexa-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5350,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_454",
        "name": "Yantra Hexa-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_455",
        "name": "Yantra Hexa-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_456",
        "name": "Yantra Hexa-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5800,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +7 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_457",
        "name": "Yantra Hexa-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_458",
        "name": "Yantra Hexa-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_459",
        "name": "Yantra Hexa-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_460",
        "name": "Yantra Hexa-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_461",
        "name": "Yantra Hexa-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +11%"
    },
    {
        "id": "diet_462",
        "name": "Yantra Hexa-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4750,
        "effects": {
            "defense": 1,
            "moral": 0,
            "speed": 0.25,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Velocidad Meditación +25% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_463",
        "name": "Yantra Hexa-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4600,
        "effects": {
            "defense": 3,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Velocidad Meditación +10% / Granos Diarios -30 / Habilidad Militar +6%"
    },
    {
        "id": "diet_464",
        "name": "Yantra Hexa-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 1,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +1 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +10%"
    },
    {
        "id": "diet_465",
        "name": "Yantra Hexa-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_466",
        "name": "Yantra Hexa-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4300,
        "effects": {
            "defense": 2,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -35,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Velocidad Meditación +10% / Granos Diarios -35 / Habilidad Militar +6%"
    },
    {
        "id": "diet_467",
        "name": "Yantra Hexa-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_468",
        "name": "Yantra Hexa-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5300,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": 0,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +30% / Habilidad Militar +6%"
    },
    {
        "id": "diet_469",
        "name": "Yantra Hexa-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5100,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_470",
        "name": "Yantra Hexa-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 11
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +11%"
    },
    {
        "id": "diet_471",
        "name": "Yantra Hexa-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4950,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.35,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +35% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_472",
        "name": "Yantra Hexa-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4800,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_473",
        "name": "Yantra Hexa-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5000,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 10
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_474",
        "name": "Yantra Hexa-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_475",
        "name": "Yantra Hexa-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4500,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_476",
        "name": "Yantra Hexa-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 4700,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.3,
            "resourceMod": -10,
            "combatSkill": 6
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +30% / Granos Diarios -10 / Habilidad Militar +6%"
    },
    {
        "id": "diet_477",
        "name": "Yantra Hexa-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 6000,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +20% / Habilidad Militar +12%"
    },
    {
        "id": "diet_478",
        "name": "Yantra Hexa-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5800,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_479",
        "name": "Yantra Hexa-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5900,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 17
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +17%"
    },
    {
        "id": "diet_480",
        "name": "Yantra Hexa-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5650,
        "effects": {
            "defense": 0,
            "moral": 0,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 12
        },
        "effectDesc": "Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +12%"
    },
    {
        "id": "diet_481",
        "name": "Yantra Hexa-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5500,
        "effects": {
            "defense": 2,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +2 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +12%"
    },
    {
        "id": "diet_482",
        "name": "Yantra Hexa-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5700,
        "effects": {
            "defense": 0,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 16
        },
        "effectDesc": "Moral +1 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +16%"
    },
    {
        "id": "diet_483",
        "name": "Yantra Hexa-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 6100,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_484",
        "name": "Yantra Hexa-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5200,
        "effects": {
            "defense": 1,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +1 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +12%"
    },
    {
        "id": "diet_485",
        "name": "Yantra Hexa-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de rábano blanco Daikon y sus hojas combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración limpia las impurezas de la piel y el hígado, otorgando una claridad visual y psíquica absoluta al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se percibe a través del velo del sigilo; nuestros espías ven los movimientos del enemigo con precisión cristalina y sin proyecciones egoicas.",
        "icon": "🥕",
        "category": "liver",
        "cost": 5400,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 12
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_486",
        "name": "Yantra Hepta-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5700,
        "effects": {
            "defense": 8,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +8 / Moral +3 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_487",
        "name": "Yantra Hepta-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 9,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +9 / Moral +3 / Habilidad Militar +4%"
    },
    {
        "id": "diet_488",
        "name": "Yantra Hepta-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +6 / Moral +4 / Habilidad Militar +9%"
    },
    {
        "id": "diet_489",
        "name": "Yantra Hepta-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5350,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +15% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_490",
        "name": "Yantra Hepta-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 8,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +8 / Moral +2 / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_491",
        "name": "Yantra Hepta-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5400,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +6 / Moral +3 / Habilidad Militar +8%"
    },
    {
        "id": "diet_492",
        "name": "Yantra Hepta-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5800,
        "effects": {
            "defense": 10,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +10 / Moral +2 / Habilidad Militar +4%"
    },
    {
        "id": "diet_493",
        "name": "Yantra Hepta-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4900,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Moral +2 / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_494",
        "name": "Yantra Hepta-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5100,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +4 / Velocidad Meditación +10% / Habilidad Militar +4%"
    },
    {
        "id": "diet_495",
        "name": "Yantra Hepta-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5100,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_496",
        "name": "Yantra Hepta-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4900,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Moral +1 / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_497",
        "name": "Yantra Hepta-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5000,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +4 / Moral +2 / Granos Diarios -15 / Habilidad Militar +9%"
    },
    {
        "id": "diet_498",
        "name": "Yantra Hepta-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4750,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +15% / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_499",
        "name": "Yantra Hepta-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4600,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_500",
        "name": "Yantra Hepta-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4800,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +1 / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_501",
        "name": "Yantra Hepta-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 8,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +8 / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_502",
        "name": "Yantra Hepta-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4300,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -30,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Granos Diarios -30 / Habilidad Militar +4%"
    },
    {
        "id": "diet_503",
        "name": "Yantra Hepta-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4500,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_504",
        "name": "Yantra Hepta-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5850,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": 10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +25% / Granos Diarios +10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_505",
        "name": "Yantra Hepta-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5650,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Moral +2 / Velocidad Meditación +15% / Habilidad Militar +4%"
    },
    {
        "id": "diet_506",
        "name": "Yantra Hepta-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5750,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": 0,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +15% / Habilidad Militar +9%"
    },
    {
        "id": "diet_507",
        "name": "Yantra Hepta-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +30% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_508",
        "name": "Yantra Hepta-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5350,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +15% / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_509",
        "name": "Yantra Hepta-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5550,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.15,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +15% / Habilidad Militar +8%"
    },
    {
        "id": "diet_510",
        "name": "Yantra Hepta-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5950,
        "effects": {
            "defense": 8,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +8 / Moral +1 / Velocidad Meditación +15% / Habilidad Militar +4%"
    },
    {
        "id": "diet_511",
        "name": "Yantra Hepta-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5050,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.15,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +15% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_512",
        "name": "Yantra Hepta-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5250,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +25% / Habilidad Militar +4%"
    },
    {
        "id": "diet_513",
        "name": "Yantra Hepta-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5400,
        "effects": {
            "defense": 7,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Moral +4 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_514",
        "name": "Yantra Hepta-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 8,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +8 / Moral +4 / Habilidad Militar +4%"
    },
    {
        "id": "diet_515",
        "name": "Yantra Hepta-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5300,
        "effects": {
            "defense": 5,
            "moral": 5,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +5 / Moral +5 / Habilidad Militar +9%"
    },
    {
        "id": "diet_516",
        "name": "Yantra Hepta-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5050,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.15,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +15% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_517",
        "name": "Yantra Hepta-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4900,
        "effects": {
            "defense": 7,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Moral +3 / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_518",
        "name": "Yantra Hepta-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5100,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +4 / Habilidad Militar +8%"
    },
    {
        "id": "diet_519",
        "name": "Yantra Hepta-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 9,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +9 / Moral +3 / Habilidad Militar +4%"
    },
    {
        "id": "diet_520",
        "name": "Yantra Hepta-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4600,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +3 / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_521",
        "name": "Yantra Hepta-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4800,
        "effects": {
            "defense": 5,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +5 / Velocidad Meditación +10% / Habilidad Militar +4%"
    },
    {
        "id": "diet_522",
        "name": "Yantra Hepta-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6400,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": 5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +20% / Granos Diarios +5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_523",
        "name": "Yantra Hepta-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6200,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +7 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_524",
        "name": "Yantra Hepta-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6300,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +13%"
    },
    {
        "id": "diet_525",
        "name": "Yantra Hepta-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6050,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +25% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_526",
        "name": "Yantra Hepta-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5900,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +6 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_527",
        "name": "Yantra Hepta-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6100,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_528",
        "name": "Yantra Hepta-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6500,
        "effects": {
            "defense": 8,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +8 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_529",
        "name": "Yantra Hepta-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_530",
        "name": "Yantra Hepta-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5800,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_531",
        "name": "Yantra Hepta-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6000,
        "effects": {
            "defense": 9,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +9 / Moral +1 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_532",
        "name": "Yantra Hepta-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5800,
        "effects": {
            "defense": 10,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +10 / Moral +1 / Habilidad Militar +4%"
    },
    {
        "id": "diet_533",
        "name": "Yantra Hepta-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5900,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +7 / Moral +2 / Habilidad Militar +9%"
    },
    {
        "id": "diet_534",
        "name": "Yantra Hepta-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5650,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Velocidad Meditación +15% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_535",
        "name": "Yantra Hepta-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 9,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +9 / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_536",
        "name": "Yantra Hepta-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5700,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +7 / Moral +1 / Habilidad Militar +8%"
    },
    {
        "id": "diet_537",
        "name": "Yantra Hepta-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6100,
        "effects": {
            "defense": 11,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +11 / Habilidad Militar +4%"
    },
    {
        "id": "diet_538",
        "name": "Yantra Hepta-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 8,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +8 / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_539",
        "name": "Yantra Hepta-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5400,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +4%"
    },
    {
        "id": "diet_540",
        "name": "Yantra Hepta-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5400,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Moral +1 / Velocidad Meditación +10% / Habilidad Militar +4%"
    },
    {
        "id": "diet_541",
        "name": "Yantra Hepta-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 8,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +8 / Moral +1 / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_542",
        "name": "Yantra Hepta-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5300,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +5 / Moral +2 / Granos Diarios -10 / Habilidad Militar +9%"
    },
    {
        "id": "diet_543",
        "name": "Yantra Hepta-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5050,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Velocidad Meditación +15% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_544",
        "name": "Yantra Hepta-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4900,
        "effects": {
            "defense": 7,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_545",
        "name": "Yantra Hepta-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5100,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +1 / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_546",
        "name": "Yantra Hepta-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 9,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +9 / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_547",
        "name": "Yantra Hepta-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4600,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_548",
        "name": "Yantra Hepta-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4800,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_549",
        "name": "Yantra Hepta-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +3 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_550",
        "name": "Yantra Hepta-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5400,
        "effects": {
            "defense": 7,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +7 / Moral +3 / Velocidad Meditación +10% / Habilidad Militar +4%"
    },
    {
        "id": "diet_551",
        "name": "Yantra Hepta-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +10% / Habilidad Militar +9%"
    },
    {
        "id": "diet_552",
        "name": "Yantra Hepta-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5250,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -5,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -5 / Habilidad Militar +4%"
    },
    {
        "id": "diet_553",
        "name": "Yantra Hepta-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5100,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_554",
        "name": "Yantra Hepta-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_555",
        "name": "Yantra Hepta-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5700,
        "effects": {
            "defense": 8,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +8 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +4%"
    },
    {
        "id": "diet_556",
        "name": "Yantra Hepta-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 4800,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_557",
        "name": "Yantra Hepta-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5000,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +20% / Habilidad Militar +4%"
    },
    {
        "id": "diet_558",
        "name": "Yantra Hepta-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6300,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_559",
        "name": "Yantra Hepta-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6100,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +7 / Moral +1 / Habilidad Militar +10%"
    },
    {
        "id": "diet_560",
        "name": "Yantra Hepta-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6200,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 15
        },
        "effectDesc": "Defensa +4 / Moral +2 / Habilidad Militar +15%"
    },
    {
        "id": "diet_561",
        "name": "Yantra Hepta-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5950,
        "effects": {
            "defense": 4,
            "moral": 0,
            "speed": 0.15,
            "resourceMod": -5,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +4 / Velocidad Meditación +15% / Granos Diarios -5 / Habilidad Militar +10%"
    },
    {
        "id": "diet_562",
        "name": "Yantra Hepta-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5800,
        "effects": {
            "defense": 6,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -10,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +6 / Granos Diarios -10 / Habilidad Militar +10%"
    },
    {
        "id": "diet_563",
        "name": "Yantra Hepta-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6000,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +4 / Moral +1 / Habilidad Militar +14%"
    },
    {
        "id": "diet_564",
        "name": "Yantra Hepta-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 6400,
        "effects": {
            "defense": 8,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": 0,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +8 / Habilidad Militar +10%"
    },
    {
        "id": "diet_565",
        "name": "Yantra Hepta-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 5,
            "moral": 0,
            "speed": 0.0,
            "resourceMod": -15,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +5 / Granos Diarios -15 / Habilidad Militar +10%"
    },
    {
        "id": "diet_566",
        "name": "Yantra Hepta-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de granos de trigo entero hervidos combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración construye una columna vertebral sólida, alineando la energía a lo largo de la cuarta vértebra al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> Se proyecta una victoria sólida y firme; el ejército se mantiene erguido frente a la tormenta como un cilindro de acero sagrado.",
        "icon": "🌾",
        "category": "vitality",
        "cost": 5700,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +10%"
    },
    {
        "id": "diet_567",
        "name": "Yantra Octa-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5800,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +5 / Velocidad Meditación +20% / Granos Diarios +20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_568",
        "name": "Yantra Octa-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +5 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_569",
        "name": "Yantra Octa-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5700,
        "effects": {
            "defense": 2,
            "moral": 6,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +2 / Moral +6 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +13%"
    },
    {
        "id": "diet_570",
        "name": "Yantra Octa-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5450,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": 5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +25% / Granos Diarios +5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_571",
        "name": "Yantra Octa-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_572",
        "name": "Yantra Octa-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_573",
        "name": "Yantra Octa-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5900,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +6 / Moral +4 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_574",
        "name": "Yantra Octa-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_575",
        "name": "Yantra Octa-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 2,
            "moral": 6,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +6 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_576",
        "name": "Yantra Octa-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +20% / Granos Diarios +5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_577",
        "name": "Yantra Octa-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_578",
        "name": "Yantra Octa-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5100,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 13
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +13%"
    },
    {
        "id": "diet_579",
        "name": "Yantra Octa-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4850,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +25% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_580",
        "name": "Yantra Octa-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4700,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_581",
        "name": "Yantra Octa-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4900,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 12
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_582",
        "name": "Yantra Octa-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_583",
        "name": "Yantra Octa-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4400,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_584",
        "name": "Yantra Octa-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4600,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_585",
        "name": "Yantra Octa-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5950,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.35,
            "resourceMod": 20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +35% / Granos Diarios +20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_586",
        "name": "Yantra Octa-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5750,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +25% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_587",
        "name": "Yantra Octa-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5850,
        "effects": {
            "defense": 0,
            "moral": 5,
            "speed": 0.25,
            "resourceMod": 10,
            "combatSkill": 13
        },
        "effectDesc": "Moral +5 / Velocidad Meditación +25% / Granos Diarios +10 / Habilidad Militar +13%"
    },
    {
        "id": "diet_588",
        "name": "Yantra Octa-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.4,
            "resourceMod": 5,
            "combatSkill": 8
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +40% / Granos Diarios +5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_589",
        "name": "Yantra Octa-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5450,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +25% / Habilidad Militar +8%"
    },
    {
        "id": "diet_590",
        "name": "Yantra Octa-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5650,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": 10,
            "combatSkill": 12
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +25% / Granos Diarios +10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_591",
        "name": "Yantra Octa-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6050,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +25% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_592",
        "name": "Yantra Octa-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5150,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +25% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_593",
        "name": "Yantra Octa-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5350,
        "effects": {
            "defense": 0,
            "moral": 5,
            "speed": 0.35,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Moral +5 / Velocidad Meditación +35% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_594",
        "name": "Yantra Octa-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 6,
            "speed": 0.2,
            "resourceMod": 20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +6 / Velocidad Meditación +20% / Granos Diarios +20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_595",
        "name": "Yantra Octa-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 6,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +6 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_596",
        "name": "Yantra Octa-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5400,
        "effects": {
            "defense": 1,
            "moral": 7,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +1 / Moral +7 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +13%"
    },
    {
        "id": "diet_597",
        "name": "Yantra Octa-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5150,
        "effects": {
            "defense": 1,
            "moral": 5,
            "speed": 0.25,
            "resourceMod": 5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +5 / Velocidad Meditación +25% / Granos Diarios +5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_598",
        "name": "Yantra Octa-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +5 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_599",
        "name": "Yantra Octa-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 1,
            "moral": 6,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +1 / Moral +6 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_600",
        "name": "Yantra Octa-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +5 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_601",
        "name": "Yantra Octa-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4700,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_602",
        "name": "Yantra Octa-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4900,
        "effects": {
            "defense": 1,
            "moral": 7,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +7 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_603",
        "name": "Yantra Octa-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6500,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": 15,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +30% / Granos Diarios +15 / Habilidad Militar +12%"
    },
    {
        "id": "diet_604",
        "name": "Yantra Octa-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6300,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 5,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +20% / Granos Diarios +5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_605",
        "name": "Yantra Octa-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6400,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 5,
            "combatSkill": 17
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +20% / Granos Diarios +5 / Habilidad Militar +17%"
    },
    {
        "id": "diet_606",
        "name": "Yantra Octa-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6150,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.35,
            "resourceMod": 0,
            "combatSkill": 12
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +35% / Habilidad Militar +12%"
    },
    {
        "id": "diet_607",
        "name": "Yantra Octa-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6000,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_608",
        "name": "Yantra Octa-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6200,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 5,
            "combatSkill": 16
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +20% / Granos Diarios +5 / Habilidad Militar +16%"
    },
    {
        "id": "diet_609",
        "name": "Yantra Octa-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6600,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": 5,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +20% / Granos Diarios +5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_610",
        "name": "Yantra Octa-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5700,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -10,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_611",
        "name": "Yantra Octa-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5900,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.3,
            "resourceMod": 5,
            "combatSkill": 12
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +30% / Granos Diarios +5 / Habilidad Militar +12%"
    },
    {
        "id": "diet_612",
        "name": "Yantra Octa-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6100,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +20% / Granos Diarios +20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_613",
        "name": "Yantra Octa-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5900,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +6 / Moral +3 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_614",
        "name": "Yantra Octa-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6000,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +13%"
    },
    {
        "id": "diet_615",
        "name": "Yantra Octa-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5750,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": 5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +25% / Granos Diarios +5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_616",
        "name": "Yantra Octa-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_617",
        "name": "Yantra Octa-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5800,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_618",
        "name": "Yantra Octa-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6200,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +7 / Moral +2 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_619",
        "name": "Yantra Octa-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_620",
        "name": "Yantra Octa-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_621",
        "name": "Yantra Octa-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_622",
        "name": "Yantra Octa-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5300,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_623",
        "name": "Yantra Octa-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5400,
        "effects": {
            "defense": 1,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 13
        },
        "effectDesc": "Defensa +1 / Moral +4 / Velocidad Meditación +10% / Habilidad Militar +13%"
    },
    {
        "id": "diet_624",
        "name": "Yantra Octa-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5150,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_625",
        "name": "Yantra Octa-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5000,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_626",
        "name": "Yantra Octa-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 1,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 12
        },
        "effectDesc": "Defensa +1 / Moral +3 / Velocidad Meditación +10% / Habilidad Militar +12%"
    },
    {
        "id": "diet_627",
        "name": "Yantra Octa-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +8%"
    },
    {
        "id": "diet_628",
        "name": "Yantra Octa-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4700,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +8%"
    },
    {
        "id": "diet_629",
        "name": "Yantra Octa-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4900,
        "effects": {
            "defense": 1,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +4 / Velocidad Meditación +20% / Habilidad Militar +8%"
    },
    {
        "id": "diet_630",
        "name": "Yantra Octa-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5700,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.3,
            "resourceMod": 20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +30% / Granos Diarios +20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_631",
        "name": "Yantra Octa-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5500,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +3 / Moral +5 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_632",
        "name": "Yantra Octa-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 0,
            "moral": 6,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 13
        },
        "effectDesc": "Moral +6 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +13%"
    },
    {
        "id": "diet_633",
        "name": "Yantra Octa-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5350,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.35,
            "resourceMod": 5,
            "combatSkill": 8
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +35% / Granos Diarios +5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_634",
        "name": "Yantra Octa-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5200,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 0,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +20% / Habilidad Militar +8%"
    },
    {
        "id": "diet_635",
        "name": "Yantra Octa-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5400,
        "effects": {
            "defense": 0,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 12
        },
        "effectDesc": "Moral +5 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +12%"
    },
    {
        "id": "diet_636",
        "name": "Yantra Octa-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5800,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_637",
        "name": "Yantra Octa-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 4900,
        "effects": {
            "defense": 1,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +1 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +8%"
    },
    {
        "id": "diet_638",
        "name": "Yantra Octa-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5100,
        "effects": {
            "defense": 0,
            "moral": 6,
            "speed": 0.3,
            "resourceMod": 10,
            "combatSkill": 8
        },
        "effectDesc": "Moral +6 / Velocidad Meditación +30% / Granos Diarios +10 / Habilidad Militar +8%"
    },
    {
        "id": "diet_639",
        "name": "Yantra Octa-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6400,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": 20,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +20% / Granos Diarios +20 / Habilidad Militar +14%"
    },
    {
        "id": "diet_640",
        "name": "Yantra Octa-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6200,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +14%"
    },
    {
        "id": "diet_641",
        "name": "Yantra Octa-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6300,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 19
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +19%"
    },
    {
        "id": "diet_642",
        "name": "Yantra Octa-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6050,
        "effects": {
            "defense": 0,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": 5,
            "combatSkill": 14
        },
        "effectDesc": "Moral +2 / Velocidad Meditación +25% / Granos Diarios +5 / Habilidad Militar +14%"
    },
    {
        "id": "diet_643",
        "name": "Yantra Octa-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5900,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 0,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +10% / Habilidad Militar +14%"
    },
    {
        "id": "diet_644",
        "name": "Yantra Octa-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6100,
        "effects": {
            "defense": 0,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 18
        },
        "effectDesc": "Moral +3 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +18%"
    },
    {
        "id": "diet_645",
        "name": "Yantra Octa-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 6500,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": 10,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +10% / Granos Diarios +10 / Habilidad Militar +14%"
    },
    {
        "id": "diet_646",
        "name": "Yantra Octa-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5600,
        "effects": {
            "defense": 1,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -5,
            "combatSkill": 14
        },
        "effectDesc": "Defensa +1 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -5 / Habilidad Militar +14%"
    },
    {
        "id": "diet_647",
        "name": "Yantra Octa-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de berenjena energizante y frutas P (duraznos, ciruelas o papaya) combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración recarga los centros glandulares inferiores, transformando la energía vital en creatividad pura al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria es un estallido de energía creativa y coraje; el enemigo se repliega ante el ímpetu invencible de nuestras tropas.",
        "icon": "🍆",
        "category": "vitality",
        "cost": 5800,
        "effects": {
            "defense": 0,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": 10,
            "combatSkill": 14
        },
        "effectDesc": "Moral +4 / Velocidad Meditación +20% / Granos Diarios +10 / Habilidad Militar +14%"
    },
    {
        "id": "diet_648",
        "name": "Yantra Nona-Tetraedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4800,
        "effects": {
            "defense": 6,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -5"
    },
    {
        "id": "diet_649",
        "name": "Yantra Nona-Tetraedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 7,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -15"
    },
    {
        "id": "diet_650",
        "name": "Yantra Nona-Tetraedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +4 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +5%"
    },
    {
        "id": "diet_651",
        "name": "Yantra Nona-Tetraedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4450,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +25% / Granos Diarios -20"
    },
    {
        "id": "diet_652",
        "name": "Yantra Nona-Tetraedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -25"
    },
    {
        "id": "diet_653",
        "name": "Yantra Nona-Tetraedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_654",
        "name": "Yantra Nona-Tetraedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4900,
        "effects": {
            "defense": 8,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +8 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -15"
    },
    {
        "id": "diet_655",
        "name": "Yantra Nona-Tetraedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -30"
    },
    {
        "id": "diet_656",
        "name": "Yantra Nona-Tetraedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo fresco de zanahoria, remolacha y apio y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que fortalece la flexibilidad ante la inarmonía exterior, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +5 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_657",
        "name": "Yantra Nona-Octaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -20"
    },
    {
        "id": "diet_658",
        "name": "Yantra Nona-Octaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -30"
    },
    {
        "id": "diet_659",
        "name": "Yantra Nona-Octaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -30 / Habilidad Militar +5%"
    },
    {
        "id": "diet_660",
        "name": "Yantra Nona-Octaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3850,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -35"
    },
    {
        "id": "diet_661",
        "name": "Yantra Nona-Octaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -40,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -40"
    },
    {
        "id": "diet_662",
        "name": "Yantra Nona-Octaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -30 / Habilidad Militar +4%"
    },
    {
        "id": "diet_663",
        "name": "Yantra Nona-Octaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -30"
    },
    {
        "id": "diet_664",
        "name": "Yantra Nona-Octaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3400,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -45,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -45"
    },
    {
        "id": "diet_665",
        "name": "Yantra Nona-Octaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de espinaca y zanahoria y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que estimula la eliminación de toxinas por vía urinaria, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3600,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -30"
    },
    {
        "id": "diet_666",
        "name": "Yantra Nona-Dodecaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4950,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.35,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +35% / Granos Diarios -5"
    },
    {
        "id": "diet_667",
        "name": "Yantra Nona-Dodecaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4750,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +25% / Granos Diarios -15"
    },
    {
        "id": "diet_668",
        "name": "Yantra Nona-Dodecaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4850,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +5%"
    },
    {
        "id": "diet_669",
        "name": "Yantra Nona-Dodecaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.4,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +40% / Granos Diarios -20"
    },
    {
        "id": "diet_670",
        "name": "Yantra Nona-Dodecaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4450,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -25"
    },
    {
        "id": "diet_671",
        "name": "Yantra Nona-Dodecaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4650,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +25% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_672",
        "name": "Yantra Nona-Dodecaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5050,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -15"
    },
    {
        "id": "diet_673",
        "name": "Yantra Nona-Dodecaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4150,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.25,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +25% / Granos Diarios -30"
    },
    {
        "id": "diet_674",
        "name": "Yantra Nona-Dodecaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de jengibre hervido con miel y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que combate la fatiga y disuelve el cansancio lumbar, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4350,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.35,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +35% / Granos Diarios -15"
    },
    {
        "id": "diet_675",
        "name": "Yantra Nona-Icosaedro Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +5 / Velocidad Meditación +20% / Granos Diarios -5"
    },
    {
        "id": "diet_676",
        "name": "Yantra Nona-Icosaedro Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -15"
    },
    {
        "id": "diet_677",
        "name": "Yantra Nona-Icosaedro Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 3,
            "moral": 6,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +3 / Moral +6 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +5%"
    },
    {
        "id": "diet_678",
        "name": "Yantra Nona-Icosaedro Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4150,
        "effects": {
            "defense": 3,
            "moral": 4,
            "speed": 0.25,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +4 / Velocidad Meditación +25% / Granos Diarios -20"
    },
    {
        "id": "diet_679",
        "name": "Yantra Nona-Icosaedro Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -25"
    },
    {
        "id": "diet_680",
        "name": "Yantra Nona-Icosaedro Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 3,
            "moral": 5,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +5 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_681",
        "name": "Yantra Nona-Icosaedro Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 7,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -15"
    },
    {
        "id": "diet_682",
        "name": "Yantra Nona-Icosaedro Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +10% / Granos Diarios -30"
    },
    {
        "id": "diet_683",
        "name": "Yantra Nona-Icosaedro Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de pepino refrescante y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que apaca el fuego de la ira eliminando discusiones tontas en la tropa, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 6,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +6 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_684",
        "name": "Yantra Nona-Prisma Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5500,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.3,
            "resourceMod": -10,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +30% / Granos Diarios -10 / Habilidad Militar +4%"
    },
    {
        "id": "diet_685",
        "name": "Yantra Nona-Prisma Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5300,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_686",
        "name": "Yantra Nona-Prisma Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5400,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 9
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -20 / Habilidad Militar +9%"
    },
    {
        "id": "diet_687",
        "name": "Yantra Nona-Prisma Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5150,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.35,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +35% / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_688",
        "name": "Yantra Nona-Prisma Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5000,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -30,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -30 / Habilidad Militar +4%"
    },
    {
        "id": "diet_689",
        "name": "Yantra Nona-Prisma Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5200,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 8
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -20 / Habilidad Militar +8%"
    },
    {
        "id": "diet_690",
        "name": "Yantra Nona-Prisma Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5600,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_691",
        "name": "Yantra Nona-Prisma Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.2,
            "resourceMod": -35,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +20% / Granos Diarios -35 / Habilidad Militar +4%"
    },
    {
        "id": "diet_692",
        "name": "Yantra Nona-Prisma Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de toronja natural y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que equilibra el sistema endocrino y optimiza la diuresis, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4900,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.3,
            "resourceMod": -20,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +30% / Granos Diarios -20 / Habilidad Militar +4%"
    },
    {
        "id": "diet_693",
        "name": "Yantra Nona-Pirámide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5100,
        "effects": {
            "defense": 7,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -5"
    },
    {
        "id": "diet_694",
        "name": "Yantra Nona-Pirámide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4900,
        "effects": {
            "defense": 8,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +8 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15"
    },
    {
        "id": "diet_695",
        "name": "Yantra Nona-Pirámide Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5000,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +5%"
    },
    {
        "id": "diet_696",
        "name": "Yantra Nona-Pirámide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4750,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -20"
    },
    {
        "id": "diet_697",
        "name": "Yantra Nona-Pirámide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25"
    },
    {
        "id": "diet_698",
        "name": "Yantra Nona-Pirámide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4800,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_699",
        "name": "Yantra Nona-Pirámide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5200,
        "effects": {
            "defense": 9,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +9 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -15"
    },
    {
        "id": "diet_700",
        "name": "Yantra Nona-Pirámide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -30"
    },
    {
        "id": "diet_701",
        "name": "Yantra Nona-Pirámide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con yogur casero con cebolla picada y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que sana la inflamación del colon y previene la autotoxemia, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_702",
        "name": "Yantra Nona-Toroide Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_703",
        "name": "Yantra Nona-Toroide Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4300,
        "effects": {
            "defense": 6,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -25"
    },
    {
        "id": "diet_704",
        "name": "Yantra Nona-Toroide Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +5%"
    },
    {
        "id": "diet_705",
        "name": "Yantra Nona-Toroide Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4150,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -30"
    },
    {
        "id": "diet_706",
        "name": "Yantra Nona-Toroide Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4000,
        "effects": {
            "defense": 5,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -35,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -35"
    },
    {
        "id": "diet_707",
        "name": "Yantra Nona-Toroide Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 3,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +3 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +4%"
    },
    {
        "id": "diet_708",
        "name": "Yantra Nona-Toroide Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 7,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +7 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25"
    },
    {
        "id": "diet_709",
        "name": "Yantra Nona-Toroide Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3700,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -40,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -40"
    },
    {
        "id": "diet_710",
        "name": "Yantra Nona-Toroide Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de sandía con carella y ajo y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que depura el bazo e incrementa la asimilación del prana, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -25"
    },
    {
        "id": "diet_711",
        "name": "Yantra Nona-Vórtice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4700,
        "effects": {
            "defense": 4,
            "moral": 4,
            "speed": 0.3,
            "resourceMod": -5,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +4 / Velocidad Meditación +30% / Granos Diarios -5"
    },
    {
        "id": "diet_712",
        "name": "Yantra Nona-Vórtice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4500,
        "effects": {
            "defense": 5,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +5 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_713",
        "name": "Yantra Nona-Vórtice Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 5
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +5%"
    },
    {
        "id": "diet_714",
        "name": "Yantra Nona-Vórtice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4350,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.35,
            "resourceMod": -20,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +35% / Granos Diarios -20"
    },
    {
        "id": "diet_715",
        "name": "Yantra Nona-Vórtice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4200,
        "effects": {
            "defense": 4,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -25,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +4 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -25"
    },
    {
        "id": "diet_716",
        "name": "Yantra Nona-Vórtice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4400,
        "effects": {
            "defense": 2,
            "moral": 4,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 4
        },
        "effectDesc": "Defensa +2 / Moral +4 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +4%"
    },
    {
        "id": "diet_717",
        "name": "Yantra Nona-Vórtice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4800,
        "effects": {
            "defense": 6,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +6 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -15"
    },
    {
        "id": "diet_718",
        "name": "Yantra Nona-Vórtice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 3900,
        "effects": {
            "defense": 3,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -30,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +3 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -30"
    },
    {
        "id": "diet_719",
        "name": "Yantra Nona-Vórtice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con té de salvado con hojas de menta y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que calma el nerviosismo severo y previene la debilidad vocal, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4100,
        "effects": {
            "defense": 2,
            "moral": 5,
            "speed": 0.3,
            "resourceMod": -15,
            "combatSkill": 0
        },
        "effectDesc": "Defensa +2 / Moral +5 / Velocidad Meditación +30% / Granos Diarios -15"
    },
    {
        "id": "diet_720",
        "name": "Yantra Nona-Hélice Estrellado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con caldo de las raíces de la trinidad (ajo, cebolla y jengibre).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una vitalidad atómica e inmune indestructible.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5400,
        "effects": {
            "defense": 4,
            "moral": 2,
            "speed": 0.2,
            "resourceMod": -5,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +2 / Velocidad Meditación +20% / Granos Diarios -5 / Habilidad Militar +6%"
    },
    {
        "id": "diet_721",
        "name": "Yantra Nona-Hélice Truncado",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con cúrcuma pura con aceite de almendras dulces (leche dorada).<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando articulaciones lubricadas y un resplandor dorado en el aura.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5200,
        "effects": {
            "defense": 5,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +5 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_722",
        "name": "Yantra Nona-Hélice Chato",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con pimienta negra molida y aceite de sésamo.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una mente alerta que repele los gases del letargo mental.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5300,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 11
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +11%"
    },
    {
        "id": "diet_723",
        "name": "Yantra Nona-Hélice Romboide",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con almendras peladas licuadas con miel.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando ojos agudos que ven a través de las proyecciones del enemigo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5050,
        "effects": {
            "defense": 2,
            "moral": 1,
            "speed": 0.25,
            "resourceMod": -20,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +1 / Velocidad Meditación +25% / Granos Diarios -20 / Habilidad Militar +6%"
    },
    {
        "id": "diet_724",
        "name": "Yantra Nona-Hélice Cuneiforme",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con ajo crudo triturado y perejil picado.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un escudo de defensa natural contra infecciones bacterianas.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4900,
        "effects": {
            "defense": 4,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -25,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +4 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -25 / Habilidad Militar +6%"
    },
    {
        "id": "diet_725",
        "name": "Yantra Nona-Hélice Oblicuo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con jugo de limón y lima ricos en vitamina C.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una circulación fluida libre de obstrucciones de moco.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5100,
        "effects": {
            "defense": 2,
            "moral": 2,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 10
        },
        "effectDesc": "Defensa +2 / Moral +2 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +10%"
    },
    {
        "id": "diet_726",
        "name": "Yantra Nona-Hélice Helicoidal",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con coco rallado y una cucharada de aceite de ricino.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando una solidez ósea inquebrantable que resiste el cansancio extremo.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 5500,
        "effects": {
            "defense": 6,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +6 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -15 / Habilidad Militar +6%"
    },
    {
        "id": "diet_727",
        "name": "Yantra Nona-Hélice Cóncavo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con semillas de psyllium hidratadas en sherbet frío.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un colon limpio que permite la ascensión de la energía Kundalini.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4600,
        "effects": {
            "defense": 3,
            "moral": 1,
            "speed": 0.1,
            "resourceMod": -30,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +3 / Moral +1 / Velocidad Meditación +10% / Granos Diarios -30 / Habilidad Militar +6%"
    },
    {
        "id": "diet_728",
        "name": "Yantra Nona-Hélice Convexo",
        "desc": "<b>Ingredientes:</b> Receta de calabacín, apio, perejil y menta licuados con requesón combinada con jugo de zanahoria, apio y pepino y potenciada con nuez moscada rallada y hebras de azafrán.<br><b>Fortaleza Espiritual:</b> Esta ración barre los residuos acumulados en los intestinos, elevando la frecuencia vibracional del templo físico al tiempo que disuelve las obstrucciones y cálculos de la vesícula, consolidando un equilibrio de la presión sanguínea que induce calma y valentía.<br><b>Perspectiva de Victoria:</b> La victoria se define por el orden y la pureza interna; la guarnición opera como una coreografía divina y sincronizada de Dios.",
        "icon": "🍲",
        "category": "digestive",
        "cost": 4800,
        "effects": {
            "defense": 2,
            "moral": 3,
            "speed": 0.2,
            "resourceMod": -15,
            "combatSkill": 6
        },
        "effectDesc": "Defensa +2 / Moral +3 / Velocidad Meditación +20% / Granos Diarios -15 / Habilidad Militar +6%"
    }
];
