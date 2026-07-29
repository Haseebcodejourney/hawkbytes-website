"use client";

import { useState, type ReactNode } from "react";
import GlowButton from "@/components/GlowButton";
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
  footerLogo:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67cef0682e775e7eaff45eb9_cybercrest%20logo.svg",
  foursets:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10/67dd36832de83a38938ebaad_Foursets%20Logo.svg",
};

const COMPLIANCE_COL1 = [
  { label: "ISO 9001", href: "https://www.cybercrestcompliance.com/services/iso-9001-compliance" },
  { label: "CMMC", href: "https://www.cybercrestcompliance.com/services/cmmc-compliance" },
  { label: "ISO 27001", href: "https://www.cybercrestcompliance.com/services/iso-27001-compliance" },
  { label: "PCI DSS", href: "https://www.cybercrestcompliance.com/services/pci-dss-compliance" },
  { label: "NIST 800-171", href: "https://www.cybercrestcompliance.com/services/nist-800-171-compliance" },
  { label: "SOC 2", href: "https://www.cybercrestcompliance.com/services/soc2-compliance" },
  { label: "NIS 2", href: "https://www.cybercrestcompliance.com/services/nis-2-compliance" },
];

const COMPLIANCE_COL2 = [
  { label: "HIPAA", href: "https://www.cybercrestcompliance.com/services/hipaa-compliance" },
  { label: "HITRUST", href: "https://www.cybercrestcompliance.com/services/hitrust-compliance" },
  { label: "NIST CSF", href: "https://www.cybercrestcompliance.com/services/nist-csf-assessment" },
  { label: "FedRAMP", href: "https://www.cybercrestcompliance.com/services/fedramp-compliance" },
  { label: "GDPR", href: "https://www.cybercrestcompliance.com/services/gdpr-compliance" },
  { label: "CCPA", href: "https://www.cybercrestcompliance.com/services/ccpa-compliance" },
];

const TECHNICAL = [
  { label: "PENETRATION TESTING", href: "https://www.cybercrestcompliance.com/services/penetration-testing" },
  { label: "CLOUD SECURITY ASSESSMENT", href: "https://www.cybercrestcompliance.com/services/cloud-security" },
  { label: "SECURITY ASSESSMENT", href: "https://www.cybercrestcompliance.com/services/risk-assessments" },
  {
    label: "BUSINESS CONTINUITY & DISASTER RECOVERY",
    href: "https://www.cybercrestcompliance.com/services/business-continuity-and-disaster-recovery",
  },
  { label: "VULNERABILITY SCANNING", href: "https://www.cybercrestcompliance.com/services/vulnerability-scanning" },
];

const COMPANY = [
  { label: "ABOUT US", href: "/about-us" },
  { label: "CONTACT", href: "/contact-us" },
  { label: "BLOG", href: "https://www.cybercrestcompliance.com/blog" },
];

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
  const [openItem, setOpenItem] = useState<FooterKey | null>(null);
  const year = new Date().getFullYear();

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
                      <h2 className="heading-style-48">Move forward with confidence</h2>
                      <div className="spacer-medium-30 is-mob-30" />
                      <div className="max-width-700">
                        <div className="text-font-rm text-color-light-grey">
                          <p className="text-size-regular-16">
                            Don&apos;t let compliance delays hold you back from growing your
                            business. Get in touch to talk it over with a CyberCrest expert.
                          </p>
                        </div>
                      </div>
                      <div className="spacer-medium-36 is-mob-52" />
                      <GlowButton href="/contact-us">Talk to an expert</GlowButton>
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
                title="Compliance and Data Privacy"
                open={openItem === "compliance"}
                onToggle={onToggle}
              >
                <div className="footer-item-content-wr is-2-col">
                  <div className="footer-links-wr">
                    {COMPLIANCE_COL1.map((link) => (
                      <a key={link.href} href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <div className="footer-links-wr">
                    {COMPLIANCE_COL2.map((link) => (
                      <a key={link.href} href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FooterItem>

              <FooterItem
                id="technical"
                title="Technical Services"
                open={openItem === "technical"}
                onToggle={onToggle}
                className="is-2"
              >
                <div className="footer-item-content-wr">
                  <div className="footer-links-wr with-gap">
                    {TECHNICAL.map((link) => (
                      <a key={link.href} href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FooterItem>

              <FooterItem
                id="company"
                title="Company"
                open={openItem === "company"}
                onToggle={onToggle}
                className="is-3"
              >
                <div className="footer-item-content-wr">
                  <div className="footer-links-wr with-gap">
                    {COMPANY.map((link) => (
                      <a key={link.href} href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </FooterItem>

              <FooterItem
                id="contact"
                title="Contact"
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
                      Encinitas, CA 92024
                    </a>
                    <a href="mailto:sales@cybercrestcompliance.com" className="footer-link">
                      sales@cybercrestcompliance.com
                    </a>
                    <a
                      href="tel:+18005871250"
                      className="footer-link"
                      rel="noopener noreferrer nofollow"
                    >
                      +1 (800) 587-1250
                    </a>
                    <div className="spacer-medium-10" />
                    <a
                      href="https://www.linkedin.com/company/cybercrest-compliance/?trk=ppro_cprof"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="div-link"
                      aria-label="CyberCrest on LinkedIn"
                    >
                      <div className="social-button">
                        <div className="social-button-icon">
                          <LinkedInIcon />
                        </div>
                      </div>
                    </a>
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
                    alt="CyberCrest"
                    className="footer-logo-img"
                  />
                </div>
                <div className="text-color-light-grey">
                  <p className="text-size-small-14-rm">
                    © <span className="year">{year}</span> Cybercrest Compliance Services.
                    All rights reserved
                  </p>
                </div>
              </div>

              <div className="footer-bottom-legacy-wr">
                <a
                  href="/privacy-policy"
                  className="footer-link"
                >
                  Privacy Policy
                </a>
              </div>

              <div className="footer-bottom-foursets-wr">
                <div className="text-color-light-grey">
                  <p className="text-size-small-14-rm">Website made by:</p>
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
