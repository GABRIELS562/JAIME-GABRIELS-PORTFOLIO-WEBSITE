import React, { useState, useEffect, useRef } from 'react';
import styles from './Skills.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Skills = () => {
  // Core competencies - high level only
  const competencies = [
    {
      name: "Container Orchestration",
      level: 85,
      tech: "Kubernetes, Docker, Helm",
      icon: "🐳"
    },
    {
      name: "Cloud Infrastructure",
      level: 80,
      tech: "AWS, Azure, Terraform",
      icon: "☁️"
    },
    {
      name: "CI/CD & GitOps",
      level: 85,
      tech: "Jenkins, ArgoCD, GitHub Actions",
      icon: "🔄"
    },
    {
      name: "Infrastructure as Code",
      level: 80,
      tech: "Terraform, Ansible",
      icon: "📝"
    },
    {
      name: "Monitoring & Observability",
      level: 75,
      tech: "Prometheus, Grafana, ELK",
      icon: "📊"
    },
    {
      name: "Security & Compliance",
      level: 70,
      tech: "Vault, RBAC, Network Policies",
      icon: "🔐"
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <ScrollReveal animation="fadeUp" duration={700}>
        <div className={styles.skillsCard}>
          <h2 className={styles.sectionTitle}>Core Competencies</h2>
          <p className={styles.sectionSubtitle}>
            Demonstrated through live projects
          </p>

          <div className={styles.competenciesGrid}>
            {competencies.map((comp, index) => (
              <SkillBar key={index} skill={comp} delay={index * 80} />
            ))}
          </div>

          <p className={styles.moreInfo}>
            Full details on <a href="https://www.linkedin.com/in/jaime-gabriels-643132386" target="_blank" rel="noopener noreferrer">LinkedIn</a> & <a href="https://github.com/GABRIELS562" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
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
        <span className={styles.skillIcon}>{skill.icon}</span>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPercent}>{width}%</span>
      </div>
      <div className={styles.skillBarBg}>
        <div
          className={styles.skillBarFill}
          style={{ width: `${width}%` }}
        />
      </div>
      <span className={styles.skillTech}>{skill.tech}</span>
    </div>
  );
};

export default Skills;
