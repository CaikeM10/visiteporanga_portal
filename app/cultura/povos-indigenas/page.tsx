/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  Languages,
  Landmark,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Povos Originários de Poranga | Visite Poranga",
  description:
    "Conheça a presença, a memória, a cultura, os territórios e as tradições dos povos indígenas de Poranga.",
};

/* ==================================================
   ACERVO VISUAL
================================================== */

const indigenousGallery = [
  {
    title: "Comunidades e território",
    description:
      "A presença indígena permanece viva no território, nas comunidades e nas manifestações culturais de Poranga.",
    image: "/indigenas/imghome.png",
    alt: "Manifestação cultural dos povos indígenas de Poranga",
    href: "#comunidades",
  },

  {
    title: "Oca da Memória",
    description:
      "Museu comunitário dedicado à preservação da memória, do acervo e da identidade dos povos Tabajara e Kalabaça.",
    image: "/indigenas/oca-da-memoria/oca-da-memoria-fachada.webp",
    alt: "Oca da Memória dos povos Tabajara e Kalabaça em Poranga",
    href: "/cultura/povos-indigenas/oca-da-memoria",
  },

  {
    title: "Cultura e tradições",
    description:
      "Artesanato, objetos, saberes tradicionais e outras referências ajudam a preservar a identidade das comunidades.",
    image: "/indigenas/oca-da-memoria/oca-da-memoria-artesanato-em-palha.webp",
    alt: "Artesanato tradicional preservado na Oca da Memória",
    href: "#cultura-viva",
  },
];

/* ==================================================
   IMAGENS CEDIDAS / AUTORIZADAS

   caminhada(1).webp e caminhada(2).webp
   NÃO são utilizadas nesta versão.
================================================== */

const indigenousImages = {
  hero: "/indigenas/indigena/indigenas(1).webp",
  heroSecondaryOne: "/indigenas/indigena/indigenas(2).webp",
  heroSecondaryTwo: "/indigenas/indigena/indigenas(3).webp",
  roots: "/indigenas/indigena/indigenas(5).webp",
  communities: "/indigenas/indigena/indigenas(6).webp",
};

