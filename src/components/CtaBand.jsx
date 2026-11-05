import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion";
import { whatsappLink } from "@/data/site";

// Banda finale di conversione (preventivo + WhatsApp)
export const CtaBand = ({ title = "Pronto a bere acqua migliore?", text = "Sopralluogo e preventivo gratuiti, senza impegno. Ti rispondiamo entro un giorno lavorativo." }) => (
  <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 md:py-24">
    <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-sky-400 via-sky-500 to-teal-500 px-6 py-14 sm:px-14 md:py-20">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/15" />
      <div aria-hidden="true" className="absolute -bottom-32 right-40 h-64 w-64 rounded-full border-[30px] border-white/10" />
      <div className="relative grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#06142B] leading-[1.02]">{title}</h2>
          <p className="mt-4 max-w-xl text-base md:text-lg text-[#06142B]/80">{text}</p>
        </div>
        <div className="md:col-span-4 flex flex-col gap-3">
          <Link to="/contatti" data-testid="cta-band-preventivo"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#06142B] px-7 py-4 font-bold text-white transition-transform duration-300 hover:-translate-y-0.5">
            Prenota un sopralluogo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="cta-band-whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-7 py-4 font-semibold text-[#06142B] transition-colors hover:bg-white">
            <MessageCircle className="h-4 w-4" /> Scrivici su WhatsApp
          </a>
        </div>
      </div>
    </Reveal>
  </section>
);