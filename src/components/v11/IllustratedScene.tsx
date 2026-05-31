'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IllustratedScene() {
  const container = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !svgRef.current || !textRef.current || !planeRef.current) return;
    
    // Select specific parts of the phone SVG
    const phoneBody = svgRef.current.querySelector('.phone-body');
    const userMsg1 = svgRef.current.querySelector('.user-msg-1');
    const aiMsg1 = svgRef.current.querySelector('.ai-msg-1');
    const userMsg2 = svgRef.current.querySelector('.user-msg-2');
    const aiMsg2 = svgRef.current.querySelector('.ai-msg-2');
    const inputBar = svgRef.current.querySelector('.input-bar');
    const labels = container.current.querySelectorAll('.scene-label');

    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=200%', // Extended scroll area for the new plane animation
          pin: true,
          scrub: 1,
        }
      });

      // 0. Rare Animation: Paper Plane flies across and "drops" the text
      tl.fromTo(planeRef.current,
        { x: '-60vw', y: 150, rotationZ: -30, opacity: 0, scale: 0.5 },
        { x: '0vw', y: 0, rotationZ: 0, opacity: 1, scale: 1.5, duration: 1, ease: 'power2.out' }
      )
      .to(planeRef.current,
        { x: '60vw', y: -150, rotationZ: 30, opacity: 0, scale: 0.5, duration: 1, ease: 'power2.in' },
        "+=0.2"
      )
      // Text reveals exactly as the plane crosses the center
      .fromTo(textRef.current,
        { opacity: 0, y: 30, filter: 'blur(15px)', scale: 0.9 },
        { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)' },
        "-=1.5"
      )

      // 1. Rare Animation: The phone magnetizes together from exploded 3D space
      .fromTo(phoneBody,
        { z: -1000, rotationY: 90, opacity: 0, scale: 0.5 },
        { z: 0, rotationY: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
      )
      .fromTo(userMsg1,
        { x: -500, rotationZ: -45, opacity: 0 },
        { x: 0, rotationZ: 0, opacity: 1, duration: 1, ease: 'back.out(1.2)' },
        "-=0.5"
      )
      .fromTo(aiMsg1,
        { x: 500, rotationZ: 45, opacity: 0 },
        { x: 0, rotationZ: 0, opacity: 1, duration: 1, ease: 'back.out(1.2)' },
        "-=0.8"
      )
      .fromTo(userMsg2,
        { x: -500, rotationZ: -45, opacity: 0 },
        { x: 0, rotationZ: 0, opacity: 1, duration: 1, ease: 'back.out(1.2)' },
        "-=0.8"
      )
      .fromTo(aiMsg2,
        { x: 500, rotationZ: 45, opacity: 0 },
        { x: 0, rotationZ: 0, opacity: 1, duration: 1, ease: 'back.out(1.2)' },
        "-=0.8"
      )
      .fromTo(inputBar,
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        "-=0.5"
      )
      // 2. Floating Labels swoop in after assembly
      .fromTo(labels,
        { opacity: 0, scale: 0, rotationZ: 10 },
        { opacity: 1, scale: 1, rotationZ: 0, duration: 1, stagger: 0.2, ease: 'elastic.out(1, 0.5)' },
        "-=0.5"
      );

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-[100dvh] flex flex-col items-center justify-center bg-base-void overflow-hidden perspective-[2000px] pt-[140px]">
      
      {/* Paper Plane SVG */}
      <div ref={planeRef} className="absolute z-50 pointer-events-none drop-shadow-[0_0_15px_rgba(242,165,49,0.6)]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F8C96A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center gap-12 relative z-10">
        
        <div ref={textRef} className="text-center max-w-2xl">
          <h2 className="font-serif text-2xl md:text-4xl text-white/90 font-light tracking-wide mb-4">
            One question. Instant clarity.
          </h2>
          <p className="text-white/40 text-xs md:text-sm font-sans leading-relaxed">
            Tattvik reads your NCERT chapter and answers any question like a calm, brilliant friend would.
          </p>
        </div>

        <div className="relative flex justify-center items-center w-full max-w-2xl [transform-style:preserve-3d] scale-[0.85] sm:scale-100 mt-4 sm:mt-0">
          {/* Dynamic Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-brand-cyan/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

          {/* Central Phone SVG - Converted to pure dark theme & grouped for shattering */}
          <svg ref={svgRef} width="240" height="420" viewBox="0 0 220 380" fill="none" className="relative z-10 drop-shadow-[0_0_30px_rgba(0,191,255,0.15)] [transform-style:preserve-3d]">
            
            {/* Phone body */}
            <g className="phone-body">
              <rect x="30" y="20" width="160" height="340" rx="28" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" className="backdrop-blur-xl"/>
              <rect x="40" y="35" width="140" height="300" rx="20" fill="rgba(10,16,69,0.8)"/>
              <rect x="80" y="42" width="60" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
              <rect x="88" y="342" width="44" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
            </g>
            
            {/* User bubble 1 */}
            <g className="user-msg-1">
              <rect x="70" y="60" width="100" height="32" rx="10" fill="rgba(242,165,49,0.1)"/>
              <text x="120" y="77" fontSize="7.5" textAnchor="middle" fill="#F8C96A" opacity="0.9" fontFamily="sans-serif">What is osmosis?</text>
            </g>
            
            {/* AI bubble 1 */}
            <g className="ai-msg-1">
              <rect x="48" y="104" width="130" height="70" rx="10" fill="rgba(0,212,255,0.1)"/>
              <text x="60" y="120" fontSize="7" fill="#00D4FF" fontFamily="sans-serif" fontWeight="500">Tattvik</text>
              <text x="60" y="134" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Imagine a crowded room</text>
              <text x="60" y="147" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">where people squeeze to</text>
              <text x="60" y="160" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">the emptier side...</text>
            </g>
            
            {/* User bubble 2 */}
            <g className="user-msg-2">
              <rect x="75" y="188" width="95" height="30" rx="9" fill="rgba(242,165,49,0.1)"/>
              <text x="122" y="206" fontSize="7" textAnchor="middle" fill="#F8C96A" opacity="0.9" fontFamily="sans-serif">Give an example!</text>
            </g>
            
            {/* AI bubble 2 */}
            <g className="ai-msg-2">
              <rect x="48" y="230" width="130" height="55" rx="10" fill="rgba(0,212,255,0.1)"/>
              <text x="60" y="246" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">Raisins in water, they</text>
              <text x="60" y="258" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">swell as water moves</text>
              <text x="60" y="270" fontSize="7" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">into the fruit. Osmosis!</text>
            </g>
            
            {/* Input bar */}
            <g className="input-bar">
              <rect x="48" y="300" width="124" height="22" rx="11" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              <text x="82" y="314" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="sans-serif">Ask anything...</text>
            </g>
          </svg>

          {/* Floating Labels */}
          <div className="absolute inset-0 pointer-events-none [transform-style:preserve-3d] z-20">
            <div className="scene-label absolute top-[10%] left-2 sm:-left-4 md:-left-12 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-brand-saffron" />
              <span className="text-white/80 text-[9px] sm:text-[10px] md:text-xs font-sans tracking-wide">NCERT Class 10: Bio</span>
            </div>
            
            <div className="scene-label absolute bottom-[25%] left-4 sm:left-0 md:-left-8 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-brand-cyan" />
              <span className="text-white/80 text-[9px] sm:text-[10px] md:text-xs font-sans tracking-wide">Real-world analogy</span>
            </div>
            
            <div className="scene-label absolute top-[20%] right-2 sm:-right-2 md:-right-10 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-brand-violet" />
              <span className="text-white/80 text-[9px] sm:text-[10px] md:text-xs font-sans tracking-wide">Zero jargon</span>
            </div>
            
            <div className="scene-label absolute bottom-[15%] right-0 sm:-right-4 md:-right-6 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-xl">
              <div className="w-2 h-2 rounded-full bg-brand-pink" />
              <span className="text-white/80 text-[9px] sm:text-[10px] md:text-xs font-sans tracking-wide">Exam-ready answer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
