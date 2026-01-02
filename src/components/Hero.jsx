import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  return (
    <motion.section
      className="min-h-[75vh] md:min-h-[85vh] flex items-center justify-center pt-8 md:pt-24 pb-12 md:pb-16 px-4 mt-0 md:mt-16 relative bg-gradient-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-4xl text-center px-2 sm:px-4">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {translations.hero.welcome.split('Strali Solutions')[0]}
          <span className="gradient-text">Strali Solutions</span>
          {translations.hero.welcome.split('Strali Solutions')[1] || ''}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-[var(--accent-light)] font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {translations.hero.tagline}
        </motion.p>
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-[var(--text-muted)] max-w-2xl mx-auto px-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {translations.hero.subline}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => navigate('/assessment')}
            className="inline-flex items-center justify-center gap-2 btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations.hero.assessmentButton}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
          <motion.a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm md:text-base border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-[var(--primary)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations.hero.contactButton}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
