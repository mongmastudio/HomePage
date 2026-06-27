"use client";

import { useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/common/Logo";
import Arrow from "@/components/common/Arrow";
import { useMobileMenu } from "@/components/common/MobileMenuController";
import { useLanguage } from "@/components/common/LanguageProvider";
import { languages } from "@/content/i18n";
import { mobileNav, navCta } from "@/content/navigation";
import { site } from "@/content/site";

const copy = {
  close: { ko: "닫기", en: "Close", zh: "关闭" },
  language: { ko: "언어", en: "Language", zh: "语言" },
};

export default function MobileMenu() {
  const { open, setOpen, toggle } = useMobileMenu();
  const { lang, setLang, tr } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  return (
    <div
      className="mobile-menu"
      data-mobile-menu
      data-open={open ? "true" : "false"}
      aria-hidden={open ? "false" : "true"}
    >
      <div className="mm-top">
        <Logo variant="mobile-menu" />
        <button className="nav-burger" onClick={toggle}>
          {tr(copy.close)}
        </button>
      </div>
      <nav>
        {mobileNav.map((m, i) => {
          if (m.kind === "link") {
            return (
              <Link key={`l-${i}`} href={m.href}>
                {tr(m.label)}
              </Link>
            );
          }
          return (
            <Fragment key={`s-${i}`}>
              <div className="mm-section">{tr(m.label)}</div>
              <div className="mm-sub">
                {m.subItems.map((s, j) => (
                  <Link key={j} href={s.href}>
                    {tr(s.label)}
                  </Link>
                ))}
              </div>
            </Fragment>
          );
        })}
      </nav>
      <div className="mm-bottom">
        <span className="mono">{tr(copy.language)}</span>
        <div className="mm-langs">
          {languages.map((l) => (
            <button
              key={l.code}
              data-lang={l.code}
              aria-pressed={l.code === lang ? "true" : "false"}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <a
          className="btn"
          href={site.social.steamRevenant}
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr(navCta)} <Arrow />
        </a>
      </div>
    </div>
  );
}
