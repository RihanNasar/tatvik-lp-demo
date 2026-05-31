'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TypographicMask() {
  const container = useRef<HTMLDivElement>(null);
  const quote1Ref = useRef<HTMLDivElement>(null);
  const quote2Ref = useRef<HTMLDivElement>(null);
  const quote3Ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !quote1Ref.current || !quote2Ref.current || !quote3Ref.current || !glowRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=300%', // Much longer scroll area for the 3-part story
          pin: true,
          scrub: 1,
        }
      });

      // Initial States
      gsap.set([quote1Ref.current, quote2Ref.current, quote3Ref.current], { 
        opacity: 0, 
        y: 30,
        filter: 'blur(15px)' 
      });

      // Part 1: Everyone else understood.
      tl.to(quote1Ref.current, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 })
        .to(quote1Ref.current, { opacity: 0, y: -30, filter: 'blur(15px)', duration: 1 }, "+=0.5")
      
      // Part 2: I just pretended I did.
        .to(quote2Ref.current, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 })
        .to(quote2Ref.current, { opacity: 0, y: -30, filter: 'blur(15px)', duration: 1 }, "+=0.5")

      // Part 3: That ends today. (Base Reveal)
        .to(quote3Ref.current, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 })
      
      // Part 4: Cyan/Universe Color Fill Up (Bulletproof backgroundSize animation)
        .fromTo(glowRef.current, 
          { backgroundSize: '100% 0%' }, 
          { backgroundSize: '100% 100%', duration: 2.5, ease: 'none' }
        );

    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="h-[100dvh] w-full bg-base-void flex flex-col items-center justify-center relative overflow-hidden px-6 border-t border-white/5 pt-[60px]">
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center -mt-20">
        
        {/* Quote 1 */}
        <div ref={quote1Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <p className="font-serif text-2xl sm:text-3xl md:text-5xl text-white/80 font-light tracking-wide text-center">
            Everyone else understood.
          </p>
        </div>

        {/* Quote 2 */}
        <div ref={quote2Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <p className="font-serif text-2xl sm:text-3xl md:text-5xl text-white/80 font-light tracking-wide text-center">
            I just pretended I did.
          </p>
        </div>

        {/* Quote 3: That ends today. */}
        <div ref={quote3Ref} className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <div className="relative inline-block whitespace-nowrap">
             {/* Stroke Base */}
             <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
               That ends today.
             </h2>
             
             {/* The Fill - Animating backgroundSize instead of buggy wrappers */}
             <h2 
               ref={glowRef}
               className="absolute top-0 left-0 w-full h-full font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-transparent whitespace-nowrap bg-clip-text" 
               style={{ 
                 backgroundImage: 'linear-gradient(to top, #00d2ff, #3a7bd5, #9d50bb)',
                 backgroundPosition: 'bottom',
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: '100% 0%',
                 WebkitTextStroke: '0px'
               }}
             >
               That ends today.
             </h2>
          </div>
        </div>

      </div>
    </section>
  );
}
