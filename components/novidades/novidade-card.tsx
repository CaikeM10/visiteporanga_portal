import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react";

import type { Novidade } from "./novidades-data";

interface NovidadeCardProps {
  novidade: Novidade;
}

export function NovidadeCard({ novidade }: NovidadeCardProps) {
  return (
    <article className="group overflow-hidden rounded-[32px] border bg-card shadow-lg transition-all duration-500 hover:shadow-2xl">
      <div className="grid lg:grid-cols-2">
        {/* Imagem */}
        <div className="relative min-h-[430px] overflow-hidden">
          <Image
            src={novidade.image}
            alt={novidade.title}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute left-8 top-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
              <Sparkles className="size-4" />

              {novidade.badge}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col justify-center p-8 lg:p-14">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <CalendarDays className="size-4" />

            <span className="text-sm font-medium">
              Inaugurado em {novidade.date}
            </span>
          </div>

          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            {novidade.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {novidade.description}
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border bg-secondary p-5">
            <div className="rounded-full bg-primary/10 p-3">
              <MapPin className="size-5 text-primary" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Localização</p>

              <p className="font-semibold text-foreground">
                {novidade.location}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={novidade.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90"
            >
              Conhecer
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href={novidade.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3 font-medium transition-all duration-300 hover:bg-secondary"
            >
              <MapPin className="size-4" />
              Como chegar
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
