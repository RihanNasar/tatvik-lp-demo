'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// -------------------------------------------------------------
// SCREEN 1: Curriculum Mastery
// -------------------------------------------------------------
const Screen1 = () => {
  const container = useRef<HTMLDivElement>(null);
  const ipad = useRef<HTMLDivElement>(null);
  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        }
      });

      tl.from(ipad.current, { z: -500, rotationX: 45, rotationY: -45, x: "50vw", opacity: 0, filter: "blur(30px)", scale: 0.5, duration: 1.5, ease: "expo.out" })
        .from(card1.current, { y: "50vh", z: 200, rotationX: -30, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "expo.out" }, "-=1.0")
        .from(card2.current, { y: "50vh", z: 300, rotationX: -30, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "expo.out" }, "-=1.0")
        .from(card3.current, { y: "50vh", z: 400, rotationX: -30, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "expo.out" }, "-=1.0");
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="h-[100dvh] w-full relative flex items-center bg-[#0A1045] overflow-hidden">
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        {/* Left Text */}
        <div className="w-full md:w-1/2 z-10">
          <h2 className="font-serif text-5xl md:text-7xl font-thin text-white tracking-wide mb-6">
            Curriculum Mastery
          </h2>
          <p className="font-sans text-white/60 font-light text-lg tracking-wide leading-relaxed max-w-md">
            Classes, revision, and activities built directly on the textbook curriculum.
          </p>
        </div>

        {/* Right Assembly */}
        <div className="hidden md:flex w-1/2 relative justify-center items-center h-[600px] perspective-[2000px]">
           {/* iPad Frame */}
           <div 
             ref={ipad}
             className="relative w-[320px] h-[480px] bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl p-6 flex flex-col gap-4 [transform-style:preserve-3d]"
           >
              <div className="w-full h-8 flex justify-center mb-4">
                 <div className="w-20 h-1 bg-white/20 rounded-full" />
              </div>
              
              {/* Card 1 */}
              <div ref={card1} className="w-full h-24 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center shadow-xl">
                 <div className="text-white/40 text-xs font-sans tracking-widest uppercase mb-1">Module 1</div>
                 <div className="text-white text-lg font-serif">Chapter 3</div>
              </div>
              
              {/* Card 2 */}
              <div ref={card2} className="w-full h-24 bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 border border-white/20 rounded-2xl p-4 flex flex-col justify-center shadow-xl">
                 <div className="text-white/80 text-xs font-sans tracking-widest uppercase mb-1">Visual</div>
                 <div className="text-white text-lg font-serif">Video Lesson</div>
              </div>

              {/* Card 3 */}
              <div ref={card3} className="w-full h-24 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center shadow-xl">
                 <div className="text-emerald-400 text-xs font-sans tracking-widest uppercase mb-1">Test</div>
                 <div className="text-white text-lg font-serif">Practice Quiz</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// SCREEN 2: Interactive Simplicity
// -------------------------------------------------------------
const Screen2 = () => {
  const container = useRef<HTMLDivElement>(null);
  const diagram = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const slider1 = useRef<HTMLDivElement>(null);
  const slider2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        }
      });

      tl.from(diagram.current, { y: "-50vh", rotationZ: 180, scale: 0.2, opacity: 0, filter: "blur(30px)", duration: 1.5, ease: "expo.out" })
        .from(panel.current, { x: "-50vw", rotationY: 90, z: -300, opacity: 0, filter: "blur(30px)", duration: 1.5, ease: "expo.out" }, "-=1.0")
        .from(slider1.current, { x: "30vw", y: "30vh", z: 300, rotationX: 45, opacity: 0, filter: "blur(15px)", duration: 1.2, ease: "back.out(1.5)" }, "-=1.0")
        .from(slider2.current, { x: "40vw", y: "40vh", z: 400, rotationX: 45, opacity: 0, filter: "blur(15px)", duration: 1.2, ease: "back.out(1.5)" }, "-=1.0");
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="h-[100dvh] w-full relative flex items-center bg-[#050820] overflow-hidden">
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center flex-row-reverse">
        
        {/* Right Text */}
        <div className="w-full md:w-1/2 z-10 pl-0 md:pl-20">
          <h2 className="font-serif text-5xl md:text-7xl font-thin text-white tracking-wide mb-6">
            Interactive Simplicity
          </h2>
          <p className="font-sans text-white/60 font-light text-lg tracking-wide leading-relaxed max-w-md">
            Helps simplify the learning, making it deeply interactive and fun.
          </p>
        </div>

        {/* Left Assembly */}
        <div className="hidden md:flex w-1/2 relative justify-center items-center h-[600px] perspective-[2000px]">
           {/* Diagram */}
           <div ref={diagram} className="absolute top-10 left-10 w-64 h-64 bg-white/5 border border-white/10 rounded-full flex items-center justify-center border-dashed border-spacing-4 shadow-2xl">
              <div className="w-32 h-32 bg-brand-cyan/20 rounded-full blur-xl absolute" />
              <div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_20px_rgba(255,255,255,1)]" />
           </div>

           {/* Control Panel */}
           <div ref={panel} className="absolute bottom-20 left-0 w-80 h-48 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-[0_0_50px_rgba(155,48,255,0.1)] flex flex-col gap-6 [transform-style:preserve-3d]">
              <div className="text-white/40 text-xs font-sans tracking-widest uppercase">Physics Controls</div>
              
              <div className="flex flex-col gap-4">
                 <div ref={slider1} className="w-full flex items-center gap-4">
                    <div className="text-white/60 text-sm font-sans w-12">Mass</div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full relative">
                       <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-brand-cyan rounded-full shadow-[0_0_15px_rgba(0,191,255,0.5)]" />
                       <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                    </div>
                 </div>

                 <div ref={slider2} className="w-full flex items-center gap-4">
                    <div className="text-white/60 text-sm font-sans w-12">Grav</div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full relative">
                       <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-brand-violet rounded-full shadow-[0_0_15px_rgba(155,48,255,0.5)]" />
                       <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// SCREEN 3: Empathetic AI
