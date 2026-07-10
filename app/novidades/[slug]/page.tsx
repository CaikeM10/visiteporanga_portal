import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, ArrowRight } from "lucide-react";

import { novidades } from "@/components/novidades/novidades-data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const novidade = novidades.find((item) => item.slug === slug);

  if (!novidade) {
    return {
      title: "Novidade não encontrada",
    };
  }

  return {
    title: novidade.title,
    description: novidade.description,
  };
}

export async function generateStaticParams() {
  return novidades.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NovidadePage({ params }: Props) {
  const { slug } = await params;

  const novidade = novidades.find((item) => item.slug === slug);

  if (!novidade) {
    notFound();
  }

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[520px] overflow-hidden">
        <Image
          src={novidade.image}
          alt={novidade.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/novidades"
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              <ArrowLeft className="size-4" />
              Voltar para novidades
            </Link>

            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
                {novidade.badge}
              </span>

              <h1 className="mt-6 font-heading text-5xl font-bold text-white md:text-7xl">
                {novidade.title}
              </h1>

              <p className="mt-6 text-xl leading-relaxed text-white/90">
                {novidade.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-[2fr_1fr]">
          {/* Texto */}
          <div>
            <div className="mb-8 flex items-center gap-3 text-primary">
              <CalendarDays className="size-5" />

              <span className="font-medium">Inaugurado em {novidade.date}</span>
            </div>

            <h2 className="font-heading text-4xl font-bold">
              Um novo cartão-postal para Poranga
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                O letreiro <strong>{novidade.title}</strong> foi criado para
                valorizar o centro urbano e proporcionar um novo espaço de
                convivência para moradores e visitantes.
              </p>

              <p>
                Além de fortalecer a identidade visual da cidade, o monumento
                tornou-se um dos locais mais fotografados de Poranga,
                especialmente durante a noite, quando recebe iluminação
                especial.
              </p>

              <p>
                A iniciativa busca incentivar o turismo, estimular a economia
                local e oferecer mais um atrativo para quem visita o município.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border p-8">
              <h3 className="text-2xl font-bold">Informações</h3>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>

                  <p className="font-semibold">{novidade.location}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Categoria</p>

                  <p className="font-semibold">Novo Cartão-Postal</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Ano</p>

                  <p className="font-semibold">{novidade.date}</p>
                </div>
              </div>

              <Link
                href={novidade.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                <MapPin className="size-5" />
                Como chegar
              </Link>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-bold">Continue explorando</h3>

              <p className="mt-3 text-muted-foreground">
                Descubra outros atrativos e experiências que fazem de Poranga um
                destino único no interior do Ceará.
              </p>

              <Link
                href="/pontos-turisticos"
                className="mt-6 inline-flex items-center gap-2 text-primary transition hover:gap-3"
              >
                Explorar atrativos
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
