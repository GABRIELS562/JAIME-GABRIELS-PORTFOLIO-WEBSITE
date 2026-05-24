import React, { useState, useEffect } from 'react';
import '../styles/variables.css';
import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Certifications from '../components/Certifications/Certifications';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Technologies from '../components/Technologies/Technologies';
import Contact from '../components/Contact/Contact';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import ProfessionalApproach from '../components/ProfessionalApproach/ProfessionalApproach';
import Terminal from '../components/Terminal/Terminal';
import TerminalToggle from '../components/TerminalToggle/TerminalToggle';
import LiveStatus from '../components/LiveStatus/LiveStatus';

const App = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Keyboard shortcut: Ctrl + ` to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
      // Escape to close
      if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  return (
    <div>
      <LiveStatus />
      <ThemeToggle />
      <Navigation />
      <Header />
      <main>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Certifications />
        </ErrorBoundary>
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
        <ErrorBoundary>
          <Resume />
        </ErrorBoundary>
        <ErrorBoundary>
          <Technologies />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProfessionalApproach />
      </ErrorBoundary>
      <Footer />

      {/* Terminal Feature */}
      <TerminalToggle
        onClick={() => setIsTerminalOpen(true)}
        isOpen={isTerminalOpen}
      />
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
};

export default App; 