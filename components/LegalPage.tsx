
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
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
               <h3 className="text-white font-bold text-xl">Haftung für Links</h3>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
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
              <h3 className="text-white font-bold text-xl">1. Verantwortlicher</h3>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist der im Impressum genannte Betreiber.
                Die Kontaktdaten (Adresse, Telefon, E-Mail) finden Sie im Abschnitt „Impressum“.
              </p>

              <h3 className="text-white font-bold text-xl">2. Art und Zweck der Verarbeitung</h3>
              <p>
                Beim Besuch dieser Website werden technisch notwendige Informationen verarbeitet, um die Website bereitzustellen
                (z. B. Anzeige der Seiteninhalte, Navigation, Speicherung Ihrer Datenschutzentscheidung).
              </p>

              <h3 className="text-white font-bold text-xl">3. Kontaktaufnahme</h3>
              <p>
                Das Kontaktformular auf dieser Website versendet keine Eingaben an einen Website-Server.
                Beim Absenden wird Ihr lokales E-Mail-Programm per „mailto“-Link geöffnet. Die weitere Verarbeitung Ihrer Angaben
                erfolgt erst mit dem Versand Ihrer E-Mail durch Ihren E-Mail-Anbieter und den Empfänger.
              </p>

              <h3 className="text-white font-bold text-xl">4. Einwilligungsmanagement</h3>
              <p>
                Ihre Entscheidung zu Cookies/Tracking wird in Ihrem Browser lokal gespeichert (Local Storage),
                damit die Auswahl bei weiteren Seitenaufrufen berücksichtigt werden kann.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO (Nachweis und Umsetzung datenschutzrechtlicher Anforderungen)
                sowie Art. 6 Abs. 1 lit. f DSGVO (technisch zuverlässiger Betrieb).
              </p>

              <h3 className="text-white font-bold text-xl">5. Google Analytics (nur mit Einwilligung)</h3>
              <p>
                Sofern Sie einwilligen (Art. 6 Abs. 1 lit. a DSGVO), wird Google Analytics zur statistischen Auswertung der Nutzung eingesetzt.
                Ohne Einwilligung wird Google Analytics nicht geladen. Die IP-Anonymisierung ist aktiviert.
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über die Cookie-Einstellungen widerrufen.
              </p>
              <p>
                Hinweis: Je nach Konfiguration des eingesetzten Analytics-Dienstes kann eine Verarbeitung in Drittländern
                (insbesondere USA) nicht ausgeschlossen werden. Die Datenübermittlung erfolgt – sofern erforderlich –
                auf Grundlage der jeweils von den Anbietern bereitgestellten und rechtlich vorgesehenen Übermittlungsmechanismen.
              </p>

              <h3 className="text-white font-bold text-xl">6. Speicherdauer</h3>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist
                oder gesetzliche Aufbewahrungspflichten bestehen.
              </p>

              <h3 className="text-white font-bold text-xl">7. Ihre Rechte</h3>
              <p>
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
                Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch
                gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO).
              </p>
              <p>
                Sofern eine Verarbeitung auf Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                Außerdem haben Sie ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde (Art. 77 DSGVO).
              </p>

              <h3 className="text-white font-bold text-xl">8. Stand dieser Erklärung</h3>
              <p>
                Diese Datenschutzerklärung wird bei rechtlichen, technischen oder organisatorischen Änderungen aktualisiert.
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
              <p>
                Diese Website verwendet technisch notwendige Speichermechanismen sowie – nur nach Ihrer Einwilligung –
                Analyse-Technologien.
              </p>
              <h3 className="text-white font-bold text-xl">Technisch notwendige Speicherung</h3>
              <p>
                Für den Betrieb der Website und die Speicherung Ihrer Datenschutzauswahl wird ein lokaler Speichereintrag
                im Browser (Local Storage) genutzt. Diese Speicherung ist erforderlich, um Ihre Auswahl umzusetzen.
              </p>
              <h3 className="text-white font-bold text-xl">Analyse</h3>
              <p>
                Analysefunktionen (Google Analytics) werden nur nach aktiver Einwilligung geladen und ausgeführt.
              </p>
              <h3 className="text-white font-bold text-xl">Einstellungen verwalten</h3>
              <p>
                Sie können Ihre Entscheidung jederzeit über „Cookie-Einstellungen“ auf dieser Website ändern.
                Zusätzlich können Sie in Ihrem Browser gespeicherte Daten löschen oder blockieren.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
