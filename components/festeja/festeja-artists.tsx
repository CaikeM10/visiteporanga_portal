import Image from "next/image";

const artists = [
  {
    name: "Wesley Safadão",
    role: "Atração Nacional",
    image: "/images/festeja/artists/wesley.jpg",
  },
  {
    name: "Zé Vaqueiro",
    role: "Atração Nacional",
    image: "/images/festeja/artists/zevaqueiro.jpg",
  },
  {
    name: "Rogerinho",
    role: "Atração Nacional",
    image: "/images/festeja/artists/rogerinho.jpg",
  },
  {
    name: "Bruna Karla",
    role: "Dia do Evangélico",
    image: "/images/festeja/artists/brunakarla.jpg",
  },
];

export function FestejaArtists() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Grandes atrações
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-semibold sm:text-5xl">
            Os artistas que farão história em Poranga.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            O Festeja Poranga recebe grandes nomes da música brasileira,
            proporcionando uma edição histórica para moradores e visitantes.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-border
                bg-card
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={600}
                  height={800}
                  className="
                    aspect-[4/5]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-6">
                <span className="text-sm font-medium text-primary">
                  {artist.role}
                </span>

                <h3 className="mt-2 font-heading text-2xl font-semibold">
                  {artist.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
