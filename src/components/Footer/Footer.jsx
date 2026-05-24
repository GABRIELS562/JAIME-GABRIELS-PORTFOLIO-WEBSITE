import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
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

      <div className={styles.footerBottom}>
        <p>&copy; 2025 Jaime Gabriels</p>
      </div>
    </footer>
  );
};

export default Footer;