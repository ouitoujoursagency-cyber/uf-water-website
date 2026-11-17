import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function BaseForm({ formName = "contatti" }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "549e9892-f319-4c96-9959-cb0dcc661d7b"); 
    formData.append("subject", "Nuovo messaggio dal sito UF Water Technology");

    try {
      const jsonPayload = JSON.stringify(Object.fromEntries(formData));
      console.log("Invio in corso...", jsonPayload);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: jsonPayload,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const result = await response.json();
      console.log("Risposta dal server:", result);

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Errore restituito da Web3Forms: " + result.message);
      }
    } catch (error) {
      console.error("Errore di rete:", error);
      alert("Errore di connessione: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900 rounded-[32px] p-6 sm:p-10 shadow-2xl border border-slate-200">
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
                name="name"
                required
                placeholder="Il tuo nome"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Email *</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="tua@email.it"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Numero di Telefono *</label>
            <input 
              type="tel" 
              name="phone"
              required
              placeholder="Il tuo numero"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 mb-1 font-semibold">Messaggio *</label>
            <textarea 
              name="message"
              rows={4}
              required
              placeholder="Come possiamo aiutarti?"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-sky-500 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#06142B] py-4 font-bold text-white hover:bg-sky-600 transition-colors shadow-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
          >
            {loading ? "Invio in corso..." : <>Invia Messaggio <Send className="w-4 h-4" /></>}
          </button>
        </form>
      ) : (
        <div className="text-center py-8 space-y-4">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-display text-xl font-extrabold text-slate-900">Messaggio Inviato!</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Il tuo messaggio è stato ricevuto. Ti ricontatteremo al più presto.
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
  );
}