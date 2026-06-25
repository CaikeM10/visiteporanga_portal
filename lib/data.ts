export type Attraction = {
  slug: string;
  name: string;
  category:
    | "Natureza"
    | "Cultura"
    | "Aventura"
    | "Histórico"
    | "Turismo Religioso";

  short: string;
  description: string;

  image: string;

  gallery?: string[];

  highlights: string[];

  bestTime: string;

  difficulty?: string;

  distance?: string;

  visitDuration?: string;

  location?: string;

  latitude?: number;

  longitude?: number;
};

export const attractions: Attraction[] = [
  {
    slug: "cachoeira-do-pinga",

    name: "Cachoeira do Pinga",

    category: "Natureza",

    short:
      "Um dos principais atrativos naturais de Poranga, com águas cristalinas, vegetação preservada e um cenário perfeito para banho e contemplação.",

    description:
      "Localizada na comunidade de Jericó, zona rural de Poranga, a Cachoeira do Pinga é um dos cartões-postais do município e um dos destinos mais procurados por visitantes. Cercada por vegetação nativa, rios e formações rochosas, proporciona uma experiência única de contato com a natureza. Durante o período chuvoso, entre janeiro e junho, a queda d'água ganha ainda mais volume e beleza, tornando o local ideal para ecoturismo, fotografia e momentos de lazer. A região também possui importantes formações rochosas e sítios arqueológicos com pinturas rupestres, enriquecendo ainda mais a experiência de quem visita o local.",

    image: "/images/pinga.jpg",

    gallery: [
      "/images/cachoeira.png",
      "/images/cachoeira-2.jpg",
      "/images/cachoeira-3.jpg",
    ],

    highlights: [
      "Águas cristalinas",
      "Queda d'água natural",
      "Ecoturismo",
      "Vegetação preservada",
      "Formações rochosas",
      "Paisagens para fotografia",
    ],

    bestTime: "Janeiro a junho (período chuvoso)",

    difficulty: "Leve",

    distance: "Zona rural de Poranga",

    visitDuration: "2 a 4 horas",

    location: "Comunidade de Jericó - Poranga, Ceará",

    latitude: -4.744,
    longitude: -40.921,
  },

  {
    slug: "igrejinha-de-pedra",

    name: "Igrejinha de Pedra",

    category: "Turismo Religioso",

    short:
      "Um dos principais cartões-postais de Poranga, a Igrejinha de Pedra une fé, história, arquitetura rústica e uma vista privilegiada da cidade.",

    description:
      "Conhecida oficialmente como Igreja Mãe de Deus, a Igrejinha de Pedra está localizada no Alto da Mãe de Deus, o ponto mais elevado de Poranga. Construída com pedras irregulares e barro, destaca-se por sua arquitetura rústica, que se integra harmoniosamente à paisagem natural. Além de seu importante valor religioso e histórico, o local oferece um mirante natural com uma ampla vista panorâmica da cidade. Cercada por muito vento, tranquilidade e natureza, é um destino ideal para momentos de contemplação, oração, fotografia e turismo religioso. O acesso ao topo é realizado por uma trilha e faz da visita uma experiência única para moradores e visitantes.",

    image: "/images/igrejadepedra.jpg",

    gallery: [
      "/images/igrejadepedra.jpg",
      "/images/igrejadepedra-2.jpg",
      "/images/igrejadepedra-3.jpg",
    ],

    highlights: [
      "Arquitetura em pedra",
      "Turismo religioso",
      "Mirante natural",
      "Vista panorâmica da cidade",
      "Patrimônio histórico",
      "Contemplação e fotografia",
    ],

    bestTime: "Durante todo o ano",

    difficulty: "Leve",

    distance: "Centro urbano de Poranga",

    visitDuration: "1 a 2 horas",

    location: "Alto da Mãe de Deus - Poranga, Ceará",

    latitude: -4.745,
    longitude: -40.92,
  },
  {
    slug: "trilha-das-pedras",

    name: "Cachoeira da Barra",

    category: "Aventura",

    short:
      "Caminhada por formações rochosas milenares e vegetação típica da caatinga.",

    description:
      "A Trilha das Pedras conduz o visitante por imponentes formações rochosas esculpidas pelo tempo, entremeadas pela caatinga resiliente. Ao amanhecer, a luz dourada cria um espetáculo de cores e sombras. É a escolha ideal para quem aprecia ecoturismo, observação de aves e o silêncio do sertão.",

    image: "/images/barra.jpeg",

    gallery: [
      "/images/trilha.png",
      "/images/trilha-2.jpg",
      "/images/trilha-3.jpg",
    ],

    highlights: [
      "Formações rochosas",
      "Observação de aves",
      "Nascer do sol",
      "Guia local",
    ],

    bestTime: "Início da manhã",

    difficulty: "Moderada",

    distance: "12 km do centro",

    visitDuration: "3 horas",

    location: "Zona Rural",

    latitude: -4.77,

    longitude: -40.94,
  },

  {
    slug: "igreja-matriz",

    name: "Igreja Matriz",

    category: "Histórico",

    short:
      "Símbolo da fé poranguense e um dos pontos mais fotografados da cidade.",

    description:
      "Erguida no coração de Poranga, a Igreja Matriz representa um dos maiores patrimônios históricos e religiosos do município. Sua arquitetura marcante e a praça ao redor formam o principal cartão-postal urbano da cidade.",

    image: "/images/imagemigrejamatriz.webp",

    gallery: [
      "/images/igreja.png",
      "/images/igreja-2.jpg",
      "/images/igreja-3.jpg",
    ],

    highlights: [
      "Arquitetura histórica",
      "Praça central",
      "Festas religiosas",
      "Acesso livre",
    ],

    bestTime: "Ano inteiro",

    difficulty: "Muito leve",

    distance: "Centro da cidade",

    visitDuration: "30 minutos",

    location: "Praça da Matriz",

    latitude: -4.744,

    longitude: -40.92,
  },
];

export type Experience = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const experiences: Experience[] = [
  {
    title: "Natureza & Cachoeiras",
    description:
      "Banhos em águas cristalinas e trilhas por paisagens preservadas da Serra das Matas.",
    image: "/images/barra.jpeg",
    href: "/pontos-turisticos",
  },

  {
    title: "Cultura Poranguense",
    description:
      "Festas tradicionais, artesanato e a hospitalidade que definem a alma de Poranga.",
    image: "/images/cultura-festa.png",
    href: "/cultura",
  },

  {
    title: "História Viva",
    description:
      "Conheça as origens do município e os marcos que contam a trajetória do povo poranguense.",
    image: "/images/igrejadepedra.jpg",
    href: "/historia",
  },

  {
    title: "Gastronomia Local",
    description:
      "Sabores regionais, culinária sertaneja e experiências gastronômicas autênticas.",
    image: "/images/comida.png",
    href: "/guia-local",
  },
];

export const navLinks = [
  {
    label: "Descubra",
    href: "/",
  },

  {
    label: "Atrativos",
    href: "/pontos-turisticos",
  },

  {
    label: "História",
    href: "/historia",
  },

  {
    label: "Cultura",
    href: "/cultura",
  },

  {
    label: "Guia Local",
    href: "/guia-local",
  },

  {
    label: "Planeje sua Visita",
    href: "/planeje-sua-visita",
  },
];
