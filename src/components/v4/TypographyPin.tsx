'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TypographyPin() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!container.current || !textRef.current) return;
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray('.reveal-word');
      
      gsap.fromTo(words, 
        { opacity: 0.1, filter: 'blur(8px)', y: 20 },
        { 
          opacity: 1, 
          filter: 'blur(0px)',
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container.current,
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: 1,
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  const text = "Everyone else seemed to understand it. I just pretended I did. That ends today.";
  const words = text.split(" ");

  return (
    <section ref={container} className="h-[100dvh] w-full bg-base-void flex items-center justify-center relative overflow-hidden border-t border-white/5">
      
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
         <div className="w-[60vw] h-[60vw] bg-brand-violet/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl px-8 text-center flex flex-col items-center justify-center h-full">
        <p ref={textRef} className="font-serif text-4xl md:text-6xl text-white leading-[1.3] tracking-wide font-light flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((word, i) => (
            <span key={i} className="reveal-word">
              {word === "today." ? (
                <span className="cosmic-gradient-text font-normal tracking-tight">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