export default function PovosIndigenasPage() {
  return (
    <main>
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-primary/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/cultura"
            className="
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
            Voltar para Cultura
          </Link>

          <div
            className="
              mt-10
              grid
              gap-12
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* ==================================================
                TEXTO DO HERO
            ================================================== */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Memória • identidade • território
              </p>

              <h1
                className="
                  mt-5
                  font-heading
                  text-4xl
                  font-semibold
                  leading-[1.02]
                  text-foreground
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Povos Originários
                <span className="block text-primary">de Poranga</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                A presença indígena faz parte da história, da identidade e da
                cultura de Poranga. Território, memória, educação, saberes,
                tradições e organização comunitária permanecem vivos no
                município.
              </p>

              {/* IDENTIFICAÇÕES */}

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-medium text-foreground">
                  Aldeia Umburana
                </span>

                <span className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-medium text-foreground">
                  Aldeia Cajueiro
                </span>

                <span className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-medium text-foreground">
                  Povos Tabajara
                </span>

                <span className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-medium text-foreground">
                  Povos Kalabaça
                </span>
              </div>

              {/* AVISO */}

              <div
                className="
                  mt-7
                  inline-flex
                  max-w-2xl
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-primary/10
                  bg-primary/5
                  px-4
                  py-3
                "
              >
                <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />

                <p className="text-sm leading-6 text-muted-foreground">
                  Conteúdo em atualização colaborativa com as comunidades
                  indígenas de Poranga.
                </p>
              </div>
            </div>

            {/* ==================================================
                MOSAICO FOTOGRÁFICO DO HERO
            ================================================== */}

            <div className="w-full">
              <div
                className="
                  grid
                  w-full
                  gap-3
                  sm:gap-4
                  lg:grid-cols-[1.35fr_0.65fr]
                "
              >
                {/* FOTO PRINCIPAL */}

                <div
                  className="
                    relative
                    h-[380px]
                    w-full
                    overflow-hidden
                    rounded-[28px]
                    bg-secondary
                    lg:h-[560px]
                  "
                >
                  <img
                    src={indigenousImages.hero}
                    alt="Presença e cultura indígena em Poranga"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.02]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                      Presença viva
                    </p>

                    <h2 className="mt-2 font-heading text-2xl font-semibold text-white">
                      Cultura, memória e comunidade
                    </h2>
                  </div>
                </div>

                {/* FOTOS SECUNDÁRIAS */}

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
                  <div
                    className="
                      h-[220px]
                      overflow-hidden
                      rounded-[24px]
                      bg-secondary
                      lg:h-[272px]
                    "
                  >
                    <img
                      src={indigenousImages.heroSecondaryOne}
                      alt="Vivências das comunidades indígenas de Poranga"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div
                    className="
                      h-[220px]
                      overflow-hidden
                      rounded-[24px]
                      bg-secondary
                      lg:h-[272px]
                    "
                  >
                    <img
                      src={indigenousImages.heroSecondaryTwo}
                      alt="Atividade cultural indígena em Poranga"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* CRÉDITO */}

              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Imagens cedidas e autorizadas para publicação por{" "}
                <span className="font-medium text-foreground">
                  Leuda Tabajara
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          RAÍZES
      ================================================== */}

      <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className="
              grid
              gap-10
              lg:grid-cols-2
              lg:items-center
              lg:gap-16
            "
          >
            {/* IMAGEM */}

            <div
              className="
                relative
                h-[380px]
                overflow-hidden
                rounded-[30px]
                bg-secondary
                sm:h-[480px]
              "
            >
              <img
                src={indigenousImages.roots}
                alt="Gerações e pertencimento das comunidades indígenas de Poranga"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                  Identidade e pertencimento
                </p>

                <p className="mt-2 max-w-md font-heading text-2xl font-semibold text-white">
                  Uma presença que atravessa gerações
                </p>
              </div>
            </div>

            {/* TEXTO */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Raízes
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                O próprio nome Poranga carrega uma origem indígena
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  Segundo o Plano Municipal de Turismo, o nome Poranga vem do
                  tupi e está associado aos sentidos de “bonita”, “bela”,
                  “formosa” e “linda”.
                </p>

                <p>
                  A presença dos povos originários permanece viva nas
                  comunidades, na educação, nos saberes tradicionais, no
                  artesanato, nas manifestações culturais e na relação com o
                  território.
                </p>

                <p>
                  O Plano Municipal de Turismo também registra a participação
                  indígena em seu processo de construção e reconhece a cultura
                  indígena como uma das potencialidades culturais de Poranga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          COMUNIDADES
      ================================================== */}

      <section
        id="comunidades"
        className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* CABEÇALHO */}

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Comunidades
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Presença indígena em Poranga
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              O Plano Municipal de Turismo registra as aldeias Umburana e
              Cajueiro como importantes referências indígenas do município.
            </p>
          </div>

          {/* ==================================================
              IMAGEM CONTEXTUAL
          ================================================== */}

          <div
            className="
              relative
              mt-10
              h-[330px]
              overflow-hidden
              rounded-[30px]
              bg-secondary
              sm:h-[430px]
              lg:h-[500px]
            "
          >
            <img
              src={indigenousImages.communities}
              alt="Ancestralidade, gerações e memória indígena em Poranga"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                Comunidade
              </p>

              <h3 className="mt-2 max-w-2xl font-heading text-2xl font-semibold text-white sm:text-3xl">
                Cultura e memória construídas coletivamente
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                A transmissão de saberes entre gerações fortalece a identidade,
                a memória e o pertencimento das comunidades indígenas de
                Poranga.
              </p>
            </div>
          </div>

          {/* CARDS */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* UMBURANA */}

            <article className="rounded-[28px] border border-primary/10 bg-secondary/20 p-7 sm:p-9">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="size-6 text-primary" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Comunidade indígena
              </p>

              <h3 className="mt-3 font-heading text-3xl font-semibold text-foreground">
                Aldeia Umburana
              </h3>

              <p className="mt-5 leading-7 text-muted-foreground">
                O Plano registra a Aldeia Umburana entre as comunidades
                indígenas de Poranga e relaciona esse território à presença e à
                cultura dos povos Tabajara e Kalabaça.
              </p>

              <div className="mt-7 border-t border-border pt-6">
                <p className="text-sm leading-6 text-muted-foreground">
                  Informações complementares, memória oral, imagens e dados
                  comunitários serão acrescentados após validação das
                  lideranças.
                </p>
              </div>
            </article>

            {/* CAJUEIRO */}

            <article className="rounded-[28px] border border-primary/10 bg-secondary/20 p-7 sm:p-9">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="size-6 text-primary" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Território tradicional
              </p>

              <h3 className="mt-3 font-heading text-3xl font-semibold text-foreground">
                Aldeia Cajueiro
              </h3>

              <p className="mt-5 leading-7 text-muted-foreground">
                A Aldeia Cajueiro é apresentada no Plano como território
                tradicional do povo Tabajara de Poranga, onde permanecem vivas
                práticas comunitárias, culturais e produtivas.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground">
                  Agricultura familiar
                </span>

                <span className="rounded-full bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground">
                  Artesanato
                </span>

                <span className="rounded-full bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground">
                  Produção de mel
                </span>

                <span className="rounded-full bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground">
                  Carnaúba
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==================================================
          OCA DA MEMÓRIA
      ================================================== */}

      <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className="
              grid
              overflow-hidden
              rounded-[32px]
              border
              border-primary/10
              bg-background
              shadow-sm
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >
            {/* IMAGEM */}

            <div
              className="
                relative
                min-h-[320px]
                overflow-hidden
                sm:min-h-[430px]
                lg:min-h-[560px]
              "
            >
              <Image
                src="/indigenas/oca-da-memoria/oca-da-memoria-fachada.webp"
                alt="Oca da Memória dos povos Tabajara e Kalabaça em Poranga"
                fill
                sizes="(min-width: 1024px) 53vw, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  Patrimônio Cultural Indígena
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-white">
                  Tabajara e Kalabaça • Poranga
                </p>
              </div>
            </div>

            {/* CONTEÚDO */}

            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <Landmark className="size-7 text-primary" />

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Museu Comunitário Indígena
              </p>

              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Oca da Memória
              </h2>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Um espaço comunitário dedicado à preservação da memória, dos
                saberes, das histórias e das referências culturais dos povos
                Tabajara e Kalabaça de Poranga.
              </p>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Seu acervo reúne fotografias, objetos, utensílios, artesanato e
                registros que contribuem para manter vivas experiências e
                conhecimentos transmitidos entre gerações.
              </p>

              <div className="mt-8">
                <Link
                  href="/cultura/povos-indigenas/oca-da-memoria"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-primary
                    px-6
                    py-3.5
                    font-semibold
                    text-primary-foreground
                    shadow-md
                    transition
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
                >
                  Conhecer a Oca da Memória
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* EDUCAÇÃO */}

          <div className="mt-6 rounded-[26px] border border-primary/10 bg-background p-7 sm:p-9">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
              <GraduationCap className="size-6 text-primary" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Educação
            </p>

            <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">
              Educação Escolar Indígena
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
              A educação indígena exerce papel importante no fortalecimento
              cultural e na transmissão de conhecimentos entre gerações, com
              participação direta de professores indígenas.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          CULTURA VIVA
      ================================================== */}

      <section
        id="cultura-viva"
        className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Cultura viva
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Saberes que permanecem vivos
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Cultura, educação, língua, alimentação, artesanato e práticas
              comunitárias fazem parte da continuidade cultural dos povos
              indígenas de Poranga.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-primary/10 bg-secondary/20 p-6">
              <Languages className="size-6 text-primary" />

              <h3 className="mt-5 font-heading text-xl font-semibold">
                Língua e memória
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                O Plano registra ações de fortalecimento do nheengatu,
                relacionado ao tronco linguístico tupi-guarani.
              </p>
            </article>

            <article className="rounded-2xl border border-primary/10 bg-secondary/20 p-6">
              <Sprout className="size-6 text-primary" />

              <h3 className="mt-5 font-heading text-xl font-semibold">
                Saberes da terra
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Agricultura, plantas medicinais, mel, pesca e outros saberes
                permanecem associados à vida comunitária.
              </p>
            </article>

            <article className="rounded-2xl border border-primary/10 bg-secondary/20 p-6">
              <HeartHandshake className="size-6 text-primary" />

              <h3 className="mt-5 font-heading text-xl font-semibold">
                Artesanato
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A produção artesanal integra expressão cultural, memória e
                diferentes atividades econômicas das comunidades.
              </p>
            </article>

            <article className="rounded-2xl border border-primary/10 bg-secondary/20 p-6">
              <BookOpen className="size-6 text-primary" />

              <h3 className="mt-5 font-heading text-xl font-semibold">
                Saberes tradicionais
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Conhecimentos transmitidos entre gerações fortalecem identidade,
                pertencimento e continuidade cultural.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ==================================================
          CELEBRAÇÕES
      ================================================== */}

      <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Celebrações
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Um calendário de memória e tradição
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                O Plano Municipal registra diferentes celebrações que fazem
                parte da vida cultural das comunidades indígenas de Poranga.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-5 rounded-2xl border border-primary/10 bg-background p-5">
                <CalendarDays className="mt-1 size-6 shrink-0 text-primary" />

                <div>
                  <p className="font-heading text-xl font-semibold">
                    Abril — Mês da Resistência Indígena
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Jogos indígenas, rituais, artesanato, culinária e noites
                    culturais integram as atividades registradas pelo Plano.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl border border-primary/10 bg-background p-5">
                <CalendarDays className="mt-1 size-6 shrink-0 text-primary" />

                <div>
                  <p className="font-heading text-xl font-semibold">
                    Junho — Festa da Colheita
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Uma das celebrações tradicionais registradas na Aldeia
                    Cajueiro, marcada por partilhas, renovação das vestes
                    culturais e toré.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl border border-primary/10 bg-background p-5">
                <CalendarDays className="mt-1 size-6 shrink-0 text-primary" />

                <div>
                  <p className="font-heading text-xl font-semibold">
                    Agosto — Farinhadas e partilha
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    A casa de farinha e as farinhadas aparecem no Plano como
                    parte importante da coletividade e da partilha do beijú.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================
    RESISTÊNCIA E RECONHECIMENTO
