import { FestejaHero } from "@/components/festeja/festeja-hero";
import { FestejaAbout } from "@/components/festeja/festeja-about";
import { FestejaSchedule } from "@/components/festeja/festeja-schedule";
import { FestejaArtists } from "@/components/festeja/festeja-artists";
import { FestejaLocation } from "@/components/festeja/festeja-location";
import { FestejaGallery } from "@/components/festeja/festeja-gallery";
import { FestejaTips } from "@/components/festeja/festeja-tips";
import { FestejaCTA } from "@/components/festeja/festeja-cta";

export default function EventosPage() {
  return (
    <main>
      <FestejaHero />

      <FestejaAbout />

      <FestejaSchedule />

      {/*  <FestejaArtists />*/}

      <FestejaLocation />

      {/* <FestejaGallery /> */}

      <FestejaTips />

      <FestejaCTA />
    </main>
  );
}
