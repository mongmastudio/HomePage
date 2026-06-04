import type { CSSProperties } from "react";
import Kicker from "@/components/common/Kicker";
import Arrow from "@/components/common/Arrow";
import {
  communityChannels,
  type NavLink,
} from "@/content/navigation";

type Props = {
  variant?: "studio" | "revenant" | "contact";
  ariaLabel?: string;
  kicker?: string;
  headlineBefore?: string;
  headlineItalic?: string;
  headlineAfter?: string;
  lede?: string;
  channels?: NavLink[];
  listStyle?: CSSProperties;
  linkStyle?: CSSProperties;
};

export default function CommunitySection({
  variant = "studio",
  ariaLabel = "Community channels",
  kicker = "/ community · 커뮤니티",
  headlineBefore = "Find us",
  headlineItalic = "around the web.",
  headlineAfter,
  lede = "아이콘 없이, 글자 그대로의 채널들. 보고 싶은 곳에서 만나요.",
  channels = communityChannels,
  listStyle,
  linkStyle,
}: Props) {
  if (variant === "studio") {
    return (
      <section className="section" aria-labelledby="community-h">
        <div className="wrap">
          <div className="community">
            <div>
              <Kicker>{kicker}</Kicker>
              <h2
                id="community-h"
                className="h-section"
                style={{ margin: "14px 0 14px" }}
              >
                {headlineBefore}{" "}
                <span className="serif italic">{headlineItalic}</span>
                {headlineAfter}
              </h2>
              <p className="lede">{lede}</p>
            </div>
            <nav className="community-list" aria-label={ariaLabel}>
              {channels.map((c) => (
                <a
                  key={c.href + c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.label} <Arrow />
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
          key={c.href + c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          {c.label} <Arrow />
        </a>
      ))}
    </nav>
  );
}
