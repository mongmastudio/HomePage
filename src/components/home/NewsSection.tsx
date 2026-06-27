"use client";

import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import { newsItems } from "@/content/home";
import { useLanguage } from "@/components/common/LanguageProvider";

const copy = {
  kicker: {
    ko: "/ 소식 · 새 소식",
    en: "/ news · updates",
    zh: "/ 新闻 · 最新消息",
  },
  heading: {
    ko: "현장 기록과 업데이트",
    en: "Field notes & updates",
    zh: "现场笔记与更新",
  },
  lead: {
    ko: "스튜디오에서 일어나는 작은 일들. 데모, 개발 노트, 공개 소식을 모아둡니다.",
    en: "Small things happening in the studio: demos, dev notes, and announcements.",
    zh: "工作室里发生的小事：试玩版、开发笔记与公告。",
  },
};

export default function NewsSection() {
  const { tr } = useLanguage();
  return (
    <section className="section" aria-labelledby="news-h">
      <div className="wrap">
        <div className="two-col" style={{ marginBottom: 28 }}>
          <div>
            <Kicker>{tr(copy.kicker)}</Kicker>
            <h2
              id="news-h"
              className="h-section"
              style={{ margin: "14px 0 0" }}
            >
              {tr(copy.heading)}
            </h2>
          </div>
          <p className="lede">{tr(copy.lead)}</p>
        </div>
        <Reveal className="news-grid">
          {newsItems.map((n, i) => {
            const styleFor =
              n.accent === "yellow"
                ? {
                    background:
                      "color-mix(in oklab, var(--yellow) 35%, var(--paper))",
                  }
                : n.accent === "blue"
                  ? {
                      background:
                        "color-mix(in oklab, var(--blue) 18%, var(--paper))",
                    }
                  : undefined;
            return (
              <article key={i} className="news-card" style={styleFor}>
                <span className="date">{tr(n.date)}</span>
                <h4>{tr(n.title)}</h4>
                <p>{tr(n.body)}</p>
                <span className="more">{tr(n.more)}</span>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
