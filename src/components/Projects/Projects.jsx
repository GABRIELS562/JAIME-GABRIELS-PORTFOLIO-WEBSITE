import React from 'react';
import styles from './Projects.module.css';
import { LiveStatusBadge } from '../LiveStatus/LiveStatus';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: "DNA Analysis LIMS",
      liveUrl: "https://lims.jagdevops.co.za",
      description: "Production laboratory information management system for forensic DNA sample tracking. Features secure authentication, real-time sample workflows, and automated reporting. Deployed on K3s with GitHub Actions CI/CD and Cloudflare Tunnel for secure public access.",
      techStack: ["React 18", "Vite", "Node.js", "PostgreSQL", "K3s", "GitHub Actions", "Cloudflare"],
      highlights: ["Production System", "CI/CD Pipeline", "Secure Tunnel"],
      github: "https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA",
      live: "https://lims.jagdevops.co.za/"
    },
    {
      title: "Cloud-Native eShop",
      liveUrl: "https://eshop.jagdevops.co.za",
      description: "14-service microservices e-commerce platform demonstrating polyglot architecture. Services built in Go, C#, Node.js, Python, and Java communicate via gRPC. Full observability stack with OpenTelemetry, Prometheus metrics, and distributed tracing.",
      techStack: ["Kubernetes", "gRPC", "Go", "C#", "Python", "Redis", "RabbitMQ", "OpenTelemetry"],
      highlights: ["14 Microservices", "Polyglot Stack", "Full Observability"],
      github: "https://github.com/GABRIELS562/eshop-microservices",
      live: "https://eshop.jagdevops.co.za/"
    },
    {
      title: "Forensic Evidence Collector",
      liveUrl: "https://dashboards.jagdevops.co.za",
      description: "Compliance automation platform with tamper-evident audit trails. Implements blockchain-style SHA-256 hash chains for evidence integrity verification. Includes real-time Command Center dashboard with Chart.js visualizations and Prometheus metrics integration.",
      techStack: ["Python 3.11", "SQLite", "Docker", "Prometheus", "Chart.js", "Nginx"],
      highlights: ["Hash Chain Integrity", "Real-time Dashboard", "Compliance Automation"],
      github: "https://github.com/GABRIELS562/digital-evidence-pipeline",
      live: "https://dashboards.jagdevops.co.za/"
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <ScrollReveal animation="fadeUp" duration={700}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionSubtitle}>
            Production systems running on multi-server Kubernetes infrastructure
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

              {project.highlights && (
                <div className={styles.highlights}>
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className={styles.highlightBadge}>{highlight}</span>
                  ))}
                </div>
              )}

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
