import "./Mission.css";

export default function Mission() {
  return (
    <section id="mission" className="home_mission">
      <div className="left-padding anim-appear-on-scroll">
        <div className="align-left">
          <p className="tagline-text-blue-gradient">OUR MISSION</p>

          <div className="max-width-870">
            <h2 className="heading-style-32">
              Advance quantum computing research and ship intelligent products
              that reshape how businesses work
            </h2>
          </div>

          <div className="spacer-medium-32" />

          <div className="txt-2col-grid">
            <div className="text-color-light-grey">
              <p className="text-size-small-14">
                HawkBytes is built around products and research — not just
                services. We invest deeply in quantum computing research, AI
                systems, and software products that solve hard problems at scale.
              </p>
            </div>
            <div className="text-color-light-grey">
              <p className="text-size-small-14">
                Alongside our product work, we help teams ship websites, mobile
                apps, and quality-assured software. Services support the mission;
                research and products define it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
