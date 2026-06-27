"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Sticker from "@/components/common/Sticker";
import Arrow from "@/components/common/Arrow";
import { heroCopy, heroStickers } from "@/content/home";
import { games } from "@/content/games";
import { site } from "@/content/site";
import { useLanguage } from "@/components/common/LanguageProvider";

const copy = {
  cta1: { ko: "게임 보기", en: "View Our Games", zh: "查看我们的游戏" },
  cta2: {
    ko: "Revenant Survivors 보기",
    en: "View Revenant Survivors",
    zh: "查看 Revenant Survivors",
  },
  cta3: {
    ko: "Steam 위시리스트에 추가",
    en: "Wishlist on Steam",
    zh: "添加到 Steam 愿望单",
  },
  kvMeta: {
    ko: "대표 게임 · No.01",
    en: "Featured Game · No.01",
    zh: "主打游戏 · No.01",
  },
  kvAlt: {
    ko: "Revenant Survivors 키 비주얼",
    en: "Revenant Survivors key visual",
    zh: "Revenant Survivors 主视觉图",
  },
  studioMark: { ko: "스튜디오 마크", en: "Studio Mark", zh: "工作室标志" },
};

export default function HeroSection() {
  const { tr } = useLanguage();
  const revenant = games.find((g) => g.id === "revenant-survivors");

  return (
    <section className="hero wrap" aria-labelledby="hero-h1">
      <div className="hero-bgword" aria-hidden="true">
        mongma
      </div>
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-stickers">
            {heroStickers.map((s, i) =>
              s.accent === "yellow" ? (
                <Sticker
                  key={i}
                  style={{
                    background: "var(--yellow)",
                    transform: "rotate(2deg)",
                  }}
                >
                  {tr(s.label)}
                </Sticker>
              ) : (
                <Sticker key={i}>{tr(s.label)}</Sticker>
              ),
            )}
          </div>
          <h1 id="hero-h1" className="h-display">
            {tr(heroCopy.headlineLine1)}
            <br />
            <span className="it">{tr(heroCopy.headlineLine2Italic)}</span>
            <br />
            {tr(heroCopy.headlineLine3)}
          </h1>
          <p className="lede" style={{ marginTop: 18 }}>
            {tr(heroCopy.lede)}
          </p>
          <div className="hero-cta-row">
            <Button href="/games">
              {tr(copy.cta1)} <Arrow />
            </Button>
            <Button variant="ghost" href="/games/revenant-survivors">
              {tr(copy.cta2)}
            </Button>
            <Button variant="accent" href={site.social.steamRevenant}>
              {tr(copy.cta3)}
            </Button>
          </div>
        </div>

        <div className="hero-collage" aria-hidden="false">
          <div className="hero-card kv float">
            <div className="meta">
              <span>{tr(copy.kvMeta)}</span>
              <span>1920×1080</span>
            </div>
            <Image
              className="kv-img"
              src={revenant?.keyVisual ?? "/assets/revenant-survivors-key-visual.png"}
              alt={tr(copy.kvAlt)}
              width={1920}
              height={1080}
            />
          </div>
          <div className="hero-card logo">
            <div className="meta">
              <span>{tr(copy.studioMark)}</span>
              <span>Mongma · 몽마</span>
            </div>
            <Image
              src={site.logo}
              alt="Mongma Studio Logo"
              width={1024}
              height={1024}
            />
          </div>
          <div className="hero-card note float float--b">
            <span className="mono">{tr(heroCopy.noteLabel)}</span>
            <p>{tr(heroCopy.noteBody)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
