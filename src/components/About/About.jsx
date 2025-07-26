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
              Forensic Scientist transitioning to DevOps Engineer. Bringing scientific rigor and analytical thinking to modern infrastructure challenges.
            </p>
          </div>
          
          <div className={styles.certifications}>
            <h3>Certifications & Education</h3>
            <p className={styles.text}>
              <strong>Certifications:</strong> AWS Solutions Architect Associate • CKA • Linux Foundation Certified System Administrator • Terraform<br/>
              <strong>Education:</strong> BSc Biotechnology • Master of Business Leadership (MBL)
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;