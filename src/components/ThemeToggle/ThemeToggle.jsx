import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or default to dark theme
    let initialTheme = true; // Default to dark
    
    try {
      const savedTheme = localStorage.getItem('theme');
      initialTheme = savedTheme ? savedTheme === 'dark' : true;
    } catch (error) {
      // localStorage not available, use default
      console.warn('localStorage not available, using default theme');
    }
    
    // Apply theme immediately during initialization to prevent flash
    document.documentElement.setAttribute('data-theme', initialTheme ? 'dark' : 'light');
    
    return initialTheme;
  });

  useEffect(() => {
    // Apply theme when state changes
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button 
      className={`${styles.themeToggle} ${isDark ? styles.dark : styles.light}`} 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
    >
      <div className={styles.toggleTrack}>
        <div className={`${styles.toggleThumb} ${isDark ? styles.thumbDark : styles.thumbLight}`}>
          <div className={styles.iconContainer}>
            {isDark ? (
              <svg className={styles.moonIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg className={styles.sunIcon} viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;