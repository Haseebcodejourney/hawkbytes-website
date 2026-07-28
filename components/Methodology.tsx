"use client";

import { useEffect, useRef } from "react";
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

const STEPS = [
  {
    className: "home_approach-item",
    numberClass: "home_approach-number",
    number: "01",
    title: "Gap Assessment",
    text: "We conduct a gap assessment of your environment and develop a path towards compliance",
  },
  {
    className: "home_approach-item is-2",
    numberClass: "home_approach-number is-2",
    number: "02",
    title: "Remediation Support",
    text: "We support gap remediation, assist in developing documentation and implementing controls to help achieve a state of compliance.",
  },
  {
    className: "home_approach-item is-4",
    numberClass: "home_approach-number is-4",
    number: "04",
    title: "Certification",
    text: "We conduct audit and provide the attestation report.",
  },
  {
    className: "home_approach-item is-3",
    numberClass: "home_approach-number is-3",
    number: "03",
    title: "Audit Period",
    text: "You demonstrate that the designed controls are operating effectively over time.",
  },
];

function shortestDelta(from: number, to: number) {
  let delta = to - from;
  while (delta > 180) delta -= 360;
  while (delta < -180) delta += 360;
  return delta;
}

export default function Methodology() {
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
      <div className="section-padding top-0">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="home_approach">
              <div className="heading-align-center">
                <p className="tagline-text-blue-gradient">OUR APPROACH</p>
                <h2 className="heading-style-48">CyberCrest’s Methodology</h2>
                <div className="spacer-medium-30" />
                <div className="max-width-520">
                  <p className="text-size-small-14-rm">
                    We’ve developed a clear 4-step compliance methodology to take
                    you all the way to a successful compliance attestation.
                  </p>
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
                  {STEPS.map((step) => (
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
