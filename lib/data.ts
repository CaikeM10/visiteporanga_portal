export type Attraction = {
  slug: string;
  name: string;
  category: "Natureza" | "Cultura" | "Aventura" | "Histórico";

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
    slug: "cachoeira-do-frade",

    name: "Cachoeira do Pinga ",

    category: "Natureza",

    short:
      "Queda d’água cristalina cercada por mata verde, perfeita para um mergulho refrescante.",

    description:
      "Escondida em um vale úmido da Serra das Matas, a Cachoeira do Frade despenca sobre rochas escuras formando piscinas naturais de água esmeralda. O trajeto passa por um corredor de vegetação exuberante, contrastando com a paisagem seca do entorno. É um dos cartões-postais naturais de Poranga e ponto obrigatório para quem busca contato com a natureza.",

    image: "/images/cachoeira.png",

    gallery: [
      "/images/cachoeira.png",
      "/images/cachoeira-2.jpg",
      "/images/cachoeira-3.jpg",
    ],

    highlights: [
      "Piscinas naturais",
      "Mata preservada",
      "Banho seguro",
      "Área de piquenique",
    ],

    bestTime: "Maio a agosto, após o período chuvoso",

    difficulty: "Leve",

    distance: "15 km do centro",

    visitDuration: "2 a 4 horas",

    location: "Serra das Matas",

    latitude: -4.75,

    longitude: -40.92,
  },

  {
    slug: "mirante-da-serra",

    name: "Igrejinha de Pedra",

    category: "Natureza",

    short:
      "Vista panorâmica de tirar o fôlego sobre o vale e as montanhas ao pôr do sol.",

    description:
      "No alto da serra, o mirante revela um horizonte de montanhas azuladas que se sobrepõem até onde a vista alcança. Ao entardecer, o céu se incendeia em tons de laranja e rosa, transformando o lugar no melhor cenário para fotografias. Um espaço contemplativo que resume a grandeza da paisagem de Poranga.",

    image: "/images/mirante.png",

    gallery: [
      "/images/mirante.png",
      "/images/mirante-2.jpg",
      "/images/mirante-3.jpg",
    ],

    highlights: ["Pôr do sol", "Vista 180°", "Acesso de carro", "Fotografia"],

    bestTime: "Fim de tarde, o ano todo",

    difficulty: "Muito leve",

    distance: "8 km do centro",

    visitDuration: "1 a 2 horas",

    location: "Serra das Matas",

    latitude: -4.76,

    longitude: -40.93,
  },

  {
    slug: "trilha-das-pedras",

    name: "Cachoeira da Barra",

    category: "Aventura",

    short:
      "Caminhada por formações rochosas milenares e vegetação típica da caatinga.",

    description:
      "A Trilha das Pedras conduz o visitante por imponentes formações rochosas esculpidas pelo tempo, entremeadas pela caatinga resiliente. Ao amanhecer, a luz dourada cria um espetáculo de cores e sombras. É a escolha ideal para quem aprecia ecoturismo, observação de aves e o silêncio do sertão.",

    image: "/images/trilha.png",

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

    image: "/images/igreja.png",

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
    image: "/images/cachoeira.png",
    href: "/pontos-turisticos",
  },

  {
    title: "Cultura Sertaneja",
    description:
      "Festas tradicionais, artesanato e a hospitalidade que definem a alma de Poranga.",
    image: "/images/cultura-festa.png",
    href: "/cultura",
  },

  {
    title: "História Viva",
    description:
      "Conheça as origens do município e os marcos que contam a trajetória do povo poranguense.",
    image: "/images/igreja.png",
    href: "/historia",
  },

  {
    title: "Gastronomia Local",
    description:
      "Sabores regionais, culinária sertaneja e experiências gastronômicas autênticas.",
    image: "/images/gastronomia.png",
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
