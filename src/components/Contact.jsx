import { motion } from 'framer-motion';
import { useState } from 'react';
import { Copy, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);

  const phoneNumber = '43676965801·6'.replace('·', ''); // Basic obfuscation
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
    <section id="kontakt" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Kontakt</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Nötsch 55, A-9611 Nötsch im Gailtal</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a 
                  href={`tel:${phoneNumber}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {phoneNumber.replace(/(\d{3})(\d{3})(\d{5})/, '+43 ($1) $2 $3')}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div className="flex items-center space-x-2">
                  <a 
                    href={`mailto:${emailAddress}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {emailAddress}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
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
                className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm flex items-center"
              >
                <span>✓</span>
                <span className="ml-2">Email-Adresse wurde in die Zwischenablage kopiert!</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Nachricht senden
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;