import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle, ArrowLeft, MessageSquare } from "lucide-react";

export default function OrdinaKitManutenzione() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    contratto: "",
    impianto: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati ordine kit manutenzione inviati:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banda blu superiore che racchiude il titolo e la parte alta del layout */}
      <div className="bg-[#06142B] pt-32 pb-44 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Torna alla Home / Catalogo
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Colonna di sinistra: Titolo e descrizione sopra il blu */}
            <div className="lg:col-span-5 text-white">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Wrench className="h-3.5 w-3.5" /> Assistenza e Ricambi
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Manutenzione <br />in autonomia.
              </h1>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-md">
                Compila il modulo per richiedere i filtri e i consumabili originali per il tuo impianto. Ti ricontatteremo rapidamente per confermare la spedizione.
              </p>

              <div className="mt-8 pt-8 border-t border-slate-700/60">
                <p className="text-xs text-slate-400 mb-3">Hai bisogno di supporto immediato?</p>
                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-500 shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" /> Scrivici su WhatsApp
                </a>
              </div>
            </div>

            {/* Colonna di destra: Il Modulo Form che si sovrappone perfettamente */}
            <div className="lg:col-span-7 -mb-28">
              <div className="bg-white rounded-[28px] shadow-2xl p-6 sm:p-10 border border-slate-200 relative z-10">
                
                {submitted ? (
                  <div className="text-center py-12 px-4 bg-emerald-50 rounded-2xl border border-emerald-100 animate-fadeIn">
                    <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="font-display text-lg font-bold text-emerald-900">Richiesta inviata con successo!</h3>
                    <p className="mt-1 text-xs text-emerald-700 max-w-md mx-auto">
                      Abbiamo ricevuto la tua richiesta di ricambi. È stata presa in carico e ti contatteremo al più presto per confermare l'ordine.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ nome: "", cognome: "", email: "", telefono: "", contratto: "", impianto: "" });
                      }}
                      className="mt-6 rounded-full bg-[#06142B] px-6 py-2.5 text-xs font-semibold text-white hover:bg-sky-600 transition-colors shadow-sm"
                    >
                      Invia una nuova richiesta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Nome *</label>
                        <input 
                          type="text" 
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Il tuo nome"
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Cognome *</label>
                        <input 
                          type="text" 
                          name="cognome"
                          required
                          value={formData.cognome}
                          onChange={handleChange}
                          placeholder="Il tuo cognome"
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tua@email.it"
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Numero di Telefono *</label>
                        <input 
                          type="tel" 
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Il tuo numero"
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                          Riferimento del Contratto <span className="text-slate-400 font-normal lowercase">(opzionale)</span>
                        </label>
                        <input 
                          type="text" 
                          name="contratto"
                          value={formData.contratto}
                          onChange={handleChange}
                          placeholder="Es. N. contratto o codice cliente"
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">Tipo di Impianto *</label>
                        <select 
                          name="impianto"
                          required
                          value={formData.impianto}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500 transition-colors"
                        >
                          <option value="" disabled>Seleziona il tuo impianto...</option>
                          <option value="TOP 30 – Black Edition / Osmosi">TOP 30 – Black Edition / Osmosi</option>
                          <option value="Osmo Quark">Osmo Quark</option>
                          <option value="Osmo Top">Osmo Top</option>
                          <option value="Gel 30 Sottolavello – Black Edition">Gel 30 Sottolavello – Black Edition</option>
                          <option value="Osmo Slim">Osmo Slim</option>
                          <option value="Office 30">Office 30 (Ufficio)</option>
                          <option value="Altro / Non ricordo">Altro / Non ricordo</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full rounded-full bg-[#06142B] py-3.5 text-xs font-bold text-white hover:bg-sky-600 transition-colors shadow-md text-center cursor-pointer"
                      >
                        Invia Ordine Kit Manutenzione
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sezione inferiore con le due foto quadrate, centrate e pulite sul fondo bianco */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          
          {/* Foto 1 */}
          <div className="mx-auto w-full max-w-md">
            <div className="aspect-square rounded-[24px] overflow-hidden shadow-xl border-4 border-white bg-white">
              <img 
                src="/img/kit manutenzione.jpg" 
                alt="Kit manutenzione" 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Foto 2 */}
          <div className="mx-auto w-full max-w-md">
            <div className="aspect-square rounded-[24px] overflow-hidden shadow-xl border-4 border-white bg-white">
              <img 
                src="/img/kit manutenzione autonomia.jpg" 
                alt="Kit manutenzione autonomia" 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}