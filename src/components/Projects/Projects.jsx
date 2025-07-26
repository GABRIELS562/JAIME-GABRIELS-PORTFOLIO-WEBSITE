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
      title: "Paternity Testing LIMS",
      description: "Laboratory Information Management System for paternity testing workflows with automated reporting and compliance tracking.",
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/LABSCIENTIFIC-LIMS" },
        { text: "Documentation", url: "#" }
      ]
    },
    {
      title: "Zero Downtime Pipeline",
      description: "Terraform-based AWS infrastructure provisioning with automated scaling and monitoring solutions.",
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/zero-downtime-pipeline" },
        { text: "Live Demo", url: "#" }
      ]
    },
    {
      title: "Compliance Automation Platform",
      description: "Automated compliance monitoring and reporting system ensuring regulatory adherence across development and deployment processes.",
      links: [
        { text: "GitHub", url: "https://github.com/GABRIELS562/compliance-automation-platform" },
        { text: "Documentation", url: "#" }
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
                  <a key={linkIndex} href={link.url} className={styles.link}>
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