import { Link } from "react-router-dom";
import { Zap, FlaskConical, SprayCan, Headphones, CalendarCheck, Wrench, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/motion";
import { CtaBand } from "@/components/CtaBand";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PROCESS = [
  ["Sopralluogo e analisi", "Un tecnico verifica impianto, spazi disponibili e qualità dell'acqua di rete."],
  ["Proposta su misura", "Ricevi un preventivo chiaro con sistema, accessori e tempi di installazione."],
  ["Installazione professionale", "Montaggio a regola d'arte, senza opere murarie, lasciando tutto pulito."],
  ["Collaudo e consegna", "Test di tenuta e prestazioni, sanificazione e spiegazione d'uso."],
];

const BENEFITS = [
  { icon: Zap, t: "Installazione rapida", d: "Nella maggior parte dei casi l'impianto è operativo in giornata." },
  { icon: FlaskConical, t: "Collaudo certificato", d: "Verifichiamo pressione, portata e parametri dell'acqua trattata." },
  { icon: SprayCan, t: "Sanificazione iniziale", d: "Sanifichiamo l'impianto con prodotti per uso alimentare prima del primo utilizzo." },
];

const PLANS = [
  { name: "Base", for: "Casa", items: ["Cambio filtri annuale", "Sanificazione impianto", "Promemoria automatico"] },
  { name: "Plus", for: "Casa", featured: true, items: ["Cambio filtri programmato", "Sanificazione + lampada UV", "Interventi prioritari", "Ricambi originali inclusi"] },
  { name: "Business", for: "Ufficio", items: ["Manutenzione periodica su calendario", "Fornitura CO2 programmata", "Report interventi", "Referente dedicato"] },
];

const FAQ = [
  ["Servono lavori di muratura?", "No. I sistemi sotto-lavello e gli erogatori si collegano all'impianto esistente senza opere murarie."],
  ["Ogni quanto vanno cambiati i filtri?", "Dipende dal sistema e dai consumi; indicativamente ogni 6–12 mesi. Con i piani di manutenzione ti avvisiamo noi."],
  ["Installate anche in uffici e locali commerciali?", "Sì, progettiamo soluzioni per uffici, studi professionali, palestre, bar e ristoranti."],
];

export default function Installazione() {
  return (
    <div data-testid="installation-page">
      <PageHero testId="installation-hero" eyebrow="Installazione & Servizi" image="/img/installer.jpg"
        lines={["Installazione", <span className="text-water">chiavi in mano.</span>]}
        intro="Tecnici specializzati per case e uffici: dal sopralluogo al collaudo, fino all'assistenza post-vendita e alla manutenzione programmata. Servizio solo su richiesta senza obblighi" />

      {/* Processo in 4 fasi */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28" data-testid="install-process">
        <SectionTitle eyebrow="Come lavoriamo" lines={["Quattro fasi,", "zero sorprese."]} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08} className="relative rounded-[28px] border border-slate-200 bg-white p-7" data-testid={`process-step-${i + 1}`}>
              <span className="font-display text-6xl font-black text-transparent [-webkit-text-stroke:1.2px_#0EA5E9]">0{i + 1}</span>
              <h3 className="mt-6 font-display text-xl font-extrabold text-[var(--ink)]">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vantaggi del servizio */}
      <section className="relative overflow-hidden bg-[#06142B] text-white grain">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 py-20 md:py-28 lg:grid-cols-12">
          <SectionTitle dark className="lg:col-span-5" eyebrow="I vantaggi" lines={["Un lavoro fatto", "come si deve."]}>
            Personale formato, materiali certificati per il contatto con acqua potabile e documentazione completa a fine lavoro.
          </SectionTitle>
          <div className="lg:col-span-7 grid gap-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08} className="flex gap-5 rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-400 text-[#06142B]"><b.icon className="h-6 w-6" /></span>
                <div>
                  <h3 className="font-display text-xl font-extrabold">{b.t}</h3>
                  <p className="mt-1 text-slate-300">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assistenza post-vendita */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 py-20 md:py-28 lg:grid-cols-2 lg:items-center" data-testid="after-sales">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
          <img src="/img/cartridges.jpg" alt="Cartucce filtranti di ricambio" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <div>
          <SectionTitle eyebrow="Assistenza post-vendita" lines={["Sempre al tuo fianco,", "anche dopo."]}>
            Un servizio clienti dedicato, interventi rapidi su chiamata e ricambi originali sempre disponibili.
          </SectionTitle>
          <ul className="mt-8 space-y-4">
            {[[Headphones, "Supporto telefonico e WhatsApp"], [Wrench, "Interventi tecnici a domicilio e in sede"], [CalendarCheck, "Promemoria per cambio filtri e sanificazione"]].map(([I, t]) => (
              <li key={t} className="flex items-center gap-4 text-[var(--ink)]"><I className="h-5 w-5 text-teal-700" /> {t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Piani di manutenzione */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-20 md:pb-28" data-testid="maintenance-plans">
        <SectionTitle eyebrow="Manutenzione programmata" lines={["Scegli il piano", "che fa per te."]} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} data-testid={`plan-${p.name.toLowerCase()}`}
              className={`flex flex-col rounded-[28px] p-8 ${p.featured ? "bg-[#06142B] text-white md:-translate-y-4 shadow-[0_30px_60px_-20px_rgba(6,20,43,.5)]" : "bg-white border border-slate-200"}`}>
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs uppercase tracking-widest ${p.featured ? "text-sky-300" : "text-teal-700"}`}>{p.for}</span>
                {p.featured && <span className="rounded-full bg-sky-400 px-3 py-1 text-xs font-bold text-[#06142B]">Consigliato</span>}
              </div>
              <h3 className="mt-4 font-display text-3xl font-black">Piano {p.name}</h3>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className={`flex gap-3 text-sm ${p.featured ? "text-slate-200" : "text-slate-700"}`}><Check className="h-4 w-4 shrink-0 text-teal-500 mt-0.5" />{it}</li>
                ))}
              </ul>
              <Link to={`/contatti?prodotto=${encodeURIComponent("Piano " + p.name)}&interesse=${p.for === "Ufficio" ? "ufficio" : "casa"}`} data-testid={`plan-cta-${p.name.toLowerCase()}`}
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold transition-colors ${p.featured ? "bg-sky-400 text-[#06142B] hover:bg-sky-300" : "border border-slate-300 text-[var(--ink)] hover:bg-[#06142B] hover:text-white"}`}>
                Richiedi il piano <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Domande frequenti */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-20 md:pb-28" data-testid="install-faq">
        <SectionTitle eyebrow="Domande frequenti" lines={["Hai dei dubbi?"]} />
        <Accordion type="single" collapsible className="mt-10">
          {FAQ.map(([q, a], i) => (
            <AccordionItem key={q} value={`f${i}`} className="border-slate-200">
              <AccordionTrigger data-testid={`faq-trigger-${i + 1}`} className="py-6 text-left font-display text-lg font-bold text-[var(--ink)] hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand title="Prenota il sopralluogo gratuito" />
    </div>
  );
}
