import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  MapPinned,
  Mountain,
  Camera,
} from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden">
      {/* Imagem de fallback */}
      <img
        src="/images/capavideoinicial.JPG"
        alt="Vista aérea de Poranga"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      />

      {/* Vídeo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/videos/videoporangasite.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div
        className="
    absolute
    inset-0
    -z-10
    bg-[linear-gradient(90deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.42)_35%,rgba(0,0,0,.10)_70%,rgba(0,0,0,.03)_100%),linear-gradient(180deg,rgba(0,0,0,.10)_0%,rgba(0,0,0,.15)_45%,rgba(0,0,0,.55)_100%)]
  "
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-42 pb-16 sm:px-8 lg:px-10">
        <div className="max-w-xl">
          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white">
              Poranga • Bela por natureza
            </span>
          </div>

          {/* Hero */}

          <div className="mt-6 sm:mt-8 lg:mt-10 ">
            <h1 className="font-heading leading-[0.94] text-white">
              <span
                className="
      block
      text-[2.5rem]
      font-medium
      sm:text-5xl
      lg:text-5xl
    "
              >
                Descubra
              </span>

              <span
                className="
      block
      text-[3.8rem]
      font-semibold
      sm:text-7xl
      lg:text-8xl
    "
              >
                Poranga
              </span>
            </h1>
            <p
              className="
          mt-6
          max-w-lg
          text-base
          leading-8
          text-white/90
          sm:text-lg
        "
            >
              Natureza, cultura e experiências únicas no interior do Ceará.
            </p>

            {/* Botões */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pontos-turisticos"
                className="
            group
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-primary
            px-7
            py-4
            font-semibold
            text-primary-foreground
            transition-all
            duration-300
            hover:scale-[1.03]
          "
              >
                Explorar atrativos
                <ArrowRight
                  className="
              size-5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                />
              </Link>

              <Link
                href="/planeje-sua-visita"
                className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            px-7
            py-4
            font-medium
            text-white
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
              >
                Planejar viagem
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Desktop */}

      <div
        className="
    absolute
    bottom-8
    left-1/2
    hidden
    -translate-x-1/2
    flex-col
    items-center
    gap-2
    text-white/70
    lg:flex
  "
      >
        <span className="text-[11px] uppercase tracking-[0.35em]">Explore</span>

        <ChevronDown className="animate-bounce" size={26} />
      </div>
    </section>
  );
}
