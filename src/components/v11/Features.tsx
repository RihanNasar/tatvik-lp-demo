'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !headerRef.current) return;
    const panels = container.current.querySelectorAll('.feature-panel');

    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=400%', // Massive scroll distance to allow 3 deep-space cards to drop
          pin: true,
          scrub: 1,
        }
      });

      // Header fades out as the first card drops
      tl.to(headerRef.current, { opacity: 0, y: -50, filter: 'blur(10px)', duration: 0.5 });

      panels.forEach((panel, i) => {
        // Deep Space Drop
        tl.fromTo(panel,
          { 
            opacity: 0, 
            y: "-100vh", 
            z: -2000, 
            rotationX: 45, 
            filter: 'blur(30px)' 
          },
          { 
            opacity: 1, 
            y: "0vh", 
            z: i * 50, // Slight stacking offset
            rotationX: 0, 
            filter: 'blur(0px)', 
            duration: 1, 
            ease: 'expo.out' 
          }
        );
        
        // Let the card sit for a moment before the next one comes
        if (i < panels.length - 1) {
          tl.to(panel, {
            scale: 0.95 - (i * 0.05),
            y: `-${20 + (i * 10)}vh`,
            opacity: 0.5,
            filter: 'blur(5px)',
            duration: 0.5,
            ease: 'power2.inOut'
          }, "+=0.5");
        }
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full h-[100dvh] bg-base-void flex flex-col items-center justify-center px-6 relative z-20 overflow-hidden perspective-[2000px]">
      
      <div ref={headerRef} className="absolute top-[100px] md:top-[140px] text-center max-w-2xl z-0 px-6 w-full">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white font-light tracking-wide mb-4 md:mb-6">
          Everything a tutor does.<br />At a fraction of the cost.
        </h2>
        <p className="text-white/50 text-sm md:text-base font-sans leading-relaxed">
          Built for every CBSE student in India, from confused to confident.
        </p>
      </div>

      <div className="w-full max-w-5xl h-full relative [transform-style:preserve-3d]">
        
        {/* Panel 1 */}
        <div className="feature-panel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-8 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(0,191,255,0.1)] max-h-[85vh] overflow-y-auto overflow-x-hidden">
          <div className="flex-1 w-full">
            <p className="text-brand-cyan/80 text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Understand Anything</p>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-light mb-4">Complex concepts, explained simply.</h3>
            <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm">Ask anything from any NCERT chapter. Tattvik responds with clear language, relevant analogies, and exactly as much detail as you need.</p>
          </div>
          <div className="flex-1 w-full flex flex-col gap-4">
             <div className="flex gap-4 items-start">
               <div className="w-6 h-6 rounded-full bg-brand-saffron/20 text-brand-saffron flex items-center justify-center text-[10px] shrink-0">You</div>
               <div className="bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-white/80 text-xs md:text-sm">I don&apos;t get photosynthesis at all.</div>
             </div>
             <div className="flex gap-4 items-start">
               <div className="w-6 h-6 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center text-[10px] shrink-0">AI</div>
               <div className="bg-brand-cyan/10 rounded-xl px-4 py-3 text-brand-cyan text-xs md:text-sm">Think of a leaf as a tiny solar kitchen. Sunlight is the energy source, water and CO₂ are the ingredients, and glucose is the meal it prepares for the plant.</div>
             </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="feature-panel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-8 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(155,48,255,0.1)] max-h-[85vh] overflow-y-auto overflow-x-hidden">
          <div className="flex-1 w-full">
            <p className="text-brand-violet/80 text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Practice with Purpose</p>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-light mb-4">Questions that actually prepare you.</h3>
            <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm">Get quizzed on exactly what you just learned. Tattvik generates questions in the style of your exam board, with instant explanations.</p>
          </div>
          <div className="flex-1 w-full">
             <div className="text-white/90 font-medium text-sm mb-6">Which organelle is called the powerhouse of the cell?</div>
             <div className="flex items-center gap-3 border border-white/10 bg-white/[0.01] rounded-xl px-4 py-3 mb-2 text-white/60 text-xs"><div className="w-2 h-2 rounded-full border border-white/20"/> Nucleus</div>
             <div className="flex items-center gap-3 border border-brand-violet/40 bg-brand-violet/10 rounded-xl px-4 py-3 mb-2 text-white/90 text-xs"><div className="w-2 h-2 rounded-full bg-brand-violet"/> Mitochondria ✓</div>
             <div className="flex items-center gap-3 border border-white/10 bg-white/[0.01] rounded-xl px-4 py-3 mb-2 text-white/60 text-xs"><div className="w-2 h-2 rounded-full border border-white/20"/> Ribosome</div>
             <div className="flex items-center gap-3 border border-white/10 bg-white/[0.01] rounded-xl px-4 py-3 text-white/60 text-xs"><div className="w-2 h-2 rounded-full border border-white/20"/> Vacuole</div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="feature-panel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-8 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(242,165,49,0.1)] max-h-[85vh] overflow-y-auto overflow-x-hidden">
          <div className="flex-1 w-full">
            <p className="text-brand-saffron/80 text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Know What You Know</p>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-light mb-4">Your strengths, mapped clearly.</h3>
            <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm">See exactly which chapters are solid and where you need another pass, so you study smarter, not longer.</p>
          </div>
          <div className="flex-1 w-full">
             <p className="text-[10px] tracking-[0.1em] uppercase text-white/40 mb-6">Chapter Progress</p>
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                 <div className="text-white/60 text-[10px] mb-3">Cell Biology</div>
                 <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2"><div className="h-full bg-brand-saffron w-[85%] rounded-full"/></div>
               </div>
               <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                 <div className="text-white/60 text-[10px] mb-3">Osmosis</div>
                 <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2"><div className="h-full bg-brand-saffron w-[62%] rounded-full"/></div>
               </div>
               <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                 <div className="text-white/60 text-[10px] mb-3">Photosynthesis</div>
                 <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2"><div className="h-full bg-brand-cyan w-[48%] rounded-full"/></div>
               </div>
               <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                 <div className="text-white/60 text-[10px] mb-3">Heredity</div>
                 <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2"><div className="h-full bg-brand-saffron w-[92%] rounded-full"/></div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
