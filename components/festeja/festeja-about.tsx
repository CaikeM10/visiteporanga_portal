import Image from "next/image";

export function FestejaAbout() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        {/* Imagem */}

        <div className="relative overflow-hidden rounded-[34px] shadow-xl">
          <Image
            src="/images/festejaporanga.webp"
            alt="Público do Festeja Poranga"
            width={900}
            height={1100}
            className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 rounded-full bg-white/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Festa Oficial do Município
            </span>
          </div>
        </div>

        {/* Conteúdo */}

        <div>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Sobre o Evento
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-semibold leading-tight text-foreground lg:text-6xl">
            Muito mais do que uma festa.
          </h2>

          <p className="mt-8 text-lg leading-9 text-muted-foreground">
            O <strong>Festeja Poranga</strong> celebra o aniversário de
            emancipação política do município e reúne moradores, visitantes e
            famílias em uma programação que valoriza a cultura, a música, o
            esporte, a fé e as tradições locais.
          </p>

          <p className="mt-6 text-lg leading-9 text-muted-foreground">
            Durante sete dias, a cidade recebe competições esportivas,
            apresentações culturais, festival de quadrilhas, encontro de bandas,
            celebrações religiosas e grandes shows com artistas de destaque
            nacional.
          </p>

          <p className="mt-6 text-lg leading-9 text-muted-foreground">
            Além de movimentar a economia local, o evento fortalece o turismo,
            incentiva o comércio e apresenta aos visitantes toda a hospitalidade
            e as belezas naturais de Poranga.
          </p>

          {/* Indicadores */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-5xl font-bold text-primary">7</h3>

              <p className="mt-3 font-medium text-foreground">
                Dias de programação
              </p>

              <span className="text-sm text-muted-foreground">
                Esporte, cultura, fé e grandes shows.
              </span>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-5xl font-bold text-primary">69</h3>

              <p className="mt-3 font-medium text-foreground">
                Anos de emancipação
              </p>

              <span className="text-sm text-muted-foreground">
                Uma das maiores celebrações da região.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
