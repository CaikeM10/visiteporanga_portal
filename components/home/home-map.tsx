import Link from "next/link";
import { MapPinned, ArrowRight } from "lucide-react";

export function HomeMap() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Explore Poranga
            </span>
          </div>

          <h2 className="mt-5 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Planeje sua rota até Poranga
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Visualize a localização da cidade, descubra os principais atrativos
            e comece a planejar sua viagem.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[34px] border border-primary/10 bg-card shadow-xl">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Mapa de Poranga"
              src="https://maps.google.com/maps?q=Poranga%20Ceara&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/planeje-sua-visita"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              font-medium
              text-primary-foreground
              transition-all
              hover:scale-105
            "
          >
            <MapPinned className="size-9" />
            Planejar minha visita
            <ArrowRight className="size-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
