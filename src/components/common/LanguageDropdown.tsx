"use client";

import { useEffect, useRef, useState } from "react";
import { languages } from "@/content/i18n";
import { useLanguage } from "./LanguageProvider";

export default function LanguageDropdown() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="dropdown lang"
      data-dd="lang"
      data-open={open ? "true" : "false"}
    >
      <button
        className="lang-toggle"
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
      >
        <span data-lang-current>{t.langLabel}</span>
        <span aria-hidden="true" style={{ marginLeft: 6 }}>
          ▾
        </span>
      </button>
      <div className="dropdown-menu" role="menu">
        <span className="ddm-section">Language</span>
        {languages.map((l) => (
          <a
            key={l.code}
            href="#"
            role="menuitem"
            data-lang={l.code}
            onClick={(e) => {
              e.preventDefault();
              setLang(l.code);
              setOpen(false);
            }}
            aria-current={l.code === lang ? "true" : undefined}
          >
            {l.label} <small>{l.sub}</small>
          </a>
        ))}
      </div>
    </div>
  );
}
