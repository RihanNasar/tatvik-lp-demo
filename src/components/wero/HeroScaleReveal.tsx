'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScaleReveal() {
  const container = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const textContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !imageContainer.current || !textContent.current) return;
    
    // Ensure the animation starts with rounded corners and scales up to 1
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
        animation: gsap.timeline()
          .to(textContent.current, { opacity: 0, y: -100, duration: 0.5 })
          .to(imageContainer.current, { 
            scale: 1, 
            borderRadius: '0px', 
            borderWidth: '0px',
            duration: 1 
          }, '<')
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-[100dvh] w-full bg-brand-bg overflow-hidden flex flex-col items-center justify-center">
      <div ref={textContent} className="text-center z-10 px-6 max-w-5xl mt-[-10vh]">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[1] mb-8">
          The Intelligent<br />
          <span className="text-brand-cyan drop-shadow-[0_0_30px_rgba(0,255,255,0.6)]">Textbook</span>.
        </h1>
        <p className="text-2xl md:text-3xl text-slate-400 font-medium max-w-3xl mx-auto">
          Simplifying learning. Making it interactive, fun, and deeply personalized.
        </p>
      </div>

      <div 
        ref={imageContainer} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] rounded-[6rem] md:rounded-[12rem] overflow-hidden scale-[0.3] z-20 shadow-[0_0_150px_rgba(160,32,240,0.6)] border-[12px] border-brand-purple/40"
        style={{ transformOrigin: '50% 50%' }}
      >
        <Image 
          src="/images/textbook_glowing_1780134054364.png" 
          alt="Tattvik App Dashboard" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-bg/20" />
      </div>
    </section>
  );
}
