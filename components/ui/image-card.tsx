import Image from "next/image";
import Link from "next/link";

type ImageCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export function ImageCard({ image, title, description, href }: ImageCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-7">
        <h3 className="font-heading text-2xl font-semibold">{title}</h3>

        <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
