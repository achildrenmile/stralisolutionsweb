import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  const handleNavClick = (path) => (e) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] py-6 px-4" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="container mx-auto max-w-6xl text-sm">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p className="text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Strali Solutions e.U. {translations.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/impressum"
              onClick={handleNavClick('/impressum')}
              className="text-[var(--text-muted)] hover:text-white transition-colors"
            >
              {translations.footer.imprint}
            </Link>
            <span className="text-[var(--border)]">|</span>
            <Link
              to="/datenschutz"
              onClick={handleNavClick('/datenschutz')}
              className="text-[var(--text-muted)] hover:text-white transition-colors"
            >
              {translations.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
