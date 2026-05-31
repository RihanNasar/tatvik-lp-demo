'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FeaturesScroll.module.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Interactive Curriculum',
    description: 'Textbook concepts brought to life with engaging animations and interactive exercises.',
    color: 'linear-gradient(135deg, rgba(15, 240, 255, 0.2), rgba(10, 11, 16, 1))'
  },
  {
    title: 'Learn by Playing',
    description: 'We simplified learning to make it feel like a game. Stay motivated, earn rewards, and have fun.',
    color: 'linear-gradient(135deg, rgba(176, 87, 255, 0.2), rgba(10, 11, 16, 1))'
  },
  {
    title: 'Zero Pressure',
    description: 'Reduces the need for expensive tuitions. Learn at your own pace with a stress-free environment.',
    color: 'linear-gradient(135deg, rgba(15, 240, 255, 0.2), rgba(176, 87, 255, 0.2))'
  }
];

export default function FeaturesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1,
        animation: gsap.to(cardsRef.current, {
          xPercent: -100 * (features.length - 1) - (features.length * 5), // rough adjustment for gap
          ease: 'none'
        })
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>Simplified Learning.</h2>
        <p className={styles.subtitle}>Curriculum based on textbooks, redesigned for fun.</p>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles.card}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              style={{ background: feature.color }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
