'use client';
import { motion } from 'framer-motion';

export default function TrustLightMode() {
  return (
    <section className="py-40 bg-[#F8F8FF] px-6 text-base-navy overflow-hidden">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Scroll Reveal Quote */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-40"
        >
          <p className="font-serif text-3xl md:text-5xl font-light leading-[1.4] mb-12 text-base-navy/80 tracking-wide max-w-3xl mx-auto">
            "My daughter finally stopped dreading homework. She thinks she's just playing a game."
          </p>
          <div className="font-sans text-xs uppercase tracking-[0.4em] text-base-navy/40 font-light">
            Sarah M., Parent of a 7th Grader
          </div>
        </motion.div>
        
        {/* Infinite School Ticker */}
        <div className="w-screen relative py-16 flex flex-col items-center border-t border-b border-black/[0.03]">
           <p className="font-sans text-xs uppercase tracking-[0.4em] text-black/20 font-light mb-16">Trusted by 100+ Schools</p>
           
           {/* Webkit mask image for fade edges */}
           <div className="w-full max-w-[100vw] overflow-hidden flex whitespace-nowrap" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
             <div className="animate-[scroll_40s_linear_infinite] flex gap-24 items-center font-serif text-3xl md:text-5xl text-black/[0.07] font-light">
                <span>Oakridge International</span>
                <span>Delhi Public School</span>
                <span>Greenwood High</span>
                <span>St. Xavier's</span>
                <span>Oakridge International</span>
                <span>Delhi Public School</span>
                <span>Greenwood High</span>
                <span>St. Xavier's</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
