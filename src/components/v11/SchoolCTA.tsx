'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SchoolCTA() {
  const container = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !cardRef.current || !textWrapperRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      // 1. Fade and slide up the main card
      tl.fromTo(cardRef.current,
        { y: 80, opacity: 0, scale: 0.98, rotationX: 5 },
        { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 1.5, ease: "expo.out", force3D: true }
      )
      // 2. Stagger text elements
      .fromTo(textWrapperRef.current.children,
        { y: 20, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, stagger: 0.1, ease: "power3.out", force3D: true },
        "-=1.1"
      );
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full py-24 md:py-32 bg-transparent relative flex flex-col items-center justify-center overflow-hidden z-20 px-6">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand-cyan/5 rounded-full blur-[120px]" />
      </div>

      {/* The Floating Glass Card */}
      <div 
        ref={cardRef} 
        className="relative z-10 w-full max-w-4xl rounded-[2.5rem] border border-white/10 bg-[#0A0C12]/60 backdrop-blur-3xl p-8 md:p-14 overflow-hidden shadow-[0_40px_100px_rgba(0,191,255,0.05)] text-center flex flex-col items-center will-change-transform perspective-[1000px]"
      >
        {/* Inner subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-brand-cyan/20 blur-[80px] pointer-events-none rounded-full" />
        
        <div ref={textWrapperRef} className="flex flex-col items-center relative z-10 w-full [transform-style:preserve-3d]">
          <h3 className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-brand-cyan font-bold mb-6 drop-shadow-[0_0_10px_rgba(0,191,255,0.3)]">
            For Schools & Institutions
          </h3>
          
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white font-light tracking-wide mb-6 leading-[1.2]">
            Are you a school wanting to<br className="hidden md:block"/> extend support after hours?
          </h2>
          
          <p className="text-white/60 text-sm md:text-base font-sans leading-relaxed max-w-2xl mb-10">
            Empower your students with a 24/7 empathetic AI guide that aligns with your curriculum and supports them when they need it most at home.
          </p>

          <button className="relative group px-10 py-4 md:py-5 rounded-full bg-white text-black border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-500 overflow-hidden flex items-center gap-4 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <span className="relative z-10 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold transition-colors">
              Partner With Us
            </span>
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      
    </section>
  );
}

