export type ConsentChoice = 'accepted' | 'declined';

export interface ConsentState {
  choice: ConsentChoice;
  analytics: boolean;
  updatedAt: string;
}

const CONSENT_STORAGE_KEY = 'bauone_cookie_consent_v1';

export const CONSENT_RESET_EVENT = 'bauone-consent-reset';

export const getConsentState = (): ConsentState | null => {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed || !parsed.choice || typeof parsed.analytics !== 'boolean') {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

export const setConsentState = (state: ConsentState) => {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
};

export const clearConsentState = () => {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
};

