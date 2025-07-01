import React, { useState } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return (
    <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
      <svg 
        className={styles.icon} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {isDark ? (
          <path 
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" 
            fill="currentColor"
            className={styles.iconPath}
          />
        ) : (
          <g className={styles.iconPath}>
            <circle cx="12" cy="12" r="5" fill="currentColor"/>
            <path 
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;