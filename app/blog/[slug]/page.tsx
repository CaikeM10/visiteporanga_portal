import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "@/lib/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-24">
      <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-3xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <span className="text-sm text-muted-foreground">
        {post.date} • {post.author}
      </span>

      <h1 className="mt-4 font-heading text-5xl font-bold">{post.title}</h1>

      <article className="prose prose-lg mt-10 max-w-none">
        {post.content
          .split("\n")
          .filter(Boolean)
          .map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </article>
    </main>
  );
}
