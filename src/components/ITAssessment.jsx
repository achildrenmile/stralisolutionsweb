import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Gift, MapPin, User, Check } from 'lucide-react';

// Structured data for the free IT Assessment offer
const assessmentSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Kostenloses IT-Assessment',
  description: 'Kostenlose IT-Beratung und Analyse Ihrer IT-Infrastruktur',
  price: '0',
  priceCurrency: 'EUR',
  availability: 'https://schema.org/InStock',
  seller: {
    '@type': 'LocalBusiness',
    name: 'Strali Solutions e.U.',
    url: 'https://strali.solutions'
  }
};

const ITAssessment = () => {
  const { translations, language } = useLanguage();
  const t = translations.assessment;

  const benefits = t.benefits || [];
  const bookingUrl = 'https://outlook.office.com/book/ITAssessment1@strali.solutions/';

  const steps = t.steps || [];

  const isGerman = language === 'de';

  return (
    <>
      <Helmet>
        <title>{isGerman ? 'Kostenloses IT-Assessment | Strali Solutions' : 'Free IT Assessment | Strali Solutions'}</title>
        <meta
          name="description"
          content={isGerman
            ? 'Buchen Sie Ihr kostenloses IT-Assessment. Analyse Ihrer IT-Infrastruktur, individuelle Empfehlungen und persönliche Beratung - unverbindlich und kostenlos.'
            : 'Book your free IT assessment. Analysis of your IT infrastructure, personalized recommendations and expert consultation - no obligation, completely free.'}
        />
        <link rel="canonical" href="https://strali.solutions/assessment" />
        <meta property="og:title" content={isGerman ? 'Kostenloses IT-Assessment | Strali Solutions' : 'Free IT Assessment | Strali Solutions'} />
        <meta property="og:url" content="https://strali.solutions/assessment" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(assessmentSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-dark pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {t.subtitle}
          </p>

          {/* Primary CTA */}
          <motion.a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary px-8 py-4 rounded-xl font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.bookNow}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </motion.a>
          <p className="text-gray-500 text-sm mt-3">{t.redirectNote}</p>
        </motion.div>

        {/* Benefits & Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-dark rounded-2xl p-6 h-full">
              <h2 className="text-xl font-semibold mb-6 text-white">
                {t.whatYouGet}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-400 mt-1 flex-shrink-0" size={20} strokeWidth={2.5} />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-dark rounded-2xl p-6 h-full">
              <h2 className="text-xl font-semibold mb-6 text-white">
                {t.howItWorks}
              </h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Duration & Price Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="card-dark rounded-xl p-4 text-center">
            <Clock className="text-[var(--accent)] mx-auto mb-2" size={32} strokeWidth={1.5} />
            <p className="text-white font-semibold">{t.duration}</p>
            <p className="text-gray-400 text-sm">{t.durationValue}</p>
          </div>
          <div className="card-dark rounded-xl p-4 text-center">
            <Gift className="text-[var(--accent)] mx-auto mb-2" size={32} strokeWidth={1.5} />
            <p className="text-white font-semibold">{t.price}</p>
            <p className="text-gray-400 text-sm">{t.priceValue}</p>
          </div>
          <div className="card-dark rounded-xl p-4 text-center">
            <MapPin className="text-[var(--accent)] mx-auto mb-2" size={32} strokeWidth={1.5} />
            <p className="text-white font-semibold">{t.location}</p>
            <p className="text-gray-400 text-sm">{t.locationValue}</p>
          </div>
          <div className="card-dark rounded-xl p-4 text-center">
            <User className="text-[var(--accent)] mx-auto mb-2" size={32} strokeWidth={1.5} />
            <p className="text-white font-semibold">{t.expert}</p>
            <p className="text-gray-400 text-sm">{t.expertValue}</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="card-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t.ctaTitle}</h3>
            <p className="text-gray-400 mb-6">{t.ctaSubtitle}</p>
            <motion.a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary px-8 py-4 rounded-xl font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.bookNow}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </motion.a>
            <p className="text-gray-500 text-sm mt-3">{t.redirectNote}</p>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default ITAssessment;
