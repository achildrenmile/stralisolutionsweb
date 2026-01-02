import { motion } from 'framer-motion';
import { useState } from 'react';
import { Copy, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BOOKING_URLS } from '../config/bookings';

const Contact = () => {
  const { translations } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);

  const phoneNumber = '43676965801·6'.replace('·', '');
  const emailAddress = 'office@strali.solutions';

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}?subject=Kontaktanfrage&body=${encodeURIComponent(
      `Name: ${formData.name}\n\nNachricht: ${formData.message}`
    )}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setShowCopiedAlert(true);
      setTimeout(() => setShowCopiedAlert(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="kontakt" className="py-20 px-4 section-gradient">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
            {translations.contact.title}
          </h2>

          <div className="card-dark rounded-2xl p-6 md:p-8">
            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                <MapPin className="w-5 h-5 text-[var(--primary-light)]" />
                <span>Nötsch 219, A-9611 Nötsch im Gailtal</span>
              </div>

              <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                <Phone className="w-5 h-5 text-[var(--primary-light)]" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-white hover:text-[var(--accent-light)] transition-colors"
                >
                  +43 (0)676 96 58 016
                </a>
              </div>

              <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                <Mail className="w-5 h-5 text-[var(--primary-light)]" />
                <div className="flex items-center space-x-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-white hover:text-[var(--accent-light)] transition-colors"
                  >
                    {emailAddress}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 hover:bg-[var(--bg-card)] rounded-full transition-colors text-[var(--text-muted)] hover:text-white"
                    title="In Zwischenablage kopieren"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {showCopiedAlert && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 p-3 bg-green-500/20 text-green-400 rounded-lg text-sm flex items-center border border-green-500/30"
              >
                <span>✓</span>
                <span className="ml-2">{translations.contact.copied}</span>
              </motion.div>
            )}

            {/* Booking CTA */}
            <div className="mb-8 p-6 bg-[var(--bg-card)] border border-[var(--accent)]/30 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="text-[var(--accent)] flex-shrink-0 mt-1">
                  <Calendar size={28} strokeWidth={1.5} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {translations.contact.bookingTitle}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    {translations.contact.bookingDescription}
                  </p>
                  <a
                    href={BOOKING_URLS.initialAssessment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl font-semibold text-sm"
                  >
                    <Calendar size={18} />
                    {translations.contact.bookingButton}
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-grow h-px bg-[var(--border)]"></div>
              <span className="text-sm text-[var(--text-muted)]">{translations.contact.orContactForm}</span>
              <div className="flex-grow h-px bg-[var(--border)]"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                  {translations.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 input-dark rounded-xl text-sm md:text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                  {translations.contact.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 input-dark rounded-xl text-sm md:text-base resize-y"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary py-4 rounded-xl font-semibold text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {translations.contact.send}
              </motion.button>
              <p className="text-xs text-[var(--text-muted)] text-center mt-3">
                {translations.contact.mailClientNote}
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
