
import React from 'react';
import { ArrowLeft, ShieldCheck, FileText, Scale, Cookie } from 'lucide-react';
import { hasPlaceholderLegalData, siteContent } from '../content/siteContent';

interface LegalPageProps {
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ onBack }) => {
  const hasRegisterEntry = Boolean(siteContent.legal.registerCourt && siteContent.legal.registrationNumber);
  const hasVatId = Boolean(siteContent.legal.vatId);

  return (
    <div className="pt-32 pb-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </button>

        <div className="space-y-20">
          {/* Impressum */}
          <section id="impressum">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <Scale className="text-cyan-400 w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold text-white">Impressum</h1>
            </div>

            {hasPlaceholderLegalData && (
              <div className="mb-8 p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-300 text-sm">
                Hinweis: Diese Rechtsdaten enthalten Platzhalter und müssen vor Go-Live mit Ihren echten Unternehmensdaten ersetzt werden.
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed">
              <div>
                <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Angaben gemäß § 5 TMG</h3>
                <p className="mb-6">
                  {siteContent.company.name}<br />
                  {siteContent.company.street}<br />
                  {siteContent.company.postalCode} {siteContent.company.city}
                </p>
                
                <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Vertreten durch</h3>
                <p className="mb-6">{siteContent.legal.representative}</p>

                <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Kontakt</h3>
                <p className="mb-6">
                  Telefon: {siteContent.company.phoneDisplay}<br />
                  E-Mail: {siteContent.company.email}
                </p>
              </div>
              
              <div>
                {hasRegisterEntry && (
                  <>
                    <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Registereintrag</h3>
                    <p className="mb-6">
                      Eintragung im Handelsregister.<br />
                      Registergericht: {siteContent.legal.registerCourt}<br />
                      Registernummer: {siteContent.legal.registrationNumber}
                    </p>
                  </>
                )}

                {hasVatId && (
                  <>
                    <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Umsatzsteuer-ID</h3>
                    <p className="mb-6">
                      Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                      {siteContent.legal.vatId}
                    </p>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section id="disclaimer" className="pt-20 border-t border-white/5">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <FileText className="text-purple-400 w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold text-white">Haftungsausschluss</h2>
            </div>
            <div className="prose prose-invert max-w-none text-slate-400 space-y-6">
               <h3 className="text-white font-bold text-xl">Haftung für Inhalte</h3>
               <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
               <h3 className="text-white font-bold text-xl">Haftung für Links</h3>
               <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            </div>
          </section>

          {/* Datenschutz */}
          <section id="datenschutz" className="pt-20 border-t border-white/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <ShieldCheck className="text-blue-400 w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold text-white">Datenschutzerklärung</h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-slate-400 space-y-6">
              <h3 className="text-white font-bold text-xl">1. Datenschutz auf einen Blick</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-white font-bold text-xl">2. Datenerfassung auf unserer Website</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>

              <h3 className="text-white font-bold text-xl">3. Analyse-Tools und Tools von Drittanbietern</h3>
              <p>
                Sofern Sie einwilligen, nutzen wir Google Analytics zur anonymisierten statistischen Auswertung der Website-Nutzung. Ohne Einwilligung werden keine Analyse-Cookies gesetzt und kein Tracking aktiviert.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies" className="pt-20 border-t border-white/5">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <Cookie className="text-emerald-400 w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold text-white">Cookie-Richtlinie</h2>
            </div>
            <div className="prose prose-invert max-w-none text-slate-400 space-y-6">
               <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
               <h3 className="text-white font-bold text-xl">Notwendige Cookies</h3>
               <p>Einige Cookies sind für den technischen Betrieb der Website erforderlich (z. B. für die Navigation oder die Speicherung Ihrer Datenschutzeinstellungen). Diese Cookies können nicht deaktiviert werden.</p>
               <h3 className="text-white font-bold text-xl">Einstellungen verwalten</h3>
               <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
