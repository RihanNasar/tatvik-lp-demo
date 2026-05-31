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
          end: '+=400%', // Massive scroll distance to allow the user to control this epic sequence
          pin: true,
          scrub: 1,
        }
      });

      // 1. Initial Pause
      tl.to({}, { duration: 0.5 });

      // 2. The Singularity Suck (Violently crush and spin the old card into a black hole)
      tl.to(oldCard.current, {
        scale: 0,
        rotationZ: -1080, // 3 full extreme spins
        rotationX: 180,
        rotationY: 180,
        filter: 'blur(30px) sepia(100%) hue-rotate(-90deg) brightness(200%)', // Colors distort as it gets sucked in
        opacity: 0,
        duration: 2,
        ease: 'power4.in' // Extremely slow start, incredibly violent finish
      });

      // 3. The Shockwave Pulse (Explodes out from the singularity)
      tl.to(shockwave.current, {
        scale: 50,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.in'
      }, "-=0.2"); // Starts just before the suck finishes

      tl.to(shockwave.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });

      // 4. The Tattvik Eruption (Shoots out of the explosion and bounces into place)
      tl.fromTo(tattvikCard.current,
        {
          scale: 0,
          rotationZ: 1080,
          z: -3000,
          opacity: 0,
          autoAlpha: 1,
          filter: 'blur(50px) brightness(400%)'
        },
        {
          scale: 1,
          rotationZ: 0,
          z: 0,
          opacity: 1,
          filter: 'blur(0px) brightness(100%)',
          duration: 3,
          ease: 'elastic.out(1.2, 0.4)' // Violent physical bounce
        },
        "-=1.2" // Shoots out exactly as the shockwave reaches its peak
      );

      // 5. Final Hold
      tl.to({}, { duration: 1 });

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
        <div className="w-full max-w-4xl h-auto max-h-[90vh] md:h-[400px] overflow-y-auto overflow-x-hidden md:overflow-hidden flex flex-col md:flex-row rounded-3xl shadow-2xl border border-white/10 bg-[#0A0C12]/90 backdrop-blur-3xl">
          <div className="w-full md:w-1/2 h-[150px] sm:h-[200px] md:h-full relative border-b md:border-b-0 md:border-r border-white/10 shrink-0">
            <Image src="/chibi-stressed.png" fill className="object-cover opacity-80" alt="Traditional" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C12] to-transparent md:hidden" />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
             <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3 font-medium">The Old Paradigm</h3>
             <h2 className="text-3xl md:text-4xl text-white font-serif mb-6 tracking-tight">Traditional</h2>
             <ul className="space-y-4 text-white/50 text-sm font-light leading-relaxed">
                <li>Rigid pacing that inevitably leaves students behind.</li>
                <li>Rote memorization over deep conceptual clarity.</li>
                <li>Inherent fear of judgment for asking questions.</li>
             </ul>
          </div>
        </div>
      </div>

      {/* TATTVIK AI CARD (z-30) - Dark Mode Flush Design */}
      {/* Rendered ON the new dark background wall after it finishes pushing */}
      <div ref={tattvikCard} className="absolute inset-0 z-30 flex items-center justify-center w-full h-full px-6 pointer-events-none">
        <div className="w-full max-w-4xl h-auto max-h-[90vh] md:h-[400px] overflow-y-auto overflow-x-hidden md:overflow-hidden flex flex-col md:flex-row-reverse rounded-3xl shadow-[0_30px_100px_rgba(0,191,255,0.15)] border border-brand-cyan/20 bg-[#0A0C12]/90 backdrop-blur-3xl">
          <div className="w-full md:w-1/2 h-[150px] sm:h-[200px] md:h-full relative border-b md:border-b-0 md:border-l border-brand-cyan/20 shrink-0">
            <Image src="/chibi-chatbot.png" fill className="object-cover opacity-90" alt="Tattvik AI" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C12] to-transparent md:hidden" />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center pointer-events-auto">
             <h3 className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan mb-3 font-bold drop-shadow-[0_0_10px_rgba(0,191,255,0.3)]">The Future</h3>
             <h2 className="text-3xl md:text-4xl text-white font-serif mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(0,191,255,0.2)]">Tattvik AI</h2>
             <ul className="space-y-4 text-white/80 text-sm font-light leading-relaxed">
                <li className="flex items-start"><span className="text-brand-cyan mr-3 mt-0.5">✦</span> Mastery-based progression perfectly adapted to you.</li>
                <li className="flex items-start"><span className="text-brand-cyan mr-3 mt-0.5">✦</span> Complex theories mapped to real-world analogies.</li>
                <li className="flex items-start"><span className="text-brand-cyan mr-3 mt-0.5">✦</span> Zero judgment. Ask the exact same question ten times.</li>
             </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
