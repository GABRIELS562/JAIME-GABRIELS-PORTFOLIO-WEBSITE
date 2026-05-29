import React from 'react';
import styles from './Certifications.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Certifications = () => {
  const certifications = [
    {
      name: "CKA",
      icon: "https://img.shields.io/badge/CKA-326CE5?style=flat&logo=kubernetes&logoColor=white"
    },
    {
      name: "AWS SAA",
      icon: "https://img.shields.io/badge/AWS_SAA-232F3E?style=flat&logo=amazonaws&logoColor=white"
    },
    {
      name: "Terraform",
      icon: "https://img.shields.io/badge/Terraform-844FBA?style=flat&logo=terraform&logoColor=white"
    },
    {
      name: "AWS CCP",
      icon: "https://img.shields.io/badge/AWS_CCP-232F3E?style=flat&logo=amazonaws&logoColor=white"
    },
    {
      name: "AWS GenAI",
      icon: "https://img.shields.io/badge/AWS_GenAI-232F3E?style=flat&logo=amazonaws&logoColor=white"
    },
    {
      name: "AZ-900",
      icon: "https://img.shields.io/badge/AZ--900-0078D4?style=flat&logo=microsoftazure&logoColor=white"
    },
    {
      name: "PCAP Python",
      icon: "https://img.shields.io/badge/PCAP-3776AB?style=flat&logo=python&logoColor=white"
    }
  ];

  const education = [
    "MSc Business Leadership — UNISA School of Business Leadership",
    "BSc Biotechnology — University of the Western Cape",
    "Software Development Bootcamp — CodeSpace Academy"
  ];

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <ScrollReveal animation="fadeUp" duration={700}>
        <div className={styles.certificationsCard}>
          <h2 className={styles.sectionTitle}>Credentials</h2>

          <div className={styles.content}>
            {/* Certifications - Compact Badge Row */}
            <div className={styles.certsRow}>
              {certifications.map((cert, index) => (
                <img
                  key={index}
                  src={cert.icon}
                  alt={cert.name}
                  className={styles.certBadge}
                  title={cert.name}
                />
              ))}
            </div>

            {/* Education - Equal Weight */}
            <div className={styles.educationSection}>
              <h3 className={styles.educationTitle}>Education</h3>
              <ul className={styles.educationList}>
                {education.map((edu, index) => (
                  <li key={index} className={styles.educationItem}>{edu}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Certifications;
