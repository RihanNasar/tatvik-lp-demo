'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TrustMarquee() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !textRef.current || !marqueeRef.current) return;
    
    // Split text into words for shattering
    const words = textRef.current.querySelectorAll('.word');
    
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

      // WTF Animation: 3D Text Shatter & Reform
      tl.fromTo(words,
        { 
          opacity: 0, 
          z: () => gsap.utils.random(-1500, 1000), 
          x: () => gsap.utils.random(-1000, 1000), 
          y: () => gsap.utils.random(-1000, 1000), 
          rotationX: () => gsap.utils.random(-360, 360),
          rotationY: () => gsap.utils.random(-360, 360),
          rotationZ: () => gsap.utils.random(-360, 360),
          scale: () => gsap.utils.random(0.1, 4),
          filter: 'blur(20px)'
        },
        { 
          opacity: 1, 
          z: 0, x: 0, y: 0, 
          rotationX: 0, rotationY: 0, rotationZ: 0, 
          scale: 1,
          filter: 'blur(0px)',
          stagger: 0.05, 
          ease: 'power3.out',
          duration: 2
        }
      );

      // Author fades in
      tl.fromTo(authorRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        "-=0.5"
      );

      // Marquee speeds up violently on scrub
      tl.to(marqueeRef.current, { x: '-=300px', duration: 2, ease: 'power1.inOut' }, "<");

    }, container);
    
    return () => ctx.revert();
  }, []);

  const quote = `"I used to spend hours re-reading the same NCERT chapter. Now I just ask Tattvik and get it in two minutes."`;

  return (
    <section ref={container} className="relative w-full h-[100dvh] overflow-hidden bg-base-void flex flex-col items-center justify-center pt-[100px] md:pt-[140px] perspective-[2000px]">
      
      {/* Dark Void Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10 [transform-style:preserve-3d]">
        <p ref={textRef} className="font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-[1.4] mb-8 text-white/90 tracking-wide flex flex-wrap justify-center gap-x-2 gap-y-1">
          {quote.split(" ").map((word, i) => (
             <span key={i} className="word inline-block drop-shadow-[0_0_10px_rgba(0,212,255,0.3)]">
               {word}
             </span>
          ))}
        </p>
        <div ref={authorRef} className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-cyan font-medium mb-32">
          Rahul K., Class 11 Student
        </div>
      </div>

      {/* Dark Themed Marquee */}
      <div className="w-full absolute bottom-10 left-0 py-8 flex flex-col items-center border-t border-b border-white/5 bg-white/[0.01] backdrop-blur-md">
         <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium mb-8">Trusted by 100+ Schools</p>
         
         <div className="w-full max-w-[100vw] overflow-hidden flex whitespace-nowrap" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
           <div ref={marqueeRef} className="animate-[scroll_30s_linear_infinite] flex gap-20 items-center font-serif text-3xl md:text-5xl text-white/5 font-bold tracking-tighter">
              <span>NCERT Aligned</span>
              <span>Class 9 to 12</span>
              <span>Zero Cost</span>
              <span>CBSE Ready</span>
              <span>Made in India</span>
              <span>Hindi + English</span>
              <span>Personalized AI</span>
              <span>Exam Focused</span>
              {/* Duplicate for infinite loop */}
              <span>NCERT Aligned</span>
              <span>Class 9 to 12</span>
              <span>Zero Cost</span>
           </div>
         </div>
      </div>
      
    </section>
  );
}
