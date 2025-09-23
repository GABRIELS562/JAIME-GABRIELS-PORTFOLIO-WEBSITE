import React from 'react';
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

const App = () => (
  <div>
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
  </div>
);

export default App; 