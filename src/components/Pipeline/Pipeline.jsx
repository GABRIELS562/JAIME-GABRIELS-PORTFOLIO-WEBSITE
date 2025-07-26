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
        <h2 className={styles.title}>DevOps Learning Journey</h2>
        <p className={styles.subtitle}>Hover stages to explore technologies</p>
        
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
    </section>
  );
};

export default Pipeline;