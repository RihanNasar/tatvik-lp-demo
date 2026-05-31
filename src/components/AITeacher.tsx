'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AITeacher.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AITeacher() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Breathing animation for the orb
      gsap.to(orbRef.current, {
        scale: 1.05,
        boxShadow: '0 0 80px 20px rgba(15, 240, 255, 0.4), inset 0 0 40px 10px rgba(176, 87, 255, 0.5)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Scroll reveal
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 70%',
        animation: gsap.fromTo(
          [textRef.current, orbRef.current],
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.out' }
        )
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.content} ref={textRef}>
        <h2 className={styles.title}>Your Empathetic AI Guide.</h2>
        <p className={styles.description}>
          Never feel stuck again. Our AI teacher acts as a personal mentor, patiently solving doubts and guiding you step-by-step through any challenge.
        </p>
      </div>
      <div className={styles.visual}>
        <div className={styles.orb} ref={orbRef}>
          <div className={styles.orbInner} />
        </div>
      </div>
    </section>
  );
}
