import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { initAnalytics } from './utils/analytics';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import PrivacyPolicy from './components/PrivacyPolicy';
import ITAssessment from './components/ITAssessment';
import SelectedPublicWork from './components/SelectedPublicWork';
import NotFound from './components/NotFound';
import ChatWidget from './components/ChatWidget';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';
import { LanguageProvider } from './context/LanguageContext';
import { Helmet } from 'react-helmet-async';

// Base SEO configuration
const siteConfig = {
  siteName: 'Strali Solutions',
  siteUrl: 'https://strali.solutions',
  defaultImage: 'https://strali.solutions/android-chrome-512x512.png',
  ogImage: 'https://strali.solutions/og-image.png',
};

// LocalBusiness structured data for SEO
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://strali.solutions/#business',
  name: 'Strali Solutions e.U.',
  description: 'IT Consulting, Digitalisierung und Software Engineering in Kärnten, Österreich',
  url: 'https://strali.solutions',
  logo: 'https://strali.solutions/android-chrome-512x512.png',
  image: 'https://strali.solutions/android-chrome-512x512.png',
  telephone: '+43 676 96 58 016',
  email: 'office@strali.solutions',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nötsch 219',
    addressLocality: 'Nötsch im Gailtal',
    postalCode: '9611',
    addressCountry: 'AT'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.5911,
    longitude: 13.6283
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  },
  priceRange: '€€',
  areaServed: {
    '@type': 'Country',
    name: 'Austria'
  },
  founder: {
    '@type': 'Person',
    name: 'Ing. Michael Linder'
  },
  foundingDate: '2017',
  sameAs: []
};

// Service structured data
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Strali Solutions e.U.',
  serviceType: ['IT Consulting', 'Software Development', 'Digitalization', 'Microsoft 365 Consulting'],
  provider: {
    '@id': 'https://strali.solutions/#business'
  }
};

// WebSite schema for search engines
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://strali.solutions/#website',
  name: 'Strali Solutions',
  url: 'https://strali.solutions',
  publisher: {
    '@id': 'https://strali.solutions/#business'
  },
  inLanguage: ['de-AT', 'en'],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://strali.solutions/?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

// Organization schema with enhanced details
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://strali.solutions/#organization',
  name: 'Strali Solutions e.U.',
  legalName: 'Strali Solutions e.U.',
  url: 'https://strali.solutions',
  logo: 'https://strali.solutions/android-chrome-512x512.png',
  foundingDate: '2017',
  founder: {
    '@type': 'Person',
    name: 'Ing. Michael Linder, MSc.',
    jobTitle: 'Founder & IT Consultant'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nötsch 219',
    addressLocality: 'Nötsch im Gailtal',
    postalCode: '9611',
    addressCountry: 'AT'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+43-676-9658016',
    email: 'office@strali.solutions',
    contactType: 'customer service',
    availableLanguage: ['German', 'English']
  },
  knowsAbout: [
    'IT Consulting',
    'Microsoft 365',
    'Microsoft Copilot',
    'Software Architecture',
    'Digital Transformation',
    'Project Management',
    'Security by Design',
    'AI Security'
  ]
};

// FAQ schema for common questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist ein IT-Assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein IT-Assessment ist eine kostenlose, unverbindliche Analyse Ihrer aktuellen IT-Infrastruktur. Wir identifizieren Optimierungspotenziale und geben individuelle Handlungsempfehlungen für Ihr Unternehmen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Welche Dienstleistungen bietet Strali Solutions an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir bieten IT Consulting, Microsoft 365 & Copilot Beratung, Digitalisierung, Security-by-Design, Software Engineering & Architektur sowie Projektmanagement für Unternehmen in Österreich.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wo befindet sich Strali Solutions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strali Solutions e.U. hat seinen Sitz in Nötsch im Gailtal, Kärnten, Österreich. Wir betreuen Kunden in ganz Österreich, sowohl vor Ort als auch remote.'
      }
    }
  ]
};

// SEO Component with Schema.org structured data
const SEO = ({
  title,
  description,
  canonical,
  image = siteConfig.ogImage,
  type = 'website',
  locale = 'de_AT',
  structuredData = null
}) => (
  <Helmet>
    {/* Basic metadata */}
    <html lang={locale.split('_')[0]} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />

    {/* Language alternates (hreflang) */}
    <link rel="alternate" hrefLang="de" href={canonical} />
    <link rel="alternate" hrefLang="en" href={canonical} />
    <link rel="alternate" hrefLang="x-default" href={canonical} />

    {/* OpenGraph / Facebook */}
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content={siteConfig.siteName} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content={locale} />
    <meta property="og:locale:alternate" content={locale === 'de_AT' ? 'en_US' : 'de_AT'} />

    {/* Twitter / X */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Additional SEO meta tags */}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />

    {/* Structured Data */}
    {structuredData && (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    )}
  </Helmet>
);


// Combined schema for homepage
const homepageSchema = [businessSchema, serviceSchema, websiteSchema, organizationSchema, faqSchema];

// Homepage component
const Homepage = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Clean up the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Strali Solutions | IT Consulting & Digitalisierung in Kärnten"
        description="Ihr Partner für IT Consulting, Microsoft 365, Digitalisierung und Software Engineering in Kärnten, Österreich. Schnell. Direkt. Unkompliziert."
        canonical="https://strali.solutions/"
        structuredData={homepageSchema}
      />
      <Hero />
      <Services />
      <About />
      <SelectedPublicWork />
      <Contact />
    </>
  );
};

// Custom Header wrapper to handle navigation
const HeaderWithNavigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    // Only scroll if we're on the homepage
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on homepage, navigate to homepage with the section as a target
      navigate('/', { state: { scrollTo: sectionId } });
    }

    setIsMenuOpen(false);
  };

  return (
    <Header 
      isMenuOpen={isMenuOpen} 
      setIsMenuOpen={setIsMenuOpen}
      onNavigate={handleNavigation}
    />
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize analytics if consent was previously given
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <HeaderWithNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main className="flex-grow" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            <Routes>
              <Route path="/" element={<Homepage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<PrivacyPolicy />} />
              <Route path="/assessment" element={<ITAssessment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
          <BackToTop />
          <CookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;