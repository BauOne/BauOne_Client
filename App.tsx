
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Innovation from './components/Innovation';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import LegalPage from './components/LegalPage';
import CookieConsentBanner from './components/CookieConsentBanner';
import { Settings, BarChart3, Building2, Phone } from 'lucide-react';
import { disableAnalytics, enableAnalytics, isAnalyticsEnabled, trackPageView } from './services/analyticsService';
import { CONSENT_RESET_EVENT, getConsentState, setConsentState } from './services/consentService';
import { siteContent } from './content/siteContent';

export type View = 'home' | 'projects' | 'legal';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const storedConsent = getConsentState();
    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

    if (!storedConsent) {
      setShowCookieBanner(true);
      return;
    }

    if (storedConsent.analytics) {
      enableAnalytics(gaMeasurementId);
    }
  }, []);

  useEffect(() => {
    const handleConsentReset = () => {
      disableAnalytics();
      setShowCookieBanner(true);
    };

    window.addEventListener(CONSENT_RESET_EVENT, handleConsentReset);

    return () => {
      window.removeEventListener(CONSENT_RESET_EVENT, handleConsentReset);
    };
  }, []);

  useEffect(() => {
    if (!isAnalyticsEnabled()) {
      return;
    }

    const pagePath = currentView === 'home' ? '/' : `/${currentView}`;
    trackPageView(pagePath);
  }, [currentView]);

  useEffect(() => {
    const baseUrl = siteContent.seo.canonicalUrl.replace(/\/$/, '');
    const seoByView: Record<View, { title: string; description: string; path: string }> = {
      home: {
        title: siteContent.seo.title,
        description: siteContent.seo.description,
        path: '/',
      },
      projects: {
        title: 'Referenzen | BauOne Ingenieurbüro Behrens',
        description: 'Ausgewählte Referenzprojekte von BauOne: Projektsteuerung und Ingenieurmanagement im anspruchsvollen Hochbau.',
        path: '/projects',
      },
      legal: {
        title: 'Impressum & Datenschutz | BauOne',
        description: 'Impressum, Datenschutz und Cookie-Informationen der Website von BauOne Ingenieurbüro Behrens.',
        path: '/legal',
      },
    };

    const currentSeo = seoByView[currentView];
    const canonical = `${baseUrl}${currentSeo.path === '/' ? '/' : currentSeo.path}`;

    document.title = currentSeo.title;

    const setMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    setMeta('meta[name="description"]', currentSeo.description);
    setMeta('meta[property="og:title"]', currentSeo.title);
    setMeta('meta[property="og:description"]', currentSeo.description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[name="twitter:title"]', currentSeo.title);
    setMeta('meta[name="twitter:description"]', currentSeo.description);

    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
  }, [currentView]);

  // Handle back-to-top on view change, unless we are navigating to a section
  useEffect(() => {
    // This effect is mainly for complete view changes without hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  const handleNavigation = (view: View, sectionId?: string) => {
    setCurrentView(view);
    
    if (sectionId) {
      // Small timeout to allow the view to render before scrolling
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAcceptAnalytics = () => {
    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
    setConsentState({
      choice: 'accepted',
      analytics: true,
      updatedAt: new Date().toISOString(),
    });
    enableAnalytics(gaMeasurementId);
    const pagePath = currentView === 'home' ? '/' : `/${currentView}`;
    trackPageView(pagePath);
    setShowCookieBanner(false);
  };

  const handleDeclineAnalytics = () => {
    setConsentState({
      choice: 'declined',
      analytics: false,
      updatedAt: new Date().toISOString(),
    });
    disableAnalytics();
    setShowCookieBanner(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'projects':
        return <ProjectsPage onBack={() => handleNavigation('home')} />;
      case 'legal':
        return <LegalPage onBack={() => handleNavigation('home')} />;
      default:
        return (
          <>
            <Hero />
            
            {/* Value Proposition Strip - Redesigned to be "Technical Modules" */}
            <section className="bg-slate-950 border-y border-white/10 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  
                  {/* Module 1 */}
                  <div className="p-10 lg:p-12 relative group hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => handleNavigation('home', '#services')}>
                    <span className="absolute top-6 right-6 text-4xl font-bold text-white/5 font-mono group-hover:text-cyan-500/10 transition-colors">01</span>
                    <div className="w-10 h-10 mb-6 flex items-center justify-center bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
                      <Settings className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-bold mb-3 uppercase tracking-tight text-lg font-heading">Projektsteuerung mit Ingenieurkompetenz</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-mono">
                      Wir steuern komplexe Hochbauprojekte auf Basis belastbarer Projekt- und Fachdaten.
                    </p>
                  </div>

                  {/* Module 2 */}
                  <div className="p-10 lg:p-12 relative group hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => handleNavigation('home', '#innovation')}>
                    <span className="absolute top-6 right-6 text-4xl font-bold text-white/5 font-mono group-hover:text-blue-500/10 transition-colors">02</span>
                    <div className="w-10 h-10 mb-6 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-bold mb-3 uppercase tracking-tight text-lg font-heading">Digitale Steuerungssicherheit</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-mono">
                      Wir konsolidieren Daten aus Planung und Ausführung, damit Entscheidungen nachvollziehbar und termingerecht getroffen werden.
                    </p>
                  </div>

                  {/* Module 3 */}
                  <div className="p-10 lg:p-12 relative group hover:bg-white/[0.02] transition-colors cursor-pointer" onClick={() => handleNavigation('projects')}>
                    <span className="absolute top-6 right-6 text-4xl font-bold text-white/5 font-mono group-hover:text-emerald-500/10 transition-colors">03</span>
                    <div className="w-10 h-10 mb-6 flex items-center justify-center bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-bold mb-3 uppercase tracking-tight text-lg font-heading">Komplexe Hochbauprojekte</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-mono">
                      Unser Fokus liegt auf technisch und organisatorisch anspruchsvollen Hochbauprojekten.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            <Services onNavigate={handleNavigation} />
            <Innovation />
            <About />
            <Projects onSeeAll={() => handleNavigation('projects')} />
            <Contact />
            
            {/* Final Conversion CTA */}
            <section className="py-32 bg-slate-950 relative">
              <div className="max-w-5xl mx-auto px-4 text-center">
                <div className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-8">
                   <span className="text-cyan-400 font-bold text-[10px] uppercase tracking-widest font-mono">Projektsteuerung mit belastbarer Datengrundlage</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter">
                  Lassen Sie uns Ihr <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projekt sicher zum Ziel führen.</span>
                </h2>
                <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Vom Mediapark Köln aus steuern wir Ihr Projekt mit klaren Zuständigkeiten, strukturiertem Reporting und belastbaren Entscheidungsgrundlagen.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <button onClick={() => handleNavigation('home', '#contact')} className="px-12 py-6 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-xl hover:scale-105 active:scale-95 font-heading">
                     Unverbindliches Erstgespräch
                   </button>
                   <a href="tel:022177269932" className="px-12 py-6 bg-slate-900 border border-white/10 text-white font-bold rounded-lg hover:border-cyan-500/50 transition-all backdrop-blur-md font-heading flex items-center justify-center gap-2">
                     <Phone className="w-4 h-4" /> +49 221 77269932
                   </a>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30">
      <Navbar onNavigate={handleNavigation} currentView={currentView} />
      <main>
        {renderView()}
      </main>
      <Footer onNavigate={handleNavigation} />
      {showCookieBanner && (
        <CookieConsentBanner
          onAcceptAnalytics={handleAcceptAnalytics}
          onDeclineAnalytics={handleDeclineAnalytics}
          onOpenLegal={() => handleNavigation('legal')}
        />
      )}
    </div>
  );
}

export default App;
