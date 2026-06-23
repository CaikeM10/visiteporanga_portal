import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Music, Utensils, Palette, PartyPopper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cultura',
  description:
    'A cultura de Poranga: festas tradicionais, gastronomia sertaneja, artesanato e as manifestações que dão alma à cidade.',
}

const traditions = [
  {
    icon: PartyPopper,
    title: 'Festas Tradicionais',
    text: 'As festas juninas e os festejos religiosos reúnem a comunidade em torno da música, da dança e da fé. Quadrilhas, fogueiras e comidas típicas tomam conta das ruas.',
  },
  {
    icon: Utensils,
    title: 'Gastronomia Sertaneja',
    text: 'Carne de sol, baião de dois, tapioca e doces caseiros compõem uma cozinha de sabores marcantes, fruto da tradição e dos ingredientes da terra.',
  },
  {
    icon: Palette,
    title: 'Artesanato',
    text: 'O trabalho com o barro, a palha e a madeira revela a criatividade dos artesãos locais, que transformam matéria-prima simples em peças cheias de identidade.',
  },
  {
    icon: Music,
    title: 'Música e Folguedos',
    text: 'Do forró pé de serra aos folguedos populares, a música embala celebrações e mantém vivas as raízes culturais do povo poranguense.',
  },
]

export default function CulturaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Identidade viva"
        title="A cultura de Poranga"
        description="Festas, sabores, artesanato e música que traduzem a alma acolhedora e festiva do povo sertanejo."
        image="/images/cultura-festa.png"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {traditions.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="size-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
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

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/artesanato.png"
              alt="Artesanato tradicional em barro e palha produzido em Poranga"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Feito à mão
            </p>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A arte que nasce das mãos do sertão
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Em Poranga, o artesanato é mais que ofício: é memória e expressão.
              As peças carregam técnicas passadas de geração em geração e contam,
              em cada detalhe, a relação íntima da comunidade com a terra. Visitar
              os ateliês locais é levar para casa um pedaço autêntico da cultura
              poranguense.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
