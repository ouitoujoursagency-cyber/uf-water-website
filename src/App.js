import { useState } from "react";
import { X, Share2, Sparkles, MessageCircle, Instagram, Facebook } from "lucide-react";

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
        
        {/* Cartello Promozioni Attive */}
        <div 
          onClick={() => setIsOpen(true)}
          className="bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-2xl border-2 border-sky-400 text-xs font-black uppercase tracking-wider animate-bounce flex items-center gap-1.5 hover:bg-sky-50 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-spin" /> Promozioni Attive!
        </div>

        {/* Icona Goccia con occhi e bocca animata */}
        <div 
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 bg-gradient-to-tr from-sky-600 to-cyan-400 rounded-full rounded-bl-none shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
          style={{ transform: "rotate(-15deg)" }}
        >
          {/* Occhi e Bocca */}
          <div className="flex flex-col items-center gap-1.5" style={{ transform: "rotate(15deg)" }}>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="w-3 h-1.5 bg-white rounded-b-full"></div>
          </div>

          {/* Alone luminoso */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md -z-10 animate-pulse"></div>
        </div>
      </div>

      {/* Pop-up delle Promozioni */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-white text-slate-900 rounded-[32px] p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
            
            {/* Sfondo decorativo */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

            {/* Pulsante chiusura */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Contenuto Pop-up */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-600 font-mono text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Offerte Speciali UF Water
              </div>

              <h3 className="font-display text-2xl font-black text-slate-900">
                Sconti Imperdibili sui Purificatori
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Approfitta subito delle promozioni attive di questo mese: ricevi <strong>uno sconto del 15%</strong> sul tuo impianto e il kit filtri di ricambio omaggio!
              </p>

              {/* Box Grafico Promozione */}
              <div className="bg-gradient-to-r from-sky-600 to-cyan-500 p-5 rounded-2xl text-white shadow-lg space-y-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-sky-200">Codice Promo Esclusivo</p>
                <p className="text-xl font-black tracking-wider">UF-WATER-2026</p>
                <p className="text-[11px] text-sky-100">Valido su tutti i modelli a 1, 3 e 5 vie.</p>
              </div>

              {/* Tasti di Condivisione */}
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">Condividi la promozione</p>
                
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => handleShare("facebook")}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors shadow-md"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </button>

                  <button 
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>

                  <button 
                    onClick={() => handleShare("instagram")}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-md"
                  >
                    <Instagram className="w-4 h-4" /> {copied ? "Copiato!" : "Instagram"}
                  </button>
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
      {/* Qui dentro va il resto della tua struttura attuale (Navbar, Router, Pagine, ecc.) */}
      
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Benvenuto su UF Water</h1>
      </div>

      {/* Widget Goccia Promo sempre attivo in basso a destra */}
      <PromoWidget />
    </div>
  );
}