import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  const handleRequestCV = () => {
    const subject = encodeURIComponent('CV Request - DevOps Engineer Position');
    const body = encodeURIComponent(
      'Hi Jaime,\n\nI came across your portfolio and would like to request a copy of your CV.\n\n[Please include details about the opportunity or your company]\n\nThank you!'
    );
    window.location.href = `mailto:contact@jagdevops.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="resume" className={styles.resume}>
      <h2 className={styles.title}>Resume</h2>
      <div className={styles.buttonContainer}>
        <button
          onClick={handleRequestCV}
          className={styles.primaryButton}
          type="button"
        >
          <svg className={styles.icon} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.819L12 10.09l9.545-6.269h.819c.904 0 1.636.732 1.636 1.636z"/>
          </svg>
          Request CV
        </button>
        <p className={styles.note}>I'll respond with CV</p>
      </div>
    </section>
  );
};

export default Resume;
