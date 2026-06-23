import { cn } from '@/lib/utils'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  image: string
  className?: string
}) {
  return (
    <section className={cn('relative isolate overflow-hidden', className)}>
      <img
        src={image || '/placeholder.svg'}
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-foreground/55" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pb-24 lg:pt-44">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-background/80">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight text-background sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-background/85">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
