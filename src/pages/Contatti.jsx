import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contatti() {
  return (
    <div className="bg-[#06142B] text-white pt-36 pb-10 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Sfondo sfumato decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl space-y-8">
        
        {/* Intestazione */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl font-black">Contatta UF Water</h1>
          <p className="text-xs sm:text-sm text-slate-300">Siamo a tua disposizione per informazioni, preventivi e assistenza personalizzata.</p>
        </div>

        {/* 4 Card Informazioni (Indirizzo, Telefono, Email, Orari) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card Indirizzo */}
          <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 grid place-items-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">Indirizzo</p>
              <p className="text-sm font-semibold text-slate-800">Brescia, Bergamo, Milano e provincia</p>
            </div>
          </div>

          {/* Card Telefono */}
          <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 grid place-items-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">Telefono</p>
              <a href="tel:+3933279088909" className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors">+39 33279088909</a>
            </div>
          </div>

          {/* Card Email */}
          <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 grid place-items-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">Email</p>
              <a href="mailto:ufwater@hotmail.com" className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors break-all">ufwater@hotmail.com</a>
            </div>
          </div>

          {/* Card Orari */}
          <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 grid place-items-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">Orari</p>
              <p className="text-xs font-semibold text-slate-800 leading-relaxed">Rispondiamo entro 24 ore.<br />Sopralluoghi su appuntamento.</p>
            </div>
          </div>

        </div>

        {/* Pulsante rapido WhatsApp in basso */}
        <div className="text-center pt-2 pb-2">
          <a 
            href="https://wa.me/393331234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" /> Contattaci direttamente su WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}