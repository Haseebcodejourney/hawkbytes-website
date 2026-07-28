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
    href: "https://www.cybercrestcompliance.com/services/business-continuity-and-disaster-recovery",
    title: "Business Continuity and Disaster Recovery",
    text: "Prepare for and mitigate potential disruptions to operations with our customized BCP/DR plans to minimize downtime and data loss based on business impact and data criticality analysis.",
  },
  {
    href: "https://www.cybercrestcompliance.com/services/risk-assessments",
    title: "Information Security Risk Assessment",
    text: "Respond to the requirements of compliance frameworks and data privacy legislation with our risk assessment services designed to provide actionable recommendations on warding off cyber threats.",
  },
  {
    href: "https://www.cybercrestcompliance.com/services/vulnerability-scanning",
    title: "Vulnerability Scanning",
    text: "Elevate your vulnerability management, detection and mitigation capabilities with our vulnerability scanning to reveal, prioritize and fix uncovered vulnerabilities before they cause any disruption.",
  },
  {
    href: "https://www.cybercrestcompliance.com/services/cloud-security",
    title: "Cloud Security",
    text: "Detect vulnerabilities in your cloud infrastructure, applications and data to protect critical assets, stay compliant and improve your security posture with our cloud-specific expert guidance.",
  },
  {
    href: "https://www.cybercrestcompliance.com/services/penetration-testing",
    title: "Penetration Testing Services",
    text: "Validate your security controls and protect against cyber security breaches with our comprehensive penetration testing services.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="section-padding top-0">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="txt-2col-grid is-align-bottom">
              <div className="align-left">
                <p className="tagline-text-blue-gradient">
                  TECH-DRIVEN SECURITY SOLUTIONS
                </p>
                <h2 className="heading-style-48">
                  Additional Technology-Enabled Compliance Services
                </h2>
              </div>
              <div className="text-color-light-grey">
                <p className="text-size-small-14">
                  CyberCrest makes the most of today’s technological landscape to
                  support your compliance journey with state-of-the-art tools and
                  technology-driven services. Our tools are instrumental in
                  identifying your security and compliance gaps and preparing you
                  for advanced cyber risk management and response.
                </p>
              </div>
            </div>

            <div className="spacer-xlarge-60" />

            <div className="home_solutions-wr">
              {SOLUTIONS.map((item) => (
                <a
                  key={item.href}
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
