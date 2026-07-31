"use client";

import { useEffect, useRef, useState } from "react";
import "./Header.css";

const COMPLIANCE_LINKS = [
  { label: "Quantum Computing Research", href: "/#services" },
  { label: "Quantum Algorithms", href: "/#services" },
  { label: "AI Products", href: "/#services" },
  { label: "Machine Learning", href: "/#services" },
  { label: "Generative AI", href: "/#services" },
  { label: "AI Research", href: "/#services" },
];

const COMPLIANCE_LINKS_COL2 = [
  { label: "Software Products", href: "/#services" },
  { label: "SaaS Platforms", href: "/#services" },
  { label: "Applied Research", href: "/#methodology" },
  { label: "Prototyping", href: "/#methodology" },
  { label: "Product Engineering", href: "/#services" },
];

const DATA_PRIVACY_LINKS = [
  { label: "Hybrid Quantum Systems", href: "/#services" },
  { label: "Enterprise Software", href: "/#services" },
];

const TECHNICAL_LINKS = [
  { label: "Website Development", href: "/#solutions" },
  { label: "Mobile Apps", href: "/#solutions" },
  { label: "QA & Testing", href: "/#solutions" },
  { label: "UI/UX Design", href: "/#solutions" },
  { label: "DevOps & Cloud", href: "/#solutions" },
];

function ContactIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M18.5 12V18H12.5C11.4478 17.9989 10.4144 17.7212 9.50349 17.1946C8.59255 16.6681 7.83609 15.9112 7.31 15C7.8754 14.996 8.43888 14.9336 8.9915 14.814C9.41236 15.3402 9.94625 15.765 10.5536 16.0569C11.1609 16.3487 11.8262 16.5002 12.5 16.5H17V12C16.9998 11.3259 16.8479 10.6605 16.5555 10.0532C16.2631 9.44582 15.8378 8.91206 15.311 8.4915C15.4316 7.93899 15.495 7.37551 15.5 6.81C16.4112 7.33609 17.1681 8.09255 17.6946 9.00349C18.2212 9.91443 18.4989 10.9478 18.5 12ZM14 6.75C14 4.95979 13.2888 3.2429 12.023 1.97703C10.7571 0.711159 9.04021 0 7.25 0C5.45979 0 3.7429 0.711159 2.47703 1.97703C1.21116 3.2429 0.5 4.95979 0.5 6.75L0.5 13.5H7.25C9.0396 13.498 10.7553 12.7862 12.0208 11.5208C13.2862 10.2553 13.998 8.5396 14 6.75ZM2 6.75C2 5.71165 2.30791 4.69661 2.88478 3.83326C3.46166 2.9699 4.2816 2.29699 5.24091 1.89963C6.20022 1.50227 7.25582 1.3983 8.27422 1.60088C9.29262 1.80345 10.2281 2.30346 10.9623 3.03769C11.6965 3.77191 12.1966 4.70738 12.3991 5.72578C12.6017 6.74418 12.4977 7.79978 12.1004 8.75909C11.703 9.7184 11.0301 10.5383 10.1667 11.1152C9.30339 11.6921 8.28835 12 7.25 12H2V6.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a href="/contact-us" className={["button", className].filter(Boolean).join(" ")}>
      <div className="button-text-wr">
        <div className="btn-icon-embed">
          <ContactIcon />
        </div>
        <div>CONTACT US</div>
      </div>
    </a>
  );
}

