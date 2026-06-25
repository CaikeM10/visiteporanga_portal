export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "o-que-fazer-em-poranga",
    title: "O que fazer em Poranga: guia completo",
    excerpt:
      "Descubra cachoeiras, trilhas, cultura e os principais atrativos turísticos de Poranga.",
    image: "/images/blog/o-que-fazer.jpg",
    date: "2026-07-01",
    author: "Caike Marinho",
    content: `
Poranga é um dos destinos mais autênticos do interior do Ceará.

Localizada na Serra das Matas, a cidade reúne natureza exuberante, cultura sertaneja e paisagens únicas.

Entre os destaques estão:

• Cachoeira do Pinga
• Mirante da Serra das Matas
• Igreja Matriz
• Trilha das Pedras

A combinação entre serra e sertão torna a experiência única para visitantes.
`,
  },

  {
    slug: "historia-da-igreja-matriz",
    title: "A história da Igreja Matriz de Poranga",
    excerpt:
      "Conheça um dos principais símbolos históricos e religiosos do município.",
    image: "/images/blog/igreja.jpg",
    date: "2026-07-03",
    author: "Caike Marinho",
    content: `
A Igreja Matriz é um dos principais patrimônios históricos de Poranga.'

Além de sua importância religiosa, representa parte da identidade cultural da cidade.

Sua localização na praça central faz dela um dos locais mais visitados do município.
`,
  },
];
