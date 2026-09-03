"use client";

import Image from "next/image";

import { ChevronLeft, ChevronRight, Images, MousePointer2 } from "lucide-react";

import { useState, type TouchEvent } from "react";

const museumImages = [
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-fachada.webp",
    title: "Oca da Memória",
    alt: "Fachada da Oca da Memória dos povos Tabajara e Kalabaça em Poranga",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-acervo-e-utensilios.webp",
    title: "Acervo e utensílios",
    alt: "Acervo e utensílios preservados na Oca da Memória",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-acervo-geral.webp",
    title: "Acervo da Oca",
    alt: "Visão geral do acervo da Oca da Memória",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-memoria-fotografica-01.webp",
    title: "Memória fotográfica",
    alt: "Fotografias históricas preservadas na Oca da Memória",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-memoria-fotografica-02.webp",
    title: "Histórias preservadas",
    alt: "Registros fotográficos preservados na Oca da Memória",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-artesanato-em-palha.webp",
    title: "Artesanato",
    alt: "Artesanato em palha preservado na Oca da Memória",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-ceramicas-e-acervo.webp",
    title: "Cerâmicas e objetos",
    alt: "Cerâmicas e objetos presentes no acervo da Oca da Memória",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-memoria-e-luta.webp",
    title: "Memória e luta",
    alt: "Registros sobre a memória e a luta das comunidades indígenas de Poranga",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-saberes-tradicionais.webp",
    title: "Saberes tradicionais",
    alt: "Saberes tradicionais preservados na Oca da Memória",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-utensilios-e-ceramicas.webp",
    title: "Utensílios e cerâmicas",
    alt: "Utensílios e cerâmicas presentes no acervo da Oca da Memória",
  },
  {
    src: "/indigenas/oca-da-memoria/oca-da-memoria-processo-artesanal-do-beiju.webp",
    title: "Produção artesanal do beijú",
    alt: "Registro do processo artesanal do beijú na Oca da Memória",
  },
];

export function OcaMemoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentImage = museumImages[currentIndex];

  // Distância mínima para considerar o movimento como swipe.
  const minSwipeDistance = 50;

  function previousImage() {
    setCurrentIndex((current) =>
      current === 0 ? museumImages.length - 1 : current - 1,
    );
  }

  function nextImage() {
    setCurrentIndex((current) =>
      current === museumImages.length - 1 ? 0 : current + 1,
    );
  }

  // ==================================================
  // SWIPE MOBILE
  // ==================================================

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    setTouchEnd(null);

    setTouchStart(event.targetTouches[0].clientX);
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    setTouchEnd(event.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart === null || touchEnd === null) {
      return;
    }

    const distance = touchStart - touchEnd;

    const swipedLeft = distance > minSwipeDistance;
    const swipedRight = distance < -minSwipeDistance;

    // Arrastou para a esquerda → próxima imagem
    if (swipedLeft) {
      nextImage();
    }

    // Arrastou para a direita → imagem anterior
    if (swipedRight) {
      previousImage();
    }

    setTouchStart(null);
    setTouchEnd(null);
  }

  return (
    <div className="mt-10">
      {/* ==================================================
          INSTRUÇÃO
      ================================================== */}
      <div
        className="
          mb-5
          flex
          items-center
          justify-center
          gap-2
          text-center
          text-sm
          text-muted-foreground
        "
      >
        <MousePointer2 className="size-4 shrink-0 text-primary" />

        <p>
          Use as setas, deslize a imagem ou selecione uma miniatura para navegar
          pelo acervo.
        </p>
      </div>

      {/* ==================================================
          CARROSSEL PRINCIPAL
      ================================================== */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-primary/10
          bg-black
          shadow-lg
        "
      >
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="
            relative
            aspect-[4/3]
            w-full
            touch-pan-y
            select-none
            sm:aspect-[16/10]
            lg:aspect-[16/8]
          "
        >
          {/* IMAGEM */}
          <Image
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            draggable={false}
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="
              pointer-events-none
              object-contain
              transition-opacity
              duration-300
            "
          />

          {/* CONTADOR */}
          <div
            className="
              absolute
              right-4
              top-4
              z-30
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-black/60
              px-4
              py-2
              text-xs
              font-semibold
              text-white
              backdrop-blur-md
            "
          >
            <Images className="size-4" />
            {currentIndex + 1} / {museumImages.length}
          </div>

          {/* ==================================================
              SETAS
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-1/2
              z-40
              flex
              -translate-y-1/2
              items-center
              justify-between
              px-3
              sm:px-5
            "
          >
            {/* ANTERIOR */}
            <button
              type="button"
              onClick={previousImage}
              aria-label="Ver imagem anterior"
              className="
                pointer-events-auto
                flex
                size-11
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/60
                text-white
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:border-primary
                hover:bg-primary
                sm:size-14
              "
            >
              <ChevronLeft className="size-6 sm:size-7" />
            </button>

            {/* PRÓXIMA */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Ver próxima imagem"
              className="
                pointer-events-auto
                flex
                size-11
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/60
                text-white
                shadow-lg
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:border-primary
                hover:bg-primary
                sm:size-14
              "
            >
              <ChevronRight className="size-6 sm:size-7" />
            </button>
          </div>

          {/* GRADIENTE INFERIOR */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-10
              h-40
              bg-gradient-to-t
              from-black/80
              via-black/25
              to-transparent
            "
          />

          {/* LEGENDA */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-20
              p-5
              sm:p-7
            "
          >
            <p className="font-heading text-xl font-semibold text-white sm:text-2xl">
              {currentImage.title}
            </p>

            <p className="mt-1 text-xs text-white/70 sm:text-sm">
              Acervo da Oca da Memória • Poranga
            </p>
          </div>
        </div>
      </div>

      {/* ==================================================
          MINIATURAS
      ================================================== */}
      <div
        className="
          mt-5
          flex
          gap-3
          overflow-x-auto
          pb-3
        "
      >
        {museumImages.map((image, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Visualizar ${image.title}`}
              aria-pressed={isActive}
              className={`
                relative
                h-20
                w-28
                shrink-0
                overflow-hidden
                rounded-xl
                border-2
                transition-all
                duration-300
                sm:h-24
                sm:w-36
                ${
                  isActive
                    ? "border-primary opacity-100 shadow-md"
                    : "border-transparent opacity-55 hover:opacity-100"
                }
              `}
            >
              <Image
                src={image.src}
                alt=""
                fill
                draggable={false}
                sizes="144px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* ==================================================
          INDICADORES
      ================================================== */}
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {museumImages.map((image, index) => (
          <button
            key={`${image.src}-indicator`}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para imagem ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${
                index === currentIndex
                  ? "w-7 bg-primary"
                  : "w-2 bg-primary/25 hover:bg-primary/50"
              }
            `}
          />
        ))}
      </div>

      {/* DICA MOBILE */}
      <p className="mt-4 text-center text-xs text-muted-foreground sm:hidden">
        Deslize para os lados para ver as próximas imagens.
      </p>
    </div>
  );
}
