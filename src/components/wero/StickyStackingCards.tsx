'use client';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StickyStackingCards() {
  const ref = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Gamified Quests",
      desc: "Turn every chapter into a quest. Earn badges and track progress.",
      color: "bg-brand-card",
      border: "border-brand-cyan/20"
    },
    {
      title: "Interactive Revisions",
      desc: "No more boring re-reads. Practice with dynamic quizzes and flashcards.",
      color: "bg-[#0f172a]",
      border: "border-brand-purple/20"
    },
    {
      title: "Visual Learning",
      desc: "Concepts are broken down into beautiful, digestible visual models.",
      color: "bg-[#1e1b4b]",
      border: "border-brand-cyan/40"
    }
  ];

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top 5%",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top 5%",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top 5%",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-brand-bg py-32">
      <div className="max-w-5xl mx-auto px-6 mb-16">
         <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1]">
           Learning shouldn't be a chore. <br/><span className="text-brand-purple">Make it fun.</span>
         </h2>
      </div>
      <div ref={ref} className="relative w-full max-w-5xl mx-auto px-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`stack-card sticky top-[5%] min-h-[90vh] flex items-center justify-center`}
          >
            <div className={`w-full h-[80vh] rounded-[4rem] ${feature.color} border-4 ${feature.border} flex flex-col items-center justify-center text-center p-12 shadow-2xl`}>
               <h3 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter">{feature.title}</h3>
               <p className="text-2xl md:text-3xl text-slate-300 max-w-2xl leading-tight">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
