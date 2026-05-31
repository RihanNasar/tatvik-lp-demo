'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function GamificationShock() {
  const container = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!container.current) return;
    const floatingElements = gsap.utils.toArray('.floating-ui');
    
    floatingElements.forEach((el, i) => {
      gsap.to(el as Element, {
        y: 'random(-40, 40)',
        x: 'random(-20, 20)',
        rotation: 'random(-10, 10)',
        duration: 'random(4, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3
      });
    });
  }, []);

  return (
    <section ref={container} className="py-40 bg-base-game relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* Floating UI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-ui absolute top-32 left-10 md:left-[15%] glass-panel bg-white/20 px-8 py-4 rounded-3xl flex items-center gap-4 shadow-2xl border border-white/40">
           <div className="w-12 h-12 rounded-full bg-brand-amber flex items-center justify-center font-bold text-white shadow-[0_0_30px_rgba(245,158,11,0.8)] text-2xl">★</div>
           <span className="font-sans font-extrabold text-white text-2xl">12 Day Streak</span>
        </div>
        
        <div className="floating-ui absolute bottom-32 right-10 md:right-[15%] glass-panel bg-white/20 p-6 rounded-3xl flex flex-col gap-4 shadow-2xl border border-white/40 min-w-[300px]">
           <div className="flex justify-between items-center text-white font-sans font-bold text-xl">
             <span>Level 4</span>
             <span>1,200 XP</span>
           </div>
           <div className="w-full h-4 bg-white/30 rounded-full overflow-hidden">
             <div className="w-3/4 h-full bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]" />
           </div>
        </div>

        <div className="floating-ui absolute top-1/4 right-20 md:right-1/4 glass-panel bg-white/20 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl border border-white/40">
           <span className="text-6xl drop-shadow-xl">🏆</span>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pointer-events-none">
        <h2 className="font-serif text-7xl md:text-[110px] text-white tracking-tighter leading-[1] drop-shadow-2xl">
          The more you learn,<br/>the further you go.
        </h2>
      </div>
    </section>
  );
}
