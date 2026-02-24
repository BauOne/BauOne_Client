declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_SCRIPT_ID = 'bauone-ga-script';

let activeMeasurementId: string | null = null;

const createScript = (measurementId: string) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.id = GA_SCRIPT_ID;
  document.head.appendChild(script);
};

const ensureGtagBootstrap = (measurementId: string) => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });
};

export const isAnalyticsEnabled = () => Boolean(activeMeasurementId);

export const enableAnalytics = (measurementId: string | undefined) => {
  if (!measurementId || activeMeasurementId === measurementId) {
    return;
  }

  if (!document.getElementById(GA_SCRIPT_ID)) {
    createScript(measurementId);
  }

  ensureGtagBootstrap(measurementId);
  activeMeasurementId = measurementId;
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (!activeMeasurementId || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
    page_location: window.location.href,
  });
};

export const disableAnalytics = () => {
  activeMeasurementId = null;
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }
};

