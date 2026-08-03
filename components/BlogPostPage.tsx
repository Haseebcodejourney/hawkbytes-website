"use client";

import Link from "next/link";
import GlowButton from "@/components/GlowButton";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import type { Dictionary } from "@/lib/i18n/types";
import "@/components/BlogPage.css";
import "@/components/Hero.css";
import "@/app/blog/[slug]/BlogPost.css";

type CategoryKey = keyof Dictionary["blog"]["page"]["categories"];

export type BlogPostPageProps = {
  slug: string;
  image: string;
  categoryKey: CategoryKey;
  href: string;
};

export default function BlogPostPage({ slug, image, categoryKey }: BlogPostPageProps) {
  const t = useTranslations();
  const page = t.blog.page;
  const blogPost = t.blogPost;

  const copy = page.posts[slug];
  const category = page.categories[categoryKey] ?? categoryKey;
  const title = copy?.title ?? slug;
  const description = copy?.description ?? "";
  const date = copy?.date ?? "";

  return (
    <section className="section blog-post-section">
      <div className="nav-placeholder" />
      <div className="section-padding blog-post-padding">
        <div className="container">
          <div className="breadcrumbs-wr">
            <Link href="/" className="breadcrumbs-link">
              {blogPost.breadcrumbHome}
            </Link>
            <div className="text-color-light-grey">
              <p className="text-size-small-14-rm">/</p>
            </div>
            <Link href="/blog" className="breadcrumbs-link">
              {blogPost.breadcrumbBlog}
            </Link>
            <div className="text-color-light-grey">
              <p className="text-size-small-14-rm">/</p>
            </div>
            <p className="breadcrumbs-link is-last">{blogPost.breadcrumbArticle}</p>
          </div>

          <div className="home_blog-cl-card-info-wr blog-post-meta">
            <p className="text-color-primary">{category}</p>
            <p>/</p>
            <p>{date}</p>
          </div>

          <div className="spacer-small-16" />
          <h1 className="heading-style-60 blog-post-title">{title}</h1>
          <div className="spacer-medium-30" />
          <div className="max-width-820">
            <div className="text-color-light-grey">
              <p className="text-size-regular-16">{description}</p>
            </div>
          </div>

          <div className="spacer-large-40" />
          <div className="blog-post-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" className="image-cover" />
          </div>

          <div className="spacer-xlarge-60" />
          <div className="blog-post-body text-rich-text-16">
            <p>{blogPost.bodyP1}</p>
            <p>
              {blogPost.bodyP2Before}
              <strong>{title}</strong>
              {blogPost.bodyP2After}
            </p>
            <p>{blogPost.bodyP3}</p>
          </div>

          <div className="spacer-xlarge-60" />
          <GlowButton href="/contact-us">{blogPost.cta}</GlowButton>
        </div>
      </div>
    </section>
  );
}
