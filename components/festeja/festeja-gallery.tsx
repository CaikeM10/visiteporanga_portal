import Image from "next/image";
const gallery = [
  "/festeja/festejadia02.webp",
  "/festeja/festejadia03.webp",
  "/festeja/festejadia04.webp",
  "/festeja/festejadia05.webp",
  "/festeja/festejadia06.webp",
  "/festeja/festejadia07.webp",
];

export function FestejaGallery() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Galeria
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-semibold sm:text-5xl">
            Reviva os melhores momentos do Festeja.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Música, cultura, tradição e milhares de pessoas reunidas para
            celebrar um dos maiores eventos do interior do Ceará.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[28px]
                shadow-lg
              "
            >
              <Image
                src={image}
                alt={`Galeria ${index + 1}`}
                width={800}
                height={600}
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} //
