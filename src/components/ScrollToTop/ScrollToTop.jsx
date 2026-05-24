import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title={`${Math.round(scrollProgress)}% scrolled`}
    >
      <svg
        className={styles.progressRing}
        viewBox="0 0 36 36"
      >
        <circle
          className={styles.progressBg}
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth="2"
        />
        <circle
          className={styles.progressCircle}
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeLinecap="round"
        />
      </svg>
      <svg
        className={styles.arrow}
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
