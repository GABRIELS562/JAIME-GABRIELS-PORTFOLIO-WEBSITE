import { useState, useEffect } from 'react';
import styles from './TerminalToggle.module.css';

const TerminalToggle = ({ onClick, isOpen }) => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Show hint after 3 seconds if terminal hasn't been opened
    const hasSeenTerminal = localStorage.getItem('hasSeenTerminal');
    if (!hasSeenTerminal && !isOpen) {
      const timer = setTimeout(() => setShowHint(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClick = () => {
    setShowHint(false);
    localStorage.setItem('hasSeenTerminal', 'true');
    onClick();
  };

  return (
    <>
      {showHint && !isOpen && (
        <div className={styles.hint}>
          Try the interactive terminal!
        </div>
      )}
      <button
        className={`${styles.toggle} ${isOpen ? styles.active : ''}`}
        onClick={handleClick}
        title="Open Terminal (Ctrl + `)"
        aria-label="Toggle terminal"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
        <span className={styles.label}>Terminal</span>
      </button>
    </>
  );
};

export default TerminalToggle;
