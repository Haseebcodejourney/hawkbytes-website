import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlowButton from "@/components/GlowButton";
import { BLOG_POSTS } from "@/lib/blog-posts";
import "@/components/BlogPage.css";
import "@/components/Hero.css";
import "./BlogPost.css";

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

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section className="section blog-post-section">
          <div className="nav-placeholder" />
          <div className="section-padding blog-post-padding">
            <div className="container">
              <div className="breadcrumbs-wr">
                <Link href="/" className="breadcrumbs-link">
                  MAIN PAGE
                </Link>
                <div className="text-color-light-grey">
                  <p className="text-size-small-14-rm">/</p>
                </div>
                <Link href="/blog" className="breadcrumbs-link">
                  BLOG
                </Link>
                <div className="text-color-light-grey">
                  <p className="text-size-small-14-rm">/</p>
                </div>
                <p className="breadcrumbs-link is-last">ARTICLE</p>
              </div>

              <div className="home_blog-cl-card-info-wr blog-post-meta">
                <p className="text-color-primary">{post.category}</p>
                <p>/</p>
                <p>{post.date}</p>
              </div>

              <div className="spacer-small-16" />
              <h1 className="heading-style-60 blog-post-title">{post.title}</h1>
              <div className="spacer-medium-30" />
              <div className="max-width-820">
                <div className="text-color-light-grey">
                  <p className="text-size-regular-16">{post.description}</p>
                </div>
              </div>

              <div className="spacer-large-40" />
              <div className="blog-post-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt="" className="image-cover" />
              </div>

              <div className="spacer-xlarge-60" />
              <div className="blog-post-body text-rich-text-16">
                <p>
                  HawkBytes publishes practical guidance from our product and
                  research work — with quantum computing research at the core,
                  AI products close behind, and software delivery supporting
                  partners who need to ship.
                </p>
                <p>
                  This article expands on <strong>{post.title}</strong>. Whether
                  you are exploring applied quantum systems, building an AI
                  product, or hardening a software platform, our team helps
                  turn ambitious ideas into reliable outcomes.
                </p>
                <p>
                  Want to go deeper with HawkBytes? Talk to our team about
                  research collaboration, product builds, or engineering
                  delivery.
                </p>
              </div>

              <div className="spacer-xlarge-60" />
              <GlowButton href="/contact-us">Talk to an expert</GlowButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
