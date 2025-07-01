import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p className={styles.text}>
        DevOps Engineer passionate about automation, cloud technologies, and building scalable infrastructure. 
        I specialize in CI/CD pipelines, container orchestration, and cloud-native solutions that help teams 
        deliver software faster and more reliably.
      </p>
      <div className={styles.socialLinks}>
        <a href="#" className={styles.link}>LinkedIn</a>
        <a href="#" className={styles.link}>GitHub</a>
        <a href="#" className={styles.link}>Email</a>
      </div>
    </section>
  );
};

export default About;