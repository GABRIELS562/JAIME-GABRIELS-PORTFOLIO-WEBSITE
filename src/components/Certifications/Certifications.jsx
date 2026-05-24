import React from 'react';
import styles from './Certifications.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Certifications = () => {
  const certifications = [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      year: "2025",
      icon: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat&logo=kubernetes&logoColor=white"
    },
    {
      name: "AWS Solutions Architect Associate",
      year: "2025",
      icon: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"
    },
    {
      name: "HashiCorp Terraform Associate",
      year: "2025",
      icon: "https://img.shields.io/badge/terraform-%235835CC.svg?style=flat&logo=terraform&logoColor=white"
    },
    {
      name: "AWS Cloud Practitioner",
      year: "2025",
      icon: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"
    },
    {
      name: "AWS GenAI Practitioner",
      year: "2025",
      icon: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      year: "2025",
      icon: "https://img.shields.io/badge/azure-%230072C6.svg?style=flat&logo=microsoftazure&logoColor=white"
    },
    {
      name: "PCAP Python Programming",
      year: "2024",
      icon: "https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54"
    }
  ];

  const education = [
    "Software Development Bootcamp - CodeSpace Academy (2024)",
    "BSc Biotechnology (2018)",
    "Master of Business Leadership (2018)"
  ];

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <ScrollReveal animation="fadeUp" duration={700}>
        <div className={styles.certificationsCard}>
          <h2 className={styles.sectionTitle}>Certifications & Education</h2>

          <div className={styles.content}>
            {/* Certifications Grid */}
            <div className={styles.certsGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certItem}>
                  <img src={cert.icon} alt={cert.name} className={styles.certIcon} />
                  <div className={styles.certInfo}>
                    <span className={styles.certName}>{cert.name}</span>
                    <span className={styles.certYear}>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Education - Compact */}
            <div className={styles.educationSection}>
              <h3 className={styles.educationTitle}>Education</h3>
              <div className={styles.educationList}>
                {education.map((edu, index) => (
                  <span key={index} className={styles.educationBadge}>{edu}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Certifications;
