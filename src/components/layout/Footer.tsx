import Link from "next/link";
import Logo from "@/components/common/Logo";
import { site } from "@/content/site";
import { footerColumns } from "@/content/navigation";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="brand">
          <Logo variant="footer" />
          <p>{site.footerNote}</p>
          <p className="mono" style={{ color: "var(--ink-mute)" }}>
            {site.email.display}
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.heading} className="fcol">
            <h5>{col.heading}</h5>
            {col.links.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : link.href.startsWith("#") ? (
                <a key={link.href + link.label} href={link.href}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
      <div className="foot-bot wrap" style={{ padding: 0 }}>
        <span>{site.copyright}</span>
        <span style={{ whiteSpace: "nowrap" }}>{site.madeBy}</span>
      </div>
    </footer>
  );
}
