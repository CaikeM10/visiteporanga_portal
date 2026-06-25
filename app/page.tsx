import { HomeHero } from "@/components/home/home-hero";
import { HomeIntro } from "@/components/home/home-intro";
import { HomeExperiences } from "@/components/home/home-experiences";
import { HomeVisitorGuide } from "@/components/home/home-visitor-guide";
import { HomeEvents } from "@/components/home/home-events";
import { HomeHighlights } from "@/components/home/home-highlights";
import { HomeMap } from "@/components/home/home-map";
import { HomeCta } from "@/components/home/home-cta";

export default function Page() {
  return (
    <main>
      <HomeHero />
      <HomeIntro />
      <HomeExperiences />
      <HomeVisitorGuide />
      <HomeEvents />
      <HomeHighlights />
      <HomeMap />
      <HomeCta />
    </main>
  );
}
