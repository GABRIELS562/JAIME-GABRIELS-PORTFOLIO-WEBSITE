import React from 'react';
import styles from './Technologies.module.css';

const Technologies = () => {
  const technologies = [
    // Foundation - Start here
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'foundation' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'foundation' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'foundation' },
    
    // Web Technologies
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'web' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'web' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', category: 'web' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'web' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'web' },
    
    // Version Control Platforms
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'foundation' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'foundation' },
    
    // Cloud Platform
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'cloud' },
    
    // Containerization
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'container' },
    
    // Infrastructure as Code
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'cloud' },
    { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', category: 'cloud' },
    
    // CI/CD
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'cicd' },
    
    // Container Orchestration
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'container' },
    { name: 'Helm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg', category: 'container' },
    
    // Advanced CI/CD
    { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg', category: 'cicd' },
    
    // Monitoring & Observability
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', category: 'monitoring' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'monitoring' },
    { name: 'Elasticsearch', icon: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg', category: 'monitoring' },
    
    // Web Server
    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'web' }
  ];

  const categoryOrder = ['foundation', 'cloud', 'container', 'cicd', 'monitoring', 'web'];
  const categoryLabels = {
    foundation: 'Foundation',
    cloud: 'Cloud & Infrastructure',
    container: 'Containerization & Orchestration',
    cicd: 'CI/CD & Automation',
    monitoring: 'Monitoring & Observability',
    web: 'Application Development'
  };

  const groupedTechnologies = categoryOrder.map(category => ({
    category,
    label: categoryLabels[category],
    techs: technologies.filter(tech => tech.category === category)
  }));

  return (
    <section id="technologies" className={styles.technologies}>
      <div className={styles.container}>
        <h2 className={styles.title}>Technology Stack</h2>
        <p className={styles.subtitle}>Currently developing skills across the DevOps pipeline</p>
        
        <div className={styles.categoriesGrid}>
          {groupedTechnologies.map(group => (
            <div key={group.category} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}>{group.label}</h3>
              <div className={styles.techGrid}>
                {group.techs.map((tech, index) => (
                  <div key={index} className={`${styles.techItem} ${styles[tech.category]}`}>
                    <div className={styles.iconWrapper}>
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className={styles.icon}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={styles.iconFallback} style={{ display: 'none' }}>
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <span className={styles.label}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;