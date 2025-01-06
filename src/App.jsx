import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
const Homepage = ({ isMenuOpen, setIsMenuOpen }) => (
  <>
    <Hero />
    <Services />
    <About />
    <Contact />
  </>
);

// Custom Header wrapper to handle navigation
const HeaderWithNavigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    // If on impressum, navigate to home first
    if (location.pathname === '/impressum') {
      navigate('/');
    }
    
    // Scroll to section (will work after navigation completes)
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

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