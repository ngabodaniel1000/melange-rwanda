import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero';
import { MissionSection } from '@/components/sections/mission';
import { MelangeDescriptionSection } from '@/components/sections/melange-description';
import { CurrentOpeningsSection } from '@/components/sections/current-openings';
import { ValuesGridSection } from '@/components/sections/values-grid';
import { FounderStorySection } from '@/components/sections/founder-story';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <MelangeDescriptionSection />
      <CurrentOpeningsSection />
      <ValuesGridSection />
      <FounderStorySection />
      <HowItWorksSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
