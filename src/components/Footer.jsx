import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/Logo";
import { COMPANY, NAV } from "@/data/site";

// Footer completo: marchio, link, contatti, conformità
export const Footer = () => (
  <footer data-testid="site-footer" className="relative overflow-hidden bg-[#06142B] text-slate-300 grain">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-10">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Depuratori d'acqua, accessori e installazione professionale per case e uffici. Acqua pura, sicura e sostenibile, direttamente dal tuo rubinetto.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-sky-200">
            <ShieldCheck className="h-4 w-4" /> Conformità DM 25/2012 · DM 174/2004
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">Sito</p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} data-testid={`footer-link-${n.id}`} className="transition-colors hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300">Contatti</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-sky-300" />{COMPANY.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-sky-300" /><a href={COMPANY.phoneHref} data-testid="footer-phone" className="hover:text-white">{COMPANY.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-sky-300" /><a href={COMPANY.emailHref} data-testid="footer-email" className="hover:text-white">{COMPANY.email}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-sky-300" /><span>{COMPANY.hours.join(" · ")}</span></li>
          </ul>
        </div>
      </div>
      <p aria-hidden="true" className="mt-20 select-none font-display font-black leading-none tracking-tighter text-[22vw] md:text-[15vw] text-white/[0.04]">uf water</p>
      <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {COMPANY.name} · {COMPANY.vat}</span>
        <span>Privacy · Cookie</span>
      </div>
    </div>
  </footer>
);
