"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Blog.css";

const ASSETS = {
  bg1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d3ec533372d8146f27d256_blog-effects1.avif",
  bg2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d3ec53d300a0e9ceedbe6f_blog-effects2.avif",
};

const POSTS = BLOG_POSTS.slice(0, 3);

export default function Blog() {
  const t = useTranslations();

  return (
    <section className="section bg-color-secondary blog-section">
      <div className="section-bg" aria-hidden="true">
        <div className="container is-relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.bg1}
            loading="lazy"
            width={401}
            alt=""
            className="home_blog-bg-img-1"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.bg2}
            loading="lazy"
            width={140}
            alt=""
            className="home_blog-bg-img-2"
          />
        </div>
      </div>

      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="heading-wr-with-btn">
            <div className="align-left">
              <p className="tagline-text-blue-gradient is-on-white">{t.blog.tagline}</p>
              <h2 className="heading-style-48">{t.blog.title}</h2>
            </div>
            <Link href="/blog" className="button w-variant-09568581-b747-f3e0-5ddb-1d10003baaf6">
              <div className="button-text-wr">
                <div>{t.blog.cta}</div>
              </div>
            </Link>
          </div>

          <div className="spacer-medium-30" />

          <div className="home_blog-cl-wr">
            <div className="home_blog-cl" role="list">
              {POSTS.map((post) => {
                const copy = t.blog.page.posts[post.slug];
                const categoryKey = post.category as keyof typeof t.blog.page.categories;
                const categoryLabel =
                  t.blog.page.categories[categoryKey] ?? post.category;
                const title = copy?.title ?? post.title;
                const date = copy?.date ?? post.date;
                return (
                <div key={post.slug} className="home_blog-cl-item" role="listitem">
                  <a href={post.href} className="home_blog-cl-card">
                    <div className="home_blog-cl-card-img-wr">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        loading="lazy"
                        alt=""
                        className="image-cover"
                      />
                    </div>
                    <div className="home_blog-cl-card-info-wr">
                      <p className="text-color-primary">{categoryLabel}</p>
                      <p>/</p>
                      <p>{date}</p>
                    </div>
                    <div className="home_blog-cl-card-title-wr">
                      <p className="home_blog-cl-card-title">{title}</p>
                      <p className="home_blog-cl-card-title-gradient">
                        {title}
                      </p>
                    </div>
                  </a>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
