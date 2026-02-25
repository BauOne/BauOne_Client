
import React from 'react';
import { Target, Zap, Users } from 'lucide-react';
import { siteContent } from '../content/siteContent';


const FOUNDER_IMAGE = `${import.meta.env.BASE_URL}images/geschaeftsfuehrer.jpg`;
// ---------------------

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Introduction Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="BauOne Management Hub" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl border-cyan-500/30 z-20">
              <p className="text-4xl font-bold text-white mb-1 font-heading">Seit {siteContent.company.foundedYear}</p>
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest font-mono">BauOne gegründet</p>
            </div>
          </div>

          <div>
            <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 font-mono">Unsere DNA</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Wir steuern Bauprojekte <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">verlässlich.</span></h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              BauOne wurde gegründet, um Bauherren eine verlässliche Projektsteuerung zu bieten. Als Ingenieurbüro verbinden wir technische Expertise mit strukturierten digitalen Prozessen, damit auch komplexe Projekte auf einer einheitlichen Datengrundlage steuerbar bleiben.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors">
                  <Target className="text-cyan-400 group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-heading">Unabhängige Interessenvertretung</h4>
                  <p className="text-sm text-slate-500">Wir vertreten ausschließlich Ihre Interessen gegenüber Planern und ausführenden Firmen.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                  <Zap className="text-blue-400 group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-heading">Nachvollziehbare Steuerung</h4>
                  <p className="text-sm text-slate-500">Egal wie Ihre Partner arbeiten – wir konsolidieren Projektdaten zu einem einheitlichen digitalen Datenstand für klare Entscheidungen und belastbares Reporting.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500 transition-colors">
                  <Users className="text-purple-400 group-hover:text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-heading">Erfahrung trifft Systematik</h4>
                  <p className="text-sm text-slate-500">Ingenieur-Expertise, kombiniert mit klaren Methoden und digitaler Prozessführung für Termin-, Kosten- und Qualitätssteuerung.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership / Founder Section */}
        <div className="relative mt-32 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 border border-white/5">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950">
                  <img 
                    src={FOUNDER_IMAGE}
                    alt="Inhaber BauOne" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-9">
              <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                "In komplexen Bauprojekten braucht es klare Verantwortung und eine belastbare Datengrundlage. Unser Anspruch ist es, Projekte so zu steuern, dass Entscheidungen nachvollziehbar und Ergebnisse verlässlich sind."
              </blockquote>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-white font-bold text-lg font-heading">{siteContent.founder.name}</p>
                  <ul className="mt-1 mb-1 space-y-0.5">
                    {siteContent.founder.qualifications.map((qualification) => (
                      <li key={qualification} className={`text-slate-400 text-sm font-mono leading-relaxed ${qualification.startsWith('M.Sc.') ? 'whitespace-nowrap' : ''}`}>
                        {qualification}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-500 text-sm font-mono">{siteContent.founder.role}</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/10"></div>
                <div className="flex gap-6">
                   <div>
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-1 font-mono">Fokus</p>
                      <p className="text-white text-sm font-medium">{siteContent.founder.focus}</p>
                   </div>
                   <div>
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-1 font-mono">Kontakt</p>
                     <a href={`mailto:${siteContent.company.email}`} className="text-cyan-400 text-sm font-medium hover:underline">{siteContent.company.email}</a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
