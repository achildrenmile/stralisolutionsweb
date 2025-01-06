import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import ChatWidget from './components/ChatWidget';
import { LanguageProvider } from './context/LanguageContext';

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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;