type DropdownKey = "compliance" | "privacy" | "technical" | null;

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 479px)");
    const update = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const navbar = navRef.current;
    if (!navbar) return;

    const onScroll = () => {
      const threshold = 0.1 * window.innerHeight;
      if (window.scrollY > threshold) {
        navbar.style.background = "rgba(4, 4, 16, 0.6)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.setProperty("-webkit-backdrop-filter", "blur(10px)");
      } else {
        navbar.style.background = "rgba(4, 4, 16, 0)";
        navbar.style.backdropFilter = "blur(0px)";
        navbar.style.setProperty("-webkit-backdrop-filter", "blur(0px)");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    const onPointer = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, []);

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const onEnter = (key: DropdownKey) => {
    if (!isMobile) setOpenDropdown(key);
  };

  const onLeave = () => {
    if (!isMobile) setOpenDropdown(null);
  };

  return (
    <header
      ref={navRef}
      role="banner"
      className={`navbar${menuOpen ? " is-menu-open" : ""}`}
    >
      <div className="container">
        <div className="navbar-wr">
          <a href="/" className="brand" aria-label="HawkBytes home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="eager"
              src="/logos/hawkbytes-logo.svg"
              alt="HawkBytes"
              className="logo-img"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="eager"
              src="/logos/hawkbytes-logo-mob.svg"
              alt="HawkBytes"
              className="logo-img is-mob"
            />
          </a>

          <nav
            role="navigation"
            className="nav-menu"
            aria-label="Main"
          >
            <div className="nav-menu-inner">
              <div className="nav-menu-links-wr">
                {/* Products & Research */}
                <div
                  className={`nav-dropdown${openDropdown === "compliance" ? " is-open" : ""}`}
                  onMouseEnter={() => onEnter("compliance")}
                  onMouseLeave={onLeave}
                >
                  <button
                    type="button"
                    className="nav-dropdown-toggle"
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === "compliance"}
                    onClick={() => isMobile && toggleDropdown("compliance")}
                  >
                    <span>Products</span>
                    <div className="nav-dropdown-icon" aria-hidden="true">
                      <ChevronIcon />
                    </div>
                  </button>
                  <div className="nav-dropdown-list" role="menu">
                    <div className="nav-dropdown-inner-wr">
                      <div className="text-weight-medium hide-on-mobile">
                        <div className="text-size-medium-18">Products &amp; Research</div>
                      </div>
                      <div className="spacer-medium-10 hide-on-mobile" />
                      <div className="nav-dropdown-2col">
                        <div className="nav-dropdown-links-wr">
                          {COMPLIANCE_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="nav-dropdown-link" role="menuitem">
                              {link.label}
                            </a>
                          ))}
                        </div>
                        <div className="nav-dropdown-links-wr">
                          {COMPLIANCE_LINKS_COL2.map((link) => (
                            <a key={link.href} href={link.href} className="nav-dropdown-link" role="menuitem">
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nav-divider" />

                {/* Data Privacy */}
                <div
                  className={`nav-dropdown${openDropdown === "privacy" ? " is-open" : ""}`}
                  onMouseEnter={() => onEnter("privacy")}
                  onMouseLeave={onLeave}
                >
                  <button
                    type="button"
                    className="nav-dropdown-toggle"
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === "privacy"}
                    onClick={() => isMobile && toggleDropdown("privacy")}
                  >
                    <span>Research</span>
                    <div className="nav-dropdown-icon" aria-hidden="true">
                      <ChevronIcon />
                    </div>
                  </button>
                  <div className="nav-dropdown-list is-2" role="menu">
                    <div className="nav-dropdown-inner-wr">
                      <div className="text-weight-medium hide-on-mobile">
                        <div className="text-size-medium-18">Research Tracks</div>
                      </div>
                      <div className="spacer-medium-10 hide-on-mobile" />
                      <div className="nav-dropdown-links-wr">
                        {DATA_PRIVACY_LINKS.map((link) => (
                          <a key={link.href} href={link.href} className="nav-dropdown-link" role="menuitem">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nav-divider" />

                {/* Technical Services */}
                <div
                  className={`nav-dropdown${openDropdown === "technical" ? " is-open" : ""}`}
                  onMouseEnter={() => onEnter("technical")}
                  onMouseLeave={onLeave}
                >
                  <button
                    type="button"
                    className="nav-dropdown-toggle"
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === "technical"}
                    onClick={() => isMobile && toggleDropdown("technical")}
                  >
                    <span>Services</span>
                    <div className="nav-dropdown-icon" aria-hidden="true">
                      <ChevronIcon />
                    </div>
                  </button>
                  <div className="nav-dropdown-list is-3" role="menu">
                    <div className="nav-dropdown-inner-wr">
                      <div className="text-weight-medium hide-on-mobile">
                        <div className="text-size-medium-18">Services</div>
                      </div>
                      <div className="spacer-medium-10 hide-on-mobile" />
                      <div className="nav-dropdown-links-wr">
                        {TECHNICAL_LINKS.map((link) => (
                          <a key={link.href} href={link.href} className="nav-dropdown-link" role="menuitem">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nav-divider" />

                <a href="/about-us" className="nav-link">
                  About Us
                </a>

                <div className="nav-divider" />

                <a href="/blog" className="nav-link">
                  Blog
                </a>
              </div>

              <div className="nav-mob-btn-wr">
                <ContactButton />
              </div>
            </div>
          </nav>

          <div className="nav-menu-btn-wr">
            <ContactButton />
          </div>

          <button
            type="button"
            className="nav-burger-link"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => {
              setMenuOpen((v) => !v);
              setOpenDropdown(null);
            }}
          >
            <div className="nav-burger-inner">
              <div className="nav-burger-icons-wr">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="eager" src="/icons/menu.svg" alt="" className="nav-burger-icon is-1" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="eager" src="/icons/close.svg" alt="" className="nav-burger-icon is-2" />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="nav-overlay" id="mobile-nav" hidden={!menuOpen} />
    </header>
  );
}
