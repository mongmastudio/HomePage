"use client";

import { useCallback, useEffect, useState } from "react";

type Item = { src: string | null; label: string };

declare global {
  interface Window {
    __mongmaLightbox?: {
      open: (items: Item[], idx: number) => void;
    };
  }
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/*
  Singleton lightbox mirroring the original gallery viewer. Gallery
  components register themselves via `window.__mongmaLightbox.open(items, idx)`,
  matching the original's global click delegation on `.gtile[data-lb]`.
*/
export default function Lightbox() {
  const [items, setItems] = useState<Item[]>([]);
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const step = useCallback(
    (d: number) => {
      if (items.length === 0) return;
      setIdx((i) => (i + d + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    window.__mongmaLightbox = {
      open: (newItems, newIdx) => {
        setItems(newItems);
        setIdx(newIdx);
        setOpen(true);
      },
    };
    return () => {
      delete window.__mongmaLightbox;
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  const current = items[idx];
  const counter = items.length
    ? `${pad(idx + 1)} / ${pad(items.length)} · ${current?.label ?? ""}`
    : "";

  return (
    <div
      className="lightbox"
      data-lb-root
      data-open={open ? "true" : "false"}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button className="lb-close" aria-label="Close" onClick={close}>
        Close ✕
      </button>
      <button
        className="lb-prev"
        aria-label="Previous"
        onClick={() => step(-1)}
      >
        ← Prev
      </button>
      <button className="lb-next" aria-label="Next" onClick={() => step(1)}>
        Next →
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {current?.src ? <img alt={current.label ?? ""} src={current.src} /> : null}
      <div className="lb-counter">{counter}</div>
    </div>
  );
}
