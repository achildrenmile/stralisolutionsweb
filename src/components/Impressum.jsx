import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const Impressum = () => {
  const { translations } = useLanguage();
  const t = translations.imprint;

  return (
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

          {/* Booking Service Terms */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-[var(--accent-light)]">
              {t.booking.title}
            </h3>
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

          {/* Privacy Policy */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-[var(--accent-light)]">
              {t.privacy.title}
            </h2>
            <div className="space-y-4 text-[var(--text-muted)]">
              <p>{t.privacy.intro}</p>

              <div>
                <h4 className="text-base font-semibold text-white mb-1">{t.privacy.dataCollection}</h4>
                <p className="text-sm">{t.privacy.dataCollectionText}</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-1">{t.privacy.cookies}</h4>
                <p className="text-sm">{t.privacy.cookiesText}</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white mb-1">{t.privacy.rights}</h4>
                <p className="text-sm">{t.privacy.rightsText}</p>
              </div>

              <p className="text-sm">{t.privacy.contact} <a href="mailto:office@strali.solutions" className="text-[var(--primary-light)] hover:underline">office@strali.solutions</a></p>
            </div>
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
  );
};

export default Impressum;
