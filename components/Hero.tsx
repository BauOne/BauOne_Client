
import React from 'react';
import { ChevronRight, Cpu, Activity, ShieldCheck, Ruler, Server, BarChart3, Radio } from 'lucide-react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      {/* Visual Identity Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 animate-pulse"
      ></motion.div>
      
      {/* Background Grid Accent */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] -z-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-3 py-1 bg-cyan-950/30 border-l-2 border-cyan-500 text-cyan-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8 font-mono"
            >
              <Cpu className="w-3.5 h-3.5" />
              Projektsteuerung & Ingenieurmanagement aus Köln
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-6xl lg:text-8xl font-bold leading-[0.9] text-white mb-8 tracking-tighter"
            >
              Komplexe Projekte. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">Sicher gesteuert.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light border-l border-white/10 pl-6"
            >
              Wir steuern komplexe Hochbauprojekte mit einem einheitlichen digitalen Datenstand, sodass Entscheidungen zu Kosten, Terminen und Qualität schnell, belastbar und nachvollziehbar sind.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a href="#contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center gap-3 transition-all font-heading rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Erstgespräch anfragen <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#services" className="px-8 py-4 bg-transparent border border-white/20 hover:border-cyan-500 text-white font-bold transition-all font-heading rounded-lg hover:bg-white/5">
                Leistungen ansehen
              </a>
            </motion.div>

            {/* Redesigned Metrics Bar - HUD Style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="border-y border-white/10 bg-slate-950/50 backdrop-blur-sm"
            >
              <div className="grid grid-cols-4 divide-x divide-white/10">
                {[
                  { label: "Datenstand", value: "Einheitlich", icon: <Ruler className="w-3 h-3 text-cyan-400" /> },
                  { label: "Prognosen", value: "Modellbasiert", icon: <Activity className="w-3 h-3 text-blue-400" /> },
                  { label: "Entscheidungen", value: "Nachvollziehbar", icon: <Server className="w-3 h-3 text-purple-400" /> },
                  { label: "Reporting", value: "Echtzeitnah", icon: <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> }
                ].map((item, i) => (
                  <div key={i} className="py-4 px-2 lg:px-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1 opacity-70">
                      {item.icon}
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">{item.label}</span>
                    </div>
                    <span className="text-base font-bold text-white font-heading tracking-tight">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT - VISUAL */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="relative group"
            >
              {/* Abstract Glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-blue-600/20 rounded-lg blur-lg opacity-50"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-slate-900 rounded-lg overflow-hidden border border-white/10 aspect-[3/4] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="High-Rise Engineering" 
                  className="object-cover w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                {/* Top Bar UI */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   </div>
                   <div className="text-[9px] font-mono text-cyan-400">BAUONE_V4.0_PROJECT_MONITOR</div>
                </div>

                {/* "Clean" Single Dashboard Card instead of scattered boxes */}
                <motion.div 
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 1.4, duration: 0.8 }}
                   className="absolute bottom-6 left-6 right-6"
                >
                   <div className="bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-lg p-5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-3">
                        <div>
                          <h4 className="text-white font-bold text-sm font-heading flex items-center gap-2">
                            <Activity className="w-4 h-4 text-cyan-400" />
                            Active Project Monitor (Demo)
                          </h4>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">ID: #PROJECT-001</p>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 font-bold font-mono">
                          SYNCED
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-1 font-mono">Kostenstatus</p>
                          <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-white">Geprüft</span>
                             <div className="flex-1 h-1.5 bg-slate-800 rounded-sm mb-1.5 overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: "82%" }}
                                  transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
                                  className="h-full bg-cyan-500"
                                ></motion.div>
                             </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-1 font-mono">Timeline</p>
                          <div className="flex items-end gap-2">
                             <span className="text-xl font-bold text-white">On Track</span>
                          </div>
                        </div>
                      </div>
                   </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
