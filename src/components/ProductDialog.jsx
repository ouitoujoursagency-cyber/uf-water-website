import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { whatsappLink } from "@/data/site";

// Scheda tecnica in finestra modale con carosello (Foto reale + Schema tecnico) e richiesta preventivo
export const ProductDialog = ({ item, onClose }) => {
  const navigate = useNavigate();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Resetta l'indice del carosello ogni volta che si apre un nuovo prodotto
  useEffect(() => {
    setCurrentImgIndex(0);
  }, [item]);

  const interest = item?.category === "ufficio" ? "ufficio" : "casa";
  const ask = () => {
    onClose();
    navigate(`/contatti?prodotto=${encodeURIComponent(item.name)}&interesse=${interest}`);
  };

  // Creazione array di immagini per il carosello del popup:
  // 1. Fotografia reale (item.realImg o fallback sull'immagine principale)
  // 2. Schema geometrico / Misure (item.schemaImg)
  const popupImages = item ? [
    item.realImg || item.img,
    item.schemaImg
  ].filter(Boolean) : [];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % popupImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + popupImages.length) % popupImages.length);
  };

  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent data-testid="product-dialog" data-lenis-prevent className="max-w-4xl w-[94vw] max-h-[90vh] overflow-y-auto p-0 rounded-[28px] border-0 gap-0">
        {item && (
          <div className="grid md:grid-cols-2">
            
            {/* Sezione Immagine con Carosello (Foto Reale / Schema Tecnico) */}
            <div className="relative aspect-square md:aspect-auto bg-[#06142B] flex items-center justify-center p-6 min-h-[300px]">
              <img 
                src={popupImages[currentImgIndex]} 
                alt={item.name} 
                className="max-h-[380px] w-full object-contain transition-all duration-300" 
              />
              
              {item.badge && (
                <span className="absolute left-5 top-5 z-10 rounded-full bg-sky-400 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#06142B]">
                  {item.badge}
                </span>
              )}

              {/* Etichetta informativa per distinguere foto reale e schema */}
              <span className="absolute bottom-4 left-5 z-10 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                {currentImgIndex === 0 ? "📸 Fotografia Reale" : "📐 Schema Tecnico e Misure"}
              </span>

              {/* Frecce e indicatori di scorrimento se sono presenti più immagini */}
              {popupImages.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/40 transition-colors">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/40 transition-colors">
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-4 right-5 z-10 flex gap-1.5">
                    {popupImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(idx); }}
                        className={`h-2 rounded-full transition-all ${currentImgIndex === idx ? "w-5 bg-sky-400" : "w-2 bg-white/40"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sezione Specifiche e Contatti */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">{item.sub || "Accessorio"}</p>
                <DialogTitle className="mt-2 font-display text-3xl font-black tracking-tight text-[var(--ink)]">{item.name}</DialogTitle>
                <DialogDescription className="mt-3 text-sm text-slate-600 leading-relaxed">{item.description}</DialogDescription>
                
                <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200" data-testid="product-dialog-specs">
                  {item.specs.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-5 gap-3 py-3 text-sm">
                      <dt className="col-span-2 font-mono text-xs uppercase tracking-wider text-slate-500 pt-0.5">{k}</dt>
                      <dd className="col-span-3 font-medium text-[var(--ink)]">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-slate-500">Dati tecnici indicativi. Prezzo su preventivo personalizzato.</p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <button onClick={ask} data-testid="product-dialog-quote-button"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#06142B] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[var(--navy)] shadow-sm">
                  Prenota un sopralluogo gratuito <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a href={whatsappLink(`Ciao, vorrei informazioni su ${item.name}.`)} target="_blank" rel="noopener noreferrer" data-testid="product-dialog-whatsapp"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 font-semibold text-[var(--ink)] transition-colors hover:border-[#25D366] hover:text-[#128C7E] shadow-sm">
                  <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp
                </a>
              </div>
            </div>

          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};