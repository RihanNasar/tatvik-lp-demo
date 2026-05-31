'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function CinematicHero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <section id="section-hero" className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-base-navy">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/textbook_glowing_1780134054364.png')] bg-cover bg-center opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-base-navy/40 backdrop-blur-sm" /> 
      </div>

      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div className="mb-10 w-24 h-24 rounded-full glass-panel flex items-center justify-center shadow-[0_0_50px_rgba(0,191,255,0.3)]">
           <span className="font-sans font-bold text-5xl cosmic-gradient-text mt-[-4px]">त</span>
        </div>
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[1.1] mb-12 drop-shadow-2xl">
          Finally, a teacher who never loses patience.
        </h1>
        <button className="glass-panel text-white font-sans font-semibold px-10 py-5 rounded-full border border-brand-cyan/50 hover:border-brand-violet/80 hover:shadow-[0_0_40px_rgba(155,48,255,0.4)] transition-all flex items-center gap-2 text-lg group">
          Experience Tattvik <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>
    </section>
  );
}
