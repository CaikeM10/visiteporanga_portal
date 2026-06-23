import Link from "next/link";
import {
  ArrowRight,
  Trees,
  Landmark,
  Camera,
  HeartHandshake,
} from "lucide-react";

const highlights = [
  {
    icon: Trees,
    title: "Natureza",
    description: "Cachoeiras, serras e paisagens preservadas.",
  },
  {
    icon: Landmark,
    title: "História",
    description: "Patrimônio histórico e identidade cultural.",
  },
  {
    icon: Camera,
    title: "Experiências",
    description: "Cultura, aventura e cenários inesquecíveis.",
  },
  {
    icon: HeartHandshake,
    title: "Hospitalidade",
    description: "O acolhimento típico do povo poranguense.",
  },
];
export function HomeIntro() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          {/* IMAGEM */}

          <div className="relative">
            <div
              className="
            overflow-hidden
            rounded-[34px]
            border
            border-black/5
            shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_30px_70px_rgba(0,0,0,.18)]
          "
            >
              <img
                src="/images/Imagemigrejamatriz.webp"
                alt="Praça da Matriz de Poranga"
                className="
              aspect-[4/3]
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
              />
            </div>

            <div
              className="
            absolute
            inset-0
            rounded-[34px]
            bg-gradient-to-t
            from-black/60
            via-black/5
            to-transparent
          "
            />

            <div className="absolute bottom-6 left-6">
              <span
                className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.22em]
              text-white
              backdrop-blur-xl
            "
              >
                📍 Praça da Matriz • Centro Histórico
              </span>
            </div>
          </div>

          {/* TEXTO */}

          <div>
            <div
              className="
            inline-flex
            items-center
            rounded-full
            border
            border-primary/20
            bg-primary/5
            px-5
            py-2
          "
            >
              <span className="text-xs font-semibold uppercase tracking-[0.30em] text-primary">
                Portal Oficial • Conheça Poranga
              </span>
            </div>

            <h2
              className="
            mt-5
            max-w-xl
            font-heading
            text-4xl
            font-semibold
            leading-[1.05]
            tracking-tight
            text-foreground
            sm:text-5xl
            lg:text-[4.rem]
          "
            >
              Onde a natureza encontra a história.
            </h2>

            <div
              className="
            mt-6
            space-y-5
            text-lg
            leading-9
            text-muted-foreground
          "
            >
              <p>
                Poranga nasceu entre serras, rios e tradições sertanejas. Seu
                nome vem do tupi e significa
                <strong className="text-foreground"> "bonita"</strong>, uma
                identidade presente em cada paisagem do município.
              </p>

              <p>
                Cachoeiras, formações rochosas, patrimônio histórico e a
                hospitalidade do povo poranguense fazem deste um dos destinos
                mais autênticos do interior do Ceará.
              </p>
            </div>

            {/* Informações rápidas */}

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-secondary px-4 py-2 text-sm">
                📍 340 km de Fortaleza
              </span>

              <span className="rounded-full bg-secondary px-4 py-2 text-sm">
                🌿 Ecoturismo
              </span>

              <span className="rounded-full bg-secondary px-4 py-2 text-sm">
                🏛 Patrimônio Histórico
              </span>
            </div>

            <Link
              href="/historia"
              className="
            mt-10
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-primary
            px-9
            py-4
            font-semibold
            text-primary-foreground
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
            >
              Conheça Poranga
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="
            group
            rounded-[30px]
            border
            border-border
            bg-card
            p-8
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-primary/20
            hover:shadow-xl
          "
            >
              <div
                className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
              text-primary
              transition-transform
              duration-300
              group-hover:scale-110
            "
              >
                <item.icon className="size-7" />
              </div>

              <h3 className="mt-6 font-heading text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {item.description}
              </p>

              <div
                className="
              mt-6
              flex
              items-center
              gap-2
              font-medium
              text-primary
              opacity-0
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:opacity-100
            "
              >
                Explorar
                <ArrowRight className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
