export default function ProductWindow() {
  return (
    <section className="py-32 md:py-40 bg-base-navy px-6 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-20">
        <h2 className="font-serif text-5xl md:text-7xl text-white tracking-tighter leading-[1.1]">
          Your textbook. Explained the way it was always meant to be.
        </h2>
      </div>

      <div className="w-full max-w-6xl aspect-video glass-panel rounded-2xl md:rounded-3xl shadow-[0_0_100px_-20px_rgba(155,48,255,0.4)] overflow-hidden flex flex-col">
        {/* macOS Top Bar */}
        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
           <div className="w-3 h-3 rounded-full bg-red-500/80" />
           <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
           <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        {/* 3-Column Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12">
          {/* Nav */}
          <div className="hidden md:flex col-span-3 border-r border-white/10 p-6 flex-col gap-4 bg-white/5">
             <div className="h-6 w-1/2 bg-white/20 rounded-full mb-6" />
             <div className="h-4 w-3/4 bg-white/10 rounded-full" />
             <div className="h-4 w-5/6 bg-white/10 rounded-full" />
             <div className="h-4 w-2/3 bg-white/10 rounded-full" />
          </div>
          {/* Animated Diagram */}
          <div className="col-span-1 md:col-span-6 border-r border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
             <div className="w-64 h-64 rounded-full border border-brand-cyan/40 animate-[spin_15s_linear_infinite] flex items-center justify-center relative">
               <div className="absolute top-0 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,191,255,1)]" />
               <div className="w-40 h-40 rounded-full border border-brand-violet/40 animate-[spin_8s_linear_infinite_reverse] relative">
                  <div className="absolute bottom-0 w-3 h-3 rounded-full bg-brand-violet shadow-[0_0_10px_rgba(155,48,255,1)]" />
               </div>
             </div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-navy/80 pointer-events-none" />
          </div>
          {/* Chat */}
          <div className="hidden md:flex col-span-3 p-6 flex-col gap-6 justify-end bg-white/5">
             <div className="self-start px-4 py-3 rounded-2xl rounded-tl-none glass-panel text-sm text-white/80 w-5/6">
               How does gravity bend light?
             </div>
             <div className="self-end px-4 py-3 rounded-2xl rounded-tr-none bg-brand-violet/30 border border-brand-violet/50 text-sm text-white w-[90%] shadow-[0_0_20px_rgba(155,48,255,0.2)]">
               Think of space like a trampoline. A heavy bowling ball creates a curve...
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
