import React, { useState, useEffect, useRef } from 'react';
import styles from './Certifications.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Certifications = () => {
  // Key certifications - most relevant for DevOps roles
  const certifications = [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      year: "2025",
      icon: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=flat&logo=kubernetes&logoColor=white",
      color: "#326ce5"
    },
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
      name: "AWS Cloud Practitioner",
      year: "2025",
      icon: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
      color: "#232F3E"
    },
    {
      name: "AWS GenAI Practitioner",
      year: "2025",
      icon: "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
      color: "#232F3E"
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      year: "2025",
      icon: "https://img.shields.io/badge/azure-%230072C6.svg?style=flat&logo=microsoftazure&logoColor=white",
      color: "#0072C6"
    },
    {
      name: "PCAP Python Programming",
      year: "2024",
      icon: "https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54",
      color: "#3670A0"
    }
  ];

  // Core competencies with proficiency levels
  const competencies = [
    { name: "Container Orchestration", level: 85, tech: "Kubernetes, Docker, Helm", color: "#326ce5" },
    { name: "Cloud Infrastructure", level: 80, tech: "AWS, Terraform, Azure", color: "#FF9900" },
    { name: "CI/CD Pipelines", level: 85, tech: "Jenkins, ArgoCD, GitOps", color: "#D24939" },
    { name: "Infrastructure as Code", level: 80, tech: "Terraform, Ansible", color: "#5835CC" },
    { name: "Monitoring & Observability", level: 75, tech: "Prometheus, Grafana, ELK", color: "#E6522C" },
    { name: "Scripting & Automation", level: 80, tech: "Python, Bash, YAML", color: "#3670A0" }
  ];

  const education = [
    {
      degree: "Software Development Bootcamp",
      institution: "CodeSpace Academy",
      year: "2024"
    },
    {
      degree: "BSc Biotechnology",
      institution: "University",
      year: "2018"
    },
    {
      degree: "Master of Business Leadership",
      institution: "Business School",
      year: "2018"
    }
  ];

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <ScrollReveal animation="fadeUp" duration={700}>
        <div className={styles.certificationsCard}>
          <h2 className={styles.sectionTitle}>Skills & Credentials</h2>

          <div className={styles.content}>
            {/* Competencies with Progress Bars */}
            <ScrollReveal animation="fadeLeft" duration={600} delay={100}>
              <div className={styles.competenciesSection}>
                <h3>Core Competencies</h3>
                <p className={styles.competenciesSubtitle}>Demonstrated through live projects</p>
                <div className={styles.competenciesGrid}>
                  {competencies.map((comp, index) => (
                    <SkillBar key={index} skill={comp} delay={index * 100} />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal animation="fadeRight" duration={600} delay={200}>
              <div className={styles.certificationItem}>
                <h3>Certifications</h3>
                <div className={styles.compactGrid}>
                  {certifications.map((cert, index) => (
                    <div key={index} className={styles.gridItem}>
                      <img src={cert.icon} alt={cert.name} className={styles.gridIcon} />
                      <span className={styles.gridText}>
                        {cert.name}
                        <span className={styles.yearText}> ({cert.year})</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Education - Compact */}
            <ScrollReveal animation="fadeUp" duration={600} delay={300}>
              <div className={styles.educationItem}>
                <h3>Education</h3>
                <div className={styles.educationList}>
                  {education.map((edu, index) => (
                    <span key={index} className={styles.educationBadge}>
                      {edu.degree}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

// Animated Skill Bar Component
const SkillBar = ({ skill, delay }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(skill.level);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level, delay, isVisible]);

  return (
    <div className={styles.skillItem} ref={barRef}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPercent}>{width}%</span>
      </div>
      <div className={styles.skillBarBg}>
        <div
          className={styles.skillBarFill}
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
          }}
        />
      </div>
      <span className={styles.skillTech}>{skill.tech}</span>
    </div>
  );
};

export default Certifications;
