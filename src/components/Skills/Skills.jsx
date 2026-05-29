import React from 'react';
import styles from './Skills.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Skills = () => {
  const stack = [
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "ArgoCD",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
    "Vault",
    "Python",
    "Go",
    "Node.js"
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <ScrollReveal animation="fadeUp" duration={700}>
        <div className={styles.skillsCard}>
          <h2 className={styles.sectionTitle}>Stack</h2>
          <div className={styles.stackRow}>
            {stack.map((tech, index) => (
              <span key={index} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;
