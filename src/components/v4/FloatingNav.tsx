'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function FloatingNav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-auto px-4"
    >
      <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-8 md:gap-16 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl bg-transparent/40">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(155,48,255,0.4)]">
             <Image src="/tatvik-logo.jpg" alt="Tatvik Logo" fill className="object-cover" />
          </div>
          <span className="font-sans text-white/90 font-medium tracking-wide text-sm">Tattvik AI</span>
        </div>



        {/* Elegant CTA */}
        <button className="text-white/80 font-sans font-light px-6 py-2.5 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all text-[10px] uppercase tracking-[0.2em]">
          Start Free
        </button>

      </div>
    </motion.nav>
  );
}

