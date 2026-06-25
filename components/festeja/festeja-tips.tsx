import {
  Clock3,
  Car,
  ShieldCheck,
  Shirt,
  Camera,
  UtensilsCrossed,
} from "lucide-react";

const tips = [
  {
    icon: Clock3,
    title: "Chegue cedo",
    description:
      "As principais atrações costumam reunir um grande público. Chegar com antecedência garante mais conforto e uma boa localização.",
  },
  {
    icon: Car,
    title: "Estacionamento",
    description:
      "Utilize as áreas sinalizadas próximas ao centro da cidade e siga as orientações dos agentes de trânsito.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Aproveite o evento com tranquilidade, respeitando as orientações da organização e das equipes de segurança.",
  },
  {
    icon: Shirt,
    title: "Vista-se confortavelmente",
    description:
      "Prefira roupas leves e calçados confortáveis para aproveitar toda a programação durante a noite.",
  },
  {
    icon: Camera,
    title: "Registre o momento",
    description:
      "Fotografe e compartilhe sua experiência utilizando as redes sociais e ajude a divulgar as belezas de Poranga.",
  },
  {
    icon: UtensilsCrossed,
    title: "Valorize o comércio local",
    description:
      "Aproveite para conhecer a gastronomia, artesanato e os empreendedores da cidade durante o evento.",
  },
];

export function FestejaTips() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Dicas para visitantes
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-semibold text-foreground sm:text-5xl">
            Aproveite o Festeja Poranga da melhor forma.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Algumas recomendações simples para tornar sua experiência ainda mais
            segura, confortável e inesquecível.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tips.map((tip) => (
            <article
              key={tip.title}
              className="
                group
                rounded-[28px]
                border
                border-border
                bg-background
                p-8
                shadow-sm
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
                <tip.icon className="size-8" />
              </div>

              <h3 className="mt-7 font-heading text-2xl font-semibold text-foreground">
                {tip.title}
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                {tip.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
