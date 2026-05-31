'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CosmicCollapseFooter() {
  const container = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !wipeRef.current || !glowRef.current) return;
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        }
      });

      // 1. Collapse the white background into a tiny dot
      tl.fromTo(wipeRef.current,
        { clipPath: 'circle(150% at center)' },
        { clipPath: 'circle(0% at center)', ease: 'none', duration: 1 }
      );
      
      // 2. Explode the twilight blur
      tl.fromTo(glowRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'power2.out', duration: 0.5 }
      );

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="h-[100dvh] w-full bg-base-void relative overflow-hidden flex items-center justify-center">
      
      {/* Dark Void Base Content (Revealed when white collapses) */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center px-6">
         
         {/* Twilight Explosion Glows */}
         <div ref={glowRef} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
           <div className="absolute w-[60vw] h-[60vw] bg-brand-cyan/20 rounded-full blur-[150px] -translate-x-1/4" />
           <div className="absolute w-[60vw] h-[60vw] bg-brand-violet/20 rounded-full blur-[150px] translate-x-1/4" />
           <div className="absolute w-[40vw] h-[40vw] bg-brand-pink/20 rounded-full blur-[120px]" />
         </div>

         <h2 className="relative z-10 font-serif text-6xl md:text-[100px] font-light text-white tracking-tighter mb-16 leading-[1.1]">
           Your journey <br/>begins now.
         </h2>
         
         <button className="relative z-10 glass-panel px-12 py-5 rounded-full font-sans text-sm uppercase tracking-[0.3em] font-medium text-white border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all flex items-center gap-4 group backdrop-blur-md">
           Start For Free
           <span className="group-hover:translate-x-2 transition-transform text-lg">→</span>
         </button>
      </div>

      {/* The White Overlay that collapses */}
      <div 
        ref={wipeRef} 
        className="absolute inset-0 z-20 bg-[#F8F8FF]"
      />

    </section>
  );
}
