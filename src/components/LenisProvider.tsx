'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function GsapSyncer() {
  const lenis = useLenis(ScrollTrigger.update);
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [lenis]);
  return null;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <GsapSyncer />
      {children}
    </ReactLenis>
  );
}
