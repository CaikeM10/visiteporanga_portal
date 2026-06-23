import Link from "next/link";
import {
  MapPinned,
  UtensilsCrossed,
  Hotel,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const guides = [
  {
    title: "O que visitar",
    description:
      "Descubra cachoeiras, mirantes, trilhas e os principais atrativos naturais e históricos de Poranga.",
    href: "/pontos-turisticos",
    icon: MapPinned,
    featured: true,
  },
  {
    title: "Onde comer",
    description:
      "Conheça restaurantes, lanchonetes e os sabores típicos da culinária poranguense.",
    href: "/guia-local",
    icon: UtensilsCrossed,
  },
  {
    title: "Onde ficar",
    description:
      "Encontre pousadas e hospedagens para aproveitar sua viagem com conforto.",
    href: "/planeje-sua-visita",
    icon: Hotel,
  },
  {
    title: "Quando visitar",
    description:
      "Veja a melhor época para conhecer cachoeiras, eventos e paisagens naturais.",
    href: "/planeje-sua-visita",
    icon: CalendarDays,
  },
];

export function HomeVisitorGuide() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}

        <div className="mx-auto max-w-3xl text-center">
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
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              Planeje sua viagem
            </span>
          </div>

          <h2
            className="
              mt-6
              font-heading
              text-4xl
              font-semibold
              leading-tight
              text-foreground
              sm:text-5xl
              lg:text-6xl
            "
          >
            Seu guia para explorar Poranga.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Descubra rapidamente onde visitar, onde comer, onde se hospedar e
            qual a melhor época para viver as melhores experiências da cidade.
          </p>
        </div>

        {/* Cards */}
        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
        group
        relative
        flex
        min-h-[430px]
        flex-col
        rounded-[28px]
        border
        border-border
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-2xl
      "
            >
              {/* Badge */}

              {item.featured && (
                <span
                  className="
            absolute
            right-6
            top-6
            rounded-full
            bg-primary/10
            px-3
            py-1
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-primary
          "
                >
                  Mais procurado
                </span>
              )}

              {/* Ícone */}

              <div
                className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
          text-primary
          transition-all
          duration-300
          group-hover:bg-primary
          group-hover:text-white
        "
              >
                <item.icon className="size-8" />
              </div>

              {/* Conteúdo */}

              <div className="mt-7 flex flex-1 flex-col">
                <h3
                  className="
            font-heading
            text-[2rem]
            font-semibold
            leading-tight
            text-foreground
          "
                >
                  {item.title}
                </h3>

                <p
                  className="
            mt-4
            text-base
            leading-8
            text-muted-foreground
          "
                >
                  {item.description}
                </p>

                {/* Rodapé alinhado */}

                <div className="mt-auto">
                  <div className="my-8 h-px bg-border" />

                  <div
                    className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-primary
            "
                  >
                    Ver guia
                    <ArrowRight
                      className="
                size-5
                transition-all
                duration-300
                group-hover:translate-x-1
              "
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
