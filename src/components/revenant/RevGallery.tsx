"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useReveal } from "@/components/common/Reveal";

type Tile = {
  large?: boolean;
  placeholder?: boolean;
  src?: string;
  label?: string;
  borderColor?: string;
  pattern?: boolean;
};

type Props = {
  id: string;
  tiles: Tile[];
  gridStyle?: CSSProperties;
};

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function RevGallery({ id, tiles, gridStyle }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const items = tiles.map((t, i) => ({
    src: t.src ?? null,
    label: t.label ?? `Screenshot · ${pad(i + 1)}`,
  }));

  return (
    <div ref={ref} className="gallery reveal" id={id} style={gridStyle}>
      {tiles.map((t, i) => {
        const cls = [
          "gtile",
          t.large ? "large" : null,
          t.placeholder ? "placeholder" : null,
        ]
          .filter(Boolean)
          .join(" ");
        const style: CSSProperties = {};
        if (t.borderColor) style.borderColor = t.borderColor;
        if (t.pattern) {
          style.backgroundImage =
            "repeating-linear-gradient(45deg, transparent 0 14px, rgba(24,22,18,.05) 14px 16px)";
          style.color = "var(--ink-mute)";
        }
        return (
          <div
            key={i}
            className={cls}
            data-lb={i}
            style={style}
            onClick={() => window.__mongmaLightbox?.open(items, i)}
          >
            {t.src ? (
              <Image
                src={t.src}
                alt={t.label ?? "Gallery image"}
                width={1920}
                height={1080}
              />
            ) : (
              <span>{t.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
