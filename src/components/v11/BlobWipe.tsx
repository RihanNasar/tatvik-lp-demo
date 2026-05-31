'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlobWipe() {
  const container = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);
  
  // Origami Map Fold Refs
  const centerSquare = useRef<HTMLDivElement>(null);
  const leftFlap = useRef<HTMLDivElement>(null);
  const rightFlap = useRef<HTMLDivElement>(null);
  const topFlap = useRef<HTMLDivElement>(null);
  const bottomFlap = useRef<HTMLDivElement>(null);
  const topLeft = useRef<HTMLDivElement>(null);
  const bottomLeft = useRef<HTMLDivElement>(null);
  const topRight = useRef<HTMLDivElement>(null);
  const bottomRight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !centerSquare.current || !contentRef.current || !shockwaveRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 1,
        }
      });

      // Initial States: Flawless Dark-Mode Blueprint Textbook
      gsap.set([centerSquare.current, leftFlap.current, rightFlap.current, topFlap.current, bottomFlap.current, topLeft.current, bottomLeft.current, topRight.current, bottomRight.current], {
        rotationX: 0,
        rotationY: 0,
        z: 0
      });

      gsap.set(contentRef.current, { opacity: 0, scale: 0.8, filter: 'blur(30px)' });
      gsap.set(shockwaveRef.current, { scale: 0, opacity: 0 });

      // TRUE 3D ORIGAMI: THE SINGULARITY FOLD
      
      // Step 1: Corners fold inward with extreme precision
      tl.to([topLeft.current, topRight.current], { 
          rotationX: 179.5, 
          duration: 1, 
          ease: 'power3.inOut' 
        }, 0)
        .to([bottomLeft.current, bottomRight.current], { 
          rotationX: -179.5, 
          duration: 1, 
          ease: 'power3.inOut' 
        }, 0)
      
      // Step 2: Top & Bottom fold inward
        .to(topFlap.current, { 
          rotationX: 179.5, 
          duration: 1, 
          ease: 'power3.inOut' 
        }, 0.8)
        .to(bottomFlap.current, { 
          rotationX: -179.5, 
          duration: 1, 
          ease: 'power3.inOut' 
        }, 0.8)
        
      // Step 3: Left & Right Flaps fold like an ancient tome closing
        .to(leftFlap.current, { 
          rotationY: 179.5, 
          duration: 1.2, 
          ease: 'expo.inOut' 
        }, 1.6)
        .to(rightFlap.current, { 
          rotationY: -179.5, 
          duration: 1.2, 
          ease: 'expo.inOut' 
        }, 1.6)
        
      // Step 4: The fully folded artifact collapses into a singularity
        .to(centerSquare.current, { 
          scale: 0, 
          rotationZ: 180, 
          rotationX: 90,
          opacity: 0, 
          duration: 1.2, 
          ease: 'back.in(2)' 
        }, 2.6)

      // Step 5: THE SHOCKWAVE (The textbook's destruction births the UI)
        .to(shockwaveRef.current, { 
          scale: 5, 
          opacity: 0.6, 
          duration: 0.8, 
          ease: 'power2.out' 
        }, 3.4)
        .to(shockwaveRef.current, { 
          opacity: 0, 
          duration: 1, 
          ease: 'power2.inOut' 
        }, 3.8)

      // Step 6: Reveal the gorgeous Tattvik interface out of the shockwave
        .to(contentRef.current, { 
          opacity: 1, 
          scale: 1, 
          filter: 'blur(0px)', 
          duration: 1.5, 
          ease: 'expo.out' 
        }, 3.6);

    }, container);
    
    return () => ctx.revert();
  }, []);

  // The Textbook Page Aesthetic
  // We use two classes: one for the container (no overflow-hidden) and one for the flaps (overflow-hidden)
  const basePaper = "absolute bg-[#FDFBF7] flex items-center justify-center [transform-style:preserve-3d] shadow-[inset_0_0_30px_rgba(0,0,0,0.03)] border border-[#E8E6DF] backface-visible text-[#222]";
  const flapPaper = `${basePaper} overflow-hidden p-6`;

  return (
    <section ref={container} className="relative w-full h-[100dvh] bg-base-void flex items-center justify-center overflow-hidden z-30 perspective-[2000px]">
      
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-base-void z-0" />

      {/* The Singularity Shockwave (Birth of the UI) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-screen">
        <div 
          ref={shockwaveRef}
          className="w-[80vw] h-[80vw] md:w-[30vw] md:h-[30vw] max-w-[400px] max-h-[400px] bg-brand-cyan rounded-full blur-[80px]"
        />
      </div>

      {/* The Revealed Content (Tattvik UI) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none pt-[140px]">
        <div ref={contentRef} className="w-full max-w-6xl px-6 flex flex-col items-center pointer-events-auto">
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-light tracking-wide mb-16 text-center drop-shadow-[0_0_30px_rgba(0,191,255,0.4)] leading-tight">
            What if school<br /><span className="text-brand-cyan">actually made sense?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
            <div className="glass-panel p-8 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/[0.03] backdrop-blur-md hover:bg-brand-cyan/[0.08] transition-colors shadow-[0_0_30px_rgba(0,191,255,0.05)]">
              <h3 className="text-brand-cyan font-sans text-xs font-medium tracking-[0.2em] mb-4 uppercase">Zero Judgment</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed">Ask the exact same question ten times. Tattvik never gets frustrated, never judges, and always adapts to your pace.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border border-brand-violet/20 bg-brand-violet/[0.03] backdrop-blur-md hover:bg-brand-violet/[0.08] transition-colors shadow-[0_0_30px_rgba(157,80,187,0.05)]">
              <h3 className="text-brand-violet font-sans text-xs font-medium tracking-[0.2em] mb-4 uppercase">Instant Clarity</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed">Complex NCERT theories are instantly broken down into simple, real-world analogies that you intuitively understand.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border border-brand-pink/20 bg-brand-pink/[0.03] backdrop-blur-md hover:bg-brand-pink/[0.08] transition-colors shadow-[0_0_30px_rgba(255,105,180,0.05)]">
              <h3 className="text-brand-pink font-sans text-xs font-medium tracking-[0.2em] mb-4 uppercase">Always Awake</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed">Stuck on a physics problem at 2 AM before the exam? Your personal tutor is awake, ready, and brilliant.</p>
            </div>
          </div>

          <button className="glass-panel px-10 py-4 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-medium text-white border border-white/20 hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all flex items-center gap-4 group shadow-[0_0_30px_rgba(0,191,255,0.15)]">
            Try Tattvik Free
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1.5 transition-transform duration-300"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* 
        TRUE NESTED ORIGAMI: THE PHYSICAL TEXTBOOK
      */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none [transform-style:preserve-3d]">
        
        {/* Center Square (Must NOT have overflow-hidden so the flaps are visible) */}
        <div ref={centerSquare} className={`${basePaper} w-[80vw] h-[40dvh] md:w-[33.334vw] md:h-[33.334dvh] z-50 shadow-[0_0_100px_rgba(255,255,255,0.05)]`}>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <h2 className="font-serif text-sm md:text-xl font-bold text-black/40 border-b border-black/20 pb-3 mb-5 tracking-[0.3em]">CHAPTER 4</h2>
             <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight text-center text-black/80">THERMODYNAMICS</h1>
          </div>
          
          {/* Top Flap */}
          <div ref={topFlap} className={`${flapPaper} w-full h-full absolute top-[-100%] left-0 origin-bottom items-end pb-10 px-8 border-b-0`}>
             <div className="w-full text-[10px] md:text-[13px] font-serif leading-relaxed text-justify text-black/70">
               <h4 className="font-sans font-bold tracking-widest text-black/90 mb-3 text-[11px]">4.2 FIRST LAW OF THERMODYNAMICS</h4>
               <p>If a quantity of heat ∆Q is supplied to a system capable of doing external work, then the quantity of heat absorbed by the system is equal to the sum of the increase in the internal energy of the system and the external work done by the system.</p>
               <div className="mt-4 font-mono text-center w-full bg-black/5 py-3 border border-black/10 rounded-sm text-black tracking-widest text-xs font-bold">
                 ∆Q = ∆U + ∆W
               </div>
             </div>
          </div>

          {/* Bottom Flap */}
          <div ref={bottomFlap} className={`${flapPaper} w-full h-full absolute bottom-[-100%] left-0 origin-top items-start pt-10 px-8 border-t-0`}>
             <div className="w-full text-[10px] md:text-[13px] font-serif leading-relaxed text-justify text-black/70">
               <p className="font-sans font-bold mb-3 tracking-widest text-[10px] uppercase text-black/90">Exercises & Analytics</p>
               <p className="mb-2">1. Calculate the work done by 1 mole of an ideal gas expanding isothermally.</p>
               <p className="mb-2">2. A system absorbs 100J of heat and performs 50J of work. Find ∆U.</p>
               <div className="w-full h-[1px] bg-black/10 my-4" />
               <p className="opacity-60 text-[9px] italic">The work done by the gas is represented by the area under the P-V curve.</p>
             </div>
          </div>

          {/* Left Flap */}
          <div ref={leftFlap} className={`${flapPaper} w-full h-full absolute top-0 left-[-100%] origin-right items-center justify-center border-r-0`}>
            <div className="w-full text-[10px] md:text-[13px] font-serif leading-relaxed text-justify px-8 text-black/70">
               <p>Thermodynamics is the branch of physics that deals with the concepts of heat and temperature and the inter-conversion of heat and other forms of energy.</p>
               <p className="mt-4">It is a macroscopic science. It deals with bulk systems and does not go into the molecular constitution of matter.</p>
               <div className="mt-6 border-l-2 border-black/20 pl-4">
                 <p className="font-sans text-[9px] uppercase tracking-widest text-black/50 mb-1 font-bold">State Variables</p>
                 <p className="font-mono text-xs font-bold text-black/80">Pressure (P), Volume (V), Temp (T)</p>
               </div>
            </div>
            
            {/* Top-Left Corner */}
            <div ref={topLeft} className={`${flapPaper} w-full h-full absolute top-[-100%] left-0 origin-bottom items-start justify-start border-b-0 border-r-0`}>
              <div className="text-[10px] font-mono tracking-widest uppercase mt-6 ml-6 text-black/40 font-bold">Page 112 • Unit 4</div>
            </div>
            
            {/* Bottom-Left Corner */}
            <div ref={bottomLeft} className={`${flapPaper} w-full h-full absolute bottom-[-100%] left-0 origin-top items-center justify-center border-t-0 border-r-0`}>
               <div className="w-[1px] h-32 bg-gradient-to-b from-black/10 to-transparent absolute top-0 left-8" />
               <div className="w-32 h-[1px] bg-gradient-to-r from-black/10 to-transparent absolute bottom-8 left-0" />
            </div>
          </div>

          {/* Right Flap */}
          <div ref={rightFlap} className={`${flapPaper} w-full h-full absolute top-0 right-[-100%] origin-left items-center justify-center border-l-0`}>
            
            {/* Physical Textbook Diagram */}
            <div className="w-full h-full flex flex-col items-center justify-center opacity-80">
              <svg width="180" height="180" viewBox="0 0 100 100" stroke="black" fill="none" strokeWidth="1">
                <rect x="20" y="20" width="60" height="60" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                
                <path d="M 20 80 Q 50 10 80 80" stroke="black" strokeWidth="1.5" />
                <path d="M 20 80 Q 50 40 80 80" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
                
                <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(0,0,0,0.2)" />
                <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(0,0,0,0.2)" />
                
                <circle cx="50" cy="50" r="2.5" fill="black" stroke="none" />
                <circle cx="80" cy="80" r="2.5" fill="black" stroke="none" />
                <circle cx="20" cy="80" r="2.5" fill="black" stroke="none" />
                
                <text x="50" y="92" fontSize="5" textAnchor="middle" stroke="none" fill="black" fontFamily="sans-serif" fontWeight="bold">Volume (V)</text>
                <text x="8" y="50" fontSize="5" textAnchor="middle" transform="rotate(-90 8 50)" stroke="none" fill="black" fontFamily="sans-serif" fontWeight="bold">Pressure (P)</text>
              </svg>
            </div>
            
            {/* Top-Right Corner */}
            <div ref={topRight} className={`${flapPaper} w-full h-full absolute top-[-100%] left-0 origin-bottom items-start justify-end border-b-0 border-l-0`}>
              <div className="text-[10px] font-mono tracking-widest uppercase mt-6 mr-6 text-black/40 font-bold">NCERT Physics</div>
            </div>
            
            {/* Bottom-Right Corner */}
            <div ref={bottomRight} className={`${flapPaper} w-full h-full absolute bottom-[-100%] left-0 origin-top items-center justify-center border-t-0 border-l-0`}>
               <div className="absolute inset-0 opacity-5 bg-[linear-gradient(black_1px,_transparent_1px),_linear-gradient(90deg,_black_1px,_transparent_1px)]" style={{ backgroundSize: '15px 15px' }} />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
