import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Utensils, BedDouble, ShoppingBag, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guia Local',
  description:
    'Guia local de Poranga: onde comer, onde se hospedar, onde comprar e contatos úteis para sua viagem.',
}

const eat = [
  { name: 'Restaurante Sabor da Serra', desc: 'Comida regional e self-service.', info: 'Centro' },
  { name: 'Cantina do Vale', desc: 'Carne de sol e baião de dois.', info: 'Av. Principal' },
  { name: 'Café da Praça', desc: 'Tapiocas, bolos e cafés.', info: 'Praça Central' },
]

const stay = [
  { name: 'Pousada Recanto da Serra', desc: 'Quartos com vista para a serra.', info: '15 acomodações' },
  { name: 'Hotel Poranga', desc: 'Hospedagem central e confortável.', info: '24 quartos' },
  { name: 'Chalés da Mata', desc: 'Hospedagem em meio à natureza.', info: '6 chalés' },
]

const shop = [
  { name: 'Feira de Artesanato', desc: 'Peças em barro, palha e madeira.', info: 'Sábados' },
  { name: 'Mercado Municipal', desc: 'Produtos locais e doces caseiros.', info: 'Centro' },
]

const contacts = [
  { name: 'Secretaria de Turismo', info: '(88) 3000-0000' },
  { name: 'Centro de Atendimento ao Turista', info: '(88) 3000-0001' },
  { name: 'Emergências', info: '190 / 192' },
]

function ListSection({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Utensils
  title: string
  items: { name: string; desc: string; info: string }[]
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" aria-hidden="true" />
        </div>
        <h2 className="font-heading text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-4"
          >
            <div>
              <p className="font-medium text-foreground">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
            <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {item.info}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function GuiaLocalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Para sua estadia"
        title="Guia Local de Poranga"
        description="Tudo o que você precisa saber para aproveitar a cidade: onde comer, onde dormir, onde comprar e a quem recorrer."
        image="/images/comida.png"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
            <ListSection icon={Utensils} title="Onde comer" items={eat} />
            <ListSection icon={BedDouble} title="Onde se hospedar" items={stay} />
            <ListSection icon={ShoppingBag} title="Onde comprar" items={shop} />
            <div>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="size-5 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Contatos úteis
                </h2>
              </div>
              <ul className="mt-6 space-y-3">
                {contacts.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <p className="font-medium text-foreground">{item.name}</p>
                    <span className="shrink-0 font-mono text-sm text-primary">
                      {item.info}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-2.5 rounded-lg bg-secondary p-4 text-sm text-secondary-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Centro de Atendimento ao Turista na Praça Central, aberto de
                segunda a sábado, das 8h às 17h.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
