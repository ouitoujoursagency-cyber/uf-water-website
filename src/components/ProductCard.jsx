import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Scheda prodotto: formato quadrato stile Instagram, foto intera e design più contenuto
export const ProductCard = ({ item, index, onOpen, tall = false }) => {
  return (
    <motion.button
      layout
      type="button"
      onClick={() => onOpen(item)}
      data-testid={`product-card-${item.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group block w-full text-left"
    >
      {/* Cornice quadrata contenuta, con object-contain per mostrare la foto per intero */}
      <div className={`relative overflow-hidden rounded-[24px] bg-[#06142B] p-6 flex items-center justify-center ${tall ? "aspect-square" : "aspect-square"}`}>
        <img 
          src={item.img} 
          alt={item.name} 
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" 
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06142B]/40 via-transparent to-transparent pointer-events-none" />
        
        {/* Numero progressivo in alto a destra */}
        <span className="absolute right-3 top-3 font-mono text-xs text-white/70">{String(index + 1).padStart(2, "0")}</span>
        
        {/* Etichetta dinamica personalizzata in basso a sinistra sulla foto */}
        <div className="absolute bottom-3 left-3 z-10 rounded-full bg-[#06142B]/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white tracking-wide shadow-md">
          {item.sub || item.badge || "Accessorio"}
        </div>

        {/* Freccia in basso a destra */}
        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-sky-400 text-[#06142B] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
          <ArrowUpRight className="h-4 w-4" />
        </span>

      </div>
      
      {/* Testi sotto la card più compatti e fini */}
      <div className="mt-4 flex items-start justify-between gap-3 px-1">
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight text-[var(--ink)]">{item.name}</h3>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">{item.tagline}</p>
        </div>
      </div>
      <p className="mt-2 px-1 font-mono text-[11px] uppercase tracking-[0.15em] text-teal-700 underline-offset-4 group-hover:underline">Scheda tecnica</p>
    </motion.button>
  );
};