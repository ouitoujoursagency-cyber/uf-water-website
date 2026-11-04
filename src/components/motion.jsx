import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Rivelazione "a maschera" riga per riga (titoli)
export const MaskLines = ({ lines, className = "", delay = 0.1, inView = false }) => {
  const trigger = inView
    ? { whileInView: { y: "0%" }, viewport: { once: true, amount: 0.1 } }
    : { animate: { y: "0%" } };
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            {...trigger}
            transition={{ duration: 1.05, ease: EASE, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Comparsa allo scroll (dissolvenza + salita)
export const Reveal = ({ children, className = "", delay = 0, y = 36, as = "div", ...rest }) => {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

// Etichetta "eyebrow" con trattino
export const Eyebrow = ({ children, dark = false, className = "" }) => (
  <p className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] ${dark ? "text-sky-300" : "text-teal-700"} ${className}`}>
    <span className={`h-px w-8 ${dark ? "bg-sky-300" : "bg-teal-700"}`} />
    {children}
  </p>
);
