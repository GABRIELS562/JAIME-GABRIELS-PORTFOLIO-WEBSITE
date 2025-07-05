import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.topSection}>
        <div className={styles.videoContainer}>
          <video 
            className={styles.backgroundVideo}
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
          >
            <source src="/merged-background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.aboutSummary}>
          <h2>About Me</h2>
          <div className={styles.intro}>
            <p className={styles.highlight}>
              DevOps Engineer with 5+ years of experience transforming how teams build, deploy, and scale applications.
            </p>
          </div>
          
          <div className={styles.expertise}>
            <h3>What I Do</h3>
            <p className={styles.text}>
              I specialize in creating robust CI/CD pipelines, orchestrating containerized applications with Kubernetes, 
              and architecting cloud-native solutions on AWS and GCP. My passion lies in automating complex workflows 
              and empowering development teams to deliver software faster, safer, and more reliably.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.achievements}>
          <h3>Key Achievements</h3>
          <ul className={styles.achievementList}>
            <li>Reduced deployment time by 75% through automated CI/CD pipelines</li>
            <li>Managed infrastructure serving 10M+ requests per month</li>
            <li>Led cloud migration projects saving 40% on infrastructure costs</li>
            <li>Implemented monitoring solutions improving system uptime to 99.9%</li>
          </ul>
        </div>

        <div className={styles.approach}>
          <h3>My Approach</h3>
          <p className={styles.text}>
            I believe in infrastructure as code, security-first design, and continuous improvement. 
            Every system I build is designed to be scalable, maintainable, and resilient. 
            I focus on creating systems that not only work today but can evolve with your business needs.
          </p>
        </div>

        <div className={styles.socialLinks}>
          <a href="#" className={styles.link}>LinkedIn</a>
          <a href="#" className={styles.link}>GitHub</a>
          <a href="#" className={styles.link}>Email</a>
        </div>
      </div>
    </section>
  );
};

export default About;