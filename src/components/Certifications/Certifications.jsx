import React from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={styles.certificationsCard}>
        <h2 className={styles.sectionTitle}>Certifications & Education</h2>
        
        <div className={styles.content}>
          <div className={styles.certificationItem}>
            <h3>Certifications</h3>
            <p className={styles.text}>
              <strong>🔹 AWS Solutions Architect Associate</strong> • <strong>🔹 CKA</strong> • <strong>🔹 Linux Foundation Certified System Administrator</strong> • <strong>🔹 Terraform</strong>
            </p>
          </div>
          
          <div className={styles.educationItem}>
            <h3>Education</h3>
            <p className={styles.text}>
              🧬 <strong>BSc Biotechnology</strong> • 🎓 <strong>Master of Business Leadership (MBL)</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;