"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import chroma from "chroma-js";

export default function GlowButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = btnRef.current;
    if (!button) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (reduce) {
        button.style.setProperty("--pointer-x", `${x}px`);
        button.style.setProperty("--pointer-y", `${y}px`);
        return;
      }

      // Same GSAP + chroma-js glow as CyberCrest
      gsap.to(button, {
        "--pointer-x": `${x}px`,
        "--pointer-y": `${y}px`,
        duration: 0.6,
      });

      const start =
        getComputedStyle(button).getPropertyValue("--button-glow-start").trim() ||
        "#a960ee";
      const end =
        getComputedStyle(button).getPropertyValue("--button-glow-end").trim() ||
        "#009ffd";

      gsap.to(button, {
        "--button-glow": chroma.mix(start, end, x / Math.max(rect.width, 1)).hex(),
        duration: 0.2,
      });
    };

    button.addEventListener("pointermove", onMove);
    return () => button.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <a ref={btnRef} href={href} className="button-glow">
      <div className="button-glow-text-wr">
        <div>{children}</div>
      </div>
      <div className="gradient" aria-hidden="true" />
    </a>
  );
}
