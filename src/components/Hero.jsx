import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 mt-16 relative bg-gradient-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {translations.hero.welcome.split('Strali Solutions')[0]}
          <span className="gradient-text">Strali Solutions</span>
          {translations.hero.welcome.split('Strali Solutions')[1] || ''}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-[var(--accent-light)] font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {translations.hero.tagline}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => navigate('/assessment')}
            className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl font-semibold text-sm md:text-base"
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm md:text-base border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-[var(--primary)] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations.hero.contactButton}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--text-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </motion.svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
