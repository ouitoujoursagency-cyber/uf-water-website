import { useState } from "react";
import { PRODUCTS, ACCESSORIES } from "@/data/catalog";
import { ArrowUpRight, Lock, CheckCircle2, RotateCcw, FileText } from "lucide-react";

export default function AdminPreventivo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  
  const [clientData, setClientData] = useState({
    name: "",
    fiscalCode: "",
    address: "",
    cap: "",
    city: "",
    prov: "",
    phone: "",
    cell: "",
    email: "",
    deliveryAddress: "",
    paymentMethod: "Bonifico Bancario",
    selectedProduct: "",
    selectedAccessory: "",
    notes: "",
    totalPrice: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // PIN segreto per l'accesso (puoi cambiarlo con il numero che preferisci)
  const SECURE_PIN = "1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === SECURE_PIN) {
      setIsAuthenticated(true);
    } else {
      alert("PIN errato!");
    }
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#06142B] px-5 py-28">
        <div className="w-full max-w-md rounded-[32px] bg-white/5 border border-white/10 p-8 sm:p-10 backdrop-blur-xl text-white shadow-2xl">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sky-400 text-[#06142B] mb-6">
            <Lock className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl font-extrabold mb-2 text-center">Area Riservata</h2>
          <p className="text-sm text-slate-300 mb-8 text-center">Inserisci il PIN di sicurezza per accedere al generatore preventivi.</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <input 
              type="password" 
              placeholder="Inserisci PIN" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-slate-400 text-center tracking-widest text-lg focus:outline-none focus:border-sky-400 transition-colors"
              autoFocus
            />
            <button type="submit" className="w-full rounded-full bg-sky-400 py-4 font-bold text-[#06142B] hover:bg-sky-300 transition-colors shadow-lg shadow-sky-400/20">
              Accedi all'Area
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white border border-slate-200/80 shadow-2xl p-8 sm:p-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-100 pb-6 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">UF Water Technology</span>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-[#06142B] mt-1">Generatore Preventivo & Appuntamento</h1>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="rounded-full bg-slate-100 px-4 py-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Blocca / Esci
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-16 space-y-6">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal-100 text-teal-700">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-display text-3xl font-extrabold text-[#06142B]">Preventivo Generato con Successo!</h3>
              <p className="text-slate-600 mt-2 max-w-md mx-auto">
                Il modulo è stato compilato per <strong>{clientData.name}</strong>. Puoi stamparlo o salvarlo in PDF da consegnare o inviare al cliente.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-full bg-[#06142B] px-6 py-3.5 font-bold text-white hover:bg-slate-800 transition-colors shadow-lg"
              >
                <FileText className="h-4 w-4" /> Stampa / Salva PDF
              </button>
              <button 
                onClick={() => { 
                  setSubmitted(false); 
                  setClientData({ name: "", fiscalCode: "", address: "", cap: "", city: "", prov: "", phone: "", cell: "", email: "", deliveryAddress: "", paymentMethod: "Bonifico Bancario", selectedProduct: "", selectedAccessory: "", notes: "", totalPrice: "" }); 
                }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-6 py-3.5 font-bold text-slate-700 hover:bg-slate-300 transition-colors"
              >
                <RotateCcw className="h-4 w-4" /> Nuovo Preventivo
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitQuote} className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-bold text-[#06142B] mb-4 flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-sky-700 text-xs font-mono">1</span>
                Dati Committente & Contatti
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Nome e Cognome / Ragione Sociale *</label>
                  <input 
                    type="text" 
                    required
                    value={clientData.name}
                    onChange={(e) => setClientData({...clientData, name: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Codice Fiscale / P.IVA</label>
                  <input 
                    type="text" 
                    value={clientData.fiscalCode}
                    onChange={(e) => setClientData({...clientData, fiscalCode: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                    placeholder="RSSMRA80A01H501W"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3 mt-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Indirizzo Residenza</label>
                  <input 
                    type="text" 
                    value={clientData.address}
                    onChange={(e) => setClientData({...clientData, address: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                    placeholder="Via Roma 1"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">CAP</label>
                  <input 
                    type="text" 
                    value={clientData.cap}
                    onChange={(e) => setClientData({...clientData, cap: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                    placeholder="25030"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3 mt-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Comune</label>
                  <input 
                    type="text" 
                    value={clientData.city}
                    onChange={(e) => setClientData({...clientData, city: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                    placeholder="Paratico"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Provincia</label>
                  <input 
                    type="text" 
                    value={clientData.prov}
                    onChange={(e) => setClientData({...clientData, prov: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                    placeholder="BS"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Cellulare *</label>
                  <input 
                    type="tel" 
                    required
                    value={clientData.cell}
                    onChange={(e) => setClientData({...clientData, cell: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                    placeholder="333 1234567"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Email Cliente *</label>
                <input 
                  type="email" 
                  required
                  value={clientData.email}
                  onChange={(e) => setClientData({...clientData, email: e.target.value})}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                  placeholder="mario.rossi@email.it"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-display text-lg font-bold text-[#06142B] mb-4 flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-sky-700 text-xs font-mono">2</span>
                Impianto e Accessori Selezionati
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Sistema Principale</label>
                  <select 
                    value={clientData.selectedProduct}
                    onChange={(e) => setClientData({...clientData, selectedProduct: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 bg-white"
                  >
                    <option value="">Seleziona depuratore / erogatore...</option>
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name} ({p.sub})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Accessorio / Optional</label>
                  <select 
                    value={clientData.selectedAccessory}
                    onChange={(e) => setClientData({...clientData, selectedAccessory: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 bg-white"
                  >
                    <option value="">Seleziona accessorio (opzionale)...</option>
                    {ACCESSORIES.map(a => (
                      <option key={a.id} value={a.name}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 mt-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Modalità di Pagamento</label>
                  <select 
                    value={clientData.paymentMethod}
                    onChange={(e) => setClientData({...clientData, paymentMethod: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 bg-white"
                  >
                    <option value="Bonifico Bancario">Bonifico Bancario Anticipato</option>
                    <option value="Finanziamento">Finanziamento Credito al Consumo</option>
                    <option value="Contrassegno">Contrassegno al Corriere</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Prezzo Totale Concordato (€)</label>
                  <input 
                    type="text" 
                    value={clientData.totalPrice}
                    onChange={(e) => setClientData({...clientData, totalPrice: e.target.value})}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500 font-bold"
                    placeholder="Es. 1.490,00"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Note e Condizioni Particolari</label>
                <textarea 
                  rows="3"
                  value={clientData.notes}
                  onChange={(e) => setClientData({...clientData, notes: e.target.value})}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:border-sky-500"
                  placeholder="Es. Incluso montaggio rubinetto 3 vie, nessun obbligo di abbonamento..."
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full rounded-full bg-sky-400 py-4 font-extrabold text-[#06142B] hover:bg-sky-300 transition-colors shadow-lg shadow-sky-400/20 text-lg flex items-center justify-center gap-2"
            >
              Genera Modulo d'Ordine & Preventivo <ArrowUpRight className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}