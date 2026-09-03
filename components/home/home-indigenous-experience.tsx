import Image from "next/image";
import Link from "next/link";

import { ArrowRight, BookOpen, Landmark, Sparkles, Users } from "lucide-react";

const indigenousImage = "/indigenas/imghome.png";

const ocaImage = "/indigenas/oca-da-memoria/oca-da-memoria-fachada.webp";

export function HomeIndigenousExperience() {
  return (
    <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* CABEÇALHO */}
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Cultura e memória
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Povos Originários de Poranga
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Uma presença viva na história, na cultura e na identidade do
            município.
          </p>
        </div>

        {/* CARD PRINCIPAL */}
        <article
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-primary/10
            bg-background
            shadow-sm
          "
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* ==================================================
                IMAGEM PRINCIPAL
                IMPORTANTE:
                sem hidden / lg:block
                portanto aparece também no mobile
            ================================================== */}
            <div
              className="
                relative
                order-1
                block
                min-h-[300px]
                w-full
                overflow-hidden
                bg-primary/5
                sm:min-h-[400px]
                lg:min-h-[610px]
              "
            >
              <Image
                src={indigenousImage}
                alt="Povos originários de Poranga"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Povos Originários
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-white sm:text-3xl">
                  Memória indígena de Poranga
                </p>

                <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                  Cultura, memória e identidade preservadas pelas comunidades
                  indígenas do município.
                </p>
              </div>
            </div>

            {/* CONTEÚDO */}
            <div className="order-2 flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-primary/15
                    bg-primary/5
                    px-4
                    py-2
                  "
                >
                  <Sparkles className="size-4 text-primary" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                    Memória • identidade • território
                  </span>
                </div>

                <h3 className="mt-6 max-w-2xl font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Cultura indígena, memória e tradição
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                  A presença indígena faz parte da história e da identidade de
                  Poranga. Conheça as comunidades, seus espaços de memória,
                  saberes, tradições e manifestações culturais.
                </p>

                {/* COMUNIDADES */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-medium text-foreground">
                    Aldeia Umburana
                  </span>

                  <span className="rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-medium text-foreground">
                    Aldeia Cajueiro
                  </span>

                  <span className="rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-medium text-foreground">
                    Tabajara
                  </span>

                  <span className="rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-medium text-foreground">
                    Kalabaça
                  </span>
                </div>
              </div>

              {/* DESTAQUES */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {/* OCA */}
                <div className="rounded-2xl border border-primary/10 bg-secondary/30 p-4">
                  <Landmark className="size-5 text-primary" />

                  <p className="mt-3 font-heading text-base font-semibold text-foreground">
                    Oca da Memória
                  </p>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Museu comunitário indígena dos povos Tabajara e Kalabaça.
                  </p>
                </div>

                {/* ESCOLA */}
                <div className="rounded-2xl border border-primary/10 bg-secondary/30 p-4">
                  <BookOpen className="size-5 text-primary" />

                  <p className="mt-3 font-heading text-base font-semibold text-foreground">
                    Escola Indígena
                  </p>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Educação, memória e fortalecimento da identidade.
                  </p>
                </div>

                {/* CULTURA */}
                <div className="rounded-2xl border border-primary/10 bg-secondary/30 p-4">
                  <Users className="size-5 text-primary" />

                  <p className="mt-3 font-heading text-base font-semibold text-foreground">
                    Cultura Viva
                  </p>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Saberes e tradições transmitidos entre gerações.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  DESTAQUE VISUAL DA OCA
              ================================================== */}
              <div
                className="
                  mt-7
                  grid
                  overflow-hidden
                  rounded-2xl
                  border
                  border-primary/10
                  bg-secondary/20
                  sm:grid-cols-[150px_1fr]
                "
              >
                <div className="relative min-h-[150px] sm:min-h-full">
                  <Image
                    src={ocaImage}
                    alt="Oca da Memória dos povos Tabajara e Kalabaça em Poranga"
                    fill
                    sizes="(min-width: 640px) 150px, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Patrimônio cultural
                  </p>

                  <p className="mt-2 font-heading text-lg font-semibold text-foreground">
                    Conheça a Oca da Memória
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Um espaço comunitário dedicado à preservação da memória, do
                    acervo e da identidade dos povos Tabajara e Kalabaça.
                  </p>
                </div>
              </div>

              {/* AVISO */}
              <div className="mt-7 border-l-2 border-primary pl-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  Conteúdo em atualização colaborativa com as comunidades
                  indígenas de Poranga.
                </p>
              </div>

              {/* CTA */}
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
                    shadow-md
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
          </div>
        </article>
      </div>
    </section>
  );
}
