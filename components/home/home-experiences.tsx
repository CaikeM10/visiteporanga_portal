import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/data";

export function HomeExperiences() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              ✨ Experiências
            </span>
          </div>

          <div>
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Experiências que tornam Poranga inesquecível
            </h2>

            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Explore paisagens naturais, cultura local, histórias fascinantes e
              experiências autênticas que revelam a verdadeira essência de
              Poranga.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experiences.map((exp) => (
            <Link
              key={exp.title}
              href={exp.href}
              className="
                group
                relative
                isolate
                flex
                min-h-[380px]
                flex-col
                justify-end
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                p-6
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-black/20
              "
            >
              {/* Imagem */}
              <img
                src={exp.image || "/placeholder.svg"}
                alt={exp.title}
                className="
                  absolute
                  inset-0
                  -z-10
                  size-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:brightness-90
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  -z-10
                  bg-gradient-to-t
                  from-foreground/90
                  via-foreground/45
                  to-transparent
                  transition-all
                  duration-500
                  group-hover:from-foreground/95
                "
                aria-hidden="true"
              />

              {/* Conteúdo */}
              <div>
                <h3 className="flex items-center gap-2 font-heading text-2xl font-semibold text-background">
                  {exp.title}
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>

                <p className="mt-3 text-pretty text-sm leading-relaxed text-background/85">
                  {exp.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-background/90">
                  Explorar experiência
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
