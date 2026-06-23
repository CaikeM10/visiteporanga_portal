import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-24">
      <div className="mb-12">
        <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs uppercase tracking-widest text-primary">
          Blog de Turismo
        </span>

        <h1 className="mt-6 font-heading text-5xl font-bold">
          Descubra Poranga
        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Notícias, histórias, roteiros e curiosidades sobre Poranga e a Serra
          das Matas.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-muted-foreground">{post.date}</p>

              <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>

              <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
