// Onde SVG in loop continuo, usate come transizione tra sezione scura e chiara
const WAVE = "M0 40 C 150 80 350 0 600 40 C 850 80 1050 0 1200 40 L1200 120 L0 120 Z";

export const Waves = ({ fill = "#F3F8FB", className = "" }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 overflow-hidden ${className}`}>
    <svg className="wave-b absolute bottom-0 h-full w-[200%] opacity-40" viewBox="0 0 2400 120" preserveAspectRatio="none">
      <path d={WAVE} fill="#38BDF8" />
      <path d={WAVE} transform="translate(1200 0)" fill="#38BDF8" />
    </svg>
    <svg className="wave-a absolute bottom-0 h-[80%] w-[200%]" viewBox="0 0 2400 120" preserveAspectRatio="none">
      <path d={WAVE} fill={fill} />
      <path d={WAVE} transform="translate(1200 0)" fill={fill} />
    </svg>
  </div>
);
