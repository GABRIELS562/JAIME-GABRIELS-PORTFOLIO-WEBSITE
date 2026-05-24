import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

/**
 * ScrollReveal - A component that animates children when they enter the viewport
 * Uses Intersection Observer for performance
 */
const ScrollReveal = ({
  children,
  animation = 'fadeUp', // fadeUp, fadeIn, fadeLeft, fadeRight, scale, blur
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const animationClass = styles[animation] || styles.fadeUp;
  const visibilityClass = isVisible ? styles.visible : styles.hidden;

  return (
    <div
      ref={ref}
      className={`${styles.container} ${animationClass} ${visibilityClass} ${className}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

/**
 * StaggerChildren - Wrapper that staggers animations of direct children
 */
export const StaggerChildren = ({
  children,
  staggerDelay = 100,
  animation = 'fadeUp',
  duration = 600,
  threshold = 0.1,
  className = ''
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
          threshold={threshold}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ScrollReveal;
