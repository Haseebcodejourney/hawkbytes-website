"use client";

import { useMemo } from "react";
import GlowButton from "@/components/GlowButton";
import StickyNav, { type StickyNavLink } from "@/components/StickyNav";
import KeyFacts from "@/components/KeyFacts";
// import Accreditations from "@/components/Accreditations";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "@/components/Hero.css";
import "./AboutPage.css";

const ABOUT_LINK_HREFS = [
  "#mission",
  "#facts",
  "#location",
  "#offer",
  "#team",
  "#accreditations",
];

const ASSETS = {
  heroVideoPoster:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67e673a220f8e9cd35fc7a42_about_us-%20%281%29-poster-00001.jpg",
  heroVideoMp4:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67e673a220f8e9cd35fc7a42_about_us-%20%281%29-transcode.mp4",
  heroVideoWebm:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67e673a220f8e9cd35fc7a42_about_us-%20%281%29-transcode.webm",
  heroBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e55077f030ad874c0384cc_blog-post-bg-Group.avif",
  heroBgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e672e7a7611321fad71b29_blogpost-bg-mob.avif",
  map: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6862ace9a73a4285c9d22_map2.avif",
  mapAnim:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e687b9a93db9764c6e49b0_map%20(3).svg",
  geo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e686d5576b65190fedd1c1_geo-icon.svg",
  teamFx:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ebfdefd079daf6ba5c78c2_bottom-effects-2.avif",
};

const TRUST_LOGOS = [
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced9338d6b38012a349c4d_Logo%D0%A11.avif",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced933fdbc46ec87b75318_Logo%D0%A12.avif",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd7e11ba5f91e7e8f7a1b0_Logo%20CMMC.avif",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced933f62e30bc7a280290_Logo%D0%A14.avif",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced933257e59d2dad41c9f_Logo%D0%A15.avif",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced93378e4bbab072b6640_Logo%D0%A16.avif",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced933432cd53fdbf6ec9d_Logo%D0%A17.avif",
];

const FEATURE_ICONS = [
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a69f3282b5428d8c1_about-icon-1.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530adc8771031a5185f8_about-icon-3.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a19f4bf8d2f046242_about-icon-2.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e6530a67a7c58456e85002_about-icon-4.svg",
];

const TEAM_ASSETS = [
  {
    img: "/team/hamza-sha-haseeb.jpg",
    objectPosition: "50% 10%",
    linkedin: "https://www.linkedin.com/in/hamza-haseeb-5aab38175/",
  },
  {
    img: "/team/takunda-kapesa.jpg",
    linkedin: "https://www.linkedin.com/in/takunda-kapesa-a63591336/",
  },
  {
    img: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67e274fccd6db1c24e6df93f_Author%20Image%203.avif",
    linkedin: "https://www.linkedin.com/company/hawkbytes/",
  },
];

function LinkedInIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.18881 4.35225C6.18881 5.65983 5.20455 6.70613 3.62417 6.70613H3.5952C2.07356 6.70613 1.08984 5.65983 1.08984 4.35225C1.08984 3.017 2.10351 2 3.65403 2C5.20455 2 6.15939 3.017 6.18881 4.35225ZM5.88962 8.56494V22.183H1.35717V8.56494H5.88962ZM22.2349 22.183L22.2351 14.3748C22.2351 10.1919 19.999 8.24511 17.0166 8.24511C14.6101 8.24511 13.5327 9.5669 12.9312 10.4942V8.56526H8.39819C8.45793 9.84311 8.39819 22.1833 8.39819 22.1833H12.9312V14.5779C12.9312 14.1709 12.9606 13.7649 13.0804 13.4735C13.408 12.6604 14.1539 11.8185 15.406 11.8185C17.0467 11.8185 17.7027 13.0673 17.7027 14.8973V22.183H22.2349Z"
        fill="currentColor"
      />
    </svg>
  );
}

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

