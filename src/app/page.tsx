import HeroSection from "@/components/home/HeroSection";
import StudioIntroSection from "@/components/home/StudioIntroSection";
import FeaturedGameSection from "@/components/home/FeaturedGameSection";
import FutureGamesSection from "@/components/home/FutureGamesSection";
import MediaSection from "@/components/home/MediaSection";
import NewsSection from "@/components/home/NewsSection";
import CommunitySection from "@/components/home/CommunitySection";
import CTASection from "@/components/home/CTASection";
import { games } from "@/content/games";

export default function HomePage() {
  const revenant = games.find((g) => g.id === "revenant-survivors");
  return (
    <main id="page-home" data-screen-label="01 Home">
      <HeroSection />
      <StudioIntroSection />
      {revenant && <FeaturedGameSection game={revenant} />}
      <FutureGamesSection />
      <MediaSection />
      <NewsSection />
      <CommunitySection />
      <CTASection />
    </main>
  );
}
