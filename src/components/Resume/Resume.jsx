import React, { useState } from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      // Use process.env.PUBLIC_URL for production compatibility
      const pdfUrl = process.env.PUBLIC_URL + '/Jaime-Gabriels-DevOps-Resume.pdf';

      // Method 1: Try fetch and blob download (most reliable)
      try {
        const response = await fetch(pdfUrl);
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Jaime-Gabriels-DevOps-Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          return;
        }
      } catch (fetchError) {
        console.log('Fetch method failed, trying fallback...', fetchError);
      }

      // Method 2: Fallback to direct link
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Jaime-Gabriels-DevOps-Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Download error:', error);
      // Last resort: open in new tab
      window.open(process.env.PUBLIC_URL + '/Jaime-Gabriels-DevOps-Resume.pdf', '_blank');
    } finally {
      setTimeout(() => setIsDownloading(false), 2000);
    }
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
          disabled={isDownloading}
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
        </button>
        <div className={styles.fileInfo}>
          <span className={styles.fileSize}>PDF • 2 Pages</span>
          <span className={styles.lastUpdated}>Updated January 2025</span>
        </div>

        {/* Fallback direct link for browsers that block downloads */}
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <a
            href={process.env.PUBLIC_URL + '/Jaime-Gabriels-DevOps-Resume.pdf'}
            download="Jaime-Gabriels-DevOps-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              textDecoration: 'underline',
              opacity: 0.8
            }}
          >
            Having trouble? Click here for direct download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;