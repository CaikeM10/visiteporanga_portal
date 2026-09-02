import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ChefHat, Wheat, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Sabores de Poranga | Visite Poranga",
  description:
    "Conheça a gastronomia tradicional de Poranga, seus ingredientes regionais, costumes culinários e a riqueza cultural presente nos sabores do município.",
};

export default function SaboresPorangaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Cultura e Gastronomia"
        title="Sabores de Poranga"
        description="A gastronomia de Poranga preserva tradições, valoriza os ingredientes da região e faz parte da identidade cultural do município. Descubra como os sabores locais ajudam a contar a história e os costumes da população poranguense."
        image="/images/comida.webp"
      />

      {/* Introdução */}

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Texto */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <ChefHat className="size-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Gastronomia Tradicional
                </span>
              </div>

              <h2 className="mt-6 font-heading text-4xl font-semibold leading-tight text-foreground lg:text-5xl">
                Sabores que preservam a identidade de Poranga.
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A culinária faz parte da história e da cultura do município.
                Receitas transmitidas entre gerações, ingredientes cultivados na
                região e preparações tradicionais refletem o modo de vida das
                famílias poranguenses e ajudam a preservar a identidade local.
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Mais do que alimentação, a gastronomia representa encontros,
                celebrações e costumes que permanecem presentes no cotidiano da
                comunidade e nas festividades realizadas ao longo do ano.
              </p>
            </div>

            {/* Destaque */}

            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                <Wheat className="size-8 text-primary" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-foreground">
                Patrimônio cultural e tradição
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                Os ingredientes produzidos na região e as receitas tradicionais
                fazem parte do patrimônio cultural de Poranga, valorizando os
                saberes populares e fortalecendo a identidade do município.
              </p>

              <div className="mt-8 rounded-2xl bg-secondary p-5">
                <p className="text-sm leading-7 text-secondary-foreground">
                  <strong>Curiosidade:</strong> Em diferentes épocas do ano,
                  especialmente durante celebrações e eventos comunitários, é
                  comum encontrar preparações típicas que reforçam a tradição
                  gastronômica e a hospitalidade do povo poranguense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sabores Tradicionais */}

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Tradição Gastronômica
            </span>

            <h2 className="mt-6 font-heading text-4xl font-semibold text-foreground lg:text-5xl">
              Os sabores que contam a história de Poranga.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A gastronomia local é resultado da combinação entre ingredientes
              produzidos na região, costumes familiares e tradições que
              atravessam gerações. Cada receita preserva parte da identidade
              cultural do município.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <ChefHat className="size-7 text-primary" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-foreground">
                Receitas Tradicionais
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                Receitas preparadas há muitos anos continuam presentes no
                cotidiano das famílias, preservando modos de preparo e sabores
                que fazem parte da memória cultural da comunidade.
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Wheat className="size-7 text-primary" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-foreground">
                Ingredientes da Região
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                Milho, mandioca, feijão, frutas da estação e outros produtos
                cultivados localmente fazem parte da alimentação tradicional e
                valorizam a produção regional.
              </p>
            </article>

            <article className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <MapPin className="size-7 text-primary" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-foreground">
                Experiência Local
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                Experimentar a culinária regional é também conhecer os costumes,
                histórias e a hospitalidade que fazem parte da identidade de
                Poranga.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Ingredientes da Região */}

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Ingredientes da Região
              </span>

              <h2 className="mt-6 font-heading text-4xl font-semibold text-foreground lg:text-5xl">
                A riqueza começa na terra.
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A culinária regional é construída a partir dos ingredientes
                cultivados e produzidos na própria região. O trabalho das
                famílias agricultoras, aliado aos conhecimentos tradicionais,
                mantém viva uma alimentação simples, nutritiva e cheia de
                identidade.
              </p>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Ao longo das estações, diferentes produtos fazem parte da mesa
                dos moradores e também das celebrações culturais, refletindo a
                relação da comunidade com a terra e com a natureza.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl">🌽</p>

                <h3 className="mt-4 font-semibold text-foreground">Milho</h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Presente em diversas receitas tradicionais e festividades
                  populares da região.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl">🌿</p>

                <h3 className="mt-4 font-semibold text-foreground">Mandioca</h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Base para diversos preparos típicos e importante elemento da
                  culinária regional.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl">🍯</p>

                <h3 className="mt-4 font-semibold text-foreground">
                  Produtos Artesanais
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Produções tradicionais valorizam os saberes locais e
                  fortalecem a cultura alimentar do município.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl">🌱</p>

                <h3 className="mt-4 font-semibold text-foreground">
                  Agricultura Familiar
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Importante para a economia local e para a preservação das
                  tradições agrícolas da região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]">
            Cultura e Tradição
          </span>

          <h2 className="mt-8 font-heading text-4xl font-semibold lg:text-5xl">
            A gastronomia também preserva a memória de um povo.
          </h2>

          <div className="mt-12 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm">
            <p className="text-lg leading-8">
              Mais do que receitas, os sabores de Poranga representam
              hospitalidade, convivência e respeito às tradições que fazem parte
              da identidade do município.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
