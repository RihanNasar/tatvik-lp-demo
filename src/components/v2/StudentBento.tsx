import Image from 'next/image';

export default function StudentBento() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-white">The Student Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 relative bg-zinc-900 border border-white/10 p-8 min-h-[450px] flex flex-col justify-end overflow-hidden group">
            <Image 
              src="/images/student_gamified_1780134069859.png" 
              alt="Gamified Journey" 
              fill 
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Gamified Journeys</h3>
              <p className="text-zinc-300 max-w-md leading-relaxed">
                Learning feels like an achievement. Earn badges, track progress, and conquer modules at your own pace without losing momentum.
              </p>
            </div>
          </div>
          
          <div className="col-span-1 bg-zinc-900 border border-white/10 p-8 min-h-[450px] flex flex-col justify-end">
             <h3 className="text-2xl font-bold mb-4 text-white">Always Available</h3>
             <p className="text-zinc-400 leading-relaxed">Your AI mentor is online 24/7. Ask questions anytime, no scheduling required.</p>
          </div>
          
          <div className="col-span-1 bg-zinc-900 border border-white/10 p-8 min-h-[450px] flex flex-col justify-end">
             <h3 className="text-2xl font-bold mb-4 text-white">Deep Context</h3>
             <p className="text-zinc-400 leading-relaxed">Answers are tailored to the exact chapter and subject you are studying right now.</p>
          </div>
          
          <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-cyan-900/30 to-black border border-white/10 p-8 min-h-[450px] flex flex-col justify-end relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
             <div className="relative z-10">
               <h3 className="text-3xl font-bold mb-4 text-cyan-400">Adaptive Curriculum</h3>
               <p className="text-zinc-300 max-w-md leading-relaxed">
                 The textbook morphs based on your weaknesses and strengths. Mastery is the only constant in this dynamic learning environment.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
