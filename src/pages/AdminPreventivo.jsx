import { useState, useEffect, useRef } from "react";
import { PRODUCTS, ACCESSORIES } from "@/data/catalog";
import { ArrowUpRight, Lock, CheckCircle2, RotateCcw, FileText, Plus, PenTool, Trash2, ShoppingCart, Printer, ArrowDownRight, Droplet } from "lucide-react";

export default function AdminPreventivo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  
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
    customPayment: "",
    notes: "",
    totalPrice: ""
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [customProduct, setCustomProduct] = useState("");
  
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [customAccessory, setCustomAccessory] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const [showCartModal, setShowCartModal] = useState(false);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [showFullClauses, setShowFullClauses] = useState(false);

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  const SECURE_PIN = "1234";

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

  const getItemImage = (itemName) => {
    const prod = PRODUCTS.find(p => p.name?.toLowerCase().trim() === itemName?.toLowerCase().trim());
    if (prod) {
      return prod.image || prod.img || prod.photo || prod.foto || (prod.images && prod.images[0]) || null;
    }
    const acc = ACCESSORIES.find(a => a.name?.toLowerCase().trim() === itemName?.toLowerCase().trim());
    if (acc) {
      return acc.image || acc.img || acc.photo || acc.foto || (acc.images && acc.images[0]) || null;
    }
    return null;
  };

  const handleOpenCart = (e) => {
    e.preventDefault();
    setShowCartModal(true);
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#06142B";
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const finalizeSubmission = (signed) => {
    setIsSigned(signed);
    setShowSignatureModal(false);
    setShowCartModal(false);
    const currentNum = parseInt(quoteMeta.numeroProposta.replace(/\D/g, "")) || 100;
    localStorage.setItem("uf_last_proposal_num", currentNum.toString());
    setSubmitted(true);
    setIsPreviewMode(false);
  };

  const handleGenerateQuoteOnly = (e) => {
    e.preventDefault();
    setIsPreviewMode(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setIsSigned(false);
    setIsPreviewMode(false);
    setSelectedProducts([]);
    setSelectedAccessories([]);
    setClientData({ name: "", fiscalCode: "", address: "", cap: "", city: "", prov: "", phone: "", cell: "", email: "", deliveryAddress: "", paymentMethod: "Bonifico Bancario", customPayment: "", notes: "", totalPrice: "" });
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
    <div className="min-h-screen bg-slate-200/60 py-32 px-4 sm:px-8 relative">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white border border-slate-300/80 shadow-2xl p-6 sm:p-12">
        
        {/* Intestazione */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-slate-200 pb-6 gap-4 print:hidden">
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

        {/* ================= VISTA ANTEPRIMA PREVENTIVO (NON FIRMATO) ================= */}
        {isPreviewMode ? (
          <div className="space-y-8 print:space-y-6">
            <div className="print:hidden flex justify-between items-center bg-sky-50 border border-sky-100 p-4 rounded-2xl">
              <div>
                <h3 className="text-sm font-bold text-sky-900">Preventivo Pronto per la Consegna</h3>
                <p className="text-xs text-sky-700">Il cliente ha scelto di ricevere il preventivo completo di termini e condizioni.</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 font-bold text-white hover:bg-sky-600 transition-colors text-xs"
                >
                  <Printer className="h-4 w-4" /> Stampa / Salva PDF
                </button>
                <button 
                  onClick={() => setIsPreviewMode(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-300 px-5 py-2.5 font-bold text-slate-700 hover:bg-slate-100 transition-colors text-xs"
                >
                  Torna Modifica
                </button>
              </div>
            </div>

            {/* Documento ufficiale stampabile */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-6">
              <div className="flex justify-between items-start border-b border-slate-200 pb-6">
                <div>
                  <h2 className="text-xl font-black text-slate-900">UF WATER TECHNOLOGY</h2>
                  <p className="text-xs text-slate-500">Sistemi di Purificazione Acqua Avanzata</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-sky-50 text-sky-800 rounded-full font-mono text-xs font-bold border border-sky-100 mb-1">
                    PREVENTIVO {quoteMeta.numeroProposta}
                  </span>
                  <p className="text-xs text-slate-500">Data: {quoteMeta.data} | Venditore: {quoteMeta.venditore || "-"}</p>
                </div>
              </div>

              {/* Dati Cliente */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">Dati Intestatario</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p><strong>Cliente:</strong> {clientData.name}</p>
                  <p><strong>Cod. Fisc / P.IVA:</strong> {clientData.fiscalCode || "-"}</p>
                  <p><strong>Indirizzo:</strong> {clientData.address}, {clientData.cap} {clientData.city} ({clientData.prov})</p>
                  <p><strong>Contatti:</strong> Tel: {clientData.cell || clientData.phone} | Email: {clientData.email}</p>
                </div>
              </div>

              {/* Articoli */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">Articoli & Impianti Selezionati</h4>
                <div className="space-y-2">
                  {selectedProducts.map((p, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">{p}</span>
                      <span className="text-sky-700 font-mono">Sistema Principale</span>
                    </div>
                  ))}
                  {selectedAccessories.map((a, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">{a}</span>
                      <span className="text-teal-700 font-mono">Miscelatore / CO2</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prezzo e Pagamento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <p className="text-slate-500">Modalità di Pagamento</p>
                  <p className="font-bold text-slate-800">{clientData.paymentMethod === "Altro" ? clientData.customPayment : clientData.paymentMethod}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs flex justify-between items-center">
                  <span className="text-emerald-900 font-bold">Prezzo Totale Concordato:</span>
                  <span className="text-emerald-900 font-black text-base">€ {clientData.totalPrice || "0,00"}</span>
                </div>
              </div>

              {clientData.notes && (
                <div className="text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-slate-500 font-bold mb-1">Note e Condizioni Particolari:</p>
                  <p className="text-slate-700">{clientData.notes}</p>
                </div>
              )}

              {/* Tutte le 10 Clausole Complete */}
              <div className="pt-6 border-t border-slate-200 text-[11px] text-slate-600 space-y-2.5 leading-relaxed">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-xs mb-3">Condizioni Generali di Vendita</h4>
                <p><strong>1 - OGGETTO:</strong> Oggetto della presente vendita sono gli articoli e i servizi elencati nel Modulo d'Ordine, forniti all'acquirente che acquista per soddisfare esigenze di vendita quotidiana (Consumatore) o per finalità connesse ad un'attività commerciale o professionale (Imprenditore/Professionista).</p>
                <p><strong>2 - PERFEZIONAMENTO ED EFFETTI:</strong> La vendita si intende perfezionata con la sottoscrizione del Modulo d'Ordine; da tale momento decorrono i termini per l'adempimento del pagamento e della successiva consegna della merce.</p>
                <p><strong>3 - PREZZO:</strong> Il prezzo totale è quello indicato nel Modulo d'Ordine, comprensivo o maggiorato di IVA come per legge.</p>
                <p><strong>4 - OBBLIGHI ED ESECUZIONE:</strong> Il Cliente si obbliga al pagamento del prezzo nei modi e nei termini indicati.</p>
                <p><strong>5 - RISOLUZIONE DEL CONTRATTO:</strong> In caso di mancato pagamento, il contratto si risolverà di diritto ai sensi dell'art. 1456 c.c.</p>
                <p><strong>6 - RECESSO:</strong> Diritto di recesso per il Consumatore entro 14 giorni ai sensi del Codice del Consumo.</p>
                <p><strong>7 - TRASPORTO:</strong> Spese di trasporto a carico del Cliente come quantificate nell'ordine.</p>
                <p><strong>8 - GARANZIA PRODOTTO:</strong> Garanzia legale di 24 mesi contro i difetti di conformità.</p>
                <p><strong>9 - LIMITAZIONI DI RESPONSABILITÀ:</strong> Responsabilità limitata nei casi previsti dalla legge e dolo/colpa grave.</p>
                <p><strong>10 - FORO COMPETENTE:</strong> Per qualsiasi controversia sarà competente in via esclusiva il Foro di Brescia.</p>
              </div>
            </div>
          </div>
        ) : submitted ? (
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
                {isSigned ? " Il contratto è stato firmato con firma autografa." : " Preventivo pronto per essere consegnato o stampato."}
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
                onClick={resetForm}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3.5 font-bold text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200 text-xs"
              >
                <RotateCcw className="h-4 w-4" /> Nuovo Preventivo
              </button>
            </div>
          </div>
        ) : (
          /* ================= FORM DI COMPILAZIONE (CON ANGOLO PIEGATO SPOSTATO PIÙ IN BASSO E STILE GOCCIA) ================= */
          <form onSubmit={handleGenerateQuoteOnly} className="space-y-8 relative pb-20">
            
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

            <div className="pt-4 border-t border-slate-200">
              <h3 className="font-display text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-sky-100 text-sky-700 text-xs font-mono">2</span>
                Impianti & Miscelatori/CO2 Selezionati (Selezione Multipla)
              </h3>

              <div className="grid gap-6 sm:grid-cols-2">
                
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">Sistema Principale</label>
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

                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProducts.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-sky-800 text-xs font-medium border border-sky-100">
                        {item}
                        <button type="button" onClick={() => setSelectedProducts(selectedProducts.filter((_, i) => i !== idx))} className="text-sky-400 hover:text-red-500 font-bold ml-1">×</button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5 font-semibold">Miscelatori / CO2</label>
                  <select 
                    onChange={handleAccessoryChange}
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 bg-white mb-2"
                  >
                    <option value="" disabled>Aggiungi miscelatore o CO2...</option>
                    {ACCESSORIES.map(a => (
                      <option key={a.id} value={a.name}>{a.name}</option>
                    ))}
                    <option value="CUSTOM">✏️ Altro (scrivi a mano sotto)...</option>
                  </select>

                  <div className="flex gap-2 mt-2">
                    <input 
                      type="text"
                      placeholder="Scrivi articolo personalizzato..."
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 bg-white mb-2"
                  >
                    <option value="Bonifico Bancario">Bonifico Bancario</option>
                    <option value="Altro">Altro (specifica sotto)</option>
                  </select>

                  {clientData.paymentMethod === "Altro" && (
                    <input 
                      type="text"
                      placeholder="Specifica modalità di pagamento..."
                      value={clientData.customPayment}
                      onChange={(e) => setClientData({...clientData, customPayment: e.target.value})}
                      className="w-full rounded-xl border border-slate-300 px-4 py-2 text-xs text-slate-800 bg-white"
                    />
                  )}
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

            {/* Visualizzatore a scomparsa delle clausole nel form */}
            {showFullClauses && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-300 space-y-3 animate-fadeIn text-[11px] text-slate-600 mb-16">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Termini e Condizioni di Vendita</h4>
                  <button type="button" onClick={() => setShowFullClauses(false)} className="text-xs text-red-600 font-bold hover:underline">Chiudi [X]</button>
                </div>
                <p><strong>1 - OGGETTO:</strong> Oggetto della presente vendita sono gli articoli e i servizi elencati nel Modulo d'Ordine.</p>
                <p><strong>2 - PERFEZIONAMENTO ED EFFETTI:</strong> La vendita si intende perfezionata con la sottoscrizione del Modulo d'Ordine.</p>
                <p><strong>3 - PREZZO:</strong> Il prezzo totale è quello indicato nel Modulo d'Ordine, comprensivo di IVA.</p>
                <p><strong>4 - OBBLIGHI ED ESECUZIONE:</strong> Il Cliente si obbliga al pagamento del prezzo nei modi e nei termini indicati.</p>
                <p><strong>5 - RISOLUZIONE:</strong> In caso di mancato pagamento, il contratto si risolverà di diritto ai sensi dell'art. 1456 c.c.</p>
                <p><strong>6 - RECESSO:</strong> Diritto di recesso per il Consumatore entro 14 giorni ai sensi del Codice del Consumo.</p>
                <p><strong>7 - TRASPORTO:</strong> Spese di trasporto a carico del Cliente come quantificate nell'ordine.</p>
                <p><strong>8 - GARANZIA PRODOTTO:</strong> Garanzia legale di 24 mesi contro i difetti di conformità.</p>
                <p><strong>9 - LIMITAZIONI DI RESPONSABILITÀ:</strong> Responsabilità limitata nei casi previsti dalla legge e dolo/colpa grave.</p>
                <p><strong>10 - FORO COMPETENTE:</strong> Per qualsiasi controversia sarà competente in via esclusiva il Foro di Brescia.</p>
              </div>
            )}

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
              <button 
                type="button"
                onClick={handleOpenCart}
                className="flex-1 rounded-full bg-emerald-600 py-4 font-bold text-white hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <PenTool className="h-4 w-4" /> Firma Contratto per Accettazione
              </button>

              <button 
                type="submit"
                className="flex-1 rounded-full bg-slate-900 py-4 font-bold text-white hover:bg-sky-600 transition-colors shadow-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="h-4 w-4" /> Genera Modulo Preventivo (Senza Firma)
              </button>
            </div>

            {/* Angolo Piegato (Dog-Ear) in basso a destra del form, spostato più in basso e con badge a goccia */}
            <div 
              onClick={() => setShowFullClauses(!showFullClauses)}
              className="absolute -bottom-6 right-0 w-36 h-36 cursor-pointer group z-30"
              title="Visualizza Termini e Condizioni"
            >
              <div className="absolute bottom-10 right-10 flex items-center gap-1.5 text-[11px] font-bold text-slate-800 bg-sky-50 px-3 py-1.5 rounded-full shadow-md border border-sky-200 group-hover:bg-sky-600 group-hover:text-white transition-all whitespace-nowrap pointer-events-none">
                <Droplet className="w-3.5 h-3.5 text-sky-500 group-hover:text-white fill-sky-400" />
                <span>Termini e Condizioni</span>
                <ArrowDownRight className="w-3.5 h-3.5 animate-bounce text-sky-600 group-hover:text-white" />
              </div>

              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[52px] border-r-[52px] border-b-slate-300 border-r-transparent group-hover:border-b-sky-500 transition-colors duration-300 shadow-[-6px_-6px_12px_rgba(0,0,0,0.1)]"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[48px] border-r-[48px] border-b-white border-r-transparent"></div>
              
              <span className="absolute bottom-1.5 right-1.5 text-[10px] font-mono font-bold text-slate-600 group-hover:text-sky-600 transition-colors">
                {showFullClauses ? "▲" : "§"}
              </span>
            </div>

          </form>
        )}
      </div>

      {/* ================= MODALE CARRELLO ================= */}
      {showCartModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-[32px] bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-sky-600" />
                <h3 className="font-display text-lg font-black text-slate-900">Riepilogo Articoli Selezionati</h3>
              </div>
              <button onClick={() => setShowCartModal(false)} className="text-slate-400 hover:text-slate-700 font-bold text-sm">✕</button>
            </div>

            <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
              {selectedProducts.length === 0 && selectedAccessories.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-6">Nessun articolo selezionato nel preventivo.</p>
              ) : (
                <>
                  {selectedProducts.map((item, idx) => {
                    const imgUrl = getItemImage(item);
                    return (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center gap-3">
                          {imgUrl ? (
                            <img src={imgUrl} alt={item} className="w-12 h-12 object-cover rounded-xl border border-slate-200 bg-white" />
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center text-[10px] font-bold text-center px-1">Articolo</div>
                          )}
                          <div>
                            <p className="text-xs font-bold text-slate-900">{item}</p>
                            <span className="text-[10px] text-sky-700 font-mono font-semibold">Sistema Principale</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {selectedAccessories.map((item, idx) => {
                    const imgUrl = getItemImage(item);
                    return (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center gap-3">
                          {imgUrl ? (
                            <img src={imgUrl} alt={item} className="w-12 h-12 object-cover rounded-xl border border-slate-200 bg-white" />
                          ) : (
                            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-[10px] font-bold text-center px-1">Articolo</div>
                          )}
                          <div>
                            <p className="text-xs font-bold text-slate-900">{item}</p>
                            <span className="text-[10px] text-teal-700 font-mono font-semibold">Miscelatore / CO2</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between">
              <span className="text-xs font-bold text-sky-900">Totale Concordato:</span>
              <span className="font-display text-base font-black text-sky-900">€ {clientData.totalPrice || "0,00"}</span>
            </div>

            <div className="flex gap-3 pt-2">
              <button 
                type="button"
                onClick={() => setShowCartModal(false)}
                className="flex-1 rounded-full bg-slate-100 py-3.5 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Torna a Modificare
              </button>
              <button 
                type="button"
                onClick={() => { setShowCartModal(false); setShowSignatureModal(true); }}
                className="flex-1 rounded-full bg-emerald-600 py-3.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-md"
              >
                Procedi alla Firma
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODALE FIRMA ================= */}
      {showSignatureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-[32px] bg-white border border-slate-200 shadow-2xl p-8 overflow-hidden transition-all duration-300">
            <div className="space-y-5">
              <div className="text-center">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-100">Firma Autografa</span>
                <h3 className="font-display text-xl font-black text-slate-900 mt-2">Firma del Contratto</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Firma nell'apposito spazio sottostante per confermare l'accettazione della proposta {quoteMeta.numeroProposta}.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold">Casella per la Firma *</label>
                  <button 
                    type="button" 
                    onClick={clearSignature}
                    className="text-[11px] text-red-600 hover:underline font-bold flex items-center gap-1"
                  >
                    <Trash2 className="h-3 w-3" /> Pulisci firma
                  </button>
                </div>

                <div className="border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 overflow-hidden relative touch-none">
                  <canvas 
                    ref={canvasRef}
                    width={440}
                    height={150}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="w-full h-36 cursor-crosshair bg-white"
                  />
                  {!hasSignature && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-300 text-xs font-mono tracking-widest">
                      Firma qui con il mouse o il dito
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  type="button"
                  onClick={() => setShowSignatureModal(false)}
                  className="flex-1 rounded-full bg-slate-100 py-3.5 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  Annulla
                </button>
                <button 
                  type="button"
                  onClick={() => finalizeSubmission(true)}
                  disabled={!hasSignature}
                  className={`flex-1 rounded-full py-3.5 text-xs font-bold text-white transition-colors shadow-md ${hasSignature ? "bg-emerald-600 hover:bg-emerald-500" : "bg-slate-300 cursor-not-allowed"}`}
                >
                  Conferma e Accetta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}