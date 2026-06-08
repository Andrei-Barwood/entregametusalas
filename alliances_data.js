const allFactions = [
    {
        id: "velo",
        name: "La Hermandad del Velo",
        type: "Orden Oculta",
        desc: "Protectores que operan en las sombras del desierto, guiando el prana y neutralizando al ego romano mediante la meditación y el sigilo.",
        perkDesc: "+15% de velocidad en la meditación de Amuletos y Fe.",
        perkKey: "meditation_speed",
        perkVal: 0.15,
        equity: 12,
        icon: "📿"
    },
    {
        id: "desterrados",
        name: "La Cofradía de los Desterrados",
        type: "Rebelión Agrícola",
        desc: "Trabajadores y labradores de las dunas y palmerales alzados en armas por la dignidad del espíritu y la liberación de la servidumbre.",
        perkDesc: "-15% de costo en granos en contratación y sueldo de Oficiales.",
        perkKey: "recruitment_cost",
        perkVal: 0.15,
        equity: 8,
        icon: "🌾"
    },
    {
        id: "bazares",
        name: "El Consorcio de los Bazares",
        type: "Gremio Comercial",
        desc: "Comerciantes y cambistas del Gran Bazar de Baghdad que financian y abastecen las líneas de resistencia de la ciudad.",
        perkDesc: "-10% de costo de suministros en todas las Misiones de Defensa.",
        perkKey: "mission_cost",
        perkVal: 0.10,
        equity: 15,
        icon: "🐫"
    },
    {
        id: "siwa",
        name: "Los Guardianes de Siwa",
        type: "Centinelas del Desierto",
        desc: "Últimos guardianes de la ley Medjay del desierto, guiados por el honor inquebrantable y el amparo de los débiles.",
        perkDesc: "+8 de Defensa diaria para resistir el asedio de las legiones romanas.",
        perkKey: "daily_defense",
        perkVal: 8,
        equity: 10,
        icon: "🛡️"
    },
    {
        id: "sabios",
        name: "La Alianza de los Sabios del Alminar",
        type: "Eruditos de la Sabiduría",
        desc: "Copistas y astrónomos de la Casa de la Sabiduría que combaten las mentiras e intrigas de los generales invasores con la razón divina.",
        perkDesc: "+10% de efectividad y duración en Maniobras Tácticas.",
        perkKey: "marketing_boost",
        perkVal: 0.10,
        equity: 6,
        icon: "📚"
    },
    {
        id: "jinetes",
        name: "Los Jinetes de la Estepa",
        type: "Beduinos Nómadas",
        desc: "Tribus errantes del norte de Mesopotamia que dominan los atajos del desierto y escoltan las caravanas bajo tormentas de arena.",
        perkDesc: "+15% de recursos obtenidos en misiones de Escolta de Convoy y Cosecha.",
        perkKey: "escort_harvest_bonus",
        perkVal: 0.15,
        equity: 14,
        icon: "🐎"
    },
    {
        id: "sombras",
        name: "La Cofradía de las Sombras Urbanas",
        type: "Gremio de Acróbatas",
        desc: "Carteristas y ladronzuelos del puerto del Tigris que escalan los muros y confunden a los centinelas romanos con falsas alarmas.",
        perkDesc: "+10% de efectividad en misiones de Infiltración y Sabotaje.",
        perkKey: "sabotage_boost",
        perkVal: 0.10,
        equity: 5,
        icon: "🐈"
    },
    {
        id: "desertores",
        name: "Los Desertores de la Legión",
        type: "Soldados Defensores",
        desc: "Guerreros imperiales que renegaron de las cadenas del Senado romano para servir a la verdad y adiestrar a la guarnición en Baghdad.",
        perkDesc: "+5% de Habilidad de Combate base en todas las tropas de infantería contratadas.",
        perkKey: "skill_boost",
        perkVal: 0.05,
        equity: 11,
        icon: "⚔️"
    }
];