// -------------------------------------------------------------
const Screen3 = () => {
  const container = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const bubble1 = useRef<HTMLDivElement>(null);
  const bubble2 = useRef<HTMLDivElement>(null);
  const widget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        }
      });

      tl.from(windowRef.current, { scale: 0.2, rotationX: -60, y: "30vh", z: -500, opacity: 0, filter: "blur(40px)", duration: 1.5, ease: "expo.out" })
        .from(bubble1.current, { x: "20vw", y: "20vh", z: 200, rotation: -15, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "back.out(1.5)" }, "-=1.0")
        .from(bubble2.current, { x: "-20vw", z: 300, rotation: 15, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "back.out(1.5)" }, "-=0.8")
        .from(widget.current, { y: "30vh", z: 400, rotationX: 45, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "expo.out" }, "-=0.8");
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="h-[100dvh] w-full relative flex flex-col justify-center items-center bg-[#080B1A] overflow-hidden px-6 perspective-[2000px]">
      
      {/* Top Text */}
      <div className="text-center z-20 max-w-3xl mb-12">
        <h2 className="font-serif text-5xl md:text-7xl font-thin text-white tracking-wide mb-4">
          Empathetic AI
        </h2>
        <p className="font-sans text-white/60 font-light text-lg tracking-wide leading-relaxed">
          An AI guide that solves every doubt with infinite patience and empathy.
        </p>
      </div>

      {/* Center Assembly */}
      <div className="relative w-full max-w-3xl h-[500px] flex justify-center items-center">
         {/* Main Chat Window */}
         <div ref={windowRef} className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl flex flex-col p-8 gap-6 shadow-2xl [transform-style:preserve-3d]">
            
            {/* Student Bubble */}
            <div ref={bubble1} className="self-end max-w-md bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tr-none text-white/80 font-sans font-light shadow-xl">
               I don't understand how covalent bonds work. Can you explain it simply?
            </div>

            {/* AI Bubble */}
            <div ref={bubble2} className="self-start max-w-md bg-gradient-to-r from-brand-violet/20 to-transparent border border-brand-violet/30 p-4 rounded-2xl rounded-tl-none text-white font-sans font-light relative shadow-[0_0_40px_rgba(155,48,255,0.15)]">
               <div className="absolute -left-2 top-0 w-1 h-full bg-brand-violet rounded-full shadow-[0_0_10px_rgba(155,48,255,0.8)]" />
               Think of covalent bonds like sharing a blanket. Two atoms want to be warm (stable), so they share their electrons (the blanket) instead of taking it from each other.
            </div>

            {/* Concept Widget */}
            <div ref={widget} className="self-start ml-8 mt-2 w-72 bg-[#0A1045]/80 backdrop-blur-md border border-brand-cyan/40 rounded-xl p-4 shadow-[0_0_50px_rgba(0,191,255,0.2)] flex gap-4 items-center">
               <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/50 shadow-inner">
                  <span className="text-brand-cyan text-xl">🤝</span>
               </div>
               <div>
                  <div className="text-white text-sm font-serif">Concept Breakdown</div>
                  <div className="text-brand-cyan/80 text-xs font-sans tracking-wide">Electron Sharing</div>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// SCREEN 4: Gamified Motivation
