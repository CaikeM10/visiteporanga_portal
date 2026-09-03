import Link from "next/link";

import { ArrowRight, BookOpen, Leaf, Users } from "lucide-react";

export function HomeIndigenousPeoples() {
  return (
    <section className="relative overflow-hidden bg-foreground py-16 sm:py-20 lg:py-24">
      {/* ELEMENTOS DECORATIVOS */}
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          {/* CONTEÚDO */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Cultura e memória
            </p>

            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight text-background sm:text-4xl lg:text-5xl">
              Povos Originários de Poranga
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-background/75 sm:text-lg">
              A identidade de Poranga também é construída pela presença,
              memória, cultura e resistência dos povos indígenas que fazem parte
              da história e do território do município.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-background/15 bg-background/5 px-4 py-2">
              <span className="text-xs font-medium text-background/70">
                Conteúdo em construção participativa com as comunidades
                indígenas de Poranga.
              </span>
            </div>

            <div className="mt-8">
              <Link
                href="/cultura/povos-indigenas"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-7
                  py-3.5
                  font-semibold
                  text-primary-foreground
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                Conhecer essa história
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* DESTAQUES */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-3xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary/15">
                <Users className="size-5 text-primary" />
              </div>

              <h3 className="mt-5 font-heading text-xl font-semibold text-background">
                Aldeia Umburana
              </h3>

              <p className="mt-3 text-sm leading-6 text-background/65">
                O Plano Municipal de Turismo registra a presença das culturas
                Tabajara e Kalabaça e importantes referências de memória
                indígena no município.
              </p>
            </article>

            <article className="rounded-3xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary/15">
                <Leaf className="size-5 text-primary" />
              </div>

              <h3 className="mt-5 font-heading text-xl font-semibold text-background">
                Aldeia Cajueiro
              </h3>

              <p className="mt-3 text-sm leading-6 text-background/65">
                Território tradicional do povo Tabajara, onde cultura, educação,
                agricultura, artesanato e organização comunitária permanecem
                vivos.
              </p>
            </article>

            <article className="rounded-3xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <div className="flex size-11 items-center justify-center rounded-full bg-primary/15">
                <BookOpen className="size-5 text-primary" />
              </div>

              <h3 className="mt-5 font-heading text-xl font-semibold text-background">
                Cultura viva
              </h3>

              <p className="mt-3 text-sm leading-6 text-background/65">
                Educação indígena, memória, artesanato, culinária, celebrações,
                tradições e saberes transmitidos entre gerações.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
