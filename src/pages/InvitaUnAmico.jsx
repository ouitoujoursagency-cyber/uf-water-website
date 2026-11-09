import { useState } from "react";
import { Users, Gift, Share2, CheckCircle2, MessageCircle, ArrowRight, Droplet, Sparkles } from "lucide-react";

export default function InvitaUnAmico() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    friendEmail: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralLink = formData.email 
    ? `https://ufwater.it/ref/${btoa(formData.email).slice(0, 8)}` 
    : "https://ufwater.it/ref/tuo-codice";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-40 pb-24 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Elementi decorativi di sfondo sfumati */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10 space-y-16">
        
        {/* Sezione Principale / Hero & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Testo a Sinistra */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sky-400 font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Programma Referral UF Water
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Condividi l'acqua pura. <span className="text-sky-400">Guadagna vantaggi.</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              Fai conoscere UF Water a un amico: tu ricevi un <strong>kit di filtri originali in omaggio</strong>, mentre il tuo amico ottiene subito uno <strong>sconto del 15%</strong> sul suo primo impianto di purificazione[cite: 7].
            </p>

            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-2">Hai bisogno di supporto immediato?</p>
              <a 
                href="https://wa.me/393331234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" /> Scrivici su WhatsApp
              </a>
            </div>
          </div>

          {/* Form a Destra */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-[32px] p-6 sm:p-10 shadow-2xl border border-slate-200">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="font-display text-xl font-black text-slate-900">Inizia subito a invitare</h3>
                    <p className="text-xs text-slate-500">Inserisci i tuoi dati per generare il tuo link personale.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Nome *</label>
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
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Cognome *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Il tuo cognome"
                        value={formData.surname}
                        onChange={(e) => setFormData({...formData, surname: e.target.value})}
                        className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Email del tuo amico (facoltativo)</label>
                    <input 
                      type="email" 
                      placeholder="amico@email.it (invieremo subito l'invito)"
                      value={formData.friendEmail}
                      onChange={(e) => setFormData({...formData, friendEmail: e.target.value})}
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full rounded-full bg-[#06142B] py-4 font-bold text-white hover:bg-sky-600 transition-colors shadow-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
                  >
                    Genera il mio Link Amico <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-slate-900">Link Generato con Successo!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ottimo {formData.name}, il tuo link referral è pronto. Condividilo con i tuoi amici per iniziare ad accumulare kit filtri omaggio.
                  </p>

                  <div className="bg-slate-100 p-3 rounded-2xl border border-slate-200 flex items-center justify-between gap-2 mt-4">
                    <span className="text-xs font-mono text-slate-700 truncate px-2">{referralLink}</span>
                    <button 
                      onClick={handleCopyLink}
                      className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-500 transition-colors whitespace-nowrap"
                    >
                      {copied ? "Copiato!" : "Copia Link"}
                    </button>
                  </div>

                  <button 
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline mt-4 block mx-auto"
                  >
                    Modifica dati inseriti
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Come Funziona (3 Step) */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-black">Come funziona in 3 semplici passi</h2>
            <p className="text-xs text-slate-400 mt-2">Un processo semplice e trasparente per premiare la tua fiducia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-400 grid place-items-center font-bold text-sm">1</div>
              <h4 className="font-bold text-base">Condividi il link</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Genera il tuo link personale in un click e invialo ai tuoi amici o familiari interessati all'acqua pura.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-400 grid place-items-center font-bold text-sm">2</div>
              <h4 className="font-bold text-base">L'amico acquista</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Il tuo amico sceglie il suo impianto UF Water e riceve subito uno sconto esclusivo del 15% sul totale[cite: 7].</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 grid place-items-center font-bold text-sm">3</div>
              <h4 className="font-bold text-base">Ricevi il tuo premio</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Appena completata l'installazione del tuo amico, ricevi il kit filtri di ricambio omaggio direttamente a casa.</p>
            </div>
          </div>
        </div>

        {/* Sezione Immagini (Portaunamico.jpg e Portaunamico2.jpg in riquadri quadrati, non invadenti) */}
        <div className="pt-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-display text-xl font-bold">Galleria & Esperienze</h3>
            <p className="text-xs text-slate-400 mt-1">Immagini ufficiali del programma Porta un Amico.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Immagine 1 */}
            <div className="aspect-square w-full rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-xl flex items-center justify-center p-3">
              <img 
                src="/img/Portaunamico.jpg" 
                alt="Porta un amico 1" 
                className="w-full h-full object-contain rounded-2xl" 
              />
            </div>

            {/* Immagine 2 */}
            <div className="aspect-square w-full rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-xl flex items-center justify-center p-3">
              <img 
                src="/img/Portaunamico2.jpg" 
                alt="Porta un amico 2" 
                className="w-full h-full object-contain rounded-2xl" 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}