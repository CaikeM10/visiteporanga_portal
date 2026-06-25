import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PlanForm } from "@/components/plan-form";
import { Car, Bus, CloudSun, Backpack, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Planeje sua Visita",
  description:
    "Como chegar a Poranga, melhor época para visitar, o que levar e dicas práticas para planejar sua viagem ao sertão do Ceará.",
};

const tips = [
  {
    icon: Car,
    title: "Como chegar de carro",
    text: "A partir de Fortaleza, são cerca de 380 km pela BR-020 e rodovias estaduais. O trajeto leva em média 6 horas, com boas paradas pelo caminho.",
  },
  {
    icon: Bus,
    title: "Transporte rodoviário",
    text: "Há linhas de ônibus intermunicipais que conectam Poranga a Fortaleza e a cidades vizinhas como Crateús e Ipueiras.",
  },
  {
    icon: CloudSun,
    title: "Melhor época",
    text: "De maio a agosto, após as chuvas, as cachoeiras estão cheias e a serra fica especialmente verde. O clima é ameno o ano todo.",
  },
  {
    icon: Backpack,
    title: "O que levar",
    text: "Calçado confortável para trilhas, protetor solar, roupa de banho, repelente e uma garrafa de água. Boa parte dos atrativos é ao ar livre.",
  },
];

const itinerary = [
  {
    day: "Dia 1",
    title: "Cidade e cultura",
    text: "Conheça o centro histórico, a Igreja Matriz e a feira de artesanato. À tarde, prove a gastronomia local.",
  },
  {
    day: "Dia 2",
    title: "Natureza e cachoeiras",
    text: "Reserve o dia para a Cachoeira do Pinga e um banho refrescante. Leve lanche para um piquenique.",
  },
  {
    day: "Dia 3",
    title: "Trilhas e mirante",
    text: "Encare a Trilha das Pedras pela manhã e termine o dia contemplando o pôr do sol na cachoeira da barra.",
  },
];

export default function PlanejeSuaVisitaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Mãos à obra"
        title="Planeje sua visita"
        description="Reúna as informações práticas, monte seu roteiro e venha viver Poranga sem preocupações."
        image="/images/planejesuavisita.jpg"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-balance font-heading text-3xl font-semibold text-foreground">
            Informações práticas
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip) => (
              <article
                key={tip.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <tip.icon
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {tip.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {tip.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-center gap-3">
            <CalendarDays className="size-7 text-primary" aria-hidden="true" />
            <h2 className="text-balance font-heading text-3xl font-semibold text-foreground">
              Roteiro sugerido de 3 dias
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {itinerary.map((item) => (
              <article
                key={item.day}
                className="rounded-xl border border-border bg-card p-6"
              >
                <span className="font-mono text-sm font-medium text-primary">
                  {item.day}
                </span>
                <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <PlanForm />
        </div>
      </section>
    </main>
  );
}
