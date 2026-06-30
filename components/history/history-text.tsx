interface HistoryTextProps {
  title: string;
  paragraphs: string[];
}

export function HistoryText({ title, paragraphs }: HistoryTextProps) {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading text-4xl font-semibold">{title}</h2>

        <div className="mt-8 space-y-6">
          {paragraphs.map((text, index) => (
            <p key={index} className="text-lg leading-8 text-muted-foreground">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
