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
      description: "Full-stack Laboratory Information Management System for forensic DNA analysis. Features STR analysis capabilities, sample tracking, automated report generation, and comprehensive CI/CD pipeline with Docker/Kubernetes deployment.",
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA" },
        { text: "Live Demo", url: "https://gabriels562.github.io/JAG-LABSCIENTIFIC-DNA/" }
      ]
    },
    {
      title: "Zero Downtime Pipeline",
      description: "Enterprise-grade deployment pipeline achieving 99.5% success rate with 3-minute recovery time. Implements blue-green and canary deployments, automated rollback mechanisms, FDA/SOX compliance validation, and comprehensive monitoring with Prometheus/Grafana.",
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/zero-downtime-pipeline" },
        { text: "Documentation", url: "https://github.com/GABRIELS562/zero-downtime-pipeline#readme" }
      ]
    },
    {
      title: "Compliance Automation Platform",
      description: "Forensic-grade compliance monitoring platform with Infrastructure as Code. Features automated control validation, real-time compliance scoring, audit trail generation, and comprehensive monitoring stack using Prometheus/Grafana/Elasticsearch.",
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/compliance-automation-platform" },
        { text: "Documentation", url: "https://github.com/GABRIELS562/compliance-automation-platform#readme" }
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
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.links}>
                {project.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
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