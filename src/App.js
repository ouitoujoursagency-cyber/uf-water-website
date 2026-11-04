import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import Prodotti from "@/pages/Prodotti";
import Extra from "@/pages/Extra";
import Installazione from "@/pages/Installazione";
import Normative from "@/pages/Normative";
import Contatti from "@/pages/Contatti";
import { CookieBanner } from "./components/CookieBanner";

// Transizione morbida tra le pagine (le pagine si sovrappongono, niente schermo vuoto)
const PageRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/articoli-extra" element={<Extra />} />
          <Route path="/installazione-servizi" element={<Installazione />} />
          <Route path="/normative-certificazioni" element={<Normative />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
};

function App() {
 const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  }; 
  return (
    {showBanner && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#1e293b',
          color: '#ffffff',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 -4px 10px rgba(0,0,0,0.2)',
          zIndex: 9999,
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '14px'
        }}>
          <div style={{ flex: '1 1 300px' }}>
            Questo sito utilizza i cookie per migliorare l'esperienza utente. Continuando la navigazione accetti l'uso dei cookie. Leggi la nostra <a href="#privacy" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Privacy Policy</a>.
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={handleDecline}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #94a3b8',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Rifiuta
            </button>
            <button 
              onClick={handleAccept}
              style={{
                backgroundColor: '#0284c7',
                border: 'none',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Accetta tutti
            </button>
          </div>
        </div>
      )}
    <BrowserRouter>
      <SmoothScroll />
      <Navbar />
      <PageRoutes />
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}
<CookieBanner />

export default App;
