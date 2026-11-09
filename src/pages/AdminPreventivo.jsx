import { useState, useEffect } from "react";
import { PRODUCTS, ACCESSORIES } from "@/data/catalog";
import { ArrowUpRight, Lock, CheckCircle2, RotateCcw, FileText, Plus, PenTool } from "lucide-react";

export default function AdminPreventivo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  
  // Campi intestazione preventivo
  const [quoteMeta, setQuoteMeta] = useState({
    data: new Date().toISOString().split('T')[0],
    venditore: "",
    numeroProposta: ""
  });

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
    notes: "",
    totalPrice: ""
  });

  // Gestione selezioni multiple e voci personalizzate
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [customProduct, setCustomProduct] = useState("");
  
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [customAccessory, setCustomAccessory] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  // PIN segreto per l'accesso
  const SECURE_PIN = "1234";

  // Generatore numero proposta automatico crescente
  useEffect(() => {
    const lastNum = localStorage.getItem("uf_last_proposal_num") || "100";
    const nextNum = (parseInt(lastNum) + 1).toString().padStart(4, '0');
    setQuoteMeta(prev => ({ ...prev, numeroProposta: `N. ${nextNum}/2026` }));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === SECURE_PIN) {
      setIsAuthenticated(true);
    } else {
      alert("PIN errato!");
    }
  };

  const handleProductChange = (e) => {
    const val = e.target.value;
    if (val === "CUSTOM") {
      if (customProduct && !selectedProducts.includes(customProduct)) {
        setSelectedProducts([...selectedProducts, customProduct]);
        setCustomProduct("");
      }
    } else if (val && !selectedProducts.includes(val)) {
      setSelectedProducts([...selectedProducts, val]);
    }
  };

  const handleAccessoryChange = (e) => {
    const val = e.target.value;
    if (val === "CUSTOM") {
      if (customAccessory && !selectedAccessories.includes(customAccessory)) {
        setSelectedAccessories([...selectedAccessories, customAccessory]);
        setCustomAccessory("");
      }
    } else if (val && !selectedAccessories.includes(val)) {
      setSelectedAccessories([...selectedAccessories, val]);
    }
  };

  const handleSubmitQuote = (e, signed = false) => {
    e.preventDefault();
    setIsSigned(signed);
    // Aggiorna il progressivo in memoria
    const currentNum = parseInt(quoteMeta.numeroProposta.replace(/\D/g, "")) || 100;
    localStorage.setItem("uf_last_proposal_num", currentNum.toString());
    setSubmitted(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 px-5 py-28">
        <div className="w-full max-w-md rounded-[32px] bg-white/10 border border-white/20 p-8 sm:p-10 backdrop-blur-2xl text-white shadow-2xl">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sky-400 text-slate-900 mb-6 shadow-lg">
            <Lock className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl font-extrabold mb-2 text-center tracking-tight">Area Riservata</h2>
          <p className="text-sm text-slate-300 mb-8 text-center leading-relaxed">Inserisci il PIN di sicurezza per accedere al generatore preventivi.</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <input 
              type="password" 
              placeholder="Inserisci PIN" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder-slate-400 text-center tracking-widest text-xl focus:outline-none focus:border-sky-400 transition-colors"
              autoFocus
            />
            <button type="submit" className="w-full rounded-full bg-sky-400 py-4 font-bold text-slate-900 hover:bg-sky-300 transition-colors shadow-lg shadow-sky-400/20">
              Accedi all'Area
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-200/60 py-32 px-4 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white border border-slate-300/80 shadow-2xl p-6 sm:p-12">
        
        {/* Intestazione */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-200 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 font-bold">UF Water Technology</span>
              <span className="font-mono text-xs text-slate-500 font-semibold">{quoteMeta.numeroProposta}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mt-2">Generatore Preventivo & Contratto</h1>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="rounded-full bg-slate-100 px-4 py-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:bg-slate-200 transition-colors border border-slate-200"
          >
            Blocca / Esci
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-16 space-y-6">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-display text-3xl font-extrabold text-slate-900">
                {isSigned ? "Contratto Firmato per Accettazione!" : "Preventivo Generato con Successo!"}
              </h3>
              <p className="text-slate-600 mt-2 max-w-md mx-auto text-sm leading-relaxed">
                Il modulo è stato compilato per <strong>{clientData.name || "Cliente"}</strong> ({quoteMeta.numeroProposta}). 
                {isSigned ? " Il contratto risulta firmato dal cliente." : " Preventivo pronto per essere consegnato o stampato."}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-bold text-white hover:bg-sky-600 transition-colors shadow-lg text-xs"
              >
                <FileText className="h-4 w-4" /> Stampa / Salva PDF
              </button>
              <button 
                onClick={() => { 
                  setSubmitted(false); 
                  setIsSigned(false);
                  setSelectedProducts([]);
                  setSelectedAccessories([]);
                  setClientData({ name: "", fiscalCode: "", address: "", cap: "", city: "", prov: "", phone: "", cell: "", email: "", deliveryAddress: "", paymentMethod: "Bonifico Bancario", notes: "", totalPrice: "" }); 
                }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3.5 font-bold text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200 text-xs"
              >
                <RotateCcw className="h-4 w-4" /> Nuovo Preventivo
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmitQuote(e, false)} className="space-y-8">
            
            {/* SEZIONE 0: Dati Data e Venditore in alto a sinistra */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">Data Preventivo *</label>
                <input 
                  type="date" 
                  required
                  value={quoteMeta.data}
                  onChange={(e) => setQuoteMeta({...quoteMeta, data: e.target.value})}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">Nome e Cognome Venditore *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Es. Mario Rossi"
                  value={quoteMeta.venditore}
                  onChange={(e) => setQuoteMeta({...quoteMeta, venditore: e.target.value})}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            {/* SEZIONE 1: Dati Committente */}
            <div>
              <h3 className="font-display text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-sky-100 text-sky-700 text-xs font-mono">1</span>
                Dati Committente
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Nome e Cognome / Ragione Sociale *</label>
                  <input 
                    type="text" 
                    required
                    value={clientData.name}
                    onChange={(e) => setClientData({...clientData, name: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Codice Fiscale / P.IVA</label>
                  <input 
                    type="text" 
                    value={clientData.fiscalCode}
                    onChange={(e) => setClientData({...clientData, fiscalCode: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                    placeholder="RSSMRA80A01H501W"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 mt-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Indirizzo Residenza</label>
                  <input 
                    type="text" 
                    value={clientData.address}
                    onChange={(e) => setClientData({...clientData, address: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                    placeholder="Via Roma 1"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">CAP</label>
                  <input 
                    type="text" 
                    value={clientData.cap}
                    onChange={(e) => setClientData({...clientData, cap: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                    placeholder="25030"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 mt-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Comune</label>
                  <input 
                    type="text" 
                    value={clientData.city}
                    onChange={(e) => setClientData({...clientData, city: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                    placeholder="Paratico"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Provincia</label>
                  <input 
                    type="text" 
                    value={clientData.prov}
                    onChange={(e) => setClientData({...clientData, prov: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                    placeholder="BS"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Cellulare *</label>
                  <input 
                    type="tel" 
                    required
                    value={clientData.cell}
                    onChange={(e) => setClientData({...clientData, cell: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                    placeholder="333 1234567"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Email Cliente *</label>
                <input 
                  type="email" 
                  required
                  value={clientData.email}
                  onChange={(e) => setClientData({...clientData, email: e.target.value})}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 bg-white focus:outline-none focus:border-sky-500"
                  placeholder="mario.rossi@email.it"
                />
              </div>
            </div>

            {/* SEZIONE 2: Impianto e Accessori (Selezione multipla + Aggiunta manuale) */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="font-display text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-sky-100 text-sky-700 text-xs font-mono">2</span>
                Impianti & Accessori Selezionati (Selezione Multipla)
              </h3>

              <div className="grid gap-6 sm:grid-cols-2">
                
                {/* Sistema Principale */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">Sistema Principale (Puoi sceglierne più di uno)</label>
                  <select 
                    onChange={handleProductChange}
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 bg-white mb-2"
                  >
                    <option value="" disabled>Aggiungi depuratore / erogatore...</option>
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.name}>{p.name} ({p.sub})</option>
                    ))}
                    <option value="CUSTOM">✏️ Altro (scrivi a mano sotto)...</option>
                  </select>

                  {/* Input manuale se si sceglie Altro */}
                  <div className="flex gap-2 mt-2">
                    <input 
                      type="text"
                      placeholder="Scrivi articolo personalizzato..."
                      value={customProduct}
                      onChange={(e) => setCustomProduct(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-800 bg-white"
                    />
                    <button 
                      type="button"
                      onClick={() => {
                        if (customProduct && !selectedProducts.includes(customProduct)) {
                          setSelectedProducts([...selectedProducts, customProduct]);
                          setCustomProduct("");
                        }
                      }}
                      className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-sky-600 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Lista elementi selezionati */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProducts.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-medium border border-sky-100">
                        {item}
                        <button type="button" onClick={() => setSelectedProducts(selectedProducts.filter((_, i) => i !== idx))} className="text-sky-400 hover:text-red-500 font-bold ml-1">×</button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Accessori */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">Accessori / Optional (Selezione Multipla)</label>
                  <select 
                    onChange={handleAccessoryChange}
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 bg-white mb-2"
                  >
                    <option value="" disabled>Aggiungi accessorio...</option>
                    {ACCESSORIES.map(a => (
                      <option key={a.id} value={a.name}>{a.name}</option>
                    ))}
                    <option value="CUSTOM">✏️ Altro (scrivi a mano sotto)...</option>
                  </select>

                  {/* Input manuale se si sceglie Altro */}
                  <div className="flex gap-2 mt-2">
                    <input 
                      type="text"
                      placeholder="Scrivi accessorio personalizzato..."
                      value={customAccessory}
                      onChange={(e) => setCustomAccessory(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-800 bg-white"
                    />
                    <button 
                      type="button"
                      onClick={() => {
                        if (customAccessory && !selectedAccessories.includes(customAccessory)) {
                          setSelectedAccessories([...selectedAccessories, customAccessory]);
                          setCustomAccessory("");
                        }
                      }}
                      className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-sky-600 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Lista accessori selezionati */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedAccessories.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-medium border border-teal-100">
                        {item}
                        <button type="button" onClick={() => setSelectedAccessories(selectedAccessories.filter((_, i) => i !== idx))} className="text-teal-400 hover:text-red-500 font-bold ml-1">×</button>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="grid gap-4 sm:grid-cols-2 mt-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Modalità di Pagamento</label>
                  <select 
                    value={clientData.paymentMethod}
                    onChange={(e) => setClientData({...clientData, paymentMethod: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 bg-white"
                  >
                    <option value="Bonifico Bancario">Bonifico Bancario Anticipato</option>
                    <option value="Finanziamento">Finanziamento Credito al Consumo</option>
                    <option value="Contrassegno">Contrassegno al Corriere</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Prezzo Totale Concordato (€)</label>
                  <input 
                    type="text" 
                    value={clientData.totalPrice}
                    onChange={(e) => setClientData({...clientData, totalPrice: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 font-bold"
                    placeholder="Es. 1.490,00"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1">Note e Condizioni Particolari</label>
                <textarea 
                  rows="3"
                  value={clientData.notes}
                  onChange={(e) => setClientData({...clientData, notes: e.target.value})}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500"
                  placeholder="Es. Incluso montaggio rubinetto 3 vie, nessun obbligo di abbonamento..."
                />
              </div>
            </div>

            {/* SEZIONE 3: I Due Tasti Finali (Firma Contratto vs Genera Preventivo) */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
              
              {/* Tasto 1: Firma Contratto per Accettazione */}
              <button 
                type="button"
                onClick={(e) => handleSubmitQuote(e, true)}
                className="flex-1 rounded-full bg-emerald-600 py-4 font-bold text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <PenTool className="h-4 w-4" /> Firma Contratto per Accettazione
              </button>

              {/* Tasto 2: Genera Modulo Preventivo (per clienti che ci pensano) */}
              <button 
                type="submit"
                className="flex-1 rounded-full bg-slate-900 py-4 font-bold text-white hover:bg-sky-600 transition-colors shadow-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="h-4 w-4" /> Genera Modulo Preventivo
              </button>

            </div>

          </form>
        )}
      </div>
    </div>
  );
}