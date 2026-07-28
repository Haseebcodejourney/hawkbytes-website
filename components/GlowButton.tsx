"use client";

import { useEffect, useRef } from "react";

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
    let raf = 0;
    let active = false;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const tick = () => {
      current.x += (target.x - current.x) * 0.2;
      current.y += (target.y - current.y) * 0.2;
      button.style.setProperty("--pointer-x", `${current.x}px`);
      button.style.setProperty("--pointer-y", `${current.y}px`);

      const dx = Math.abs(target.x - current.x);
      const dy = Math.abs(target.y - current.y);
      if (active || dx > 0.15 || dy > 0.15) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const ensureTick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = button.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      button.style.setProperty("--button-glow", "#009FFD");

      if (reduce) {
        button.style.setProperty("--pointer-x", `${target.x}px`);
        button.style.setProperty("--pointer-y", `${target.y}px`);
        return;
      }
      ensureTick();
    };

    const onEnter = () => {
      active = true;
    };

    const onLeave = () => {
      active = false;
    };

    button.addEventListener("pointerenter", onEnter);
    button.addEventListener("pointerleave", onLeave);
    button.addEventListener("pointermove", onMove);

    return () => {
      button.removeEventListener("pointerenter", onEnter);
      button.removeEventListener("pointerleave", onLeave);
      button.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
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
