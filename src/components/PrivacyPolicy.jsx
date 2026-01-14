import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const PrivacyPolicy = () => {
  const { translations, language } = useLanguage();
  const t = translations.privacy;

  const isGerman = language === 'de';

  return (
    <>
      <Helmet>
        <title>{isGerman ? 'Datenschutzerklärung | Strali Solutions' : 'Privacy Policy | Strali Solutions'}</title>
        <meta
          name="description"
          content={isGerman
            ? 'Datenschutzerklärung von Strali Solutions e.U. - Informationen zur Verarbeitung Ihrer personenbezogenen Daten.'
            : 'Privacy Policy of Strali Solutions e.U. - Information about the processing of your personal data.'}
        />
        <link rel="canonical" href="https://strali.solutions/datenschutz" />
        <link rel="alternate" hrefLang="de" href="https://strali.solutions/datenschutz" />
        <link rel="alternate" hrefLang="en" href="https://strali.solutions/datenschutz" />
        <meta property="og:title" content={isGerman ? 'Datenschutzerklärung | Strali Solutions' : 'Privacy Policy | Strali Solutions'} />
        <meta property="og:description" content={isGerman
          ? 'Datenschutzerklärung von Strali Solutions e.U. - DSGVO-konforme Datenverarbeitung.'
          : 'Privacy Policy of Strali Solutions e.U. - GDPR-compliant data processing.'} />
        <meta property="og:url" content="https://strali.solutions/datenschutz" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://strali.solutions/og-image.png" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="pt-24 px-4 pb-12 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-white">{t.title}</h1>

          <div className="card-dark rounded-2xl p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-[var(--text-muted)]">{t.intro}</p>
            </section>

            {/* Responsible Party */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
                {t.responsible.title}
              </h2>
              <div className="space-y-1 text-[var(--text-muted)]">
                <p><strong className="text-white">Strali Solutions e.U.</strong></p>
                <p>Nötsch 219, 9611 Nötsch im Gailtal, {isGerman ? 'Österreich' : 'Austria'}</p>
                <p>E-Mail: <a href="mailto:office@strali.solutions" className="text-[var(--primary-light)] hover:underline">office@strali.solutions</a></p>
              </div>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
                {t.dataCollection.title}
              </h2>
              <p className="text-[var(--text-muted)]">{t.dataCollection.text}</p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
                {t.cookies.title}
              </h2>
              <p className="text-[var(--text-muted)]">{t.cookies.text}</p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}
                className="mt-4 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--accent)] text-[var(--accent-light)] hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                {isGerman ? 'Cookie-Einstellungen anpassen' : 'Manage Cookie Settings'}
              </button>
            </section>

            {/* Web Analytics (Umami) */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
                {t.analytics.title}
              </h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>{t.analytics.text}</p>

                <ul className="space-y-2 ml-1">
                  {t.analytics.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-green-400 mt-1 flex-shrink-0" size={16} strokeWidth={2.5} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.analytics.purpose}</h4>
                  <p className="text-sm">{t.analytics.purposeText}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.analytics.legal}</h4>
                  <p className="text-sm">{t.analytics.legalText}</p>
                </div>
              </div>
            </section>

            {/* Microsoft Bookings */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
                {t.booking.title}
              </h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>{t.booking.text}</p>

                <div>
                  <h4 className="text-base font-semibold text-white mb-2">{t.booking.dataCollected}</h4>
                  <ul className="space-y-1 ml-1">
                    {t.booking.dataCollectedList.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[var(--accent)]">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.booking.processor}</h4>
                  <p className="text-sm">{t.booking.processorText}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.booking.transfer}</h4>
                  <p className="text-sm">{t.booking.transferText}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.booking.legal}</h4>
                  <p className="text-sm">{t.booking.legalText}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.booking.retention}</h4>
                  <p className="text-sm">{t.booking.retentionText}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-2">{t.booking.terms}</h4>
                  <ul className="space-y-2 ml-1">
                    {t.booking.termsList.map((term, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-green-400 mt-1 flex-shrink-0" size={16} strokeWidth={2.5} />
                        <span className="text-sm">{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm">
                  <a href={t.booking.microsoftPrivacyLink} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline">
                    {t.booking.microsoftPrivacy} →
                  </a>
                </p>
              </div>
            </section>

            {/* AI Platform */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
                {t.ai.title}
              </h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>{t.ai.intro}</p>

                <div>
                  <h4 className="text-base font-semibold text-white mb-2">{t.ai.platforms.title}</h4>
                  <ul className="space-y-2 ml-1">
                    {t.ai.platforms.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[var(--accent)]">•</span>
                        <span className="text-sm">
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline font-medium">{item.name}</a>
                          {' – '}{item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                  <h4 className="text-base font-semibold text-white mb-1">{t.ai.disclosure.title}</h4>
                  <p className="text-sm">{t.ai.disclosure.text}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-2">{t.ai.dataCollected}</h4>
                  <ul className="space-y-1 ml-1">
                    {t.ai.dataCollectedList.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[var(--accent)]">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.ai.processing.title}</h4>
                  <p className="text-sm">{t.ai.processing.text}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.ai.purpose.title}</h4>
                  <p className="text-sm">{t.ai.purpose.text}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.ai.legal.title}</h4>
                  <p className="text-sm">{t.ai.legal.text}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.ai.retention.title}</h4>
                  <p className="text-sm">{t.ai.retention.text}</p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{t.ai.rights.title}</h4>
                  <p className="text-sm">{t.ai.rights.text}</p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <h4 className="text-base font-semibold text-green-400 mb-1">{t.ai.noThirdParty.title}</h4>
                  <p className="text-sm">{t.ai.noThirdParty.text}</p>
                </div>
              </div>
            </section>

            {/* Cloudflare */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
                {t.cloudflare.title}
              </h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>{t.cloudflare.intro}</p>
                <p>{t.cloudflare.processor}</p>
                <p>{t.cloudflare.purpose}</p>
                <p>{t.cloudflare.legal}</p>
                <p>{t.cloudflare.transfer}</p>
                <p>{t.cloudflare.dpa}</p>
                <p>{t.cloudflare.moreInfo}</p>
                <div className="space-y-1">
                  <p>
                    <a href={t.cloudflare.privacyLink} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline">
                      {t.cloudflare.privacyLink}
                    </a>
                  </p>
                  <p>
                    <a href={t.cloudflare.dpaLink} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline">
                      {t.cloudflare.dpaLink}
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
                {t.rights.title}
              </h2>
              <p className="text-[var(--text-muted)]">{t.rights.text}</p>
              <p className="text-[var(--text-muted)] mt-4">
                {t.contact} <a href="mailto:office@strali.solutions" className="text-[var(--primary-light)] hover:underline">office@strali.solutions</a>
              </p>
            </section>

            {/* Back to Impressum link */}
            <section className="pt-4 border-t border-[var(--border)]">
              <Link
                to="/impressum"
                className="text-[var(--primary-light)] hover:underline"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                ← {isGerman ? 'Zurück zum Impressum' : 'Back to Legal Notice'}
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
