import { useState } from "react";
import { X, Sparkles, MessageCircle, Instagram, Facebook, Copy, Check, ZoomIn } from "lucide-react";

export default function PromoWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);
  const promoLink = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(promoLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = (platform) => {
    let url = "";
    const text = "Guarda queste fantastiche promozioni attive su UF Water! " + promoLink;

    if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(promoLink)}`;
    } else if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    } else if (platform === "instagram") {
      navigator.clipboard.writeText(promoLink);
      alert("Link copiato! Incollalo nelle tue storie o post su Instagram.");
      return;
    }
    if (url) window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <>
      {/* Contenitore fluttuante in basso a destra (WhatsApp sopra, Goccia sotto senza residui) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 cursor-pointer">
        
        {/* Pulsante WhatsApp */}
        <a 
          href="https://wa.me/393330000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          title="Scrivici su WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Goccia + Cartello Promozioni */}
        <div className="flex items-end gap-3 group">
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

      </div>

      {/* Pop-up Orizzontale a due colonne */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-[32px] p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
            
            {/* Pulsante chiusura principale */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Layout a 2 Colonne */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* COLONNA SINISTRA: Titolo e Locandina */}
              <div className="space-y-3 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-600 font-mono text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> Offerte Speciali UF Water
                </div>

                <div 
                  onClick={() => setIsZoomed(true)}
                  className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 p-2 flex items-center justify-center cursor-pointer group"
                  title="Clicca per ingrandire l'immagine"
                >
                  <img 
                    src="/img/promo.jpg" 
                    alt="Promozioni UF Water" 
                    className="w-full h-auto object-contain rounded-xl max-h-[380px] group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                    <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4" /> Ingrandisci
                    </span>
                  </div>
                </div>
              </div>

              {/* COLONNA DESTRA: Testi, Link e Social */}
              <div className="space-y-4 text-left flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Approfitta delle Promozioni Attive!
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Non lasciarti sfuggire le occasioni del mese: approfitta subito delle promozioni attive sui nostri impianti di purificazione e scopri tutti i vantaggi riservati a te.
                </p>

                {/* Striscia con link per copiare */}
                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Copia link della promozione</p>
                  <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                    <input 
                      type="text" 
                      readOnly 
                      value={promoLink} 
                      className="bg-transparent text-xs text-slate-600 px-2 w-full outline-none select-all"
                    />
                    <button 
                      onClick={handleCopyLink}
                      className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition-colors shrink-0 shadow"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? "Copiato!" : "Copia"}
                    </button>
                  </div>
                </div>

                {/* Tasti di Condivisione Social */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">Condividi la promozione</p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => handleShare("facebook")}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors shadow-md"
                    >
                      <Facebook className="w-4 h-4" /> Facebook
                    </button>

                    <button 
                      onClick={() => handleShare("whatsapp")}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </button>

                    <button 
                      onClick={() => handleShare("instagram")}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-md"
                    >
                      <Instagram className="w-4 h-4" /> Instagram
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* SOTTOMODALE: Immagine a Schermo Intero con X */}
      {isZoomed && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <button 
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-2xl"
            title="Chiudi immagine ingrandita"
          >
            <X className="w-7 h-7" />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img 
              src="/img/promo.jpg" 
              alt="Promozioni UF Water Ingrandita" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </>
  );
}