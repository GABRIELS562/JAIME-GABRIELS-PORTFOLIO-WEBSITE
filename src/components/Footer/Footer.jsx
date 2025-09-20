import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.navLinksHorizontal}>
          <button onClick={() => scrollToSection('about')} className={styles.footerLink}>About</button>
          <button onClick={() => scrollToSection('projects')} className={styles.footerLink}>Projects</button>
          <button onClick={() => scrollToSection('resume')} className={styles.footerLink}>Resume</button>
          <button onClick={() => scrollToSection('technologies')} className={styles.footerLink}>Technologies</button>
          <button onClick={() => scrollToSection('contact')} className={styles.footerLink}>Contact</button>
        </div>
      </div>

      {/* Copyright and Last Updated */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Jaime Gabriels. All rights reserved.</p>
        <p className={styles.lastUpdated}>Last updated: September 2025</p>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;