// ============================================================
// CATALOGO — schede prodotto
// ============================================================
const img = (f) => `/img/${f}`;

export const PRODUCTS = [
  {
    id: "top30-black-edition",
    name: "TOP 30 – Black Edition / Osmosi",
    category: "casa",
    sub: "Da appoggio",
    badge: "Più richiesto",
    
    // Immagine futuristica mostrata SOLO NELLA GRIGLIA ESTERNA
    img: img("top30 osmosi.jpg"),
    
    // Le 4 FOTO INTERNE per il carosello del popup (specifico per questo modello)
    popupImages: [
      img("top 30 real.jpg"),          // 1ª foto: Foto reale Top 30
      img("top 30 render.jpg"),        // 2ª foto: Render Top 30
      img("top 30 osmosi real.jpg"),   // 3ª foto: Foto reale Top 30 Osmosi
      img("top 30 osmosi render.jpg")  // 4ª foto: Render Top 30 Osmosi
    ],

    tagline: "Erogatore d'acqua compatto da appoggio con tecnologia a banco di ghiaccio.",
    description: "TOP 30 è il depuratore ideale per la casa che unisce alte prestazioni e design elegante in skinplate nero e PMMA. Eroga acqua naturale fredda, liscia e frizzante.",
    specs: [
      ["Pressione Ingresso Acqua", "min 1 bar – max 4 bar"],
      ["Pompa", "200 lt/h a paletta"],
      ["Motore Pompa", "150 watt"],
      ["Dimensione Saturatore", "9x18 cm – 0,76 lt in acciaio INOX AISI 316 L brevettato"],
      ["Temperatura Esercizio", "2° C – 40° C"],
      ["Filtrazione", "Esterna"],
      ["Alimentazione Elettrica", "220V 50 Hz"],
      ["Dimensioni Cm (LxPxH)", "17x50,5x44 (P comprensiva di raccogli gocce)"],
      ["Vasca Refrigerante", "3,5 litri circa"],
      ["Controllo Banco Di Ghiaccio", "termostato da -2°C a 7°C"],
      ["Modello Compressore", "GD40MB 4cm³ 1/8hp"],
      ["Riciclo Acqua Fredda Per Erogatore Esterno", "SOLO SU RICHIESTA"]
    ]
  },
  {
    id: "osmo-quark",
    name: "Osmo Quark",
    category: "casa",
    sub: "Osmosi inversa",
    badge: "Alta efficienza",
    
    img: img("osmo quark.jpg"),
    
    // Le 2 foto interne per il carosello del popup
    popupImages: [
      img("osmo quark real.jpg"),    
      img("osmo quark render.jpg")   
    ],

    tagline: "Impianto ad osmosi inversa compatto per acqua oligominerale pura, naturale e frizzante refrigerata.",
    description: "Il depuratore per acqua ad osmosi inversa OSMO QUARK è l'impianto per la casa più completo della sua categoria. Si distingue per la sua compattezza e grande efficienza, erogando acqua oligominerale leggera, naturale e frizzante refrigerata.",
    specs: [
      ["Pressione Ingresso Acqua", "min 1,5 bar – max 4 bar"],
      ["Temperatura Esercizio", "2° C – 40° C"],
      ["Alimentazione Elettrica", "220V 50Hz"],
      ["Dimensioni (LxPxA)", "27x39x34 cm"],
      ["Pompa Acqua", "200 lt/h a paletta"],
      ["Motore per pompa acqua", "165 watt"],
      ["Dimensione Saturatore", "12x12 cm – 0,88 lt"],
      ["Vasca Refrigerante", "5 litri circa"],
      ["Controllo Banco Di Ghiaccio", "termostato 2° C – 7° C"],
      ["Modello Compressore", "GD40MB 4cm³ 1/8hp"],
      ["Produzione Osmosi", "110 lt/h"],
      ["Membrane", "2 da 180GPD"],
      ["Riciclo Acqua – Acqua Fredda per Erogatore Esterno", "NO"],
      ["Potenza Assorbita", "270 watt"],
      ["Prefiltrazione", "Esterna"]
    ]
  },
  {
    id: "gel-30-black-edition", 
    name: "Gel 30 Sottolavello – Black Edition", 
    category: "casa", 
    sub: "Sottolavello", 
    badge: "Nuovo modello",
    
    img: img("gel30black.jpg"),
    
    popupImages: [
      img("gel 30 black real.jpg"),
      img("gel30black render.jpg")
    ],

    tagline: "Impianto acqua casa con termoregolatore digitale, installazione comoda sotto il lavello.",
    description: "Eroga acqua naturale fredda, liscia e frizzante. Soluzione ideale per soddisfare tutte le esigenze della famiglia: bere, lavare, cucinare o preparare bevande. Interamente costruita con materiali atossici certificati, struttura in skinplate nero.",
    specs: [
      ["Pressione Ingresso Acqua", "min 1 bar – max 4 bar"],
      ["Pompa", "200 lt/h a paletta"],
      ["Dimensione Saturatore", "9x18 cm – 0,76 lt"],
      ["Filtrazione", "esterna"],
      ["Alimentazione Elettrica", "220V 50 Hz – cavo presa IEC"],
      ["Dimensioni Cm (LxPxH)", "17x34x44"],
      ["Controllo Banco Di Ghiaccio", "termoregolatore digitale da -1,5°C a +32°C"],
      ["Modello Compressore", "4cm³ 1/8hp"],
      ["Materiale struttura", "skinplate nero"]
    ]
  },
  {
    id: "osmo-slim", 
    name: "Osmo Slim", 
    category: "casa", 
    sub: "Sottolavello / Sottozoccolo", 
    badge: "Produzione diretta",
    
    img: img("osmo slim.jpg"),
    
    popupImages: [
      img("osmo slim real.jpg"),
      img("osmo slim render.jpg")
    ],

    tagline: "Impianto ad osmosi inversa per la casa a produzione diretta, semplice ed efficace.",
    description: "Eroga acqua oligominerale pura direttamente e in sicurezza, senza acqua stagnante in serbatoi d'accumulo. Rimuove nitrati, metalli pesanti, batteri, virus e pesticidi, ideale per bere, cucinare e preparare bevande.",
    specs: [
      ["Pressione Ingresso Acqua", "min 1 bar – max 4 bar"],
      ["Pompa", "200 lt/h a paletta"],
      ["Motore Pompa", "150 watt"],
      ["Temperatura Esercizio", "2° C – 40° C"],
      ["Filtrazione", "Interna"],
      ["Dimensione Saturatore", "9x18 cm – 0,76 litri"],
      ["Alimentazione Elettrica", "220V 50 Hz"],
      ["Dimensioni Cm (LxPxH)", "40x40x10,4"],
      ["Produzione Osmosi", "110 lt/h"],
      ["Membrane", "2 da 180 GPD"]
    ]
  },
  {
    id: "micro-inline-uv", 
    name: "Micro in-line UV", 
    category: "casa", 
    sub: "Sterilizzatore UV", 
    badge: "Raggi UV",
    
    img: img("microline uv ok.jpg"),
    
    popupImages: [
      img("microline uv real.jpg"),
      img("microline uv render.jpg")
    ],

    tagline: "Sterilizzatore domestico per trasformare il rubinetto di casa in una sorgente d'acqua pura.",
    description: "Sfrutta la microfiltrazione sinterizzata e un sistema di debatterizzazione a raggi UV per eliminare trascinamenti e sostanze chimiche, prevenendo la proliferazione batterica. Dotato di contalitri digitale e struttura in acciaio INOX AISI 304.",
    specs: [
      ["Pressione Ingresso Acqua", "min 1 bar – max 4 bar"],
      ["Temperatura Esercizio", "2° C – 40° C"],
      ["Filtrazione", "Interna"],
      ["Dimensioni Cm (LxPxH)", "36x36x8"],
      ["Potenza Lampada UV", "11 W – 4 lt/min"],
      ["Materiale Struttura", "Acciaio INOX AISI 304"]
    ]
  },
  {
    id: "office-30", 
    name: "Office 30", 
    category: "ufficio",
    sub: "Erogatore a colonna", 
    badge: "Per l'ufficio",
    
    img: img("office 30.jpg"),
    
    popupImages: [
      img("office30 real.jpg"),
      img("office 30 render.jpg")
    ],

    tagline: "Il punto acqua dell'ufficio: naturale, fredda e frizzante.",
    description: "Erogatore a colonna allacciato alla rete idrica: nessun boccione da gestire, acqua sempre disponibile per team e ambienti di lavoro professionali.",
    specs: [
      ["Pressione Ingresso Acqua", "min 1,5 bar - max 4 bar"],
      ["Temperatura Esercizio", "2° C - 40° C"],
      ["Filtrazione", "interna o esterna"],
      ["Alimentazione Elettrica", "200V 50Hz - cavo presa IEC"],
      ["Dimensioni (LXPXA-CM)", "52,2x27x122"],
      ["Pompa Acqua", "150 lt/h a paletta o Pompa a membrana"],
      ["Vasca Refrigerante", "5 litri"],
      ["Modello Compressore", "GD40MB 4cm³ 1/8hp"],
      ["Potenza Assorbita", "230 watt"],
      ["Materiale Struttura", "Acciaio INOX AISI 304"]
    ]
  }
];

