'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const pillars = [
  {
    title: "Curriculum Mastery.",
    desc: "Classes, revision, and activities built directly on the textbook curriculum.",
  },
  {
    title: "Interactive Simplicity.",
    desc: "Making learning deeply visual, interactive, and fun.",
  },
  {
    title: "Empathetic AI.",
    desc: "A guide that solves every doubt with infinite patience.",
  },
  {
    title: "Gamified Motivation.",
    desc: "Addictive reward systems so students enjoy every step.",
  },
  {
    title: "Accessible Excellence.",
    desc: "Eliminating the need for expensive private tuitions.",
  }
];

// --- RIGHT SIDE VISUAL COMPONENTS ---

const KnowledgeTree = () => (
  <div className="w-full h-full flex items-center justify-center p-8 relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.02)_0%,transparent_70%)]" />
    <svg viewBox="0 0 400 400" className="w-full max-w-xs md:max-w-sm h-auto opacity-70 overflow-visible relative z-10">
      <motion.path 
        d="M200 350 L200 200 L100 100 M200 200 L300 100 M100 100 L50 50 M100 100 L150 50 M300 100 L250 50 M300 100 L350 50" 
        stroke="#00BFFF" 
        strokeWidth="1" 
        fill="none" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ filter: "drop-shadow(0 0 8px rgba(0,191,255,0.2))" }}
      />
      {[
        {cx: 200, cy: 350}, {cx: 200, cy: 200}, {cx: 100, cy: 100}, {cx: 300, cy: 100},
        {cx: 50, cy: 50}, {cx: 150, cy: 50}, {cx: 250, cy: 50}, {cx: 350, cy: 50}
      ].map((node, i) => (
        <motion.circle 
          key={i} cx={node.cx} cy={node.cy} r="3" fill="#00BFFF"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.8 + (i * 0.1), type: "spring", bounce: 0.5 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(0,191,255,0.8))" }}
        />
      ))}
    </svg>
  </div>
);

const OrbitalRings = () => (
  <div className="w-full h-full flex items-center justify-center p-8">
     <div className="relative flex items-center justify-center w-[30vh] h-[30vh] md:w-[40vh] md:h-[40vh] max-w-[250px] max-h-[250px]">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-brand-cyan/10 flex items-center shadow-[0_0_20px_rgba(0,191,255,0.03)]">
           <div className="w-1 h-1 rounded-full bg-brand-cyan -ml-0.5 shadow-[0_0_10px_#00BFFF]" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-brand-violet/10 flex items-start shadow-[0_0_20px_rgba(155,48,255,0.03)] scale-125">
           <div className="w-1 h-1 rounded-full bg-brand-violet -mt-0.5 ml-24 shadow-[0_0_10px_#9B30FF]" />
        </motion.div>
        <div className="w-4 h-4 rounded-full bg-white/10 animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.2)] backdrop-blur-md border border-white/20" />
     </div>
  </div>
);

const AIChat = () => {
  const text = "I can guide you step-by-step. Where did you get stuck?";
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6 md:p-16 relative">
       <motion.div 
         initial={{ opacity: 0, y: 20 }} 
         animate={{ opacity: 1, y: 0 }} 
         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
         className="self-end bg-white/[0.02] border border-white/5 px-5 py-3 rounded-2xl rounded-tr-none text-white/80 font-light text-xs md:text-sm max-w-[85%] backdrop-blur-md"
       >
         I&apos;m totally lost on this physics problem.
       </motion.div>
       <motion.div 
         initial={{ scale: 0, opacity: 0, originX: 0, originY: 1 }} 
         animate={{ scale: 1, opacity: 1 }} 
         transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.4 }} 
         className="self-start bg-brand-violet/5 border border-brand-violet/10 px-5 py-3 rounded-2xl rounded-tl-none text-white/90 font-light text-xs md:text-sm max-w-[85%] backdrop-blur-md shadow-[0_0_30px_rgba(155,48,255,0.05)] flex items-center"
       >
         {displayText}
         <span className="inline-block w-1.5 h-3 ml-1 bg-white/30 animate-pulse align-middle rounded-sm" />
       </motion.div>
    </div>
  );
};

