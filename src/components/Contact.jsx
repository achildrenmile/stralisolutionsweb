import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:office@strali.solutions?subject=Kontaktanfrage&body=${encodeURIComponent(
      `Name: ${formData.name}\n\nNachricht: ${formData.message}`
    )}`;
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
            <div className="mb-8 space-y-3">
              <p className="flex items-center space-x-2">
                <span>📍</span>
                <span>Nötsch 55, A-9611 Nötsch im Gailtal</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <span>+43 (0) 676 96 58 016</span>
              </p>
              <p className="flex items-center space-x-2">
                <span>📧</span>
                <a 
                  href="mailto:office@strali.solutions" 
                  className="text-blue-600 hover:underline"
                >
                  office@strali.solutions
                </a>
              </p>
            </div>

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