function LogoTrack({ trackKey }: { trackKey: string }) {
  return (
    <div className="marquee-content-logos logo-scroll-left" aria-hidden={trackKey !== "a"}>
      {TRUST_LOGOS.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${trackKey}-${src}`}
          width={140}
          height={80}
          loading="lazy"
          alt=""
          src={src}
          className="marquee-logo-img-row"
        />
      ))}
    </div>
  );
}

export default function AboutPage() {
  const t = useTranslations();
  const about = t.about;

  const aboutLinks = useMemo<StickyNavLink[]>(
    () =>
      about.nav.map((link, index) => ({
        href: ABOUT_LINK_HREFS[index] ?? "#mission",
        num: link.num,
        label: link.label,
      })),
    [about.nav],
  );

  const features = about.offer.features.map((feature, index) => ({
    ...feature,
    icon: FEATURE_ICONS[index] ?? FEATURE_ICONS[0],
  }));

  const team = about.team.members.map((member, index) => ({
    ...member,
    ...(TEAM_ASSETS[index] ?? TEAM_ASSETS[0]),
  }));

  return (
    <>
      <section className="section about-hero-section">
        <div className="nav-placeholder" />
        <div className="section-padding top-5 bottom-5">
          <div className="container">
            <div className="about_hero">
              <div className="home_hero-tagline-wr is-smaller">
                <div className="home_hero-tagline-line" />
                <div>{about.tagline}</div>
                <div className="home_hero-tagline-line is-2" />
              </div>
              <div className="spacer-small-16 is-mob-20" />
              <div className="about_hero-title-wr">
                <h1 className="heading-style-60 is-mob-32">{about.title}</h1>
              </div>
              <div className="spacer-small-16 is-mob-20" />
              <div className="max-width-820">
                <div className="text-color-light-grey">
                  <p className="text-size-small-14">{about.body}</p>
                </div>
              </div>
              <div className="spacer-large-40" />
              <div className="about_hero-btn-row">
                <GlowButton href="/contact-us">{about.cta}</GlowButton>
                <a href="#mission" className="button is-text">
                  <div className="button-text-wr">
                    <div>{about.readMore}</div>
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
            <div className="about_hero-video">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={ASSETS.heroVideoPoster}
                style={{ backgroundImage: `url("${ASSETS.heroVideoPoster}")` }}
              >
                <source src={ASSETS.heroVideoMp4} type="video/mp4" />
                <source src={ASSETS.heroVideoWebm} type="video/webm" />
              </video>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSETS.heroBg} loading="lazy" width={1728} alt="" className="about_hero-bg-img" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.heroBgMob}
              loading="lazy"
              width={1728}
              alt=""
              className="about_hero-bg-img-mob"
            />
          </div>
        </div>
      </section>

      <div className="home_sticky-box">
        <StickyNav links={aboutLinks} noBottomPadding />
        <div className="home_sections-wr">
          <section id="mission" className="section overflow-hidden about-mission-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="max-width-1060">
                    <div className="align-left">
                      <h2 className="heading-style-48">{about.mission.title}</h2>
                      <div className="spacer-medium-30" />
                      <div className="txt-2col-grid">
                        <div className="text-color-light-grey">
                          <p className="text-size-small-14">{about.mission.col1}</p>
                        </div>
                        <div className="text-color-light-grey">
                          <p className="text-size-small-14">{about.mission.col2}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacer-xlarge-60" />
                  <div className="home_logos-running-wr" aria-label={about.mission.logosAria}>
                    <div className="marquee is-logos">
                      <LogoTrack trackKey="a" />
                      <LogoTrack trackKey="b" />
                      <LogoTrack trackKey="c" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <KeyFacts showTagline={false} showButton={false} visibleOnLoad />

          <section id="location" className="section about-location-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="about_map-block">
                  <div className="about_map-img-wr" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ASSETS.geo} loading="lazy" alt="" className="about_geo-icon" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.map}
                      loading="lazy"
                      width={1420}
                      alt=""
                      className="about_map-img"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.mapAnim}
                      loading="lazy"
                      alt=""
                      className="about_map-img is-anim"
                    />
                  </div>
                  <div className="left-padding">
                    <div className="about_map-content">
                      <h2 className="heading-style-48">{about.location.title}</h2>
                      <div className="spacer-medium-30" />
                      <div className="text-color-light-grey">
                        <p className="text-size-small-14-rm">{about.location.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="offer" className="section bg-color-secondary about-offer-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="max-width-1060">
                    <div className="align-left">
                      <div className="about_features-title-wr">
                        <h2 className="heading-style-48">{about.offer.title}</h2>
                        <div className="text-color-grey">
                          <p className="text-size-small-14">{about.offer.intro}</p>
                        </div>
                      </div>
                      <div className="spacer-medium-32" />
                      <div className="about_features-grid">
                        {features.map((feature) => (
                          <div key={feature.title} className="about_features-item">
                            <div className="about_features-top">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={feature.icon}
                                loading="lazy"
                                alt=""
                                className="about_features-icon"
                              />
                              <div className="max-width-340">
                                <h3 className="text-size-large-21">{feature.title}</h3>
                              </div>
                            </div>
                            <div className="text-color-grey">
                              <p className="text-size-small-14">{feature.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="team" className="section about-team-section">
            <div className="section-padding top-5 bottom-5">
              <div className="container anim-appear-on-scroll is-visible">
                <div className="left-padding">
                  <div className="align-left">
                    <div className="about_team-block">
                      <div className="about_team-title-wr">
                        <h2 className="heading-style-48">{about.team.title}</h2>
                        <div className="spacer-medium-20" />
                        <div className="text-color-light-grey">
                          <p className="text-size-small-14">{about.team.intro}</p>
                        </div>
                      </div>
                      <div className="about_team-wr">
                        {team.map((member) => (
                          <a
                            key={member.name}
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about_team-item"
                          >
                            <div className="about_team-img-wr">
                              <div className="about_team-stroke-wr">
                                <div className="about_team-stroke-bg" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={member.img}
                                  loading="lazy"
                                  width={251}
                                  alt=""
                                  className="about_team-img"
                                  style={{ objectPosition: member.objectPosition }}
                                />
                                <div className="about_team-linkedin-img-wr">
                                  <div className="social-button">
                                    <div className="social-button-icon">
                                      <LinkedInIcon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="spacer-medium-10" />
                            <p className="text-size-large-21">{member.name}</p>
                            <div className="spacer-xxsmall-4" />
                            <div className="text-color-light-grey">
                              <p className="text-size-small-14-rm">{member.role}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-bg" aria-hidden="true">
              <div className="section-bg-bottom-img-wr is-on-top">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ASSETS.teamFx}
                  loading="lazy"
                  width={1180}
                  alt=""
                  className="section-bg-bottom-img is-on-top"
                />
              </div>
            </div>
          </section>

          {/* <Accreditations paddingClass="top-5 bottom-5" visibleOnLoad /> */}
        </div>
      </div>
    </>
  );
}
