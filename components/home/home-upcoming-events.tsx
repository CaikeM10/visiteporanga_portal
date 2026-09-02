import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CalendarDays, Clock, MapPin, Music2 } from "lucide-react";

export function HomeUpcomingEvents() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* CABEÇALHO */}
        <div className="mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Agenda
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Próximos Eventos em Poranga
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Cultura, tradição e entretenimento também fazem parte da
              experiência de conhecer Poranga. Confira o que vem por aí.
            </p>
          </div>
        </div>

        {/* EVENTO */}
        <article
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-primary/10
            bg-secondary/35
            lg:grid
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* IMAGEM */}
          <div
            className="
              relative
              min-h-[380px]
              overflow-hidden
              bg-muted
              sm:min-h-[480px]
              lg:min-h-[520px]
            "
          >
            <Image
              src="/calvagada/eventoalenobeat.jpeg"
              alt="2ª Grande Cavalgada de Poranga"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

            {/* DATA */}
            <div
              className="
                absolute
                left-5
                top-5
                flex
                h-[74px]
                w-[74px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                bg-background/95
                shadow-md
                backdrop-blur-md
              "
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                Set
              </span>

              <span className="font-heading text-3xl font-semibold leading-none text-foreground">
                05
              </span>
            </div>

            <div className="absolute bottom-5 left-5">
              <span
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  backdrop-blur-md
                "
              >
                Próximo evento
              </span>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              05 de setembro
            </p>

            <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              2ª Grande Cavalgada de Poranga
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Um encontro de tradição, cultura e música que reúne vaqueiros,
              moradores e visitantes para mais uma edição da Grande Cavalgada de
              Poranga.
            </p>

            {/* INFORMAÇÕES */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CalendarDays className="size-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Data
                  </p>

                  <p className="mt-1 font-medium text-foreground">
                    05 de setembro de 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="size-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Início
                  </p>

                  <p className="mt-1 font-medium text-foreground">
                    Cavalgada às 10h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="size-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Local
                  </p>

                  <p className="mt-1 font-medium text-foreground">
                    Padre Cícero — BR-404
                  </p>
                </div>
              </div>
            </div>

            {/* ATRAÇÕES */}
            <div className="mt-8 border-t border-primary/10 pt-7">
              <div className="flex items-center gap-2">
                <Music2 className="size-5 text-primary" />

                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                  Atrações musicais
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-background px-5 py-4">
                  <p className="font-heading text-lg font-semibold text-foreground">
                    Allê no Beat
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Forró Cachorro
                  </p>
                </div>

                <div className="rounded-2xl bg-background px-5 py-4">
                  <p className="font-heading text-lg font-semibold text-foreground">
                    Emerson Cantor
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    &amp; Forró Diferente
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/eventos/cavalgada"
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
                Conhecer o evento
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
