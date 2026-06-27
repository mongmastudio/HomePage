"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/components/common/LanguageProvider";

type Item = { src: string | null; label: string };

const copy = {
  viewer: { ko: "이미지 뷰어", en: "Image viewer", zh: "图片查看器" },
  close: { ko: "닫기", en: "Close", zh: "关闭" },
  closeLabel: { ko: "닫기 ✕", en: "Close ✕", zh: "关闭 ✕" },
  prev: { ko: "이전", en: "Previous", zh: "上一张" },
  prevLabel: { ko: "← 이전", en: "← Prev", zh: "← 上一张" },
  next: { ko: "다음", en: "Next", zh: "下一张" },
  nextLabel: { ko: "다음 →", en: "Next →", zh: "下一张 →" },
};

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
  const { tr } = useLanguage();
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
      aria-label={tr(copy.viewer)}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button className="lb-close" aria-label={tr(copy.close)} onClick={close}>
        {tr(copy.closeLabel)}
      </button>
      <button
        className="lb-prev"
        aria-label={tr(copy.prev)}
        onClick={() => step(-1)}
      >
        {tr(copy.prevLabel)}
      </button>
      <button className="lb-next" aria-label={tr(copy.next)} onClick={() => step(1)}>
        {tr(copy.nextLabel)}
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {current?.src ? <img alt={current.label ?? ""} src={current.src} /> : null}
      <div className="lb-counter">{counter}</div>
    </div>
  );
}
