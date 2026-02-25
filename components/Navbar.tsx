
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { View } from '../App';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (view: View, sectionId?: string) => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#top', view: 'home' as View },
    { name: 'Leistungen', href: '#services', view: 'home' as View },
    { name: 'Digitale Steuerung', href: '#innovation', view: 'home' as View },
    { name: 'Projekte', href: '#projects', view: 'projects' as View },
    { name: 'Über uns', href: '#about', view: 'home' as View },
    { name: 'Kontakt', href: '#contact', view: 'home' as View },
  ];

  const handleNavClick = (view: View, href: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(view, href.startsWith('#') ? href : undefined);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => handleNavClick('home', '#top')}
          >
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
               <Logo className="w-full h-full" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white font-heading">
              Bau<span className="text-cyan-400">One</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.view, link.href)}
                className={`text-sm font-medium transition-colors font-mono ${
                  currentView === link.view && !link.href.startsWith('#') ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('home', '#contact')}
              className="px-5 py-2 bg-white text-slate-950 rounded-full text-sm font-bold font-heading hover:bg-cyan-400 transition-colors"
            >
              Erstgespräch anfragen
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-2xl absolute top-full left-0 right-0">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.view, link.href)}
              className="text-lg font-medium text-slate-300 text-left py-2 border-b border-white/5 font-heading"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('home', '#contact')}
            className="w-full text-center py-3 bg-cyan-500 text-white rounded-xl font-bold font-heading mt-2"
          >
            Erstgespräch anfragen
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
