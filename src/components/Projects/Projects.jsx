import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
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