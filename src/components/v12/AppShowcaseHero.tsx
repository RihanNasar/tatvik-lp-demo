'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import PhoneFrame from './PhoneFrame';

const sections = [
  {
    title: "Stay connected, without the hover.",
    subtitle: "A calm, simple view of their weekly progress.",
    body: "See where they thrive and where they need support, so you can step in at the exact right time.",
    imageSrc: "/app-dashboard.png",
    // 1: The Descent
    phoneInitial: { opacity: 0, scale: 1.3, y: -200, x: 100, rotateZ: 20, rotateY: -40, rotateX: 20 },
    phoneTarget:  { opacity: 1, scale: 1, y: 0, x: 0, rotateZ: -5, rotateY: -15, rotateX: 5 },
    textInitial:  { opacity: 0, y: 50, x: -30 },
    textTarget:   { opacity: 1, y: 0, x: 0 },
  },
  {
    title: "Reports that actually help.",
    subtitle: "More than just grades.",
    body: "Track consistency, patterns, and growth in one simple report. Support them with insights, not pressure.",
    imageSrc: "/weekly-report.png",
    // 2: The Drift
    phoneInitial: { opacity: 0, scale: 0.8, x: -200, rotateY: 45, rotateZ: 10 },
    phoneTarget:  { opacity: 1, scale: 1.05, x: 0, rotateY: 15, rotateZ: 5, rotateX: 10 },
    textInitial:  { opacity: 0, x: 50 },
    textTarget:   { opacity: 1, x: 0, y: 0 },
  },
  {
    title: "Built for healthier learning.",
    subtitle: "Support that adapts to your child.",
    body: "Link accounts to follow their progress safely. Stay involved and provide guidance without constantly checking in.",
    imageSrc: "/parent-dashboard.png",
    // 3: The Deep Rise
    phoneInitial: { opacity: 0, scale: 0.5, y: 300, rotateX: 70, rotateZ: -10 },
    phoneTarget:  { opacity: 1, scale: 1, y: 0, rotateX: 10, rotateZ: 0, rotateY: 0 },
    textInitial:  { opacity: 0, y: 80, x: 0 },
    textTarget:   { opacity: 1, y: 0, x: 0 },
  }
];

export default function AppShowcaseHero() {
  return (
    <div className="relative w-full bg-base-navy flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay fixed" />

      {/* Intro Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="w-full max-w-3xl mx-auto px-6 pt-32 pb-6 flex flex-col items-center text-center z-20"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-brand-pink text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase mb-3"
        >
          For Parents
        </motion.p>
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
          }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl font-light tracking-tight bg-gradient-to-br from-brand-cyan via-white to-brand-pink bg-clip-text text-transparent leading-[1.2] mb-3"
        >
          Peace of mind. Without the hover.
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
          }}
          className="text-white/50 text-sm font-sans max-w-md leading-relaxed"
        >
          A calm, simple view of their learning journey. No pressure required.
        </motion.p>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col">
        {sections.map((section, idx) => (
          <section key={idx} className="relative w-full min-h-[70vh] flex items-center justify-center z-10 py-16">
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              
              {/* Left Column: Text */}
              <div className="flex flex-col justify-center z-20 order-2 md:order-1">
                <motion.h2 
                  initial={section.textInitial}
                  whileInView={section.textTarget}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 45, damping: 20, delay: 0.1 }}
                  className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent leading-[1.15]"
                >
                  {section.title}
                </motion.h2>
                
                <motion.h3 
                  initial={section.textInitial}
                  whileInView={section.textTarget}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 45, damping: 20, delay: 0.2 }}
                  className="font-sans text-base md:text-lg text-white/70 font-medium mb-6 tracking-wide"
                >
                  {section.subtitle}
                </motion.h3>
                
                <motion.div 
                  initial={section.textInitial}
                  whileInView={section.textTarget}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 45, damping: 20, delay: 0.3 }}
                  className="font-sans text-sm md:text-base text-white/50 font-light leading-[1.8] tracking-wide"
                >
                  {section.body}
                </motion.div>
              </div>

              {/* Right Column: 3D Phones Showcase */}
              <motion.div
                initial={section.phoneInitial}
                whileInView={section.phoneTarget}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 40, damping: 18, mass: 1.2, delay: 0.1 }}
                className="relative w-full flex items-center justify-center perspective-[2500px] order-1 md:order-2"
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={2000}
                  transitionSpeed={2000}
                  scale={1.05}
                  gyroscope={true}
                  className="w-full max-w-[280px] md:max-w-[320px] aspect-[9/19.5] preserve-3d cursor-pointer group"
                >
                  <div className="w-full h-full preserve-3d">
                    
                    {/* Elegant soft brand-tinted studio backlight */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/[0.04] blur-[60px] rounded-full -z-10 mix-blend-screen transition-opacity duration-700 group-hover:opacity-100 opacity-50" style={{ transform: 'translateZ(-50px)' }} />
                    
                    {/* Ultra-realistic physical grounding shadow */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-14 bg-black blur-[24px] rounded-[100%] opacity-90 -z-10 transition-transform duration-700 group-hover:scale-105" style={{ transform: 'translateZ(-10px) rotateX(80deg)' }} />

                    <PhoneFrame src={section.imageSrc} />
                  </div>
                </Tilt>
              </motion.div>
              
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
