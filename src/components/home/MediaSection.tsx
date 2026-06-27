"use client";

import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import { site } from "@/content/site";
import { useLanguage } from "@/components/common/LanguageProvider";

const copy = {
  kicker: {
    ko: "/ 트레일러 · 공식 트레일러",
    en: "/ trailer · official trailer",
    zh: "/ 预告片 · 官方预告片",
  },
  headingItalic: { ko: "첫 공개.", en: "First Look.", zh: "初次亮相。" },
  lead: {
    ko: "첫 번째 트레일러. 게임의 분위기와 코어 루프를 짧게 담았습니다.",
    en: "The first trailer, a short look at the game's mood and core loop.",
    zh: "首支预告片，简短展示游戏氛围与核心循环。",
  },
  iframeTitle: {
    ko: "Revenant Survivors 트레일러",
    en: "Revenant Survivors Trailer",
    zh: "Revenant Survivors 预告片",
  },
  watchYouTube: {
    ko: "YouTube에서 보기",
    en: "Watch on YouTube",
    zh: "在 YouTube 观看",
  },
  wishlistSteam: {
    ko: "Steam 위시리스트에 추가",
    en: "Wishlist on Steam",
    zh: "添加到 Steam 愿望单",
  },
};

export default function MediaSection() {
  const { tr } = useLanguage();
  return (
    <section className="section" id="trailer-home">
      <div className="wrap">
        <div className="two-col" style={{ marginBottom: 24 }}>
          <div>
            <Kicker>{tr(copy.kicker)}</Kicker>
            <h2 className="h-section" style={{ margin: "14px 0 0" }}>
              Revenant Survivors —{" "}
              <span className="serif italic">{tr(copy.headingItalic)}</span>
            </h2>
          </div>
          <p className="lede">{tr(copy.lead)}</p>
        </div>
        <Reveal className="trailer-frame">
          <iframe
            src={site.social.youtubeTrailerEmbed}
            title={tr(copy.iframeTitle)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Reveal>
        <div className="trailer-row">
          <Button href={site.social.youtubeTrailer}>
            {tr(copy.watchYouTube)} <Arrow />
          </Button>
          <Button variant="ghost" href={site.social.steamRevenant}>
            {tr(copy.wishlistSteam)}
          </Button>
        </div>
      </div>
    </section>
  );
}
