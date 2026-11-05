// ============================================================
// CATALOGO — schede prodotto
// ============================================================
const img = (f) => `/img/${f}`;

export const PRODUCTS = [
  {
    id: "top30-black-edition",
    name: "TOP 30 – Black Edition",
    category: "casa",
    sub: "Da appoggio",
    badge: "Più richiesto",
    img: img("top30.jpg"),
    tagline: "Erogatore d'acqua compatto da appoggio con tecnologia a banco di ghiaccio.",
    description: "TOP 30 è il depuratore ideale per la casa che unisce alte prestazioni e design elegante in skinplate nero e PMMA. Eroga acqua naturale fredda, liscia e frizzante.",
    specs: [
      ["Tecnologia", "Banco di ghiaccio con termoregolatore digitale"],
      ["Acqua erogata", "Naturale fredda, liscia e frizzante"],
      ["Dimensioni", "17 x 50,5 x 44 cm (LxPxH)"],
      ["Vasca Refrigerante", "3,5 litri circa"],
      ["Alimentazione", "220V 50 Hz"],
      ["Materiali", "Skinplate nero, PMMA e acciaio inox"]
    ]
  },
  {
    id: "osmo-quark",
    name: "Osmo Quark",
    category: "casa",
    sub: "Osmosi inversa",
    badge: "Alta efficienza",
    img: img("osmo quark.jpg"),
    tagline: "Impianto ad osmosi inversa compatto per acqua oligominerale pura, naturale e frizzante refrigerata.",
    description: "OSMO QUARK è l'impianto per la casa più completo della sua categoria. Garantisce acqua oligominerale leggera e dal gusto gradevole, rimuovendo nitrati, metalli pesanti, batteri e pesticidi.",
    specs: [
      ["Tecnologia", "Osmosi inversa a produzione diretta"],
      ["Acqua erogata", "Naturale e frizzante refrigerata"],
      ["Dimensioni", "27 x 39 x 34 cm (LxPxA)"],
      ["Produzione Osmosi", "110 lt/h"],
      ["Vasca Refrigerante", "5 litri circa"],
      ["Alimentazione", "220V 50Hz"]
    ]
  },
  {
    id: "osmo-slim",
    name: "Osmo Slim",
    category: "casa",
    sub: "Sottolavello",
    badge: "Design compatto",
    img: img("osmo slim.jpg"),
    tagline: "Impianto ad osmosi inversa a produzione diretta, ultrapiatto per sottolavello o sottozoccolo.",
    description: "OSMO SLIM eroga acqua purificata in sicurezza ed evita la stagnazione del serbatoio d'accumulo. Garantisce acqua leggera e oligominerale, ideale per bere e cucinare.",
    specs: [
      ["Tecnologia", "Osmosi inversa a produzione diretta"],
      ["Installazione", "Sottolavello / Sottozoccolo"],
      ["Dimensioni", "40 x 40 x 10,4 cm (LxPxH)"],
      ["Produzione Osmosi", "110 lt/h"],
      ["Membrane", "2 da 180 GPD"],
      ["Alimentazione", "220V 50 Hz"]
    ]
  },
  {
    id: "uf-colonna-pro", name: "UF Colonna Pro", category: "ufficio", sub: "Erogatore a colonna", badge: "Per l'ufficio",
    img: img("p_colonna.jpg"),
    tagline: "Il punto acqua dell'ufficio: naturale, fredda e frizzante.",
    description: "Erogatore a colonna allacciato alla rete idrica: nessun boccione da gestire, acqua sempre disponibile per team fino a 40 persone.",
    specs: [["Tecnologia", "UF + lampada UV"], ["Erogazione", "Ambiente / Fredda / Frizzante"], ["Capacità frigo", "fino a 40 L/h"], ["Dimensioni", "L 32 × P 38 × H 110 cm"], ["Design", "Acciaio inox spazzolato e nero opaco"], ["Utenti consigliati", "15 – 40"]],
  },
];

export const EXTRA_CATEGORIES = [
  { id: "miscelatori", label: "Miscelatori 3 vie" },
  { id: "co2", label: "Bombole CO2" },
  { id: "ricambi", label: "Filtri & Lampade UV" },
  { id: "manutenzione", label: "Manutenzione" },
];

