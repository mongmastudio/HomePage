"use client";

import type { CSSProperties } from "react";
import Kicker from "@/components/common/Kicker";
import Arrow from "@/components/common/Arrow";
import {
  communityChannels,
  type NavLink,
} from "@/content/navigation";
import { useLanguage } from "@/components/common/LanguageProvider";

const copy = {
  aria: { ko: "커뮤니티 채널", en: "Community channels", zh: "社区频道" },
  kicker: {
    ko: "/ 커뮤니티 · 커뮤니티",
    en: "/ community · community",
    zh: "/ 社区 · 社区",
  },
  headingBefore: { ko: "우리를 만나보세요", en: "Find us", zh: "找到我们" },
  headingItalic: { ko: "웹 곳곳에서.", en: "around the web.", zh: "在网络各处。" },
  lead: {
    ko: "아이콘 없이, 글자 그대로의 채널들. 보고 싶은 곳에서 편하게 찾아와 주세요.",
    en: "No icons, just channels in plain text. Find us wherever you like.",
    zh: "没有图标，只有文字频道。请在你喜欢的平台找到我们。",
  },
};

type Props = {
  variant?: "studio" | "revenant" | "contact";
  ariaLabel?: string;
  channels?: NavLink[];
  listStyle?: CSSProperties;
  linkStyle?: CSSProperties;
};

export default function CommunitySection({
  variant = "studio",
  ariaLabel = "Community channels",
  channels = communityChannels,
  listStyle,
  linkStyle,
}: Props) {
  const { tr } = useLanguage();
  if (variant === "studio") {
    return (
      <section className="section" aria-labelledby="community-h">
        <div className="wrap">
          <div className="community">
            <div>
              <Kicker>{tr(copy.kicker)}</Kicker>
              <h2
                id="community-h"
                className="h-section"
                style={{ margin: "14px 0 14px" }}
              >
                {tr(copy.headingBefore)}{" "}
                <span className="serif italic">{tr(copy.headingItalic)}</span>
              </h2>
              <p className="lede">{tr(copy.lead)}</p>
            </div>
            <nav className="community-list" aria-label={tr(copy.aria)}>
              {channels.map((c) => (
                <a
                  key={c.href + tr(c.label)}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tr(c.label)} <Arrow />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>
    );
  }

  return (
    <nav className="community-list" aria-label={ariaLabel} style={listStyle}>
      {channels.map((c) => (
        <a
          key={c.href + tr(c.label)}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          {tr(c.label)} <Arrow />
        </a>
      ))}
    </nav>
  );
}
