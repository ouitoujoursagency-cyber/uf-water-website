import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/motion";
import { CtaBand } from "@/components/CtaBand";
import { PRODUCTS } from "@/data/catalog";

const FILTERS = [
  { id: "tutti", label: "Tutti" },
  { id: "casa", label: "Uso Domestico" },
  { id: "ufficio", label: "Ufficio / Business" },
];

// Tabella comparativa tecnologie
const COMPARE = [
  ["Trattiene batteri e particelle", true, true],
  ["Mantiene i sali minerali naturali", true, false],
  ["Riduce il residuo fisso (calcare)", false, true],
  ["Nessuno scarto d'acqua", true, false],
  ["Ideale per", "Acqua di rete di buona qualità", "Acque molto dure o con nitrati"],
];

const Cell = ({ v }) => typeof v === "boolean"
  ? (v ? <Check className="h-5 w-5 text-teal-600" /> : <Minus className="h-5 w-5 text-slate-400" />)
  : <span className="text-sm text-slate-700">{v}</span>;

const FilterBar = ({ value, onChange }) => (
  <div className="flex flex-wrap gap-2" role="tablist">
    {FILTERS.map((f) => (
      <button key={f.id} onClick={() => onChange(f.id)} data-testid={`products-filter-${f.id}`} role="tab" aria-selected={value === f.id}
        className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${value === f.id ? "text-white" : "bg-white border border-slate-200 text-slate-600 hover:text-[var(--ink)]"}`}>
        {value === f.id && <motion.span layoutId="prod-filter" className="absolute inset-0 rounded-full bg-[#06142B]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
        <span className="relative">{f.label}</span>
      </button>
    ))}
  </div>
);

export default function Prodotti() {
  const [filter, setFilter] = useState("tutti");
  const [open, setOpen] = useState(null);
  const list = PRODUCTS.filter((p) => filter === "tutti" || p.category === filter);

  return (
    <div data-testid="products-page">
      <PageHero testId="products-hero" eyebrow="La gamma" image="/img/glass.jpg"
        lines={["Depuratori d'acqua", <span className="text-water">per casa e ufficio.</span>]}
        intro="Sotto-lavello, osmosi inversa, sistemi compatti, erogatori a colonna e impianti ad alta capacità. Ogni sistema viene scelto dopo un'analisi gratuita della tua acqua." />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500" data-testid="products-count">{list.length} sistemi disponibili</p>
          <FilterBar value={filter} onChange={setFilter} />
        </div>
        <motion.div layout className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {list.map((p, i) => <ProductCard key={p.id} item={p} index={i} onOpen={setOpen} />)}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 md:pb-32" data-testid="products-compare">
        <SectionTitle eyebrow="Confronto tecnologie" lines={["Ultrafiltrazione", "o osmosi inversa?"]}>
          Due tecnologie, due risultati diversi. Ti aiutiamo a scegliere in base all'analisi della tua acqua.
        </SectionTitle>
        <Reveal className="mt-10 overflow-x-auto rounded-[28px] border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-5 font-mono text-xs uppercase tracking-wider text-slate-500">Caratteristica</th>
                <th className="p-5 font-display font-extrabold text-[var(--ink)]">Ultrafiltrazione (UF)</th>
                <th className="p-5 font-display font-extrabold text-[var(--ink)]">Osmosi inversa</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([k, a, b]) => (
                <tr key={k} className="border-b border-slate-100 last:border-0">
                  <td className="p-5 text-sm font-medium text-slate-700">{k}</td>
                  <td className="p-5"><Cell v={a} /></td>
                  <td className="p-5"><Cell v={b} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      <CtaBand title="Non sai quale scegliere?" text="Un nostro tecnico analizza la tua acqua e ti consiglia il sistema più adatto. Gratis e senza impegno." />
      <ProductDialog item={open} onClose={() => setOpen(null)} />
    </div>
  );
}
