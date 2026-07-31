import "./Attestations.css";

const ARROW_ICON =
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d0103df322d59181373f53_arrow-c.svg";

const CHEVRON = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8.1083 14.5302L7.05005 13.4697L11.0168 9.49998L7.05005 5.53023L8.1113 4.46973L12.075 8.43948C12.3562 8.72077 12.5142 9.10223 12.5142 9.49998C12.5142 9.89772 12.3562 10.2792 12.075 10.5605L8.1083 14.5302Z"
      fill="currentColor"
    />
  </svg>
);

const CERTS = [
  {
    name: "Quantum Research",
    text: "HawkBytes researches quantum algorithms, simulations, and hybrid classical-quantum systems that move ideas toward real capability.",
    href: "/services/research",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cff193fe81907282c17e19_Logo-1.avif",
    logoAlt: "Quantum research mark.",
  },
  {
    name: "AI Products",
    text: "Our teams build intelligent software — ML models, generative AI, and AI-assisted platforms designed for real users.",
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd7ed98ebf2dd2121c7524_Logo%20Container-3-new.avif",
    logoAlt: "AI products mark.",
  },
  {
    name: "Machine Learning",
    text: "HawkBytes helps organizations design, train, and deploy machine learning systems that deliver measurable outcomes.",
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e2f45056d1d00ea92df_Logo-3.avif",
    logoAlt: "Machine learning mark.",
  },
  {
    name: "Generative AI",
    text: "HawkBytes builds generative AI products and integrations that turn research into practical product features.",
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e229614013a057c85d3_Logo-4.avif",
    logoAlt: "Generative AI mark.",
  },
  {
    name: "Software Platforms",
    text: "HawkBytes engineers SaaS and enterprise platforms with modern architecture, strong UX, and room to scale.",
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e22c48af42dc2383423_Logo-5.avif",
    logoAlt: "Software platforms mark.",
  },
  {
    name: "Product Engineering",
    text: "We evaluate product maturity and help teams ship reliable software from prototype to production.",
    href: "/#services",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02eb9cdabdf85580aadd9_Logo-6.avif",
    logoAlt: "Product engineering mark.",
  },
  {
    name: "Web Development",
    text: "HawkBytes builds fast, modern websites and web applications for product and growth teams.",
    href: "/#solutions",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e229a276642ebe302c2_Logo-7.avif",
    logoAlt: "Web development mark.",
  },
  {
    name: "Mobile Apps",
    text: "As a build partner, HawkBytes designs and ships iOS and Android apps with clear product thinking.",
    href: "/#solutions",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e21066d5ae009806a20_Logo-8.avif",
    logoAlt: "Mobile apps mark.",
  },
  {
    name: "QA & Testing",
    text: "We help teams protect releases with automated testing, quality engineering, and reliable delivery practices.",
    href: "/#solutions",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e21b391b4bb70199b12_Logo-9.avif",
    logoAlt: "QA and testing mark.",
  },
  {
    name: "UI/UX Design",
    text: "HawkBytes creates product-focused design systems that make advanced technology feel simple.",
    href: "/#solutions",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e22308cedf735da29be_Logo-10.avif",
    logoAlt: "UI UX design mark.",
  },
  {
    name: "DevOps & Cloud",
    text: "HawkBytes sets up CI/CD and cloud delivery so research prototypes and products reach production cleanly.",
    href: "/#solutions",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e228d1c45c4ba1d6fd8_Logo-11.avif",
    logoAlt: "DevOps and cloud mark.",
  },
  {
    name: "Applied Research",
    text: "HawkBytes connects theory to product — prototypes, experiments, and discovery that feed what we ship next.",
    href: "/#methodology",
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d02e222b2681be091dec9c_Logo-12.avif",
    logoAlt: "Applied research mark.",
  },
];

export default function Attestations() {
  return (
    <section id="attestations" className="section attestations-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="align-left">
              <div className="home_cert-grid">
                <div className="home_cert-title-wr">
                  <p className="tagline-text-blue-gradient">
                    ATTESTATIONS &amp; CERTIFICATIONS
                  </p>
                  <h2 className="heading-style-32">
                    Facilitating Innovation Across Quantum Research, AI Products
                    &amp; Software Delivery
                  </h2>
                </div>

                {CERTS.map((cert) => (
                  <div key={cert.name} className="home_cert-card">
                    <div className="home_cert-card-stroke">
                      <div className="home_cert-card-gradient" />
                    </div>
                    <div className="home_cert-card-content">
                      <div className="home_cert-card-content-top">
                        <p>{cert.name}</p>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={ARROW_ICON}
                          loading="lazy"
                          alt=""
                          className="home_cert-card-content-top-icon"
                        />
                      </div>

                      <div className="home_cert-card-content-bottom">
                        <div className="spacer-xxsmall-4" />
                        <p className="paragraph">{cert.text}</p>
                        <div className="home_cert-card-content-btn">
                          <div>learn more</div>
                          <div className="btn-text-icon">{CHEVRON}</div>
                          <a
                            href={cert.href}
                            className="home_cert-card-link"
                            aria-label={`Learn more about ${cert.name}`}
                          />
                        </div>
                      </div>

                      <div className="home_cert-card-content-bg" />

                      <div className="home_cert-card-content-logo-wr">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cert.logo}
                          loading="lazy"
                          width={100}
                          alt={cert.logoAlt}
                          className="home_cert-card-content-logo-img"
                        />
                      </div>
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
