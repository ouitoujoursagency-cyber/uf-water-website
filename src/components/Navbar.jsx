import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Lock, UserPlus } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NAV } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header data-testid="site-navbar" className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3">
      <div className={`mx-auto flex flex-col max-w-7xl rounded-3xl px-4 sm:px-6 py-3 transition-[background-color,box-shadow,border-color] duration-500 border ${scrolled || open ? "bg-[#06142B]/90 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,.5)]" : "bg-[#06142B]/80 backdrop-blur-md border-white/10"}`}>
        
        {/* ================= PRIMA RIGA: Logo + Menu Principale ================= */}
        <div className="flex items-center justify-between">
          <Link to="/" data-testid="nav-logo-link" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} data-testid={`nav-link-${n.id || n.to}`} end={n.to === "/"}
                className={({ isActive }) => `relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`}>
                {({ isActive }) => (
                  <>
                    {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                    <span className="relative">{n.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button data-testid="mobile-menu-toggle" onClick={() => setOpen((o) => !o)} aria-label="Apri menu"
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* ================= SECONDA RIGA: Area Venditori, Invita un amico, Consulenza ================= */}
        <div className="hidden lg:flex items-center justify-between pt-3 mt-3 border-t border-white/10">
          <div className="flex items-center gap-3">
            {/* Tasto Area Venditori */}
            <Link to="/area-venditori" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors">
              <Lock className="h-3.5 w-3.5 text-amber-400" /> Area Venditori
            </Link>

            <span className="text-slate-600">|</span>

            {/* Nuovo tasto Invita un amico */}
            <Link to="/invita-un-amico" className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors">
              <UserPlus className="h-3.5 w-3.5" /> Invita un amico
            </Link>
          </div>

          {/* Tasto Consulenza Gratuita (Scritto su due righe) */}
          <Link to="/contatti" data-testid="nav-cta-preventivo"
            className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2 text-xs font-bold text-[#06142B] transition-[background-color,transform] duration-300 hover:bg-sky-300 hover:-translate-y-0.5 text-center leading-tight">
            <span>Richiedi una<br />consulenza gratuita</span> 
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>

      </div>

      {/* ================= MENU MOBILE (Per smartphone) ================= */}
      <AnimatePresence>
        {open && (
          <motion.nav data-testid="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }} className="lg:hidden mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-[#06142B]/95 p-6 backdrop-blur-xl">
            {NAV.map((n, i) => (
              <motion.div key={n.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                <NavLink to={n.to} data-testid={`mobile-nav-link-${n.id || n.to}`} end={n.to === "/"}
                  className={({ isActive }) => `flex items-center justify-between border-b border-white/10 py-3 font-display text-lg font-bold ${isActive ? "text-sky-300" : "text-white"}`}>
                  {n.label} <ArrowUpRight className="h-4 w-4 opacity-60" />
                </NavLink>
              </motion.div>
            ))}
            
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link to="/area-venditori" className="flex items-center gap-2 text-sm text-slate-300 py-1">
                <Lock className="h-4 w-4 text-amber-400" /> Area Venditori
              </Link>
              <Link to="/invita-un-amico" className="flex items-center gap-2 text-sm text-sky-400 py-1">
                <UserPlus className="h-4 w-4" /> Invita un amico
              </Link>
              <Link to="/contatti" data-testid="mobile-cta-preventivo" className="mt-2 flex justify-center rounded-full bg-sky-400 py-3 text-xs font-bold text-[#06142B] text-center leading-tight">
                Richiedi una consulenza gratuita
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;