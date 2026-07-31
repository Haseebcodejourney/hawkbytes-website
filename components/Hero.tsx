"use client";

import { useEffect, useRef } from "react";
import GlowButton from "@/components/GlowButton";
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
  {
    src: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced9338d6b38012a349c4d_Logo%D0%A11.avif",
    width: 80,
    alt: "AI Research",
  },
  {
    src: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced933fdbc46ec87b75318_Logo%D0%A12.avif",
    width: 80,
    alt: "Quantum Computing",
  },
  {
    src: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd7e11ba5f91e7e8f7a1b0_Logo%20CMMC.avif",
    width: 80,
    alt: "Software Products",
  },
  {
    src: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced933f62e30bc7a280290_Logo%D0%A14.avif",
    width: 80,
    alt: "Web Development",
  },
  {
    src: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced933257e59d2dad41c9f_Logo%D0%A15.avif",
    width: 80,
    alt: "Mobile Apps",
  },
  {
    src: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced93378e4bbab072b6640_Logo%D0%A16.avif",
    width: 80,
    alt: "QA Testing",
  },
  {
    src: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67ced933432cd53fdbf6ec9d_Logo%D0%A17.avif",
    width: 90,
    alt: "Cloud Solutions",
  },
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
          key={`${trackKey}-${logo.alt}`}
          width={logo.width}
          height={80}
          loading="lazy"
          alt={trackKey === "a" ? logo.alt : ""}
          src={logo.src}
          className="marquee-logo-img-row"
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="section home-hero-section">
      <div className="nav-placeholder" />

      <div className="section-padding top-5 bottom-5">
        <div className="hero-container">
          <div className="home_hero">
            <div className="home_hero-content">
              <div className="home_hero-tagline-wr">
                <div className="home_hero-tagline-line" />
                <div>PRODUCTS · RESEARCH · QUANTUM COMPUTING</div>
                <div className="home_hero-tagline-line is-2" />
              </div>

              <div className="spacer-small-16 is-mob-20" />

              <h1 className="heading-style-60">
                Researching Quantum. Building AI Products.
              </h1>

              <div className="spacer-small-16 is-mob-20" />

              <div className="max-width-580">
                <div className="text-color-light-grey">
                  <p className="text-size-regular-16">
                    HawkBytes is a product and research company. Our core focus
                    is quantum computing research and building AI-powered
                    software products — while also delivering websites, apps,
                    and engineering services when you need a trusted build
                    partner.
                  </p>
                </div>
              </div>

              <div className="spacer-large-40" />

              <GlowButton href="/contact-us">
                Talk to an expert
              </GlowButton>

              <div className="spacer-large-40" />

              <div
                className="home_logos-running-wr"
                aria-label="HawkBytes focus areas"
              >
                <div className="marquee is-logos">
                  <LogoTrack trackKey="a" />
                  <LogoTrack trackKey="b" />
                  <LogoTrack trackKey="c" />
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
