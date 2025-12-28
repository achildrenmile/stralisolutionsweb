// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

// Helper function to get browser language
const getBrowserLanguage = () => {
    // Get browser language (returns e.g., 'en-US' or 'de-DE')
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Extract the language code (e.g., 'en' or 'de')
    const baseLanguage = browserLang.split('-')[0];
    
    console.log(baseLanguage);

    // Check if the language is supported, if not default to 'en'
    return ['en', 'de'].includes(baseLanguage) ? baseLanguage : 'en';
  };

export const translations = {
  de: {
    nav: {
      about: 'Über uns',
      services: 'Leistungen',
      contact: 'Kontakt',
      assessment: 'IT-Assessment'
    },
    hero: {
      welcome: 'Willkommen bei Strali Solutions',
      tagline: 'Schnell. Direkt. Unkompliziert.',
      contactButton: 'Kontakt aufnehmen',
      assessmentButton: 'Kostenloses IT-Assessment'
    },
    about: {
      title: 'Über uns',
      description: 'Strali Solutions ist ein IT-Unternehmen aus Kärnten, mit Sitz in Nötsch im Gailtal. Seit 2017 unterstützen wir Unternehmen dabei, ihre Ziele effizient zu erreichen. Gegründet von Michael Linder, der auf langjährige Erfahrung in nationalen und internationalen IT-Projekten zurückgreift, stehen wir für professionelle Beratung und exzellente Umsetzung.',
      values: 'Unsere Kunden schätzen unsere Fähigkeit, Projekte schnell, direkt und unkompliziert umzusetzen – immer mit einem klaren Fokus auf Qualität, Menschlichkeit und Erfolg.'
    },
    services: {
      title: 'Unsere Lösungen für Ihre digitale Zukunft',
      items: [
        {
          title: 'IT Consulting: Ihr Weg zur optimalen IT',
          description: 'Ein objektiver Blick auf Ihre Unternehmens-IT deckt verborgene Optimierungspotenziale auf. Wir unterstützen Sie mit maßgeschneiderten Lösungen und modernen Projektmanagementansätzen, um Ihre IT-Infrastruktur zu verbessern und effizient umzusetzen – für eine zukunftssichere und leistungsstarke IT.',
          icon: '💡'
        },
        {
          title: 'Microsoft 365 & Copilot: Produktivität neu definiert',
          description: 'Nutzen Sie das volle Potenzial von Microsoft 365: Teams für Kommunikation, SharePoint und OneDrive für Dokumentenmanagement, Planner für Aufgabenverwaltung und Power Platform für Automatisierung. Mit Microsoft Copilot bringen Sie KI-gestützte Assistenz direkt in Ihre tägliche Arbeit – von intelligenter Dokumentenerstellung bis zur automatisierten Datenanalyse. Wir begleiten Sie bei Analyse, Integration und Schulung.',
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
      address: 'Nötsch 219, A-9611 Nötsch im Gailtal'
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
        address: 'Nötsch 219, 9611 Nötsch im Gailtal'
      },
      details: {
        title: 'Unternehmensdetails',
        registration: 'Firmenbuchnummer: 474736t',
        court: 'Firmenbuchgericht: Landesgericht Klagenfurt',
        vatId: 'UID-Nummer: ATU72580414',
        dvrNumber: 'DVR-Nummer: 4018687'
      }
    },
    assessment: {
      title: 'Kostenloses IT-Assessment',
      subtitle: 'Buchen Sie ein unverbindliches Erstgespräch und erfahren Sie, wie wir Ihre IT optimieren können.',
      bookNow: 'Jetzt Termin buchen',
      whatYouGet: 'Das erwartet Sie',
      benefits: [
        'Analyse Ihrer aktuellen IT-Infrastruktur',
        'Identifikation von Optimierungspotenzialen',
        'Individuelle Handlungsempfehlungen',
        'Kostenlose Erstberatung ohne Verpflichtungen',
        'Persönliches Gespräch mit IT-Experten'
      ],
      howItWorks: 'So funktioniert es',
      steps: [
        'Wählen Sie einen passenden Termin im Kalender',
        'Wir bestätigen Ihren Termin per E-Mail',
        'Zum vereinbarten Zeitpunkt führen wir das Gespräch (online oder vor Ort)',
        'Sie erhalten konkrete Empfehlungen für Ihre IT'
      ],
      duration: 'Dauer',
      durationValue: 'ca. 30 Minuten',
      price: 'Kosten',
      priceValue: 'Kostenlos',
      location: 'Ort',
      locationValue: 'Online oder vor Ort',
      expert: 'Ihr Ansprechpartner',
      expertValue: 'Michael Linder, MSc',
      ctaTitle: 'Bereit für den nächsten Schritt?',
      ctaSubtitle: 'Vereinbaren Sie jetzt Ihr kostenloses IT-Assessment und entdecken Sie das Potenzial Ihrer IT.'
    },
    cookies: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Sie können wählen, welche Cookies Sie zulassen möchten.',
      showDetails: 'Details anzeigen',
      hideDetails: 'Details ausblenden',
      acceptAll: 'Alle akzeptieren',
      essentialOnly: 'Nur notwendige',
      privacyLink: 'Mehr Informationen in unserem Impressum',
      essential: {
        title: 'Notwendige Cookies',
        description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.'
      },
      analytics: {
        title: 'Analyse-Cookies',
        description: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren.'
      }
    }
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      assessment: 'IT Assessment'
    },
    hero: {
      welcome: 'Welcome to Strali Solutions',
      tagline: 'Fast. Direct. Uncomplicated.',
      contactButton: 'Get in Touch',
      assessmentButton: 'Free IT Assessment'
    },
    about: {
      title: 'About Us',
      description: 'Strali Solutions is an IT company based in Carinthia, located in Nötsch im Gailtal. Since 2017, we have been helping companies achieve their goals efficiently. Founded by Michael Linder, who draws on many years of experience in national and international IT projects, we stand for professional consulting and excellent implementation.',
      values: 'Our clients value our ability to implement projects quickly, directly, and straightforwardly – always with a clear focus on quality, humanity, and success.'
    },
    services: {
      title: 'Our Solutions for Your Digital Future',
      items: [
        {
          title: 'IT Consulting: Your Path to Optimal IT',
          description: 'An objective look at your corporate IT reveals hidden optimization potential. We support you with tailored solutions and modern project management approaches to improve and efficiently implement your IT infrastructure – for future-proof and powerful IT.',
          icon: '💡'
        },
        {
          title: 'Microsoft 365 & Copilot: Productivity Redefined',
          description: 'Unlock the full potential of Microsoft 365: Teams for communication, SharePoint and OneDrive for document management, Planner for task management, and Power Platform for automation. With Microsoft Copilot, bring AI-powered assistance directly into your daily work – from intelligent document creation to automated data analysis. We guide you through analysis, integration, and training.',
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
      address: 'Nötsch 219, A-9611 Nötsch im Gailtal'
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
        address: 'Nötsch 219, 9611 Nötsch im Gailtal'
      },
      details: {
        title: 'Company Details',
        registration: 'Company Registration Number: 474736t',
        court: 'Commercial Register Court: Regional Court Klagenfurt',
        vatId: 'VAT ID: ATU72580414',
        dvrNumber: 'DVR Number: 4018687'
      }
    },
    assessment: {
      title: 'Free IT Assessment',
      subtitle: 'Book a no-obligation consultation and discover how we can optimize your IT.',
      bookNow: 'Book Appointment',
      whatYouGet: 'What You Get',
      benefits: [
        'Analysis of your current IT infrastructure',
        'Identification of optimization potential',
        'Personalized recommendations',
        'Free initial consultation with no obligations',
        'Personal meeting with IT experts'
      ],
      howItWorks: 'How It Works',
      steps: [
        'Choose a suitable time slot in the calendar',
        'We confirm your appointment via email',
        'At the scheduled time, we conduct the meeting (online or on-site)',
        'You receive concrete recommendations for your IT'
      ],
      duration: 'Duration',
      durationValue: 'approx. 30 minutes',
      price: 'Cost',
      priceValue: 'Free',
      location: 'Location',
      locationValue: 'Online or on-site',
      expert: 'Your Contact',
      expertValue: 'Michael Linder, MSc',
      ctaTitle: 'Ready for the Next Step?',
      ctaSubtitle: 'Schedule your free IT assessment now and discover your IT potential.'
    },
    cookies: {
      title: 'Cookie Settings',
      description: 'We use cookies to provide you with the best possible experience on our website. You can choose which cookies you want to allow.',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
      acceptAll: 'Accept all',
      essentialOnly: 'Essential only',
      privacyLink: 'More information in our Imprint',
      essential: {
        title: 'Essential Cookies',
        description: 'These cookies are required for basic website functionality and cannot be disabled.'
      },
      analytics: {
        title: 'Analytics Cookies',
        description: 'Help us understand how visitors interact with the website.'
      }
    }
  }
};

export const LanguageProvider = ({ children }) => {
  // Initialize with browser language
  const [language, setLanguage] = useState(getBrowserLanguage());

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      translations: translations[language],
      setLanguage // Export setLanguage in case you need direct language setting
    }}>
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