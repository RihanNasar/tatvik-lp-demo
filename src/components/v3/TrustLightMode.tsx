export default function TrustLightMode() {
  const boards = ["CBSE", "ICSE", "IGCSE", "State Board", "IB", "CBSE", "ICSE", "IGCSE"];

  return (
    <section className="py-40 bg-base-trust px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-[#050820]">
        
        {/* Col 1: Ticker */}
        <div className="flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/10 pb-12 md:pb-0 md:pr-8 overflow-hidden h-64 relative">
          <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-base-trust to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-base-trust to-transparent z-10 pointer-events-none" />
          
          <div className="flex flex-col gap-6 animate-[marqueeVertical_10s_linear_infinite]">
            {boards.map((board, i) => (
              <span key={i} className="font-sans text-4xl font-bold opacity-30 tracking-tight">{board}</span>
            ))}
          </div>
        </div>

        {/* Col 2: Giant Numbers */}
        <div className="flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-black/10 py-12 md:py-0 px-8">
           <h3 className="font-serif text-7xl md:text-[100px] font-extrabold tracking-tighter text-base-navy mb-4 leading-none">8,000+</h3>
           <p className="font-sans text-lg font-bold uppercase tracking-widest text-black/40">Curriculum Lessons</p>
        </div>

        {/* Col 3: Parent Testimonial */}
        <div className="flex flex-col justify-center pt-12 md:pt-0 md:pl-8">
           <p className="font-serif italic text-3xl md:text-4xl leading-tight mb-8">
             "It's the first time I haven't had to force him to study. He actually wants to unlock the next chapter."
           </p>
           <div>
             <p className="font-sans font-bold text-lg">Priya Sharma</p>
             <p className="font-sans text-sm text-black/50 uppercase tracking-widest">Parent of 8th Grader</p>
           </div>
        </div>

      </div>
    </section>
  );
}
