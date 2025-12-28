import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import ITAssessment from './components/ITAssessment';
import ChatWidget from './components/ChatWidget';
import CookieConsent from './components/CookieConsent';
import { LanguageProvider } from './context/LanguageContext';
import { Helmet } from 'react-helmet-async';

// Base SEO configuration
const defaultSEO = {
  titleTemplate: '%s | Strali Solutions',
  defaultTitle: 'Strali Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://strali.solutions/',
    site_name: 'Your Company Name',
  },
  twitter: {
    handle: '@stralisolutions',
    site: '@stralisolutions',
    cardType: 'summary_large_image',
  },
};

// SEO Component with Schema.org structured data
const SEO = ({ 
  title, 
  description, 
  canonical, 
  openGraph = {}, 
  structuredData = null 
}) => (
  <Helmet>
    {/* Basic metadata */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    
    {/* OpenGraph / Facebook */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    {openGraph.image && <meta property="og:image" content={openGraph.image} />}
    
    {/* Twitter */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {openGraph.image && <meta name="twitter:image" content={openGraph.image} />}
    
    {/* Structured Data */}
    {structuredData && (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    )}
  </Helmet>
);


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
      <Hero />
      <Services />
      <About />
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

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <HeaderWithNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main className="flex-grow" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
            <Routes>
              <Route path="/" element={<Homepage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/assessment" element={<ITAssessment />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
          <CookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;