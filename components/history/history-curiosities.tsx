import { Calendar, Church, MapPin } from "lucide-react";

const curiosities = [
  {
    icon: Calendar,
    title: "Criação da Paróquia",
    text: "A Paróquia de Poranga foi criada em 2 de fevereiro de 1954.",
  },
  {
    icon: Church,
    title: "Padroeiros",
    text: "Jesus, Maria e José são os padroeiros oficiais do município.",
  },
  {
    icon: MapPin,
    title: "Localização",
    text: "O monumento encontra-se na entrada da cidade de Poranga.",
  },
];

export function HistoryCuriosities() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-4xl font-semibold">Curiosidades</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {curiosities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl bg-card p-8 shadow-sm"
              >
                <Icon className="mb-6 text-primary" size={34} />

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
