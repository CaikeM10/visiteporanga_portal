import Link from "next/link";
import {
  MapPin,
  Navigation,
  Clock3,
  Ticket,
  Car,
  ArrowUpRight,
} from "lucide-react";

export function FestejaLocation() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Local do Evento
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-semibold sm:text-5xl">
            Onde acontece o Festeja Poranga
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Toda a estrutura do evento será montada na Praça Pública de Poranga,
            localizada no centro da cidade e preparada para receber milhares de
            visitantes.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          {/* IMAGEM DO LOCAL */}

          <div className="relative overflow-hidden rounded-[30px] shadow-xl group">
            <img
              src="/images/Imagemigrejamatriz.webp"
              alt="Praça Pública de Poranga"
              className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
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

            {/* Badge */}

            <div className="absolute left-6 top-6">
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
                Praça Pública • Centro
              </span>
            </div>

            {/* Botão */}

            <div className="absolute bottom-6 left-6">
              <Link
                href="https://maps.google.com/?q=Praça+Pública+Poranga+CE"
                target="_blank"
                className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-primary
        px-6
        py-3
        font-semibold
        text-primary-foreground
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
              >
                <Navigation className="size-5" />
                Abrir no Google Maps
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
          {/* Informações */}

          <div className="space-y-6">
            <div className="rounded-[28px] bg-background p-7 shadow-sm">
              <MapPin className="mb-4 size-7 text-primary" />

              <h3 className="font-heading text-2xl font-semibold">Endereço</h3>

              <p className="mt-3 leading-8 text-muted-foreground">
                Praça Pública de Poranga
                <br />
                Centro • Poranga • Ceará
              </p>
            </div>

            <div className="rounded-[28px] bg-background p-7 shadow-sm">
              <Clock3 className="mb-4 size-7 text-primary" />

              <h3 className="font-heading text-2xl font-semibold">Horários</h3>

              <p className="mt-3 leading-8 text-muted-foreground">
                Programação durante toda a semana.
                <br />
                Grandes shows iniciam às 22h.
              </p>
            </div>

            <div className="rounded-[28px] bg-background p-7 shadow-sm">
              <Ticket className="mb-4 size-7 text-primary" />

              <h3 className="font-heading text-2xl font-semibold">Entrada</h3>

              <p className="mt-3 leading-8 text-muted-foreground">
                Evento gratuito e aberto ao público.
              </p>
            </div>

            <div className="rounded-[28px] bg-background p-7 shadow-sm">
              <Car className="mb-4 size-7 text-primary" />

              <h3 className="font-heading text-2xl font-semibold">
                Estacionamento
              </h3>

              <p className="mt-3 leading-8 text-muted-foreground">
                Utilize os estacionamentos e áreas sinalizadas próximas ao
                centro da cidade.
              </p>
            </div>

            <Link
              href="https://maps.google.com/?q=Praça+Pública+Poranga+CE"
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary
                px-7
                py-4
                font-semibold
                text-primary-foreground
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <Navigation className="size-5" />
              Abrir no Google Maps
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
