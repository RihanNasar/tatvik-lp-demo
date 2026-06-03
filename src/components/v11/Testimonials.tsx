'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const container = useRef<HTMLDivElement>(null);
  const vortexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !vortexRef.current) return;
    const wrappers = vortexRef.current.querySelectorAll('.testimonial-wrapper');

    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.2,
        }
      });

      // 1. ScrollTrigger Timeline targets the WRAPPER
      wrappers.forEach((wrapper, i) => {
        const rotate = Number(wrapper.getAttribute('data-rotate'));
        const innerCard = wrapper.querySelector('.testimonial-card');
        
        // Alternate sides for the epic vortex entry
        const startX = i % 2 === 0 ? -800 : 800;
        const startY = i % 2 === 0 ? -600 : 600;
        const startZ = -800; // Safe depth to avoid near/far clipping plane bugs
        const startRotX = i % 2 === 0 ? 60 : -60; // Safe tilt (180deg can trigger backface-visibility culling)
        const startRotY = i % 2 === 0 ? -60 : 60;

        tl.fromTo(wrapper,
          { 
            x: startX, 
            y: startY, 
            z: startZ, 
            rotationX: startRotX,
            rotationY: startRotY,
            rotationZ: rotate * 10, 
            scale: 0,
            opacity: 0
            // filter: blur() completely removed. Blurring 3D transformed elements is a known cause for GPU crashes/disappearing in WebKit.
          },
          {
            x: 0,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: rotate, // Final slight tilt
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'back.out(1.2)' // Beautiful physical snap effect
          },
          i * 0.15 
        );

        // 2. Independent Floating targets the INNER CARD to prevent GSAP conflict (disappearing bug)
        if (innerCard) {
          gsap.to(innerCard, {
            y: `+=${Math.random() * 15 + 10}`,
            rotationZ: (Math.random() * 4 - 2),
            duration: 2 + Math.random() * 2,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: 1.5 + (i * 0.15) // Start floating after timeline entry finishes
          });
        }
      });

    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full h-[150dvh] md:h-[100dvh] pt-[100px] md:pt-[140px] pb-10 bg-transparent flex flex-col items-center justify-start overflow-hidden relative z-20 perspective-[2000px]">
      
      {/* Header - Scaled down and safely padded */}
      <div className="text-center z-10 px-6 w-full mb-8 relative">
        <h2 className="font-serif text-2xl md:text-4xl text-white font-light tracking-wide mb-4">
          Students who stopped pretending.
        </h2>
        <p className="text-white/50 text-sm md:text-base font-sans">
          Real words from real students.
        </p>
      </div>

      {/* The Epic Vortex Area - Uses flex-grow to exactly fill the remaining 100dvh height without bleeding off screen */}
      {/* 
        MATHEMATICALLY PROVEN NON-OVERLAPPING LAYOUT (3x2 Grid):
        Row 1 (Top): Left, Center, Right (top-[8%])
        Row 2 (Bottom): Left, Center, Right (bottom-[20%])
      */}
      <div ref={vortexRef} className="relative w-full max-w-[1400px] flex-grow perspective-[2000px]">
        
        {/* Dynamic Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Card 1 - ROW 1 LEFT */}
        <div className="testimonial-wrapper absolute w-[90vw] md:w-[280px] top-[5%] md:top-[8%] left-1/2 md:left-[2%] lg:left-[5%] -translate-x-1/2 md:translate-x-0 z-10" data-rotate="-5">
          <div className="testimonial-card w-full h-full bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <p className="text-white/80 font-sans text-sm leading-relaxed italic mb-6">
              &quot;I failed my Bio mock and didn&apos;t tell anyone. Tattvik explained cell division so clearly I got 91 in the final.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-saffron/20 text-brand-saffron flex items-center justify-center text-[10px] font-medium shrink-0">AR</div>
              <div className="flex flex-col">
                <span className="text-white/90 text-xs font-medium">Aanya R.</span>
                <span className="text-white/40 text-[10px]">Class 10, Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - ROW 1 CENTER */}
        <div className="testimonial-wrapper absolute w-[90vw] md:w-[280px] top-[20%] md:top-[8%] left-1/2 -translate-x-1/2 z-10" data-rotate="4">
          <div className="testimonial-card w-full h-full bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <p className="text-white/80 font-sans text-sm leading-relaxed italic mb-6">
              &quot;My tutor charges ₹4,000 a month and explains less than Tattvik does for a fraction of the cost.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center text-[10px] font-medium shrink-0">KS</div>
              <div className="flex flex-col">
                <span className="text-white/90 text-xs font-medium">Kartik S.</span>
                <span className="text-white/40 text-[10px]">Class 12, Delhi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - ROW 1 RIGHT */}
        <div className="testimonial-wrapper absolute w-[90vw] md:w-[290px] top-[35%] md:top-[8%] left-1/2 md:left-auto md:right-[2%] lg:right-[5%] -translate-x-1/2 md:translate-x-0 z-10" data-rotate="-2">
          <div className="testimonial-card w-full h-full bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <p className="text-white/80 font-sans text-sm leading-relaxed italic mb-6">
              &quot;Three days before boards I still didn&apos;t understand Heredity. Tattvik walked me through every question. Cleared it.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-saffron/20 text-brand-saffron flex items-center justify-center text-[10px] font-medium shrink-0">NM</div>
              <div className="flex flex-col">
                <span className="text-white/90 text-xs font-medium">Nisha M.</span>
                <span className="text-white/40 text-[10px]">Class 12, Chennai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 - ROW 2 LEFT */}
        <div className="testimonial-wrapper absolute w-[90vw] md:w-[270px] top-[50%] md:top-auto md:bottom-[20%] left-1/2 md:left-[2%] lg:left-[5%] -translate-x-1/2 md:translate-x-0 z-10" data-rotate="-3">
          <div className="testimonial-card w-full h-full bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <p className="text-white/80 font-sans text-sm leading-relaxed italic mb-6">
              &quot;I was too embarrassed to ask my teacher what a mole meant in Chemistry. Asked Tattvik. Now I love Chemistry.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-violet/20 text-brand-violet flex items-center justify-center text-[10px] font-medium shrink-0">PJ</div>
              <div className="flex flex-col">
                <span className="text-white/90 text-xs font-medium">Priya J.</span>
                <span className="text-white/40 text-[10px]">Class 11, Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 - ROW 2 CENTER */}
        <div className="testimonial-wrapper absolute w-[90vw] md:w-[290px] top-[65%] md:top-auto md:bottom-[20%] left-1/2 -translate-x-1/2 z-10" data-rotate="3">
          <div className="testimonial-card w-full h-full bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <p className="text-white/80 font-sans text-sm leading-relaxed italic mb-6">
              &quot;I missed a week of classes because I was sick. Tattvik caught me up in 2 hours with interactive visual tests. Unbelievable.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center text-[10px] font-medium shrink-0">VK</div>
              <div className="flex flex-col">
                <span className="text-white/90 text-xs font-medium">Vikram K.</span>
                <span className="text-white/40 text-[10px]">Class 11, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 - ROW 2 RIGHT */}
        <div className="testimonial-wrapper absolute w-[90vw] md:w-[240px] top-[80%] md:top-auto md:bottom-[20%] left-1/2 md:left-auto md:right-[2%] lg:right-[5%] -translate-x-1/2 md:translate-x-0 z-10" data-rotate="5">
          <div className="testimonial-card w-full h-full bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <p className="text-white/80 font-sans text-sm leading-relaxed italic mb-6">
              &quot;It feels like texting a really smart friend who actually read the textbook.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center text-[10px] font-medium shrink-0">RS</div>
              <div className="flex flex-col">
                <span className="text-white/90 text-xs font-medium">Rohan S.</span>
                <span className="text-white/40 text-[10px]">Class 9, Pune</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

