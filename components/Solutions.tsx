"use client";

import { useTranslations } from "@/components/i18n/LanguageProvider";
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

const SOLUTION_HREFS = [
  "/contact-us",
  "/contact-us",
  "/contact-us",
  "/contact-us",
  "/contact-us",
];

export default function Solutions() {
  const t = useTranslations();

  const solutions = t.solutions.items.map((item, index) => ({
    ...item,
    href: SOLUTION_HREFS[index] ?? "/contact-us",
  }));

  return (
    <section id="solutions" className="section solutions-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="txt-2col-grid is-align-bottom">
              <div className="align-left">
                <p className="tagline-text-blue-gradient">{t.solutions.tagline}</p>
                <h2 className="heading-style-48">{t.solutions.title}</h2>
              </div>
              <div className="text-color-light-grey">
                <p className="text-size-small-14">{t.solutions.intro}</p>
              </div>
            </div>

            <div className="spacer-xlarge-60" />

            <div className="home_solutions-wr">
              {solutions.map((item) => (
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
                        <div>{t.solutions.learnMore}</div>
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
