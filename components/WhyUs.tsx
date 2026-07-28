import "./WhyUs.css";

const FEATURES = [
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04d9dc22d47a4a569f9d0_Feature%20Icon-1.svg",
    title: "Client First",
    text: "CyberCrest will always put your organization’s needs and business goals first when assisting you on the way to maturing your security program. We make your priorities central to our strategy without sacrificing quality. Unlike many of our competitors, CyberCrest customizes its approach to every client’s needs.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04e9cc9cabf34590aba5a_Feature%20Icon-2.svg",
    title: "Remediation Support",
    text: "We’re proud of being able to support any information security implementation and remediation efforts. From technical to administrative tasks, we roll up our sleeves to ensure our client’s compliance success without compromising best practices and requirements.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac6b739fc452077b3b_Feature%20Icon-3.svg",
    title: "Technology Enabled",
    text: "We leverage state-of-the-art audit and compliance software to streamline and enhance your compliance journey. Our consultants are also trained and have hands-on experience with the top compliance platform vendors.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac714c789fba13eaf7_Feature%20Icon-4.svg",
    title: "Ready to Start",
    text: "While some cybersecurity compliance firms may require several months to get started, CyberCrest staffs up ahead of time and is always ready to kickstart the engagement.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eacfc9e84f29571a53c_Feature%20Icon-5.svg",
    title: "Resume Matters",
    text: "We guarantee highly qualified consultants to lead your engagement by boasting some of the highest education and experience requirements in the industry.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac300bf43216b50d33_Feature%20Icon-6.svg",
    title: "Client Testimonials",
    text: "CyberCrest demonstrates 100% client retention with references available across multiple industries. Experience our high standard of cyber compliance services and work ethics for yourself with CyberCrest’s team on board.",
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
                  Why CyberCrest for Your Compliance Success
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
