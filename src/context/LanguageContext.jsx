// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  de: {
    nav: {
      about: 'Über uns',
      services: 'Leistungen',
      contact: 'Kontakt'
    },
    hero: {
      welcome: 'Willkommen bei Strali Solutions',
      tagline: 'Schnell. Direkt. Unkompliziert.',
      contactButton: 'Kontakt aufnehmen'
    },
    about: {
      title: 'Über uns',
      description: 'Strali Solutions ist ein IT-Unternehmen aus Kärnten, mit Sitz in Nötsch im Gailtal. Seit 2017 unterstützen wir Unternehmen dabei, ihre Ziele effizient zu erreichen. Gegründet von Michael Linder, der auf langjährige Erfahrung in nationalen und internationalen IT-Projekten zurückgreift, stehen wir für professionelle Beratung und exzellente Umsetzung.',
      values: 'Unsere Kunden schätzen unsere Fähigkeit, Projekte schnell, direkt und unkompliziert umzusetzen – immer mit einem klaren Fokus auf Qualität, Menschlichkeit und Erfolg.'
    },
    services: {
      title: 'Unsere Leistungen',
      items: [
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
          description: 'Eine durchdachte Software- und Systemarchitektur ist entscheidend für den Erfolg. Neben der Erhebung funktionaler und nicht-funktionaler Anforderungen stellen wir sicher, dass Architekturaspekte wie Skalierbarkeit, Sicherheit und Performance konsequent eingehalten werden – für nachhaltige Lösungen.',
          icon: '🏗️'
        },
        {
          title: 'Projektmanagement: Effizient, strategisch und menschlich',
          description: 'Teamkonflikte gehören zu den häufigsten Risiken für Projekte und Zeitpläne. Wir unterstützen Sie dabei, Ihre Projekte und Ressourcen optimal zu nutzen – nicht nur auf strategischer Ebene, sondern auch durch die Identifikation und Lösung zwischenmenschlicher Herausforderungen. Mit klarer Planung, agilen Methoden und einem Fokus auf Zusammenarbeit schaffen wir ein Umfeld, das Vertrauen und Effizienz fördert. So gewährleisten wir, dass Ihre Projekte termingerecht, hochwertig und nachhaltig umgesetzt werden – für Lösungen, die Menschen und Ziele verbinden.',
          icon: '🤝'
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      name: 'Name',
      message: 'Nachricht',
      send: 'Nachricht senden',
      copied: 'Email-Adresse wurde in die Zwischenablage kopiert!',
      address: 'Nötsch 55, A-9611 Nötsch im Gailtal'
    },
    chat: {
      ready: 'Bereit um das Beste aus Ihrer IT herauszuholen?',
      waitResponse: 'Keine Zeit um auf eine Antwort zu warten? Senden Sie uns eine Email und wir kommen ehestmöglichst auf Ihr Anliegen zurück.',
      thankYou: 'Vielen Dank! Wir werden uns schnellstmöglich bei Ihnen melden.',
      error: 'Entschuldigung, es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
      placeholder: 'Ihre Nachricht...',
      sendEmail: 'Email senden'
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      imprint: 'Impressum'
    },
    imprint: {
      title: 'Impressum',
      companyInfo: {
        title: 'Informationspflicht laut §5 E-Commerce Gesetz',
        name: 'Strali Solutions e.U.',
        owner: 'Inhaber: Ing. Michael Linder, MSc',
        address: 'Nötsch 55, 9611 Nötsch im Gailtal'
      },
      details: {
        title: 'Unternehmensdetails',
        registration: 'Firmenbuchnummer: 474736t',
        court: 'Firmenbuchgericht: Landesgericht Klagenfurt',
        vatId: 'UID-Nummer: ATU72580414',
        dvrNumber: 'DVR-Nummer: 4018687'
      }
    }
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      contact: 'Contact'
    },
    hero: {
      welcome: 'Welcome to Strali Solutions',
      tagline: 'Fast. Direct. Uncomplicated.',
      contactButton: 'Get in Touch'
    },
    about: {
      title: 'About Us',
      description: 'Strali Solutions is an IT company based in Carinthia, located in Nötsch im Gailtal. Since 2017, we have been helping companies achieve their goals efficiently. Founded by Michael Linder, who draws on many years of experience in national and international IT projects, we stand for professional consulting and excellent implementation.',
      values: 'Our clients value our ability to implement projects quickly, directly, and straightforwardly – always with a clear focus on quality, humanity, and success.'
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'IT Consulting: Your Path to Optimal IT',
          description: 'An objective look at your corporate IT reveals hidden optimization potential. We support you with tailored solutions and modern project management approaches to improve and efficiently implement your IT infrastructure – for future-proof and powerful IT.',
          icon: '💡'
        },
        {
          title: 'Productivity Solutions: Efficient Collaboration',
          description: 'With tools like Microsoft Teams, SharePoint, OneDrive, Planner, and Copilot, we optimize your communication and workflows. We support you with analysis, integration, and training so your team can collaborate productively and seamlessly – whether in the office or remotely.',
          icon: '🚀'
        },
        {
          title: 'Digitalization: We Help You with AI and Process Digitalization',
          description: 'We help you optimally leverage the potential of Artificial Intelligence (AI) and process digitalization. AI enables intelligent automation, predictive analytics, and personalized solutions, while cloud technologies ensure seamless collaboration and efficient workflows. Together, we create future-proof processes that increase your efficiency and promote innovation.',
          icon: '📈'
        },
        {
          title: 'Software Engineering',
          description: 'Modern software development relies on AI-supported approaches, efficient processes, automated testing, and DevOps methods. We develop intelligent, scalable solutions that combine quality and innovation – for future-proof success.',
          icon: '⚙️'
        },
        {
          title: 'Software and System Architecture: Stable and Future-Proof',
          description: 'A well-thought-out software and system architecture is crucial for success. In addition to gathering functional and non-functional requirements, we ensure that architectural aspects such as scalability, security, and performance are consistently maintained – for sustainable solutions.',
          icon: '🏗️'
        },
        {
          title: 'Project Management: Efficient, Strategic, and Human',
          description: 'Team conflicts are among the most common risks for projects and schedules. We support you in optimally utilizing your projects and resources – not only at a strategic level but also through the identification and resolution of interpersonal challenges. With clear planning, agile methods, and a focus on collaboration, we create an environment that promotes trust and efficiency. This ensures that your projects are implemented on time, with high quality and sustainability – for solutions that connect people and goals.',
          icon: '🤝'
        }
      ]
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      message: 'Message',
      send: 'Send Message',
      copied: 'Email address copied to clipboard!',
      address: 'Nötsch 55, A-9611 Nötsch im Gailtal'
    },
    chat: {
      ready: 'Ready to get the best out of your IT?',
      waitResponse: 'No time to wait for a response? Send us an email and we will get back to you as soon as possible.',
      thankYou: 'Thank you! We will get back to you as soon as possible.',
      error: 'Sorry, there was an error sending your message. Please try again later.',
      placeholder: 'Your message...',
      sendEmail: 'Send Email'
    },
    footer: {
      rights: 'All rights reserved.',
      imprint: 'Imprint'
    },
    imprint: {
      title: 'Imprint',
      companyInfo: {
        title: 'Information according to §5 E-Commerce Law',
        name: 'Strali Solutions e.U.',
        owner: 'Owner: Ing. Michael Linder, MSc',
        address: 'Nötsch 55, 9611 Nötsch im Gailtal'
      },
      details: {
        title: 'Company Details',
        registration: 'Company Registration Number: 474736t',
        court: 'Commercial Register Court: Regional Court Klagenfurt',
        vatId: 'VAT ID: ATU72580414',
        dvrNumber: 'DVR Number: 4018687'
      }
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};