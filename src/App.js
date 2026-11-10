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
import Privacy from "@/pages/Privacy";
import OrdinaKitManutenzione from "@/pages/OrdinaKitManutenzione";
import InvitaUnAmico from "@/pages/InvitaUnAmico"; // <-- 1. IMPORT DELLA NUOVA PAGINA
import { CookieBanner } from "./components/CookieBanner";
import AdminPreventivo from "@/pages/AdminPreventivo";

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
          <Route path="/accessori" element={<Extra />} />
          <Route path="/installazione-servizi" element={<Installazione />} />
          <Route path="/ordina-kit-manutenzione" element={<OrdinaKitManutenzione />} />
          <Route path="/invita-un-amico" element={<InvitaUnAmico />} /> {/* <-- 2. AGGIUNTA DELLA ROTTA */}
          <Route path="/normative-certificazioni" element={<Normative />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/admin/preventivo" element={<AdminPreventivo />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Navbar />
      <PageRoutes />
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;