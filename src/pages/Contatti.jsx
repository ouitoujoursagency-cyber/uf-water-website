import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { MaskLines, Eyebrow, Reveal } from "@/components/motion";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY, whatsappLink } from "@/data/site";

const INFO = [
  { icon: MapPin, label: "Indirizzo", value: COMPANY.address, id: "address" },
  { icon: Phone, label: "Telefono", value: COMPANY.phone, href: COMPANY.phoneHref, id: "phone" },
  { icon: Mail, label: "Email", value: COMPANY.email, href: COMPANY.emailHref, id: "email" },
  { icon: Clock, label: "Orari", value: COMPANY.hours.join(" · "), id: "hours" },
];

export default function Contatti() {
  return (
    <div data-testid="contact-page" className="relative">
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[#06142B] grain" aria-hidden="true" />
      <section className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 pt-36 pb-20 md:pt-44 lg:grid-cols-12">
        <div className="lg:col-span-5 text-white">
          <Eyebrow dark>Contatti</Eyebrow>
          <h1 className="mt-6 font-display font-black tracking-tight leading-[0.98] text-4xl sm:text-5xl lg:text-6xl">
            <MaskLines lines={["Parliamo della", <span className="text-water">tua acqua.</span>]} delay={0.15} />
          </h1>
          <p className="mt-6 max-w-md text-slate-300 leading-relaxed">Compila il modulo per un preventivo gratuito, oppure scrivici direttamente su WhatsApp.</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-button"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 font-bold text-white transition-transform duration-300 hover:-translate-y-0.5">
            <MessageCircle className="h-5 w-5" /> Chatta su WhatsApp
          </a>
        </div>
        <Reveal className="lg:col-span-7" y={40}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24" data-testid="company-info">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06} className="rounded-[24px] border border-slate-200 bg-white p-7">
              <c.icon className="h-6 w-6 text-sky-600" />
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-slate-500">{c.label}</p>
              {c.href
                ? <a href={c.href} data-testid={`contact-info-${c.id}`} className="mt-1 block font-semibold text-[var(--ink)] hover:text-sky-700 break-words">{c.value}</a>
                : <p data-testid={`contact-info-${c.id}`} className="mt-1 font-semibold text-[var(--ink)]">{c.value}</p>}
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5 grid h-64 place-items-center rounded-[28px] border border-dashed border-slate-300 bg-white text-center text-slate-500" data-testid="map-placeholder">
          <div><MapPin className="mx-auto h-8 w-8 text-sky-500" /><p className="mt-3 text-sm">[Mappa Google — inserire l'indirizzo reale]</p></div>
        </Reveal>
      </section>
    </div>
  );
}