// -------------------------------------------------------------
const Screen4 = () => {
  const container = useRef<HTMLDivElement>(null);
  const dashboard = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const badges = useRef<HTMLDivElement>(null);
  const xp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        }
      });

      tl.from(dashboard.current, { y: "-50vh", scale: 0.5, rotationX: 45, opacity: 0, filter: "blur(30px)", duration: 1.5, ease: "expo.out" })
        .from(ring.current, { x: "50vw", rotation: 360, z: 200, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "back.out(2)" }, "-=1.0")
        .from(badges.current, { y: "50vh", z: 300, scale: 0, rotationX: 90, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "back.out(2)" }, "-=0.8")
        .from(xp.current, { x: "-50vw", z: 400, rotationY: -90, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "expo.out" }, "-=0.8");
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="h-[100dvh] w-full relative flex items-center bg-[#061811] overflow-hidden">
      {/* Emerald Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10B981]/10 to-transparent pointer-events-none" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        {/* Left Text */}
        <div className="w-full md:w-1/2 z-10">
          <h2 className="font-serif text-5xl md:text-7xl font-thin text-emerald-400/90 tracking-wide mb-6">
            Gamified Motivation
          </h2>
          <p className="font-sans text-white/60 font-light text-lg tracking-wide leading-relaxed max-w-md">
            Gamifying the experience so students never lose motivation and enjoy every step.
          </p>
        </div>

        {/* Right Assembly */}
        <div className="hidden md:flex w-1/2 relative justify-center items-center h-[600px] perspective-[2000px]">
           {/* Dashboard Base */}
           <div ref={dashboard} className="absolute w-[400px] h-[500px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(16,185,129,0.1)] p-6 [transform-style:preserve-3d]" />

           {/* Ring */}
           <div ref={ring} className="absolute top-12 right-12 w-32 h-32 rounded-full border-4 border-dashed border-[#10B981]/40 flex items-center justify-center shadow-xl">
              <div className="w-24 h-24 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981] font-serif text-3xl blur-[1px]">
                 LVL 9
              </div>
           </div>

           {/* Badges */}
           <div ref={badges} className="absolute bottom-16 left-12 flex gap-4">
              {[1, 2, 3].map((i) => (
                 <div key={i} className="w-16 h-16 bg-[#10B981]/10 border border-[#10B981]/40 rounded-xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <div className="-rotate-45 text-white/90 font-sans text-xs drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🔥 {i}</div>
                 </div>
              ))}
           </div>

           {/* XP Bar */}
           <div ref={xp} className="absolute top-1/2 left-0 -translate-x-12 w-64 h-16 bg-[#061811] border border-[#10B981]/50 rounded-2xl p-4 flex items-center shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              <div className="text-white font-sans text-sm tracking-widest mr-4">XP</div>
              <div className="flex-1 h-2 bg-white/10 rounded-full relative">
                 <div className="absolute left-0 top-0 bottom-0 w-[80%] bg-[#10B981] rounded-full shadow-[0_0_15px_#10B981]" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// SCREEN 5: Accessible Excellence
// -------------------------------------------------------------
const Screen5 = () => {
  const container = useRef<HTMLDivElement>(null);
  const oldCard = useRef<HTMLDivElement>(null);
  const newCard = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        }
      });

      // Old card gracefully drifts in
      tl.from(oldCard.current, { scale: 0.5, y: "20vh", rotationX: -30, opacity: 0, filter: "blur(30px)", duration: 1.5, ease: "expo.out" })
        // New card violently eclipses it with insane scale and blur
        .from(newCard.current, { scale: 0.2, y: "30vh", z: -500, rotationX: 45, opacity: 0, filter: "blur(40px)", duration: 2, ease: "expo.inOut" }, "-=0.5")
        // Old card shatters away gracefully
        .to(oldCard.current, { opacity: 0, filter: "blur(40px)", scale: 1.3, z: 200, duration: 1.5, ease: "expo.inOut" }, "-=1.5");
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="h-[100dvh] w-full relative flex flex-col justify-center items-center bg-base-navy overflow-hidden px-6 perspective-[2000px]">
      
      {/* Top Text */}
      <div className="text-center z-20 max-w-3xl mb-24">
        <h2 className="font-serif text-5xl md:text-7xl font-thin text-white tracking-wide mb-4">
          Accessible Excellence
        </h2>
        <p className="font-sans text-white/60 font-light text-lg tracking-wide leading-relaxed">
          Reduces the need for expensive online or offline tuitions, leveling the playing field.
        </p>
      </div>

      {/* Assembly */}
      <div className="relative w-full max-w-2xl h-[400px] flex justify-center items-center [transform-style:preserve-3d]">
         
         {/* Old Heavy Card */}
         <div ref={oldCard} className="absolute inset-0 m-auto w-72 h-40 bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col justify-center gap-2 z-10">
            <div className="text-zinc-500 font-sans text-sm uppercase tracking-widest">Private Tutor</div>
            <div className="text-zinc-400 font-serif text-4xl line-through">₹8,000 / mo</div>
         </div>

         {/* New Tattvik Card (Eclipses the old one) */}
         <div ref={newCard} className="absolute inset-0 m-auto w-96 h-56 bg-white/[0.03] backdrop-blur-3xl border border-brand-cyan/40 rounded-3xl p-8 shadow-[0_0_150px_rgba(0,191,255,0.3)] flex flex-col justify-center gap-4 text-center z-20">
            <div className="text-brand-cyan font-sans text-sm uppercase tracking-widest font-semibold drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]">Tattvik AI</div>
            <div className="text-white font-serif text-[80px] leading-none drop-shadow-[0_0_40px_rgba(0,191,255,0.8)]">₹0</div>
            <div className="text-white/60 font-sans text-sm tracking-wide">All-Access Learning</div>
         </div>

      </div>
    </div>
  );
};

// -------------------------------------------------------------
// MASTER COMPONENT
// -------------------------------------------------------------
export default function UIAssemblyPillars() {
  return (
    <section className="w-full flex flex-col relative z-20">
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
    </section>
  );
}
