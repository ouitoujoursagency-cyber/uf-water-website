// ============================================================
// CATALOGO — schede prodotto (dati tecnici indicativi, da verificare)
// ============================================================
const img = (f) => `/img/${f}`;

export const PRODUCTS = [
  {
    id: "uf-lumen", name: "UF Lumen", category: "casa", sub: "Sotto-lavello", badge: "Più richiesto",
    img: img("p_undersink.jpg"),
    tagline: "Ultrafiltrazione invisibile, montata sotto il lavello.",
    description: "Sistema a doppio stadio con membrana UF a fibre cave: trattiene particelle, batteri e torbidità mantenendo i sali minerali naturali dell'acqua.",
    specs: [["Tecnologia", "Ultrafiltrazione (UF) a membrana"], ["Grado di filtrazione", "0,01 µm"], ["Portata", "fino a 2,5 L/min"], ["Dimensioni", "L 28 × P 12 × H 38 cm"], ["Design", "Testata inox, cartucce a innesto rapido"], ["Cambio filtri", "circa ogni 12 mesi"]],
  },
  {
    id: "uf-osmo-5", name: "UF Osmo 5", category: "casa", sub: "Osmosi inversa", badge: "Massima purezza",
    img: img("p_osmosi.jpg"),
    tagline: "Osmosi inversa a 5 stadi con remineralizzazione.",
    description: "Prefiltrazione, carbone attivo, membrana osmotica e post-filtro remineralizzante: per chi vuole un residuo fisso molto basso e un gusto neutro.",
    specs: [["Tecnologia", "Osmosi inversa 5 stadi"], ["Membrana", "75 GPD"], ["Produzione", "fino a 280 L/giorno"], ["Dimensioni", "L 40 × P 20 × H 45 cm"], ["Design", "Telaio compatto con serbatoio da 8 L"], ["Extra", "Regolatore di salinità"]],
  },
  {
    id: "uf-nano", name: "UF Nano", category: "casa", sub: "Compatto", badge: "Zero ingombro",
    img: img("p_compact.jpg"),
    tagline: "Da appoggio, si collega in pochi minuti.",
    description: "Depuratore da piano con acqua ambiente e fredda, display touch e filtro unico facile da sostituire. Ideale per appartamenti e piccoli spazi.",
    specs: [["Tecnologia", "UF + carbone attivo"], ["Erogazione", "Ambiente / Fredda"], ["Portata", "fino a 1,8 L/min"], ["Dimensioni", "L 18 × P 36 × H 40 cm"], ["Design", "Bianco opaco, frontale in vetro"], ["Alimentazione", "230 V"]],
  },
  {
    id: "uf-colonna-pro", name: "UF Colonna Pro", category: "ufficio", sub: "Erogatore a colonna", badge: "Per l'ufficio",
    img: img("p_colonna.jpg"),
    tagline: "Il punto acqua dell'ufficio: naturale, fredda e frizzante.",
    description: "Erogatore a colonna allacciato alla rete idrica: nessun boccione da gestire, acqua sempre disponibile per team fino a 40 persone.",
    specs: [["Tecnologia", "UF + lampada UV"], ["Erogazione", "Ambiente / Fredda / Frizzante"], ["Capacità frigo", "fino a 40 L/h"], ["Dimensioni", "L 32 × P 38 × H 110 cm"], ["Design", "Acciaio inox spazzolato e nero opaco"], ["Utenti consigliati", "15 – 40"]],
  },
  {
    id: "uf-torrent-300", name: "UF Torrent 300", category: "ufficio", sub: "Alta capacità", badge: "Business",
    img: img("p_highcap.jpg"),
    tagline: "Impianto ad alta portata per aziende, mense e ristorazione.",
    description: "Sistema modulare a più vessel in acciaio inox con monitoraggio di pressione e conducibilità. Progettato su misura in base ai consumi.",
    specs: [["Tecnologia", "UF / Osmosi industriale"], ["Produzione", "fino a 300 L/h"], ["Monitoraggio", "Manometri + conducimetro"], ["Dimensioni", "su progetto"], ["Design", "Telaio in acciaio inox AISI 304"], ["Utenti consigliati", "oltre 50"]],
  },
  {
    id: "uf-touch-office", name: "UF Touch Office", category: "ufficio", sub: "Dispenser touch", badge: "Touchless",
    img: img("p_touch.jpg"),
    tagline: "Erogazione senza contatto, a parete.",
    description: "Dispenser a muro con sensore di prossimità, illuminazione LED e vano per borracce. Igienico, elegante e salvaspazio.",
    specs: [["Tecnologia", "UF + sanificazione UV-C"], ["Erogazione", "Ambiente / Fredda / Frizzante"], ["Comando", "Sensore touchless"], ["Dimensioni", "L 40 × P 18 × H 55 cm"], ["Design", "Vetro nero lucido, LED azzurro"], ["Utenti consigliati", "10 – 30"]],
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
    specs: [["Vie", "3"], ["Finitura", "Cromo / Inox"], ["Compatibilità", "UF Lumen, UF Osmo 5"]],
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
    specs: [["Contenuto", "Sanificante, O-ring, raccordi, chiave"], ["Uso", "Ogni cambio filtri"], ["Compatibilità", "Tutti i sistemi uf"]],
  },
];

// Etichetta di categoria mostrata sulle schede accessori
export const EXTRAS = EXTRA_ITEMS.map((e) => ({ ...e, sub: EXTRA_CATEGORIES.find((c) => c.id === e.category)?.label }));
