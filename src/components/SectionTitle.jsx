import { Eyebrow, MaskLines } from "@/components/motion";

// Titolo di sezione con eyebrow e rivelazione a maschera allo scroll
export const SectionTitle = ({ eyebrow, lines, dark = false, className = "", children }) => (
  <div className={className}>
    <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
    <h2 className={`mt-5 font-display font-black tracking-tight leading-[1.02] text-3xl sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-[var(--ink)]"}`}>
      <MaskLines lines={lines} inView delay={0} />
    </h2>
    {children && <p className={`mt-5 max-w-xl text-base md:text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{children}</p>}
  </div>
);
