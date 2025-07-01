import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><a href="#about" className={styles.link}>About</a></li>
        <li><a href="#projects" className={styles.link}>Projects</a></li>
        <li><a href="#resume" className={styles.link}>Resume</a></li>
        <li><a href="#technologies" className={styles.link}>Technologies</a></li>
        <li><a href="#contact" className={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;