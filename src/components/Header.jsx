// src/components/Header.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const { translations } = useLanguage();

  const menuItems = [
    { name: translations.nav.about, href: 'über-uns' },
    { name: translations.nav.services, href: 'leistungen' },
    { name: translations.nav.contact, href: 'kontakt' }
  ];

  return (
    <motion.header 
      className="bg-white shadow-md fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.a
            href="/"
            className="block h-10 md:h-12"
            whileHover={{ scale: 1.02 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" className="h-full w-auto">
              <rect x="0" y="0" width="40" height="40" fill="#1a237e"/>
              <text x="11" y="31" 
                    fontFamily="Arial, sans-serif" 
                    fontSize="30" 
                    fontWeight="bold" 
                    fill="white">S</text>
              <text x="45" y="26" 
                    fontFamily="Arial, sans-serif" 
                    fontSize="24" 
                    fontWeight="bold" 
                    fill="#1a237e">trali</text>
              <text x="45" y="39" 
                    fontFamily="Arial, sans-serif" 
                    fontSize="12" 
                    letterSpacing="0.5" 
                    fill="#1a237e">solutions</text>
            </svg>
          </motion.a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.href}`}
                className="text-gray-700 hover:text-[#2D1B69] transition-colors text-sm lg:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute left-0 right-0 bg-white px-4 pt-2 pb-4 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    className="block py-2 text-gray-700 hover:text-[#2D1B69] hover:bg-gray-50 rounded px-3 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;