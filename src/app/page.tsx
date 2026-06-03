import FloatingNav from '@/components/v4/FloatingNav';
import CinematicHero from '@/components/v7/CinematicHero';
import TypographicMask from '@/components/v7/TypographicMask';
import TrustMarquee from '@/components/v7/TrustMarquee';
import ExpandingComparison from '@/components/v7/ExpandingComparison';

import IllustratedScene from '@/components/v11/IllustratedScene';
import Features from '@/components/v11/Features';
import BlobWipe from '@/components/v11/BlobWipe';
import Testimonials from '@/components/v11/Testimonials';
import FinalCTA from '@/components/v11/FinalCTA';
import SchoolCTA from '@/components/v11/SchoolCTA';

export default function Home() {
  return (
    <main className="block min-h-screen bg-transparent text-white selection:bg-brand-cyan/30 selection:text-white">
      <FloatingNav />
        <CinematicHero />
        <TypographicMask />
        
        <IllustratedScene />
        <Features />
        <TrustMarquee />
        
        <BlobWipe />
        <Testimonials />
        
      <ExpandingComparison />
      <SchoolCTA />
      <FinalCTA />
    </main>
  );
}

