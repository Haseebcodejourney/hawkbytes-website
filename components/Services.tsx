import "./Services.css";

const SERVICES = [
  {
    title: "AI Products & Intelligent Systems",
    text: "We design and build production-ready AI products — from machine learning models and NLP systems to generative AI platforms. Research-backed, scalable, and built for real business value.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b93d6cc8917c806c220_Service%20Image1.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8543cc9dfe57cef9a_Service%20Image%20mob-1.avif",
    bgAlt: "AI product visualization on a dark background.",
    bgMobAlt: "Glowing neural network nodes on a dark blue background.",
    decor:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf30f2bf050a9959f823fe_Service%20Icon%20Container.avif",
    decorClass: "home_services-card-bg-img-1",
    decorAlt: "Light blue grid pattern overlay.",
    big: false,
    contentMax: false,
  },
  {
    title: "Quantum Computing Research",
    text: "Our primary focus. HawkBytes researches quantum algorithms, hybrid classical-quantum systems, and applied quantum prototypes — moving frontier research toward usable technology.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b938ec65013603446c3_Service%20Image2.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8af8b749c0c95acc0_Service%20Image%20mob-2.avif",
    bgAlt: "Quantum research visualization on a dark background.",
    bgMobAlt: "Abstract dark metallic research visualization.",
    big: true,
    contentMax: false,
    textWrap: true,
  },
  {
    title: "Software Products & Platforms",
    text: "From SaaS platforms to enterprise tools, we craft high-performance software products using modern stacks — architected for scale, maintainability, and exceptional user experience.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b93213f103ef3c806e8_Service%20Image3.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8c24388599247f086_Service%20Image%20mob-3.avif",
    bgAlt: "Software product visualization on a dark blue background.",
    bgMobAlt: "Dark blue gradient background with grid pattern.",
    big: true,
    contentMax: true,
    textWrap: true,
  },
  {
    title: "Web, Mobile & QA Services",
    text: "We deliver websites, cross-platform mobile apps, and comprehensive QA. From UI/UX and Next.js builds to automated testing and CI/CD — services that support our product mission.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b938ec65013603446bf_Service%20Image4.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda83e08862df5209870_Service%20Image%20mob-4.avif",
    bgAlt: "Web and mobile development visualization.",
    bgMobAlt: "Mobile app screens on dark background with gradient.",
    decor:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf31cea1cc5910875af931_effects.avif",
    decorClass: "home_services-card-bg-img-2",
    decorAlt: "Abstract orange and red textured pattern with grid overlay.",
    big: false,
    contentMax: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-color-secondary services-section">
      <div className="section-padding top-0 bottom-120">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="align-left">
              <p className="tagline-text-blue-gradient is-on-white">
                OUR SERVICES
              </p>

              <div className="txt-2col-grid">
                <h2 className="heading-style-48">
                  How HawkBytes Helps Organizations
                </h2>
                <div className="text-color-grey">
                  <p className="text-size-small-14">
                    Whether you need quantum research collaboration, an AI
                    product, a software platform, or reliable digital delivery —
                    HawkBytes brings research-driven thinking and engineering
                    excellence to every engagement.
                  </p>
                </div>
              </div>

              <div className="spacer-medium-32" />

              <div className="home_services-grid">
                {SERVICES.map((service) => (
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
