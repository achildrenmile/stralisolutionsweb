import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Impressum = () => {
  const { translations, language } = useLanguage();
  const t = translations.imprint;

  const isGerman = language === 'de';

  return (
    <>
      <Helmet>
        <title>{isGerman ? 'Impressum | Strali Solutions' : 'Legal Notice | Strali Solutions'}</title>
        <meta
          name="description"
          content={isGerman
            ? 'Impressum und rechtliche Informationen von Strali Solutions e.U. - IT Consulting in Kärnten, Österreich.'
            : 'Legal notice and company information for Strali Solutions e.U. - IT Consulting in Carinthia, Austria.'}
        />
        <link rel="canonical" href="https://strali.solutions/impressum" />
        <link rel="alternate" hrefLang="de" href="https://strali.solutions/impressum" />
        <link rel="alternate" hrefLang="en" href="https://strali.solutions/impressum" />
        <meta property="og:title" content={isGerman ? 'Impressum | Strali Solutions' : 'Legal Notice | Strali Solutions'} />
        <meta property="og:description" content={isGerman
          ? 'Impressum und rechtliche Informationen von Strali Solutions e.U.'
          : 'Legal notice and company information for Strali Solutions e.U.'} />
        <meta property="og:url" content="https://strali.solutions/impressum" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://strali.solutions/og-image.png" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="pt-24 px-4 pb-12 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-white">{t.title}</h1>

        <div className="card-dark rounded-2xl p-8 space-y-8">
          {/* Company Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
              {t.companyInfo.title}
            </h2>
            <div className="space-y-1 text-[var(--text-muted)]">
              <p><strong className="text-white">{t.companyInfo.name}</strong></p>
              <p>{t.companyInfo.owner}: {t.companyInfo.ownerName}</p>
              <p>{t.companyInfo.address}</p>
              <p>{t.companyInfo.postalCode}</p>
              <p>{t.companyInfo.country}</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">
              {t.contact.title}
            </h3>
            <div className="space-y-1 text-[var(--text-muted)]">
              <p><strong className="text-white">{t.contact.phone}:</strong> +43 (0)676 96 58 016</p>
              <p><strong className="text-white">{t.contact.email}:</strong> <a href="mailto:office@strali.solutions" className="text-[var(--primary-light)] hover:underline">office@strali.solutions</a></p>
            </div>
          </section>

          {/* Company Details */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">
              {t.details.title}
            </h3>
            <div className="space-y-1 text-[var(--text-muted)]">
              <p><strong className="text-white">{t.details.registration}:</strong> 474736t</p>
              <p><strong className="text-white">{t.details.court}:</strong> {t.details.courtValue}</p>
              <p><strong className="text-white">{t.details.vatId}:</strong> ATU72580414</p>
              <p><strong className="text-white">{t.details.businessPurpose}:</strong> {t.details.businessPurposeValue}</p>
            </div>
          </section>

          {/* Trade License */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">
              {t.trade.title}
            </h3>
            <div className="space-y-1 text-[var(--text-muted)]">
              <p><strong className="text-white">{t.trade.license}:</strong> {t.trade.licenseValue}</p>
              <p><strong className="text-white">{t.trade.authority}:</strong> {t.trade.authorityValue}</p>
              <p><strong className="text-white">{t.trade.regulation}:</strong> {t.trade.regulationValue} (<a href={`https://${t.trade.regulationLink}`} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline">{t.trade.regulationLink}</a>)</p>
            </div>
          </section>

          {/* Chamber Membership */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">
              {t.membership.title}
            </h3>
            <div className="space-y-1 text-[var(--text-muted)]">
              <p>{t.membership.member}</p>
              <p>{t.membership.profession}</p>
            </div>
          </section>

          {/* Online Dispute Resolution */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">
              {t.odr.title}
            </h3>
            <div className="space-y-2 text-[var(--text-muted)]">
              <p>{t.odr.text} <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline">https://ec.europa.eu/consumers/odr</a></p>
              <p className="text-sm">{t.odr.note}</p>
            </div>
          </section>

          {/* AI Systems Disclosure */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
              {t.ai.title}
            </h2>
            <p className="text-[var(--text-muted)] mb-4">{t.ai.intro}</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.ai.disclosure.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{t.ai.disclosure.text}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.ai.platforms.title}</h3>
                <ul className="space-y-2 ml-1">
                  {t.ai.platforms.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[var(--accent)]">•</span>
                      <span className="text-sm text-[var(--text-muted)]">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-light)] hover:underline font-medium">{item.name}</a>
                        {' – '}{item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.ai.models.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{t.ai.models.text}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.ai.purpose.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{t.ai.purpose.text}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.ai.limitations.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{t.ai.limitations.text}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.ai.operator.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{t.ai.operator.text}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.ai.compliance.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{t.ai.compliance.text}</p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Link */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
              {translations.privacy.title}
            </h2>
            <p className="text-[var(--text-muted)] mb-4">
              {isGerman
                ? 'Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer Datenschutzerklärung.'
                : 'Information about the processing of your personal data can be found in our Privacy Policy.'}
            </p>
            <Link
              to="/datenschutz"
              className="text-[var(--primary-light)] hover:underline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {translations.privacy.title} →
            </Link>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
              {t.disclaimer.title}
            </h2>
            <div className="space-y-4 text-sm text-[var(--text-muted)]">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.disclaimer.content.title}</h3>
                <p>{t.disclaimer.content.text}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.disclaimer.links.title}</h3>
                <p>{t.disclaimer.links.text}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">{t.disclaimer.copyright.title}</h3>
                <p>{t.disclaimer.copyright.text}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default Impressum;
