import { FileCheck2, Utensils, Microscope, BadgeCheck, Droplets, ShieldCheck, ClipboardList } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/motion";
import { CtaBand } from "@/components/CtaBand";

// Riferimenti normativi principali
const LAWS = [
  { code: "DM 25/2012", title: "Apparecchiature per il trattamento dell'acqua potabile", text: "Il Decreto del Ministero della Salute stabilisce i requisiti tecnici delle apparecchiature domestiche e non: materiali idonei, informazioni al consumatore, manutenzione e dichiarazione di conformità." },
  { code: "DM 174/2004", title: "Materiali a contatto con l'acqua destinata al consumo umano", text: "Definisce quali materiali possono essere utilizzati negli impianti di captazione, trattamento e distribuzione dell'acqua potabile, per evitare il rilascio di sostanze indesiderate." },
  { code: "Reg. CE 1935/2004", title: "Materiali a contatto con alimenti (MOCA)", text: "Il regolamento europeo garantisce che i materiali a contatto con alimenti e bevande non cedano sostanze in quantità pericolose per la salute." },
  { code: "D.Lgs. 18/2023", title: "Qualità delle acque destinate al consumo umano", text: "Recepisce la Direttiva (UE) 2020/2184 e fissa i parametri di qualità che l'acqua potabile deve rispettare fino al rubinetto." },
];

const CERTS = [
  { icon: Utensils, t: "Conformità alimentare", d: "Componenti, tubazioni e cartucce idonei al contatto con acqua potabile." },
  { icon: Microscope, t: "Test di laboratorio", d: "Prestazioni di filtrazione verificate con analisi su campioni d'acqua." },
  { icon: FileCheck2, t: "Dichiarazione di conformità", d: "Ogni installazione è accompagnata dalla documentazione prevista dal DM 25/2012." },
  { icon: BadgeCheck, t: "Tecnici qualificati", d: "Installazione e manutenzione eseguite da personale formato." },
];

const WHY = [
  { icon: Droplets, t: "Materiali sicuri", d: "Nessun componente cede sostanze all'acqua: lo garantiscono DM 174/2004 e Reg. CE 1935/2004." },
  { icon: ShieldCheck, t: "Filtrazione verificata", d: "I sistemi sono testati per trattenere ciò che promettono, senza alterare i parametri di potabilità." },
  { icon: ClipboardList, t: "Manutenzione tracciata", d: "Cambi filtro e sanificazioni regolari mantengono nel tempo le prestazioni del primo giorno." },
];

export default function Normative() {
  return (
    <div data-testid="normative-page">
      <PageHero testId="normative-hero" eyebrow="Normative & Certificazioni" image="/img/lab.jpg"
        lines={["Trasparenza totale,", <span className="text-water">sicurezza certificata.</span>]}
        intro="I nostri depuratori e le nostre installazioni rispettano le normative italiane ed europee sull'acqua potabile. Ecco cosa significa, in parole semplici." />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28" data-testid="laws-section">
        <SectionTitle eyebrow="Il quadro normativo" lines={["Le regole che", "rispettiamo ogni giorno."]} />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {LAWS.map((l, i) => (
            <Reveal key={l.code} delay={(i % 2) * 0.08} className="group rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(11,37,69,.35)]" data-testid={`law-card-${i + 1}`}>
              <span className="inline-block rounded-full bg-sky-50 px-4 py-1.5 font-mono text-sm font-medium text-sky-800">{l.code}</span>
              <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-[var(--ink)]">{l.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{l.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#06142B] text-white grain" data-testid="certs-section">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28">
          <SectionTitle dark eyebrow="Certificazioni" lines={["Materiali e sistemi", "sotto controllo."]} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06} className="rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur">
                <c.icon className="h-8 w-8 text-sky-300" />
                <h3 className="mt-6 font-display text-xl font-extrabold">{c.t}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 py-20 md:py-28 lg:grid-cols-12" data-testid="why-safe-section">
        <div className="lg:col-span-5">
          <SectionTitle eyebrow="In parole semplici" lines={["Perché la tua acqua", "è sicura al 100%."]}>
            Le certificazioni non sono burocrazia: sono la garanzia che ogni goccia che bevi passa attraverso materiali idonei, filtri verificati e un impianto mantenuto correttamente.
          </SectionTitle>
          <Reveal className="mt-10 aspect-[4/3] overflow-hidden rounded-[28px]">
            <img src="/img/lab.jpg" alt="Analisi di laboratorio dell'acqua" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
        <ol className="lg:col-span-7 lg:pl-8 space-y-5">
          {WHY.map((w, i) => (
            <Reveal as="li" key={w.t} delay={i * 0.08} className="flex gap-6 rounded-[28px] border border-slate-200 bg-white p-8">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-teal-500 text-white"><w.icon className="h-7 w-7" /></span>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-[var(--ink)]">{w.t}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand title="Vuoi vedere la documentazione?" text="Su richiesta ti inviamo schede tecniche e dichiarazioni di conformità dei sistemi che ti interessano." />
    </div>
  );
}
