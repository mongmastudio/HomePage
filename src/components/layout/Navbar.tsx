"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/common/Logo";
import LanguageDropdown from "@/components/common/LanguageDropdown";
import Arrow from "@/components/common/Arrow";
import { useMobileMenu } from "@/components/common/MobileMenuController";
import { useLanguage } from "@/components/common/LanguageProvider";
import { primaryNav } from "@/content/navigation";
import { site } from "@/content/site";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { toggle } = useMobileMenu();
  const [openGames, setOpenGames] = useState(false);
  const gamesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!gamesRef.current?.contains(e.target as Node)) setOpenGames(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenGames(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // close menu when navigating
  useEffect(() => {
    setOpenGames(false);
  }, [pathname]);

  return (
    <header className="nav" role="banner">
      <div className="nav-inner">
        <Logo variant="nav" />

        <nav className="nav-links" aria-label="Primary">
          {primaryNav.map((g) =>
            g.type === "link" ? (
              <Link
                key={g.href}
                href={g.href!}
                data-route={g.route}
                className={pathname === g.href ? "active" : undefined}
              >
                {g.label === "Home"
                  ? t.navHome
                  : g.label === "Press Kit"
                    ? t.navPress
                    : g.label === "Support"
                      ? t.navSupport
                      : g.label === "Contact"
                        ? t.navContact
                        : g.label}
              </Link>
            ) : (
              <div
                key={g.label}
                ref={gamesRef}
                className="dropdown"
                data-dd="games"
                data-open={openGames ? "true" : "false"}
                onMouseEnter={() => {
                  if (matchMedia("(hover:hover)").matches) setOpenGames(true);
                }}
                onMouseLeave={() => {
                  if (matchMedia("(hover:hover)").matches) setOpenGames(false);
                }}
              >
                <button
                  className="nl"
                  aria-haspopup="true"
                  aria-expanded={openGames ? "true" : "false"}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenGames((v) => !v);
                  }}
                >
                  {t.navGames}{" "}
                  <span
                    aria-hidden="true"
                    style={{ marginLeft: 6, fontSize: ".7em" }}
                  >
                    ▾
                  </span>
                </button>
                <div className="dropdown-menu" role="menu">
                  <span className="ddm-section">Games</span>
                  {g.menu?.map((m, i) => (
                    <Link key={i} href={m.href} role="menuitem">
                      {m.label} <small>{m.small}</small>
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}
        </nav>

        <div className="nav-right">
          <LanguageDropdown />
          <a
            className="btn"
            href={site.social.steamRevenant}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.navCta} <Arrow />
          </a>
          <button
            className="nav-burger"
            aria-label="Open menu"
            onClick={toggle}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
