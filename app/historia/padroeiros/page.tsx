import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { HistoryVideo } from "@/components/history/history-video";
import { HistoryText } from "@/components/history/history-text";
import { HistoryGallery } from "@/components/history/history-gallery";
import { HistoryCuriosities } from "@/components/history/history-curiosities";

export const metadata: Metadata = {
  title: "Jesus, Maria e José",
  description:
    "Conheça a história dos padroeiros de Poranga e um dos principais símbolos da fé e da identidade religiosa do município.",
};

export default function PadroeirosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Patrimônio Religioso"
        title="Jesus, Maria e José"
        description="Os padroeiros de Poranga representam um dos maiores símbolos religiosos e culturais do município."
        image="/images/porangapadroeiros.png"
      />
      <HistoryVideo
        title="Conheça o Monumento"
        description="Conheça um dos principais símbolos da fé e da identidade religiosa de Poranga por meio deste registro audiovisual."
        video="/video/padroeirosporanga.mp4"
        poster="/images/padroeirosporanga.png"
      />

      <HistoryText
        title="História"
        paragraphs={[
          "Em 2 de fevereiro de 1954 foi criada oficialmente a Paróquia de Poranga. Desde sua fundação, a comunidade já possuía como padroeiros Jesus, Maria e José.",

          "A devoção aos padroeiros tornou-se parte da identidade religiosa do município, sendo celebrada todos os anos durante as festividades religiosas que reúnem moradores, visitantes e fiéis da região.",

          "O monumento dedicado aos padroeiros, localizado na entrada da cidade, tornou-se um importante cartão-postal de Poranga. Além de recepcionar quem chega ao município, ele representa a fé, a tradição e a história da comunidade poranguense.",
        ]}
      />

      <HistoryCuriosities />
    </main>
  );
}
