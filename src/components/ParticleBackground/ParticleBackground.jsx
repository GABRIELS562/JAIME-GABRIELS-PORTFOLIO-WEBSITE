import React, { useMemo } from 'react';
import styles from './ParticleBackground.module.css';

/**
 * Lightweight CSS-based particle background
 * Uses CSS animations instead of canvas for better performance
 */
const ParticleBackground = ({ particleCount = 30 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1
    }));
  }, [particleCount]);

  return (
    <div className={styles.particleContainer}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
