import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import { LiveStatusBadge } from '../LiveStatus/LiveStatus';

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
      liveUrl: "https://lims.jagdevops.co.za",
      description: (
        <>
          <p>Laboratory Information Management System demonstrating forensic DNA sample processing workflow with 12-stage pipeline simulation.</p>
          <ul style={{ marginTop: '0.8rem', marginBottom: '1rem', paddingLeft: '1.2rem' }}>
            <li>Working DNA sample tracking system with PostgreSQL</li>
            <li>Real-time dashboard with live data simulation</li>
            <li>Jenkins CI/CD pipeline with Docker registry</li>
            <li>Kubernetes deployment on K3s cluster</li>
            <li>React frontend with Node.js backend</li>
          </ul>
        </>
      ),
      techStack: ["React", "Node.js", "PostgreSQL", "K3s", "Docker", "Jenkins"],
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA", newTab: true },
        { text: "Live Demo", url: "https://lims.jagdevops.co.za/", newTab: true },
        { text: "Documentation", url: "https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA", newTab: true }
      ]
    },
    {
      title: "Zero Downtime Pipeline",
      liveUrl: "https://finance.jagdevops.co.za",
      liveUrls: [
        { name: "Finance", url: "https://finance.jagdevops.co.za" },
        { name: "Pharma", url: "https://pharma.jagdevops.co.za" }
      ],
      description: (
        <>
          <p>Enterprise financial trading and pharmaceutical manufacturing systems with high availability deployment patterns with rolling updates and health checks.</p>
          <ul style={{ marginTop: '0.8rem', marginBottom: '1rem', paddingLeft: '1.2rem' }}>
            <li>Finance and Pharma Flask applications</li>
            <li>Blue-green deployment configuration</li>
            <li>Multi-application dashboard</li>
            <li>GitOps implementation with ArgoCD</li>
            <li>Rolling update strategies</li>
          </ul>
        </>
      ),
      techStack: ["Python", "FastAPI", "Flask", "K3s", "ArgoCD", "Jenkins", "PostgreSQL"],
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/zero-downtime-pipeline", newTab: true },
        { text: "Live: Finance", url: "https://finance.jagdevops.co.za/", newTab: true },
        { text: "Live: Pharma", url: "https://pharma.jagdevops.co.za/", newTab: true },
        { text: "Documentation", url: "https://github.com/GABRIELS562/zero-downtime-pipeline", newTab: true }
      ]
    },
    {
      title: "Digital Evidence Pipeline (DEP)",
      liveUrl: null, // No public URL - internal system
      description: (
        <>
          <p>Monitoring system demonstrating how forensic laboratory principles can be applied to DevOps infrastructure. Shows conceptual approach to compliance tracking and evidence-based system monitoring.</p>
          <ul style={{ marginTop: '0.8rem', marginBottom: '1rem', paddingLeft: '1.2rem' }}>
            <li>Infrastructure monitoring with forensic-inspired approach</li>
            <li>Basic compliance metrics endpoint</li>
            <li>Conceptual framework for evidence-based monitoring</li>
            <li>Demonstrates application of forensic thinking to DevOps</li>
          </ul>
        </>
      ),
      techStack: ["Python", "Docker", "AWS EC2", "Cryptography", "Prometheus"],
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/digital-evidence-pipeline", newTab: true },
        { text: "Documentation", url: "https://github.com/GABRIELS562/digital-evidence-pipeline", newTab: true }
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

        {/* Multi-Server Infrastructure Section */}
        <div className={styles.infrastructureSection}>
          <div className={styles.infrastructureNotice}>
            <h3 className={styles.infrastructureTitle}>🏗️ Multi-Server Infrastructure</h3>
            <p className={styles.infrastructureText}>
              <strong>Working Systems:</strong> Live applications deployed across 3-server architecture with monitoring, CI/CD automation, and modern DevOps practices.
            </p>
            <p className={styles.infrastructureText}>
              <strong>Real Implementation:</strong> Functional systems demonstrating practical application of cloud-native technologies and infrastructure management.
            </p>
          </div>
        </div>

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
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.liveUrl && (
                  <LiveStatusBadge url={project.liveUrl} name={project.title} />
                )}
              </div>
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