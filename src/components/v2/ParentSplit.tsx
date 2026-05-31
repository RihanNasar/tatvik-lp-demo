import Image from 'next/image';

export default function ParentSplit() {
  return (
    <section className="relative bg-black text-white border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side: Sticky asset */}
        <div className="lg:sticky lg:top-0 h-[50vh] lg:h-[100dvh] w-full flex items-center justify-center bg-zinc-950 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="relative w-full h-full max-h-[800px]">
            <Image 
              src="/images/parent_analytics_1780134091341.png" 
              alt="Parent Analytics Dashboard" 
              fill 
              className="object-cover opacity-80"
            />
          </div>
        </div>
        
        {/* Right side: Scrolling content */}
        <div className="py-24 px-6 lg:px-24 flex flex-col justify-center">
          <div className="max-w-xl mx-auto space-y-32">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">Insight Without Intrusion.</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                Keep track of academic progress through an elegant, high-level interface. Pragmatic metrics that matter, without drowning you in raw data.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Zero Premium Price</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                By replacing expensive offline tuitions with AI-driven mastery, the financial burden is dramatically reduced, offering unparalleled value.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Actionable Progress</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Receive weekly summaries on completed modules, weak spots, and active interventions. You always know exactly where they stand.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
