"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/portfolio";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-[var(--text-primary)] mb-4">Post Not Found</h1>
          <Link href="/blog" className="neu-btn px-6 py-3 text-sm text-[var(--accent)]">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="neu-btn px-4 py-2 text-sm text-[var(--text-secondary)] inline-block mb-8">
          ← Back to Blog
        </Link>

        <article className="neu-card p-8 sm:p-12">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--text-secondary)] mb-4">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-[var(--text-secondary)] mb-8">{post.description}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-sm max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading text-xl font-semibold text-[var(--text-primary)] mt-8 mb-3">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-heading text-lg font-semibold text-[var(--text-primary)] mt-6 mb-2">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.trim() === "") return <br key={i} />;
              return (
                <p key={i} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
