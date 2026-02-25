
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Projektanfrage',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(false);

    const mailSubject = encodeURIComponent(`${formData.subject} – ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `E-Mail: ${formData.email}\n\n` +
      `${formData.message}`
    );
    const mailtoLink = `mailto:${siteContent.company.email}?subject=${mailSubject}&body=${mailBody}`;

    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 font-mono">Kontakt</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Lassen Sie uns Ihr <span className="text-cyan-400">Projekt besprechen.</span></h3>
            <p className="text-slate-400 mb-10 text-lg">
              Haben Sie ein konkretes Projekt oder möchten Sie Ihre Projektsteuerung neu aufstellen? Unser Team in Köln freut sich auf den Austausch.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                  <MapPin className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter font-mono">Hauptsitz Köln</p>
                  <p className="text-white font-medium">{siteContent.company.street}, {siteContent.company.postalCode} {siteContent.company.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                  <Phone className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter font-mono">Telefon</p>
                  <a href={siteContent.company.phoneHref} className="text-white font-medium hover:text-cyan-400 transition-colors">{siteContent.company.phoneDisplay}</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                  <Mail className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter font-mono">Email</p>
                  <a href={`mailto:${siteContent.company.email}`} className="text-white font-medium hover:text-cyan-400 transition-colors">{siteContent.company.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism p-8 md:p-10 rounded-3xl border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl -z-10"></div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1 font-mono">Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Ihr Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1 font-mono">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="name@unternehmen.de" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1 font-mono">Betreff</label>
                <select value={formData.subject} onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))} className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none">
                  <option>Projektanfrage</option>
                  <option>BIM-Beratung</option>
                  <option>Karriere</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1 font-mono">Nachricht</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))} required className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Wie können wir helfen?"></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-heading">
                Anfrage senden <Send className="w-4 h-4" />
              </button>
              {isSubmitted && (
                <p className="text-emerald-400 text-xs font-mono text-center">
                  Ihr E-Mail-Programm wurde mit einer vorausgefüllten Nachricht geöffnet.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
