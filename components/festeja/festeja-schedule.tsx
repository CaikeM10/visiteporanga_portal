import Image from "next/image";
import { CalendarDays } from "lucide-react";

const schedule = [
  {
    day: "29 de Junho",
    badge: "Domingo",
    title: "Poranga em Movimento",
    description:
      "Corrida e caminhada pelas principais ruas da cidade, marcando a abertura da programação esportiva do Festeja Poranga.",
    image: "/festeja/festejadia28.webp",
  },

  {
    day: "30 de Junho",
    badge: "Segunda-feira",
    title: "Festival de Quadrilhas",
    description:
      "Primeiro dia do Festival de Quadrilhas Juninas com apresentações culturais ao lado da Igreja Matriz.",
    image: "/festeja/festejadia30e01.webp",
  },

  {
    day: "02 de Julho",
    badge: "Quarta-feira",
    title: "Programação Cultural",
    description:
      "Atividades culturais, apresentações artísticas e ações comemorativas durante a semana do aniversário do município.",
    image: "/festeja/festejadia02.webp",
  },

  {
    day: "03 de Julho",
    badge: "Quinta-feira",
    title: "Encontro de Bandas",
    description:
      "Bandas musicais da região se apresentam em um espetáculo aberto ao público celebrando a cultura musical.",
    image: "/festeja/festejadia03.webp",
  },

  {
    day: "04 de Julho",
    badge: "Sexta-feira",
    title: "Dia do Evangélico",
    description:
      "Noite especial de louvor, fé e adoração com o show nacional da cantora Bruna Karla.",
    image: "/festeja/festejadia04.webp",
  },

  {
    day: "05 de Julho",
    badge: "Sábado",
    title: "Grande Festa de Aniversário",
    description:
      "Encerramento do Festeja Poranga com grandes shows de Wesley Safadão, Zé Vaqueiro e Rogerinho.",
    image: "/festeja/festejadia05.webp",
  },
];

export function FestejaSchedule() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
            <CalendarDays className="mr-2 size-4 text-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Programação Oficial
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-semibold text-foreground sm:text-5xl">
            Uma semana inteira de celebrações
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            O Festeja Poranga reúne esporte, cultura, tradição, música,
            gastronomia e grandes shows durante sete dias de comemoração pelos
            69 anos de emancipação política do município.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {schedule.map((item) => (
            <article
              key={item.day}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-border
                bg-background
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="
                    aspect-[4/5]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {item.day}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <span className="text-sm font-medium text-primary">
                  {item.badge}
                </span>

                <h3 className="mt-3 font-heading text-3xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
