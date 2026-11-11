import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { PiggyBank, Leaf, HeartPulse, Sparkles, ArrowRight, Wrench, ClipboardCheck, ShieldCheck, Timer } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/ProductCard";
import { ProductDialog } from "@/components/ProductDialog";
import { CtaBand } from "@/components/CtaBand";
import { PRODUCTS } from "@/data/catalog";
import PromoWidget from "@/components/PromoWidget";

// ---------- Vantaggi ----------
const Benefits = () => (
  <section data-testid="benefits-section" className="mx-auto max-w-7xl px-5 sm:px-8 py-8 md:py-12">
    <SectionTitle eyebrow="Perché depurare" lines={["Quattro buone ragioni", "per cambiare acqua."]} className="max-w-3xl" />
    <div className="mt-6 grid gap-4 md:grid-cols-12 md:auto-rows-[minmax(160px,auto)]">
      <Reveal className="md:col-span-7 relative overflow-hidden rounded-[20px] bg-[#06142B] p-5 sm:p-6 text-white shadow-sm" data-testid="benefit-risparmio">
        <PiggyBank className="h-6 w-6 text-sky-300" />
        <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold tracking-tight">Risparmio</h3>
        <p className="mt-1.5 max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">Niente più casse d'acqua da comprare, trasportare e stoccare. Il costo per litro diventa una frazione di quello dell'acqua in bottiglia.</p>
        <span aria-hidden="true" className="absolute -bottom-4 -right-1 font-display text-[6rem] font-black leading-none text-white/[0.06]">€</span>
      </Reveal>

      <Reveal delay={0.08} className="md:col-span-5 rounded-[20px] bg-[#EBF4FF] border border-[#BFDBFE] p-5 sm:p-6 shadow-sm" data-testid="benefit-sostenibilita">
        <Leaf className="h-6 w-6 text-sky-600" />
        <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)]">Sostenibilità</h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">Meno plastica, meno trasporti, meno CO2. Ogni borraccia riempita al rubinetto è una bottiglia in meno nell'ambiente.</p>
      </Reveal>

      <Reveal delay={0.04} className="md:col-span-5 rounded-[20px] bg-[#DBEAFE] border border-[#93C5FD] p-5 sm:p-6 shadow-sm" data-testid="benefit-salute">
        <HeartPulse className="h-6 w-6 text-sky-700" />
        <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)]">Salute</h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">Ultrafiltrazione, carbone attivo e UV trattengono impurità, cloro e batteri, preservando i minerali utili.</p>
      </Reveal>

      <Reveal delay={0.12} className="md:col-span-7 relative min-h-[180px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0A2540] via-[#06142B] to-[#030914] p-5 sm:p-6 text-white shadow-sm border border-sky-900/40" data-testid="benefit-comodita">
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl pointer-events-none" />
        <div className="relative flex h-full flex-col justify-end">
          <Sparkles className="h-6 w-6 text-sky-300" />
          <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold tracking-tight">Comodità</h3>
          <p className="mt-1.5 max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">Naturale, fredda o frizzante: sempre pronta, direttamente dal rubinetto di casa o dall'erogatore in ufficio.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

// ---------- Vetrina prodotti di punta ----------
const Showcase = () => {
  const [open, setOpen] = useState(null);
  const homeProducts = PRODUCTS.filter((p) => p.category === "casa").slice(0, 3);
  
  return (
    <section data-testid="showcase-section" className="mx-auto max-w-7xl px-5 sm:px-8 py-12 md:py-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionTitle eyebrow="Prodotti di punta" lines={["Depuratori pensati", "per ogni spazio."]} />
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {homeProducts.map((p, i) => (
          <div key={p.id} className={i === 1 ? "lg:mt-10" : ""}>
            <ProductCard item={p} index={i} onOpen={setOpen} tall />
          </div>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Link to="/prodotti" data-testid="showcase-all-products" className="group inline-flex items-center gap-2 rounded-full border border-[var(--navy)] px-7 py-3.5 font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white">
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
  { icon: Wrench, t: "Installazione rapida", d: "Installazione su richiesta o con il tuo idraulico di fiducia, senza opere murarie." },
  { icon: ShieldCheck, t: "Prodotti certificati", d: "Zero vincoli decennali: acquisti il depuratore e la proprietà è subito tua al 100%. Niente contratti a lungo termine." },
  { icon: Timer, t: "Senza obbligo di manutenzione", d: "Depuratore chiavi in mano, la ricarica la compri in autonomia." },
];

const Installation = () => {
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section data-testid="installation-section" className="relative overflow-hidden bg-[#06142B] text-white grain">
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 py-16 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle dark eyebrow="Chiavi in mano" lines={["Dall'idea al primo", "bicchiere. Pensiamo", "a tutto noi."]}>
            Un unico referente per scelta, installazione, collaudo e assistenza. Per case, uffici e attività commerciali.
          </SectionTitle>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[24px] [clip-path:inset(0_round_24px)]">
            <motion.img style={{ y: imgY, scale: 1.2 }} src="/img/venditore.jpg" alt="Tecnico al lavoro in cucina" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        <ol className="lg:col-span-7 lg:pl-10">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 0.06} className="group grid grid-cols-[auto_1fr] gap-6 border-b border-white/10 py-6 first:pt-0" data-testid={`install-step-${i + 1}`}>
              <span className="w-16 md:w-20 font-display text-4xl md:text-5xl font-black text-transparent [-webkit-text-stroke:1.2px_#7DD3FC] transition-colors group-hover:text-sky-400/30">0{i + 1}</span>
              <div>
                <s.icon className="h-6 w-6 text-sky-300" />
                <h3 className="mt-2 font-display text-xl md:text-2xl font-extrabold tracking-tight">{s.t}</h3>
                <p className="mt-1.5 text-sm md:text-base text-slate-300 leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <Link to="/installazione-servizi" data-testid="installation-more-link" className="group mt-8 inline-flex items-center gap-2 font-semibold text-sky-300 hover:text-white">
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
      <PromoWidget />
    </div>
  );
}