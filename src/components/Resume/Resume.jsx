import React, { useState } from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section id="resume" className={styles.resume}>
      <h2 className={styles.title}>Professional Resume</h2>
      <p className={styles.subtitle}>
        Download my comprehensive resume showcasing my DevOps learning journey, 
        technical skills, and educational background.
      </p>
      <div className={styles.buttonContainer}>
        <a 
          href="/Jaime-Gabriels-DevOps-Resume.pdf" 
          className={`${styles.primaryButton} ${isDownloading ? styles.downloading : ''}`}
          onClick={handleDownload}
          download
        >
          {isDownloading ? (
            <>
              <span className={styles.spinner}></span>
              Downloading...
            </>
          ) : (
            <>
              <svg className={styles.downloadIcon} viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download CV (PDF)
            </>
          )}
        </a>
        <div className={styles.fileInfo}>
          <span className={styles.fileSize}>PDF • 2 Pages</span>
          <span className={styles.lastUpdated}>Updated January 2025</span>
        </div>
      </div>
    </section>
  );
};

export default Resume;