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
      subline: 'Wir bringen Klarheit in komplexe IT-Entscheidungen – durch Assessment, Struktur und die richtigen Werkzeuge.',
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
          icon: 'Lightbulb'
        },
        {
          title: 'Microsoft 365 & Copilot: Produktivität neu definiert',
          description: 'Nutzen Sie das volle Potenzial von Microsoft 365: Teams für Kommunikation, SharePoint und OneDrive für Dokumentenmanagement, Planner für Aufgabenverwaltung und Power Platform für Automatisierung. Mit Microsoft Copilot bringen Sie KI-gestützte Assistenz direkt in Ihre tägliche Arbeit – von intelligenter Dokumentenerstellung bis zur automatisierten Datenanalyse. Wir begleiten Sie bei Analyse, Integration und Schulung.',
          icon: 'Cloud'
        },
        {
          title: 'Digitalisierung: Wir helfen Ihnen mit KI und Prozessdigitalisierung',
          description: 'Wir helfen Ihnen, die Potenziale von Künstlicher Intelligenz (KI) und Prozessdigitalisierung optimal zu nutzen. KI ermöglicht intelligente Automatisierung, prädiktive Analysen und personalisierte Lösungen, während Cloud-Technologien eine nahtlose Zusammenarbeit und effiziente Abläufe sicherstellen. Gemeinsam schaffen wir zukunftssichere Prozesse, die Ihre Effizienz steigern und Ihre Innovationskraft fördern.',
          icon: 'TrendingUp'
        },
        {
          title: 'Security-by-Design & AI Security Advisory',
          description: 'Wir unterstützen Unternehmen dabei, AI- und Digital-Lösungen von Anfang an sicher zu gestalten. Dabei bringen wir langjährige Engineering-Erfahrung sowie Praxiswissen aus Security-Reviews und Penetrationstests ein – ohne selbst als Pentest-Anbieter aufzutreten. Unser Fokus: Architektur-Reviews aus Security-Sicht, Vorbereitung und Begleitung externer Pentests sowie die Übersetzung von Security-Findings in umsetzbare Engineering-Maßnahmen.',
          icon: 'Shield'
        },
        {
          title: 'Software Engineering & Architektur',
          description: 'Moderne Softwareentwicklung erfordert mehr als sauberen Code. Wir verbinden KI-gestützte Entwicklung, effiziente Prozesse, automatisierte Tests, DevOps-Methoden und robuste Software- und Systemarchitektur. Von funktionalen und nicht-funktionalen Anforderungen bis hin zu Skalierbarkeit, Sicherheit und Performance – wir entwickeln Lösungen, die stabil, sicher und zukunftsfähig sind.',
          icon: 'Code'
        },
        {
          title: 'Projektmanagement: Effizient, strategisch und menschlich',
          description: 'Teamkonflikte gehören zu den häufigsten Risiken für Projekte und Zeitpläne. Wir unterstützen Sie dabei, Ihre Projekte und Ressourcen optimal zu nutzen – nicht nur auf strategischer Ebene, sondern auch durch die Identifikation und Lösung zwischenmenschlicher Herausforderungen. Mit klarer Planung, agilen Methoden und einem Fokus auf Zusammenarbeit schaffen wir ein Umfeld, das Vertrauen und Effizienz fördert. So gewährleisten wir, dass Ihre Projekte termingerecht, hochwertig und nachhaltig umgesetzt werden – für Lösungen, die Menschen und Ziele verbinden.',
          icon: 'Users'
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      name: 'Name',
      message: 'Nachricht',
      send: 'Nachricht senden',
      copied: 'Email-Adresse wurde in die Zwischenablage kopiert!',
      address: 'Nötsch 219, A-9611 Nötsch im Gailtal',
      bookingTitle: 'Erstgespräch buchen',
      bookingDescription: 'Vereinbaren Sie ein kostenloses Erstgespräch, um Ihre Anforderungen zu besprechen.',
      bookingButton: 'Termin buchen',
      orContactForm: 'Oder schreiben Sie uns direkt',
      mailClientNote: 'Öffnet Ihr E-Mail-Programm'
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
      imprint: 'Impressum',
      privacy: 'Datenschutz'
    },
    privacy: {
      title: 'Datenschutzerklärung',
      intro: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten auf dieser Website.',
      responsible: {
        title: 'Verantwortlicher'
      },
      dataCollection: {
        title: 'Datenerfassung auf dieser Website',
        text: 'Die Nutzung unserer Webseite ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Soweit personenbezogene Daten erhoben werden, erfolgt dies auf freiwilliger Basis. Beim Besuch dieser Website werden durch den Browser automatisch Informationen an den Server übermittelt (z.B. Browsertyp, Betriebssystem, Uhrzeit des Zugriffs). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.'
      },
      cookies: {
        title: 'Cookies',
        text: 'Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Sie können Ihre Cookie-Einstellungen jederzeit über unseren Cookie-Banner anpassen. Notwendige Cookies sind für die Grundfunktionen der Website erforderlich. Analyse-Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.'
      },
      booking: {
        title: 'Terminbuchung (Microsoft Bookings)',
        text: 'Für die Terminbuchung nutzen wir Microsoft Bookings, einen Dienst der Microsoft Corporation.',
        dataCollected: 'Erhobene Daten',
        dataCollectedList: [
          'Name und Kontaktdaten (E-Mail, optional Telefonnummer)',
          'Gewählter Termin und Zeitpunkt',
          'Optionale Nachricht/Anmerkungen'
        ],
        processor: 'Auftragsverarbeiter',
        processorText: 'Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA. Microsoft verarbeitet die Daten in unserem Auftrag gemäß Art. 28 DSGVO.',
        transfer: 'Datenübermittlung',
        transferText: 'Die Daten werden auf Servern von Microsoft verarbeitet. Microsoft ist unter dem EU-U.S. Data Privacy Framework zertifiziert, was ein angemessenes Datenschutzniveau gewährleistet.',
        legal: 'Rechtsgrundlage',
        legalText: 'Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO) bzw. aufgrund Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
        retention: 'Speicherdauer',
        retentionText: 'Ihre Buchungsdaten werden nach Durchführung des Termins bzw. bei Nichterscheinen gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
        terms: 'Bedingungen',
        termsList: [
          'Das kostenlose IT-Assessment ist vollständig kostenlos und unverbindlich',
          'Bei Verhinderung bitten wir um rechtzeitige Absage'
        ],
        microsoftPrivacy: 'Microsoft Datenschutzerklärung',
        microsoftPrivacyLink: 'https://privacy.microsoft.com/de-de/privacystatement'
      },
      rights: {
        title: 'Ihre Rechte',
        text: 'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Bei Fragen zur Verarbeitung Ihrer Daten oder zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden.'
      },
      contact: 'Bei Fragen zum Datenschutz kontaktieren Sie uns unter:'
    },
    imprint: {
      title: 'Impressum',
      companyInfo: {
        title: 'Informationspflicht laut §5 E-Commerce Gesetz, §14 UGB',
        name: 'Strali Solutions e.U.',
        owner: 'Inhaber',
        ownerName: 'Ing. Michael Linder',
        address: 'Nötsch 219',
        postalCode: '9611 Nötsch im Gailtal',
        country: 'Österreich'
      },
      contact: {
        title: 'Kontakt',
        phone: 'Telefon',
        email: 'E-Mail'
      },
      details: {
        title: 'Unternehmensdetails',
        registration: 'Firmenbuchnummer',
        court: 'Firmenbuchgericht',
        courtValue: 'Landesgericht Klagenfurt',
        vatId: 'UID-Nummer',
        businessPurpose: 'Unternehmensgegenstand',
        businessPurposeValue: 'IT-Dienstleistungen, IT-Beratung, Softwareentwicklung'
      },
      trade: {
        title: 'Gewerbeberechtigung',
        license: 'Gewerbeberechtigung',
        licenseValue: 'Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik',
        authority: 'Aufsichtsbehörde/Gewerbebehörde',
        authorityValue: 'Bezirkshauptmannschaft Villach-Land',
        regulation: 'Berufsrecht',
        regulationValue: 'Gewerbeordnung',
        regulationLink: 'www.ris.bka.gv.at'
      },
      membership: {
        title: 'Kammerzugehörigkeit',
        member: 'Mitglied der Wirtschaftskammer Kärnten',
        profession: 'Fachgruppe UBIT (Unternehmensberatung, Buchhaltung und Informationstechnologie)'
      },
      odr: {
        title: 'Online-Streitbeilegung',
        text: 'Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:',
        note: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
      },
      booking: {
        title: 'Buchungsservice (Microsoft Bookings)',
        text: 'Für die Terminbuchung nutzen wir Microsoft Bookings, einen Dienst der Microsoft Corporation.',
        dataCollected: 'Erhobene Daten',
        dataCollectedList: [
          'Name und Kontaktdaten (E-Mail, optional Telefonnummer)',
          'Gewählter Termin und Zeitpunkt',
          'Optionale Nachricht/Anmerkungen'
        ],
        processor: 'Auftragsverarbeiter',
        processorText: 'Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA. Microsoft verarbeitet die Daten in unserem Auftrag gemäß Art. 28 DSGVO.',
        transfer: 'Datenübermittlung',
        transferText: 'Die Daten werden auf Servern von Microsoft verarbeitet. Microsoft ist unter dem EU-U.S. Data Privacy Framework zertifiziert, was ein angemessenes Datenschutzniveau gewährleistet.',
        legal: 'Rechtsgrundlage',
        legalText: 'Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO) bzw. aufgrund Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
        retention: 'Speicherdauer',
        retentionText: 'Ihre Buchungsdaten werden nach Durchführung des Termins bzw. bei Nichterscheinen gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
        terms: 'Bedingungen',
        termsList: [
          'Das kostenlose IT-Assessment ist vollständig kostenlos und unverbindlich',
          'Bei Verhinderung bitten wir um rechtzeitige Absage'
        ],
        microsoftPrivacy: 'Microsoft Datenschutzerklärung',
        microsoftPrivacyLink: 'https://privacy.microsoft.com/de-de/privacystatement'
      },
      privacy: {
        title: 'Datenschutzerklärung',
        intro: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.',
        dataCollection: 'Datenerfassung',
        dataCollectionText: 'Die Nutzung unserer Webseite ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Soweit personenbezogene Daten erhoben werden, erfolgt dies auf freiwilliger Basis.',
        cookies: 'Cookies',
        cookiesText: 'Unsere Webseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Sie können Ihre Cookie-Einstellungen jederzeit über unseren Cookie-Banner anpassen.',
        rights: 'Ihre Rechte',
        rightsText: 'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.',
        contact: 'Bei Fragen zum Datenschutz kontaktieren Sie uns unter:'
      },
      disclaimer: {
        title: 'Haftungsausschluss',
        content: {
          title: '1. Inhalt des Onlineangebotes',
          text: 'Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.'
        },
        links: {
          title: '2. Verweise und Links',
          text: 'Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.'
        },
        copyright: {
          title: '3. Urheber- und Kennzeichenrecht',
          text: 'Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer.'
        }
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
      expertValue: 'Michael Linder',
      ctaTitle: 'Bereit für den nächsten Schritt?',
      ctaSubtitle: 'Vereinbaren Sie jetzt Ihr kostenloses IT-Assessment und entdecken Sie das Potenzial Ihrer IT.',
      redirectNote: 'Sie werden zu Microsoft Bookings weitergeleitet'
    },
    publicWork: {
      title: 'Ausgewählte Referenzen',
      ndaTitle: 'Vertraulichkeit',
      ndaText: 'Ein Großteil der Projekte unterliegt Geheimhaltungsvereinbarungen (NDA). Aus Respekt gegenüber den Kunden und deren Geschäftsgeheimnissen können diese Arbeiten hier nicht im Detail präsentiert werden.',
      projectTitle: 'Referenzprojekt: Arbeitszeiterfassung',
      projectProblem: 'Kleine und mittlere Unternehmen in Österreich benötigen eine rechtskonforme Zeiterfassung gemäß Arbeitszeitgesetz (AZG), finden aber oft nur komplexe oder teure Lösungen.',
      projectSolution: 'Eine schlanke, auf österreichisches Recht ausgerichtete Webanwendung zur Arbeitszeiterfassung – entwickelt als Open-Source-Referenzimplementierung.',
      projectHighlights: 'Fokus auf AZG-Konformität, einfache Bedienung und transparente Architektur. Das Projekt demonstriert praxisnahe Umsetzung von Compliance-Anforderungen.',
      projectDemoInfo: 'Öffentliche Demo – Login: demo@strali.solutions / demo1234',
      projectDemoNotice: 'Entdecken Sie die gesamte Benutzeroberfläche inkl. Admin-Bereich. Admin-Aktionen sind in dieser öffentlichen Demo-Umgebung deaktiviert.',
      projectFullDemoRequest: 'Für eine vollständige Demo mit uneingeschränkter Funktionalität kontaktieren Sie uns über das Kontaktformular.',
      projectDisclaimer: 'Diese Demo dient ausschließlich zur Veranschaulichung – keine Produktionsgarantie oder rechtliche Gewährleistung.',
      projectDemoButton: 'Öffentliche Demo',
      projectFullDemoButton: 'Vollständige Demo anfragen',
      projectGithubButton: 'GitHub',
      linkedinTitle: 'Beruflicher Hintergrund (LinkedIn)',
      linkedinText: 'Das LinkedIn-Profil dient als öffentliche Referenz für den beruflichen Hintergrund hinter strali.solutions. Aufgrund von NDA-Verpflichtungen können detaillierte Beschreibungen von Kundenprojekten nicht öffentlich geteilt werden. Das Profil gibt einen Überblick über Erfahrungen in Software-Architektur, IT-Consulting, technischer Führung und Enterprise-Umgebungen.',
      linkedinButton: 'LinkedIn Profil ansehen'
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
      subline: 'Bringing clarity to complex IT decisions — through assessment, structure, and tooling.',
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
          icon: 'Lightbulb'
        },
        {
          title: 'Microsoft 365 & Copilot: Productivity Redefined',
          description: 'Unlock the full potential of Microsoft 365: Teams for communication, SharePoint and OneDrive for document management, Planner for task management, and Power Platform for automation. With Microsoft Copilot, bring AI-powered assistance directly into your daily work – from intelligent document creation to automated data analysis. We guide you through analysis, integration, and training.',
          icon: 'Cloud'
        },
        {
          title: 'Digitalization: We Help You with AI and Process Digitalization',
          description: 'We help you optimally leverage the potential of Artificial Intelligence (AI) and process digitalization. AI enables intelligent automation, predictive analytics, and personalized solutions, while cloud technologies ensure seamless collaboration and efficient workflows. Together, we create future-proof processes that increase your efficiency and promote innovation.',
          icon: 'TrendingUp'
        },
        {
          title: 'Security-by-Design & AI Security Advisory',
          description: 'We help organizations build AI and digital solutions that are secure from the start. We bring extensive engineering experience and hands-on knowledge from security reviews and penetration tests – without acting as a pentest provider ourselves. Our focus: architecture reviews from a security perspective, preparation and support for external pentests, and translating security findings into actionable engineering measures.',
          icon: 'Shield'
        },
        {
          title: 'Software Engineering & Architecture',
          description: 'Modern software development requires more than clean code. We combine AI-supported development, efficient processes, automated testing, DevOps practices, and robust software and system architecture. From functional and non-functional requirements to scalability, security, and performance – we build solutions that are stable, secure, and future-proof.',
          icon: 'Code'
        },
        {
          title: 'Project Management: Efficient, Strategic, and Human',
          description: 'Team conflicts are among the most common risks for projects and schedules. We support you in optimally utilizing your projects and resources – not only at a strategic level but also through the identification and resolution of interpersonal challenges. With clear planning, agile methods, and a focus on collaboration, we create an environment that promotes trust and efficiency. This ensures that your projects are implemented on time, with high quality and sustainability – for solutions that connect people and goals.',
          icon: 'Users'
        }
      ]
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      message: 'Message',
      send: 'Send Message',
      copied: 'Email address copied to clipboard!',
      address: 'Nötsch 219, A-9611 Nötsch im Gailtal',
      bookingTitle: 'Book an Initial Call',
      bookingDescription: 'Schedule a free initial call to discuss your requirements.',
      bookingButton: 'Book Appointment',
      orContactForm: 'Or write to us directly',
      mailClientNote: 'Opens your email client'
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
      imprint: 'Imprint',
      privacy: 'Privacy Policy'
    },
    privacy: {
      title: 'Privacy Policy',
      intro: 'The protection of your personal data is of particular concern to us. This privacy policy informs you about the processing of personal data on this website.',
      responsible: {
        title: 'Data Controller'
      },
      dataCollection: {
        title: 'Data Collection on This Website',
        text: 'The use of our website is generally possible without providing personal data. Insofar as personal data is collected, this is done on a voluntary basis. When you visit this website, information is automatically transmitted to the server by your browser (e.g., browser type, operating system, time of access). This data is not merged with other data sources.'
      },
      cookies: {
        title: 'Cookies',
        text: 'Our website uses cookies. Cookies are text files that are stored in the internet browser or by the internet browser on the user\'s computer system. You can adjust your cookie settings at any time via our cookie banner. Essential cookies are required for basic website functionality. Analytics cookies help us understand how visitors interact with the website.'
      },
      booking: {
        title: 'Appointment Booking (Microsoft Bookings)',
        text: 'We use Microsoft Bookings, a service provided by Microsoft Corporation, for appointment scheduling.',
        dataCollected: 'Data Collected',
        dataCollectedList: [
          'Name and contact details (email, optionally phone number)',
          'Selected appointment date and time',
          'Optional message/notes'
        ],
        processor: 'Data Processor',
        processorText: 'Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA. Microsoft processes data on our behalf in accordance with Art. 28 GDPR.',
        transfer: 'Data Transfer',
        transferText: 'Data is processed on Microsoft servers. Microsoft is certified under the EU-U.S. Data Privacy Framework, ensuring an adequate level of data protection.',
        legal: 'Legal Basis',
        legalText: 'Processing is carried out for the performance of pre-contractual measures (Art. 6(1)(b) GDPR) or based on your consent (Art. 6(1)(a) GDPR).',
        retention: 'Data Retention',
        retentionText: 'Your booking data will be deleted after the appointment is conducted or in case of no-show, unless legal retention obligations apply.',
        terms: 'Terms',
        termsList: [
          'The free IT assessment is completely free and non-binding',
          'Please cancel in advance if you are unable to attend'
        ],
        microsoftPrivacy: 'Microsoft Privacy Statement',
        microsoftPrivacyLink: 'https://privacy.microsoft.com/en-us/privacystatement'
      },
      rights: {
        title: 'Your Rights',
        text: 'You have the right to information, correction, deletion and restriction of the processing of your personal data at any time, as well as the right to data portability. If you have questions about the processing of your data or wish to exercise your rights, you can contact us at any time.'
      },
      contact: 'For questions about data protection, please contact us at:'
    },
    imprint: {
      title: 'Legal Notice',
      companyInfo: {
        title: 'Information according to §5 Austrian E-Commerce Act, §14 UGB',
        name: 'Strali Solutions e.U.',
        owner: 'Owner',
        ownerName: 'Ing. Michael Linder',
        address: 'Nötsch 219',
        postalCode: '9611 Nötsch im Gailtal',
        country: 'Austria'
      },
      contact: {
        title: 'Contact',
        phone: 'Phone',
        email: 'Email'
      },
      details: {
        title: 'Company Details',
        registration: 'Company Registration Number',
        court: 'Commercial Register Court',
        courtValue: 'Regional Court Klagenfurt',
        vatId: 'VAT ID',
        businessPurpose: 'Business Purpose',
        businessPurposeValue: 'IT Services, IT Consulting, Software Development'
      },
      trade: {
        title: 'Trade License',
        license: 'Trade License',
        licenseValue: 'Services in automatic data processing and information technology',
        authority: 'Supervisory Authority',
        authorityValue: 'District Authority Villach-Land',
        regulation: 'Professional Regulations',
        regulationValue: 'Austrian Trade Regulation Act (Gewerbeordnung)',
        regulationLink: 'www.ris.bka.gv.at'
      },
      membership: {
        title: 'Chamber Membership',
        member: 'Member of the Austrian Economic Chamber Carinthia',
        profession: 'Professional Group UBIT (Business Consulting, Accounting and Information Technology)'
      },
      odr: {
        title: 'Online Dispute Resolution',
        text: 'Consumers have the option to submit complaints to the EU online dispute resolution platform:',
        note: 'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.'
      },
      booking: {
        title: 'Booking Service (Microsoft Bookings)',
        text: 'We use Microsoft Bookings, a service provided by Microsoft Corporation, for appointment scheduling.',
        dataCollected: 'Data Collected',
        dataCollectedList: [
          'Name and contact details (email, optionally phone number)',
          'Selected appointment date and time',
          'Optional message/notes'
        ],
        processor: 'Data Processor',
        processorText: 'Microsoft Corporation, One Microsoft Way, Redmond, WA 98052, USA. Microsoft processes data on our behalf in accordance with Art. 28 GDPR.',
        transfer: 'Data Transfer',
        transferText: 'Data is processed on Microsoft servers. Microsoft is certified under the EU-U.S. Data Privacy Framework, ensuring an adequate level of data protection.',
        legal: 'Legal Basis',
        legalText: 'Processing is carried out for the performance of pre-contractual measures (Art. 6(1)(b) GDPR) or based on your consent (Art. 6(1)(a) GDPR).',
        retention: 'Data Retention',
        retentionText: 'Your booking data will be deleted after the appointment is conducted or in case of no-show, unless legal retention obligations apply.',
        terms: 'Terms',
        termsList: [
          'The free IT assessment is completely free and non-binding',
          'Please cancel in advance if you are unable to attend'
        ],
        microsoftPrivacy: 'Microsoft Privacy Statement',
        microsoftPrivacyLink: 'https://privacy.microsoft.com/en-us/privacystatement'
      },
      privacy: {
        title: 'Privacy Policy',
        intro: 'The protection of your personal data is of particular concern to us.',
        dataCollection: 'Data Collection',
        dataCollectionText: 'The use of our website is generally possible without providing personal data. Insofar as personal data is collected, this is done on a voluntary basis.',
        cookies: 'Cookies',
        cookiesText: 'Our website uses cookies. Cookies are text files that are stored in the internet browser or by the internet browser on the user\'s computer system. You can adjust your cookie settings at any time via our cookie banner.',
        rights: 'Your Rights',
        rightsText: 'You have the right to information, correction, deletion and restriction of the processing of your personal data at any time, as well as the right to data portability.',
        contact: 'For questions about data protection, please contact us at:'
      },
      disclaimer: {
        title: 'Disclaimer',
        content: {
          title: '1. Content of the Online Offer',
          text: 'The author assumes no liability for the timeliness, correctness, completeness or quality of the information provided. Liability claims against the author relating to material or immaterial damage caused by the use or non-use of the information provided or by the use of incorrect and incomplete information are fundamentally excluded.'
        },
        links: {
          title: '2. References and Links',
          text: 'In the case of direct or indirect references to external websites ("hyperlinks") that lie outside the author\'s area of responsibility, a liability obligation would only come into force if the author had knowledge of the content and it would be technically possible and reasonable for them to prevent use in the case of illegal content.'
        },
        copyright: {
          title: '3. Copyright and Trademark Law',
          text: 'The author endeavors to observe the copyrights of the images, graphics, sound documents, video sequences and texts used in all publications. All brand names and trademarks mentioned within the website and possibly protected by third parties are subject without restriction to the provisions of the applicable trademark law and the ownership rights of the respective registered owners.'
        }
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
      expertValue: 'Michael Linder',
      ctaTitle: 'Ready for the Next Step?',
      ctaSubtitle: 'Schedule your free IT assessment now and discover your IT potential.',
      redirectNote: 'You will be redirected to Microsoft Bookings'
    },
    publicWork: {
      title: 'Selected Public Work',
      ndaTitle: 'Confidentiality',
      ndaText: 'The majority of the projects are subject to non-disclosure agreements (NDA). Out of respect for the clients and their business interests, these works cannot be presented in detail here.',
      projectTitle: 'Reference Project: Time Tracking',
      projectProblem: 'Small and medium-sized businesses in Austria need legally compliant time tracking according to the Working Hours Act (AZG), but often only find complex or expensive solutions.',
      projectSolution: 'A lean, Austrian-law-oriented web application for time tracking – developed as an open-source reference implementation.',
      projectHighlights: 'Focus on AZG compliance, ease of use, and transparent architecture. The project demonstrates practical implementation of compliance requirements.',
      projectDemoInfo: 'Public Demo – Login: demo@strali.solutions / demo1234',
      projectDemoNotice: 'Explore the full UI, including admin features. Admin actions are disabled in this shared demo environment.',
      projectFullDemoRequest: 'For full demo access with unrestricted functionality, please contact us via the contact form.',
      projectDisclaimer: 'This demo is for illustrative purposes only – no production guarantees or legal warranties.',
      projectDemoButton: 'Public Demo',
      projectFullDemoButton: 'Request Full Demo',
      projectGithubButton: 'GitHub',
      linkedinTitle: 'Professional Background (LinkedIn)',
      linkedinText: 'The LinkedIn profile serves as a public reference for the professional background behind strali.solutions. Due to NDA obligations, detailed descriptions of client engagements and projects cannot be shared publicly. The profile outlines experience in software architecture, IT consulting, technical leadership, and enterprise environments.',
      linkedinButton: 'View LinkedIn Profile'
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