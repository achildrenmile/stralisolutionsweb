import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const services = [
    {
      title: 'IT Consulting: Ihr Weg zur optimalen IT',
      description: 'Ein objektiver Blick auf Ihre Unternehmens-IT deckt verborgene Optimierungspotenziale auf. Wir unterstützen Sie mit maßgeschneiderten Lösungen und modernen Projektmanagementansätzen, um Ihre IT-Infrastruktur zu verbessern und effizient umzusetzen – für eine zukunftssichere und leistungsstarke IT.',
      icon: '💡'
    },
    {
      title: 'Productivity-Lösungen: Effizient zusammenarbeiten',
      description: 'Mit Tools wie Microsoft Teams, SharePoint, OneDrive, Planner und Copilot optimieren wir Ihre Kommunikation und Arbeitsabläufe. Wir unterstützen Sie bei der Analyse, Integration und Schulung, damit Ihr Team produktiv und nahtlos zusammenarbeitet – ob im Büro oder remote.',
      icon: '🚀'
    },
    {
      title: 'Digitalisierung: Wir helfen Ihnen mit KI und Prozessdigitalisierung',
      description: 'Wir helfen Ihnen, die Potenziale von Künstlicher Intelligenz (KI) und Prozessdigitalisierung optimal zu nutzen. KI ermöglicht intelligente Automatisierung, prädiktive Analysen und personalisierte Lösungen, während Cloud-Technologien eine nahtlose Zusammenarbeit und effiziente Abläufe sicherstellen. Gemeinsam schaffen wir zukunftssichere Prozesse, die Ihre Effizienz steigern und Ihre Innovationskraft fördern.',
      icon: '📈'
    },
    {
      title: 'Software Engineering',
      description: 'Moderne Softwareentwicklung setzt auf KI-gestützte Ansätze, effiziente Prozesse, automatisierte Tests und DevOps-Methoden. Wir entwickeln intelligente, skalierbare Lösungen, die Qualität und Innovation vereinen – für zukunftssicheren Erfolg.',
      icon: '⚙️'
    },
    {
      title: 'Software- und Systemarchitektur: Stabil und zukunftssicher',
      description: 'Eine durchdachte Software- und Systemarchitektur ist entscheidend für den Erfolg. Neben der Erhebung funktionaler und nicht-funktionaler Anforderungen stellen wir sicher, dass Architekturaspekte wie Skalierbarkeit, Sicherheit und Performance konsequent eingehalten werden – für nachhaltige Lösungen. ',
      icon: '🏗️'
    },
    {
        title: 'Projektmanagement: Effizient, strategisch und menschlich',
        description: 'Teamkonflikte gehören zu den häufigsten Risiken für Projekte und Zeitpläne. Wir unterstützen Sie dabei, Ihre Projekte und Ressourcen optimal zu nutzen – nicht nur auf strategischer Ebene, sondern auch durch die Identifikation und Lösung zwischenmenschlicher Herausforderungen. Mit klarer Planung, agilen Methoden und einem Fokus auf Zusammenarbeit schaffen wir ein Umfeld, das Vertrauen und Effizienz fördert. So gewährleisten wir, dass Ihre Projekte termingerecht, hochwertig und nachhaltig umgesetzt werden – für Lösungen, die Menschen und Ziele verbinden.',
        icon: '🤝'
      }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="leistungen" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Unsere Leistungen
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
          {services.map((service, index) => (
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
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 text-base md:text-lg flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;