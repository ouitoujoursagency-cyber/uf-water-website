import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion";
import { whatsappLink } from "@/data/site";

// Banda finale di conversione (preventivo + WhatsApp + immagine cuore)
export const CtaBand = ({ title = "Pronto a bere acqua migliore?", text = "Sopralluogo e preventivo gratuiti, senza impegno. Ti rispondiamo entro un giorno lavorativo." }) => (
  <section className="mx-auto max-w-7xl px-5 sm:px-8 py-8 md:py-12">
    <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-sky-400 via-sky-500 to-teal-500 px-6 py-10 sm:px-12 md:py-14">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/15" />
      <div aria-hidden="true" className="absolute -bottom-32 right-40 h-64 w-64 rounded-full border-[30px] border-white/10" />
      
      {/* Griglia a 2 colonne: Sinistra testo/bottoni, Destra immagine del cuore */}
      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
        
        {/* Colonna di sinistra: Testo e Call to Action */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#06142B] leading-[1.02]">{title}</h2>
          <p className="mt-3 text-sm sm:text-base text-[#06142B]/80 leading-relaxed">{text}</p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/contatti" data-testid="cta-band-preventivo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#06142B] px-7 py-3.5 font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 shadow-md">
              Prenota un sopralluogo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="cta-band-whatsapp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-7 py-3.5 font-semibold text-[#06142B] transition-colors hover:bg-white shadow-md">
              <MessageCircle className="h-4 w-4 text-emerald-600" /> Scrivici su WhatsApp
            </a>
          </div>
        </div>

        {/* Colonna di destra: Immagine del cuore in un riquadro pulito */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-[24px] shadow-lg border border-white/25">
            <img 
              src="/img/cuore acqua.jpg" 
              alt="Cuore d'acqua pura" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </Reveal>
  </section>
);