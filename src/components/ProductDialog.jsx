import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

// Scheda tecnica in finestra modale con richiesta preventivo
export const ProductDialog = ({ item, onClose }) => {
  const navigate = useNavigate();
  const interest = item?.category === "ufficio" ? "ufficio" : "casa";
  const ask = () => {
    onClose();
    navigate(`/contatti?prodotto=${encodeURIComponent(item.name)}&interesse=${interest}`);
  };

  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent data-testid="product-dialog" data-lenis-prevent className="max-w-4xl w-[94vw] max-h-[90vh] overflow-y-auto p-0 rounded-[28px] border-0 gap-0">
        {item && (
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto bg-[#06142B]">
              <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
              {item.badge && <span className="absolute left-5 top-5 rounded-full bg-sky-400 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#06142B]">{item.badge}</span>}
            </div>
            <div className="p-6 sm:p-8">
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
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button onClick={ask} data-testid="product-dialog-quote-button"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#06142B] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[var(--navy)]">
                  Prenota un sopralluogo gratuito <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a href={whatsappLink(`Ciao, vorrei informazioni su ${item.name}.`)} target="_blank" rel="noopener noreferrer" data-testid="product-dialog-whatsapp"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 font-semibold text-[var(--ink)] transition-colors hover:border-[#25D366] hover:text-[#128C7E]">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
