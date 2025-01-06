// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto max-w-6xl text-sm">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {translations.footer.rights}</p>
          <div className="mt-2 md:mt-0 flex items-center gap-4">
            <Link to="/impressum" className="text-gray-300 hover:text-white transition-colors">
              {translations.footer.imprint}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;