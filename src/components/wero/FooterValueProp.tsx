export default function FooterValueProp() {
  return (
    <section className="bg-brand-bg py-32 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-[1600px] min-h-[90vh] bg-brand-card rounded-[5rem] md:rounded-[8rem] flex flex-col items-center justify-center text-center p-12 md:p-32 border-t-[8px] border-brand-cyan/30 shadow-[0_-30px_150px_rgba(0,255,255,0.1)] relative overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-brand-purple/20 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-cyan/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl">
          <h2 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[1] mb-12 text-white">
            Eliminate Expensive Tuitions.
          </h2>
          <p className="text-3xl md:text-4xl text-slate-300 mb-16 max-w-4xl mx-auto leading-tight">
            Get 24/7 AI-driven support, gamified learning, and an adaptive curriculum at a fraction of the cost.
          </p>
          <button className="bg-white text-black font-extrabold text-2xl px-16 py-8 rounded-full hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(255,255,255,0.2)]">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
