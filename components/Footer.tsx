
import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { View } from '../App';
import Logo from './Logo';
import { siteContent } from '../content/siteContent';
import { clearConsentState, CONSENT_RESET_EVENT } from '../services/consentService';

interface FooterProps {
  onNavigate: (view: View, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { href: siteContent.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: siteContent.social.x, label: 'X', Icon: Twitter },
    { href: siteContent.social.instagram, label: 'Instagram', Icon: Instagram },
  ].filter((item) => item.href.startsWith('http'));

  const handleOpenCookieSettings = () => {
    clearConsentState();
    window.dispatchEvent(new Event(CONSENT_RESET_EVENT));
  };

  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 cursor-pointer group" onClick={() => onNavigate('home', '#top')}>
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Logo className="w-full h-full" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white font-heading">
                Bau<span className="text-cyan-400">One</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              BauOne — Ihr Partner für innovatives Baumanagement und digitale Projektsteuerung im Hochbau. Wir definieren Effizienz durch BIM und KI neu.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all border border-white/5">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 font-heading">Leistungen</h5>
            <ul className="space-y-4 text-sm text-slate-400 font-mono">
              <li><button onClick={() => onNavigate('home', '#services')} className="hover:text-cyan-400 text-left">Projektsteuerung</button></li>
              <li><button onClick={() => onNavigate('home', '#services')} className="hover:text-cyan-400 text-left">BIM Implementation</button></li>
              <li><button onClick={() => onNavigate('home', '#services')} className="hover:text-cyan-400 text-left">Execution Support</button></li>
              <li><button onClick={() => onNavigate('home', '#services')} className="hover:text-cyan-400 text-left">Kosten- & Terminplanung</button></li>
              <li><button onClick={() => onNavigate('home', '#services')} className="hover:text-cyan-400 text-left">Baustellenmanagement</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 font-heading">Unternehmen</h5>
            <ul className="space-y-4 text-sm text-slate-400 font-mono">
              <li><button onClick={() => onNavigate('home', '#about')} className="hover:text-cyan-400 text-left">Über BauOne</button></li>
              <li><button onClick={() => onNavigate('home', '#contact')} className="hover:text-cyan-400 text-left">Karriere</button></li>
              <li><button onClick={() => onNavigate('home', '#innovation')} className="hover:text-cyan-400 text-left">News & Insights</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-cyan-400 text-left">Referenzen</button></li>
              <li><button onClick={() => onNavigate('home', '#contact')} className="hover:text-cyan-400 text-left">Kontakt</button></li>
            </ul>
          </div>

          <div id="contact-info">
            <h5 className="text-white font-bold mb-6 font-heading">Kontakt</h5>
            <ul className="space-y-4 text-sm text-slate-400 font-mono">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>{siteContent.company.name}<br/>{siteContent.company.street}<br/>{siteContent.company.postalCode} {siteContent.company.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href={siteContent.company.phoneHref} className="hover:text-cyan-400 transition-colors">{siteContent.company.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href={`mailto:${siteContent.company.email}`} className="hover:text-cyan-400 transition-colors">{siteContent.company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium font-mono">
          <p>© {currentYear} {siteContent.company.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('legal')} className="hover:text-white">Impressum</button>
            <button onClick={() => onNavigate('legal')} className="hover:text-white">Datenschutz</button>
            <button onClick={() => onNavigate('legal')} className="hover:text-white">Cookies</button>
            <button onClick={handleOpenCookieSettings} className="hover:text-white">Cookie-Einstellungen</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
