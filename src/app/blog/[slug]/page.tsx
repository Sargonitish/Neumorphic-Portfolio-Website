import Link from "next/link";
import { blogPosts } from "@/data/portfolio";
import BlogPostContent from "./BlogPostContent";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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

  return <BlogPostContent post={post} />;
}
