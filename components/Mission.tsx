"use client";

import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Mission.css";

export default function Mission() {
  const t = useTranslations();

  return (
    <section id="mission" className="home_mission">
      <div className="left-padding anim-appear-on-scroll">
        <div className="align-left">
          <p className="tagline-text-blue-gradient">{t.mission.tagline}</p>

          <div className="max-width-870">
            <h2 className="heading-style-32">{t.mission.title}</h2>
          </div>

          <div className="spacer-medium-32" />

          <div className="txt-2col-grid">
            <div className="text-color-light-grey">
              <p className="text-size-small-14">{t.mission.col1}</p>
            </div>
            <div className="text-color-light-grey">
              <p className="text-size-small-14">{t.mission.col2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
