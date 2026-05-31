'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplitChatStats() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const bubbles = gsap.utils.toArray('.chat-bubble');
      gsap.fromTo(bubbles, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.5, 
          scrollTrigger: {
            trigger: container.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-32 bg-base-navy px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        
        {/* Left: Chat UI */}
        <div className="glass-panel rounded-3xl p-6 md:p-10 flex flex-col gap-6 justify-center min-h-[600px] border border-white/10 shadow-[0_0_80px_rgba(0,191,255,0.05)]">
           <div className="chat-bubble self-start px-6 py-4 rounded-3xl rounded-tl-none glass-panel font-sans text-white/80 max-w-[85%] text-lg">
             I don't understand Newton's third law.
           </div>
           <div className="chat-bubble self-end px-6 py-4 rounded-3xl rounded-tr-none bg-brand-violet/20 border border-brand-violet/30 font-sans text-white max-w-[85%] text-lg">
             Let's figure it out together. If you push against a wall while standing on a skateboard, what happens?
           </div>
           <div className="chat-bubble self-start px-6 py-4 rounded-3xl rounded-tl-none glass-panel font-sans text-white/80 max-w-[85%] text-lg">
             I roll backwards.
           </div>
           <div className="chat-bubble self-end px-6 py-4 rounded-3xl rounded-tr-none bg-brand-violet/30 border border-brand-violet/50 font-sans text-white max-w-[85%] text-lg shadow-[0_0_20px_rgba(155,48,255,0.2)]">
             Exactly. You just figured out what most people miss. You got it.
           </div>
        </div>

        {/* Right: Massive Stats */}
        <div className="flex flex-col justify-center items-start lg:pl-24 gap-16">
           <div>
             <h3 className="font-serif text-7xl md:text-[140px] text-brand-cyan tracking-tighter leading-none mb-4 drop-shadow-[0_0_30px_rgba(0,191,255,0.3)]">24/7</h3>
             <p className="font-sans text-xl text-white/60 font-bold uppercase tracking-[0.2em]">Availability</p>
           </div>
           <div>
             <h3 className="font-serif text-7xl md:text-[120px] text-brand-violet tracking-tighter leading-none mb-4 drop-shadow-[0_0_30px_rgba(155,48,255,0.3)]">8,000+</h3>
             <p className="font-sans text-xl text-white/60 font-bold uppercase tracking-[0.2em]">Interactive Modules</p>
           </div>
           <div>
             <h3 className="font-serif text-7xl md:text-[140px] text-brand-pink tracking-tighter leading-none mb-4 drop-shadow-[0_0_30px_rgba(224,64,251,0.3)]">0</h3>
             <p className="font-sans text-xl text-white/60 font-bold uppercase tracking-[0.2em]">Judgment</p>
           </div>
        </div>

      </div>
    </section>
  );
}
