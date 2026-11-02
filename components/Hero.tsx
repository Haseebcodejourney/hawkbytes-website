"use client";

import { useEffect, useRef } from "react";
import GlowButton from "@/components/GlowButton";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Hero.css";

const ASSETS = {
  frameDesktop:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cedbf13a28462cd45fdff0_C-Frame.svg",
  frameMobile:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dc28c077abf78bbedfd5a8_Frame-mob-2.svg",
  bottomFx:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ebfdefd079daf6ba5c78c2_bottom-effects-2.avif",
  circle:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67f635806136378181058a6e_dev.svg",
  poster:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d2c2b3ceaf885fdd8e3ac9_0001-0180-ezgifcom-video-speed-poster-00001.jpg",
  videoMp4:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d2c2b3ceaf885fdd8e3ac9_0001-0180-ezgifcom-video-speed-transcode.mp4",
  videoWebm:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d2c2b3ceaf885fdd8e3ac9_0001-0180-ezgifcom-video-speed-transcode.webm",
};

const TRUST_LOGOS = [
  { src: "/logos/evefrine.svg", name: "Evefrine" },
  { src: "/logos/hawklens.svg", name: "HawkLens" },
  { src: "/logos/atondafleet.svg", name: "AtondaFleet" },
  { src: "/logos/leadhunter.svg", name: "LeadHunter" },
  { src: "/logos/pixenect.svg", name: "Pixenect" },
];

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    const play = el.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => {});
    }
  }, []);

  return (
    <div className="home_hero-video-wr">
      <div className="home_hero-video">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={ASSETS.poster}
          style={{ backgroundImage: `url("${ASSETS.poster}")` }}
        >
          <source src={ASSETS.videoMp4} type="video/mp4" />
          <source src={ASSETS.videoWebm} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

function LogoTrack({ trackKey }: { trackKey: string }) {
  return (
    <div
      className="marquee-content-logos logo-scroll-left"
      aria-hidden={trackKey !== "a"}
    >
      {TRUST_LOGOS.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${trackKey}-${logo.src}`}
          width={80}
          height={80}
          loading="lazy"
          alt={trackKey === "a" ? logo.name : ""}
          src={logo.src}
          className="marquee-logo-img-row"
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="section home-hero-section">
      <div className="nav-placeholder" />

      <div className="section-padding top-5 bottom-5">
        <div className="hero-container">
          <div className="home_hero">
            <div className="home_hero-content">
              <div className="home_hero-tagline-wr">
                <div className="home_hero-tagline-line" />
                <div>{t.hero.tagline}</div>
                <div className="home_hero-tagline-line is-2" />
              </div>

              <div className="spacer-small-16 is-mob-20" />

              <h1 className="heading-style-60">{t.hero.title}</h1>

              <div className="spacer-small-16 is-mob-20" />

              <div className="max-width-580">
                <div className="text-color-light-grey">
                  <p className="text-size-regular-16">{t.hero.body}</p>
                </div>
              </div>

              <div className="spacer-large-40" />

              <GlowButton href="/contact-us">{t.hero.cta}</GlowButton>

              <div className="spacer-large-40" />

              <div
                className="home_logos-running-wr"
                aria-label={t.hero.logosAria}
              >
                <div className="marquee is-logos">
                  <LogoTrack trackKey="a" />
                  <LogoTrack trackKey="b" />
                  <LogoTrack trackKey="c" />
                  <LogoTrack trackKey="d" />
                </div>
              </div>
            </div>

            {/* Video + ring share one center so they never drift apart */}
            <div className="home_hero-lottie-wr" aria-hidden="true">
              <div className="home_hero-lottie-absolute">
                <div className="home_hero-orbit">
                  <HeroVideo />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ASSETS.circle}
                    loading="eager"
                    alt=""
                    className="home_hero-circle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-bg" aria-hidden="true">
        <div className="home_hero-media-wr">
          <div className="hide-on-desktop">
            <div className="home_hero-bg-img-wr">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.frameMobile}
                loading="eager"
                alt=""
                className="home_hero-bg-img-mob"
              />
              <div className="home_hero-bg-gradient-mob" />
            </div>
          </div>

          <div className="hide-on-mobile">
            <div className="container is-for-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.frameDesktop}
                loading="eager"
                alt=""
                className="home_hero-bg-img"
              />
            </div>
          </div>
        </div>

        <div className="section-bg-bottom-img-wr">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.bottomFx}
            loading="lazy"
            width={1499}
            alt=""
            className="section-bg-bottom-img"
          />
        </div>
      </div>
    </section>
  );
}
