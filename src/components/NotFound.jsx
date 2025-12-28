import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NotFound = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <>
      <Helmet>
        <title>{isGerman ? 'Seite nicht gefunden | Strali Solutions' : 'Page Not Found | Strali Solutions'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-9xl font-bold gradient-text mb-4"
          >
            404
          </motion.div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isGerman ? 'Seite nicht gefunden' : 'Page Not Found'}
          </h1>

          <p className="text-[var(--text-muted)] mb-8">
            {isGerman
              ? 'Die gesuchte Seite existiert leider nicht oder wurde verschoben.'
              : 'The page you are looking for does not exist or has been moved.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-[var(--primary)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={18} />
              {isGerman ? 'Zurück' : 'Go Back'}
            </motion.button>

            <Link to="/">
              <motion.div
                className="inline-flex items-center justify-center gap-2 btn-primary px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home size={18} />
                {isGerman ? 'Zur Startseite' : 'Go Home'}
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
