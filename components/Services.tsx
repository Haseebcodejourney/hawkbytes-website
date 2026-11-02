"use client";

import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Services.css";

const SERVICE_ASSETS = [
  {
    bg: "/services/ai.jpg",
    bgLight: "/services/ai-light.jpg",
    big: false,
    contentMax: false,
  },
  {
    bg: "/services/quantum.jpg",
    bgLight: "/services/quantum-light.jpg",
    big: true,
    contentMax: false,
    textWrap: true,
  },
  {
    bg: "/services/software.jpg",
    bgLight: "/services/software-light.jpg",
    big: true,
    contentMax: true,
    textWrap: true,
  },
  {
    bg: "/services/web-mobile-qa.jpg",
    bgLight: "/services/web-mobile-qa-light.jpg",
    big: false,
    contentMax: false,
  },
];

export default function Services() {
  const t = useTranslations();

  const services = t.services.items.map((item, index) => ({
    ...item,
    ...SERVICE_ASSETS[index],
  }));

  return (
    <section id="services" className="section bg-color-secondary services-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="align-left">
              <p className="tagline-text-blue-gradient is-on-white">
                {t.services.tagline}
              </p>

              <div className="txt-2col-grid">
                <h2 className="heading-style-48">{t.services.title}</h2>
                <div className="text-color-grey">
                  <p className="text-size-small-14">{t.services.intro}</p>
                </div>
              </div>

              <div className="spacer-medium-32" />

              <div className="home_services-grid">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className={`home_services-card${service.big ? " is-big" : ""}`}
                  >
                    <div className="home_services-card-bg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.bg}
                        loading="lazy"
                        alt={service.bgAlt}
                        className="home_services-card-bg-img is-dark"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.bgLight}
                        loading="lazy"
                        alt={service.bgAlt}
                        className="home_services-card-bg-img is-light"
                      />
                    </div>

                    <div
                      className={`home_services-card-content${
                        service.contentMax ? " is-max-420" : ""
                      }`}
                    >
                      <h3 className="heading-style-21 is-rm">{service.title}</h3>
                      {service.textWrap ? (
                        <div className="home_services-card2-txt-wr">
                          <div className="text-color-light-grey">
                            <p className="text-size-small-14">{service.text}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-color-light-grey">
                          <p className="text-size-small-14">{service.text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
