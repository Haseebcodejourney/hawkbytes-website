import "./WhyUs.css";

const FEATURES = [
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04d9dc22d47a4a569f9d0_Feature%20Icon-1.svg",
    title: "Quantum-First Research",
    text: "Quantum computing research sits at the center of HawkBytes. We invest in algorithms, hybrid systems, and applied experiments — not buzzwords — so our product roadmap stays ahead of the curve.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04e9cc9cabf34590aba5a_Feature%20Icon-2.svg",
    title: "Products Over Projects",
    text: "We prioritize lasting products and research outcomes — not one-off tickets. Every engagement is designed to create capability, IP, and long-term advantage.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac6b739fc452077b3b_Feature%20Icon-3.svg",
    title: "AI Product Craft",
    text: "Dedicated engineers and researchers ship machine learning, generative AI, and intelligent software — turning research into products people actually use.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac714c789fba13eaf7_Feature%20Icon-4.svg",
    title: "Full Delivery Capability",
    text: "When you need websites, apps, QA, or DevOps, the same team that researches and builds products can also ship — cleanly and with ownership.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eacfc9e84f29571a53c_Feature%20Icon-5.svg",
    title: "Senior Engineering Talent",
    text: "Every project is led by senior engineers and researchers. Rigorous standards mean the people building your product have the depth to deliver.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac300bf43216b50d33_Feature%20Icon-6.svg",
    title: "Partner Mentality",
    text: "Transparent communication, clear ownership, and genuine investment in outcomes. Clients stay because research depth and delivery quality show up together.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-us-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="txt-2col-grid is-align-bottom">
              <div className="align-left">
                <p className="tagline-text-blue-gradient">WHY US</p>
                <h2 className="heading-style-48">
                  Why HawkBytes for Your Product Success
                </h2>
              </div>
              <div className="text-color-light-grey">
                <p className="text-size-small-14">
                  HawkBytes is a research-led product company. Quantum computing
                  is our deepest focus; AI products and software are how we turn
                  research into value. Services help partners ship. Here&apos;s
                  why teams work with us:
                </p>
              </div>
            </div>

            <div className="spacer-xlarge-60" />

            <div className="home_features-wr">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="home_features-card">
                  <div className="home_features-card-top">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={feature.icon}
                      loading="lazy"
                      alt=""
                      className="home_features-card-img"
                    />
                    <h3 className="heading-style-21">{feature.title}</h3>
                  </div>
                  <div className="text-color-light-grey">
                    <p className="text-size-tiny-12">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
