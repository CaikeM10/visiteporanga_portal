import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { AttractionsGrid } from '@/components/attractions-grid'

export const metadata: Metadata = {
  title: 'Pontos Turísticos',
  description:
    'Conheça os principais pontos turísticos de Poranga: cachoeiras, mirantes, trilhas e o patrimônio histórico da Serra das Matas.',
}

export default function PontosTuristicosPage() {
  return (
    <main>
      <PageHero
        eyebrow="O que visitar"
        title="Pontos Turísticos de Poranga"
        description="Da água cristalina das cachoeiras ao alto dos mirantes, descubra os lugares que tornam Poranga um destino único no sertão cearense."
        image="/images/trilha.png"
      />
      <AttractionsGrid />
    </main>
  )
}