export const EXTRA_CATEGORIES = [
  { id: "miscelatori", label: "Miscelatori 3 vie" },
  { id: "co2", label: "Bombole CO2" },
  { id: "ricambi", label: "Filtri & Lampade UV" },
  { id: "manutenzione", label: "Manutenzione" }
];

const EXTRA_ITEMS = [
  {
    id: "miscelatore-1-via",
    name: "Miscelatore a una via",
    category: "miscelatori",
    badge: "Rubinetteria 1 Via supplementare",
    
    // Immagine esterna (griglia)
    img: img("rubinetto 1 via.jpg"),
    
    // 1 sola foto interna nel popup (contesto reale / installato)
    popupImages: [
      img("miscelatore 1 via A.jpg")
    ],

    tagline: "Rubinetto di prelievo a 1 via 1/4\" per acqua depurata.",
    description: "Rubinetto erogatore dal design elegante e pulito, ideale per l'erogazione di acqua filtrata, naturale o frizzante direttamente dal tuo impianto di depurazione sotto-lavello.",
    specs: [
      ["Codice", "10001033"],
      ["Peso", "0,681 Kg"],
      ["Tipologia", "Rubinetto di prelievo 1 via 1/4\""],
      ["Altezza totale", "300 mm"],
      ["Altezza bocca", "200 mm"],
      ["Sporgenza", "160 mm"]
    ]
  },
  {
    id: "miscelatore-3-vie-3031",
    name: "Miscelatore 3 Vie Professional",
    category: "miscelatori",
    badge: "Rubinetteria 3 Vie supplementare",
    
    img: img("miscelatore 3 vie.jpg"),
    popupImages: [
      img("miscela 3 vie.jpg")
    ],

    tagline: "Rubinetto di prelievo a 3 vie con erogazioni separate per acqua trattata.",
    description: "Rubinetto a 3 vie modello 3031 con comandi multipli indipendenti per la gestione dell'acqua naturale, fredda e frizzante. Disponibile in svariate finiture estetiche per adattarsi a ogni stile di cucina.",
    specs: [
      ["Codice", "10003031-CR"],
      ["Peso", "1.833 Kg"],
      ["Tipologia", "Rubinetto di prelievo 3 vie 6mm"],
      ["Foro lavello", "Ø 30 mm"],
      ["Altezza totale", "315 mm"],
      ["Altezza bocca", "253 mm"],
      ["Sporgenza", "165 mm"],
      ["Finiture / Varianti", "Cromo (CR), Bronzo (BR), Effetto Ottone (TF), Nero (NE), Granito (GA), Beige (GR), Acciaio Inox (NS), Bianco (BI), Rame (RA), Granito Nero (GN)"]
    ]
  },
  {
    id: "miscelatore-5-vie-5024",
    name: "Miscelatore 5 Vie Professional",
    category: "miscelatori",
    badge: "Miscelatore 5 Vie unico",
    
    img: img("miscelatore 5 vie.jpg"),
    popupImages: [
      img("miscela 5 vie.jpg")
    ],

    tagline: "Rubinetto evoluto a 5 vie per acqua di rete (calda/fredda) e sistemi di depurazione.",
    description: "Soluzione top di gamma con condotti interni completamente separati per evitare qualsiasi commistione tra l'acqua di rete e l'acqua trattata (filtrata, naturale o frizzante).",
    specs: [
      ["Codice", "10005024-CR"],
      ["Peso", "3 Kg"],
      ["Tipologia", "Rubinetto 5 vie 3/8\" con flussi separati"],
      ["Foro lavello", "Ø 52 mm"],
      ["Altezza totale", "320 mm"],
      ["Altezza bocca", "245 mm"],
      ["Sporgenza", "160 mm"],
      ["Connessioni", "Flessibili 10x1 M - 3/8\" F (37 cm) e Flessibili 3/8\" F - 3/8\" F (50 cm)"],
      ["Varianti colore", "Bianco (BI), Granito Avena (GA), Nero Opaco (NO), Nickel Spazzolato (NS), Cromo (CR)"]
    ]
  },
  {
    id: "miscelatore-5-vie-5026",
    name: "Miscelatore 5 Vie Design Plus",
    category: "miscelatori",
    badge: "Miscelatore 5 Vie unico geometrico",
    
    img: img("depuratore 5 vie plus.jpg"),
    popupImages: [
      img("Miscelatore 5 Vie Design Plus.jpg")
    ],

    tagline: "Rubinetto a 5 vie con design squadrato e flussi separati per acqua trattata e di rete.",
    description: "Modello 5026 dalle linee geometriche e contemporanee. Dotato di condotti completamente indipendenti per acqua calda e fredda di rete più tre vie dedicate ai sistemi di purificazione.",
    specs: [
      ["Codice", "10005026-BI"],
      ["Peso", "3 Kg"],
      ["Tipologia", "Rubinetto 5 vie 3/8\" a canna quadra squadrata"],
      ["Altezza totale", "315 mm"],
      ["Altezza bocca", "280 mm"],
      ["Sporgenza / Lunghezza", "235 mm"],
      ["Connessioni", "2x Flessibili 10x1 M - 3/8\" F (37 cm) e 3x innesti rapidi 1/4\""],
      ["Varianti colore", "Bianco (BI), Granito Avena (GA)"]
    ]
  },
  {
    id: "miscelatore-5-vie-molla-5339",
    name: "Miscelatore a Molla 5 Vie Professional",
    category: "miscelatori",
    badge: "Miscelatore 5 Vie con doccino estraibile",
    
    img: img("miscelatori.jpg"),
    popupImages: [
      img("Miscelatore a Molla 5 Vie Professional.jpg")
    ],

    tagline: "Rubinetto professionale a molla in acciaio inox 304 con 5 vie e flussi completamente separati.",
    description: "Modello 5339 top di gamma con doccetta a molla flessibile. Combina la praticità di un miscelatore da cucina professionale con la separazione totale dei condotti per acqua potabile e acqua depurata.",
    specs: [
      ["Codice", "10005339-BI"],
      ["Peso", "4 Kg"],
      ["Tipologia", "Rubinetto a molla 5 vie in acciaio inox AISI 304 3/8\""],
      ["Connessioni Acqua potabile", "2x flessibili 3/8\" F"],
      ["Connessioni Acqua depurata", "3x innesti rapidi 6mm"],
      ["Varianti colore / Finiture", "Bianco (BI), Ottone spazzolato (BR), Cromo (CR), Granito avena - fragranite (GA), Nero opaco (NEOP), Nickel spazzolato (NS)"]
    ]
  },
  {
    id: "watergas-co2-600g",
    name: "Bombola CO2 Monouso Watergas 600g",
    category: "co2",
    img: img("watergas co2 600g usa e getta.jpg"),
    popupImages: [
      img("Bombola CO2 Monouso Watergas 600g.jpg")
    ],
    badge: "Usa e getta - circa 70 litri di acqua gasata",
    tagline: "Bombola CO2 monouso E290 per refrigeratori d'acqua e bevande.",
    description: "Anidride carbonica a uso alimentare ad alta purezza (E290), ideale per gasare e refrigerare l'acqua in impianti domestici, osmosi inversa e microfiltrazione.",
    specs: [
      ["Gas", "Anidride Carbonica E290 (100% alimentare)"],
      ["Contenuto", "600 gr CO2 MAX"],
      ["Attacco", "11x1"],
      ["Pressione", "36 BAR a 0°C"],
      ["Dimensioni", "303 x 72 mm"],
      ["Applicazioni", "Osmosi Inversa, Refrigeratori, Microfiltrazione"]
    ]
  },
  {
    id: "bombola-co2-ricaricabile-2kg",
    name: "Bombola CO2 Ricaricabile in Acciaio 2 kg",
    category: "co2",
    badge: "Ricaricabile da rivenditori autorizzati",
    img: img("water co2 2kg ricaricabile.jpg"),
    popupImages: [
      img("Bombola CO2 Ricaricabile in Acciaio 2 kg.jpg")
    ],
    tagline: "Kit completo bombola CO2 ricaricabile da 2 kg con riduttore di pressione e raccordi.",
    description: "Soluzione professionale in acciaio ricaricabile adatta per sistemi di gasatura acqua e impianti B2B. Dotata di valvola residuale per mantenere una pressione interna di sicurezza e proteggere il contenitore durante l'utilizzo e le ricariche.",
    specs: [
      ["Codice", "19019001-08"],
      ["Capacità CO2", "2 kg"],
      ["Altezza", "458 mm"],
      ["Diametro", "116 mm"],
      ["Attacco bombola", "W21,8"],
      ["Riduttore di pressione", "Carbon-Tech (Campo di regolazione: 0-7 bar)"],
      ["Componenti inclusi", "Bombola 2kg con valvola residuale, riduttore di pressione CO2, terminale dritto e 1,5 mt di tubo LLDPE 1/4\""]
    ]
  },
  {
    id: "installazione-assistenza-su-richiesta",
    name: "Installazione e Assistenza su Richiesta",
    category: "manutenzione",
    badge: "Servizio a chiamata (non vincolante)",
    img: img("installazione e assistenza su richiesta.jpg"),
    popupImages: [
      img("installazione e assistenza su richiesta real.jpg")
    ],
    tagline: "Servizio professionale di installazione e supporto tecnico, senza obblighi o vincoli.",
    description: "Supporto tecnico specializzato per il montaggio, la manutenzione e il controllo periodico del tuo impianto di depurazione o erogazione. Disponibile interamente su richiesta, senza contratti vincolanti o abbonamenti obbligatori.",
    specs: [
      ["Tipologia", "Servizio tecnico a chiamata"],
      ["Vincoli", "Nessun obbligo o contratto di abbonamento"],
      ["Intervento", "Installazione, collaudo, sanificazione e manutenzione ordinaria/straordinaria"],
      ["Copertura", "Tecnici specializzati direttamente a domicilio"]
    ]
  },
];

export const ACCESSORIES = EXTRA_ITEMS.filter(
  (item) => item.category === "miscelatori" || item.category === "co2" || item.category === "manutenzione"
).map((e) => ({ 
  ...e, 
  category: "custom", 
  sub: e.badge || "Accessorio" 
}));