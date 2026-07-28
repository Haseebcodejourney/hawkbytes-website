import "./Mission.css";

export default function Mission() {
  return (
    <section id="mission" className="home_mission">
      <div className="left-padding anim-appear-on-scroll">
        <div className="align-left">
          <p className="tagline-text-blue-gradient">OUR MISSION</p>

          <div className="max-width-870">
            <h2 className="heading-style-32">
              Achieve Certifications and Reduce Risks with Efficient, Expert-Led
              Cybersecurity Compliance Solutions
            </h2>
          </div>

          <div className="spacer-medium-32" />

          <div className="txt-2col-grid">
            <div className="text-color-light-grey">
              <p className="text-size-small-14">
                Businesses face mounting pressure to comply with evolving
                cybersecurity regulations. CyberCrest is here to simplify complex
                cybersecurity compliance requirements that delay your growth.
              </p>
            </div>
            <div className="text-color-light-grey">
              <p className="text-size-small-14">
                Our certified team provides assessment and compliance advisory
                services to streamline information security certifications and
                attestations, fix security gaps and improve audit success so you
                can stay compliant, win new clients and confidently move forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
