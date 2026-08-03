"use client";

import GlowButton from "@/components/GlowButton";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "@/components/AboutPage.css";
import "@/components/Hero.css";
import "@/app/careers/Careers.css";

export default function CareersPage() {
  const t = useTranslations();
  const careers = t.careers;

  return (
    <section className="section careers-section">
      <div className="nav-placeholder" />
      <div className="section-padding careers-padding">
        <div className="container">
          <div className="home_hero-tagline-wr is-smaller">
            <div className="home_hero-tagline-line" />
            <div>{careers.tagline}</div>
            <div className="home_hero-tagline-line is-2" />
          </div>
          <div className="spacer-small-16" />
          <h1 className="heading-style-60">{careers.title}</h1>
          <div className="spacer-small-16" />
          <div className="max-width-820">
            <div className="text-color-light-grey">
              <p className="text-size-regular-16">{careers.body}</p>
            </div>
          </div>
          <div className="spacer-large-40" />
          <GlowButton href="/contact-us">{careers.cta}</GlowButton>

          <div className="spacer-xxlarge-80" />
          <div className="careers-openings">
            <h2 className="heading-style-32">{careers.openingsTitle}</h2>
            <div className="spacer-medium-30" />
            <div className="careers-list">
              {careers.roles.map((role) => (
                <a key={role.title} href="/contact-us" className="careers-item">
                  <div>
                    <h3 className="heading-style-21">{role.title}</h3>
                    <div className="spacer-xxsmall-4" />
                    <div className="text-color-light-grey">
                      <p className="text-size-small-14">{role.text}</p>
                    </div>
                  </div>
                  <span className="careers-item-cta">{careers.apply}</span>
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
  );
}
