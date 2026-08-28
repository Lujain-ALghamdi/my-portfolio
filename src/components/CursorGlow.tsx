"use client";

import { useEffect, useRef } from "react";

/**
 * A soft purple radial light that trails the mouse pointer. Purely decorative:
 * the native cursor is left alone, the layer never intercepts pointer events,
 * and it renders nothing meaningful on touch / coarse-pointer devices or when
 * the visitor prefers reduced motion (it then snaps instead of easing).
 */
const INTERACTIVE = 'a, button, input, textarea, select, summary, [role="button"], .glass-card';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let active = false;

    const render = () => {
      el.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    };

    const tick = () => {
      const ease = reduceMotion.matches ? 1 : 0.2;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      render();
      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!active) {
        active = true;
        el.classList.add("is-active");
      }

      const over = e.target instanceof Element && e.target.closest(INTERACTIVE);
      el.classList.toggle("is-hot", Boolean(over));

      if (reduceMotion.matches) {
        x = targetX;
        y = targetY;
        render();
        return;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    render();
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
