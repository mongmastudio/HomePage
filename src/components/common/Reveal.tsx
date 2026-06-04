"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";

/*
  Hook + wrapper for the original Mongma Studio reveal-on-scroll behavior.

  An IntersectionObserver adds the `.in` class once the element crosses the
  threshold (0.12 in the original CSS), at which point .reveal's transition
  from opacity 0 / translateY(18px) to fully visible plays.

  Two usage forms:
    1. <Reveal>...</Reveal>           — wraps children in a <div class="reveal">
    2. const ref = useReveal();       — attach to any element directly
       <article ref={ref} className="reveal foo">...</article>
*/

export function useReveal<T extends Element = HTMLElement>(
  threshold = 0.12,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

type Props = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  threshold?: number;
};

export default function Reveal({
  className,
  children,
  style,
  threshold = 0.12,
}: Props) {
  const ref = useReveal<HTMLDivElement>(threshold);
  return (
    <div
      ref={ref}
      className={["reveal", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
