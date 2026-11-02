"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { useTranslations } from "@/components/i18n/LanguageProvider";
import "./StickyNav.css";

export type StickyNavLink = { href: string; num: string; label: string };

const HOME_LINK_HREFS = [
  "#mission",
  "#services",
  "#testimonials",
  "#attestations",
  "#methodology",
  "#solutions",
  "#why-us",
  "#facts",
  "#accreditations",
];

// Remove an entry when its section is uncommented again:
// "#attestations" → app/page.tsx; "#accreditations" → app/page.tsx and components/AboutPage.tsx;
// "#testimonials" → app/page.tsx and components/ResearchPage.tsx
const HIDDEN_LINK_HREFS = ["#attestations", "#accreditations", "#testimonials"];

const VIDEO = {
  poster:
    "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d19301b1f1e997d883b9c7_popup-poster-00001.jpg",
  mp4: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d19301b1f1e997d883b9c7_popup-transcode.mp4",
  webm: "https://cdn.prod.website-files.com/67c995cf629758b15942fb10%2F67d19301b1f1e997d883b9c7_popup-transcode.webm",
};

function getHeaderOffset() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--site-header-offset")
    .trim();
  const px = Number.parseFloat(raw);
  if (!Number.isFinite(px)) return 104;
  if (raw.endsWith("rem")) {
    const root = Number.parseFloat(
      getComputedStyle(document.documentElement).fontSize,
    );
    return px * (Number.isFinite(root) ? root : 16);
  }
  return px;
}

function ContactIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18.5 12V18H12.5C11.4478 17.9989 10.4144 17.7212 9.50349 17.1946C8.59255 16.6681 7.83609 15.9112 7.31 15C7.8754 14.996 8.43888 14.9336 8.9915 14.814C9.41236 15.3402 9.94625 15.765 10.5536 16.0569C11.1609 16.3487 11.8262 16.5002 12.5 16.5H17V12C16.9998 11.3259 16.8479 10.6605 16.5555 10.0532C16.2631 9.44582 15.8378 8.91206 15.311 8.4915C15.4316 7.93899 15.495 7.37551 15.5 6.81C16.4112 7.33609 17.1681 8.09255 17.6946 9.00349C18.2212 9.91443 18.4989 10.9478 18.5 12ZM14 6.75C14 4.95979 13.2888 3.2429 12.023 1.97703C10.7571 0.711159 9.04021 0 7.25 0C5.45979 0 3.7429 0.711159 2.47703 1.97703C1.21116 3.2429 0.5 4.95979 0.5 6.75L0.5 13.5H7.25C9.0396 13.498 10.7553 12.7862 12.0208 11.5208C13.2862 10.2553 13.998 8.5396 14 6.75ZM2 6.75C2 5.71165 2.30791 4.69661 2.88478 3.83326C3.46166 2.9699 4.2816 2.29699 5.24091 1.89963C6.20022 1.50227 7.25582 1.3983 8.27422 1.60088C9.29262 1.80345 10.2281 2.30346 10.9623 3.03769C11.6965 3.77191 12.1966 4.70738 12.3991 5.72578C12.6017 6.74418 12.4977 7.79978 12.1004 8.75909C11.703 9.7184 11.0301 10.5383 10.1667 11.1152C9.30339 11.6921 8.28835 12 7.25 12H2V6.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function StickyNav({
  links: linksProp,
  noBottomPadding = false,
}: {
  links?: StickyNavLink[];
  noBottomPadding?: boolean;
}) {
  const t = useTranslations();

  const homeLinks = useMemo<StickyNavLink[]>(
    () =>
      t.stickyNav.links.map((link, index) => ({
        href: HOME_LINK_HREFS[index] ?? "#mission",
        num: link.num,
        label: link.label,
      })),
    [t],
  );

  const links = useMemo(
    () =>
      (linksProp ?? homeLinks)
        .filter((link) => !HIDDEN_LINK_HREFS.includes(link.href))
        .map((link, index) => ({
          ...link,
          num: String(index + 1).padStart(2, "0"),
        })),
    [linksProp, homeLinks],
  );
  const hrefsKey = links.map((l) => l.href).join("|");

  const [active, setActive] = useState(links[0]?.href ?? "#mission");

  useEffect(() => {
    const ids = hrefsKey
      ? hrefsKey.split("|").map((href) => href.slice(1)).filter(Boolean)
      : [];
    if (!ids.length) return;

    let frame = 0;
    let boundLenis: {
      on: (event: "scroll", callback: () => void) => void;
      off: (event: "scroll", callback: () => void) => void;
    } | null = null;

    const updateActive = () => {
      const offset = getHeaderOffset() + 32;
      let current = `#${ids[0]}`;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        // Active once section top crosses under the fixed header line
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = `#${id}`;
        }
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    document.addEventListener("scroll", onScrollOrResize, {
      passive: true,
      capture: true,
    });

    // Lenis drives smooth scroll — keep spy in sync with its scroll ticks
    const bindLenis = () => {
      const lenis = window.__hawkLenis;
      if (!lenis) return;
      if (boundLenis === lenis) return;
      if (boundLenis) {
        boundLenis.off("scroll", onScrollOrResize);
      }
      lenis.on("scroll", onScrollOrResize);
      boundLenis = lenis;
    };
    bindLenis();
    const lenisTimer = window.setInterval(bindLenis, 250);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(lenisTimer);
      boundLenis?.off("scroll", onScrollOrResize);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      document.removeEventListener("scroll", onScrollOrResize, true);
    };
  }, [hrefsKey]);

  // Keep highlight in sync if nav href list changes (e.g. locale)
  useEffect(() => {
    const hrefs = hrefsKey ? hrefsKey.split("|") : [];
    if (!hrefs[0]) return;
    setActive((prev) => (hrefs.includes(prev) ? prev : hrefs[0]));
  }, [hrefsKey]);

  const onNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    const el = document.getElementById(href.slice(1));
    if (!el) return;

    e.preventDefault();
    setActive(href);

    const offset = getHeaderOffset();
    const lenis = window.__hawkLenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -offset });
    } else {
      const top = window.scrollY + el.getBoundingClientRect().top - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
    history.pushState(null, "", href);
  };

  return (
    <div
      className={`home_sticky-absolute${noBottomPadding ? " no-bottom-padding" : ""}`}
      aria-label={t.stickyNav.aria}
    >
      <div className="home_sticky-inner">
        <div className="home_sticky-content-links-wr">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`home_sticky-content-link${
                active === link.href ? " is-active" : ""
              }`}
              onClick={(e) => onNavClick(e, link.href)}
            >
              <div>{link.num}</div>
              <div>/</div>
              <div>{link.label}</div>
            </a>
          ))}
        </div>

        <a href="/contact-us" className="home_sticky-content-bottom-wr">
          <div className="home_sticky-content-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={VIDEO.poster}
              style={{ backgroundImage: `url("${VIDEO.poster}")` }}
            >
              <source src={VIDEO.mp4} type="video/mp4" />
              <source src={VIDEO.webm} type="video/webm" />
            </video>
          </div>
          <div className="button">
            <div className="button-text-wr is-home-popup-video">
              <div className="btn-icon-embed">
                <ContactIcon />
              </div>
              <div>{t.stickyNav.cta}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
