import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, MapPin, Ticket, Music4 } from "lucide-react";

export function FestejaHero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-5 py-20 lg:grid-cols-[1fr_0.95fr]">
        {/* Conteúdo */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Voltar ao Portal
          </Link>

          <div className="mt-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.30em] text-white">
              🎵 FESTEJA PORANGA • 69 ANOS
            </span>
          </div>

          <h1 className="mt-8 font-heading text-5xl font-semibold leading-tight text-white lg:text-7xl">
            A maior edição da história do Festeja Poranga.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-white/90">
            Entre os dias <strong>29 de junho e 05 de julho</strong>, Poranga
            celebra seus <strong>69 anos de emancipação política</strong> com
            uma programação especial que reúne esporte, cultura, tradição, fé,
            gastronomia e grandes atrações nacionais.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <CalendarDays className="mb-3 size-7 text-white" />

              <h3 className="font-semibold text-white">29/06 a 05/07</h3>

              <p className="mt-1 text-white/75">
                Programação durante toda a semana
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <MapPin className="mb-3 size-7 text-white" />

              <h3 className="font-semibold text-white">Praça Pública</h3>

              <p className="mt-1 text-white/75">Centro de Poranga • CE</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <Ticket className="mb-3 size-7 text-white" />

              <h3 className="font-semibold text-white">Entrada Gratuita</h3>

              <p className="mt-1 text-white/75">Evento aberto ao público</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <Music4 className="mb-3 size-7 text-white" />

              <h3 className="font-semibold text-white">Grandes atrações</h3>

              <p className="mt-1 text-white/75">
                Wesley Safadão, Zé Vaqueiro,
                <br />
                Rogerinho e Bruna Karla
              </p>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
          <Image
            src="/images/festejaporanga.webp"
            alt="Banner oficial do Festeja Poranga"
            width={900}
            height={1200}
            priority
            className="w-full rounded-[36px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 rounded-full bg-white/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Evento Oficial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
