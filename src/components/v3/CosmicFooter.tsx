export default function CosmicFooter() {
  return (
    <section className="py-40 bg-base-navy px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* Drifting Stars / Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] mix-blend-screen" />
         <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-brand-violet/10 rounded-full blur-[150px] mix-blend-screen" />
         
         <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-50" />
         <div className="absolute bottom-20 right-32 w-1 h-1 bg-white rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }} />
         <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-white rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        <div className="mb-12 w-24 h-24 rounded-full glass-panel flex items-center justify-center shadow-[0_0_80px_rgba(155,48,255,0.4)]">
           <span className="font-sans font-bold text-5xl cosmic-gradient-text mt-[-4px]">त</span>
        </div>
        
        <h2 className="font-serif text-6xl md:text-8xl lg:text-[110px] text-white tracking-tighter leading-[1] mb-16 drop-shadow-2xl">
          The future of learning is personal, intelligent, and yours.
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
           <button className="cosmic-gradient text-white font-sans font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform text-xl shadow-[0_10px_40px_rgba(155,48,255,0.4)] border border-white/20">
             Start Free Trial
           </button>
           <button className="glass-panel text-white font-sans font-bold px-12 py-5 rounded-full hover:bg-white/10 transition-colors text-xl border border-white/20">
             View Curriculum
           </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 text-white/30 font-sans text-sm tracking-widest uppercase">
        © {new Date().getFullYear()} Tattvik AI
      </div>
    </section>
  );
}
