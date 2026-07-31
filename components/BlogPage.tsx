"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogPost,
} from "@/lib/blog-posts";
import "./BlogPage.css";
import "./Blog.css";

const ASSETS = {
  heroBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e55077f030ad874c0384cc_blog-post-bg-Group.avif",
  heroBgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e672e7a7611321fad71b29_blogpost-bg-mob.avif",
  filtersFx:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ebfdefd079daf6ba5c78c2_bottom-effects-2.avif",
};

const PAGE_SIZE = 8;

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LatestCard({ post }: { post: BlogPost }) {
  return (
    <a href={post.href} className="home_blog-cl-card">
      <div className="home_blog-cl-card-info-wr">
        <p className="text-color-primary">{post.category}</p>
        <p>/</p>
        <p>{post.date}</p>
      </div>
      <div className="home_blog-cl-card-title-wr">
        <p className="home_blog-cl-card-title">{post.title}</p>
        <p className="home_blog-cl-card-title-gradient">{post.title}</p>
      </div>
    </a>
  );
}

function MainCard({ post }: { post: BlogPost }) {
  return (
    <a href={post.href} className="blog_main-list-card">
      <div className="blog_main-list-img-wr">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.image} loading="lazy" alt="" className="image-cover" />
      </div>
      <div className="blog_main-list-content-wr">
        <div className="home_blog-cl-card-info-wr">
          <p className="text-color-primary">{post.category}</p>
          <p>/</p>
          <p>{post.date}</p>
        </div>
        <div className="home_blog-cl-card-title-wr">
          <p className="home_blog-cl-card-title">{post.title}</p>
          <p className="home_blog-cl-card-title-gradient">{post.title}</p>
        </div>
        <div className="blog_main-list-description-wr">
          <div className="text-color-light-grey">
            <p className="text-size-small-14">{post.description}</p>
          </div>
        </div>
        <div className="blog_author-wr">
          <div className="text-weight-medium">
            <p className="text-size-small-14">{post.author}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function BlogPage() {
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const featured = BLOG_POSTS[2];
  const latest = BLOG_POSTS.slice(0, 2);

  const filtered = useMemo(() => {
    if (category === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === category);
  }, [category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageItems = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const selectCategory = (next: string) => {
    setCategory(next);
    setPage(1);
    setDropdownOpen(false);
  };

  return (
    <section className="section blog-page-section">
      <div className="nav-placeholder" />

      <div className="section-padding blog-page-padding">
        <div className="container">
          <div className="breadcrumbs-wr">
            <Link href="/" className="breadcrumbs-link">
              MAIN PAGE
            </Link>
            <div className="text-color-light-grey">
              <p className="text-size-small-14-rm mob-text-size-12">/</p>
            </div>
            <p className="breadcrumbs-link is-last">BLOG</p>
          </div>

          <div className="blog_hero">
            <div className="blog_hero-left">
              <div className="blog_hero-left-top">
                <h1 className="heading-style-60">HawkBytes Insights</h1>
                <div className="spacer-medium-30 is-mob-30" />
                <h2 className="heading-style-21">
                  Explore our guidance on quantum research, AI products, and
                  software from HawkBytes&apos;s industry-leading team.
                </h2>
                <div className="spacer-xxsmall-4" />
                <div className="text-color-grey">
                  <p className="heading-style-21">
                    Follow the HawkBytes LinkedIn page for more HawkBytes
                    Insights.
                  </p>
                </div>
              </div>

              <div className="blog_hero-left-bottom">
                <p className="heading-style-32">Latest news</p>
                <div className="spacer-large-40" />
                <div className="blog_hero-latest-list" role="list">
                  {latest.map((post) => (
                    <div key={post.slug} className="home_blog-cl-item" role="listitem">
                      <LatestCard post={post} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="blog_hero-right">
              <div className="blog_hero-latest-list-big-card" role="list">
                <div className="home_blog-cl-item" role="listitem">
                  <a href={featured.href} className="blog_hero-big-card">
                    <div className="blog_hero-big-card-img-wr">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={featured.image}
                        loading="lazy"
                        alt=""
                        className="image-cover"
                      />
                    </div>
                    <div className="home_blog-cl-card-info-wr">
                      <p className="text-color-primary">{featured.category}</p>
                      <p>/</p>
                      <p>{featured.date}</p>
                    </div>
                    <div className="home_blog-cl-card-title-wr is-32">
                      <p className="home_blog-cl-card-title">{featured.title}</p>
                      <p className="home_blog-cl-card-title-gradient">
                        {featured.title}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding blog-articles-padding">
        <div className="container">
          <div className="blog_filters-block">
            <p className="heading-style-32">Articles</p>

            <div className="blog-filters-wr">
              <div className="cl-blog-categories hide-on-mobile" role="list">
                {BLOG_CATEGORIES.map((cat) => (
                  <div key={cat} className="blog-filters-item" role="listitem">
                    <button
                      type="button"
                      className={`tag-filter${
                        category === cat ? " fs-cmsfilter_active" : ""
                      }`}
                      onClick={() => selectCategory(cat)}
                    >
                      {cat}
                      {cat !== "All" ? (
                        <span className="tag-filter-line" aria-hidden="true" />
                      ) : null}
                    </button>
                  </div>
                ))}
              </div>

              <div className="blog-filters-dropdown">
                <button
                  type="button"
                  className="blog_filters-dropdown-toggle"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  <span>{category === "All" ? "MORE" : category}</span>
                  <ChevronIcon />
                </button>
                {dropdownOpen ? (
                  <div className="blog_filters-dropdown-list is-open">
                    <div className="blog_filters-inner-wr">
                      {BLOG_CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          className={`tag-filter is-filters-dropdown${
                            category === cat ? " fs-cmsfilter_active" : ""
                          }`}
                          onClick={() => selectCategory(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <p className="blog_filters-total-txt">
              {filtered.length} article{filtered.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="spacer-xlarge-60" />

          <div className="blog_main-list-wr">
            {pageItems.length === 0 ? (
              <p className="text-color-light-grey">No items found.</p>
            ) : (
              <div className="blog_main-list" role="list">
                {pageItems.map((post) => (
                  <div key={post.slug} role="listitem">
                    <MainCard post={post} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {pageCount > 1 ? (
            <div className="blog-pagination">
              <div className="blog-pagination-numbers-wr">
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`blog-pagination-number-btn${
                      n === currentPage ? " is-current" : ""
                    }`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="section-bg" aria-hidden="true">
          <div className="section-bg-bottom-img-wr is-blog-filters">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.filtersFx}
              loading="lazy"
              alt=""
              className="section-bg-bottom-img is-blog-filters-mob"
            />
          </div>
        </div>
      </div>

      <div className="section-bg blog-page-hero-bg" aria-hidden="true">
        <div className="container is-for-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.heroBg}
            loading="lazy"
            alt=""
            className="service_hero-bg-img hide-on-mobile"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.heroBgMob}
            loading="lazy"
            alt=""
            className="service_hero-bg-img hide-on-desktop"
          />
        </div>
      </div>
    </section>
  );
}
