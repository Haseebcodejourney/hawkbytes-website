"use client";

import { useState, type ReactNode } from "react";
import GlowButton from "@/components/GlowButton";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./Footer.css";

const ASSETS = {
  ctaBg:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf4b4595b9051b25a974e_cta-bg-2.avif",
  ctaBgMob:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf6ffe3db08bb29c8d22c_CTA-bg-mob.avif",
  effects1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d047789b98be40b43d8cca_effects-1.avif",
  effects2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d0484cb7b7d01086714bdc_effects-2.avif",
  effectsMob1:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf8fe19cb6f8c514b1248_effects-mob1.avif",
  effectsMob2:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67daf990eca55f29390dc309_effects-mob2.avif",
  ctaLogo:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d3f10ee963dc26bf5c0f3e_Logo%20cta.avif",
  toggle:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67d3f3b16f6c5be986785d95_Footer%20Toggle%20Container.svg",
  footerLogo: "/logos/hawkbytes-logo.svg",
  foursets:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd36832de83a38938ebaad_Foursets%20Logo.svg",
};

const COMPLIANCE_HREFS_COL1 = [
  "/services/research",
  "/services/research#services",
  "/#services",
  "/#services",
  "/#services",
  "/services/research#about",
];

const COMPLIANCE_HREFS_COL2 = [
  "/#services",
  "/#services",
  "/services/research#methodology",
  "/services/research#services",
  "/#services",
];

const TECHNICAL_HREFS = ["/#solutions", "/#solutions", "/#solutions", "/#solutions", "/#solutions"];

const COMPANY_HREFS = ["/about-us", "/contact-us", "/blog", "/careers"];

function zip(labels: string[], hrefs: string[]) {
  return labels.map((label, i) => ({ label, href: hrefs[i] ?? hrefs[hrefs.length - 1] }));
}

type FooterKey = "compliance" | "technical" | "company" | "contact";

function LinkedInIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.18881 4.35225C6.18881 5.65983 5.20455 6.70613 3.62417 6.70613H3.5952C2.07356 6.70613 1.08984 5.65983 1.08984 4.35225C1.08984 3.017 2.10351 2 3.65403 2C5.20455 2 6.15939 3.017 6.18881 4.35225ZM5.88962 8.56494V22.183H1.35717V8.56494H5.88962ZM22.2349 22.183L22.2351 14.3748C22.2351 10.1919 19.999 8.24511 17.0166 8.24511C14.6101 8.24511 13.5327 9.5669 12.9312 10.4942V8.56526H8.39819C8.45793 9.84311 8.39819 22.1833 8.39819 22.1833H12.9312V14.5779C12.9312 14.1709 12.9606 13.7649 13.0804 13.4735C13.408 12.6604 14.1539 11.8185 15.406 11.8185C17.0467 11.8185 17.7027 13.0673 17.7027 14.8973V22.183H22.2349Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M14.5 22V13.5H17.25L17.75 10H14.5V8C14.5 7.05 14.75 6.4 16.15 6.4H17.9V3.25C17.6 3.2 16.55 3.1 15.35 3.1C12.85 3.1 11.1 4.65 11.1 7.7V10H8.25V13.5H11.1V22H14.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M17.1761 3H20.0864L13.6912 10.3226L21.2 20.25H15.3316L10.7222 14.2452L5.46634 20.25H2.55449L9.39485 12.4206L2.2 3H8.21652L12.3774 8.49194L17.1761 3ZM16.1544 18.4657H17.7671L7.32153 4.68065H5.59134L16.1544 18.4657Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.584 2 12.227c0 4.52 2.865 8.35 6.839 9.701.5.094.683-.222.683-.492 0-.243-.01-.996-.014-1.806-2.782.617-3.369-1.37-3.369-1.37-.455-1.18-1.11-1.494-1.11-1.494-.908-.635.069-.622.069-.622 1.004.072 1.532 1.054 1.532 1.054.892 1.56 2.341 1.11 2.91.85.091-.66.35-1.11.636-1.365-2.22-.258-4.555-1.136-4.555-5.057 0-1.117.39-2.03 1.03-2.746-.103-.259-.447-1.3.098-2.71 0 0 .84-.274 2.75 1.048A9.36 9.36 0 0 1 12 6.844a9.36 9.36 0 0 1 2.504.344c1.909-1.322 2.747-1.048 2.747-1.048.547 1.41.203 2.451.1 2.71.64.716 1.028 1.629 1.028 2.746 0 3.932-2.34 4.796-4.566 5.05.359.316.679.94.679 1.895 0 1.368-.012 2.47-.012 2.806 0 .273.18.59.688.49C19.138 20.573 22 16.744 22 12.227 22 6.584 17.523 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    key: "linkedin" as const,
    href: "https://www.linkedin.com/company/hawkbytes/",
    Icon: LinkedInIcon,
  },
  {
    key: "facebook" as const,
    href: "https://www.facebook.com/hawkbytes",
    Icon: FacebookIcon,
  },
  {
    key: "twitter" as const,
    href: "https://x.com/hawkbytes",
    Icon: TwitterIcon,
  },
  {
    key: "github" as const,
    href: "https://github.com/hawkbytes",
    Icon: GitHubIcon,
  },
];

