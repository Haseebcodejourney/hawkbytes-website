import GlowButton from "@/components/GlowButton";
import "./KeyFacts.css";

const ASSETS = {
  bg: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2d8fd99e4e95a9923a2e5_Inner%20Container.avif",
  bgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dbd68978d1e4d3694f915e_Inner%20Container2.avif",
};

const FACTS = [
  {
    value: "50+",
    text: "AI and software products shipped across diverse industries worldwide",
  },
  {
    value: "3+",
    text: "years of active quantum computing research and applied experimentation",
  },
  {
    value: "120+",
    text: "successful web, mobile, and QA projects delivered for global clients",
  },
  {
    value: "100%",
    text: "client satisfaction — we don't close a project until you are delighted",
  },
];

export default function KeyFacts({
  showTagline = true,
  showButton = true,
  visibleOnLoad = false,
}: {
  showTagline?: boolean;
  showButton?: boolean;
  visibleOnLoad?: boolean;
}) {
  return (
    <section id="facts" className="section key-facts-section">
      <div className="section-padding top-160">
        <div
          className={`container anim-appear-on-scroll${visibleOnLoad ? " is-visible" : ""}`}
        >
          <div className="left-padding">
            <div className="txt-2col-grid is-with-sticky-title">
              <div className="home_about-sticky">
                <div className="align-left">
                  {showTagline ? (
                    <p className="tagline-text-blue-gradient">ABOUT US</p>
                  ) : null}
                  <div className="grey-text-gradient">
                    <h2 className="heading-style-48">
                      Key Facts about HawkBytes
                    </h2>
                  </div>
                  <div className="spacer-medium-20" />
                  <div className="text-color-light-grey">
                    <p className="text-size-small-14">
                      HawkBytes is a product-focused technology company with a global footprint. From our engineering hubs, we build AI systems, enterprise software, and quantum prototypes while serving clients across North America, Europe, the Middle East, and Asia.
                    </p>
                  </div>
                  <div className="spacer-medium-20" />
                  {showButton ? (
                    <GlowButton href="/about-us">READ MORE</GlowButton>
                  ) : null}
                </div>
              </div>

              <div className="home_about-info-wr">
                {FACTS.map((fact) => (
                  <div key={fact.value} className="home_about-info-item">
                    <div className="home_about-item-gradient">
                      <div className="heading-style-60">{fact.value}</div>
                    </div>
                    <div className="text-font-rm text-weight-medium">
                      <p className="text-size-small-14">{fact.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ASSETS.bg}
          loading="lazy"
          width={940}
          alt=""
          className="home_about-bg-img"
        />
        <div className="home_about-bg-mob-wr">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.bgMob}
            loading="lazy"
            width={940}
            alt=""
            className="home_about-bg-img is-mob"
          />
        </div>
      </div>
    </section>
  );
}
