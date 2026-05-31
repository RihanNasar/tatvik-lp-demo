'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingNav() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#section-hero',
          start: 'bottom top',
          toggleActions: 'play reverse play reverse',
        }
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={navRef}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 translate-y-24 opacity-0 w-[90%] max-w-2xl"
    >
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
           <span className="font-sans font-bold text-2xl cosmic-gradient-text">त</span>
           <span className="font-serif font-bold text-xl text-white">Tattvik AI</span>
        </div>
        <button className="bg-white text-base-void font-sans font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform flex items-center gap-2">
          Start Free <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
