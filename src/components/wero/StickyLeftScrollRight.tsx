'use client';
import Image from 'next/image';

export default function StickyLeftScrollRight() {
  return (
    <section className="bg-brand-bg text-white relative border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Sticky Side */}
        <div className="lg:sticky lg:top-0 h-[60vh] lg:h-[100dvh] w-full flex items-center justify-center p-6 lg:p-12 border-r border-white/5 bg-[#0B1120]">
           <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-[4rem] shadow-[0_0_150px_rgba(0,255,255,0.2)] border border-brand-cyan/20 flex items-center justify-center overflow-hidden bg-brand-card">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 to-brand-purple/10 animate-pulse" />
             <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-brand-cyan blur-[60px] opacity-40" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-[0_0_20px_rgba(0,255,255,1)]">TATTVIK AI</span>
             </div>
           </div>
        </div>

        {/* Right Scrolling Side */}
        <div className="py-24 px-6 lg:px-24 flex flex-col justify-center bg-[#0d1428]">
          <div className="max-w-xl mx-auto space-y-[40vh]">
            
            <div className="min-h-[50vh] flex flex-col justify-center">
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">Empathetic<br/>Guidance.</h2>
              <p className="text-2xl md:text-3xl text-slate-400 leading-tight">
                Tattvik acts as an ever-present mentor. It doesn't just give the answer; it guides the student to discover it themselves.
              </p>
            </div>

            <div className="min-h-[50vh] flex flex-col justify-center">
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-brand-purple">24/7<br/>Availability.</h2>
              <p className="text-2xl md:text-3xl text-slate-400 leading-tight">
                Doubt solving happens exactly when the student needs it. No waiting for the next tuition class.
              </p>
            </div>

            <div className="min-h-[50vh] flex flex-col justify-center pb-24">
              <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-brand-cyan">Tailored to<br/>the Curriculum.</h2>
              <p className="text-2xl md:text-3xl text-slate-400 leading-tight">
                Every AI response is perfectly aligned with the textbook material, ensuring students stay on track.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
