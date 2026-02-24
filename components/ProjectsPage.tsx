
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Layers, Ruler, CheckSquare, FileText } from 'lucide-react';

interface ProjectsPageProps {
  onBack: () => void;
}

const allProjects = [
  {
    id: 1,
    title: "Bestandssanierung nach Schadensereignis",
    location: "Deutschland",
    category: "Retail",
    year: "2022-2023",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=1200",
    description: "Umfassende Bestandssanierung nach Schadensereignis mit komplexer Instandsetzung in bestehender Struktur.",
    scope: "Projektsteuerungsleitungen KG 300 / 400 / 700",
    phases: ['LP 5', 'LP 6', 'LP 7', 'LP 8'],
    bgf: "ca. 8.500 m²"
  },
  {
    id: 2,
    title: "Neubau Forschungs- und Laborgebäude",
    location: "Deutschland",
    category: "Pharma",
    year: "2024",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200",
    description: "Hochmoderner Neubau für Forschung und Produktion mit komplexen technischen Anforderungen an Reinräume und TGA.",
    scope: "Projektmanagement Civil / Structural / Architectural Design",
    phases: ['LP 5', 'LP 6', 'LP 7', 'LP 8'],
    bgf: "ca. 12.300 m²"
  },
  {
    id: 3,
    title: "Neubau Verwaltungsgebäude",
    location: "Deutschland",
    category: "Büro",
    year: "2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    description: "Erweiterung der Unternehmensinfrastruktur mit modernem Verwaltungsgebäude.",
    scope: "Projektmanagementleistungen einschl. Bauherrenvertretung",
    phases: ['LP 5', 'LP 6', 'LP 7', 'LP 8'],
    bgf: "ca. 1.500 m²"
  },
  {
    id: 4,
    title: "Logistikzentrum & Hochregallager",
    location: "Deutschland",
    category: "Logistik",
    year: "2025",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    description: "Erweiterung der industriellen Infrastruktur durch ein hochautomatisiertes Logistikzentrum inkl. Hochregallager.",
    scope: "Projektmanagementleistungen einschl. Bauherrenvertretung",
    phases: ['LP 5', 'LP 6', 'LP 7', 'LP 8'],
    bgf: "ca. 6.700 m²"
  }
];

const categories = ["Alle", "Pharma", "Retail", "Büro", "Logistik"];

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredProjects = activeCategory === "Alle" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </button>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Referenz <span className="text-cyan-400">Projekte.</span></h1>
            <p className="text-slate-400 text-lg">
              Technische Exzellenz in der Umsetzung. Unser Track-Record in anspruchsvollen Sektoren.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-900/50 p-2 rounded-2xl border border-white/5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-slate-900 rounded-3xl border border-white/5 overflow-hidden hover:border-cyan-500/30 transition-all">
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/20 rounded-lg text-[10px] font-bold text-cyan-400 uppercase tracking-widest font-mono">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                   <div>
                      <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h2>
                      <div className="flex items-center gap-4 text-xs text-slate-300 font-mono">
                         <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-cyan-500" /> {project.location}</span>
                         <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-cyan-500" /> {project.year}</span>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8">
                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="p-4 rounded-2xl bg-slate-950 border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                         <Ruler className="w-4 h-4 text-cyan-400" />
                         <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Größe</span>
                      </div>
                      <span className="text-lg font-bold text-white font-mono">{project.bgf}</span>
                   </div>
                   <div className="p-4 rounded-2xl bg-slate-950 border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                         <CheckSquare className="w-4 h-4 text-blue-400" />
                         <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Phasen</span>
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {project.phases.map((phase, i) => (
                           <span key={i} className="text-xs font-bold text-white bg-white/10 px-1.5 py-0.5 rounded">{phase}</span>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="mb-6">
                   <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2 font-mono">
                      <FileText className="w-4 h-4 text-slate-400" /> Leistungsumfang
                   </h4>
                   <p className="text-slate-300 text-sm font-medium border-l-2 border-cyan-500 pl-4 py-1">
                      {project.scope}
                   </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
