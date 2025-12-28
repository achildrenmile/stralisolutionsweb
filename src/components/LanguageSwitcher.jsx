import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-switch flex gap-1 p-1 rounded-lg">
      <button
        onClick={() => setLanguage('de')}
        className={`lang-btn px-3 py-1 rounded-md text-sm font-medium ${
          language === 'de'
            ? 'active'
            : 'text-[var(--text-muted)] hover:text-white'
        }`}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`lang-btn px-3 py-1 rounded-md text-sm font-medium ${
          language === 'en'
            ? 'active'
            : 'text-[var(--text-muted)] hover:text-white'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
