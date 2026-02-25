
import React, { useState } from 'react';
import { 
  Target, HardHat, PenTool, CheckCircle2, BarChart3, 
  Cloud, ChevronRight, Briefcase, Zap, Settings, 
  X, Cpu, Layers, Activity, Search, ShieldCheck 
} from 'lucide-react';
import { View } from '../App';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  for: string;
  mainPoints: { title: string; text: string; icon: React.ReactNode }[];
  techStack: string[];
  process: string[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  pm: {
    id: 'pm',
    title: "Projektsteuerung",
    for: "Für Bauherren",
    subtitle: "Projektsteuerung mit klarer Verantwortung und digitaler Entscheidungsgrundlage.",
    icon: <Target className="w-12 h-12 text-cyan-400" />,
    description: "Wir übernehmen die Steuerung Ihres Projekts auf Bauherrenseite. BauOne verbindet Projektsteuerung nach AHO/HOAI mit digital gestütztem Controlling und einem einheitlichen Datenstand, damit Risiken früher sichtbar und Entscheidungen schneller belastbar werden.",
    mainPoints: [
      { title: "Organisation & Koordination", text: "Aufbau klarer Entscheidungs- und Kommunikationsstrukturen sowie laufende Koordination aller Projektbeteiligten auf Bauherrenseite.", icon: <Briefcase className="w-5 h-5" /> },
      { title: "Kosten- und Terminsteuerung", text: "Kontinuierliches Controlling von Budget, Mittelabfluss und Meilensteinen mit prüfbarer Datengrundlage für belastbare Steuerungsentscheidungen.", icon: <Activity className="w-5 h-5" /> },
      { title: "Vertrags- und Nachtragsmanagement", text: "Strukturierte Begleitung von Vergabe-, Vertrags- und Nachtragsprozessen für mehr Sicherheit in Qualität, Kosten und Terminen.", icon: <ShieldCheck className="w-5 h-5" /> }
    ],
    techStack: ["Projekt-Dashboards", "Risikobewertung", "Cloud-CDE", "BIM-basierte Auswertung"],
    process: ["Projektvorbereitung", "Planung", "Ausführungsvorbereitung", "Ausführung", "Projektabschluss"]
  },
  es: {
    id: 'es',
    title: "Ausführungsunterstützung",
    for: "Für Generalunternehmen",
    subtitle: "Sichere Ausführung durch digitale Taktung, Mengenklarheit und durchgängige Nachverfolgung.",
    icon: <HardHat className="w-12 h-12 text-blue-400" />,
    description: "Wir unterstützen Generalunternehmen in der operativen Ausführung. Im Fokus stehen belastbare Taktung, nachvollziehbare Mengen und eine saubere Baudokumentation, um Stillstände, Nachträge und Reibungsverluste messbar zu reduzieren.",
    mainPoints: [
      { title: "Taktplanung 4D", text: "Simulation und Steuerung von Bauabläufen mit modellbasierter Terminprognose zur Vermeidung von Stillstand und Kollisionen der Gewerke.", icon: <Layers className="w-5 h-5" /> },
      { title: "Mengenvalidierung", text: "Modellbasierte Prüfung von Ausschreibungsmengen zur Vermeidung von Nachtragsrisiken.", icon: <Search className="w-5 h-5" /> },
      { title: "Bauleitung", text: "Strukturierte Mangelverfolgung und nachvollziehbare Abnahmeprozesse mit einheitlichem Datenstand für alle Beteiligten.", icon: <Settings className="w-5 h-5" /> }
    ],
    techStack: ["BIM-gestützte Ablaufplanung", "Digitale Bautagebücher", "Automatisierte Mengenermittlung"],
    process: ["Modell-Check", "Takt-Simulation", "Ausführungsmonitoring", "Strukturierter Projektabschluss"]
  },
  bm: {
    id: 'bm',
    title: "BIM-Koordination",
    for: "Für Planer",
    subtitle: "Belastbare Datenkoordination für planbare Ausführung, weniger Planungsrisiken und klare Freigaben.",
    icon: <PenTool className="w-12 h-12 text-purple-400" />,
    description: "Wir machen Planungsprozesse BIM-fähig und koordinierbar. BauOne führt Fachmodelle zusammen, prüft Kollisionen und sorgt für verlässliche Datenstände, damit Entscheidungen vor der Baustelle statt auf der Baustelle getroffen werden und Freigaben schneller erfolgen.",
    mainPoints: [
      { title: "Gesamtkoordination", text: "Zusammenführung aller Fachmodelle zu einem konsistenten Koordinationsmodell mit einheitlichen Prüfregeln.", icon: <Cpu className="w-5 h-5" /> },
      { title: "Clash Detection", text: "Automatisierte Prüfung auf geometrische und logische Kollisionen vor Baubeginn.", icon: <Zap className="w-5 h-5" /> },
      { title: "Scan-to-BIM", text: "Erstellung hochpräziser digitaler Bestandsmodelle mittels Laserscan-Technologie für Sanierungsprojekte.", icon: <Search className="w-5 h-5" /> }
    ],
    techStack: ["Solibri / Navisworks", "Revit- & Archicad-Integration", "Punktwolkenverarbeitung"],
    process: ["EIR/BAP-Definition", "Interdisziplinärer Check", "Modellvalidierung", "IFC-Exportmanagement"]
  }
};

