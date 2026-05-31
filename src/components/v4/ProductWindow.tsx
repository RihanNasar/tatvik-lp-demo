'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="py-40 bg-base-void px-6 flex flex-col items-center overflow-hidden">
      <motion.div 
        style={{ y: textY }}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-4xl text-center mb-32 z-10"
      >
        <h2 className="font-serif text-5xl md:text-6xl text-white tracking-wide leading-[1.2] font-light">
          Your textbook.<br/><span className="text-white/40">Explained the way it was always meant to be.</span>
        </h2>
      </motion.div>

      <motion.div 
        style={{ y }} 
        className="w-full max-w-5xl aspect-[16/10] bg-white/[0.01] rounded-3xl border border-white/5 overflow-hidden flex flex-col backdrop-blur-md z-20"
      >
        
        <div className="h-10 border-b border-white/5 flex items-center px-6 gap-2">
           <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
           <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
           <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 relative overflow-hidden">
          
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="hidden md:flex col-span-3 border-r border-white/5 p-8 flex-col gap-6 relative z-10">
             <div className="h-4 w-1/3 bg-brand-cyan/20 rounded-full mb-8" />
             <div className="h-2 w-3/4 bg-white/10 rounded-full" />
             <div className="h-2 w-5/6 bg-white/10 rounded-full" />
             <div className="h-2 w-2/3 bg-white/10 rounded-full" />
             <div className="h-2 w-4/5 bg-white/10 rounded-full" />
          </div>
          
          <div className="col-span-1 md:col-span-6 border-r border-white/5 p-8 flex items-center justify-center relative overflow-hidden z-10">
             <div className="w-[70%] aspect-square rounded-full border border-white/5 animate-[spin_40s_linear_infinite] flex items-center justify-center relative">
               <div className="absolute top-0 -mt-1 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(0,191,255,1)]" />
               <div className="absolute bottom-0 -mb-1 w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_20px_rgba(0,191,255,1)]" />
               
               <div className="w-[50%] h-[50%] rounded-full border border-white/10 animate-[spin_20s_linear_infinite_reverse] relative">
                  <div className="absolute left-0 -ml-1 w-2 h-2 rounded-full bg-brand-violet shadow-[0_0_20px_rgba(155,48,255,1)]" />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-1/4 h-1/4 rounded-full bg-white/20 animate-pulse" />
                  </div>
               </div>
             </div>
          </div>
          
          <div className="hidden md:flex col-span-3 p-8 flex-col gap-6 justify-end relative z-10">
             <div className="self-start px-4 py-3 rounded-2xl rounded-tl-none bg-white/[0.02] text-xs font-light text-white/60 w-5/6 border border-white/5">
               How does gravity bend light?
             </div>
             <div className="self-end px-4 py-3 rounded-2xl rounded-tr-none bg-white/[0.05] border border-white/10 text-xs font-light text-white/90 w-[90%]">
               Think of space like a trampoline...
             </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
