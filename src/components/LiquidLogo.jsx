import { motion } from "framer-motion";

// ============================================================
// Animazione iniziale: gocce d'acqua che fluttuano, si uniscono
// (filtro "goo") e si trasformano nel logo uf water technology
// ============================================================
const DROP = "M200 70C200 70 126 160 126 214a74 74 0 0 0 148 0C274 160 200 70 200 70Z";
const BLOBS = [
  { x: 52, y: 92, r: 22, d: 0 }, { x: 348, y: 64, r: 18, d: 0.12 }, { x: 362, y: 300, r: 26, d: 0.2 },
  { x: 34, y: 318, r: 20, d: 0.08 }, { x: 200, y: 18, r: 15, d: 0.25 }, { x: 96, y: 210, r: 14, d: 0.3 },
  { x: 310, y: 186, r: 16, d: 0.05 }, { x: 214, y: 384, r: 18, d: 0.34 }, { x: 140, y: 40, r: 11, d: 0.4 },
];
const EASE = [0.65, 0, 0.35, 1];

export const LiquidLogo = () => (
  <svg viewBox="0 0 400 420" className="h-full w-full overflow-visible" data-testid="hero-liquid-logo" role="img" aria-label="Logo uf water technology">
    <defs>
      <linearGradient id="liq" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7DD3FC" /><stop offset=".45" stopColor="#38BDF8" /><stop offset="1" stopColor="#14B8A6" />
      </linearGradient>
      <radialGradient id="glow"><stop offset="0" stopColor="#38BDF8" stopOpacity=".45" /><stop offset="1" stopColor="#38BDF8" stopOpacity="0" /></radialGradient>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="b" />
        <feColorMatrix in="b" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" />
      </filter>
    </defs>

    {/* alone luminoso */}
    <motion.circle cx="200" cy="215" r="190" fill="url(#glow)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1.6 }} />

    {/* Fase 1-2: gocce liquide che convergono e si fondono */}
    <motion.g filter="url(#goo)" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 3.1, duration: 0.6 }}>
      {BLOBS.map((b, i) => (
        <motion.circle key={i} fill="url(#liq)"
          initial={{ cx: b.x, cy: b.y, r: b.r }}
          animate={{ cx: [b.x, b.x * 0.55 + 90, 200], cy: [b.y, b.y * 0.55 + 96, 222], r: [b.r, b.r * 1.15, 26] }}
          transition={{ duration: 2.3, delay: b.d, ease: EASE, times: [0, 0.5, 1] }} />
      ))}
      <motion.path d={DROP} fill="url(#liq)" style={{ transformBox: "fill-box", originX: "50%", originY: "65%" }}
        initial={{ scale: 0 }} animate={{ scale: [0, 0.55, 1] }} transition={{ delay: 1.7, duration: 1.3, ease: EASE }} />
    </motion.g>

    {/* cerchi d'acqua sotto il logo */}
    <g transform="translate(0 0)">
      {[0, 1.2, 2.4].map((d) => (
        <ellipse key={d} className="ripple" cx="200" cy="356" rx="120" ry="18" fill="none" stroke="#7DD3FC" strokeWidth="1.2" style={{ animationDelay: `${3 + d}s` }} />
      ))}
    </g>

    {/* Fase 3: logo nitido, con leggero galleggiamento */}
    <motion.g animate={{ y: [0, -8, 0] }} transition={{ delay: 3.6, duration: 5, repeat: Infinity, ease: "easeInOut" }}>
      <motion.path d={DROP} fill="url(#liq)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7, duration: 0.6 }} />
      <motion.path d="M148 108 C 170 80 186 66 196 56" stroke="#fff" strokeOpacity=".55" strokeWidth="6" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 3.2, duration: 0.8 }} transform="translate(-4 70) rotate(-8 170 80)" />
      <motion.text x="200" y="232" textAnchor="middle" fill="#fff" fontFamily="Montserrat" fontWeight="900" fontSize="74" letterSpacing="-3"
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.0, duration: 0.8, ease: EASE }}>uf</motion.text>
      <motion.path d="M150 254 q12.5 -10 25 0 t25 0 t25 0 t25 0" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 3.3, duration: 0.9, ease: EASE }} />
    </motion.g>

    <motion.text x="200" y="402" textAnchor="middle" fill="#BAE6FD" fontFamily="JetBrains Mono" fontSize="13" letterSpacing="6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6, duration: 1 }}>WATER TECHNOLOGY</motion.text>
  </svg>
);
