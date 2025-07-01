import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Implemented end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes for microservices deployment.",
      links: [
        { text: "GitHub", url: "#" },
        { text: "Live Demo", url: "#" }
      ]
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform-based AWS infrastructure provisioning with automated scaling and monitoring solutions.",
      links: [
        { text: "GitHub", url: "#" },
        { text: "Documentation", url: "#" }
      ]
    }
  ];

  return (
    <section id="projects">
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
    </section>
  );
};

export default Projects;