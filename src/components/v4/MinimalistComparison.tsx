'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MinimalistComparison() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const dividerY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={container} className="py-40 bg-base-navy px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-32 text-center"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-white font-light tracking-wide leading-[1.2]">
            The old way vs. <br className="md:hidden"/><span className="text-white/40">The new way</span>
          </h2>
        </motion.div>

        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-24 text-center md:text-left">
          
          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ y: dividerY }}
              className="w-full h-32 bg-gradient-to-b from-transparent via-brand-cyan/30 to-transparent"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 md:pr-16 items-center md:items-start"
          >
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 font-light">Traditional</h3>
            <ul className="flex flex-col gap-6 font-sans text-white/60 font-light text-base text-center md:text-left">
              <li>Reading static textbook pages</li>
              <li>Waiting for the teacher to answer</li>
              <li>Studying random, disconnected facts</li>
              <li>Losing motivation quickly</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 md:pl-16 items-center md:items-start"
          >
            <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-brand-cyan/80 font-light">Tattvik</h3>
            <ul className="flex flex-col gap-6 font-sans text-white/90 font-light text-base text-center md:text-left">
              <li>Experiencing interactive concepts</li>
              <li>24/7 empathetic, instant guidance</li>
              <li>Mastering exact textbook curriculums</li>
              <li>Gamified progression & rewards</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
