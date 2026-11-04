// ============================================================
// DATI AZIENDALI — sostituire i [segnaposto] con i dati reali
// ============================================================
export const COMPANY = {
  name: "uf water technology",
  address: "[Via Esempio 1, 00000 Città (XX)]",
  phone: "[+39 000 000 0000]",
  phoneHref: "tel:+390000000000",
  email: "[info@tuodominio.it]",
  emailHref: "mailto:info@tuodominio.it",
  whatsapp: "390000000000", // numero WhatsApp in formato internazionale, senza "+"
  hours: ["[Lun – Ven: 9:00 – 18:00]", "[Sabato: 9:00 – 13:00]"],
  vat: "[P.IVA 00000000000]",
};

export const whatsappLink = (text = "Ciao, vorrei informazioni sui vostri depuratori.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;

// Voci di navigazione principali
export const NAV = [
  { to: "/", label: "Home", id: "home" },
  { to: "/prodotti", label: "Depuratori", id: "prodotti" },
  { to: "/articoli-extra", label: "Articoli Extra", id: "extra" },
  { to: "/installazione-servizi", label: "Installazione", id: "installazione" },
  { to: "/normative-certificazioni", label: "Normative", id: "normative" },
  { to: "/contatti", label: "Contatti", id: "contatti" },
];