const pillars = [
  { id: 'pm', title: "Projektsteuerung", for: "Für Bauherren", subtitle: "Wir steuern mit klarer Verantwortung.", icon: <Target className="w-8 h-8 text-cyan-400" />, description: "Komplexe Hochbauprojekte brauchen eine unabhängige Steuerung. Mit digitalem Controlling schaffen wir frühzeitige Transparenz und belastbare Entscheidungen.", items: ["Organisation & Koordination", "Kosten- und Terminsteuerung", "Vertrags- und Nachtragsmanagement"] },
  { id: 'es', title: "Ausführungsunterstützung", for: "Für Generalunternehmen", subtitle: "Präzision in der Ausführung.", icon: <HardHat className="w-8 h-8 text-blue-400" />, description: "Wir unterstützen GUs in der Baustellensteuerung – von der Taktplanung bis zur lückenlosen Dokumentation für weniger Stillstand und Nacharbeit.", items: ["Modellbasierte Terminprognosen", "BIM-gestütztes Monitoring", "Mengenprüfung", "Schnellere Freigaben"] },
  { id: 'bm', title: "BIM-Koordination", for: "Für Planer", subtitle: "Das digitale Fundament.", icon: <PenTool className="w-8 h-8 text-purple-400" />, description: "Wir unterstützen Planer bei belastbaren BIM-Prozessen – mit klaren Datenstrukturen, koordinierbaren Modellen und früher Konfliktlösung.", items: ["BIM-Gesamtkoordination", "Kollisionsprüfungen", "EIR/BAP-Struktur", "Datenintegration"] }
];