function FooterItem({
  id,
  title,
  open,
  onToggle,
  className = "",
  children,
}: {
  id: FooterKey;
  title: string;
  open: boolean;
  onToggle: (id: FooterKey) => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={["footer_item-wr", className, open ? "is-open" : ""].filter(Boolean).join(" ")}>
      <button
        type="button"
        className="footer-item-title-wr"
        aria-expanded={open}
        onClick={() => onToggle(id)}
      >
        <span>{title}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ASSETS.toggle} loading="lazy" alt="" className="footer_icon-img" />
      </button>
      <div className="footer-item-content">{children}</div>
    </div>
  );
}

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  const t = useTranslations();
  const [openItem, setOpenItem] = useState<FooterKey | null>(null);
  const year = new Date().getFullYear();

  const complianceCol1 = zip(t.footer.productsCol1, COMPLIANCE_HREFS_COL1);
  const complianceCol2 = zip(t.footer.productsCol2, COMPLIANCE_HREFS_COL2);
  const technical = zip(t.footer.servicesItems, TECHNICAL_HREFS);
  const company = zip(t.footer.companyItems, COMPANY_HREFS);

  const onToggle = (id: FooterKey) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`section is-footer${hideCta ? " is-no-cta" : ""}`}>
      <div className="section-padding">
        <div className="container">
          <div className="footer-wr">
            {!hideCta && (
              <div className="footer-cta-wr anim-appear-on-scroll">
                <div className="cta-wr">
                  <div className="cta-stroke">
                    <div className="cta-content is-footer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ASSETS.ctaBg}
                        loading="lazy"
                        alt=""
                        className="cta-content-bg"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ASSETS.ctaBgMob}
                        loading="lazy"
                        alt=""
                        className="cta-content-bg is-mob"
                      />
                      <h2 className="heading-style-48">{t.footer.ctaTitle}</h2>
                      <div className="spacer-medium-30 is-mob-30" />
                      <div className="max-width-700">
                        <div className="text-font-rm text-color-light-grey">
                          <p className="text-size-regular-16">{t.footer.ctaBody}</p>
                        </div>
                      </div>
                      <div className="spacer-medium-36 is-mob-52" />
                      <GlowButton href="/contact-us">{t.footer.ctaButton}</GlowButton>
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

                  <div className="cta-logo-wr" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.ctaLogo}
                      loading="lazy"
                      width={89}
                      alt=""
                      className="cta-logo-img"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="footer-content-wr">
              <FooterItem
                id="compliance"
                title={t.footer.productsSection}
                open={openItem === "compliance"}
                onToggle={onToggle}
              >
                <div className="footer-item-content-wr is-2-col">
                  <div className="footer-links-wr with-gap">
                    {complianceCol1.map((link) => (
                      <a key={link.label} href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <div className="footer-links-wr with-gap">
                    {complianceCol2.map((link) => (
                      <a key={link.label} href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FooterItem>

              <FooterItem
                id="technical"
                title={t.footer.servicesSection}
                open={openItem === "technical"}
                onToggle={onToggle}
                className="is-2"
              >
                <div className="footer-item-content-wr">
                  <div className="footer-links-wr with-gap">
                    {technical.map((link) => (
                      <a key={link.label} href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FooterItem>

              <FooterItem
                id="company"
                title={t.footer.companySection}
                open={openItem === "company"}
                onToggle={onToggle}
                className="is-3"
              >
                <div className="footer-item-content-wr">
                  <div className="footer-links-wr with-gap">
                    {company.map((link) => (
                      <a key={link.label} href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FooterItem>

              <FooterItem
                id="contact"
                title={t.footer.contactSection}
                open={openItem === "contact"}
                onToggle={onToggle}
              >
                <div className="footer-item-content-wr">
                  <div className="footer-links-wr with-gap">
                    <a
                      href="https://maps.app.goo.gl/Tzxc5rBxUbMHiDPGA"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="footer-link"
                    >
                      {t.footer.location}
                    </a>
                    <a href="mailto:hello@hawkbytes.io" className="footer-link">
                      {t.footer.email}
                    </a>
                    <a
                      href="tel:+18005871250"
                      className="footer-link"
                      rel="noopener noreferrer nofollow"
                    >
                      {t.footer.phone}
                    </a>
                    <div className="spacer-medium-10" />
                    <div className="footer-social-wr">
                      {SOCIAL_LINKS.map(({ key, href, Icon }) => (
                        <a
                          key={key}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="div-link"
                          aria-label={t.footer.socialAria[key]}
                        >
                          <div className="social-button">
                            <div className="social-button-icon">
                              <Icon />
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FooterItem>
            </div>

            <div className="footer-bottom">
              <div className="footer-bottom-left-wr">
                <div className="footer-logo-wr">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ASSETS.footerLogo}
                    loading="lazy"
                    alt="HawkBytes"
                    className="footer-logo-img"
                  />
                </div>
                <div className="text-color-light-grey">
                  <p className="text-size-small-14-rm">
                    {t.footer.copyright.replace("{year}", String(year))}
                  </p>
                </div>
              </div>

              <div className="footer-bottom-legacy-wr">
                <a
                  href="/privacy-policy"
                  className="footer-link"
                >
                  {t.footer.privacy}
                </a>
                <LanguageSwitcher />
              </div>

              <div className="footer-bottom-foursets-wr">
                <div className="text-color-light-grey">
                  <p className="text-size-small-14-rm">{t.footer.brandLine}</p>
                </div>
                <a
                  href="https://www.foursets.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="footer-foursets-icon-wr"
                  aria-label="Foursets"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ASSETS.foursets}
                    loading="lazy"
                    alt=""
                    className="footer-foursets-icon"
                  />
                  <div className="footer-foursets-blur-wr" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ASSETS.foursets}
                      loading="lazy"
                      alt=""
                      className="footer-foursets-icon is-blur"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
