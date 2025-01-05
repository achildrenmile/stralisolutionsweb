// src/components/About.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const competencies = [
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

  return (
    <section id="über-uns" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Introduction */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Über uns</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Strali Solutions ist ein IT-Unternehmen aus Kärnten, mit Sitz in Nötsch im Gailtal. Seit 2017 unterstützen wir Unternehmen dabei, ihre Ziele effizient zu erreichen. Gegründet von Michael Linder, der auf langjährige Erfahrung in nationalen und internationalen IT-Projekten zurückgreift, stehen wir für professionelle Beratung und exzellente Umsetzung.
            </p>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-700">
              Unsere Kunden schätzen unsere Fähigkeit, Projekte{' '}
              <span className="font-semibold">schnell</span>,{' '}
              <span className="font-semibold">direkt</span> und{' '}
              <span className="font-semibold">unkompliziert</span> umzusetzen – 
              immer mit einem klaren Fokus auf Qualität, Menschlichkeit und Erfolg.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;