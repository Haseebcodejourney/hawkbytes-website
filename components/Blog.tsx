import { BLOG_POSTS } from "@/lib/blog-posts";
import "./Blog.css";

const ASSETS = {
  bg1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d3ec533372d8146f27d256_blog-effects1.avif",
  bg2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d3ec53d300a0e9ceedbe6f_blog-effects2.avif",
};

const POSTS = BLOG_POSTS.slice(0, 3);

export default function Blog() {
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
              <p className="tagline-text-blue-gradient is-on-white">BLOG</p>
              <h2 className="heading-style-48">Latest stories</h2>
            </div>
            <a href="/blog" className="button w-variant-09568581-b747-f3e0-5ddb-1d10003baaf6">
              <div className="button-text-wr">
                <div>READ THE BLOG</div>
              </div>
            </a>
          </div>

          <div className="spacer-medium-30" />

          <div className="home_blog-cl-wr">
            <div className="home_blog-cl" role="list">
              {POSTS.map((post) => (
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
                      <p className="text-color-primary">{post.category}</p>
                      <p>/</p>
                      <p>{post.date}</p>
                    </div>
                    <div className="home_blog-cl-card-title-wr">
                      <p className="home_blog-cl-card-title">{post.title}</p>
                      <p className="home_blog-cl-card-title-gradient">
                        {post.title}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
