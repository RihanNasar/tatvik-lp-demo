import Image from 'next/image';

const logos = [
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
  { name: 'Google Workspace', icon: 'https://cdn.simpleicons.org/googleworkspace/ffffff' },
  { name: 'Microsoft', icon: 'https://cdn.simpleicons.org/microsoft/ffffff' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/ffffff' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/ffffff' },
];

export default function TrustedMarquee() {
  return (
    <section className="py-24 border-y border-white/5 overflow-hidden bg-black flex flex-col items-center">
      <p className="text-zinc-600 text-sm tracking-[0.18em] uppercase mb-12">Trusted by EdTech Pioneers</p>
      <div className="flex w-full space-x-16 group relative">
        {/* We use standard tailwind classes or inline style for the marquee since it requires a custom keyframe. */}
        <div className="flex space-x-16 min-w-full justify-around items-center opacity-60" style={{ animation: 'marquee 20s linear infinite' }}>
          {logos.map((logo, i) => (
            <img key={i} src={logo.icon} alt={logo.name} className="h-8 object-contain" />
          ))}
          {logos.map((logo, i) => (
            <img key={i + logos.length} src={logo.icon} alt={logo.name} className="h-8 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
