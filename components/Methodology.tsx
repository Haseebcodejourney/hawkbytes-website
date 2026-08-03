"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Methodology.css";

const ASSETS = {
  poster:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d19929ce302806a82b5117_testvideo8-ezgifcom-video-to-mp4-converter-poster-00001.jpg",
  videoMp4:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d19929ce302806a82b5117_testvideo8-ezgifcom-video-to-mp4-converter-transcode.mp4",
  videoWebm:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d19929ce302806a82b5117_testvideo8-ezgifcom-video-to-mp4-converter-transcode.webm",
  logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d7cc25194b9b8e06691845_approach-logo.avif",
  circle:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d19a816f9c577b5c49870c_Central%20Container.svg",
};

const STEP_LAYOUT = [
  { className: "home_approach-item", numberClass: "home_approach-number", number: "01" },
  { className: "home_approach-item is-2", numberClass: "home_approach-number is-2", number: "02" },
  { className: "home_approach-item is-4", numberClass: "home_approach-number is-4", number: "04" },
  { className: "home_approach-item is-3", numberClass: "home_approach-number is-3", number: "03" },
];

function shortestDelta(from: number, to: number) {
  let delta = to - from;
  while (delta > 180) delta -= 360;
  while (delta < -180) delta += 360;
  return delta;
}

export default function Methodology({
  title: titleProp,
  tagline: taglineProp,
  description: descriptionProp,
}: {
  title?: string;
  tagline?: string;
  description?: string;
}) {
  const t = useTranslations();
  const title = titleProp ?? t.methodology.title;
  const tagline = taglineProp ?? t.methodology.tagline;
  const description = descriptionProp ?? t.methodology.description;

  const steps = STEP_LAYOUT.map((layout) => {
    const stepText = t.methodology.steps.find((s) => s.number === layout.number);
    return {
      ...layout,
      title: stepText?.title ?? "",
      text: stepText?.text ?? "",
    };
  });

  const circleRef = useRef<HTMLImageElement>(null);
  const targetAngle = useRef(0);
  const currentAngle = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (event: MouseEvent) => {
      const circle = circleRef.current;
      if (!circle) return;

      const { clientX, clientY } = event;
      const { x, y, width, height } = circle.getBoundingClientRect();
      const angle = Math.atan2(clientY - (y + height / 2), clientX - (x + width / 2));
      targetAngle.current = (angle * 180) / Math.PI + 90;
    };

    const tick = () => {
      const circle = circleRef.current;
      if (circle) {
        const delta = shortestDelta(currentAngle.current, targetAngle.current);
        currentAngle.current += delta * 0.08;
        circle.style.transform = `rotate(${currentAngle.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="methodology" className="section methodology-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="home_approach">
              <div className="heading-align-center">
                <p className="tagline-text-blue-gradient">{tagline}</p>
                <h2 className="heading-style-48">{title}</h2>
                <div className="spacer-medium-30" />
                <div className="max-width-520">
                  <p className="text-size-small-14-rm">{description}</p>
                </div>
              </div>

              <div className="spacer-medium-32" />

              <div className="home_approach-circle">
                <div className="home_approach-media-wr">
                  <div className="home_approach-video">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={ASSETS.poster}
                      style={{
                        backgroundImage: `url("${ASSETS.poster}")`,
                      }}
                    >
                      <source src={ASSETS.videoMp4} type="video/mp4" />
                      <source src={ASSETS.videoWebm} type="video/webm" />
                    </video>
                  </div>

                  <div className="home_approach-logo-wr">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.logo}
                      loading="lazy"
                      width={70}
                      alt=""
                      className="home_approach-logo-img"
                    />
                  </div>

                  <div className="home_approach-img-wr">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      ref={circleRef}
                      src={ASSETS.circle}
                      loading="lazy"
                      alt=""
                      className="circle"
                    />
                  </div>
                </div>

                <div className="home_approach-content-wr">
                  {steps.map((step) => (
                    <div key={step.number} className={step.className}>
                      <div className="home_approach-item-txt-wr">
                        <p className="home_approach-item-title">{step.title}</p>
                        <div className="text-color-light-grey home_approach-item-desc">
                          <p className="text-size-small-14">{step.text}</p>
                        </div>
                      </div>
                      <div className={step.numberClass}>{step.number}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
