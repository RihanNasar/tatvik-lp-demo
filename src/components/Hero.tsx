'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.glow-element',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 0.8, duration: 2, ease: 'power2.out', delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={`${styles.glow} glow-element`} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className="reveal-text">Learn.</span>
          <span className="reveal-text">Play.</span>
          <span className="reveal-text">Succeed.</span>
        </h1>
        <p className={`${styles.subtitle} reveal-text`}>
          The interactive curriculum that makes learning fun, accessible, and highly engaging for everyone.
        </p>
      </div>
    </section>
  );
}