interface ServicesProps {
  onNavigate: (view: View, sectionId?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [activeDetail, setActiveDetail] = useState<ServiceDetail | null>(null);

  const openDetail = (id: string) => {
    setActiveDetail(serviceDetails[id]);
    document.body.style.overflow = 'hidden';
  };

  const closeDetail = () => {
    setActiveDetail(null);
    document.body.style.overflow = 'unset';
  };

  const handleContactClick = () => {
    closeDetail();
    onNavigate('home', '#contact');
  };

  return (
    <section id="services" className="py-32 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 text-left">
          <div className="max-w-3xl">
            <h2 className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 font-mono">Expertise & Leistungsfelder</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ingenieurwissen trifft <br/>
              <span className="text-slate-500 italic">Digital Intelligence.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed">
            Wir kombinieren AHO/HOAI-Projektsteuerung mit digitalen Methoden. Das Ergebnis: einheitlicher Datenstand, früh erkannte Risiken und schnellere, belastbare Entscheidungen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="group p-10 rounded-[2.5rem] bg-slate-950 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-all"></div>
              
              <div className="mb-8 p-5 rounded-2xl bg-slate-900 w-fit group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-500">
                {pillar.icon}
              </div>
              
              <div className="mb-8">
                <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest block mb-2 font-mono">{pillar.for}</span>
                <h4 className="text-[clamp(1.05rem,1.75vw,1.6rem)] font-bold text-white mb-2 leading-tight whitespace-nowrap">{pillar.title}</h4>
                <p className="text-slate-500 text-sm italic">{pillar.subtitle}</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {pillar.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => openDetail(pillar.id)}
                className="w-full py-4 rounded-xl border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-2 group/btn font-heading"
              >
                Leistungsdetails <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Technical Competence Highlight Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-1 bg-white/5 p-1 rounded-[2rem] overflow-hidden border border-white/5">
           <div className="bg-slate-950 p-10 flex flex-col items-center text-center group">
              <Zap className="text-cyan-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
              <h6 className="text-white font-bold text-xl mb-3 font-heading uppercase tracking-tighter">Nachvollziehbare Steuerung</h6>
                <p className="text-slate-500 text-xs leading-relaxed font-mono">Ein durchgängiger Datenstand macht Abweichungen früh sichtbar und Entscheidungen belastbar.</p>
           </div>
           <div className="bg-slate-950 p-10 flex flex-col items-center text-center group">
              <Briefcase className="text-blue-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
              <h6 className="text-white font-bold text-xl mb-3 font-heading uppercase tracking-tighter">Messbare Wirkung</h6>
              <p className="text-slate-500 text-xs leading-relaxed font-mono">Prüfbare Mengen- und Leistungsstände schaffen eine klare Nachtragsbasis.</p>
           </div>
           <div className="bg-slate-950 p-10 flex flex-col items-center text-center group">
              <Settings className="text-purple-400 w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
              <h6 className="text-white font-bold text-xl mb-3 font-heading uppercase tracking-tighter">Differenzierendes Vorgehen</h6>
                <p className="text-slate-500 text-xs leading-relaxed font-mono">Ingenieurwissen und Datenmethodik greifen in einem Steuerungskreislauf ineinander.</p>
           </div>
        </div>
      </div>

      {/* Service Detail Modal/Overlay */}
      {activeDetail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={closeDetail}></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-morphism rounded-[3rem] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md p-8 border-b border-white/10 flex justify-between items-start">
               <div className="flex items-center gap-6">
                 <div className="p-4 rounded-2xl bg-slate-950 border border-white/10">
                    {activeDetail.icon}
                 </div>
                 <div>
                    <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest block mb-1 font-mono">{activeDetail.for}</span>
                    <h2 className="text-3xl font-bold text-white font-heading tracking-tighter">{activeDetail.title}</h2>
                 </div>
               </div>
               <button 
                onClick={closeDetail}
                className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
               >
                 <X className="w-6 h-6" />
               </button>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3 space-y-12">
                  <section>
                    <h3 className="text-white font-bold text-xl mb-4 font-heading">Leistungsanspruch</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-light">{activeDetail.description}</p>
                  </section>

                  <section className="grid sm:grid-cols-1 gap-6">
                    <h3 className="text-white font-bold text-xl mb-2 font-heading">Kernleistungen im Detail</h3>
                    {activeDetail.mainPoints.map((point, i) => (
                      <div key={i} className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-tighter font-heading">{point.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">{point.text}</p>
                        </div>
                      </div>
                    ))}
                  </section>
                </div>

                <div className="lg:col-span-2 space-y-8">
                  <div className="p-8 rounded-3xl bg-slate-950/50 border border-white/5">
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2 font-mono">
                      <Cpu className="w-4 h-4 text-cyan-400" /> Digitale Werkzeuge
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activeDetail.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-slate-950/50 border border-white/5">
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2 font-mono">
                      <Activity className="w-4 h-4 text-blue-400" /> BauOne Vorgehen
                    </h3>
                    <div className="space-y-4">
                      {activeDetail.process.map((step, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <span className="w-6 h-6 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] text-slate-500 font-bold group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all font-mono">{i+1}</span>
                          <span className="text-xs text-slate-400 font-medium group-hover:text-white transition-colors">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                     <button 
                       onClick={handleContactClick}
                       className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 font-heading"
                     >
                        Projektgespräch vereinbaren
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
