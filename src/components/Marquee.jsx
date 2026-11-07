import { Droplet } from "lucide-react";

// Nastro editoriale lento, in loop continuo (versione compatta)
const ITEMS = ["Ultrafiltrazione", "Osmosi inversa", "Miscelatori 3 vie", "Acqua frizzante", "DM 25/2012", "Installazione chiavi in mano", "Zero plastica"];

export const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section data-testid="editorial-marquee" aria-label="I nostri punti di forza" className="overflow-hidden border-y border-slate-200 bg-white py-3 md:py-4">
      <div className="marquee-track flex w-max items-center">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className={`whitespace-nowrap px-6 font-display text-lg md:text-xl font-bold tracking-tight ${i % 2 ? "text-outline" : "text-[var(--navy)]"}`}>{t}</span>
            <Droplet className="h-4 w-4 md:h-5 md:w-5 text-sky-400" fill="currentColor" />
          </span>
        ))}
      </div>
    </section>
  );
};