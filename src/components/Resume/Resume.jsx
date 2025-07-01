import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <section id="resume" className={styles.resume}>
      <h2 className={styles.title}>Professional Resume</h2>
      <p className={styles.subtitle}>
        Download my comprehensive resume showcasing my DevOps experience, 
        technical skills, and professional achievements.
      </p>
      <a 
        href="/Bar-Gutman-Devops-RESUME.pdf" 
        className={styles.button}
        download
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;