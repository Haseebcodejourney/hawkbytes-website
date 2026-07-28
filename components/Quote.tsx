import "./Quote.css";

const ASSETS = {
  icon: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2d19633d705a263d8d70d_quote-icon.avif",
  author:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d3041e406f42334837f7f7_Testimonial-0.avif",
};

export default function Quote() {
  return (
    <section className="section quote-section">
      <div className="section-padding top-0">
        <div className="container anim-appear-on-scroll">
          <div className="home_quote">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.icon}
              loading="lazy"
              width={62}
              alt="Blue stylized quotation mark symbol with a shiny gradient effect."
              className="home_quote-icon"
            />

            <div className="spacer-medium-30" />

            <div className="max-width-940">
              <p className="home_quote-txt">
                CyberCrest was founded because I noticed a severe value
                proposition deficit in the information security compliance
                space. Our value proposition and breadth of cybersecurity
                services make CyberCrest one of the most valued information
                security partners in the industry.
              </p>
            </div>

            <div className="spacer-medium-20" />

            <div className="home_quote-author-wr">
              <div className="home_quote-author-img-wr">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ASSETS.author}
                  loading="lazy"
                  width={40}
                  alt="Smiling middle-aged man in a dark blazer and light blue shirt against a gray background."
                  className="home_quote-author-img"
                />
              </div>
              <div className="home_quote-author-info">
                <div className="text-weight-medium">
                  <p className="text-size-small-14">John Huckeby</p>
                </div>
                <div className="hide-on-mobile">
                  <p className="text-color-light-grey">—</p>
                </div>
                <div className="text-font-rm text-color-light-grey">
                  <p className="text-size-small-14">
                    Founder and Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
