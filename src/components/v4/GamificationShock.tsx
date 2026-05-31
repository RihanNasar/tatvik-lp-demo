'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GamificationShock() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"]
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yFloating1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yFloating2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={container} className="relative py-40 px-6 min-h-[900px] flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background */}
      <motion.div 
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-emerald-950/40 z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-base-navy -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <h2 className="font-serif text-5xl md:text-7xl font-light text-white tracking-wide mb-8 leading-[1.1]">
            Learning,<br/>
            <span className="text-emerald-400/80">Gamified.</span>
          </h2>
          <p className="font-sans text-white/50 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Every step forward is rewarded. Level up your knowledge, unlock achievements, and turn education into an adventure you can't put down.
          </p>
        </motion.div>

        {/* Floating UI Elements */}
        <div className="mt-32 relative h-[300px] w-full flex justify-center items-center">
           
           <motion.div 
             style={{ y: yFloating1 }}
             className="absolute left-[10%] md:left-[20%] top-0 p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex items-center gap-4"
           >
             <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-serif text-xl">+50</div>
             <div>
               <div className="text-white/90 font-light text-sm mb-1">Concept Mastered</div>
               <div className="text-white/40 text-xs font-light uppercase tracking-widest">Physics 101</div>
             </div>
           </motion.div>

           <motion.div 
             style={{ y: yFloating2 }}
             className="absolute right-[10%] md:right-[20%] bottom-0 p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col gap-4 w-64"
           >
             <div className="flex justify-between text-xs font-light text-white/60">
               <span>Level 12</span>
               <span>85%</span>
             </div>
             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "85%" }}
                 transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                 className="h-full bg-emerald-400/40 rounded-full"
               />
             </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
}
