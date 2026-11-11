import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, X, Sparkles, MessageCircle, Instagram, Facebook, Copy, Check, ZoomIn } from "lucide-react";
import { LiquidLogo } from "@/components/LiquidLogo";
import { MaskLines, Eyebrow } from "@/components/motion";
import { Waves } from "@/components/Waves";

export default function HomeHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);
  const promoLink = window.location.href;

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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(promoLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = (platform) => {
    let url = "";
    const text = "Guarda queste fantastiche promozioni attive su UF Water! " + promoLink;
    if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(promoLink)}`;
    } else if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    } else if (platform === "instagram") {
      navigator.clipboard.writeText(promoLink);
      alert("Link copiato! Incollalo nelle tue storie o post su Instagram.");
      return;
    }
    if (url) window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <>
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

          {/* Goccia interattiva */}
          <motion.div 
            style={{ y: stageY }} 
            onClick={() => setIsOpen(true)}
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

      {/* Pop-up Orizzontale collegato direttamente alla Goccia */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-[32px] p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-600 font-mono text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> Offerte Speciali UF Water
                </div>

                <div 
                  onClick={() => setIsZoomed(true)}
                  className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 p-2 flex items-center justify-center cursor-pointer group"
                >
                  <img 
                    src="/img/promo.jpg" 
                    alt="Promozioni UF Water" 
                    className="w-full h-auto object-contain rounded-xl max-h-[380px] group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                    <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4" /> Ingrandisci
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-left flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Approfitta delle Promozioni Attive!
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Non lasciarti sfuggire le occasioni del mese: approfitta subito delle promozioni attive sui nostri impianti di purificazione e scopri tutti i vantaggi riservati a te.
                </p>

                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Copia link della promozione</p>
                  <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                    <input 
                      type="text" 
                      readOnly 
                      value={promoLink} 
                      className="bg-transparent text-xs text-slate-600 px-2 w-full outline-none select-all"
                    />
                    <button 
                      onClick={handleCopyLink}
                      className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition-colors shrink-0 shadow"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? "Copiato!" : "Copia"}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">Condividi la promozione</p>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => handleShare("facebook")}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors shadow-md"
                    >
                      <Facebook className="w-4 h-4" /> Facebook
                    </button>
                    <button 
                      onClick={() => handleShare("whatsapp")}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </button>
                    <button 
                      onClick={() => handleShare("instagram")}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-md"
                    >
                      <Instagram className="w-4 h-4" /> Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SOTTOMODALE ZOOM */}
      {isZoomed && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fadeIn">
          <button 
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-2xl"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img 
              src="/img/promo.jpg" 
              alt="Promozioni Ingrandita" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </>
  );
}