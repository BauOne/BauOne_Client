import React from 'react';

interface CookieConsentBannerProps {
  onAcceptAnalytics: () => void;
  onDeclineAnalytics: () => void;
  onOpenLegal: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onAcceptAnalytics,
  onDeclineAnalytics,
  onOpenLegal,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[120] p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-slate-950/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
        <div className="p-5 sm:p-6">
          <p className="text-white font-bold text-sm sm:text-base mb-2 font-heading">Cookie- und Tracking-Einstellungen</p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
            Wir nutzen technisch notwendige Cookies sowie – nur mit Ihrer Einwilligung – Google Analytics zur anonymisierten Auswertung der Website-Nutzung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <button
              onClick={onOpenLegal}
              className="text-cyan-400 text-xs sm:text-sm font-medium text-left hover:underline"
            >
              Mehr in Datenschutz & Cookies
            </button>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={onDeclineAnalytics}
                className="px-4 py-2 rounded-lg border border-white/15 text-slate-200 text-xs sm:text-sm font-bold hover:bg-white/5 transition-colors"
              >
                Nur notwendige Cookies
              </button>
              <button
                onClick={onAcceptAnalytics}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs sm:text-sm font-bold hover:bg-cyan-400 transition-colors"
              >
                Analytics akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
