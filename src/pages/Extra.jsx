import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { PRODUCTS } from "@/data/catalog"; // Oppure la lista dedicata agli accessori se separata

export default function Extra() {
  const [open, setOpen] = useState(null);

  return (
    <div data-testid="extra-page">
      {/* Hero aggiornato senza menzionare filtri o lampade UV */}
      <PageHero 
        testId="extra-hero" 
        eyebrow="Accessori & CO2" 
        image="/img/glass.jpg"
        lines={["Miscelatori di design", <span className="text-water">e bombole CO2.</span>]}
        intro="Completa il tuo impianto con miscelatori di design e bombole di CO2 per l'acqua frizzante." 
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Accessori disponibili
          </p>
        </div>

        {/* Griglia unica di tutti gli accessori senza i pulsanti di filtro */}
        <motion.div layout className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {/* Sostituisci PRODUCTS con la lista degli accessori se usi un array separato */}
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.id} item={p} index={i} onOpen={setOpen} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <ProductDialog item={open} onClose={() => setOpen(null)} />
    </div>
  );
}