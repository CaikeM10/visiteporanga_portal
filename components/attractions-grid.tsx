'use client'

import { useState } from 'react'
import { attractions } from '@/lib/data'
import { AttractionCard } from '@/components/attraction-card'
import { cn } from '@/lib/utils'

const categories = ['Todos', 'Natureza', 'Aventura', 'Histórico', 'Cultura'] as const

export function AttractionsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>('Todos')

  const filtered =
    active === 'Todos'
      ? attractions
      : attractions.filter((a) => a.category === active)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por categoria">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === cat
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((attraction) => (
            <AttractionCard key={attraction.slug} attraction={attraction} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-muted-foreground">
          Nenhum atrativo encontrado nesta categoria.
        </p>
      )}
    </div>
  )
}
