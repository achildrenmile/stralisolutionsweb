import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { Lightbulb, Cloud, TrendingUp, Code, Blocks, Users, Shield } from 'lucide-react';

const iconMap = {
  Lightbulb,
  Cloud,
  TrendingUp,
  Code,
  Blocks,
  Users,
  Shield
};

const Services = () => {
  const { translations } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  if (!translations) return null;

  return (
    <section id="leistungen" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {translations.services.title}
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
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
            <motion.article
              key={index}
              className="card-dark rounded-2xl p-8 flex flex-col h-full"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
            >
              <div className="mb-4 text-[var(--accent)]">
                {iconMap[service.icon] && (() => {
                  const IconComponent = iconMap[service.icon];
                  return <IconComponent size={40} strokeWidth={1.5} />;
                })()}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-[var(--text-muted)] text-base md:text-lg flex-grow leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className="h-8 md:h-12" />
      </div>
    </section>
  );
};

export default Services;
