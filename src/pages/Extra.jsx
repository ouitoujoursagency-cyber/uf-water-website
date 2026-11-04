import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RefreshCw, Truck, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/motion";
import { CtaBand } from "@/components/CtaBand";
import { EXTRAS, EXTRA_CATEGORIES } from "@/data/catalog";

// Sezione evidenziata: miscelatore 3 vie con le 4 uscite
const WAYS = ["Depurata fredda", "Depurata frizzante", "Depurata ambiente / calda", "Acqua di rete"];

const MixerFeature = () => (
  <section className="relative overflow-hidden bg-[#06142B] text-white grain" data-testid="mixer-feature">
    <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
      <Reveal className="relative aspect-square overflow-hidden rounded-[32px]">
        <img src="/img/x_mixer.jpg" alt="Miscelatore 3 vie" className="h-full w-full object-cover" loading="lazy" />
      </Reveal>
      <div>
        <SectionTitle dark eyebrow="Miscelatori 3 vie" lines={["Un solo rubinetto,", "tutta l'acqua", "che desideri."]}>
          Canali interni separati: l'acqua depurata non si mescola mai con quella di rete.
        </SectionTitle>
        <ul className="mt-8 grid grid-cols-2 gap-3">
          {WAYS.map((w, i) => (
            <Reveal as="li" key={w} delay={i * 0.06} className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <span className="font-mono text-xs text-sky-300">0{i + 1}</span>
              <p className="mt-2 font-semibold">{w}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const CO2_STEPS = [
  { icon: Truck, t: "Ritiro del vuoto", d: "Passiamo noi o lo porti in sede." },
  { icon: RefreshCw, t: "Sostituzione immediata", d: "Ricevi una bombola piena e controllata." },
  { icon: CalendarClock, t: "Abbonamento", d: "Consegne periodiche, senza pensieri." },
];

export default function Extra() {
  const [cat, setCat] = useState("tutti");
  const [open, setOpen] = useState(null);
  const list = EXTRAS.filter((e) => cat === "tutti" || e.category === cat);
  const tabs = [{ id: "tutti", label: "Tutti" }, ...EXTRA_CATEGORIES];

  return (
    <div data-testid="extra-page">
      <PageHero testId="extra-hero" eyebrow="Articoli extra" image="/img/sparkling.jpg"
        lines={["Miscelatori, CO2", <span className="text-water">e ricambi originali.</span>]}
        intro="Completa il tuo impianto con miscelatori di design, bombole di CO2 per l'acqua frizzante, filtri originali, lampade UV e kit di manutenzione." />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
        <div className="flex flex-wrap gap-2" role="tablist">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setCat(t.id)} data-testid={`extra-filter-${t.id}`} role="tab" aria-selected={cat === t.id}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${cat === t.id ? "text-white" : "bg-white border border-slate-200 text-slate-600 hover:text-[var(--ink)]"}`}>
              {cat === t.id && <motion.span layoutId="extra-filter" className="absolute inset-0 rounded-full bg-[#06142B]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>
        <motion.div layout className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence>
            {list.map((p, i) => <ProductCard key={p.id} item={p} index={i} onOpen={setOpen} />)}
          </AnimatePresence>
        </motion.div>
      </section>

      <MixerFeature />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28" data-testid="co2-service">
        <SectionTitle eyebrow="Bombole CO2" lines={["Ricarica e sostituzione", "senza pensieri."]}>
          CO2 per uso alimentare per la tua acqua frizzante. Formati diversi e servizio vuoto/pieno.
        </SectionTitle>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CO2_STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08} className="rounded-[28px] border border-slate-200 bg-white p-8">
              <s.icon className="h-8 w-8 text-sky-600" />
              <h3 className="mt-6 font-display text-xl font-extrabold text-[var(--ink)]">{s.t}</h3>
              <p className="mt-2 text-slate-600">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Ti serve un ricambio?" text="Indicaci il modello del tuo depuratore: ti confermiamo il ricambio originale compatibile e i tempi di consegna." />
      <ProductDialog item={open} onClose={() => setOpen(null)} />
    </div>
  );
}
