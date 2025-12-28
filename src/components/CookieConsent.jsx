import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { translations } = useLanguage();
  const t = translations.cookies;

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 80%, transparent 100%)' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-6 shadow-2xl border border-gray-700" style={{ background: '#12121a', backdropFilter: 'blur(10px)' }}>
              {/* Main Content */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🍪</span>
                    <h3 className="text-lg font-semibold text-white">{t.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t.description}
                  </p>

                  {/* Details Toggle */}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-[var(--accent-light)] text-sm mt-2 hover:underline flex items-center gap-1"
                  >
                    {showDetails ? t.hideDetails : t.showDetails}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transform transition-transform ${showDetails ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>

                  {/* Cookie Details */}
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3 text-sm">
                          <div className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <span className="text-green-400">✓</span>
                            <div>
                              <p className="text-white font-medium">{t.essential.title}</p>
                              <p className="text-gray-400 text-xs">{t.essential.description}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <span className="text-gray-400">○</span>
                            <div>
                              <p className="text-white font-medium">{t.analytics.title}</p>
                              <p className="text-gray-400 text-xs">{t.analytics.description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                  <motion.button
                    onClick={handleAcceptAll}
                    className="btn-primary px-6 py-3 rounded-lg font-medium text-sm whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.acceptAll}
                  </motion.button>
                  <motion.button
                    onClick={handleAcceptEssential}
                    className="px-6 py-3 rounded-lg font-medium text-sm border border-[var(--border)] text-gray-400 hover:text-white hover:border-gray-500 transition-colors whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.essentialOnly}
                  </motion.button>
                </div>
              </div>

              {/* Privacy Link */}
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <a
                  href="/impressum"
                  className="text-xs text-gray-500 hover:text-[var(--accent-light)] transition-colors"
                >
                  {t.privacyLink}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
