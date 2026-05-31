'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Sparkles, BrainCircuit, Trophy, PiggyBank } from 'lucide-react';

const pillars = [
  {
    title: "Curriculum Mastery",
    desc: "You aren't learning random facts. You're mastering exactly what's on the test.",
    icon: BookOpen,
    offset: 0,
  },
  {
    title: "Interactive Simplicity",
    desc: "Complex topics stripped down into fun, interactive bites that are impossible to forget.",
    icon: Sparkles,
    offset: 120,
  },
  {
    title: "Empathetic Guide",
    desc: "A personal guide that patiently solves every doubt, step-by-step, without judgment.",
    icon: BrainCircuit,
    offset: 40,
  },
  {
    title: "Gamified Motivation",
    desc: "Earning rewards and leveling up to ensure you enjoy the journey and never lose momentum.",
    icon: Trophy,
    offset: 160,
  },
  {
    title: "Accessible Excellence",
    desc: "Eliminates the need for expensive tuitions, making elite education accessible to all.",
    icon: PiggyBank,
    offset: 80,
  }
];

function PillarCard({ pillar, index }: { pillar: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 + pillar.offset, -100 - pillar.offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className={`w-full max-w-md p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 backdrop-blur-sm flex flex-col items-start gap-8 ${index % 2 === 1 ? 'md:ml-auto md:mt-32' : 'md:mr-auto'}`}
    >
      <pillar.icon size={28} strokeWidth={1} className="text-white/40" />
      <div>
        <h3 className="font-serif text-3xl text-white/90 font-light tracking-wide mb-4 leading-tight">{pillar.title}</h3>
        <p className="font-sans text-white/40 font-light text-base leading-relaxed">{pillar.desc}</p>
      </div>
    </motion.div>
  );
}

export default function DriftingPillars() {
  return (
    <section className="py-40 bg-base-navy px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-0">
        
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          className="mb-24 md:mb-32 text-center md:text-left"
        >
           <h2 className="font-serif text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.1]">
             The Core<br/><span className="text-white/40">Philosophy</span>
           </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 md:gap-y-0 relative">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
