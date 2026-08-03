"use client";

import { useMemo } from "react";
import GlowButton from "@/components/GlowButton";
import StickyNav, { type StickyNavLink } from "@/components/StickyNav";
import Methodology from "@/components/Methodology";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import { FaqSection } from "@/components/Faq";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./ResearchPage.css";

const NAV_LINK_HREFS = [
  "#methodology",
  "#services",
  "#how-we-help",
  "#why-us",
  "#testimonials",
  "#about",
  "#related",
  "#faq",
];

const ASSETS = {
  badge: "/images/gdpr-circle-img.avif",
  heroBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e55077f030ad874c0384cc_blog-post-bg-Group.avif",
  heroBgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e672e7a7611321fad71b29_blogpost-bg-mob.avif",
  ctaBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf4b4595b9051b25a974e_cta-bg-2.avif",
  ctaBgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf6ffe3db08bb29c8d22c_CTA-bg-mob.avif",
  effects1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d047789b98be40b43d8cca_effects-1.avif",
  effects2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d0484cb7b7d01086714bdc_effects-2.avif",
  arrow:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d0103df322d59181373f53_arrow-c.svg",
};

const SERVICE_ICONS = [
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a69f3282b5428d8c1_about-icon-1.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a19f4bf8d2f046242_about-icon-2.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530adc8771031a5185f8_about-icon-3.svg",
];

const WHY_ICONS = [
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a67a7c58456e85002_about-icon-4.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a69f3282b5428d8c1_about-icon-1.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a19f4bf8d2f046242_about-icon-2.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530adc8771031a5185f8_about-icon-3.svg",
];

const RELATED_ASSETS = [
  {
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd7ed98ebf2dd2121c7524_Logo%20Container-3-new.avif",
  },
  {
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e22c48af42dc2383423_Logo-5.avif",
  },
  {
    href: "/#solutions",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e229a276642ebe302c2_Logo-7.avif",
  },
];

const CHEVRON = (
  <svg width="100%" height="100%" viewBox="0 0 18 19" fill="none" aria-hidden="true">
    <path
      d="M8.1083 14.5302L7.05005 13.4697L11.0168 9.49998L7.05005 5.53023L8.1113 4.46973L12.075 8.43948C12.3562 8.72077 12.5142 9.10223 12.5142 9.49998C12.5142 9.89772 12.3562 10.2792 12.075 10.5605L8.1083 14.5302Z"
      fill="currentColor"
    />
  </svg>
);

function ArrowIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 19 18" fill="none" aria-hidden="true">
      <path
        d="M8.60903 14.0302L7.55078 12.9697L11.5175 8.99998L7.55078 5.03023L8.61203 3.96973L12.5758 7.93948C12.857 8.22077 13.015 8.60223 13.015 8.99998C13.015 9.39772 12.857 9.77918 12.5758 10.0605L8.60903 14.0302Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ResearchPage() {
  const t = useTranslations();
  const research = t.research;

  const navLinks = useMemo<StickyNavLink[]>(
    () =>
      research.nav.map((link, index) => ({
        href: NAV_LINK_HREFS[index] ?? "#methodology",
        num: link.num,
        label: link.label,
      })),
    [research.nav],
  );

  const serviceCards = research.services.cards.map((card, index) => ({
    ...card,
    icon: SERVICE_ICONS[index] ?? SERVICE_ICONS[0],
  }));

  const whyItems = research.why.items.map((item, index) => ({
    ...item,
    icon: WHY_ICONS[index] ?? WHY_ICONS[0],
  }));

  const relatedItems = research.related.items.map((item, index) => ({
    ...item,
    ...(RELATED_ASSETS[index] ?? RELATED_ASSETS[0]),
  }));

  return (
    <>
      <section className="section research-hero-section">
        <div className="nav-placeholder" />
        <div className="section-padding top-5 bottom-5">
          <div className="container">
            <div className="research_hero">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.badge}
                alt="GDPR Ready"
                className="research_hero-badge"
                width={211}
                height={211}
              />
              <div className="spacer-small-16" />
              <div className="research_hero-title-wr">
                <h1 className="heading-style-60">{research.hero.title}</h1>
              </div>
              <div className="spacer-small-16" />
              <div className="max-width-820">
                <div className="text-color-light-grey">
                  <p className="text-size-small-14">{research.hero.body}</p>
                </div>
              </div>
              <div className="spacer-large-40" />
              <div className="research_hero-btn-row">
                <GlowButton href="/contact-us">{research.hero.cta}</GlowButton>
                <a href="#methodology" className="button is-text">
                  <div className="button-text-wr">
                    <div>{research.hero.readMore}</div>
                    <div className="btn-icon-embed is-arrow-right">
                      <ArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-bg" aria-hidden="true">
          <div className="container is-for-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSETS.heroBg} loading="lazy" alt="" className="research_hero-bg-img" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.heroBgMob}
              loading="lazy"
              alt=""
              className="research_hero-bg-img-mob"
            />
          </div>
        </div>
      </section>

      <div className="home_sticky-box">
        <StickyNav links={navLinks} noBottomPadding />
        <div className="home_sections-wr">
          <Methodology
            tagline={research.methodology.tagline}
            title={research.methodology.title}
            description={research.methodology.description}
          />

          <section id="services" className="section research-services-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="research_services-head">
                    <h2 className="heading-style-48">{research.services.title}</h2>
                    <div className="text-color-light-grey">
                      <p className="text-size-small-14">{research.services.intro}</p>
                    </div>
                  </div>
                  <div className="spacer-medium-32" />
                  <div className="research_service-grid">
                    {serviceCards.map((card) => (
                      <div key={card.title} className="research_service-card">
                        <div className="research_service-card-stroke" />
                        <div className="research_service-card-inner">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={card.icon}
                            alt=""
                            className="research_service-icon"
                            loading="lazy"
                          />
                          <h3 className="text-size-large-21">{card.title}</h3>
                          <p className="text-size-small-14 text-color-light-grey">
                            {card.text}
                          </p>
                          <div className="research_service-arrow" aria-hidden="true">
                            {CHEVRON}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="how-we-help" className="section research-help-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="align-left">
                    <h2 className="heading-style-48">{research.help.title}</h2>
                    <div className="spacer-medium-30" />
                    <div className="research_help-grid">
                      {research.help.items.map((item) => (
                        <div key={item.title} className="research_help-item">
                          <h3 className="text-size-large-21">{item.title}</h3>
                          <div className="spacer-xxsmall-4" />
                          <p className="text-size-small-14 text-color-light-grey">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section research-mid-cta-section">
            <div className="section-padding top-5 bottom-5">
              <div className="research-mid-cta-wr anim-appear-on-scroll is-visible">
                <div className="research-mid-cta-stroke">
                  <div className="research-mid-cta-content">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ASSETS.ctaBg} alt="" className="research-mid-cta-bg" loading="lazy" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.ctaBgMob}
                      alt=""
                      className="research-mid-cta-bg is-mob"
                      loading="lazy"
                    />
                    <div className="max-width-940">
                      <h2 className="heading-style-48">{research.midCta.title}</h2>
                    </div>
                    <div className="spacer-medium-30" />
                    <div className="max-width-700">
                      <p className="text-size-regular-16 text-color-light-grey">
                        {research.midCta.body}
                      </p>
                    </div>
                    <div className="spacer-medium-36" />
                    <GlowButton href="/contact-us">{research.midCta.button}</GlowButton>
                  </div>
                </div>
                <div className="research-mid-cta-fx" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ASSETS.effects1} alt="" className="research-mid-cta-fx-1" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ASSETS.effects2} alt="" className="research-mid-cta-fx-2" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          <section id="why-us" className="section bg-color-secondary research-why-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="research_why-head">
                    <h2 className="heading-style-48">{research.why.title}</h2>
                    <div className="text-color-grey">
                      <p className="text-size-small-14">{research.why.intro}</p>
                    </div>
                  </div>
                  <div className="spacer-medium-32" />
                  <div className="research_why-grid">
                    {whyItems.map((item) => (
                      <div key={item.title} className="research_why-item">
                        <div className="research_why-top">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.icon}
                            alt=""
                            className="research_why-icon"
                            loading="lazy"
                          />
                          <h3 className="text-size-large-21">{item.title}</h3>
                        </div>
                        <p className="text-size-small-14 text-color-grey">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />

          <section id="about" className="section research-about-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="research_about-block">
                    <h2 className="heading-style-48">{research.about.title}</h2>
                    <div className="research_about-content">
                      <p className="text-size-small-14 text-color-light-grey">
                        {research.about.intro}
                      </p>
                      <div className="spacer-medium-30" />
                      <h3 className="text-size-large-21">{research.about.focusHeading}</h3>
                      <div className="spacer-medium-10" />
                      <ul className="research_about-list">
                        {research.about.focusList.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="spacer-medium-30" />
                      <h3 className="text-size-large-21">{research.about.outcomesHeading}</h3>
                      <div className="spacer-medium-10" />
                      <ul className="research_about-list">
                        {research.about.outcomesList.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="related" className="section research-related-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <p className="tagline-text-blue-gradient">{research.related.tagline}</p>
                  <div className="research_related-head">
                    <h2 className="heading-style-48">{research.related.title}</h2>
                    <div className="text-color-light-grey">
                      <p className="text-size-small-14">{research.related.intro}</p>
                    </div>
                  </div>
                  <div className="spacer-medium-32" />
                  <div className="research_related-grid">
                    {relatedItems.map((item) => (
                      <a key={item.title} href={item.href} className="research_related-card">
                        <div className="research_related-card-stroke" />
                        <div className="research_related-card-inner">
                          <div className="research_related-top">
                            <p className="text-size-small-14-rm">{item.title}</p>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ASSETS.arrow} alt="" className="research_related-arrow" />
                          </div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.logo} alt="" className="research_related-logo" loading="lazy" />
                          <p className="text-size-small-14 text-color-light-grey">{item.text}</p>
                          <span className="research_related-learn">
                            {research.related.learnMore}
                            <span className="research_related-learn-icon">{CHEVRON}</span>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FaqSection
            id="faq"
            className="research-faq-section"
            title={research.faq.title}
            items={research.faq.items}
            appearVisible
          />

          <Cta />
        </div>
      </div>
    </>
  );
}
