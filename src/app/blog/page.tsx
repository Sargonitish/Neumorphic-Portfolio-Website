"use client";

import Link from "next/link";
import { blogPosts } from "@/data/portfolio";

export default function BlogPage() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Blog
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Thoughts on development, design, and my learning journey.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="neu-card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 animate-fade-up group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="neu-circle w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl shrink-0">
                📝
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{post.description}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
