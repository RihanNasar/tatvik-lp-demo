'use client';
import { motion } from 'framer-motion';

export default function CosmicFooter() {
  return (
    <footer className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-base-void text-white">
      
      {/* Twilight Glassmorphism Glows */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
         <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-brand-violet/20 rounded-full blur-[150px]" />
         <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-cyan/20 rounded-full blur-[150px]" />
         <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-brand-pink/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-serif text-6xl md:text-[90px] font-light tracking-tighter mb-8 leading-[1.1]"
        >
          Your journey begins now.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/60 font-sans text-xl font-light mb-16 max-w-xl leading-relaxed"
        >
          Join thousands of students mastering their curriculum with the ultimate empathetic AI guide.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-panel px-12 py-5 rounded-full font-sans text-sm uppercase tracking-[0.3em] font-medium border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all flex items-center gap-4 group backdrop-blur-md"
        >
          Start For Free
          <span className="group-hover:translate-x-2 transition-transform text-lg">→</span>
        </motion.button>
      </div>

      {/* Copyright Bar */}
      <div className="absolute bottom-8 w-full px-12 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/40 z-10 font-sans">
        <p>© 2026 Tattvik AI. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
