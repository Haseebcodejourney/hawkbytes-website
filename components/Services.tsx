import "./Services.css";

const SERVICES = [
  {
    title: "Compliance Attestations and Certifications",
    text: "Receive timely and streamlined information security attestations and certifications across all major regulations and standards to demonstrate your security posture to regulatory bodies, customers and stakeholders.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b93d6cc8917c806c220_Service%20Image1.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8543cc9dfe57cef9a_Service%20Image%20mob-1.avif",
    bgAlt:
      "Spotlight shining on a circular AICPA SOC 2 certification badge on a dark background.",
    bgMobAlt:
      "A metallic medallion with the text 'AICPA SOC 2' illuminated by a soft spotlight on a dark blue background.",
    decor:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf30f2bf050a9959f823fe_Service%20Icon%20Container.avif",
    decorClass: "home_services-card-bg-img-1",
    decorAlt:
      "Light blue background with a pattern of small white squares arranged in a grid.",
    big: false,
    contentMax: false,
  },
  {
    title: "Hands-On Remediation Assistance",
    text: "Leave no security gap unpatched with our hands-on compliance issue remediation support that follows a thorough security risk assessment. This helps you prepare for a compliance audit and meet the requirements with confidence.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b938ec65013603446c3_Service%20Image2.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8af8b749c0c95acc0_Service%20Image%20mob-2.avif",
    bgAlt:
      "Dark background with partial black gears on left and right edges and subtle dot pattern in the center top.",
    bgMobAlt:
      "Three dark metallic gears on the lower left corner with a black to dark gray gradient background and dotted pattern in the top right corner.",
    big: true,
    contentMax: false,
    textWrap: true,
  },
  {
    title:
      "Compliance by Design — Prepare Environments for Compliance Success",
    text: "Benefit from our application of industry-leading technology and expert supervision to set up audit-ready environments designed to pass rigorous compliance assessments. This gives your organization peace of mind and frees management to focus on your core business activities.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b93213f103ef3c806e8_Service%20Image3.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda8c24388599247f086_Service%20Image%20mob-3.avif",
    bgAlt:
      "Silver shield emblem with stylized 'H' on a dark blue digital interface background.",
    bgMobAlt:
      "Dark blue gradient background with a pattern of small squares in the top right corner.",
    big: true,
    contentMax: true,
    textWrap: true,
  },
  {
    title: "Ongoing and Effective Compliance Maintenance",
    text: "Get professional support in continuing to meet regulatory requirements. CyberCrest can assist your organization on an ongoing basis.",
    bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf1b938ec65013603446bf_Service%20Image4.avif",
    bgMob:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dadda83e08862df5209870_Service%20Image%20mob-4.avif",
    bgAlt:
      "Calendar icon with a checkmark in the center against a brown and black gradient background with concentric circles and dotted pattern.",
    bgMobAlt:
      "Calendar icon with a checkmark in the center on a dark circular background with orange gradient and dotted pattern.",
    decor:
      "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cf31cea1cc5910875af931_effects.avif",
    decorClass: "home_services-card-bg-img-2",
    decorAlt:
      "Close-up detail of an abstract orange and red textured pattern with small white square grid overlay.",
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
                  How CyberCrest Helps Organizations
                </h2>
                <div className="text-color-grey">
                  <p className="text-size-small-14">
                    Whether you’re prompted to pass your compliance audit by
                    stakeholders, clients or regulatory bodies, or looking to
                    strengthen your security posture proactively, CyberCrest is
                    here to provide cybersecurity compliance consulting services
                    throughout the process.
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
