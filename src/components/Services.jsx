import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { translations } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Return null or loading state if translations aren't available yet
  if (!translations) return null;

  return (
    <section id="leistungen" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {translations.services.title}
        </motion.h2>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {translations.services.items.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow flex flex-col h-full"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
            >
              <div className="text-4xl mb-4" role="img" aria-label={service.title}>
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile-friendly padding at the bottom */}
        <div className="h-8 md:h-12" />
      </div>
    </section>
  );
};

export default Services;