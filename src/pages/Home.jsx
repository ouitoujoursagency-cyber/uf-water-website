import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { PiggyBank, Leaf, HeartPulse, Sparkles, ArrowRight, Star, Quote, Wrench, ClipboardCheck, ShieldCheck, Timer } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { CtaBand } from "@/components/CtaBand";
import { PRODUCTS } from "@/data/catalog";

// ---------- Vantaggi (bento allineato 12 colonne) ----------
const Benefits = () => (
  <section data-testid="benefits-section" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
    <SectionTitle eyebrow="Perché depurare" lines={["Quattro buone ragioni", "per cambiare acqua."]} className="max-w-3xl" />
    <div className="mt-14 grid gap-5 md:grid-cols-12 md:auto-rows-[minmax(260px,auto)]">
      <Reveal className="md:col-span-7 relative overflow-hidden rounded-[28px] bg-[#06142B] p-8 sm:p-10 text-white" data-testid="benefit-risparmio">
        <PiggyBank className="h-9 w-9 text-sky-300" />
        <h3 className="mt-8 font-display text-3xl sm:text-4xl font-black tracking-tight">Risparmio</h3>
        <p className="mt-3 max-w-md text-slate-300 leading-relaxed">Niente più casse d'acqua da comprare, trasportare e stoccare. Il costo per litro diventa una frazione di quello dell'acqua in bottiglia.</p>
        <span aria-hidden="true" className="absolute -bottom-10 -right-4 font-display text-[9rem] font-black leading-none text-white/[0.06]">€</span>
      </Reveal>
      <Reveal delay={0.08} className="md:col-span-5 rounded-[28px] bg-teal-50 border border-teal-100 p-8 sm:p-10" data-testid="benefit-sostenibilita">
        <Leaf className="h-9 w-9 text-teal-700" />
        <h3 className="mt-8 font-display text-3xl font-black tracking-tight text-[var(--ink)]">Sostenibilità</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">Meno plastica, meno trasporti, meno CO2. Ogni borraccia riempita al rubinetto è una bottiglia in meno nell'ambiente.</p>
      </Reveal>
      <Reveal delay={0.04} className="md:col-span-5 rounded-[28px] bg-white border border-slate-200 p-8 sm:p-10" data-testid="benefit-salute">
        <HeartPulse className="h-9 w-9 text-sky-600" />
        <h3 className="mt-8 font-display text-3xl font-black tracking-tight text-[var(--ink)]">Salute</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">Ultrafiltrazione, carbone attivo e UV trattengono impurità, cloro e batteri, preservando i minerali utili.</p>
      </Reveal>
      <Reveal delay={0.12} className="md:col-span-7 relative min-h-[300px] overflow-hidden rounded-[28px]" data-testid="benefit-comodita">
        <img src="/img/pour.jpg" alt="Acqua versata in un bicchiere" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06142B]/90 via-[#06142B]/40 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-8 sm:p-10 text-white">
          <Sparkles className="h-9 w-9 text-sky-300" />
          <h3 className="mt-6 font-display text-3xl sm:text-4xl font-black tracking-tight">Comodità</h3>
          <p className="mt-3 max-w-md text-slate-200 leading-relaxed">Naturale, fredda o frizzante: sempre pronta, direttamente dal rubinetto di casa o dall'erogatore in ufficio.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

// ---------- Vetrina prodotti di punta ----------
const Showcase = () => {
  const [tab, setTab] = useState("casa");
  const [open, setOpen] = useState(null);
  const items = PRODUCTS.filter((p) => p.category === tab).slice(0, 3);
  return (
    <section data-testid="showcase-section" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionTitle eyebrow="Prodotti di punta" lines={["Depuratori pensati", "per ogni spazio."]} />
        <div className="inline-flex self-start rounded-full bg-white p-1.5 border border-slate-200" role="tablist">
          {[["casa", "Uso Domestico"], ["ufficio", "Ufficio / Business"]].map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} data-testid={`showcase-tab-${k}`} role="tab" aria-selected={tab === k}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${tab === k ? "text-white" : "text-slate-600 hover:text-[var(--ink)]"}`}>
              {tab === k && <motion.span layoutId="showcase-pill" className="absolute inset-0 rounded-full bg-[#06142B]" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className="relative">{l}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <div key={p.id} className={i === 1 ? "lg:mt-16" : ""}><ProductCard item={p} index={i} onOpen={setOpen} tall /></div>
        ))}
      </div>
      <Reveal className="mt-14 flex justify-center">
        <Link to="/prodotti" data-testid="showcase-all-products" className="group inline-flex items-center gap-2 rounded-full border border-[var(--navy)] px-7 py-4 font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white">
          Vedi tutta la gamma <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
      <ProductDialog item={open} onClose={() => setOpen(null)} />
    </section>
  );
};

// ---------- Installazione chiavi in mano ----------
const STEPS = [
  { icon: ClipboardCheck, t: "Sopralluogo gratuito", d: "Analizziamo l'acqua e gli spazi per consigliarti il sistema giusto." },
  { icon: Wrench, t: "Installazione rapida", d: "Tecnici specializzati montano tutto in poche ore, senza opere murarie." },
  { icon: ShieldCheck, t: "Collaudo e sanificazione", d: "Verifichiamo tenuta e prestazioni e sanifichiamo l'impianto." },
  { icon: Timer, t: "Manutenzione programmata", d: "Ti ricordiamo noi il cambio filtri e interveniamo quando serve." },
];

const Installation = () => {
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section data-testid="installation-section" className="relative overflow-hidden bg-[#06142B] text-white grain">
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 py-20 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle dark eyebrow="Chiavi in mano" lines={["Dall'idea al primo", "bicchiere. Pensiamo", "a tutto noi."]}>
            Un unico referente per scelta, installazione, collaudo e assistenza. Per case, uffici e attività commerciali.
          </SectionTitle>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[28px] [clip-path:inset(0_round_28px)]">
            <motion.img style={{ y: imgY, scale: 1.2 }} src="/img/installer.jpg" alt="Tecnico al lavoro in cucina" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        <ol className="lg:col-span-7 lg:pl-10">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 0.06} className="group grid grid-cols-[auto_1fr] gap-6 border-b border-white/10 py-8 first:pt-0" data-testid={`install-step-${i + 1}`}>
              <span className="w-16 md:w-24 font-display text-5xl md:text-6xl font-black text-transparent [-webkit-text-stroke:1.2px_#7DD3FC] transition-colors group-hover:text-sky-400/30">0{i + 1}</span>
              <div>
                <s.icon className="h-6 w-6 text-sky-300" />
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-slate-300 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <Link to="/installazione-servizi" data-testid="installation-more-link" className="group mt-10 inline-flex items-center gap-2 font-semibold text-sky-300 hover:text-white">
              Scopri il servizio di installazione <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </ol>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div data-testid="home-page">
      <HomeHero />
      <Benefits />
      <Marquee />
      <Showcase />
      <Installation />
      <CtaBand />
    </div>
  );
}