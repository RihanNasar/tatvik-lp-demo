'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
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
          scrub: 0.2,
        }
      });

      // Header fades out as the first card drops
      tl.to(headerRef.current, { opacity: 0, y: -50, duration: 0.5 });

      panels.forEach((panel, i) => {
        // Apple Keynote Style Smooth Rise & Scale
        tl.fromTo(panel,
          { 
            opacity: 0, 
            y: "40vh", 
            scale: 0.85,
            z: -500,
            rotationX: 10
          },
          { 
            opacity: 1, 
            y: "0vh", 
            scale: 1,
            z: i * 50, // Slight stacking offset
            rotationX: 0, 
            duration: 1.5, 
            ease: 'power3.out' 
          }
        );
        
        // Let the card sit for a moment before the next one comes, smooth fade out backwards
        if (i < panels.length - 1) {
          tl.to(panel, {
            scale: 0.9,
            y: `-${15 + (i * 10)}vh`,
            opacity: 0.4,
            duration: 0.8,
            ease: 'power2.inOut'
          }, "+=0.5");
        }
      });

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full h-[100dvh] bg-transparent flex flex-col items-center justify-center px-6 relative z-20 overflow-hidden perspective-[2000px]">
      
      <div ref={headerRef} className="absolute top-[100px] md:top-[140px] text-center max-w-2xl z-0 px-6 w-full">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-white font-light tracking-wide mb-4 md:mb-6">
          Everything a tutor does.<br />At a fraction of the cost.
        </h2>
        <p className="text-white/50 text-sm md:text-base font-sans leading-relaxed">
          Built for every student, from confused to confident.
        </p>
      </div>

      <div className="w-full max-w-5xl h-full relative [transform-style:preserve-3d]">
        
        {/* Panel 1 */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center w-full">
          <div className="feature-panel pointer-events-auto w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-8 bg-white/[0.02] backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(0,191,255,0.1)] max-h-[85vh] overflow-visible will-change-transform transform-gpu">
            <div className="flex-1 w-full">
              <p className="text-brand-cyan/80 text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Understand Anything</p>
              <h3 className="font-serif text-2xl md:text-4xl text-white font-light mb-4">Complex concepts, explained simply.</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm">Ask me anything from any chapter in your syllabus. I will respond with clear language, relevant analogies, and exactly as much detail as you need.</p>
            </div>
            <div className="flex-1 w-full flex justify-center items-center relative perspective-[2000px] group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-cyan/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />
              
              <div 
                className="relative z-10 w-full max-w-[850px] transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:![transform:scale(1.4)_rotateX(10deg)_rotateY(15deg)_rotateZ(-1deg)]"
                style={{ transform: 'scale(1.35) rotateX(15deg) rotateY(20deg) rotateZ(-2deg)' }}
              >
                <img src="/plant-animal-cells-white-solid.png" alt="Complex concepts" className="w-full h-auto block m-0 p-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center w-full">
          <div className="feature-panel pointer-events-auto w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-8 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(155,48,255,0.1)] max-h-[85vh] overflow-visible will-change-transform transform-gpu">
            <div className="flex-1 w-full">
              <p className="text-brand-violet/80 text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Practice with Purpose</p>
              <h3 className="font-serif text-2xl md:text-4xl text-white font-light mb-4">Questions that actually prepare you.</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm">Get quizzed on exactly what you just learned. I will generate questions in the style of your exam board, with instant explanations.</p>
            </div>
            <div className="flex-1 w-full flex justify-center items-center relative perspective-[2000px] group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-violet/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />
              
              <div 
                className="relative z-10 w-full max-w-[850px] rounded-[2rem] p-2 bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:!transform-none group-hover:scale-105"
                style={{ transform: 'rotateX(15deg) rotateY(-20deg) rotateZ(2deg)' }}
              >
                <div className="rounded-[1.5rem] overflow-hidden border border-white/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-50 pointer-events-none z-20 mix-blend-overlay" />
                  <Image src="/apple-quiz-card.png" alt="Questions that actually prepare you" width={1000} height={750} className="w-full h-auto object-contain relative z-10 bg-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center w-full">
          <div className="feature-panel pointer-events-auto w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-8 bg-white/[0.02] backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(242,165,49,0.1)] max-h-[85vh] overflow-visible will-change-transform transform-gpu">
            <div className="flex-1 w-full">
              <p className="text-brand-saffron/80 text-[10px] font-medium tracking-[0.2em] uppercase mb-4">Know What You Know</p>
              <h3 className="font-serif text-2xl md:text-4xl text-white font-light mb-4">Your strengths, mapped clearly.</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-sm">See exactly which chapters are solid and where you need another pass, so you study smarter, not longer.</p>
            </div>
            <div className="flex-1 w-full flex justify-center items-center relative perspective-[2000px] group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-saffron/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />
              
              <div 
                className="relative z-10 w-full max-w-[850px] rounded-[2rem] p-2 bg-white/[0.03] backdrop-blur-xl shadow-[0_60px_120px_-20px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:![transform:scale(1.05)_rotateX(20deg)_rotateY(-5deg)_rotateZ(1deg)] group-focus:![transform:scale(1.05)_rotateX(20deg)_rotateY(-5deg)_rotateZ(1deg)]"
                style={{ transform: 'scale(1.1) rotateX(25deg) rotateY(-10deg) rotateZ(2deg)' }}
              >
                <div className="rounded-[1.5rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-30 pointer-events-none z-20 mix-blend-overlay" />
                  <Image src="/media__1780481802793.png" alt="Your strengths, mapped clearly" width={1000} height={750} className="w-full h-auto object-contain relative z-10 bg-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

