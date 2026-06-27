"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import type { Game } from "@/content/games";
import { useLanguage } from "@/components/common/LanguageProvider";

type Props = {
  game: Game;
};

const copy = {
  keyArt: { ko: "키아트", en: "key art", zh: "关键美术图" },
  featured: { ko: "대표작", en: "Featured", zh: "主打" },
  kicker: {
    ko: "/ 대표 게임 · 진행 중인 프로젝트",
    en: "/ featured game · in development",
    zh: "/ 主打游戏 · 开发中项目",
  },
  genre: { ko: "장르", en: "Genre", zh: "类型" },
  platform: { ko: "플랫폼", en: "Platform", zh: "平台" },
  status: { ko: "상태", en: "Status", zh: "状态" },
  studio: { ko: "스튜디오", en: "Studio", zh: "工作室" },
  viewGame: { ko: "게임 보기", en: "View Game", zh: "查看游戏" },
  wishlist: {
    ko: "Steam 위시리스트에 추가",
    en: "Wishlist on Steam",
    zh: "添加到 Steam 愿望单",
  },
  watchTrailer: { ko: "트레일러 보기", en: "Watch Trailer", zh: "观看预告片" },
  pressKit: { ko: "프레스 키트", en: "Press Kit", zh: "媒体资料包" },
};

export default function FeaturedGameSection({ game }: Props) {
  const { tr } = useLanguage();
  return (
    <section className="featured-rev" aria-labelledby="featured-rev">
      <div className="wrap section">
        <Reveal className="fr-grid">
          <div className="fr-img">
            <Image
              src={game.keyVisual}
              alt={`${tr(game.title)} ${tr(copy.keyArt)}`}
              width={1920}
              height={1080}
            />
            <div className="corner">
              {game.icon ? (
                <Image
                  src={game.icon}
                  alt=""
                  aria-hidden="true"
                  width={34}
                  height={34}
                />
              ) : null}
              <span>
                {tr(copy.featured)} · {game.number}
              </span>
            </div>
          </div>
          <div>
            <Kicker>{tr(copy.kicker)}</Kicker>
            <h2
              id="featured-rev"
              className="h-section"
              style={{ margin: "14px 0 18px" }}
            >
              {tr(game.title)}{" "}
              {game.titleItalic && (
                <span className="it serif">{tr(game.titleItalic)}</span>
              )}
            </h2>
            <p className="lede">{tr(game.description)}</p>
            <div className="fr-meta">
              <div>
                <small>{tr(copy.genre)}</small>
                {tr(game.genre)}
              </div>
              <div>
                <small>{tr(copy.platform)}</small>
                {tr(game.platform)}
              </div>
              <div>
                <small>{tr(copy.status)}</small>
                {tr(game.statusLabel)}
              </div>
              <div>
                <small>{tr(copy.studio)}</small>Mongma Studio
              </div>
            </div>
            <div className="fr-cta">
              <Button href={`/games/${game.slug}`}>
                {tr(copy.viewGame)} <Arrow />
              </Button>
              {game.steamUrl && (
                <Button variant="ghost" href={game.steamUrl}>
                  {tr(copy.wishlist)}
                </Button>
              )}
              <Button variant="ghost" href="#trailer-home">
                {tr(copy.watchTrailer)}
              </Button>
              <Button variant="ghost" href="/press">
                {tr(copy.pressKit)}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
