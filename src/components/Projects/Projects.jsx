import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  // Pipeline state
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoMode, setIsAutoMode] = useState(true);

  const pipelineStages = [
    {
      id: 'code',
      title: 'Code',
      icon: '💻',
      description: 'Development & Version Control',
      technologies: ['Git', 'GitHub', 'Python', 'JavaScript', 'HTML', 'CSS', 'React'],
      color: 'var(--info-teal)'
    },
    {
      id: 'build',
      title: 'Build',
      icon: '🔨',
      description: 'Containerization & Packaging',
      technologies: ['Docker', 'Nginx'],
      color: 'var(--success-green)'
    },
    {
      id: 'test',
      title: 'Test',
      icon: '✅',
      description: 'Quality Assurance & Validation',
      technologies: ['Linux', 'Ansible'],
      color: 'var(--warning-orange)'
    },
    {
      id: 'deploy',
      title: 'Deploy',
      icon: '🚀',
      description: 'Infrastructure & Orchestration',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Helm', 'Jenkins', 'ArgoCD'],
      color: 'var(--accent-purple)'
    },
    {
      id: 'monitor',
      title: 'Monitor',
      icon: '📊',
      description: 'Observability & Analytics',
      technologies: ['Prometheus', 'Grafana', 'Elasticsearch'],
      color: 'var(--accent-blue)'
    }
  ];

  // Auto-play animation effect
  useEffect(() => {
    let autoInterval;
    if (isAutoMode) {
      autoInterval = setInterval(() => {
        setActiveStage(prev => {
          const next = (prev + 1) % pipelineStages.length;
          return next;
        });
      }, 2000); // Change stage every 2 seconds
    }
    
    return () => clearInterval(autoInterval);
  }, [isAutoMode, pipelineStages.length]);

  // Simplified: Just keep auto-mode for now
  useEffect(() => {
    // Scroll detection disabled for cleaner integration
  }, []);

  const projects = [
    {
      title: "DNA Analysis LIMS",
      description: (
        <>
          <p>Full-stack Laboratory Information Management System processing 200+ forensic DNA samples through a 12-stage analysis pipeline.</p>
          <ul style={{ marginTop: '0.8rem', marginBottom: '1rem', paddingLeft: '1.2rem' }}>
            <li>Automated sample workflow from collection to reporting</li>
            <li>Real-time monitoring with Prometheus/Grafana dashboards</li>
            <li>Jenkins CI/CD pipeline with local Docker registry</li>
            <li>Production deployment on K3s with PostgreSQL</li>
          </ul>
        </>
      ),
      techStack: ["React", "Node.js", "PostgreSQL", "K3s", "Docker", "Jenkins"],
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA", newTab: true },
        { text: "Live Demo", url: "https://lims.jagdevops.co.za/", newTab: true },
        { text: "Documentation", url: "https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA", newTab: true },
        { text: "Screenshots", url: "https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA#screenshots", newTab: true }
      ]
    },
    {
      title: "Zero Downtime Pipeline",
      description: (
        <>
          <p>Enterprise financial trading and pharmaceutical manufacturing systems with TRUE zero-downtime deployments via 2-replica high availability.</p>
          <ul style={{ marginTop: '0.8rem', marginBottom: '1rem', paddingLeft: '1.2rem' }}>
            <li>Finance: Real-time trading platform with portfolio analytics</li>
            <li>Pharma: FDA-compliant batch tracking with GMP validation</li>
            <li>100% uptime during rolling updates via ArgoCD GitOps</li>
            <li>Proven &lt;60 second recovery from production incidents</li>
          </ul>
        </>
      ),
      techStack: ["Python", "FastAPI", "Flask", "K3s", "ArgoCD", "Jenkins", "PostgreSQL"],
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/zero-downtime-pipeline", newTab: true },
        { text: "Live: Finance", url: "https://finance.jagdevops.co.za/", newTab: true },
        { text: "Live: Pharma", url: "https://pharma.jagdevops.co.za/", newTab: true },
        { text: "Documentation", url: "https://github.com/GABRIELS562/zero-downtime-pipeline", newTab: true },
        { text: "Screenshots", url: "https://github.com/GABRIELS562/zero-downtime-pipeline#screenshots", newTab: true }
      ]
    },
    {
      title: "Digital Evidence Pipeline (DEP)",
      description: (
        <>
          <p>Forensic-grade compliance monitoring applying DNA laboratory chain-of-custody principles to DevOps infrastructure. Demonstrates cryptographic audit trails, real-time compliance scoring (FDA/SOX/GMP), and immutable evidence collection suitable for regulated industries.</p>
          <ul style={{ marginTop: '0.8rem', marginBottom: '1rem', paddingLeft: '1.2rem' }}>
            <li>Blockchain-style audit trail with SHA256 hashing</li>
            <li>Compliance scoring algorithms for regulatory standards</li>
            <li>Tamper-proof evidence collection methodology</li>
            <li>Court-admissible documentation standards</li>
          </ul>
        </>
      ),
      techStack: ["Python", "Docker", "AWS EC2", "Cryptography", "Prometheus"],
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/digital-evidence-pipeline", newTab: true },
        { text: "Documentation", url: "https://github.com/GABRIELS562/digital-evidence-pipeline", newTab: true },
        { text: "Screenshots", url: "https://github.com/GABRIELS562/digital-evidence-pipeline#screenshots", newTab: true }
      ]
    }
  ];

  return (
    <section id="projects">
      {/* Pipeline Section */}
      <div className={styles.pipelineHeader}>
        <div className={styles.pipelineCard}>
          <h2 className={styles.sectionTitle}>Learning Journey & Projects</h2>
          <p className={styles.sectionSubtitle}>Following the DevOps pipeline from learning to implementation</p>
          
          <div className={styles.timelineContainer}>
            <div className={styles.timelinePath}>
              {pipelineStages.map((stage, index) => (
                <React.Fragment key={stage.id}>
                  {/* Stage Node */}
                  <div 
                    className={`${styles.timelineNode} ${
                      activeStage >= index ? styles.nodeActive : ''
                    } ${styles[stage.id]}`}
                    onMouseEnter={() => setActiveStage(index)}
                  >
                    <div className={styles.nodeIcon}>{stage.icon}</div>
                    <div className={styles.nodeLabel}>{stage.title}</div>
                    
                    {/* Hover tooltip */}
                    <div className={styles.nodeTooltip}>
                      <h4>{stage.title}</h4>
                      <p>{stage.description}</p>
                      <div className={styles.tooltipTech}>
                        {stage.technologies.map(tech => (
                          <span key={tech} className={styles.tooltipBadge}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection Line */}
                  {index < pipelineStages.length - 1 && (
                    <div 
                      className={`${styles.timelineConnection} ${
                        activeStage > index ? styles.connectionActive : ''
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className={styles.compactProgress}>
            <div 
              className={styles.compactProgressFill}
              style={{
                width: `${((activeStage + 1) / pipelineStages.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.projectsContainer}>
        <h3 className={styles.projectsTitle}>Projects</h3>

        {/* Architecture Overview Card */}
        <div className={styles.architectureCard}>
          <a
            href="https://github.com/GABRIELS562/Architecture-"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.architectureLink}
          >
            <div className={styles.architectureContent}>
              <div className={styles.architectureTextWrapper}>
                <span className={styles.architectureText}><strong>View Complete Architecture</strong></span>
                <span className={styles.architectureSubtext}>
                  Projects running across 3 servers • Architecture documentation available in project repositories
                </span>
              </div>
            </div>
          </a>
        </div>

        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.description}>{project.description}</div>
              {project.techStack && (
                <div className={styles.techStack}>
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className={styles.links}>
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target={link.newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;