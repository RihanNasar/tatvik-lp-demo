'use client';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function IntelligentTextbook() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden bg-zinc-950 text-white">
      <div ref={track} className="flex h-[100dvh] items-center w-[200vw]">
        <div className="w-screen flex flex-col items-center justify-center px-6 md:px-24">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] max-w-4xl text-center">
            A Textbook That Thinks.
          </h2>
          <p className="mt-6 text-xl text-zinc-400 max-w-2xl text-center">
            Doubt solving is instantaneous. The curriculum adapts to your pace.
          </p>
        </div>
        <div className="w-screen flex items-center justify-center px-6 md:px-24">
          <div className="relative w-full max-w-5xl aspect-[16/9] border border-white/10 bg-black p-4">
            <div className="relative w-full h-full">
              <Image 
                src="/images/textbook_glowing_1780134054364.png" 
                alt="Intelligent Textbook UI" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
