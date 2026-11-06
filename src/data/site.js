// ============================================================
// DATI AZIENDALI — sostituire i [segnaposto] con i dati reali
// ============================================================
export const COMPANY = {
  name: "uf water technology",
  address: "Brescia, Bergamo, Milano e provincia",
  phone: "+393279088909",
  phoneHref: "tel:+393279088909",
  email: "ufwater@hotmail.com",
  emailHref: "mailto:ufwater@hotmail.com",
  whatsapp: "3279088909", // numero WhatsApp in formato internazionale, senza "+"
  hours: ["Rispondiamo entro 24 ore", "Sopralluoghi su appuntamento"],
  vat: "P.IVA 04596520165",
};

export const whatsappLink = (text = "Ciao, vorrei informazioni sui vostri depuratori.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;

// Voci di navigazione principali
export const NAV = [
  { to: "/", label: "Home", id: "home" },
  { to: "/prodotti", label: "Depuratori", id: "prodotti" },
 { to: "/accessori", label: "Miscelatori/CO2", id: "accessori" },
  { to: "/installazione-servizi", label: "Installazione", id: "installazione" },
  { to: "/normative-certificazioni", label: "Normative", id: "normative" },
  { to: "/contatti", label: "Contatti", id: "contatti" },
  { to: "/admin/preventivo", label: "🔐 Area Venditori" }
];
