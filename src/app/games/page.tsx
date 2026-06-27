"use client";

import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import GameCard from "@/components/games/GameCard";
import { games } from "@/content/games";
import { useLanguage } from "@/components/common/LanguageProvider";

const copy = {
  kicker: { ko: "/ 게임 · 게임", en: "/ games · games", zh: "/ 游戏 · 游戏" },
  h1: {
    ko: "점점 채워지는",
    en: "A growing shelf of",
    zh: "一个不断增长的架子，陈列着",
  },
  h1Italic: {
    ko: "세계와 실험들.",
    en: "worlds & experiments.",
    zh: "世界与实验。",
  },
  lead: {
    ko: "Mongma Studio가 만들고 있거나 앞으로 만들 예정인 게임들을 모았습니다.",
    en: "A collection of games Mongma Studio is building, or plans to build.",
    zh: "这里收集了 Mongma Studio 正在制作或计划制作的游戏。",
  },
  ctaKicker: {
    ko: "/ 계속 지켜봐 주세요",
    en: "/ keep watching",
    zh: "/ 敬请关注",
  },
  ctaH2: { ko: "더 많은 게임이", en: "More games", zh: "更多游戏" },
  ctaH2Italic: {
    ko: "이곳에 채워질 예정입니다.",
    en: "will live here.",
    zh: "将在这里出现。",
  },
  joinDiscord: { ko: "Discord 참여하기", en: "Join Discord", zh: "加入 Discord" },
  support: { ko: "스튜디오 지원하기", en: "Support the studio", zh: "支持工作室" },
};

export default function GamesPage() {
  const { tr } = useLanguage();
  return (
    <main id="page-games" data-screen-label="02 Games">
      <section className="page-header wrap">
        <Kicker>{tr(copy.kicker)}</Kicker>
        <h1 className="h-display">
          {tr(copy.h1)}{" "}
          <span className="it">{tr(copy.h1Italic)}</span>
        </h1>
        <p className="lede" style={{ marginTop: 14 }}>
          {tr(copy.lead)}
        </p>
      </section>

      <section className="wrap">
        <div className="games-grid">
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <div className="wrap">
          <div>
            <Kicker style={{ color: "#bdb29a" }}>{tr(copy.ctaKicker)}</Kicker>
            <h2 style={{ marginTop: 14 }}>
              {tr(copy.ctaH2)}{" "}
              <span
                className="serif italic"
                style={{ color: "var(--yellow)" }}
              >
                {tr(copy.ctaH2Italic)}
              </span>
            </h2>
          </div>
          <div className="ccrow">
            <Button href="https://discord.gg/Gz2CtFPYBK">
              {tr(copy.joinDiscord)}
            </Button>
            <Button href="/support">{tr(copy.support)}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
