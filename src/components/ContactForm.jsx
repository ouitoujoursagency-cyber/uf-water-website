import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Home, Building2, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Modulo di contatto rapido: salva la richiesta e invia notifica email
export const ContactForm = () => {
  const [params] = useSearchParams();
  const product = params.get("prodotto") || "";
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    interest: params.get("interesse") === "ufficio" ? "ufficio" : "casa",
    message: product ? `Vorrei ricevere un preventivo per: ${product}.` : "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, { ...form, product: product || null });
      setSent(true);
      toast.success("Richiesta inviata! Ti ricontatteremo a breve.");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(Array.isArray(detail) ? "Controlla i campi del modulo (email e telefono validi)." : "Invio non riuscito, riprova o scrivici su WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const field = "h-14 rounded-2xl border-slate-200 bg-slate-50 px-5 text-base focus-visible:ring-sky-400";

  return (
    <div className="relative rounded-[32px] bg-white p-6 sm:p-10 shadow-[0_40px_80px_-40px_rgba(11,37,69,.35)] border border-slate-100">
      <AnimatePresence initial={false}>
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center" data-testid="contact-success">
            <CheckCircle2 className="mx-auto h-16 w-16 text-teal-500" />
            <h3 className="mt-6 font-display text-3xl font-black text-[var(--ink)]">Grazie, {form.name.split(" ")[0]}!</h3>
            <p className="mt-3 text-slate-600">Abbiamo ricevuto la tua richiesta. Ti risponderemo entro un giorno lavorativo.</p>
            <button onClick={() => { setSent(false); setForm((f) => ({ ...f, message: "" })); }} data-testid="contact-new-request"
              className="mt-8 rounded-full border border-slate-300 px-6 py-3 font-semibold text-[var(--ink)] hover:bg-slate-50">Invia un'altra richiesta</button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} className="space-y-5" data-testid="contact-form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div>
              <Label className="font-mono text-xs uppercase tracking-wider text-slate-500">Richiesta per</Label>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {[["casa", "Casa", Home], ["ufficio", "Ufficio", Building2]].map(([k, l, I]) => (
                  <button type="button" key={k} onClick={() => setForm((f) => ({ ...f, interest: k }))} data-testid={`contact-interest-${k}`} aria-pressed={form.interest === k}
                    className={`flex items-center justify-center gap-2 rounded-2xl border-2 py-4 font-semibold transition-colors ${form.interest === k ? "border-sky-400 bg-sky-50 text-[var(--ink)]" : "border-slate-200 text-slate-600 hover:border-slate-300"}`}>
                    <I className="h-5 w-5" /> {l}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><Label htmlFor="name" className="sr-only">Nome</Label><Input id="name" required minLength={2} placeholder="Nome e cognome" value={form.name} onChange={set("name")} className={field} data-testid="contact-name-input" /></div>
              <div><Label htmlFor="phone" className="sr-only">Telefono</Label><Input id="phone" required minLength={5} type="tel" placeholder="Telefono" value={form.phone} onChange={set("phone")} className={field} data-testid="contact-phone-input" /></div>
            </div>
            <div><Label htmlFor="email" className="sr-only">Email</Label><Input id="email" required type="email" placeholder="Email" value={form.email} onChange={set("email")} className={field} data-testid="contact-email-input" /></div>
            <div><Label htmlFor="message" className="sr-only">Messaggio</Label><Textarea id="message" required minLength={5} rows={5} placeholder="Raccontaci di cosa hai bisogno" value={form.message} onChange={set("message")} className="rounded-2xl border-slate-200 bg-slate-50 p-5 text-base focus-visible:ring-sky-400" data-testid="contact-message-input" /></div>
            <button type="submit" disabled={loading} data-testid="contact-submit-button"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#06142B] py-4 font-bold text-white transition-colors hover:bg-[var(--navy)] disabled:opacity-70">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Invia richiesta <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
            </button>
            <p className="text-center text-xs text-slate-500">Inviando accetti il trattamento dei dati per essere ricontattato.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
