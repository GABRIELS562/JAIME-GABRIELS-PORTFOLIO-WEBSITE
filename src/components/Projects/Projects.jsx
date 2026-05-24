import React from 'react';
import styles from './Projects.module.css';
import { LiveStatusBadge } from '../LiveStatus/LiveStatus';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: "DNA Analysis LIMS",
      liveUrl: "https://lims.jagdevops.co.za",
      description: "Full-stack laboratory system for forensic DNA sample tracking. PostgreSQL database, Jenkins CI/CD, K3s deployment.",
      techStack: ["React", "Node.js", "PostgreSQL", "K3s", "Docker", "Jenkins"],
      github: "https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA",
      live: "https://lims.jagdevops.co.za/"
    },
    {
      title: "Zero Downtime Pipeline",
      liveUrl: "https://finance.jagdevops.co.za",
      description: "High availability deployment with blue-green strategy, GitOps via ArgoCD, and multi-application orchestration.",
      techStack: ["Python", "Flask", "K3s", "ArgoCD", "Jenkins"],
      github: "https://github.com/GABRIELS562/zero-downtime-pipeline",
      live: "https://finance.jagdevops.co.za/"
    },
    {
      title: "Digital Evidence Pipeline",
      liveUrl: null,
      description: "Infrastructure monitoring applying forensic principles to DevOps. Compliance tracking with Prometheus integration.",
      techStack: ["Python", "Docker", "AWS EC2", "Prometheus"],
      github: "https://github.com/GABRIELS562/digital-evidence-pipeline",
      live: null
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <ScrollReveal animation="fadeUp" duration={700}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionSubtitle}>
            Live applications deployed across multi-server infrastructure
          </p>
          <a
            href="https://github.com/GABRIELS562/Architecture-"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.architectureLink}
          >
            View Architecture
          </a>
        </div>
      </ScrollReveal>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ScrollReveal key={index} animation="fadeUp" duration={600} delay={index * 100}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.liveUrl && (
                  <LiveStatusBadge url={project.liveUrl} name={project.title} />
                )}
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techStack}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.liveLink}`}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
