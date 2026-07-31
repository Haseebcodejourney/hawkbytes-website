import GlowButton from "@/components/GlowButton";
import "./Cta.css";

const ASSETS = {
  contentBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf4b4595b9051b25a974e_cta-bg-2.avif",
  contentBgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf6ffe3db08bb29c8d22c_CTA-bg-mob.avif",
  effects1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d047789b98be40b43d8cca_effects-1.avif",
  effects2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d0484cb7b7d01086714bdc_effects-2.avif",
  effectsMob1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf8fe19cb6f8c514b1248_effects-mob1.avif",
  effectsMob2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf990eca55f29390dc309_effects-mob2.avif",
};

export default function Cta() {
  return (
    <section className="section cta-section">
      <div className="section-padding top-5 bottom-5">
        <div className="cta-wr anim-appear-on-scroll">
          <div className="cta-stroke">
            <div className="cta-content">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.contentBg}
                loading="lazy"
                alt=""
                className="cta-content-bg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.contentBgMob}
                loading="lazy"
                alt=""
                className="cta-content-bg is-mob"
              />

              <div className="max-width-940">
                <h2 className="heading-style-48">
                  Get expert product &amp; research support
                </h2>
              </div>

              <div className="spacer-medium-30 is-mob-30" />

              <div className="max-width-700">
                <div className="text-font-rm text-color-light-grey">
                  <p className="text-size-regular-16">
                    Advance with confidence. Get expert advice on quantum
                    research, AI products, or software delivery from the
                    HawkBytes team.
                  </p>
                </div>
              </div>

              <div className="spacer-medium-36 is-mob-52" />

              <GlowButton href="/contact-us">
                Talk to an expert
              </GlowButton>
            </div>

            <div className="cta-back-bg" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.effects1}
                loading="lazy"
                width={676}
                alt=""
                className="cta-back-bg-img-1"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.effects2}
                loading="lazy"
                width={666}
                alt=""
                className="cta-back-bg-img-2"
              />
            </div>

            <div className="cta-back-bg-mob" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.effectsMob1}
                loading="lazy"
                width={345}
                alt=""
                className="cta-back-bg-img-1"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSETS.effectsMob2}
                loading="lazy"
                width={360}
                alt=""
                className="cta-back-bg-img-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
