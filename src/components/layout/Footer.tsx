"use client";

import Link from "next/link";
import Logo from "@/components/common/Logo";
import { site } from "@/content/site";
import { footerColumns } from "@/content/navigation";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function Footer() {
  const { tr } = useLanguage();
  return (
    <footer>
      <div className="wrap">
        <div className="brand">
          <Logo variant="footer" />
          <p>{tr(site.footerNote)}</p>
          <p className="mono" style={{ color: "var(--ink-mute)" }}>
            {site.email.display}
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={tr(col.heading)} className="fcol">
            <h5>{tr(col.heading)}</h5>
            {col.links.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.href + tr(link.label)}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tr(link.label)}
                </a>
              ) : link.href.startsWith("#") ? (
                <a key={link.href + tr(link.label)} href={link.href}>
                  {tr(link.label)}
                </a>
              ) : (
                <Link key={link.href + tr(link.label)} href={link.href}>
                  {tr(link.label)}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
      <div className="foot-bot wrap" style={{ padding: 0 }}>
        <span>{tr(site.copyright)}</span>
        <span style={{ whiteSpace: "nowrap" }}>{tr(site.madeBy)}</span>
      </div>
    </footer>
  );
}
