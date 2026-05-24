import React from 'react';
import styles from './Technologies.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Technologies = () => {
  const technologies = [
    // Foundation
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'foundation' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'foundation' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'foundation' },
    { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'foundation' },

    // Cloud & IaC
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'cloud' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud' },
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'cloud' },
    { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', category: 'cloud' },

    // Containers & Orchestration
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'container' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'container' },
    { name: 'OpenShift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg', category: 'container' },
    { name: 'Helm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg', category: 'container' },

    // CI/CD & GitOps
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'cicd' },
    { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg', category: 'cicd' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'cicd' },
    { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'cicd' },

    // Monitoring
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', category: 'monitoring' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'monitoring' },
    { name: 'ELK Stack', icon: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg', category: 'monitoring' },

    // Security
    { name: 'Vault', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg', category: 'security' },
    { name: 'SOPS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mozilla/mozilla-original.svg', category: 'security' },
    { name: 'Trivy', icon: 'https://aquasecurity.github.io/trivy/latest/imgs/logo.png', category: 'security' },

    // Web/App Dev
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'web' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'web' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'web' },
    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'web' }
  ];

  const categories = [
    { id: 'cloud', label: 'Cloud & IaC', color: '#FF9900' },
    { id: 'container', label: 'Containers', color: '#326ce5' },
    { id: 'cicd', label: 'CI/CD & GitOps', color: '#D24939' },
    { id: 'monitoring', label: 'Monitoring', color: '#E6522C' },
    { id: 'security', label: 'Security', color: '#FFEC6E' },
    { id: 'foundation', label: 'Foundation', color: '#10B981' },
    { id: 'web', label: 'App Dev', color: '#61DAFB' }
  ];

  return (
    <section id="technologies" className={styles.technologies}>
      <ScrollReveal animation="fadeUp" duration={600}>
        <div className={styles.container}>
          <h2 className={styles.title}>Tech Stack</h2>
          <p className={styles.subtitle}>Tools I work with</p>

          <div className={styles.techCloud}>
            {categories.map((cat) => {
              const catTechs = technologies.filter(t => t.category === cat.id);
              if (catTechs.length === 0) return null;

              return (
                <div key={cat.id} className={styles.categoryGroup}>
                  <span
                    className={styles.categoryLabel}
                    style={{ '--cat-color': cat.color }}
                  >
                    {cat.label}
                  </span>
                  <div className={styles.techRow}>
                    {catTechs.map((tech, index) => (
                      <div
                        key={index}
                        className={styles.techItem}
                        style={{ '--cat-color': cat.color }}
                      >
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
                        <span className={styles.label}>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Technologies;
