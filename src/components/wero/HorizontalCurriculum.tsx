'use client';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalCurriculum() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden bg-brand-bg text-white">
      <div ref={track} className="flex h-[100dvh] items-center w-[300vw]">
        
        {/* Intro Slide */}
        <div className="w-screen flex flex-col px-12 md:px-24">
          <h2 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[1] max-w-5xl text-white">
            Curriculum, <br />
            <span className="text-slate-600">Reimagined.</span>
          </h2>
          <p className="mt-12 text-3xl text-slate-400 max-w-3xl leading-tight">
            Strictly aligned with textbooks. Activities and revisions built natively into the platform.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="w-screen flex items-center justify-center px-12 md:px-24">
          <div className="w-full max-w-6xl h-[80vh] bg-brand-card rounded-[5rem] border-[8px] border-brand-cyan/20 flex flex-col md:flex-row items-center justify-between p-24 shadow-[0_0_150px_rgba(0,255,255,0.1)]">
             <div className="max-w-2xl">
                <h3 className="text-6xl font-extrabold text-brand-cyan mb-8 tracking-tighter">Interactive Activities</h3>
                <p className="text-3xl text-slate-300 leading-tight">
                  Drag and drop, visual mapping, and interactive experiments replace static textbook diagrams.
                </p>
             </div>
             <div className="w-80 h-80 bg-brand-cyan/20 rounded-full blur-[80px]" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-screen flex items-center justify-center px-12 md:px-24">
          <div className="w-full max-w-6xl h-[80vh] bg-[#1a1025] rounded-[5rem] border-[8px] border-brand-purple/20 flex flex-col md:flex-row items-center justify-between p-24 shadow-[0_0_150px_rgba(160,32,240,0.1)]">
             <div className="max-w-2xl">
                <h3 className="text-6xl font-extrabold text-brand-purple mb-8 tracking-tighter">Smart Revision</h3>
                <p className="text-3xl text-slate-300 leading-tight">
                  AI tracks retention and automatically schedules revision quizzes right before you forget.
                </p>
             </div>
             <div className="w-80 h-80 bg-brand-purple/20 rounded-full blur-[80px]" />
          </div>
        </div>

      </div>
    </section>
  );
}
