import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Music4, Ticket } from "lucide-react";

export function HomeEvents() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          {/* Banner */}

          <div className="relative overflow-hidden rounded-[34px] shadow-2xl">
            <img
              src="/images/festejaporanga.jpeg"
              alt="Festeja Poranga 2026"
              className="
                aspect-[2/3]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent
              "
            />

            <div className="absolute bottom-6 left-6">
              <span
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-white
                  backdrop-blur-xl
                "
              >
                Evento Oficial
              </span>
            </div>
          </div>

          {/* Conteúdo */}

          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Destaque do Ano
              </span>
            </div>

            <h2 className="mt-6 font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Festeja Poranga
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              O maior evento cultural de Poranga acontece nos dias{" "}
              <strong>04 e 05 de julho</strong>, celebrando o aniversário do
              município com grandes atrações nacionais, programação religiosa,
              cultura popular, gastronomia e milhares de visitantes durante dois
              dias de festa.
            </p>

            {/* Informações */}

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <CalendarDays className="mt-1 size-6 text-primary" />

                <div>
                  <p className="font-semibold">04 de Julho</p>

                  <p className="text-muted-foreground">Dia do Evangélico</p>

                  <p className="font-medium text-foreground">Bruna Karla</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Music4 className="mt-1 size-6 text-primary" />

                <div>
                  <p className="font-semibold">05 de Julho</p>

                  <p className="text-muted-foreground">Grandes Shows</p>

                  <p className="font-medium text-foreground">
                    Zé Vaqueiro • Wesley Safadão • Rogerinho
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-6 text-primary" />

                <div>
                  <p className="font-semibold">Praça Pública</p>

                  <p className="text-muted-foreground">
                    Início às 22h • Entrada gratuita
                  </p>
                </div>
              </div>
            </div>

            {/* Botões */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/eventos"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-8
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
                Ver programação
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
                  border-primary/20
                  bg-background
                  px-8
                  py-4
                  font-semibold
                  text-foreground
                  transition-all
                  duration-300
                  hover:border-primary
                  hover:bg-primary/5
                "
              >
                <Ticket className="size-5" />
                Planejar minha viagem
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
