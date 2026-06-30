import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface HistoryGalleryProps {
  images: GalleryImage[];
}

export function HistoryGallery({ images }: HistoryGalleryProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-4xl font-semibold">Galeria</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
