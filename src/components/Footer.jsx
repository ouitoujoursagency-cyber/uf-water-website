import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/Logo";
import { COMPANY, NAV } from "@/data/site";

// Footer compatto, fine ed equilibrato
export const Footer = () => (
  <footer data-testid="site-footer" className="relative overflow-hidden bg-[#06142B] text-slate-300 grain">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-8">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Depuratori d'acqua, accessori e installazione professionale per case e uffici. Acqua pura, sicura e sostenibile, direttamente dal tuo rubinetto.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-sky-200">
            <ShieldCheck className="h-3.5 w-3.5" /> Conformità DM 25/2012 · DM 174/2004
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">Sito</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} data-testid={`footer-link-${n.id}`} className="transition-colors hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">Contatti</p>
          <ul className="mt-3 space-y-2.5 text-sm">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 shrink-0 text-sky-300 mt-0.5" />{COMPANY.address}</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 shrink-0 text-sky-300 mt-0.5" /><a href={COMPANY.phoneHref} data-testid="footer-phone" className="hover:text-white">{COMPANY.phone}</a></li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 shrink-0 text-sky-300 mt-0.5" /><a href={COMPANY.emailHref} data-testid="footer-email" className="hover:text-white">{COMPANY.email}</a></li>
            <li className="flex gap-2.5"><Clock className="h-4 w-4 shrink-0 text-sky-300 mt-0.5" /><span>{COMPANY.hours.join(" · ")}</span></li>
          </ul>
        </div>
      </div>
      
      {/* Scritta di sfondo ridotta e non invadente */}
      <p aria-hidden="true" className="mt-10 select-none font-display font-black leading-none tracking-tighter text-[10vw] md:text-[8vw] text-white/[0.03] text-center">uf water</p>
      
      <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-slate-400 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {COMPANY.name} · {COMPANY.vat}</span>
        <span>Privacy · Cookie</span>
      </div>
    </div>
  </footer>
);