import { Link } from "react-router-dom";

// Marchio: goccia con doppia onda (stesso disegno della favicon)
export const LogoMark = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="uf-mark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#14B8A6" />
      </linearGradient>
    </defs>
    <path d="M32 3C32 3 9 28 9 41a23 23 0 0 0 46 0C55 28 32 3 32 3Z" fill="url(#uf-mark)" />
    <path d="M18 42q7-6 14 0t14 0" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M22 50q5-4 10 0t10 0" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const Logo = ({ light = true, testId = "brand-logo" }) => (
  <Link to="/" data-testid={testId} className="group flex items-center gap-2.5" aria-label="uf water technology - Home">
    <LogoMark className="w-9 h-9 transition-transform duration-500 group-hover:-rotate-12" />
    <span className="leading-none">
      <span className={`block font-display font-black text-xl tracking-tight ${light ? "text-white" : "text-[var(--ink)]"}`}>uf</span>
      <span className={`block font-mono text-[10px] uppercase tracking-[0.22em] ${light ? "text-sky-200" : "text-slate-600"}`}>water technology</span>
    </span>
  </Link>
);
