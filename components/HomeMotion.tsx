"use client";

import { useLayoutEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

declare global {
  interface Window {
    __hawkLenis?: Lenis | null;
  }
}

function isAppleWebKitBrowser() {
  const ua = navigator.userAgent;
  // Safari (Mac/iOS) + other Apple WebKit browsers — Lenis + sticky is unreliable here
  const isWebKit = /AppleWebKit/i.test(ua);
  const isChromeFamily = /Chrome|CriOS|Edg|OPR|Firefox|FxiOS/i.test(ua);
  return isWebKit && !isChromeFamily;
}

/**
 * CyberCrest-matching motion:
 * - Lenis smooth scroll (same config as live site; skipped on Safari for sticky/compat)
 * - IntersectionObserver scroll-reveal for `.anim-appear-on-scroll`
 */
export default function HomeMotion() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skipLenis = reduce || isAppleWebKitBrowser();

    const getNodes = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".anim-appear-on-scroll"));

    const reveal = (el: Element) => el.classList.add("is-visible");

    const inView = (el: Element) =>
      el.getBoundingClientRect().top < window.innerHeight * 0.92;

    const sync = () => {
      getNodes().forEach((el) => {
        if (!el.classList.contains("is-visible") && inView(el)) reveal(el);
      });
    };

    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!skipLenis) {
      // Match CyberCrest: duration 1 + exponential easing
      lenis = new Lenis({
        duration: 1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        // Touch devices: avoid fighting native momentum scroll
        syncTouch: false,
      });
      window.__hawkLenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    } else {
      window.__hawkLenis = null;
      document.documentElement.classList.add("native-scroll");
    }

    if (reduce) {
      getNodes().forEach(reveal);
      document.documentElement.classList.add("motion-ready");
      return () => {
        document.documentElement.classList.remove("motion-ready");
        document.documentElement.classList.remove("native-scroll");
        window.__hawkLenis = null;
      };
    }

    sync();
    document.documentElement.classList.add("motion-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -3% 0px" },
    );

    getNodes().forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });

    const onScroll = () => sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("pageshow", onScroll);

    const t1 = window.setTimeout(sync, 50);
    const t2 = window.setTimeout(sync, 300);
    const raf2 = requestAnimationFrame(() => requestAnimationFrame(sync));

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pageshow", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(raf2);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      window.__hawkLenis = null;
      document.documentElement.classList.remove("motion-ready");
      document.documentElement.classList.remove("native-scroll");
    };
  }, []);

  return null;
}
