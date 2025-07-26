import React, { useState, useEffect } from 'react';
import styles from './Pipeline.module.css';

const Pipeline = () => {
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
          console.log('Auto animation: changing from', prev, 'to', next);
          return next;
        });
      }, 2000); // Change stage every 2 seconds
    }
    
    return () => clearInterval(autoInterval);
  }, [isAutoMode, pipelineStages.length]);

  // Simplified: Just keep auto-mode for now, disable scroll detection
  useEffect(() => {
    console.log('Scroll detection disabled - staying in auto mode');
    // Scroll detection temporarily disabled to fix the auto-mode issue
  }, []);

  return (
    <section id="pipeline" className={styles.pipeline}>
      <div className={styles.pipelineCard}>
        <h2 className={styles.title}>DevOps Learning Pipeline</h2>
        <p className={styles.subtitle}>My journey through the software delivery lifecycle</p>
        
        {/* Debug info */}
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '10px', 
          margin: '10px 0', 
          borderRadius: '5px',
          fontSize: '14px'
        }}>
          Active Stage: {activeStage} | Auto Mode: {isAutoMode ? 'Yes' : 'No'}
        </div>
        
        <div className={styles.pipelineFlow}>
          {pipelineStages.map((stage, index) => (
            <div key={stage.id} className={styles.stageContainer}>
              {/* Pipeline Connection Line */}
              {index < pipelineStages.length - 1 && (
                <div 
                  className={`${styles.connector} ${
                    activeStage > index ? styles.connectorActive : ''
                  }`}
                  style={{
                    '--connector-color': stage.color,
                    backgroundColor: activeStage > index ? '#10B981' : 'var(--background-elevated)'
                  }}
                />
              )}
              
              {/* Stage Node */}
              <div 
                className={`${styles.stage} ${
                  activeStage >= index ? styles.stageActive : ''
                } ${styles[stage.id]}`}
                style={{
                  '--stage-color': stage.color,
                  borderColor: activeStage >= index ? '#10B981' : 'transparent'
                }}
              >
                <div className={styles.stageIcon}>{stage.icon}</div>
                <div className={styles.stageContent}>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDescription}>{stage.description}</p>
                  <div className={styles.stageTechnologies}>
                    {stage.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className={`${styles.techBadge} ${
                          activeStage >= index ? styles.techBadgeActive : ''
                        }`}
                        style={{
                          animationDelay: `${techIndex * 0.1}s`,
                          '--badge-color': stage.color
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{
              width: `${((activeStage + 1) / pipelineStages.length) * 100}%`
            }}
          />
        </div>
        
        <p className={styles.progressText}>
          Pipeline Progress: {Math.round(((activeStage + 1) / pipelineStages.length) * 100)}% Complete
        </p>
      </div>
    </section>
  );
};

export default Pipeline;