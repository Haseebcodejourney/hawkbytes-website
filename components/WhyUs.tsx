"use client";

import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./WhyUs.css";

const FEATURE_ICONS = [
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04d9dc22d47a4a569f9d0_Feature%20Icon-1.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04e9cc9cabf34590aba5a_Feature%20Icon-2.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac6b739fc452077b3b_Feature%20Icon-3.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac714c789fba13eaf7_Feature%20Icon-4.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eacfc9e84f29571a53c_Feature%20Icon-5.svg",
  "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d04eac300bf43216b50d33_Feature%20Icon-6.svg",
];

export default function WhyUs() {
  const t = useTranslations();

  const features = t.whyUs.features.map((feature, index) => ({
    ...feature,
    icon: FEATURE_ICONS[index],
  }));

  return (
    <section id="why-us" className="section why-us-section">
      <div className="section-padding top-5 bottom-5">
        <div className="container anim-appear-on-scroll">
          <div className="left-padding">
            <div className="txt-2col-grid is-align-bottom">
              <div className="align-left">
                <p className="tagline-text-blue-gradient">{t.whyUs.tagline}</p>
                <h2 className="heading-style-48">{t.whyUs.title}</h2>
              </div>
              <div className="text-color-light-grey">
                <p className="text-size-small-14">{t.whyUs.intro}</p>
              </div>
            </div>

            <div className="spacer-xlarge-60" />

            <div className="home_features-wr">
              {features.map((feature) => (
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
