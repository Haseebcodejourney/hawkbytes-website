import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlowButton from "@/components/GlowButton";
import "@/components/AboutPage.css";
import "@/components/Hero.css";
import "./Careers.css";

export const metadata: Metadata = {
  title: "Careers — HawkBytes",
  description:
    "Join HawkBytes — build quantum research, AI products, and software with a research-led team.",
};

export default function CareersPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section className="section careers-section">
          <div className="nav-placeholder" />
          <div className="section-padding careers-padding">
            <div className="container">
              <div className="home_hero-tagline-wr is-smaller">
                <div className="home_hero-tagline-line" />
                <div>CAREERS</div>
                <div className="home_hero-tagline-line is-2" />
              </div>
              <div className="spacer-small-16" />
              <h1 className="heading-style-60">Build the future with HawkBytes</h1>
              <div className="spacer-small-16" />
              <div className="max-width-820">
                <div className="text-color-light-grey">
                  <p className="text-size-regular-16">
                    We hire researchers and engineers who care about quantum
                    computing, AI products, and shipping software that lasts.
                    If that sounds like you, reach out — we&apos;d love to talk.
                  </p>
                </div>
              </div>
              <div className="spacer-large-40" />
              <GlowButton href="/contact-us">Talk to an expert</GlowButton>

              <div className="spacer-xxlarge-80" />
              <div className="careers-openings">
                <h2 className="heading-style-32">Open conversations</h2>
                <div className="spacer-medium-30" />
                <div className="careers-list">
                  {[
                    {
                      title: "Quantum Research Engineer",
                      text: "Applied quantum algorithms, hybrid systems, and research prototypes.",
                    },
                    {
                      title: "AI Product Engineer",
                      text: "Ship intelligent products — ML, generative AI, and evaluation loops.",
                    },
                    {
                      title: "Full-Stack Software Engineer",
                      text: "Platforms, websites, and apps with strong product craft.",
                    },
                  ].map((role) => (
                    <a key={role.title} href="/contact-us" className="careers-item">
                      <div>
                        <h3 className="heading-style-21">{role.title}</h3>
                        <div className="spacer-xxsmall-4" />
                        <div className="text-color-light-grey">
                          <p className="text-size-small-14">{role.text}</p>
                        </div>
                      </div>
                      <span className="careers-item-cta">Apply</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="section-bg" aria-hidden="true">
            <div className="container is-for-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e55077f030ad874c0384cc_blog-post-bg-Group.avif"
                loading="lazy"
                alt=""
                className="about_hero-bg-img"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
