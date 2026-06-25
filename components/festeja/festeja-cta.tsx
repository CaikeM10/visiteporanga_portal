import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";

export function FestejaCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Overlay */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
            Continue explorando
          </span>
        </div>

        <h2 className="mt-8 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          O Festeja dura alguns dias.
          <br />
          Poranga encanta o ano inteiro.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85">
          Aproveite sua visita para conhecer cachoeiras, mirantes, patrimônio
          histórico, gastronomia regional e todas as experiências que fazem de
          Poranga um dos destinos mais autênticos da Serra das Matas.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/pontos-turisticos"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-white
              px-8
              py-4
              font-semibold
              text-primary
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Explorar Atrativos
            <ArrowRight className="size-5" />
          </Link>

          <Link
            href="/planeje-sua-visita"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-white/25
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/20
            "
          >
            <MapPinned className="size-5" />
            Planejar minha viagem
          </Link>
        </div>

        {/* Estatísticas */}

        <div className="mt-20 grid gap-8 border-t border-white/15 pt-12 sm:grid-cols-3">
          <div>
            <h3 className="font-heading text-5xl font-bold text-white">12+</h3>

            <p className="mt-3 text-white/80">
              Atrativos turísticos catalogados
            </p>
          </div>

          <div>
            <h3 className="font-heading text-5xl font-bold text-white">69</h3>

            <p className="mt-3 text-white/80">Anos de história e tradição</p>
          </div>

          <div>
            <h3 className="font-heading text-5xl font-bold text-white">100%</h3>

            <p className="mt-3 text-white/80">Entrada gratuita no evento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
