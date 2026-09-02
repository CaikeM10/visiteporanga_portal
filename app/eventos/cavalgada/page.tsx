import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Music2,
  Phone,
  Shirt,
  Trophy,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "2ª Grande Cavalgada de Poranga | Visite Poranga",
  description:
    "Confira informações sobre a 2ª Grande Cavalgada de Poranga, que acontece no dia 05 de setembro de 2026.",
};

export default function CavalgadaPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:py-16">
          <Link
            href="/"
            className="
              mb-8
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-muted-foreground
              transition
              hover:text-primary
            "
          >
            <ArrowLeft className="size-4" />
            Voltar para o início
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* TEXTO */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Próximo evento
              </p>

              <h1
                className="
                  mt-4
                  max-w-3xl
                  font-heading
                  text-4xl
                  font-semibold
                  leading-tight
                  text-foreground
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                2ª Grande Cavalgada de Poranga
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Tradição, cultura e música se encontram em mais uma edição da
                Grande Cavalgada de Poranga, reunindo vaqueiros, moradores e
                visitantes para celebrar uma das expressões culturais da nossa
                região.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="size-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Data
                    </p>

                    <p className="mt-1 font-semibold text-foreground">
                      05 de setembro de 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="size-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Início
                    </p>

                    <p className="mt-1 font-semibold text-foreground">
                      Cavalgada às 10h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="size-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Local
                    </p>

                    <p className="mt-1 font-semibold text-foreground">
                      Padre Cícero — BR-404
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* CARTAZ PRINCIPAL */}
            <div
              className="
    relative
    mx-auto
    w-full
    max-w-[480px]

    lg:mx-0
    lg:ml-auto
    lg:w-[280px]
    lg:max-w-[280px]

    min-[1800px]:w-[350px]
    min-[1800px]:max-w-[350px]
  "
            >
              <div
                className="
      relative
      aspect-[4/5]
      w-full
      overflow-hidden
      rounded-[28px]
      border
      border-primary/10
      shadow-xl
    "
              >
                <Image
                  src="/calvagada/eventoalenobeat2.jpeg"
                  alt="Cartaz da 2ª Grande Cavalgada de Poranga"
                  fill
                  priority
                  sizes="(min-width: 1800px) 350px, (min-width: 1024px) 280px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ATRAÇÕES
      ═══════════════════════════════════════ */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Programação
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Atrações Musicais
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              A programação contará com atrações musicais após a realização da
              cavalgada.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-primary/10 bg-secondary/40 p-7">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Music2 className="size-6 text-primary" />
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                Allê no Beat
              </h3>

              <p className="mt-2 text-muted-foreground">Forró Cachorro</p>
            </article>

            <article className="rounded-3xl border border-primary/10 bg-secondary/40 p-7">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Music2 className="size-6 text-primary" />
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                Emerson Cantor
              </h3>

              <p className="mt-2 text-muted-foreground">
                &amp; Forró Diferente
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════
    PROGRAMAÇÃO COMPLETA
