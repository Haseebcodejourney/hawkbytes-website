import "./Mission.css";

export default function Mission() {
  return (
    <section id="mission" className="home_mission">
      <div className="left-padding anim-appear-on-scroll">
        <div className="align-left">
          <p className="tagline-text-blue-gradient">OUR MISSION</p>

          <div className="max-width-870">
            <h2 className="heading-style-32">
              Accelerating Innovation Through AI Research, Intelligent Software,
              and Next-Generation Quantum Computing
            </h2>
          </div>

          <div className="spacer-medium-32" />

          <div className="txt-2col-grid">
            <div className="text-color-light-grey">
              <p className="text-size-small-14">
                The technology landscape is evolving faster than ever. HawkBytes
                exists to help businesses stay ahead — by building AI-powered
                products, conducting deep research, and engineering software that
                solves real-world problems at scale.
              </p>
            </div>
            <div className="text-color-light-grey">
              <p className="text-size-small-14">
                From quantum computing research to full-stack web and mobile
                development, our expert team delivers end-to-end technology
                solutions — backed by rigorous QA, modern architecture, and a
                commitment to quality that drives measurable outcomes for every client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
