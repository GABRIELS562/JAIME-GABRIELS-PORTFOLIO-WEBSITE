import React from 'react';
import '../styles/variables.css';
import '../styles/globals.css';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Pipeline from '../components/Pipeline/Pipeline';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Technologies from '../components/Technologies/Technologies';
import Contact from '../components/Contact/Contact';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

const App = () => (
  <div>
    <ThemeToggle />
    <Navigation />
    <Header />
    <main>
      <About />
      <Pipeline />
      <Projects />
      <Resume />
      <Technologies />
    </main>
    <Contact />
    <Footer />
  </div>
);

export default App; 