const EXTRA_ITEMS = [
  {
    id: "mix-arco", name: "Miscelatore Arco 3 vie", category: "miscelatori", img: img("x_mixer.jpg"),
    tagline: "Acqua di rete + acqua depurata da un unico rubinetto.",
    description: "Due leve indipendenti: una per l'acqua calda/fredda di rete, una per l'acqua depurata naturale, fredda o frizzante. Canali interni separati.",
    specs: [["Vie", "3 (rete calda, rete fredda, depurata)"], ["Finitura", "Acciaio spazzolato / Nero opaco"], ["Bocca", "Girevole 360°"]],
  },
  {
    id: "mix-quadro", name: "Miscelatore Quadro 3 vie", category: "miscelatori", img: img("faucet.jpg"),
    tagline: "Linee squadrate per cucine contemporanee.",
    description: "Design minimale con canna alta e leva laterale dedicata all'acqua depurata. Compatibile con tutti i nostri sistemi sotto-lavello.",
    specs: [["Vie", "3"], ["Finitura", "Cromo / Inox"], ["Compatibilità", "TOP 30, UF Osmo 5"]],
  },
  {
    id: "co2-600", name: "Bombola CO2 600 g", category: "co2", img: img("x_co2.jpg"),
    tagline: "Formato compatto per uso domestico.",
    description: "Bombola in alluminio con anidride carbonica per uso alimentare (E290), per acqua frizzante direttamente dal rubinetto.",
    specs: [["Capacità", "600 g"], ["Materiale", "Alluminio"], ["Gas", "CO2 alimentare E290"]],
  },
  {
    id: "co2-2kg", name: "Bombola CO2 2 kg", category: "co2", img: img("sparkling.jpg"),
    tagline: "Per famiglie numerose e uffici.",
    description: "Maggiore autonomia per erogatori a colonna e sistemi da ufficio. Valvola con riduttore di pressione dedicato.",
    specs: [["Capacità", "2 kg"], ["Materiale", "Alluminio"], ["Gas", "CO2 alimentare E290"]],
  },
  {
    id: "co2-ricarica", name: "Servizio Ricarica CO2", category: "co2", img: img("x_co2.jpg"),
    tagline: "Vuoto a rendere, ricarica pronta.",
    description: "Ritiriamo la bombola vuota e consegniamo una bombola piena e controllata. Disponibile anche in abbonamento.",
    specs: [["Formati", "600 g, 2 kg, altri su richiesta"], ["Modalità", "Sostituzione vuoto/pieno"], ["Abbonamento", "Disponibile"]],
  },
  {
    id: "filtri-originali", name: "Filtri di ricambio originali", category: "ricambi", img: img("x_filters.jpg"),
    tagline: "Sedimenti, carbone attivo, membrane UF e osmotiche.",
    description: "Cartucce originali per mantenere prestazioni e certificazioni del sistema. Sostituzione rapida a innesto.",
    specs: [["Tipologie", "Sedimenti, carbone, UF, RO, remineralizzante"], ["Durata media", "6 – 12 mesi"], ["Garanzia", "Ricambio originale"]],
  },
  {
    id: "lampada-uv", name: "Lampada UV battericida", category: "ricambi", img: img("x_uv.jpg"),
    tagline: "Barriera finale contro batteri e virus.",
    description: "Camera in acciaio inox con lampada UV-C: sanifica l'acqua in uscita senza aggiunta di sostanze chimiche.",
    specs: [["Lunghezza d'onda", "254 nm (UV-C)"], ["Camera", "Acciaio inox"], ["Sostituzione lampada", "circa ogni 12 mesi"]],
  },
  {
    id: "kit-sanificazione", name: "Kit di manutenzione", category: "manutenzione", img: img("cartridges.jpg"),
    tagline: "Tutto il necessario per la sanificazione periodica.",
    description: "Kit con sanificante per uso alimentare, guarnizioni, raccordi e chiave per housing. Pensato per la manutenzione programmata.",
    specs: [["Contenuto", "Sanificante, O-ring, raccordi, chiave"], ["Uso", "Ogni cambio filtri"], ["Compatibilità", "Tutti i sistemi"]],
  },
];

export const EXTRAS = EXTRA_ITEMS.map((e) => ({ ...e, sub: EXTRA_CATEGORIES.find((c) => c.id === e.category)?.label }));