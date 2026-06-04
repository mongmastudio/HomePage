"use client";

import { useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/common/Logo";
import Arrow from "@/components/common/Arrow";
import { useMobileMenu } from "@/components/common/MobileMenuController";
import { useLanguage } from "@/components/common/LanguageProvider";
import { languages } from "@/content/i18n";
import { mobileNav } from "@/content/navigation";
import { site } from "@/content/site";

export default function MobileMenu() {
  const { open, setOpen, toggle } = useMobileMenu();
  const { lang, setLang, t } = useLanguage();
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
          Close
        </button>
      </div>
      <nav>
        {mobileNav.map((m, i) => {
          if (m.kind === "link") {
            return (
              <Link key={`l-${i}`} href={m.href}>
                {m.label}
              </Link>
            );
          }
          return (
            <Fragment key={`s-${i}`}>
              <div className="mm-section">{m.label}</div>
              <div className="mm-sub">
                {m.subItems.map((s, j) => (
                  <Link key={j} href={s.href}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </Fragment>
          );
        })}
      </nav>
      <div className="mm-bottom">
        <span className="mono">Language · 언어</span>
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
          {t.navCta} <Arrow />
        </a>
      </div>
    </div>
  );
}
