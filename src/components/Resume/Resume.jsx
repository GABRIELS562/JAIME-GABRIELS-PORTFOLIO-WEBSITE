import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  const handleDownload = () => {
    // Open PDF in new tab - browser will handle download/display
    window.open('/Jaime-Gabriels-DevOps-Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className={styles.resume}>
      <h2 className={styles.title}>Professional Resume</h2>
      <p className={styles.subtitle}>
        Download my comprehensive resume detailing my career transition from forensic science to DevOps engineering,
        including hands-on technical projects, certifications, and 15+ years of analytical experience in regulated environments.
      </p>
      <div className={styles.buttonContainer}>
        <button
          onClick={handleDownload}
          className={styles.primaryButton}
          type="button"
        >
          <svg className={styles.downloadIcon} viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download CV (PDF)
        </button>
        <div className={styles.fileInfo}>
          <span className={styles.fileSize}>PDF • 2 Pages</span>
          <span className={styles.lastUpdated}>Updated January 2025</span>
        </div>
      </div>
    </section>
  );
};

export default Resume;