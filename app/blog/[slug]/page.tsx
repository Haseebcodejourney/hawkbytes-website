import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostPage from "@/components/BlogPostPage";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article — HawkBytes" };
  return {
    title: `${post.title} — HawkBytes`,
    description: post.description,
  };
}

export default async function BlogPostRoute({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const categoryKey = (
    BLOG_CATEGORIES as readonly string[]
  ).includes(post.category)
    ? (post.category as (typeof BLOG_CATEGORIES)[number])
    : "All";

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Header />
      <main>
        <BlogPostPage
          slug={post.slug}
          image={post.image}
          categoryKey={categoryKey}
          href={post.href}
        />
      </main>
      <Footer />
    </div>
  );
}
