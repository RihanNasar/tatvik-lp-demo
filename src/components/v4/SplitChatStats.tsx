'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function SplitChatStats() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const stat1Y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const stat2Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const stat3Y = useTransform(scrollYProgress, [0, 1], [90, -90]);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const bubbles = gsap.utils.toArray('.chat-bubble-fluid');
      gsap.fromTo(bubbles, 
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          stagger: 0.15, 
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: 'top 60%',
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-40 bg-base-navy px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-16">
        
        <div className="flex flex-col gap-8 justify-center min-h-[400px]">
           <div className="chat-bubble-fluid self-start px-6 py-4 rounded-3xl rounded-tl-none bg-white/[0.02] border border-white/5 font-sans font-light text-white/80 max-w-[85%] text-lg">
             I don't understand Newton's third law.
           </div>
           
           <div className="chat-bubble-fluid self-end px-6 py-4 rounded-3xl rounded-tr-none bg-brand-violet/5 border border-brand-violet/10 font-sans font-light text-white max-w-[85%] text-lg">
             Let's figure it out together. If you push against a wall while standing on a skateboard, what happens?
           </div>
           
           <div className="chat-bubble-fluid self-start px-6 py-4 rounded-3xl rounded-tl-none bg-white/[0.02] border border-white/5 font-sans font-light text-white/80 max-w-[85%] text-lg">
             I roll backwards.
           </div>
           
           <div className="chat-bubble-fluid self-end px-6 py-4 rounded-3xl rounded-tr-none bg-brand-cyan/5 border border-brand-cyan/10 font-sans font-light text-white max-w-[85%] text-lg">
             Exactly. You just figured out what most people miss.
           </div>
        </div>

        <div className="flex flex-col justify-center items-start lg:pl-20 gap-24">
           <motion.div style={{ y: stat1Y }}>
             <h3 className="font-serif text-6xl md:text-7xl tracking-wide leading-none mb-4 font-thin text-white/90">24/7</h3>
             <p className="font-sans text-xs text-white/40 font-light uppercase tracking-[0.4em]">Availability</p>
           </motion.div>
           <motion.div style={{ y: stat2Y }}>
             <h3 className="font-serif text-6xl md:text-7xl tracking-wide leading-none mb-4 font-thin text-white/90">8,000+</h3>
             <p className="font-sans text-xs text-white/40 font-light uppercase tracking-[0.4em]">Modules</p>
           </motion.div>
           <motion.div style={{ y: stat3Y }}>
             <h3 className="font-serif text-6xl md:text-7xl tracking-wide leading-none mb-4 font-thin text-white/90">0</h3>
             <p className="font-sans text-xs text-white/40 font-light uppercase tracking-[0.4em]">Judgment</p>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
