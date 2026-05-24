import React from 'react';
import styles from './Skills.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Skills = () => {
  const competencies = [
    { name: "Container Orchestration", tech: "Kubernetes, Docker, Helm" },
    { name: "Cloud Infrastructure", tech: "AWS, Azure, Terraform" },
    { name: "CI/CD & GitOps", tech: "Jenkins, ArgoCD, GitHub Actions" },
    { name: "Infrastructure as Code", tech: "Terraform, Ansible" },
    { name: "Monitoring & Observability", tech: "Prometheus, Grafana, ELK" },
    { name: "Security & Compliance", tech: "Vault, RBAC, Network Policies" }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <ScrollReveal animation="fadeUp" duration={700}>
        <div className={styles.skillsCard}>
          <h2 className={styles.sectionTitle}>Core Competencies</h2>

          <div className={styles.competenciesGrid}>
            {competencies.map((comp, index) => (
              <div key={index} className={styles.skillItem}>
                <span className={styles.skillName}>{comp.name}</span>
                <span className={styles.skillTech}>{comp.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;
