import { Sparkles } from "lucide-react";

import { novidades } from "./novidades-data";
import { NovidadeCard } from "./novidade-card";

export function NovidadesSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Sparkles className="size-4" />

            <span className="text-sm font-semibold uppercase tracking-widest">
              Novidades
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Descubra as novidades de Poranga
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            A cidade está em constante transformação. Conheça novos espaços,
            obras e iniciativas que valorizam o turismo, fortalecem a cultura e
            tornam Poranga um destino cada vez mais acolhedor para moradores e
            visitantes.
          </p>
        </div>

        {/* Destaque */}
        <div className="space-y-10">
          {novidades.map((novidade) => (
            <NovidadeCard key={novidade.slug} novidade={novidade} />
          ))}
        </div>
      </div>
    </section>
  );
}
