'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CinematicHero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-base-void pt-[100px] md:pt-[140px] pb-20">
      
      {/* Background Image & Cinematic Gradient Vignette */}
      <motion.div 
        initial={{ scale: 1.05, filter: 'blur(5px)' }}
        animate={{ scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image 
          src="/ghibli-hero.png"
          alt="Ghibli Field"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Soft vignettes to focus the center without being overly dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040A]/90 via-[#02040A]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040A]/60 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-[#02040A]/10" />
      </motion.div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Crisp, Ethereal Typography Reveal (Sped up & Blend fixed) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }} 
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white/90 font-light leading-[1.1] mb-8 flex flex-col"
        >
          <span className="block">Your NCERT textbook.</span>
          <span className="block"><em className="not-italic text-brand-cyan/70 font-light">Finally a friend.</em></span>
        </motion.h1>
        
        {/* Reduced, clean subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-white/60 font-sans text-sm md:text-lg max-w-2xl leading-relaxed mb-12 font-light"
        >
          Tattvik explains any concept in plain language, just like a patient, brilliant tutor would.
        </motion.p>
        
        {/* Light Glassmorphic CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <button className="relative group px-10 py-4 md:py-5 rounded-full font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white bg-white/[0.05] border border-white/10 hover:border-white/30 hover:bg-white/[0.1] backdrop-blur-2xl transition-all duration-300 flex items-center gap-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(0,191,255,0.2)] overflow-hidden">
            
            {/* Subtle light sweep on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out skew-x-12" />

            <span className="relative z-10">Begin Learning</span>
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 text-brand-cyan"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
