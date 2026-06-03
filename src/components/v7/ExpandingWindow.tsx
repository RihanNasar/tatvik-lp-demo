'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExpandingWindow() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const bubble1 = useRef<HTMLDivElement>(null);
  const bubble2 = useRef<HTMLDivElement>(null);
  const atomBase = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
        }
      });

      // 1. Text snaps into focus from a deep blur
      tl.fromTo(textRef.current,
        { opacity: 0, scale: 1.2, filter: 'blur(30px)', y: 50 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1, ease: 'expo.out' }
      )
      // 2. The entire macOS window swings up from deep 3D space
      .fromTo(windowRef.current,
        { opacity: 0, rotationX: -50, z: -800, y: "30vh", filter: 'blur(40px)' },
        { opacity: 1, rotationX: 0, z: 0, y: "0vh", filter: 'blur(0px)', duration: 1.5, ease: 'expo.inOut' },
        "-=0.5"
      )
      // 3. Inside the window, elements parallax and fly in
      .fromTo(bubble1.current,
        { opacity: 0, x: -50, y: 30, rotationZ: -10, filter: 'blur(10px)' },
        { opacity: 1, x: 0, y: 0, rotationZ: 0, filter: 'blur(0px)', duration: 1, ease: 'back.out(1.5)' },
        "-=0.8"
      )
      .fromTo(bubble2.current,
        { opacity: 0, x: 50, y: 30, rotationZ: 10, filter: 'blur(10px)' },
        { opacity: 1, x: 0, y: 0, rotationZ: 0, filter: 'blur(0px)', duration: 1, ease: 'back.out(1.5)' },
        "-=0.6"
      )
      .fromTo(atomBase.current,
        { opacity: 0, scale: 0, rotationZ: 180, filter: 'blur(20px)' },
        { opacity: 1, scale: 1, rotationZ: 0, filter: 'blur(0px)', duration: 1.5, ease: 'expo.out' },
        "-=1.2"
      );

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="h-[100dvh] w-full bg-transparent flex flex-col items-center justify-center relative px-6 overflow-hidden perspective-[2000px]">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Title Text */}
      <h2 
        ref={textRef}
        className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-wide text-center max-w-3xl leading-tight drop-shadow-2xl z-20 mb-12"
      >
        Your textbook. Explained the way it was always meant to be.
      </h2>

      {/* The 3D Glass Window */}
      <div 
        ref={windowRef}
        className="w-full max-w-6xl h-[65vh] bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-3xl overflow-hidden flex flex-col relative shadow-[0_0_150px_rgba(0,191,255,0.1)] [transform-style:preserve-3d] z-10"
      >
        {/* macOS Top Bar */}
        <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-white/[0.02] shrink-0">
           <div className="w-3 h-3 rounded-full bg-white/20 shadow-inner" />
           <div className="w-3 h-3 rounded-full bg-white/20 shadow-inner" />
           <div className="w-3 h-3 rounded-full bg-white/20 shadow-inner" />
        </div>

        {/* Content Area */}
        <div className="flex-1 relative flex flex-col md:flex-row overflow-hidden [transform-style:preserve-3d]">
          {/* Subtle atmospheric flares inside the window */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-violet/20 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Left: Chatbot UI */}
          <div className="flex-1 flex flex-col justify-center p-6 md:p-16 gap-6 relative z-10 perspective-[1000px]">
             <div 
               ref={bubble1}
               className="self-end bg-white/10 border border-white/10 px-6 py-4 rounded-2xl rounded-tr-none text-white/90 font-light text-sm md:text-base max-w-sm backdrop-blur-md shadow-2xl"
             >
               I don&apos;t understand how Photosynthesis actually works.
             </div>
             <div 
               ref={bubble2}
               className="self-start bg-brand-violet/20 border border-brand-violet/40 px-6 py-4 rounded-2xl rounded-tl-none text-white font-light text-sm md:text-base max-w-sm backdrop-blur-md shadow-[0_0_40px_rgba(155,48,255,0.2)]"
             >
               Think of a plant as a tiny solar-powered chef. It catches sunlight, mixes it with water from the ground and carbon dioxide from the air, and cooks up sugar to eat! 🌿
             </div>
          </div>

          {/* Right: The Atom Visual */}
          <div className="flex-1 flex items-center justify-center relative min-h-[250px] md:min-h-0 [transform-style:preserve-3d]">
             <div ref={atomBase} className="w-[30vh] md:w-[40vh] max-w-[300px] md:max-w-[400px] aspect-square rounded-full border border-brand-cyan/20 flex items-center justify-center relative shadow-[0_0_80px_rgba(0,191,255,0.1)]">
                
                {/* Outer Ring Spin */}
                <div className="absolute inset-0 rounded-full animate-[spin_30s_linear_infinite]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(0,191,255,1)]" />
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-1 w-3 h-3 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(0,191,255,1)]" />
                </div>
                
                {/* Inner Ring Reverse Spin */}
                <div className="w-[60%] h-[60%] rounded-full border border-brand-violet/30 animate-[spin_20s_linear_infinite_reverse] relative">
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_20px_rgba(155,48,255,1)]" />
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-1.5 w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_20px_rgba(155,48,255,1)]" />
                   
                   {/* Core Pulsing Glow */}
                   <div className="w-full h-full flex items-center justify-center">
                     <div className="w-1/3 h-1/3 rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,1)] animate-pulse" />
                   </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}

