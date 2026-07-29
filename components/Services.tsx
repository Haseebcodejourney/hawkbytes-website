import "./Services.css";

const SERVICES = [
  {
    title: "AI Products & Intelligent Systems",
    text: "We design and build production-ready AI products — from machine learning models and NLP systems to computer vision and generative AI platforms. Our research-backed approach ensures your AI solution is reliable, scalable, and delivers measurable business value.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b93d6cc8917c806c220_Service%20Image1.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8543cc9dfe57cef9a_Service%20Image%20mob-1.avif",
    bgAlt: "Abstract AI neural network visualization on a dark background.",
    bgMobAlt: "Glowing neural network nodes on a dark blue background.",
    decor:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf30f2bf050a9959f823fe_Service%20Icon%20Container.avif",
    decorClass: "home_services-card-bg-img-1",
    decorAlt: "Grid pattern overlay on a light blue background.",
    big: false,
    contentMax: false,
  },
  {
    title: "Software Engineering & Product Development",
    text: "From concept to launch, our engineers craft high-performance software products using modern stacks. Whether it's a SaaS platform, enterprise system, or developer tool — we architect for scale, maintainability, and exceptional user experience.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b938ec65013603446c3_Service%20Image2.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8af8b749c0c95acc0_Service%20Image%20mob-2.avif",
    bgAlt: "Dark background with abstract software code and gears.",
    bgMobAlt: "Abstract dark metallic software engineering visualization.",
    big: true,
    contentMax: false,
    textWrap: true,
  },
  {
    title: "Quantum Computing Research & Applications",
    text: "HawkBytes is at the frontier of quantum computing — conducting applied research, developing quantum algorithms, and building hybrid classical-quantum systems. We help forward-thinking organizations understand, prototype, and deploy quantum-ready solutions.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b93213f103ef3c806e8_Service%20Image3.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8c24388599247f086_Service%20Image%20mob-3.avif",
    bgAlt: "Quantum computing visualization on a dark blue digital background.",
    bgMobAlt: "Dark blue gradient background with quantum circuit pattern.",
    big: true,
    contentMax: true,
    textWrap: true,
  },
  {
    title: "Web, Mobile & QA Services",
    text: "We deliver pixel-perfect web applications, cross-platform mobile apps, and comprehensive QA testing. Our full-service delivery model covers everything from UI/UX design and React/Next.js development to automated testing, CI/CD pipelines, and ongoing maintenance.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b938ec65013603446bf_Service%20Image4.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda83e08862df5209870_Service%20Image%20mob-4.avif",
    bgAlt: "Mobile and web development visualization on dark background.",
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
                  How HawkBytes Drives Innovation for You
                </h2>
                <div className="text-color-grey">
                  <p className="text-size-small-14">
                    Whether you need a cutting-edge AI product, a robust software platform, quantum computing expertise, or reliable digital services — HawkBytes brings research-driven thinking and engineering excellence to every engagement.
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
