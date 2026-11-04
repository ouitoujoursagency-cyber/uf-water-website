import { motion } from "framer-motion";
import { MaskLines, Eyebrow } from "@/components/motion";
import { Waves } from "@/components/Waves";

// Intestazione delle pagine interne (sfondo scuro, titolo a maschera, onde)
export const PageHero = ({ eyebrow, lines, intro, image, testId }) => (
  <section data-testid={testId} className="relative overflow-hidden bg-[#06142B] text-white grain">
    {image && (
      <motion.img src={image} alt="" aria-hidden="true" initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 0.28 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 h-full w-full object-cover" />
    )}
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#06142B] via-[#06142B]/85 to-[#06142B]/40" />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-36 pb-36 md:pt-44 md:pb-44">
      <Eyebrow dark>{eyebrow}</Eyebrow>
      <h1 className="mt-6 max-w-4xl font-display font-black tracking-tight leading-[0.98] text-4xl sm:text-5xl lg:text-6xl">
        <MaskLines lines={lines} delay={0.15} />
      </h1>
      <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">{intro}</motion.p>
    </div>
    <Waves />
  </section>
);
