import "./WhyUs.css";

const FEATURES = [
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04d9dc22d47a4a569f9d0_Feature%20Icon-1.svg",
    title: "Research-Driven",
    text: "Every product we build starts with deep research. HawkBytes invests in understanding the cutting edge of AI, quantum computing, and software engineering before a single line of code is written — ensuring your solution is future-proof from day one.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04e9cc9cabf34590aba5a_Feature%20Icon-2.svg",
    title: "End-to-End Delivery",
    text: "We handle everything — from discovery and architecture to development, testing, deployment, and maintenance. One team owns your product from idea to production, ensuring accountability and seamless execution.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac6b739fc452077b3b_Feature%20Icon-3.svg",
    title: "AI & Quantum Expertise",
    text: "HawkBytes has dedicated engineers and researchers specializing in machine learning, large language models, computer vision, and quantum algorithms — letting us tackle the most advanced technology challenges businesses face today.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac714c789fba13eaf7_Feature%20Icon-4.svg",
    title: "Fast, Agile Execution",
    text: "We move quickly without sacrificing quality. Our agile delivery model means you see working software in weeks, not months. We iterate based on your feedback, keeping every sprint focused on delivering real value.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eacfc9e84f29571a53c_Feature%20Icon-5.svg",
    title: "Senior Engineering Talent",
    text: "Every project at HawkBytes is led by senior engineers and researchers. We maintain rigorous hiring standards to ensure the people building your product have the expertise and passion to deliver exceptional results.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac300bf43216b50d33_Feature%20Icon-6.svg",
    title: "Client-Centric Culture",
    text: "Your goals are our goals. HawkBytes builds long-term partnerships based on transparency, honest communication, and genuine investment in your success. Our clients stay because the results speak for themselves.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-us-section">
      <div className="section-padding top-0">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="txt-2col-grid is-align-bottom">
              <div className="align-left">
                <p className="tagline-text-blue-gradient">WHY US</p>
                <h2 className="heading-style-48">
                  Why HawkBytes is Your Innovation Partner
                </h2>
              </div>
              <div className="text-color-light-grey">
                <p className="text-size-small-14">
                  Our cybersecurity compliance company was founded on the
                  premise that compliance should be accessible to any business
                  looking to operate in line with industry-standard policies and
                  procedures. Beyond secured business assets, we see it as a
                  competitive advantage that helps you gain trust and win
                  confidence. Here’s why CyberCrest can be your partner of
                  choice:
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