================================================== */}

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* CABEÇALHO */}

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Resistência • memória • reconhecimento
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                26 de agosto
              </h2>

              <p className="mt-2 font-heading text-2xl font-semibold text-primary sm:text-3xl">
                Dia Municipal dos Povos Indígenas de Poranga
              </p>
            </div>

            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A presença indígena também se manifesta nos espaços públicos de
              Poranga. Mobilizações, encontros e manifestações culturais
              reafirmam a identidade, a memória, a resistência e a participação
              dos povos indígenas na história do município.
            </p>
          </div>

          {/* ==================================================
        IMAGENS DA CAMINHADA
    ================================================== */}

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {/* CAMINHADA 1 */}

            <div
              className="
          relative
          h-[360px]
          overflow-hidden
          rounded-[28px]
          bg-secondary
          sm:h-[460px]
          lg:h-[520px]
        "
            >
              <img
                src="/indigenas/indigena/indigenas(6).webp"
                alt="Mobilização dos povos indígenas de Poranga"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                  Presença no território
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-white">
                  Resistência e visibilidade
                </p>
              </div>
            </div>

            {/* CAMINHADA 2 */}

            <div
              className="
          relative
          h-[360px]
          overflow-hidden
          rounded-[28px]
          bg-secondary
          sm:h-[460px]
          lg:h-[520px]
        "
            >
              <img
                src="/indigenas/indigena/caminhada(2).webp"
                alt="Manifestação e presença pública dos povos indígenas de Poranga"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                  Memória coletiva
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-white">
                  Uma história de luta e pertencimento
                </p>
              </div>
            </div>
          </div>

          {/* CRÉDITO */}

          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Registros fotográficos cedidos e autorizados para publicação pelas
            comunidades indígenas de Poranga.
          </p>

          {/* ==================================================
        MARCO LEGAL
    ================================================== */}

          <div
            className="
        mt-12
        grid
        gap-8
        rounded-[30px]
        border
        border-primary/15
        bg-primary/5
        p-7
        sm:p-9
        lg:grid-cols-[0.35fr_1fr]
        lg:items-center
        lg:p-12
      "
          >
            {/* DATA */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Marco municipal
              </p>

              <p className="mt-4 font-heading text-6xl font-semibold leading-none text-primary sm:text-7xl">
                26
              </p>

              <p className="mt-2 font-heading text-2xl font-semibold text-foreground">
                Agosto
              </p>
            </div>

            {/* TEXTO */}

            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Reconhecimento oficial da presença e da resistência indígena
              </h3>

              <p className="mt-5 leading-7 text-muted-foreground">
                O município de Poranga reconhece oficialmente uma data dedicada
                à valorização da presença, da memória e da resistência dos povos
                indígenas do município.
              </p>

              <div
                className="
            mt-6
            inline-flex
            flex-col
            rounded-2xl
            border
            border-primary/10
            bg-background
            px-5
            py-4
          "
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Referência legal
                </span>

                <span className="mt-1 font-heading text-lg font-semibold text-foreground">
                  Lei Municipal nº 251/2025
                </span>

                <span className="mt-1 text-sm text-muted-foreground">
                  26 de agosto
                </span>
              </div>

              <p className="mt-5 text-xs leading-5 text-muted-foreground">
                A referência legal deve ser apresentada conforme o texto oficial
                publicado pelo Município de Poranga.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================
          TERRITÓRIO
      ================================================== */}

      <section className="bg-foreground py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Território e preservação
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-background sm:text-4xl">
                Preservar o território também é preservar cultura
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-background/70">
                O Plano registra ações comunitárias voltadas à proteção
                territorial, ambiental e cultural, além da manutenção de
                práticas tradicionais e espaços de importância para as
                comunidades.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-background/70">
                Por respeito às comunidades, locais sagrados, rotas, coordenadas
                e formas de acesso não serão publicados pelo portal sem
                autorização e orientação comunitária.
              </p>
            </div>

            <div className="rounded-[30px] border border-background/10 bg-background/5 p-8">
              <ShieldCheck className="size-7 text-primary" />

              <h3 className="mt-6 font-heading text-2xl font-semibold text-background">
                Turismo responsável
              </h3>

              <p className="mt-4 leading-7 text-background/65">
                Informações sobre visitação às comunidades, espaços de memória
                ou territórios tradicionais serão apresentadas conforme
                orientação das próprias comunidades indígenas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          ACERVO VISUAL
      ================================================== */}

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Acervo
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Imagens e memórias
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Registros visuais ajudam a apresentar parte da cultura, da memória
              e das referências preservadas pelas comunidades indígenas de
              Poranga.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {indigenousGallery.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="
                  group
                  relative
                  isolate
                  flex
                  min-h-[390px]
                  flex-col
                  justify-end
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-primary/10
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="
                    (min-width: 1024px) 33vw,
                    (min-width: 640px) 50vw,
                    100vw
                  "
                  className="
                    -z-20
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    -z-10
                    bg-gradient-to-t
                    from-black/85
                    via-black/30
                    to-transparent
                  "
                />

                <div>
                  <h3 className="flex items-center gap-2 font-heading text-2xl font-semibold text-white">
                    {item.title}

                    <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/90">
                    Conhecer mais
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          COMPROMISSO EDITORIAL
      ================================================== */}

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[30px] border border-primary/15 bg-background p-7 sm:p-10">
            <ShieldCheck className="size-7 text-primary" />

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Compromisso editorial
            </p>

            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground">
              Informação construída com participação
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
              Esta página está em processo de atualização. Textos, fotografias,
              informações de visitação e demais registros serão ampliados a
              partir do diálogo e da validação das comunidades indígenas de
              Poranga.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
              O objetivo do Visite Poranga é contribuir para a valorização da
              memória, da cultura e dos saberes dos povos originários com
              respeito à sua autonomia e às orientações das próprias
              comunidades.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
