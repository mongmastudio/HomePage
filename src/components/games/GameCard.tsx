"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Arrow from "@/components/common/Arrow";
import { useReveal } from "@/components/common/Reveal";
import { useLanguage } from "@/components/common/LanguageProvider";
import type { Game } from "@/content/games";

type Props = { game: Game };

const copy = {
  future: { ko: "미래", en: "Future", zh: "未来" },
  lab: { ko: "실험실", en: "Lab", zh: "实验室" },
  comingLater: { ko: "추후 공개", en: "Coming Later", zh: "稍后公开" },
  keyArt: { ko: "키아트", en: "key art", zh: "关键美术图" },
  viewGame: { ko: "게임 보기", en: "View Game", zh: "查看游戏" },
  trailer: { ko: "트레일러", en: "Trailer", zh: "预告片" },
};

export default function GameCard({ game }: Props) {
  const ref = useReveal<HTMLElement>();
  const { tr } = useLanguage();

  if (game.isPlaceholder) {
    return (
      <article ref={ref} className="gcard placeholder reveal">
        <div className="art">{tr(game.placeholderLabel ?? game.title)}</div>
        <div className="body">
          <Kicker>{`${game.number} · ${game.status === "coming-soon" ? tr(copy.future) : tr(copy.lab)}`}</Kicker>
          <h3>{tr(game.title)}</h3>
          <div className="gmeta">
            {game.tags.map((t) => (
              <span key={t.en}>{tr(t)}</span>
            ))}
          </div>
          <p>{tr(game.shortDescription)}</p>
          <div className="row">
            <button className="btn btn--sm btn--ghost" disabled>
              {tr(copy.comingLater)}
            </button>
          </div>
        </div>
      </article>
    );
  }

  const fullTitle = game.titleItalic
    ? `${tr(game.title)} ${tr(game.titleItalic)}`
    : tr(game.title);

  return (
    <article ref={ref} className="gcard reveal">
      <div className="art">
        <Image
          src={game.keyVisual}
          alt={`${fullTitle} ${tr(copy.keyArt)}`}
          width={1920}
          height={1080}
        />
      </div>
      <div className="body">
        <Kicker>{`${game.number} · ${tr(game.statusLabel).split(" · ")[0]}`}</Kicker>
        <h3>{fullTitle}</h3>
        <div className="gmeta">
          {game.tags.slice(0, 3).map((t) => (
            <span key={t.en}>{tr(t)}</span>
          ))}
        </div>
        <p>{tr(game.shortDescription)}</p>
        <div className="row">
          <Button size="sm" href={`/games/${game.slug}`}>
            {tr(copy.viewGame)} <Arrow />
          </Button>
          {game.steamUrl && (
            <Button variant="ghost" size="sm" href={game.steamUrl}>
              Steam
            </Button>
          )}
          {game.youtubeUrl && (
            <Button variant="ghost" size="sm" href={game.youtubeUrl}>
              {tr(copy.trailer)}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
