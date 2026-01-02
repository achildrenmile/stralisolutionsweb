// Umami Analytics - GDPR-compliant, privacy-friendly analytics
// Only loaded after explicit user consent

const UMAMI_URL = 'https://analytics.strali.solutions/script.js';
const WEBSITE_ID = 'a63e5fe3-c1ac-4d40-8e9a-fbfe4126ab0d';

let umamiLoaded = false;

/**
 * Check if analytics consent has been given
 * @returns {boolean}
 */
export const hasAnalyticsConsent = () => {
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return false;
    const parsed = JSON.parse(consent);
    return parsed.analytics === true;
  } catch {
    return false;
  }
};

/**
 * Load Umami analytics script dynamically
 * Only loads if consent is given and script hasn't been loaded yet
 * @returns {boolean} Whether the script was loaded
 */
export const loadUmami = () => {
  // Don't load if already loaded
  if (umamiLoaded) {
    return false;
  }

  // Don't load if no consent
  if (!hasAnalyticsConsent()) {
    return false;
  }

  // Check if script already exists in DOM
  if (document.querySelector(`script[src="${UMAMI_URL}"]`)) {
    umamiLoaded = true;
    return false;
  }

  // Create and inject the script
  const script = document.createElement('script');
  script.src = UMAMI_URL;
  script.async = true;
  script.defer = true;
  script.setAttribute('data-website-id', WEBSITE_ID);

  script.onload = () => {
    umamiLoaded = true;
  };

  script.onerror = () => {
    console.warn('Failed to load Umami analytics');
  };

  document.head.appendChild(script);
  return true;
};

/**
 * Initialize analytics on app load if consent exists
 */
export const initAnalytics = () => {
  if (hasAnalyticsConsent()) {
    loadUmami();
  }
};

/**
 * Disable Umami analytics
 * Removes the script and clears tracking state
 */
export const disableUmami = () => {
  // Remove the Umami script from DOM
  const script = document.querySelector(`script[src="${UMAMI_URL}"]`);
  if (script) {
    script.remove();
  }

  // Clear the global umami object to stop any tracking
  if (window.umami) {
    delete window.umami;
  }

  // Reset loaded state
  umamiLoaded = false;
};
