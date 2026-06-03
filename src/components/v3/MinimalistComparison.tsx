export default function MinimalistComparison() {
  const specs = [
    { label: "Availability", left: "2 days a week", right: "24/7/365" },
    { label: "Patience", left: "Limited", right: "Infinite" },
    { label: "Curriculum Match", left: "Variable", right: "100% Aligned" },
    { label: "Cost", left: "Expensive", right: "Affordable" },
    { label: "Method", left: "Static Lectures", right: "Interactive & Gamified" },
  ];

  return (
    <section className="py-40 bg-transparent px-6 relative flex flex-col items-center">
      <div className="max-w-6xl w-full relative">
        
        <div className="grid grid-cols-2 relative">
          
          {/* Central glowing divider */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-cyan to-transparent shadow-[0_0_30px_rgba(0,191,255,1)]" />

          {/* Left Column (Private Tutor) */}
          <div className="flex flex-col items-end pr-8 md:pr-20 py-12 gap-16">
            <h3 className="font-sans text-2xl md:text-5xl font-extrabold text-white/30 tracking-tight uppercase">Private Tutor</h3>
            <div className="flex flex-col gap-12 md:gap-16 text-right">
              {specs.map((spec, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white/20 font-sans text-xs md:text-sm uppercase tracking-[0.2em] mb-2">{spec.label}</span>
                  <span className="font-serif text-3xl md:text-5xl text-white/40 blur-[1px]">{spec.left}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Tattvik AI) */}
          <div className="flex flex-col items-start pl-8 md:pl-20 py-12 gap-16">
            <h3 className="font-sans text-2xl md:text-5xl font-extrabold text-brand-cyan tracking-tight uppercase drop-shadow-[0_0_20px_rgba(0,191,255,0.6)]">Tattvik AI</h3>
            <div className="flex flex-col gap-12 md:gap-16 text-left">
              {specs.map((spec, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white/40 font-sans text-xs md:text-sm uppercase tracking-[0.2em] mb-2">{spec.label}</span>
                  <span className="font-serif text-3xl md:text-5xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{spec.right}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

