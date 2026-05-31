'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.bento-card', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-base-navy px-6">
      <div ref={container} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Row 1 */}
        <div className="bento-card glass-panel md:col-span-2 rounded-3xl p-10 flex flex-col justify-end min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[60px] group-hover:bg-brand-cyan/20 transition-colors" />
           <h3 className="font-serif text-4xl md:text-5xl text-white mb-3 z-10 tracking-tight">Curriculum Lessons</h3>
           <p className="font-sans text-lg text-white/60 z-10">Strictly mapped to the national textbook standards.</p>
        </div>
        <div className="bento-card glass-panel md:col-span-1 rounded-3xl p-10 flex flex-col justify-end min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-48 h-48 bg-brand-pink/10 rounded-full blur-[40px] group-hover:bg-brand-pink/20 transition-colors" />
           <h3 className="font-serif text-4xl md:text-5xl text-white mb-3 z-10 tracking-tight">Visual Learning</h3>
           <p className="font-sans text-lg text-white/60 z-10">Complex concepts mapped visually.</p>
        </div>

        {/* Row 2 */}
        <div className="bento-card glass-panel md:col-span-1 rounded-3xl p-10 flex flex-col justify-end min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-48 h-48 bg-brand-violet/10 rounded-full blur-[40px] group-hover:bg-brand-violet/20 transition-colors" />
           <h3 className="font-serif text-4xl md:text-5xl text-white mb-3 z-10 tracking-tight">AI Teacher</h3>
           <p className="font-sans text-lg text-white/60 z-10">Available 24/7. Patient and empathetic.</p>
        </div>
        <div className="bento-card glass-panel md:col-span-2 rounded-3xl p-10 flex flex-col justify-end min-h-[300px] md:min-h-[400px] relative overflow-hidden group border border-base-game/20">
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-base-game/10 rounded-full blur-[60px] group-hover:bg-base-game/20 transition-colors" />
           <h3 className="font-serif text-4xl md:text-5xl text-base-game mb-3 z-10 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] tracking-tight">Gamified</h3>
           <p className="font-sans text-lg text-white/60 z-10">XP, streaks, and badges to retain motivation.</p>
        </div>

        {/* Row 3 */}
        <div className="bento-card glass-panel md:col-span-3 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center min-h-[300px] md:min-h-[400px] relative overflow-hidden group border border-brand-amber/20 hover:border-brand-amber/40 transition-colors">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-amber/5 rounded-full blur-[100px] group-hover:bg-brand-amber/10 transition-colors" />
           <h3 className="font-serif text-5xl md:text-7xl text-white mb-6 z-10 tracking-tighter">Affordable Alternative</h3>
           <p className="font-sans text-xl md:text-2xl text-white/60 z-10 max-w-3xl">Eliminate the need for expensive private tuitions with an intelligent textbook that adapts to your pace.</p>
        </div>

      </div>
    </section>
  );
}