═══════════════════════════════════════ */}
      <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
            {/* CONTEÚDO */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                05 de setembro
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
                Programação Completa
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Confira os horários e programe-se para acompanhar todas as
                atividades da 2ª Grande Cavalgada de Poranga.
              </p>

              {/* PROGRAMAÇÃO */}
              <div className="mt-10 space-y-3">
                {/* 08H */}
                <div
                  className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-primary/10
              bg-background
              px-5
              py-4
            "
                >
                  <div className="w-[58px] shrink-0">
                    <span className="font-heading text-xl font-semibold text-primary">
                      08h
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      Café da manhã
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Recepção dos participantes.
                    </p>
                  </div>
                </div>

                {/* 09H */}
                <div
                  className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-primary/10
              bg-background
              px-5
              py-4
            "
                >
                  <div className="w-[58px] shrink-0">
                    <span className="font-heading text-xl font-semibold text-primary">
                      09h
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      Missa dos Vaqueiros
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Momento religioso da programação.
                    </p>
                  </div>
                </div>

                {/* 10H */}
                <div
                  className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-primary/10
              bg-background
              px-5
              py-4
            "
                >
                  <div className="w-[58px] shrink-0">
                    <span className="font-heading text-xl font-semibold text-primary">
                      10h
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      Desfile dos cavalos
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Percurso pelas ruas da cidade.
                    </p>
                  </div>
                </div>

                {/* 12H */}
                <div
                  className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-primary/10
              bg-background
              px-5
              py-4
            "
                >
                  <div className="w-[58px] shrink-0">
                    <span className="font-heading text-xl font-semibold text-primary">
                      12h
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      Almoço para os vaqueiros
                    </p>
                  </div>
                </div>

                {/* 14H */}
                <div
                  className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-primary/10
              bg-background
              px-5
              py-4
            "
                >
                  <div className="w-[58px] shrink-0">
                    <span className="font-heading text-xl font-semibold text-primary">
                      14h
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      Show de Allê no Beat
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Forró Cachorro
                    </p>
                  </div>
                </div>

                {/* 16H */}
                <div
                  className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-primary/10
              bg-background
              px-5
              py-4
            "
                >
                  <div className="w-[58px] shrink-0">
                    <span className="font-heading text-xl font-semibold text-primary">
                      16h
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      Emerson Cantor
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      &amp; Forró Diferente
                    </p>
                  </div>
                </div>
              </div>

              {/* SORTEIO */}
              <div
                className="
            mt-7
            rounded-2xl
            border
            border-primary/20
            bg-primary/5
            p-5
          "
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Sorteio
                </p>

                <p className="mt-2 font-heading text-xl font-semibold text-foreground">
                  Moto Avelloz 125 zero km
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Sorteio destinado aos participantes do evento, conforme as
                  regras estabelecidas pela organização.
                </p>
              </div>
            </div>
            {/* CARTAZ DA PROGRAMAÇÃO */}
            <div
              className="
    relative
    mx-auto
    w-full
    max-w-[430px]

    lg:mx-0
    lg:ml-auto
    lg:w-[265px]
    lg:max-w-[265px]

    min-[1800px]:w-[330px]
    min-[1800px]:max-w-[330px]
  "
            >
              <div
                className="
      relative
      aspect-[4/5]
      w-full
      overflow-hidden
      rounded-[28px]
      border
      border-primary/10
      shadow-lg
    "
              >
                <Image
                  src="/calvagada/programação_alenobeat.jpeg"
                  alt="Programação da 2ª Grande Cavalgada de Poranga"
                  fill
                  sizes="(min-width: 1800px) 330px, (min-width: 1024px) 265px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════
          PARTICIPAÇÃO
      ═══════════════════════════════════════ */}
      <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
            {/* TEXTO */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Participação
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
                Como participar
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Os participantes de Poranga podem realizar sua inscrição
                diretamente na Secretaria de Cultura.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <Users className="mt-1 size-6 shrink-0 text-primary" />

                  <div>
                    <p className="font-semibold text-foreground">
                      Participantes de Poranga
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Inscrições realizadas na Secretaria de Cultura.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 size-6 shrink-0 text-primary" />

                  <div>
                    <p className="font-semibold text-foreground">
                      Participantes de outros municípios
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Inscrições pelo telefone (88) 9 9656-3552.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Shirt className="mt-1 size-6 shrink-0 text-primary" />

                  <div>
                    <p className="font-semibold text-foreground">
                      Primeiros 300 inscritos
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Receberão uma camisa e duas cartelas para participar do
                      sorteio divulgado pela organização.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Trophy className="mt-1 size-6 shrink-0 text-primary" />

                  <div>
                    <p className="font-semibold text-foreground">Premiação</p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Os participantes inscritos poderão concorrer a uma moto
                      zero quilômetro, conforme as regras da organização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* CARTAZ DE INFORMAÇÕES */}
            <div
              className="
    relative
    mx-auto
    w-full
    max-w-[430px]

    lg:mx-0
    lg:ml-auto
    lg:w-[255px]
    lg:max-w-[255px]

    min-[1800px]:w-[320px]
    min-[1800px]:max-w-[320px]
  "
            >
              <div
                className="
      relative
      aspect-[4/5]
      w-full
      overflow-hidden
      rounded-[28px]
      border
      border-primary/10
      shadow-lg
    "
              >
                <Image
                  src="/calvagada/eventoalenobeat.jpeg"
                  alt="Informações de inscrição da 2ª Grande Cavalgada de Poranga"
                  fill
                  sizes="(min-width: 1800px) 320px, (min-width: 1024px) 255px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Viva Poranga
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Programe-se para a 2ª Grande Cavalgada
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            Conheça Poranga, participe da programação e viva de perto nossas
            tradições, cultura e hospitalidade.
          </p>

          <div className="mt-8">
            <Link
              href="/planeje-sua-visita"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-primary
                px-7
                py-3.5
                font-semibold
                text-primary-foreground
                transition
                hover:opacity-90
              "
            >
              Planeje sua visita
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
