import { useState } from "react";
import { X, Sparkles, MessageCircle, Instagram, Facebook } from "lucide-react";

// Importa qui eventuali altri tuoi componenti (es. Navbar, Hero, Prodotti, ecc.)
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";

// Componente Mascotte Goccia e Pop-up Promozioni
function PromoWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const promoLink = "https://ufwater.it/promo";

  const handleShare = (platform) => {
    let url = "";
    if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(promoLink)}`;
    } else if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent("Scopri le promozioni attive su UF Water: " + promoLink)}`;
    } else if (platform === "instagram") {
      navigator.clipboard.writeText(promoLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      return;
    }
    if (url) window.open(url, "_blank");
  };

  return (
    <>
      {/* Mascotte Goccia in basso a destra */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 group cursor-pointer">
        <div 
          onClick={() => setIsOpen(true)}
          className="bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-2xl border-2 border-sky-400 text-xs font-black uppercase tracking-wider animate-bounce flex items-center gap-1.5 hover:bg-sky-50 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-spin" /> Promozioni Attive!
        </div>
        <div 
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 bg-gradient-to-tr from-sky-600 to-cyan-400 rounded-full rounded-bl-none shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
          style={{ transform: "rotate(-15deg)" }}
        >
          <div className="flex flex-col items-center gap-1.5" style={{ transform: "rotate(15deg)" }}>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="w-3 h-1.5 bg-white rounded-b-full"></div>
          </div>
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md -z-10 animate-pulse"></div>
        </div>
      </div>

      {/* Pop-up delle Promozioni */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white text-slate-900 rounded-[32px] p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-600 font-mono text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Offerte Speciali UF Water
              </div>
              <h3 className="text-2xl font-black text-slate-900">Sconti Imperdibili sui Purificatori</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Approfitta subito delle promozioni attive: ricevi <strong>uno sconto del 15%</strong> sul tuo impianto e il kit filtri omaggio!
              </p>
              <div className="bg-gradient-to-r from-sky-600 to-cyan-500 p-5 rounded-2xl text-white shadow-lg space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-sky-200">Codice Promo Esclusivo</p>
                <p className="text-xl font-black tracking-wider">UF-WATER-2026</p>
              </div>
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">Condividi la promozione</p>
                <div className="grid grid-cols-3 gap-2">
                  <button onClick={() => handleShare("facebook")} className="py-2.5 px-3 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500">Facebook</button>
                  <button onClick={() => handleShare("whatsapp")} className="py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500">WhatsApp</button>
                  <button onClick={() => handleShare("instagram")} className="py-2.5 px-3 rounded-xl bg-purple-600 text-white text-xs font-bold hover:opacity-90">{copied ? "Copiato!" : "Instagram"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Componente Principale App
export default function App() {
  return (
    <div className="min-h-screen bg-[#06142B] text-white relative">
      {/* Inserisci qui i tuoi componenti principali del sito */}
      <header className="p-6 border-b border-sky-900/50 flex justify-between items-center">
        <h1 className="text-xl font-black tracking-wider text-sky-400">UF WATER</h1>
        <nav className="space-x-6 text-sm text-slate-300">
          <a href="#prodotti" className="hover:text-sky-400 transition-colors">Impianti</a>
          <a href="#manutenzione" className="hover:text-sky-400 transition-colors">Manutenzione</a>
          <a href="#contatti" className="hover:text-sky-400 transition-colors">Contatti</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 text-center space-y-6">
        <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono tracking-widest uppercase border border-sky-500/20">
          Tecnologia e Purezza
        </span>
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight">
          L'acqua pura direttamente a casa tua
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Scopri i nostri sistemi di purificazione avanzata a 1, 3 e 5 vie. Progettati per durare e semplici da gestire in autonomia.
        </p>
      </main>

      {/* Il Widget della Goccia rimane sempre visibile in basso a destra su tutte le pagine */}
      <PromoWidget />
    </div>
  );
}