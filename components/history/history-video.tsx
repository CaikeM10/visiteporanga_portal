interface HistoryVideoProps {
  title: string;
  description: string;
  video: string;
  poster?: string;
}

export function HistoryVideo({
  title,
  description,
  video,
  poster,
}: HistoryVideoProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-4xl font-semibold text-foreground">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl shadow-2xl">
          <video
            className="aspect-video w-full bg-black object-cover"
            controls
            preload="metadata"
            playsInline
            poster={poster}
          >
            <source src={video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </div>
    </section>
  );
}