const GamifiedPhysics = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_60%)] gap-10 p-8 relative">
    <div className="flex gap-6 relative z-10">
      {[1, 2, 3].map(i => (
        <motion.div 
          key={i} 
          initial={{ y: 100, opacity: 0, rotate: -45 }} 
          animate={{ y: 0, opacity: 1, rotate: 0 }} 
          transition={{ type: "spring", bounce: 0.6, delay: i * 0.15, damping: 12, mass: 1.2 }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-emerald-400/20 bg-emerald-400/5 flex items-center justify-center font-serif text-emerald-400/80 font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-md"
        >
          XP
        </motion.div>
      ))}
    </div>
    
    <div className="w-3/4 max-w-sm h-[2px] bg-white/5 rounded-full overflow-hidden border border-white/5 relative z-10">
      <motion.div 
        initial={{ width: "0%" }} 
        animate={{ width: "100%" }} 
        transition={{ duration: 2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="h-full bg-emerald-400/80 shadow-[0_0_15px_#10B981]"
      />
    </div>
  </div>
);

const NumberCounter = () => {
  const [count, setCount] = useState(8000);
  
  useEffect(() => {
    let start = 8000;
    const duration = 2000;
    const startTime = performance.now();
    let rafId: number;
    
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start * (1 - easeProgress));
      setCount(current);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 relative">
       <motion.div 
         animate={count === 0 ? { filter: "drop-shadow(0 0 40px rgba(0,191,255,0.3))", scale: 1.02 } : { scale: 1 }}
         transition={{ duration: 0.5, ease: "easeOut" }}
         className="font-serif text-[60px] md:text-[90px] font-thin text-white tracking-tighter leading-none flex items-baseline"
       >
         <span className="text-brand-cyan/80 text-4xl md:text-5xl mr-2 font-thin">₹</span>
         {count}
       </motion.div>
       
       <motion.div 
         animate={{ 
           opacity: count === 0 ? 0 : 0.3, 
           filter: count === 0 ? 'blur(10px)' : 'blur(0px)',
           y: count === 0 ? 20 : 0
         }}
         transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
         className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] font-light text-white text-center"
       >
         Traditional Tuition Costs
       </motion.div>
    </div>
  );
}

// --- MAIN COMPONENT ---

export default function InteractivePillars() {
  const container = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  // Calculate Active Index (0 to 4)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.round(latest * 4);
    if (index > 4) index = 4;
    if (index < 0) index = 0;
    setActiveIndex(index);
  });

  // Mathematically perfect translation:
  // The inner container is 500% tall (holding 5 items).
  // Translating it up by -80% means shifting exactly 4 items up.
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const visuals = [
    <KnowledgeTree key="0" />,
    <OrbitalRings key="1" />,
    <AIChat key="2" />,
    <GamifiedPhysics key="3" />,
    <NumberCounter key="4" />
  ];

  return (
    <section ref={container} className="h-[500dvh] w-full bg-base-navy relative">
      
      {/* Sticky Checkpoint: Locks the split screen in place */}
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center px-4 md:px-12 py-12 md:py-24 overflow-hidden">
        
        <div className="w-full max-w-6xl h-full max-h-[800px] flex flex-col md:flex-row relative border border-white/[0.02] bg-white/[0.005] rounded-[2rem] md:rounded-[3rem] backdrop-blur-3xl overflow-hidden shadow-[0_0_80px_rgba(0,191,255,0.02)]">
          
          {/* Left: 40% Text Narrative Driver */}
          {/* Split 50/50 height on mobile, 40% width on desktop */}
          <div className="w-full h-1/2 md:h-full md:w-[40%] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
            {/* The physically translating inner container */}
            <motion.div style={{ y: yTransform }} className="w-full h-[500%] absolute top-0 left-0 flex flex-col">
              {pillars.map((pillar, i) => (
                <div key={i} className="h-[20%] w-full flex flex-col justify-center px-6 md:px-12">
                  <motion.div 
                    animate={{ 
                      opacity: activeIndex === i ? 1 : 0.05,
                      scale: activeIndex === i ? 1 : 0.95,
                      filter: activeIndex === i ? 'blur(0px)' : 'blur(2px)'
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="font-serif text-3xl md:text-4xl font-thin tracking-wide text-white leading-[1.2] mb-3 md:mb-5">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-white/40 leading-relaxed font-light text-sm md:text-base tracking-wide">
                      {pillar.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 60% Dynamic Visual Canvas */}
          {/* Split 50/50 height on mobile, 60% width on desktop */}
          <div className="w-full h-1/2 md:h-full md:w-[60%] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {visuals[activeIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
      
    </section>
  );
}
