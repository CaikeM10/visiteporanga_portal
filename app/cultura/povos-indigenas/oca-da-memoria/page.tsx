import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  Landmark,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { OcaMemoryCarousel } from "@/components/indigenous/oca-memory-carousel";

export const metadata: Metadata = {
  title: "Oca da Memória | Visite Poranga",
  description:
    "Conheça a Oca da Memória, museu comunitário indígena dedicado à preservação da memória, cultura e identidade dos povos Tabajara e Kalabaça de Poranga.",
};

export default function OcaDaMemoriaPage() {
  return (
    <main>
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Link
            href="/cultura/povos-indigenas"
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
            Povos Originários
          </Link>

          <div
            className="
              mt-10
              grid
              gap-10
              lg:grid-cols-[1.1fr_0.9fr]
              lg:items-center
              lg:gap-16
            "
          >
            {/* FOTO PRINCIPAL */}
            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                rounded-[28px]
                bg-secondary
                sm:min-h-[420px]
                lg:min-h-[520px]
              "
            >
              <Image
                src="/indigenas/oca-da-memoria/oca-da-memoria-fachada.webp"
                alt="Oca da Memória dos povos Tabajara e Kalabaça em Poranga"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              {/* LEGENDA */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Patrimônio Cultural Indígena
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-white">
                  Tabajara e Kalabaça • Poranga
                </p>
              </div>
            </div>

            {/* CONTEÚDO */}
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
                <Landmark className="size-4 text-primary" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Museu Comunitário Indígena
                </span>
              </div>

              <h1
                className="
                  mt-6
                  font-heading
                  text-4xl
                  font-semibold
                  leading-tight
                  text-foreground
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Oca da Memória
              </h1>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Um espaço dedicado à preservação da memória, da cultura, dos
                saberes e da identidade dos povos indígenas Tabajara e Kalabaça
                de Poranga.
              </p>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Seu acervo reúne fotografias, documentos, objetos, utensílios,
                artesanato e diferentes registros que ajudam a contar a
                trajetória das comunidades indígenas do município.
              </p>

              {/* MAPS */}
              <div className="mt-8">
                <a
                  href="https://maps.app.goo.gl/ZyTxkCFwGCP4NfWE8"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <MapPin className="size-5" />
                  Ver no Google Maps
                  <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SOBRE
      ================================================== */}
      <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Memória e pertencimento
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Um museu construído pela memória da comunidade
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                A Oca da Memória preserva referências históricas e culturais
                ligadas aos povos Tabajara e Kalabaça de Poranga.
              </p>

              <p>
                O espaço reúne diferentes elementos do cotidiano, da produção
                artesanal, da memória familiar, das lutas comunitárias e dos
                conhecimentos transmitidos ao longo das gerações.
              </p>

              <p>
                Dessa forma, o museu atua não somente como espaço de exposição,
                mas também como lugar de memória, identidade e fortalecimento
                cultural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          DESTAQUE DO ACERVO
      ================================================== */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className="
              grid
              overflow-hidden
              rounded-[30px]
              border
              border-primary/10
              bg-secondary/20
              lg:grid-cols-[1fr_1fr]
            "
          >
            {/* IMAGEM */}
            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
              <Image
                src="/indigenas/oca-da-memoria/oca-da-memoria-acervo-geral.webp"
                alt="Interior e acervo da Oca da Memória"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* TEXTO */}
            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                O acervo
              </p>

              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Memórias preservadas em diferentes formas
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Fotografias, utensílios, cerâmicas, artesanato, documentos e
                outros objetos ajudam a registrar histórias, modos de vida e
                experiências das comunidades.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Fotografias e memória familiar",
                  "Objetos e utensílios tradicionais",
                  "Artesanato e produção cultural",
                  "Documentos e registros históricos",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-primary/10 bg-background p-4"
                  >
                    <BookOpen className="size-5 text-primary" />

                    <p className="mt-3 font-heading text-base font-semibold text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          ACERVO VISUAL / CARROSSEL
      ================================================== */}
      <section className="bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Por dentro da Oca
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Conheça parte do acervo
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Fotografias, objetos, artesanato e registros ajudam a preservar as
              histórias, os saberes e a memória das comunidades indígenas de
              Poranga.
            </p>
          </div>

          {/* CARROSSEL */}
          <OcaMemoryCarousel />
        </div>
      </section>

      {/* ==================================================
          VISITAÇÃO
      ================================================== */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div
            className="
              rounded-[30px]
              border
              border-primary/15
              bg-primary/5
              p-7
              sm:p-10
            "
          >
            <ShieldCheck className="size-7 text-primary" />

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Visitação responsável
            </p>

            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground">
              Planeje sua visita com respeito
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
              A Oca da Memória é um espaço comunitário indígena. Orientações
              sobre horários, funcionamento e condições de visitação devem
              respeitar as informações fornecidas pelas próprias comunidades.
            </p>

            <div className="mt-7">
              <a
                href="https://maps.app.goo.gl/ZyTxkCFwGCP4NfWE8"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-primary
                  transition
                  hover:underline
                "
              >
                <MapPin className="size-5" />
                Abrir localização no Google Maps
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
