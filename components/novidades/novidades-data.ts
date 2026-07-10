export interface Novidade {
  slug: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  date: string;
  href: string;

  location: string;

  mapsUrl: string;
}

export const novidades: Novidade[] = [
  {
    slug: "eu-amo-poranga",

    title: "Eu ❤️ Poranga",

    description:
      "Inaugurado recentemente no centro da cidade, o letreiro 'Eu ❤️ Poranga' tornou-se um dos novos cartões-postais do município. O espaço foi projetado para valorizar a identidade local, incentivar o turismo e proporcionar um ambiente agradável para fotografias, encontros e momentos de lazer. Com iluminação especial durante a noite e localização privilegiada, o monumento já faz parte do roteiro de moradores e visitantes.",

    image: "/images/porticocidade.jpeg",

    badge: "NOVO",

    date: "2026",

    href: "/novidades/eu-amo-poranga",

    location: "Praça Central • Centro de Poranga",

    mapsUrl: "https://maps.app.goo.gl/fAt8GxSXtjYsafMJ8",
  },
];
