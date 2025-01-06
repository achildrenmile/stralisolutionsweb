import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <motion.section
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20 px-4 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {translations.hero.welcome}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-100"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {translations.hero.tagline}
        </motion.p>
        <motion.a
          href="#kontakt"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {translations.hero.contactButton}
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;
