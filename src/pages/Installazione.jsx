import { Link } from "react-router-dom";
import { Zap, FlaskConical, SprayCan, Headphones, CalendarCheck, Wrench, ArrowRight } from "lucide-react";
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

const FAQ = [
  ["Il servizio di installazione o manutenzione è obbligatorio?", "Assolutamente no! Il depuratore è tuo dopo l'acquisto e sei completamente libero: non ci sono abbonamenti obbligatori né vincoli contrattuali."],
  ["Servono lavori di muratura?", "No. I sistemi sotto-lavello e gli erogatori si collegano all'impianto esistente senza opere murarie."],
  ["Ogni quanto vanno cambiati i filtri?", "Dipende dal sistema e dai consumi; indicativamente ogni 6–12 mesi. Puoi richiederci assistenza o i ricambi in qualsiasi momento senza alcun obbligo."],
  ["Installate anche in uffici e locali commerciali?", "Sì, progettiamo soluzioni per uffici, studi professionali, palestre, bar e ristoranti."],
];

export default function Installazione() {
  return (
    <div data-testid="installation-page">
      <PageHero testId="installation-hero" eyebrow="Installazione & Servizi" image="/img/installer.jpg"
        lines={["Installazione", <span className="text-water">chiavi in mano.</span>]}
        intro="Tecnici specializzati per case e uffici: dal sopralluogo al collaudo, fino all'assistenza post-vendita e alla manutenzione programmata. Servizio solo su richiesta senza obblighi" />

      {/* Processo in 4 fasi - Spazi ridotti */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-10 md:py-14" data-testid="install-process">
        <div className="text-center mx-auto">
          <SectionTitle centered eyebrow="Come lavoriamo" lines={["Quattro fasi,", "zero sorprese."]} />
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08} className="relative rounded-[28px] border border-white/10 bg-[#06142B] p-6 text-white shadow-xl flex flex-col justify-between" data-testid={`process-step-${i + 1}`}>
              <div>
                <span className="font-display text-5xl font-black text-sky-400">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-extrabold text-white">{t}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vantaggi del servizio - Spazi ridotti */}
      <section className="relative overflow-hidden bg-[#06142B] text-white grain py-12 md:py-16">
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-12 items-center">
          <SectionTitle dark className="lg:col-span-5" eyebrow="I vantaggi" lines={["Un lavoro fatto", "come si deve."]}>
            Personale formato, materiali certificati per il contatto con acqua potabile e documentazione completa a fine lavoro.
          </SectionTitle>
          <div className="lg:col-span-7 grid gap-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08} className="flex gap-4 rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-400 text-[#06142B]"><b.icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-display text-lg font-extrabold">{b.t}</h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-slate-300">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assistenza post-vendita - Spazi ridotti */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 py-12 md:py-16 lg:grid-cols-2 lg:items-center" data-testid="after-sales">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
          <img src="/img/cartridges.jpg" alt="Cartucce filtranti di ricambio" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <div>
          <SectionTitle eyebrow="Assistenza post-vendita" lines={["Sempre al tuo fianco,", "anche dopo."]}>
            Un servizio clienti dedicato, interventi rapidi su chiamata e ricambi originali sempre disponibili, senza contratti vincolanti.
          </SectionTitle>
          <ul className="mt-6 space-y-3">
            {[[Headphones, "Supporto telefonico e WhatsApp"], [Wrench, "Interventi tecnici a domicilio e in sede a chiamata"], [CalendarCheck, "Disponibilità per ricambi e sanificazioni su richiesta"]].map(([I, t]) => (
              <li key={t} className="flex items-center gap-3 text-sm text-[var(--ink)]"><I className="h-4 w-4 text-teal-700 shrink-0" /> {t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Domande frequenti - Spazi ridotti */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-12 md:pb-16" data-testid="install-faq">
        <div className="text-center mx-auto">
          <SectionTitle centered eyebrow="Domande frequenti" lines={["Hai dei dubbi?"]} />
        </div>
        <Accordion type="single" collapsible className="mt-6">
          {FAQ.map(([q, a], i) => (
            <AccordionItem key={q} value={`f${i}`} className="border-slate-200">
              <AccordionTrigger data-testid={`faq-trigger-${i + 1}`} className="py-4 text-left font-display text-base font-bold text-[var(--ink)] hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand title="Prenota il sopralluogo gratuito" />
    </div>
  );
}