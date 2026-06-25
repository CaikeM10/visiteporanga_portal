import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Music4,
  Ticket,
} from "lucide-react";

interface SchedulerItem {
  day: string;
  title: string;
  description: string;
  image: string;
}

const scheduler: SchedulerItem[] = [
  {
    day: "29 de Junho",
    title: "Abertura Oficial",
    description:
      "Cerimônia de abertura com apresentações culturais e show pirotécnico.",
    image: "/images/festeja/festejadia01.webp",
  },
  {
    day: "30 de Junho",
    title: "Noite de Esportes",
    description: "Competições esportivas com atletas locais e regionais.",
    image: "/images/festeja/festejadia02.webp",
  },
  {
    day: "01 de Julho",
    title: "Celebração Religiosa",
    description: "Missas e apresentações musicais de Bruna Karla.",
    image: "/images/festeja/festejadia03.webp",
  },
  {
    day: "02 de Julho",
    title: "Cultura e Tradição",
    description:
      "Apresentações folclóricas e exposição da cultura poranguista.",
    image: "/images/festeja/festejadia04.webp",
  },
  {
    day: "03 de Julho",
    title: "Grande Show",
    description: "Wesley Safadão e convidados especiais no palco principal.",
    image: "/images/festeja/festejadia05.webp",
  },
  {
    day: "04 de Julho",
    title: "Música Sertaneja",
    description: "Noite de forró com Zé Vaqueiro e Rogerinho.",
    image: "/images/festeja/festejadia06.webp",
  },
  {
    day: "05 de Julho",
    title: "Encerramento",
    description:
      "Festa de encerramento com queimação de fogos e homenagens especiais.",
    image: "/images/festeja/festejadia07.webp",
  },
];

export default function FestejaPorangaPage() {
  return (
    <main className="bg-background">
      {/* HERO */}

      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>
        {/* SOBRE O EVENTO */}

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
              {/* Imagem */}

              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                  src="/images/festeja/palco.webp"
                  alt="Festeja Poranga"
                  width={900}
                  height={900}
                  className="
            aspect-square
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
            from-black/60
            via-transparent
            to-transparent
          "
                />

                <div className="absolute bottom-6 left-6">
                  <span
                    className="
              rounded-full
              bg-white/10
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.28em]
              text-white
              backdrop-blur-xl
            "
                  >
                    Festa Oficial do Município
                  </span>
                </div>
              </div>

              {/* Texto */}

              <div>
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    Sobre o Evento
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
          "
                >
                  Muito mais do que uma festa.
                </h2>

                <div className="mt-8 space-y-6 text-lg leading-9 text-muted-foreground">
                  <p>
                    O{" "}
                    <strong className="text-foreground">Festeja Poranga</strong>
                    celebra o aniversário de emancipação política do município e
                    reúne moradores, visitantes e famílias em uma programação
                    que valoriza a cultura, a música, a fé e as tradições da
                    cidade.
                  </p>

                  <p>
                    Durante sete dias, Poranga recebe competições esportivas,
                    apresentações culturais, festival de quadrilhas, encontro de
                    bandas, celebrações religiosas e grandes shows com artistas
                    de destaque no cenário nacional.
                  </p>

                  <p>
                    Além de movimentar a economia local, o evento fortalece o
                    turismo e apresenta aos visitantes a hospitalidade e as
                    belezas naturais de Poranga.
                  </p>
                </div>

                {/* Destaques */}

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-4xl font-bold text-primary">7</p>

                    <p className="mt-2 text-muted-foreground">
                      Dias de programação
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-4xl font-bold text-primary">69</p>

                    <p className="mt-2 text-muted-foreground">
                      Anos de emancipação política
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-4xl font-bold text-primary">4</p>

                    <p className="mt-2 text-muted-foreground">
                      Grandes atrações nacionais
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-4xl font-bold text-primary">100%</p>

                    <p className="mt-2 text-muted-foreground">
                      Entrada gratuita
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
          {/* Texto */}

          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Voltar para o portal
            </Link>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.28em] text-white">
              <Music4 className="size-4" />
              Festeja Poranga • 69 anos
            </div>

            <h1 className="mt-6 font-heading text-5xl font-semibold leading-tight text-white lg:text-6xl">
              A maior edição da história do Festeja Poranga.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
              Entre os dias <strong>29 de junho e 05 de julho</strong>, Poranga
              celebra seus 69 anos de emancipação política com uma programação
              especial que reúne esporte, cultura, fé, tradição e grandes
              atrações nacionais.
            </p>

            {/* Informações */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <CalendarDays className="size-6 text-white" />

                  <div>
                    <p className="font-semibold text-white">29/06 a 05/07</p>

                    <p className="text-sm text-white/70">
                      Programação durante toda a semana
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <MapPin className="size-6 text-white" />

                  <div>
                    <p className="font-semibold text-white">Praça Pública</p>

                    <p className="text-sm text-white/70">
                      Centro de Poranga - CE
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Ticket className="size-6 text-white" />

                  <div>
                    <p className="font-semibold text-white">Entrada Gratuita</p>

                    <p className="text-sm text-white/70">
                      Evento aberto ao público
                    </p>
                  </div>
                </div>
              </div>
              {/* PROGRAMAÇÃO */}

              <section id="programacao" className="bg-secondary py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-5">
                  {/* Cabeçalho */}

                  <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                        Programação Oficial
                      </span>
                    </div>

                    <h2 className="mt-6 font-heading text-4xl font-semibold sm:text-5xl">
                      Uma semana inteira de celebração.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                      Confira a programação oficial do Festeja Poranga e
                      acompanhe tudo o que acontecerá durante as comemorações
                      dos 69 anos do município.
                    </p>
                  </div>

                  {/* Cards */}

                  <div className="mt-20 space-y-16">
                    {scheduler.map((item, index) => (
                      <div
                        key={item.day}
                        className={`
            grid
            items-center
            gap-10
            lg:grid-cols-2
            ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
          `}
                      >
                        {/* Imagem */}

                        <div className="overflow-hidden rounded-[30px] shadow-xl">
                          <Image
                            src={item.image}
                            alt={item.day}
                            width={1200}
                            height={800}
                            className="
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
                          />
                        </div>

                        {/* Conteúdo */}

                        <div>
                          <span
                            className="
                inline-flex
                rounded-full
                bg-primary/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-primary
              "
                          >
                            {item.day}
                          </span>

                          <h3 className="mt-6 font-heading text-4xl font-semibold">
                            {item.title}
                          </h3>

                          <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Music4 className="size-6 text-white" />

                  <div>
                    <p className="font-semibold text-white">
                      Grandes atrações nacionais
                    </p>

                    <p className="text-sm text-white/70">
                      Wesley Safadão, Zé Vaqueiro, Rogerinho e Bruna Karla
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botões */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#programacao"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary transition hover:-translate-y-1"
              >
                Ver programação
                <ArrowRight className="size-5" />
              </Link>

              <Link
                href="/planeje-sua-visita"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Planejar viagem
              </Link>
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
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
