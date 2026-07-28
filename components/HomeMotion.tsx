"use client";

import { useLayoutEffect } from "react";

/** Smooth scroll-reveal for homepage blocks marked `.anim-appear-on-scroll`. */
export default function HomeMotion() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    if (reduce) {
      getNodes().forEach(reveal);
      document.documentElement.classList.add("motion-ready");
      return;
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

    // Catch scroll restoration / late layout (fonts, images)
    const t1 = window.setTimeout(sync, 50);
    const t2 = window.setTimeout(sync, 300);
    const raf = requestAnimationFrame(() => requestAnimationFrame(sync));

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pageshow", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
