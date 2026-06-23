import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { attractions } from "@/lib/data";
import { AttractionCard } from "@/components/attraction-card";

export function HomeHighlights() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-primary/20
                bg-primary/5
                px-5
                py-2
              "
            >
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                📍 Destaques
              </span>
            </div>

            <h2
              className="
                mt-6
                font-heading
                text-4xl
                font-semibold
                leading-tight
                text-foreground
                sm:text-5xl
                lg:text-5xl
              "
            >
              Pontos turísticos imperdíveis
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Conheça alguns dos lugares mais visitados de Poranga e descubra
              paisagens, história e experiências que tornam nossa cidade única.
            </p>
          </div>

          <Link
            href="/pontos-turisticos"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              self-start
              rounded-full
              border
              border-primary/20
              bg-primary/5
              px-7
              py-3.5
              font-semibold
              text-primary
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-primary
              hover:text-primary-foreground
              hover:shadow-lg
              hover:shadow-primary/20
              lg:self-auto
            "
          >
            Ver todos os atrativos
            <ArrowRight
              className="
                size-5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.slug} attraction={attraction} />
          ))}
        </div>

        {/* CTA */}

        <div className="mt-20 flex justify-center">
          <Link
            href="/planeje-sua-visita"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-secondary
              px-8
              py-4
              font-medium
              text-foreground
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-primary
              hover:text-primary-foreground
              hover:shadow-lg
            "
          >
            <MapPinned className="size-5" />
            Planejar minha visita
          </Link>
        </div>
      </div>
    </section>
  );
}
