import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Attraction } from "@/lib/data";

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Link
      href={`/pontos-turisticos/${attraction.slug}`}
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-black/10
      "
    >
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={attraction.image || "/placeholder.svg"}
          alt={attraction.name}
          className="
            size-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
            opacity-70
          "
          aria-hidden="true"
        />

        {/* Categoria */}
        <span
          className="
            absolute
            left-3
            top-3
            rounded-full
            border
            border-white/20
            bg-black/30
            px-3
            py-1
            font-mono
            text-[11px]
            uppercase
            tracking-wider
            text-white
            backdrop-blur-sm
          "
        >
          {attraction.category}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col p-5">
        <h3 className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {attraction.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {attraction.short}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="size-4 text-primary" />
          Melhor época: {attraction.bestTime}
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
          Explorar atrativo
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
