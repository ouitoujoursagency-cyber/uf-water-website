import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#06142B] text-white pt-36 pb-12 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Sfondo sfumato decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl space-y-10">
        
        {/* Intestazione */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl font-black">Contatta UF Water</h1>
          <p className="text-xs sm:text-sm text-slate-300">Siamo a tua disposizione per informazioni, preventivi e assistenza personalizzata.</p>
        </div>

        {/* 4 Card Informazioni (Indirizzo, Telefono, Email, Orari) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 grid place-items-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">Indirizzo</p>
              <p className="text-sm font-semibold text-slate-800">Brescia, Bergamo, Milano e provincia</p>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 grid place-items-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">Telefono</p>
              <a href="tel:+3933279088909" className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors">+39 33279088909</a>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 grid place-items-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-1">Email</p>
              <a href="mailto:ufwater@hotmail.com" className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors break-all">ufwater@hotmail.com</a>
            </div>
          </div>

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

        {/* Modulo di Contatto e WhatsApp */}
        <div className="max-w-3xl mx-auto bg-white text-slate-900 rounded-[32px] p-6 sm:p-10 shadow-2xl border border-slate-200">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-2 text-center">
                <h3 className="font-display text-2xl font-black text-slate-900">Invia un messaggio</h3>
                <p className="text-xs text-slate-500">Compila il form per essere ricontattato al più presto.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Nome e Cognome *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Il tuo nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Email *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="tua@email.it"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Numero di Telefono *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="Il tuo numero"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Messaggio *</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Come possiamo aiutarti?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full rounded-full bg-[#06142B] py-4 font-bold text-white hover:bg-sky-600 transition-colors shadow-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
              >
                Invia Messaggio <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-slate-900">Messaggio Inviato!</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Grazie {formData.name}, il tuo messaggio è stato ricevuto. Ti ricontatteremo al più presto.
              </p>
              <button 
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-500 hover:text-slate-800 underline mt-4 block mx-auto"
              >
                Invia un altro messaggio
              </button>
            </div>
          )}
        </div>

        {/* Pulsante rapido WhatsApp in basso */}
        <div className="text-center pt-1 pb-2">
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