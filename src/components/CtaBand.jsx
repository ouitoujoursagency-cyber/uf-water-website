import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion";
import { whatsappLink } from "@/data/site";

// Banda finale di conversione ultra-compatta e bassa
export const CtaBand = ({ title = "Pronto a bere acqua migliore?", text = "Sopralluogo e preventivo gratuiti, senza impegno. Ti rispondiamo entro un giorno lavorativo." }) => (
  <section className="mx-auto max-w-7xl px-5 sm:px-8 py-6 md:py-8">
    <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-sky-400 via-sky-500 to-teal-500 px-6 py-8 sm:px-10 md:py-10">
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-60 w-60 rounded-full border-[30px] border-white/15" />
      
      {/* Griglia a 2 colonne ribassata e compatta */}
      <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
        
        {/* Colonna di sinistra: Testo e Call to Action ridotti */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#06142B] leading-tight">{title}</h2>
          <p className="mt-2 text-xs sm:text-sm text-[#06142B]/85 leading-relaxed max-w-lg">{text}</p>
          
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link to="/contatti" data-testid="cta-band-preventivo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#06142B] px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 shadow-sm">
              Prenota un sopralluogo <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="cta-band-whatsapp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#06142B] transition-colors hover:bg-white shadow-sm">
              <MessageCircle className="h-3.5 w-3.5 text-emerald-600" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Colonna di destra: Immagine del cuore più bassa e contenuta */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full aspect-[21/9] lg:aspect-[16/9] overflow-hidden rounded-[20px] shadow-md border border-white/25">
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