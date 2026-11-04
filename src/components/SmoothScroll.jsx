import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Scorrimento fluido "a inerzia" con Lenis + ritorno in cima a ogni cambio pagina
export const SmoothScroll = () => {
  const lenisRef = useRef(null);
  const { pathname, search } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    window.__lenis = lenis;
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};
