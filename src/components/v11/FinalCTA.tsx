'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const container = useRef<HTMLDivElement>(null);
  const horizonRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!container.current || !horizonRef.current || !glowRef.current || !textWrapperRef.current || !buttonRef.current) return;
    
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });

      // 1. The Horizon Line slices across the screen
      tl.fromTo(horizonRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power4.inOut" }
      )
      // 2. The Volumetric Glow erupts from the line
      .fromTo(glowRef.current,
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 2, ease: "expo.out" },
        "-=0.5"
      )
      // 3. The Typography rises out of the abyss
      .fromTo(textWrapperRef.current!.children,
        { y: 100, opacity: 0, rotationX: -15 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" },
        "-=1.5"
      )
      // 4. The sleek button materializes
      .fromTo(buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full min-h-[70dvh] md:min-h-[80dvh] bg-[#02040A] relative flex flex-col items-center justify-center overflow-hidden z-20">
      
      {/* Deep Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(0,191,255,0.05)_0%,_rgba(0,0,0,0)_70%)]" />

      {/* The Infinite Horizon Line & Glow */}
      <div className="absolute top-[65%] w-full flex justify-center z-0 pointer-events-none">
        {/* The solid 1px line */}
        <div ref={horizonRef} className="w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent origin-center" />
        {/* The volumetric blur sitting on the line */}
        <div ref={glowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[300px] bg-brand-cyan/15 blur-[100px] rounded-full origin-bottom mix-blend-screen" />
      </div>

      {/* Pure Editorial Content - No Cards, No Borders */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-6 pb-20">
        
        <div ref={textWrapperRef} className="flex flex-col items-center perspective-[1000px]">
          <h3 className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-brand-cyan font-bold mb-8 drop-shadow-[0_0_10px_rgba(0,191,255,0.3)] [transform-style:preserve-3d]">
            Built for students, not systems.
          </h3>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide mb-8 leading-[1.1] [transform-style:preserve-3d]">
            Learning shouldn't feel<br/>like a race.
          </h2>
          
          <p className="text-white/60 text-sm md:text-base font-sans leading-relaxed max-w-xl mb-12 [transform-style:preserve-3d]">
            I am not here to grade you or rush you. I'm here to sit with you, patiently explain concepts, and help you actually understand the subject at your own pace.
          </p>
        </div>

        {/* The Minimalist Dark Button */}
        <button ref={buttonRef} className="relative group px-10 py-4 md:py-5 rounded-full bg-[#02040A] border border-white/10 hover:border-brand-cyan/50 transition-all duration-500 overflow-hidden flex items-center gap-4 hover:shadow-[0_0_40px_rgba(0,191,255,0.2)]">
          <span className="relative z-10 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white group-hover:text-brand-cyan transition-colors">Start Learning</span>
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 text-white group-hover:text-brand-cyan"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <footer className="absolute bottom-0 w-full border-t border-white/5 px-6 py-8 flex flex-col md:flex-row items-center justify-between text-[9px] text-white/30 font-sans tracking-widest uppercase gap-4 z-10">
        <span>© 2025 Tattvik AI. Built for the future.</span>
        <span className="flex gap-6"><a className="hover:text-white/70 transition-colors cursor-pointer">Privacy</a> <a className="hover:text-white/70 transition-colors cursor-pointer">Terms</a> <a className="hover:text-white/70 transition-colors cursor-pointer">Contact</a></span>
      </footer>

    </section>
  );
}
