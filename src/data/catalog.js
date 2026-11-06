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
    id: "gel-30-black-edition", 
    name: "Gel 30 Sottolavello – Black Edition", 
    category: "casa", 
    sub: "Sottolavello", 
    badge: "Nuovo modello",
    img: img("gel30black.jpg"),
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
    img: img("microline uv.jpg"),
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
    id: "osmo-top", 
    name: "Osmo Top", 
    category: "casa", 
    sub: "Osmosi inversa", 
    badge: "Top di gamma",
    img: img("osmo top.jpg"),
    tagline: "Impianto ad osmosi inversa evoluto con banco di ghiaccio e raffreddamento ad alta capacità.",
    description: "Osmo Top unisce la purificazione a osmosi inversa con la refrigerazione avanzata a banco di ghiaccio. Eroga acqua naturale fredda, liscia e frizzante di qualità eccellente direttamente a casa tua.",
    specs: [
      ["Pressione Ingresso Acqua", "min 1 bar - max 4 bar"],
      ["Temperatura Esercizio", "2° C - 40° C"],
      ["Alimentazione Elettrica", "220V 50Hz"],
      ["Dimensioni (LXPA-CM)", "27x39x34"],
      ["Pompa Acqua", "200 lt/h a paletta"],
      ["Motore Per Pompa Acqua", "165 watt"],
      ["Vasca Refrigerante", "5 litri"],
      ["Controllo Banco Di Ghiaccio", "termostato da -2°C a 7°C"],
      ["Modello Compressore", "B38G - 1/8hp - 3,80 cm3"],
      ["Produzione Osmosi", "110 lt/h"],
      ["Peso", "23 kg"]
    ]
  },
  {
    id: "office-30", 
    name: "Office 30", 
    category: "ufficio",
    sub: "Erogatore a colonna", 
    badge: "Per l'ufficio",
    img: img("office 30.jpg"),
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
    img: img("rubinetto 1 via.jpg"),
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
    id: "mix-quadro", name: "Miscelatore Quadro 3 vie", category: "miscelatori", img: img("faucet.jpg"),
    tagline: "Linee squadrate per cucine contemporanee.",
    description: "Design minimale con canna alta e leva laterale dedicata all'acqua depurata. Compatibile con tutti i nostri sistemi sotto-lavello.",
    specs: [["Vie", "3"], ["Finitura", "Cromo / Inox"], ["Compatibilità", "TOP 30, UF Osmo 5"]]
  },
  {
    id: "co2-600", name: "Bombola CO2 600 g", category: "co2", img: img("x_co2.jpg"),
    tagline: "Formato compatto per uso domestico.",
    description: "Bombola in alluminio con anidride carbonica per uso alimentare (E290), per acqua frizzante direttamente dal rubinetto.",
    specs: [["Capacità", "600 g"], ["Materiale", "Alluminio"], ["Gas", "CO2 alimentare E290"]]
  },
  {
    id: "co2-2kg", name: "Bombola CO2 2 kg", category: "co2", img: img("sparkling.jpg"),
    tagline: "Per famiglie numerose e uffici.",
    description: "Maggiore autonomia per erogatori a colonna e sistemi da ufficio. Valvola con riduttore di pressione dedicato.",
    specs: [["Capacità", "2 kg"], ["Materiale", "Alluminio"], ["Gas", "CO2 alimentare E290"]]
  },
  {
    id: "co2-ricarica", name: "Servizio Ricarica CO2", category: "co2", img: img("x_co2.jpg"),
    tagline: "Vuoto a rendere, ricarica pronta.",
    description: "Ritiriamo la bombola vuota e consegniamo una bombola piena e controllata. Abbonamento disponibile.",
    specs: [["Formati", "600 g, 2 kg, altri su richiesta"], ["Modalità", "Sostituzione vuoto/pieno"], ["Abbonamento", "Disponibile"]]
  },
  {
    id: "filtri-originali", name: "Filtri di ricambio originali", category: "ricambi", img: img("x_filters.jpg"),
    tagline: "Sedimenti, carbone attivo, membrane UF e osmotiche.",
    description: "Cartucce originali per mantenere prestazioni e certificazioni del sistema. Sostituzione rapida a innesto.",
    specs: [["Tipologie", "Sedimenti, carbone, UF, RO, remineralizzante"], ["Durata media", "6 – 12 mesi"], ["Garanzia", "Ricambio originale"]]
  },
  {
    id: "lampada-uv", name: "Lampada UV battericida", category: "ricambi", img: img("x_uv.jpg"),
    tagline: "Barriera finale contro batteri e virus.",
    description: "Camera in acciaio inox con lampada UV-C: sanifica l'acqua in uscita senza aggiunta di sostanze chimiche.",
    specs: [["Lunghezza d'onda", "254 nm (UV-C)"], ["Camera", "Acciaio inox"], ["Sostituzione lampada", "circa ogni 12 mesi"]]
  },
  {
    id: "kit-sanificazione", name: "Kit di manutenzione", category: "manutenzione", img: img("cartridges.jpg"),
    tagline: "Tutto il necessario per la sanificazione periodica.",
    description: "Kit con sanificante per uso alimentare, guarnizioni, raccordi e chiave per housing. Pensato per la manutenzione programmata.",
    specs: [["Contenuto", "Sanificante, O-ring, raccordi, chiave"], ["Uso", "Ogni cambio filtri"], ["Compatibilità", "Tutti i sistemi"]]
  }
];

export const ACCESSORIES = EXTRA_ITEMS.filter(
  (item) => item.category === "miscelatori" || item.category === "co2"
).map((e) => ({ 
  ...e, 
  category: "casa", 
  sub: EXTRA_CATEGORIES.find((c) => c.id === e.category)?.label 
}));