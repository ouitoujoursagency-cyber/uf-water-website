import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Scheda prodotto: foto in cornice ritagliata con "spotlight"
export const ProductCard = ({ item, index, onOpen, tall = false }) => (
  <motion.button
    layout
    type="button"
    onClick={() => onOpen(item)}
    data-testid={`product-card-${item.id}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="group block w-full text-left"
  >
    <div className={`relative overflow-hidden rounded-[28px] bg-[#06142B] ${tall ? "aspect-[4/5]" : "aspect-square"}`}>
      <img src={item.img} alt={item.name} loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.07]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_35%,rgba(6,20,43,.55)_100%)]" />
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[var(--navy)]">{item.sub || item.badge}</span>
      </div>
      <span className="absolute right-4 top-4 font-mono text-xs text-white/80">{String(index + 1).padStart(2, "0")}</span>
      <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-sky-400 text-[#06142B] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </div>
    <div className="mt-5 flex items-start justify-between gap-4 px-1">
      <div>
        <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--ink)]">{item.name}</h3>
        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{item.tagline}</p>
      </div>
    </div>
    <p className="mt-3 px-1 font-mono text-xs uppercase tracking-[0.18em] text-teal-700 underline-offset-4 group-hover:underline">Scheda tecnica</p>
  </motion.button>
);
