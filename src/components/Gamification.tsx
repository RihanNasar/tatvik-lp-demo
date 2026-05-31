'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Gamification.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Gamification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      badgeRefs.current.forEach((badge, index) => {
        if (!badge) return;
        const speed = (index % 3 + 1) * 70; 
        const yOffset = index % 2 === 0 ? speed : -speed;

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          animation: gsap.to(badge, {
            y: yOffset,
            rotation: (index % 2 === 0 ? 1 : -1) * 20,
            ease: 'none'
          })
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const badges = [
    { label: '🏆 First Place', color: 'rgba(255, 215, 0, 0.2)', border: '#ffd700' },
    { label: '⭐ Perfect Score', color: 'rgba(15, 240, 255, 0.2)', border: '#0ff0ff' },
    { label: '🔥 10 Day Streak', color: 'rgba(255, 87, 34, 0.2)', border: '#ff5722' },
    { label: '🚀 Fast Learner', color: 'rgba(176, 87, 255, 0.2)', border: '#b057ff' },
    { label: '🧠 Genius', color: 'rgba(76, 175, 80, 0.2)', border: '#4caf50' }
  ];

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.content}>
        <h2 className={styles.title}>Gamify Your Progress.</h2>
        <p className={styles.description}>
          Level up as you learn. Earn badges, maintain streaks, and compete with friends in a fun, pressure-free environment.
        </p>
      </div>

      <div className={styles.badgesContainer}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`${styles.badge} ${styles['badge' + index]}`}
            ref={(el) => { badgeRefs.current[index] = el; }}
            style={{ backgroundColor: badge.color, borderColor: badge.border }}
          >
            {badge.label}
          </div>
        ))}
      </div>
    </section>
  );
}
