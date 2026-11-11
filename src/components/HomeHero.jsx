import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { LiquidLogo } from "@/components/LiquidLogo";
import { MaskLines, Eyebrow } from "@/components/motion";
import { Waves } from "@/components/Waves";

export default function HomeHero({ onOpenPromo }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section ref={ref} onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }} data-testid="home-hero"
      className="relative min-h-[100svh] overflow-hidden bg-[#06142B] text-white grain">
      <div aria-hidden="true" className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-[120px]" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 sm:px-8 pt-28 pb-36 lg:grid-cols-12 lg:pt-32 min-h-[100svh]">
        <motion.div style={{ y: textY }} className="lg:col-span-7 order-2 lg:order-1">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Eyebrow dark>Depuratori d'acqua · Casa & Ufficio</Eyebrow>
          </motion.div>
          <h1 className="mt-6 font-display font-black tracking-tight leading-[0.95] text-[2.9rem] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            <MaskLines lines={[
              <>Acqua <span className="text-water">pura,</span></>,
              "sicura e",
              <span className="font-light italic text-sky-100">sostenibile.</span>,
            ]} delay={0.25} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-7 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Depuratori d'acqua di alta qualità direttamente dal produttore a casa o in ufficio. Senza intermediari, senza obblighi di manutenzione vincolante. Solo la libertà di un'acqua eccellente, ogni giorno.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link to="/contatti" data-testid="hero-cta-preventivo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-4 font-bold text-[#06142B] transition-[background-color,transform,box-shadow] duration-300 hover:bg-sky-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(56,189,248,.7)]">
              Prenota una consulenza gratuita <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/prodotti" data-testid="hero-cta-prodotti"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#06142B]">
              Scopri i Prodotti
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: stageY }} 
          onClick={onOpenPromo}
          className="lg:col-span-5 order-1 lg:order-2 [perspective:1100px] cursor-pointer group"
          title="Clicca per aprire le promozioni attive"
        >
          <motion.div style={{ rotateX: rotX, rotateY: rotY }} className="mx-auto w-[min(72vw,300px)] sm:w-[340px] lg:w-full max-w-[460px] [transform-style:preserve-3d] transition-transform duration-300 group-hover:scale-105">
            <LiquidLogo />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-28 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-300 md:flex">
        <ArrowDown className="h-4 w-4 animate-bounce" /> Scorri
      </div>
      <Waves />
    </section>
  );
}