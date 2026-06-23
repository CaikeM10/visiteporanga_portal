import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeCta() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground">
              Descubra Poranga
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-semibold text-primary-foreground sm:text-5xl">
            Sua próxima experiência começa aqui
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">
            Explore cachoeiras, trilhas, cultura, gastronomia e a história que
            fazem de Poranga um dos destinos mais autênticos do Ceará.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/planeje-sua-visita"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 font-medium text-foreground transition-all duration-300 hover:scale-105"
            >
              Planejar minha visita
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/pontos-turisticos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-medium text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Explorar atrativos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
