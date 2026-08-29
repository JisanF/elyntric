import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import About from './components/About';
import PaymentMethods from './components/PaymentMethods';
import Footer from './components/Footer';
import UniverseStyles from './components/UniverseStyles';
import { RouterProvider, useRouter } from './router';
import AboutPage from './pages/AboutPage';
import QuizPage from './pages/QuizPage';
import AiPage from './pages/AiPage';
import FeaturesPage from './pages/FeaturesPage';

function AppContent() {
  const { path } = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('elyntric-theme');
    if (saved) {
      setIsDarkMode(saved === 'dark');
    } else {
      setIsDarkMode(true);
      localStorage.setItem('elyntric-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('elyntric-theme', newMode ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    if (path !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const themeClass = isDarkMode ? 'dark' : '';

  const renderPage = () => {
    switch (path) {
      case '/about':
        return <AboutPage />;
      case '/quiz':
        return <QuizPage />;
      case '/ai':
        return <AiPage />;
      case '/x':
        return <FeaturesPage />;
      default:
        return (
          <>
            <Hero />
            <TrustBadges />
            <About />
            <HowItWorks />
            <Reviews />
            <PaymentMethods />
            <div id="contact"></div>
          </>
        );
    }
  };

  return (
    <div className={`${themeClass} min-h-screen transition-colors duration-300`}>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Header
          isDarkMode={isDarkMode}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          toggleTheme={toggleTheme}
          scrollToSection={scrollToSection}
        />
        {renderPage()}
        <Footer scrollToSection={scrollToSection} />
        <UniverseStyles />
      </div>
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
