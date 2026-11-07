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

// ---------- Vantaggi (bento allineato 12 colonne - compatto e fine) ----------
const Benefits = () => (
  <section data-testid="benefits-section" className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
    <SectionTitle eyebrow="Perché depurare" lines={["Quattro buone ragioni", "per cambiare acqua."]} className="max-w-3xl" />
    <div className="mt-10 grid gap-4 md:grid-cols-12 md:auto-rows-[minmax(220px,auto)]">
      <Reveal className="md:col-span-7 relative overflow-hidden rounded-[24px] bg-[#06142B] p-6 sm:p-8 text-white" data-testid="benefit-risparmio">
        <PiggyBank className="h-8 w-8 text-sky-300" />
        <h3 className="mt-6 font-display text-2xl sm:text-3xl font-black tracking-tight">Risparmio</h3>
        <p className="mt-2 max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">Niente più casse d'acqua da comprare, trasportare e stoccare. Il costo per litro diventa una frazione di quello dell'acqua in bottiglia.</p>
        <span aria-hidden="true" className="absolute -bottom-6 -right-2 font-display text-[8rem] font-black leading-none text-white/[0.06]">€</span>
      </Reveal>
      <Reveal delay={0.08} className="md:col-span-5 rounded-[24px] bg-teal-50 border border-teal-100 p-6 sm:p-8" data-testid="benefit-sostenibilita">
        <Leaf className="h-8 w-8 text-teal-700" />
        <h3 className="mt-6 font-display text-2xl sm:text-3xl font-black tracking-tight text-[var(--ink)]">Sostenibilità</h3>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">Meno plastica, meno trasporti, meno CO2. Ogni borraccia riempita al rubinetto è una bottiglia in meno nell'ambiente.</p>
      </Reveal>
      <Reveal delay={0.04} className="md:col-span-5 rounded-[24px] bg-white border border-slate-200 p-6 sm:p-8" data-testid="benefit-salute">
        <HeartPulse className="h-8 w-8 text-sky-600" />
        <h3 className="mt-6 font-display text-2xl sm:text-3xl font-black tracking-tight text-[var(--ink)]">Salute</h3>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">Ultrafiltrazione, carbone attivo e UV trattengono impurità, cloro e batteri, preservando i minerali utili.</p>
      </Reveal>
      <Reveal delay={0.12} className="md:col-span-7 relative min-h-[260px] overflow-hidden rounded-[24px]" data-testid="benefit-comodita">
        <img src="/img/pour.jpg" alt="Acqua versata in un bicchiere" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06142B]/90 via-[#06142B]/40 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-6 sm:p-8 text-white">
          <Sparkles className="h-8 w-8 text-sky-300" />
          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-black tracking-tight">Comodità</h3>
          <p className="mt-2 max-w-md text-sm sm:text-base text-slate-200 leading-relaxed">Naturale, fredda o frizzante: sempre pronta, direttamente dal rubinetto di casa o dall'erogatore in ufficio.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

// ---------- Vetrina prodotti di punta (Spazi ridotti sopra e sotto) ----------
const Showcase = () => {
  const [open, setOpen] = useState(null);
  
  // Filtriamo i prodotti domestici principali per la home
  const homeProducts = PRODUCTS.filter((p) => p.category === "casa").slice(0, 3);
  
  return (
    <section data-testid="showcase-section" className="mx-auto max-w-7xl px-5 sm:px-8 py-12 md:py-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionTitle eyebrow="Prodotti di punta" lines={["Depuratori pensati", "per ogni spazio."]} />
      </div>

      {/* Griglia pulita dei 3 prodotti di punta */}
      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {homeProducts.map((p, i) => (
          <div key={p.id} className={i === 1 ? "lg:mt-10" : ""}>
            <ProductCard item={p} index={i} onOpen={setOpen} tall />
          </div>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Link to="/prodotti" data-testid="showcase-all-products" className="group inline-flex items-center gap-2 rounded-full border border-[var(--navy)] px-7 py-3.5 font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white">
          Vedi tutta la gamma <ArrowRight className