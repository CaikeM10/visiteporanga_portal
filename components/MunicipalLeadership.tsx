import Image from "next/image";

const authorities = [
  {
    name: "Antonio Roberto Uchoa de Almeida",
    role: "Prefeito Municipal de Poranga",
    image: "/institucional/roberto_site.jpg",
    objectPosition: "center 50%",
  },
  {
    name: "Quelma Maria de Abreu Felício",
    role: "Vice-Prefeita Municipal de Poranga",
    image: "/institucional/quelma_site.jpg",
    objectPosition: "center 38%",
  },
  {
    name: "Francisco Tiago Alves Gomes",
    role: "Secretário Municipal de Meio Ambiente e Turismo",
    image: "/institucional/tiago_site.jpg",
    objectPosition: "center 40%",
  },
];

export function MunicipalLeadership() {
  return (
    <section className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* CABEÇALHO */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Institucional
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Gestão Municipal
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Representantes da administração municipal envolvidos na atuação
            institucional e no desenvolvimento das políticas públicas do
            Município de Poranga.
          </p>
        </div>

        {/* REPRESENTANTES */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {authorities.map((person) => (
            <article
              key={person.name}
              className="flex flex-col items-center text-center"
            >
              {/* FOTO */}
              <div
                className="
                  relative
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border
                  border-primary/15
                  bg-muted
                  shadow-sm
                "
                style={{
                  width: "150px",
                  height: "150px",
                  minWidth: "150px",
                  minHeight: "150px",
                  maxWidth: "150px",
                  maxHeight: "150px",
                }}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="150px"
                  unoptimized
                  className="object-cover"
                  style={{
                    objectPosition: person.objectPosition,
                  }}
                />
              </div>

              {/* INFORMAÇÕES */}
              <div className="mt-5 flex max-w-sm flex-col items-center">
                <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                  {person.name}
                </h3>

                <div className="mt-3 h-px w-10 bg-primary" />

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {person.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
