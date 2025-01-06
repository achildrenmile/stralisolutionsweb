import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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