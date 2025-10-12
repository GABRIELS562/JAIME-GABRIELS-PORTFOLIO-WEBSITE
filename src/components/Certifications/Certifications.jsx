import React from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
  const certifications = [
    {
      name: "AWS Solutions Architect Associate",
      year: "2025",
      icon: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
      color: "#232F3E"
    },
    {
      name: "HashiCorp Terraform Associate",
      year: "2025",
      icon: "https://img.shields.io/badge/terraform-%235835CC.svg?style=flat&logo=terraform&logoColor=white",
      color: "#5835CC"
    },
    {
      name: "PCAP Python Programming",
      year: "2024",
      icon: "https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54",
      color: "#3670A0"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      year: "Pending - December 2025",
      icon: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat&logo=kubernetes&logoColor=white",
      color: "#326ce5"
    },
    {
      name: "Certified Kubernetes Security Specialist (CKS)",
      year: "Pending - February 2026",
      icon: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat&logo=kubernetes&logoColor=white",
      color: "#326ce5"
    }
  ];

  const education = [
    { 
      degree: "Software Development Bootcamp", 
      institution: "CodeSpace Academy", 
      year: "2024",
      icon: "https://img.shields.io/badge/Development-0078D4?style=flat&logo=visualstudiocode&logoColor=white"
    },
    { 
      degree: "BSc Biotechnology", 
      institution: "University", 
      year: "2018",
      icon: "https://img.shields.io/badge/Science-00D4AA?style=flat&logo=atom&logoColor=white"
    },
    { 
      degree: "Master of Business Leadership", 
      institution: "Business School", 
      year: "2018",
      icon: "https://img.shields.io/badge/Business-1F77B4?style=flat&logo=briefcase&logoColor=white"
    }
  ];

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={styles.certificationsCard}>
        <h2 className={styles.sectionTitle}>Certifications & Education</h2>
        
        <div className={styles.content}>
          <div className={styles.certificationItem}>
            <h3>Certifications</h3>
            <div className={styles.compactGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.gridItem}>
                  <img src={cert.icon} alt={cert.name} className={styles.gridIcon} />
                  <span className={styles.gridText}>
                    {cert.name}
                    {cert.year && (
                      <span className={styles.yearText}>
                        {cert.year.includes('Pending') ? (
                          <> (<strong>Pending</strong> - {cert.year.split(' - ')[1]})</>
                        ) : (
                          <> ({cert.year})</>
                        )}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.educationItem}>
            <h3>Education</h3>
            <div className={styles.compactGrid}>
              {education.map((edu, index) => (
                <div key={index} className={styles.gridItem}>
                  <img src={edu.icon} alt={edu.degree} className={styles.gridIcon} />
                  <span className={styles.gridText}>{edu.degree}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;