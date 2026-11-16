import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/site"; // Importiamo i dati aziendali centralizzati

// Pulsante WhatsApp fluttuante (sempre visibile)
export const WhatsAppButton = () => {
  // Puliamo il numero di telefono per formattare correttamente il link di WhatsApp
  const cleanPhone = COMPANY.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Salve,%20vorrei%20informazioni%20sui%20vostri%20servizi`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-button"
      aria-label="Scrivici su WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,.6)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
};