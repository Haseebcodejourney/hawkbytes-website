"use client";

import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./ContactPage.css";
import "./Hero.css";
import "@/app/privacy-policy/PrivacyPolicy.css";

export default function PrivacyPage() {
  const t = useTranslations();
  const privacy = t.privacy;

  return (
    <section className="section overflow-hidden privacy-section">
      <div className="nav-placeholder" />
      <div className="section-padding privacy-padding">
        <div className="container is-relative">
          <div className="privacy-wr">
            <h1 className="heading-style-60">{privacy.title}</h1>
            <div className="spacer-large-48" />

            <div className="text-rich-text-16">
              {privacy.sections.map((section) => (
                <div key={section.heading}>
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-bg" aria-hidden="true">
        <div className="home_hero-media-wr">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dc28c077abf78bbedfd5a8_Frame-mob-2.svg"
            loading="eager"
            alt=""
            className="home_hero-bg-img-mob"
          />
          <div className="hide-on-mobile">
            <div className="container is-for-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cedbf13a28462cd45fdff0_C-Frame.svg"
                loading="lazy"
                alt=""
                className="home_hero-bg-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
