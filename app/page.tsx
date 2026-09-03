import { HomeHero } from "@/components/home/home-hero";
import { HomeIntro } from "@/components/home/home-intro";
import { HomeExperiences } from "@/components/home/home-experiences";
import { WeatherCard } from "@/components/weather/weather-card";
import { HomeVisitorGuide } from "@/components/home/home-visitor-guide";
import { NovidadesSection } from "@/components/novidades/novidades-section";
import { HomeEvents } from "@/components/home/home-events";
import { HomeHighlights } from "@/components/home/home-highlights";

import { HomeIndigenousExperience } from "@/components/home/home-indigenous-experience";
import { HomeUpcomingEvents } from "@/components/home/home-upcoming-events";
import { HomeMap } from "@/components/home/home-map";
import { MunicipalLeadership } from "@/components/MunicipalLeadership";
import { HomeCta } from "@/components/home/home-cta";

export default function Page() {
  return (
    <main>
      <HomeHero />

      <WeatherCard />

      <HomeIntro />

      <HomeExperiences />
      <HomeIndigenousExperience />

      <HomeVisitorGuide />

      {/* FESTEJA PORANGA */}
      <HomeEvents />

      {/* PONTOS TURÍSTICOS */}
      <HomeHighlights />

      {/* PRÓXIMOS EVENTOS */}
      <HomeUpcomingEvents />

      <NovidadesSection />

      <HomeMap />

      <HomeCta />

      <MunicipalLeadership />
    </main>
  );
}
