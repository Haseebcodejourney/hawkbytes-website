"use client";

import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Services.css";

const SERVICE_ASSETS = [
  {
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b93d6cc8917c806c220_Service%20Image1.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8543cc9dfe57cef9a_Service%20Image%20mob-1.avif",
    decor:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf30f2bf050a9959f823fe_Service%20Icon%20Container.avif",
    decorClass: "home_services-card-bg-img-1",
    big: false,
    contentMax: false,
  },
  {
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b938ec65013603446c3_Service%20Image2.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8af8b749c0c95acc0_Service%20Image%20mob-2.avif",
    big: true,
    contentMax: false,
    textWrap: true,
  },
  {
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b93213f103ef3c806e8_Service%20Image3.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8c24388599247f086_Service%20Image%20mob-3.avif",
    big: true,
    contentMax: true,
    textWrap: true,
  },
  {
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b938ec65013603446bf_Service%20Image4.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda83e08862df5209870_Service%20Image%20mob-4.avif",
    decor:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf31cea1cc5910875af931_effects.avif",
    decorClass: "home_services-card-bg-img-2",
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
                        className="home_services-card-bg-img"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.bgMob}
                        loading="lazy"
                        alt={service.bgMobAlt}
                        className="home_services-card-bg-img is-mob"
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

                    {service.decor ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={service.decor}
                        loading="lazy"
                        alt={service.decorAlt}
                        className={service.decorClass}
                      />
                    ) : null}
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
