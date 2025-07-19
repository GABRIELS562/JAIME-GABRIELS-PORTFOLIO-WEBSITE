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
            controls={false}
            disablePictureInPicture
            onLoadedData={(e) => {
              e.target.play().catch(console.error);
            }}
            onEnded={(e) => {
              e.target.play().catch(console.error);
            }}
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
          <p className={styles.text}>
            Reduced deployment time by 75% through automated CI/CD pipelines and managed infrastructure serving 10M+ requests per month. Led cloud migration projects saving 40% on infrastructure costs while implementing monitoring solutions that improved system uptime to 99.9%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;