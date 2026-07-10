import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { NovidadeCard } from "@/components/novidades/novidade-card";
import { novidades } from "@/components/novidades/novidades-data";

export const metadata: Metadata = {
  title: "Novidades",
  description:
    "Conheça os novos espaços, obras, eventos e atrações que estão transformando Poranga em um destino cada vez mais acolhedor.",
};

export default function NovidadesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sempre em evolução"
        title="Novidades em Poranga"
        description="Acompanhe as novidades que valorizam o turismo, a cultura e os espaços públicos do município."
        image="/images/novidades/eu-amo-poranga.jpg"
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground">
              Descubra o que há de novo
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Poranga está em constante desenvolvimento. Nesta página você
              encontrará novos atrativos, obras, eventos e espaços que tornam a
              cidade ainda mais bonita para moradores e visitantes.
            </p>
          </div>

          <div className="space-y-12">
            {novidades.map((novidade) => (
              <NovidadeCard key={novidade.slug} novidade={novidade} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
