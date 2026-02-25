
import React from 'react';
import { ArrowRight, Ruler, Layers } from 'lucide-react';

interface ProjectsProps {
  onSeeAll: () => void;
}

const projects = [
  {
    title: "Forschungs- und Laborgebäude",
    category: "Forschung & Produktion",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
    bgf: "ca. 12.300 m²",
    scope: "Projektsteuerung Rohbau / Ausbau"
  },
  {
    title: "Bestandssanierung nach Schadensereignis",
    category: "Retail / Wiederaufbau",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800",
    bgf: "ca. 8.500 m²",
    scope: "Projektsteuerung KG 300-700"
  },
  {
    title: "Logistik & High-Bay",
    category: "Industrie & Logistik",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    bgf: "ca. 6.700 m²",
    scope: "Bauherrenvertretung"
  }
];

const Projects: React.FC<ProjectsProps> = ({ onSeeAll }) => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 font-mono">Ausgewählte Referenzen</h2>
            <h3 className="text-4xl font-bold text-white">Komplexität <span className="italic text-slate-500">strukturiert gesteuert.</span></h3>
          </div>
          <button 
            onClick={onSeeAll}
            className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-2 font-heading group"
          >
            Referenzen im Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer" onClick={onSeeAll}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-white/5 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                <div className="absolute top-6 right-6">
                   <div className="w-10 h-10 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                   </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                     <div className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold text-white uppercase tracking-widest font-mono flex items-center gap-1.5">
                        <Ruler className="w-3 h-3 text-cyan-400" /> {project.bgf}
                     </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                  <p className="text-cyan-400 text-xs font-mono uppercase tracking-tight mb-2">{project.category}</p>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed border-t border-white/10 pt-2 mt-2">
                    {project.scope}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
