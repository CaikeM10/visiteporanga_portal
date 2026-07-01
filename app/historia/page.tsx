import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

import { HistoryVideo } from "@/components/history/history-video";
import { HistoryText } from "@/components/history/history-text";
//import { HistoryGallery } from "@/components/history/history-gallery";
import { HistoryCuriosities } from "@/components/history/history-curiosities";

export const metadata: Metadata = {
  title: "História",
  description:
    "A história de Poranga, no oeste do Ceará: origens, formação do município na Serra das Matas e os marcos que moldaram sua identidade.",
};

const timeline = [
  {
    year: "Séc. XVIII",
    title: "Primeiros povoados",
    text: "As terras altas da Serra das Matas começam a ser ocupadas por famílias que buscavam o clima ameno e a água das nascentes serranas.",
  },
  {
    year: "1880",
    title: "Crescimento da povoação",
    text: "O pequeno arraial se desenvolve em torno da capela e do comércio de gado, tornando-se ponto de passagem importante no sertão.",
  },
  {
    year: "1957",
    title: "Emancipação política",
    text: "Poranga conquista sua autonomia e é elevada à categoria de município, marco celebrado até hoje pela população.",
  },
  {
    year: "Atualidade",
    title: "Vocação turística",
    text: "Com seu patrimônio natural e cultural, Poranga consolida-se como destino de ecoturismo e turismo de experiência no Ceará.",
  },
];

export default function HistoriaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nossas raízes"
        title="A história de Poranga"
        description="Uma trajetória que nasce nas alturas da Serra e se entrelaça com a cultura e a fé do povo Poranguense."
        image="/images/imagemigrejamatriz.webp"
      />

      {/* Introdução */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            O nome <span className="font-medium text-foreground">Poranga</span>{" "}
            tem origem tupi e significa &ldquo;bonita&rdquo;,
            &ldquo;formosa&rdquo;, uma homenagem à exuberância da paisagem
            serrana. Localizada no extremo oeste do Ceará, na divisa com o
            Piauí, a cidade carrega em sua história a marca da resiliência
            sertaneja e da convivência com a natureza.
          </p>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Da ocupação das primeiras famílias à emancipação política, cada
            capítulo revela a força de uma comunidade que soube transformar a
            serra em lar e a tradição em identidade.
          </p>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-balance font-heading text-3xl font-semibold text-foreground">
            Linha do tempo
          </h2>

          <ol className="mt-10 space-y-0">
            {timeline.map((item, i) => (
              <li
                key={item.year}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <span className="flex size-3 shrink-0 rounded-full bg-primary ring-4 ring-primary/15" />

                  {i < timeline.length - 1 && (
                    <span
                      className="mt-1 w-px flex-1 bg-border"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="-mt-1 pb-2">
                  <span className="font-mono text-sm font-medium text-primary">
                    {item.year}
                  </span>

                  <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Patrimônio Religioso */}
      <HistoryVideo
        title="Monumento dos Padroeiros"
        description="Conheça um dos principais símbolos da fé e da identidade religiosa de Poranga através deste registro audiovisual."
        video="/video/padroeirosporanga.mp4"
        poster="/images/padroeirosporanga.png"
      />

      <HistoryText
        title="Jesus, Maria e José"
        paragraphs={[
          "Em 2 de fevereiro de 1954 foi criada oficialmente a Paróquia de Poranga. Desde sua fundação, a comunidade já possuía como padroeiros Jesus, Maria e José.",

          "A devoção aos padroeiros tornou-se parte da identidade religiosa do município, sendo celebrada anualmente durante as festividades da paróquia e reunindo moradores, visitantes e fiéis de toda a região.",

          "Localizado na entrada da cidade, o monumento dedicado aos padroeiros tornou-se um dos principais cartões-postais de Poranga. Mais do que uma obra monumental, ele simboliza a fé, a tradição e a história do povo poranguense.",
        ]}
      />

      <HistoryCuriosities />
    </main>
  );
}
