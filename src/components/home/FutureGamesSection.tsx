"use client";

import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import { futureProjects } from "@/content/games";
import { useLanguage } from "@/components/common/LanguageProvider";

const ACCENT_CLASS: Record<"violet" | "blue" | "green", string> = {
  violet: "rm rm--violet",
  blue: "rm rm--blue",
  green: "rm rm--green",
};

const copy = {
  kicker: {
    ko: "/ 로드맵 · 다음 세계들",
    en: "/ roadmap · next worlds",
    zh: "/ 路线图 · 下一个世界",
  },
  heading: { ko: "더 많은 세계가,", en: "More worlds,", zh: "更多世界，" },
  headingItalic: {
    ko: "그려지고 있습니다.",
    en: "being sketched.",
    zh: "正在勾勒。",
  },
  lead: {
    ko: "몽마 스튜디오는 한 가지 장르에 묶이지 않습니다. 아직 이름 없는 다음 세계들도 천천히 다듬고 있습니다.",
    en: "Mongma Studio is not tied to a single genre. The next unnamed worlds are slowly taking shape.",
    zh: "Mongma Studio 不被单一类型束缚。那些尚未命名的下一个世界，也正在慢慢成形。",
  },
};

export default function FutureGamesSection() {
  const { tr } = useLanguage();
  return (
    <section className="section" aria-labelledby="future-h">
      <div className="wrap">
        <div className="two-col" style={{ marginBottom: 36 }}>
          <div>
            <Kicker>{tr(copy.kicker)}</Kicker>
            <h2
              id="future-h"
              className="h-section"
              style={{ margin: "14px 0 0" }}
            >
              {tr(copy.heading)}{" "}
              <span className="serif italic">{tr(copy.headingItalic)}</span>
            </h2>
          </div>
          <p className="lede">{tr(copy.lead)}</p>
        </div>
        <Reveal className="roadmap">
          {futureProjects.map((p) => (
            <div key={p.id} className={ACCENT_CLASS[p.accent]}>
              <span className="stamp">{tr(p.stamp)}</span>
              <div>
                <span className="mono">{tr(p.label)}</span>
                <h4>{tr(p.title)}</h4>
                <p>{tr(p.description)}</p>
              </div>
              <span className="mono" style={{ color: "var(--ink-mute)" }}>
                {tr(p.footnote)}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
