import React from 'react';
import styles from './Technologies.module.css';

const Technologies = () => {
  const technologies = [
    // Foundation - Start here
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    
    // Web Technologies
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    
    // Version Control Platforms
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    
    // Cloud Platform
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    
    // Containerization
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    
    // Infrastructure as Code
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
    
    // CI/CD
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    
    // Container Orchestration
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Helm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg' },
    
    // Advanced CI/CD
    { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' },
    
    // Monitoring & Observability
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Elasticsearch', icon: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg' }
  ];

  return (
    <section id="technologies" className={styles.technologies}>
      <h2 className={styles.title}>DevOps Learning Journey</h2>
      <p className={styles.subtitle}>Skills in Development</p>
      <div className={styles.grid}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.item}>
            <img 
              src={tech.icon} 
              alt={tech.name}
              className={styles.icon}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span style={{ display: 'none' }}>{tech.name}</span>
            <span className={styles.label}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;