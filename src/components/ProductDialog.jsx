import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, MessageCircle, Calendar } from "lucide-react";

export function ProductDialog({ item, onClose }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    setCurrentImgIndex(0);
  }, [item]);

  if (!item) return null;

  const popupImages = [
    item.realImg || item.img,
    item.schemaImg
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % popupImages.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + popupImages.length) % popupImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      {/* Finestra più quadrata e contenuta */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-2xl flex flex-col md:flex-row max-h-[85vh]">
        
        {/* Pulsante di chiusura */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-30 grid h-9 w-9 place-items-center rounded-full bg-black/10 text-slate-700 hover:bg-black/20 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Colonna Sinistra: Blocco Blu con foto reale/schema a schermo pieno */}
        <div className="relative w-full md:w-1/2 bg-[#06142B] flex items-center justify-center overflow-hidden min-h-[320px] md:min-h-full">
          
          <img 
            src={popupImages[currentImgIndex]} 
            alt={item.name} 
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#06142B]/40 via-transparent to-[#06142B]/20 pointer-events-none" />

          {/* Frecce per scorrere */}
          {popupImages.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Pallini in basso */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                {popupImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${currentImgIndex === idx ? "w-5 bg-sky-400" : "w-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
            </>
          )}

          <span className="absolute top-3 left-3 z-20 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
            {currentImgIndex === 0 ? "📸 Foto Reale" : "📐 Schema e Misure"}
          </span>
        </div>

        {/* Colonna Destra: Specifiche e Contatti compatti */}
        <div className="w-full md:w-1/2 p-5 md:p-6 overflow-y-auto flex flex-col justify-between bg-white">
          <div>
            {item.badge && (
              <span className="inline-block rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-bold text-sky-700 mb-2 border border-sky-100">
                {item.badge}
              </span>
            )}
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[var(--ink)] leading-tight">{item.name}</h2>
            <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{item.description}</p>

            {/* Tabella Specifiche ridotta */}
            <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
              {item.specs && item.specs.map(([label, value], i) => (
                <div key={i} className="flex justify-between text-xs border-b border-slate-50 pb-1.5">
                  <span className="font-semibold uppercase tracking-wider text-slate-400">{label}</span>
                  <span className="font-medium text-slate-700 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pulsanti di azione */}
          <div className="mt-6 flex flex-col sm:flex-row gap-2 pt-3 border-t border-slate-100">
            <Link 
              to="/contatti" 
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--navy)] px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky-600 transition-colors shadow-sm"
            >
              <Calendar className="h-3.5 w-3.5 text-sky-300" /> Prenota sopralluogo
            </Link>
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-600" /> WhatsApp
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}