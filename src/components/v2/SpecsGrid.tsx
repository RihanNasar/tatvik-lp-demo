export default function SpecsGrid() {
  const specs = [
    { title: 'Curriculum Coverage', value: '100%', body: 'Aligned with national textbook standards.' },
    { title: 'Response Time', value: '< 1s', body: 'Instantaneous doubt resolution by the AI.' },
    { title: 'Server Uptime', value: '99.9%', body: 'Reliable access anytime, day or night.' },
    { title: 'Data Encryption', value: 'AES-256', body: 'Enterprise-grade security for student data.' },
  ];

  return (
    <section className="py-32 px-6 bg-black text-white border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">The Architecture of Learning</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((spec, i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 p-8 flex flex-col">
              <p className="text-zinc-500 text-sm tracking-[0.18em] uppercase mb-4">{spec.title}</p>
              <p className="text-6xl font-bold tracking-tighter text-white mb-6">{spec.value}</p>
              <p className="text-zinc-400 text-lg">{spec.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
