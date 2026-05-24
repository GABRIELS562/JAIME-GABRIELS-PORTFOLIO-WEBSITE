import React from 'react';
import styles from './About.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.topSection}>
        <ScrollReveal animation="fadeLeft" duration={800}>
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
            poster="/video-fallback.jpg"
            onLoadedData={(e) => {
              e.target.play().catch(console.error);
            }}
            onEnded={(e) => {
              e.target.play().catch(console.error);
            }}
            onError={(e) => {
              console.warn('Video failed to load:', e);
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'block';
            }}
          >
            <source src="/merged-background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoFallback} style={{display: 'none'}}>
            <div className={styles.fallbackContent}>
              <h3>DevOps Infrastructure</h3>
              <p>Building modern, scalable systems</p>
            </div>
          </div>
        </div>
        </ScrollReveal>
        <ScrollReveal animation="fadeRight" duration={800} delay={200}>
        <div className={styles.aboutSummary}>
          <h2>About Me</h2>
          <div className={styles.intro}>
            <p className={styles.highlight}>
              Senior Forensic Scientist leveraging 15 years of analytical expertise and regulatory compliance experience in DevOps engineering. Bringing proven problem-solving skills and systematic methodologies to modern infrastructure challenges.
            </p>
          </div>
          
          <div className={styles.transition}>
            <h3>Why DevOps?</h3>
            <p className={styles.text}>
              <strong>Forensics → DevOps:</strong> Same analytical rigor, different systems.
              From tracing evidence to tracing code pipelines, both demand precision and systematic problem-solving.
            </p>
          </div>

        </div>
        </ScrollReveal>
      </div>

    </section>
  );
};

export default About;