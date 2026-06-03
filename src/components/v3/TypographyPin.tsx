'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TypographyPin() {
  const container = useRef<HTMLDivElement>(null);
  const beat1 = useRef<HTMLParagraphElement>(null);
  const beat2 = useRef<HTMLParagraphElement>(null);
  const beat3 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
        }
      });

      tl.fromTo(beat1.current, { opacity: 0, y: 20 }, { opacity: 0.4, y: 0, duration: 1 })
        .to(beat1.current, { opacity: 0.2, duration: 0.5 })
        .fromTo(beat2.current, { opacity: 0, y: 20 }, { opacity: 0.4, y: 0, duration: 1 }, "-=0.3")
        .to([beat1.current, beat2.current], { opacity: 0.1, duration: 0.5 })
        .fromTo(beat3.current, { opacity: 0, scale: 0.9, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1.5 });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="h-[100dvh] w-full bg-transparent flex items-center justify-center border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <p ref={beat1} className="font-serif text-3xl md:text-5xl text-white opacity-0 leading-[1.1] tracking-tight">
          "Everyone else seemed to understand it."
        </p>
        <p ref={beat2} className="font-serif text-3xl md:text-5xl text-white opacity-0 leading-[1.1] tracking-tight">
          "I just pretended I did."
        </p>
        <p ref={beat3} className="font-serif text-5xl md:text-7xl font-bold cosmic-gradient-text mt-8 opacity-0 tracking-tighter leading-[1.1]">
          That ends today.
        </p>
      </div>
    </section>
  );
}

