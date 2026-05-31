'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ValueProp.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ValueProp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 75%',
        animation: gsap.fromTo(
          rowsRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
        )
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    { label: 'Interactive Learning', tatvik: true, traditional: false },
    { label: '24/7 AI Doubt Solving', tatvik: true, traditional: false },
    { label: 'Gamified Motivation', tatvik: true, traditional: false },
    { label: 'Personalized Pace', tatvik: true, traditional: false },
    { label: 'Expensive Fees', tatvik: false, traditional: true },
  ];

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>Premium Education. Zero Premium Price.</h2>
        <p className={styles.description}>
          Reduce the need for expensive online or offline tuitions. Get everything you need to succeed right here.
        </p>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.colLabel}>Feature</div>
          <div className={styles.colTatvik}>Tatvik</div>
          <div className={styles.colTrad}>Traditional Tuition</div>
        </div>
        {features.map((item, i) => (
          <div 
            className={styles.row} 
            key={i}
            ref={(el) => { rowsRef.current[i] = el; }}
          >
            <div className={styles.colLabel}>{item.label}</div>
            <div className={styles.colTatvik}>
              {item.tatvik ? <span className={styles.check}>✓</span> : <span className={styles.cross}>✗</span>}
            </div>
            <div className={styles.colTrad}>
              {item.traditional ? <span className={styles.check}>✓</span> : <span className={styles.cross}>✗</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
