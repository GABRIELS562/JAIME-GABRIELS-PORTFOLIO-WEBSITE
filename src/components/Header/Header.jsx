import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import devopsImage from '../../assets/devops-infinity.png';
import devopsImageLight from '../../assets/devops-infinity-light.png';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [greetingDisplayed, setGreetingDisplayed] = useState('');
  const [titleDisplayed, setTitleDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [loopCount, setLoopCount] = useState(0);
  
  const greeting = "Hi 👋 I'm";
  const title = "Passionate DevOps Engineer";

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

    // Set initial theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Start the greeting animation immediately
    startGreetingAnimation();
  }, []);

  const startGreetingAnimation = () => {
    let currentLoop = 0;
    
    const typeBothTexts = () => {
      // Reset both texts
      setGreetingDisplayed('');
      setTitleDisplayed('');
      
      // Type greeting first
      let greetingIndex = 0;
      const greetingInterval = setInterval(() => {
        if (greetingIndex <= greeting.length) {
          setGreetingDisplayed(greeting.slice(0, greetingIndex));
          greetingIndex++;
        } else {
          clearInterval(greetingInterval);
          // Start typing title after greeting is complete
          setTimeout(() => {
            let titleIndex = 0;
            const titleInterval = setInterval(() => {
              if (titleIndex <= title.length) {
                setTitleDisplayed(title.slice(0, titleIndex));
                titleIndex++;
              } else {
                clearInterval(titleInterval);
                // Wait before deleting
                setTimeout(() => {
                  deleteBothTexts();
                }, 2000);
              }
            }, 100);
          }, 300);
        }
      }, 150);
    };

    const deleteBothTexts = () => {
      // Delete title first
      let titleDeleteIndex = title.length;
      const titleDeleteInterval = setInterval(() => {
        if (titleDeleteIndex >= 0) {
          setTitleDisplayed(title.slice(0, titleDeleteIndex));
          titleDeleteIndex--;
        } else {
          clearInterval(titleDeleteInterval);
          // Then delete greeting
          setTimeout(() => {
            let greetingDeleteIndex = greeting.length;
            const greetingDeleteInterval = setInterval(() => {
              if (greetingDeleteIndex >= 0) {
                setGreetingDisplayed(greeting.slice(0, greetingDeleteIndex));
                greetingDeleteIndex--;
              } else {
                clearInterval(greetingDeleteInterval);
                currentLoop++;
                setLoopCount(currentLoop);
                
                // Only loop 3 times
                if (currentLoop < 3) {
                  setTimeout(() => {
                    typeBothTexts();
                  }, 500);
                } else {
                  // After 3 loops, show both texts permanently
                  setTimeout(() => {
                    setGreetingDisplayed(greeting);
                    setTitleDisplayed(title);
                    setShowCursor(false);
                  }, 500);
                }
              }
            }, 50);
          }, 200);
        }
      }, 50);
    };

    typeBothTexts();
  };

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Memoize the cursor display logic to prevent unnecessary re-renders
  const shouldShowCursor = showCursor && (
    (greetingDisplayed.length < greeting.length && loopCount < 3) ||
    (greetingDisplayed.length === greeting.length && titleDisplayed.length <= title.length)
  );

  const backgroundImage = theme === 'light' ? devopsImageLight : devopsImage;
  
  return (
    <header className={styles.header} style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundBlendMode: 'multiply'
    }}>
      <p className={styles.greeting}>
        {greetingDisplayed}
        {shouldShowCursor && greetingDisplayed.length < greeting.length && <span className={styles.cursor}>|</span>}
      </p>
      <h1 className={styles.name}>Jaime Gabriels</h1>
      <h2 className={styles.title}>
        {titleDisplayed}
        {shouldShowCursor && greetingDisplayed.length === greeting.length && <span className={styles.cursor}>|</span>}
      </h2>
    </header>
  );
};

export default Header;