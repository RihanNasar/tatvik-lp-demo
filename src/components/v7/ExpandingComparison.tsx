'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ExpandingComparison() {
  const container = useRef<HTMLDivElement>(null);
  const oldCard = useRef<HTMLDivElement>(null);
  const tattvikCard = useRef<HTMLDivElement>(null);
  const shockwave = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !oldCard.current || !tattvikCard.current || !shockwave.current) return;

    const ctx = gsap.context(() => {
      
      // Initial Setup
      gsap.set(tattvikCard.current, { autoAlpha: 0 });
      gsap.set(shockwave.current, { scale: 0, opacity: 0 });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=100%', // Even shorter scroll distance for immediate action
          pin: true,
          scrub: 0.2, // Drastically reduced smoothing for a much crispier feel
        }
      });

      // 1. Initial Pause
      tl.to({}, { duration: 0.2 });

      // 2. The Singularity Suck (Violently crush and spin the old card into a black hole)
      tl.to(oldCard.current, {
        scale: 0,
        rotationZ: -720, // Reduced spins for a faster feel
        rotationX: 90,
        rotationY: 90,
        filter: 'blur(20px) sepia(100%) hue-rotate(-90deg) brightness(200%)',
        opacity: 0,
        duration: 1.5,
        ease: 'power4.inOut' // Faster build and release
      });

      // 3. The Shockwave Pulse (Explodes out from the singularity)
      tl.to(shockwave.current, {
        scale: 60,
        opacity: 1,
        duration: 0.4,
        ease: 'expo.in'
      }, "-=0.3"); // Starts right at the collapse

      tl.to(shockwave.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      // 4. The Tattvik Eruption (Shoots out of the explosion and snaps into place)
      tl.fromTo(tattvikCard.current,
        {
          scale: 0.2,
          rotationZ: 180,
          z: -1000,
          opacity: 0,
          autoAlpha: 1,
          filter: 'blur(30px) brightness(300%)'
        },
        {
          scale: 1,
          rotationZ: 0,
          z: 0,
          opacity: 1,
          filter: 'blur(0px) brightness(100%)',
          duration: 1.5,
          ease: 'back.out(1.2)' // Crisp snap with slight overshoot, no long wobble
        },
        "-=0.9" // Snap out during the shockwave
      );

      // 5. Final Hold
      tl.to({}, { duration: 0.5 });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="h-[100dvh] w-full bg-[#02040A] relative flex items-center justify-center overflow-hidden perspective-[2000px] [transform-style:preserve-3d]">
      
      {/* THE SHOCKWAVE RING (z-10) */}
      <div 
        ref={shockwave}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full border-[10px] border-brand-cyan bg-brand-cyan/20 blur-[5px] pointer-events-none z-10"
      />

      {/* THE OLD WAY CARD (z-20) - Dark Mode Flush Design */}
      <div ref={oldCard} className="absolute inset-0 z-20 flex items-center justify-center w-full h-full px-6">
        <div className="w-full max-w-4xl h-auto md:h-[400px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 p-3 rounded-2xl shadow-2xl border border-white/5 bg-[#05060A]/90 backdrop-blur-3xl grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100">
          
          {/* Hero Bento Box */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden border border-white/5 bg-white/[0.02]">
            <Image src="/teen-chibi-traditional.png" fill className="object-cover opacity-60 mix-blend-luminosity" alt="Traditional System" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05060A] via-[#05060A]/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1.5 font-medium">The Old Paradigm</h3>
              <h2 className="text-2xl md:text-4xl text-white font-serif tracking-tight leading-tight drop-shadow-md">Traditional System</h2>
            </div>
          </div>

          {/* Top Right Bento */}
          <div className="relative rounded-xl border border-white/5 bg-white/[0.02] p-4 md:p-5 flex flex-col justify-center">
            <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mb-3 text-white/30 text-[10px]">01</div>
            <h4 className="text-white/60 text-xs md:text-sm font-medium mb-1.5">Standardized Pacing</h4>
            <p className="text-white/30 text-[10px] md:text-xs font-light leading-relaxed">Designed for the average student. You must adapt to the class.</p>
          </div>

          {/* Bottom Right Bento */}
          <div className="relative rounded-xl border border-white/5 bg-white/[0.02] p-4 md:p-5 flex flex-col justify-center">
            <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mb-3 text-white/30 text-[10px]">02</div>
            <h4 className="text-white/60 text-xs md:text-sm font-medium mb-1.5">Crowded Classrooms</h4>
            <p className="text-white/30 text-[10px] md:text-xs font-light leading-relaxed">High student-to-teacher ratios limit personalized feedback.</p>
          </div>
        </div>
      </div>

      {/* TATTVIK AI CARD (z-30) - Dark Mode Flush Design */}
      {/* Rendered ON the new dark background wall after it finishes pushing */}
      <div ref={tattvikCard} className="absolute inset-0 z-30 flex items-center justify-center w-full h-full px-6 pointer-events-none">
        <div className="w-full max-w-4xl h-auto md:h-[400px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 p-3 rounded-2xl shadow-[0_30px_100px_rgba(0,191,255,0.15)] border border-brand-cyan/20 bg-[#0A0C12]/90 backdrop-blur-3xl pointer-events-auto">
          
          {/* Hero Bento Box */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden border border-brand-cyan/20 bg-brand-cyan/[0.02] group">
            <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(0,191,255,0.15),transparent_50%)] blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <Image src="/teen-chibi-tattvik.png" fill className="object-cover opacity-90" alt="Tattvik AI" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C12] via-transparent to-[#0A0C12]/50 pointer-events-none" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
              <h3 className="text-[9px] uppercase tracking-[0.2em] text-brand-cyan mb-1.5 font-bold drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]">The Future</h3>
              <h2 className="text-2xl md:text-4xl text-white font-serif tracking-tight leading-tight drop-shadow-[0_0_15px_rgba(0,191,255,0.4)]">Tattvik AI</h2>
            </div>
          </div>

          {/* Top Right Bento */}
          <div className="relative rounded-xl border border-brand-cyan/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors p-4 md:p-5 flex flex-col justify-center overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-brand-cyan/10 rounded-full blur-xl pointer-events-none" />
            <div className="w-6 h-6 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center shrink-0 mb-3 text-brand-cyan text-xs">✦</div>
            <h4 className="text-white text-xs md:text-sm font-medium mb-1.5">Mastery-Based</h4>
            <p className="text-white/50 text-[10px] md:text-xs font-light leading-relaxed">Adapts perfectly to your pace. We never move on until you completely understand.</p>
          </div>

          {/* Bottom Right Bento */}
          <div className="relative rounded-xl border border-brand-cyan/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors p-4 md:p-5 flex flex-col justify-center overflow-hidden">
            <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-brand-pink/10 rounded-full blur-xl pointer-events-none" />
            <div className="w-6 h-6 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center shrink-0 mb-3 text-brand-cyan text-xs">✦</div>
            <h4 className="text-white text-xs md:text-sm font-medium mb-1.5">Zero Judgment</h4>
            <p className="text-white/50 text-[10px] md:text-xs font-light leading-relaxed">Ask the exact same question ten times. I never get frustrated, and I never judge.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
