"use client";

import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Accreditations.css";

const ASSETS = {
  bg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e7595224be0fe139b926_Ellipse%2013.svg",
  bgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dbda2c4edcf87c33cb26fe_Ellipse%2013-2.svg",
  line:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e759e82fd73180709a81_Line%2030.svg",
  lineMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dbda2cd505e94c43479262_Line%2030-2.svg",
  border:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e3a91460d0bc9453d9b2_Line%2026.svg",
  borderMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dbd98a00991f4503397fce_Line%2029.svg",
};

const ITEM_ASSETS = [
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e2c889f5e94dc5ac269f_expertise-1.avif",
    border: true,
    borderMob: true,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e861028ff7b27858c38d_expertise-2.avif",
    border: true,
    borderMob: false,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e86187d98eb4e6fd944a_expertise-3.avif",
    border: true,
    borderMob: true,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e861fca5221aa1d4f8ff_expertise-4.avif",
    border: true,
    borderMob: false,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e86163a17b3a275b9fd6_expertise-5.avif",
    border: false,
    borderMob: true,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e861e9fb85a213479a81_expertise-6.avif",
    border: false,
    borderMob: false,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e8613c17fd4db5f9d04a_expertise-7.avif",
    border: false,
    borderMob: true,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e861dabb09e731a28926_expertise-8.avif",
    border: false,
    borderMob: false,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e861779f42b93a4946c1_expertise-9.avif",
    border: false,
    borderMob: false,
  },
  {
    logo: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d2e86126ba06942ed1661e_expertise-10.avif",
    border: false,
    borderMob: false,
  },
];

export default function Accreditations({
  paddingClass = "top-5 bottom-5",
  visibleOnLoad = false,
}: {
  paddingClass?: string;
  visibleOnLoad?: boolean;
}) {
  const t = useTranslations();

  const items = t.accreditations.items.map((item, index) => ({
    ...item,
    ...(ITEM_ASSETS[index] ?? ITEM_ASSETS[0]),
  }));

  return (
    <section id="accreditations" className="section accreditations-section">
      <div className={`section-padding ${paddingClass}`}>
        <div
          className={`container anim-appear-on-scroll${visibleOnLoad ? " is-visible" : ""}`}
        >
          <div className="left-padding">
            <div className="align-left">
              <p className="tagline-text-blue-gradient">{t.accreditations.tagline}</p>
              <h2 className="heading-style-48">{t.accreditations.title}</h2>
            </div>

            <div className="spacer-medium-30" />

            <div className="home_expertise">
              <div className="home_expertise-bg-wr" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ASSETS.bg}
                  loading="lazy"
                  alt=""
                  className="home_expertise-bg-img"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ASSETS.bgMob}
                  loading="lazy"
                  alt=""
                  className="home_expertise-bg-img is-mob"
                />
              </div>

              <div className="home_expertise-line-wr" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ASSETS.line}
                  loading="lazy"
                  alt=""
                  className="home_expertise-line-img"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ASSETS.lineMob}
                  loading="lazy"
                  alt=""
                  className="home_expertise-line-img is-mob"
                />
              </div>

              <div className="home_expertise-grid">
                {items.map((item, index) => (
                  <div key={index} className="home_expertise-grid-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.logo}
                      loading="lazy"
                      width={200}
                      alt=""
                      className="home_expertise-item-logo-img"
                    />
                    <div className="home_expertise-item-txt">{item.text}</div>
                    {item.border ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={ASSETS.border}
                        loading="lazy"
                        alt=""
                        className="home_expertise-border-img"
                      />
                    ) : null}
                    {item.borderMob ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={ASSETS.borderMob}
                        loading="lazy"
                        alt=""
                        className="home_expertise-border-mob-img"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
