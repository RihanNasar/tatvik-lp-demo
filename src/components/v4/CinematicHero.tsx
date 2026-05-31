'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CinematicHero() {
  const headline = "Learning should never be alone.";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="section-hero" className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-base-void">
      {/* Motion Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 origin-center w-full h-full"
      >
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          className="w-full h-full relative"
        >
          <Image 
            src="/hero-ghibli.png" 
            alt="Studio Ghibli style cosmic field with child and dog"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-void/10 to-base-navy pointer-events-none" /> 
        <div className="absolute inset-0 bg-black/10 pointer-events-none" /> 
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full h-full justify-center">
        
        <div className="overflow-hidden mb-8 py-2">
          <motion.h1 
            initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-[60px] text-white/90 tracking-wide leading-[1.1] drop-shadow-md font-light"
          >
            {headline}
          </motion.h1>
        </div>
        
      </div>
      
      {/* Lower Middle CTA - Elegant & Delicate */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
      >
        <button 
          className="text-white/80 font-sans font-light px-8 py-3 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all flex items-center gap-4 text-xs uppercase tracking-[0.3em] backdrop-blur-md"
        >
          Begin the Journey 
          <span className="opacity-70 text-sm">
             →
          </span>
        </button>
      </motion.div>
    </section>
  );
}
