export default function FinalCTA() {
  return (
    <section className="py-40 px-6 bg-zinc-950 text-white flex flex-col items-center justify-center relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-3xl text-center relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
          Ready to Shift the Paradigm?
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto">
          Equip your students with the textbook of the future. Start your trial today.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-5 rounded-none transition-colors text-lg">
          Join the Universe
        </button>
      </div>
    </section>
  );
}
