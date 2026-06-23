import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPin, Clock, Mountain } from "lucide-react";
import { attractions } from "@/lib/data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const attraction = attractions.find((item) => item.slug === slug);

  if (!attraction) {
    return {
      title: "Atrativo não encontrado",
    };
  }

  return {
    title: attraction.name,
    description: attraction.short,
  };
}

export async function generateStaticParams() {
  return attractions.map((attraction) => ({
    slug: attraction.slug,
  }));
}

export default async function AttractionPage({ params }: Props) {
  const { slug } = await params;

  const attraction = attractions.find((item) => item.slug === slug);

  if (!attraction) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div>
            <span className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
              {attraction.category}
            </span>

            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold text-white sm:text-5xl">
              {attraction.name}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-white/90">
              {attraction.short}
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            {/* Descrição */}
            <div>
              <h2 className="font-heading text-3xl font-semibold">
                Sobre o local
              </h2>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                {attraction.description}
              </p>

              <h3 className="mt-10 font-heading text-2xl font-semibold">
                Destaques
              </h3>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {attraction.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Melhor época
                    </p>

                    <p className="font-medium">{attraction.bestTime}</p>
                  </div>
                </div>
              </div>

              {attraction.difficulty && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <Mountain className="size-5 text-primary" />

                    <div>
                      <p className="text-sm text-muted-foreground">Nível</p>

                      <p className="font-medium">{attraction.difficulty}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-primary" />

                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>

                    <p className="font-medium">Poranga • Ceará</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(
                  attraction.name + " Poranga Ceará",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
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
                Como chegar
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
