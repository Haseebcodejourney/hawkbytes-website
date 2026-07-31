import "./Solutions.css";

const ARROW = (
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

const SOLUTIONS = [
  {
    href: "/contact-us",
    title: "Website Development",
    text: "Modern, fast websites and web apps — from marketing sites to complex product frontends — built with clean design and solid engineering.",
  },
  {
    href: "/contact-us",
    title: "Mobile App Development",
    text: "iOS and Android applications designed for performance and usability, with clear product thinking from day one.",
  },
  {
    href: "/contact-us",
    title: "QA & Automated Testing",
    text: "Manual and automated quality engineering that protects releases and keeps your product reliable as it grows.",
  },
  {
    href: "/contact-us",
    title: "UI/UX Design",
    text: "Product-focused design systems and interfaces that make advanced technology feel simple for users.",
  },
  {
    href: "/contact-us",
    title: "DevOps & Cloud Delivery",
    text: "CI/CD, cloud architecture, and deployment pipelines so research prototypes and products reach production cleanly.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="txt-2col-grid is-align-bottom">
              <div className="align-left">
                <p className="tagline-text-blue-gradient">
                  TECH-DRIVEN SECURITY SOLUTIONS
                </p>
                <h2 className="heading-style-48">
                  Additional Technology-Enabled Engineering Services
                </h2>
              </div>
              <div className="text-color-light-grey">
                <p className="text-size-small-14">
                  HawkBytes uses modern tools and delivery practices to support
                  your product journey. These services help you ship websites,
                  apps, and platforms alongside our core research and AI work.
                </p>
              </div>
            </div>

            <div className="spacer-xlarge-60" />

            <div className="home_solutions-wr">
              {SOLUTIONS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="home_solutions-card"
                >
                  <div className="home_solutions-vertical-gradient" />
                  <div className="home_solutions-card-content">
                    <h3 className="heading-style-21">{item.title}</h3>
                    <div className="text-color-light-grey">
                      <p className="text-size-small-14">{item.text}</p>
                    </div>
                    <div className="home_solutions-card-btn-wr">
                      <div className="button-text">
                        <div>learn more</div>
                        <div className="btn-text-icon">{ARROW}</div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
