"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { useLanguage } from "@/components/common/LanguageProvider";

type Variant = "nav" | "mobile-menu" | "footer";

type Props = {
  variant?: Variant;
};

const copy = {
  home: { ko: "홈", en: "Home", zh: "首页" },
};

/*
  Display dimensions match the original Mongma Studio.html inline styles:
    - nav         : 100×58  (inline style on the <img>)
    - footer      : 80×100  (inline style on the <img>)
    - mobile-menu : no inline style → CSS .nav-logo img{height:38px;width:auto}
                                       (1024×1024 source → renders 38×38)

  The source PNG is 1024×1024; nav/footer aspect distortion is part of the
  original visual design and is preserved verbatim.
*/

export default function Logo({ variant = "nav" }: Props) {
  const { tr } = useLanguage();
  if (variant === "footer") {
    return (
      <Image
        src={site.logo}
        alt={site.studioName}
        width={80}
        height={100}
        style={{ width: 80, height: 100 }}
      />
    );
  }

  const isMobile = variant === "mobile-menu";

  return (
    <Link
      className="nav-logo"
      href="/"
      aria-label={`${site.studioName} — ${tr(copy.home)}`}
    >
      <Image
        src={site.logo}
        alt={site.studioName}
        width={100}
        height={58}
        priority={!isMobile}
        style={isMobile ? undefined : { width: 100, height: 58 }}
      />
      {isMobile ? (
        <span className="nl-text">
          <strong>Mongma</strong>Studio
        </span>
      ) : (
        <span className="nl-text">{"Mongma\nSTUDIO "}</span>
      )}
    </Link>
  );
}
