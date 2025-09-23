import React from 'react';
import styles from './LearningPortfolio.module.css';

const LearningPortfolio = () => {
  return (
    <section className={styles.learningPortfolio}>
      <div className={styles.portfolioNotice}>
        <h3 className={styles.noticeTitle}>🏗️ Multi-Server Infrastructure</h3>
        <p className={styles.noticeText}>
          <strong>Working Systems:</strong> Live applications deployed across 3-server architecture with monitoring, CI/CD automation, and modern DevOps practices.
        </p>
        <p className={styles.noticeText}>
          <strong>Real Implementation:</strong> Functional systems demonstrating practical application of cloud-native technologies and infrastructure management.
        </p>
      </div>
    </section>
  );
};

export default LearningPortfolio;