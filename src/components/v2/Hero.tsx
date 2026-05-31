import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/images/hero_cosmic_orb_1780134037547.png" 
          alt="Cosmic Starfield Aura" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" />
      </div>
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans tracking-tighter leading-[1.1] text-white font-bold mb-6">
          The Cosmos of Learning. Unlocked.
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed">
          An AI-powered personalized platform and intelligent textbook. Built for curious students, pragmatic parents, and cautious administrators.
        </p>
        <div className="flex gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-none transition-colors">
            Join the Universe
          </button>
        </div>
      </div>
    </section>
  );
}
