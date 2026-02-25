
import React from 'react';
import { Database, Layout, Share2, Layers, Binary, Workflow, FileText, Cpu, CheckCircle2, ShieldCheck, ArrowDown } from 'lucide-react';

const Innovation: React.FC = () => {
  return (
   <section id="innovation" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Workflow className="text-cyan-400 w-6 h-6" />
              </div>
              <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] font-mono">Digitales Steuerungsmodell</h2>
            </div>
            
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tighter leading-[1.1] break-words">
            Von verteilten Daten zur <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">messbaren Wertschöpfung.</span>
            </h3>
            
            <div className="space-y-8">
               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                 <div className="w-16 h-16 rounded-3xl bg-slate-900 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-cyan-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <Binary className="text-cyan-400 w-8 h-8" />
                 </div>
                 <div>
                    <h5 className="text-white font-bold text-lg mb-1 uppercase tracking-tighter font-heading">Strukturierte Datenerfassung</h5>
                                             <p className="text-sm text-slate-500 leading-relaxed">Wir verarbeiten unterschiedliche Formate und Daten: von Verträgen und Leistungsverzeichnissen bis zu Plänen und IFC-Modellen. So entsteht ein einheitlicher Datenstand statt fragmentierter Einzelinformationen.</p>
                 </div>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                 <div className="w-16 h-16 rounded-3xl bg-slate-900 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-blue-500/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <Cpu className="text-blue-400 w-8 h-8" />
                 </div>
                 <div>
                    <h5 className="text-white font-bold text-lg mb-1 uppercase tracking-tighter font-heading">Konsolidiertes Prüfmodell</h5>
                                             <p className="text-sm text-slate-500 leading-relaxed">Aus den Eingangsdaten entsteht ein konsolidiertes Arbeitsmodell. Dieses prüft laufend Konflikte, Mengen und Terminwirkungen, sodass Reibungsverluste vor der Ausführung reduziert werden.</p>
                 </div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Data Refinery Visualization */}
          <div className="relative px-1 sm:px-0 lg:mt-12">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/5 blur-[100px] rounded-full -z-10"></div>

            <div className="relative flex flex-col items-center">
              
              {/* STAGE 1: RAW INPUT (Messy, Grey) */}
              <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 relative z-10">
                 <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-12 bg-slate-700 rounded-full"></div>
                 <h4 className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-4 font-mono flex justify-between">
                    <span>01. Dateneingang</span>
                    <span className="text-slate-600">Unstrukturiert</span>
                 </h4>
                 <div className="grid grid-cols-2 gap-4 opacity-50 grayscale">
                    <div className="flex flex-col items-center gap-2">
                       <FileText className="w-8 h-8 text-slate-400" />
                       <span className="text-[9px] font-mono">PDF-Pläne</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <Layout className="w-8 h-8 text-slate-400" />
                       <span className="text-[9px] font-mono">Termine</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <Layers className="w-8 h-8 text-slate-400" />
                       <span className="text-[9px] font-mono">Verträge</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <Database className="w-8 h-8 text-slate-400" />
                       <span className="text-[9px] font-mono">Baustellendaten</span>
                    </div>
                 </div>
              </div>

              {/* Connector 1 */}
              <div className="h-12 w-px border-l-2 border-dashed border-slate-700 relative">
                 <div className="absolute top-0 left-[-2px] w-1 h-3 bg-cyan-500 animate-dropdown"></div>
              </div>

              {/* STAGE 2: THE PROCESSOR (Glowing, Active) */}
              <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-5 sm:p-8 relative z-20 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                 <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-16 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-blue-600/5 rounded-2xl"></div>
                 
                 <div className="flex items-center justify-between mb-2">
                    <h4 className="text-cyan-400 font-bold text-[10px] uppercase tracking-widest font-mono">
                       02. BauOne Datenaufbereitung
                    </h4>
                    <div className="flex gap-1">
                       <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                       <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full"></div>
                       <div className="w-1.5 h-1.5 bg-cyan-500/30 rounded-full"></div>
                    </div>
                 </div>

                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-4">
                    <div className="w-16 h-16 rounded-full border-2 border-cyan-500/30 flex items-center justify-center relative">
                       <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-full animate-spin"></div>
                       <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2 flex-1">
                       <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-[85%]"></div>
                       </div>
                       <div className="flex justify-between text-[9px] font-mono text-cyan-300">
                          <span>Daten werden strukturiert...</span>
                          <span>85%</span>
                       </div>
                       <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-cyan-950 border border-cyan-500/20 rounded text-[9px] text-cyan-400">IFC</span>
                          <span className="px-2 py-1 bg-cyan-950 border border-cyan-500/20 rounded text-[9px] text-cyan-400">PDF</span>
                          <span className="px-2 py-1 bg-cyan-950 border border-cyan-500/20 rounded text-[9px] text-cyan-400">Excel</span>
                          <span className="px-2 py-1 bg-cyan-950 border border-cyan-500/20 rounded text-[9px] text-cyan-400">Plausibilisierung</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Connector 2 */}
              <div className="h-12 w-px border-l-2 border-dashed border-cyan-500/30 relative">
                 <div className="absolute top-0 left-[-2px] w-1 h-3 bg-white animate-dropdown delay-150"></div>
              </div>

              {/* STAGE 3: OUTPUT (Clean, Valuable) */}
              <div className="w-full max-w-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl p-4 sm:p-6 relative z-10 group hover:border-emerald-500/50 transition-colors">
                 <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-12 bg-emerald-500 rounded-full"></div>
                 <h4 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-4 font-mono flex items-center justify-between gap-3">
                    <span>03. Wertschöpfung für das Projekt</span>
                    <span className="text-white">Umsetzbar</span>
                 </h4>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-slate-950 p-4 rounded-lg border border-emerald-500/20 min-h-[118px] flex flex-col justify-between">
                       <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Kostenrisiken</span>
                          </div>
                          <span className="text-[9px] text-emerald-300 font-mono">01</span>
                       </div>
                       <div className="text-sm font-bold text-white mb-1 leading-tight">Früh erkannt</div>
                       <p className="text-[10px] text-slate-500 font-mono leading-relaxed">Kostenabweichungen werden früh priorisiert und transparent dokumentiert.</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-lg border border-blue-500/20 min-h-[118px] flex flex-col justify-between">
                       <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Share2 className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Terminlage</span>
                          </div>
                          <span className="text-[9px] text-blue-300 font-mono">02</span>
                       </div>
                       <div className="text-sm font-bold text-white mb-1 leading-tight">Schneller entschieden</div>
                       <p className="text-[10px] text-slate-500 font-mono leading-relaxed">Maßnahmen lassen sich datenbasiert ableiten.</p>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-lg border border-purple-500/20 min-h-[118px] flex flex-col justify-between">
                       <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Qualitäten</span>
                          </div>
                          <span className="text-[9px] text-purple-300 font-mono">03</span>
                       </div>
                                  <div className="text-sm font-bold text-white mb-1 leading-tight">Sauber dokumentiert</div>
                                  <p className="text-[10px] text-slate-500 font-mono leading-relaxed">Prüfstände und Verantwortlichkeiten sind klar belegt.</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes dropdown {
          0% { top: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-dropdown {
          animation: dropdown 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .delay-150 {
          animation-delay: 0.75s;
        }
      `}</style>
    </section>
  );
};

export default Innovation;
