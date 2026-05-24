import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import devopsImage from '../../assets/devops-infinity.png';
import devopsImageLight from '../../assets/devops-infinity-light.png';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [greetingDisplayed, setGreetingDisplayed] = useState('');
  const [titleDisplayed, setTitleDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  const greeting = "Hi, I'm";
  const title = "Forensic Scientist → DevOps Engineer";

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
          setTheme(currentTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Type greeting first
    let greetingIndex = 0;
    const greetingInterval = setInterval(() => {
      if (greetingIndex <= greeting.length) {
        setGreetingDisplayed(greeting.slice(0, greetingIndex));
        greetingIndex++;
      } else {
        clearInterval(greetingInterval);
        // Start typing title
        setTimeout(() => {
          let titleIndex = 0;
          const titleInterval = setInterval(() => {
            if (titleIndex <= title.length) {
              setTitleDisplayed(title.slice(0, titleIndex));
              titleIndex++;
            } else {
              clearInterval(titleInterval);
              setTypingComplete(true);
              setShowCursor(false);
            }
          }, 80);
        }, 300);
      }
    }, 120);

    return () => clearInterval(greetingInterval);
  }, []);

  // Cursor blinking
  useEffect(() => {
    if (typingComplete) return;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [typingComplete]);

  const backgroundImage = theme === 'light' ? devopsImageLight : devopsImage;

  return (
    <header className={styles.header} style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundBlendMode: 'multiply'
    }}>
      <ParticleBackground particleCount={25} />
      <p className={styles.greeting}>
        {greetingDisplayed}
        {showCursor && !typingComplete && greetingDisplayed.length < greeting.length && <span className={styles.cursor}>|</span>}
      </p>
      <h1 className={styles.name}>Jaime Gabriels</h1>
      <h2 className={styles.title}>
        {titleDisplayed}
        {showCursor && !typingComplete && greetingDisplayed.length === greeting.length && <span className={styles.cursor}>|</span>}
      </h2>
    </header>
  );
};

export default Header;
