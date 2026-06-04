"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Arrow from "@/components/common/Arrow";
import { useReveal } from "@/components/common/Reveal";
import type { Game } from "@/content/games";

type Props = { game: Game };

export default function GameCard({ game }: Props) {
  const ref = useReveal<HTMLElement>();

  if (game.isPlaceholder) {
    return (
      <article ref={ref} className="gcard placeholder reveal">
        <div className="art">{game.placeholderLabel ?? game.title}</div>
        <div className="body">
          <Kicker>{`${game.number} · ${game.status === "coming-soon" ? "Future" : "Lab"}`}</Kicker>
          <h3>{game.title}</h3>
          <div className="gmeta">
            {game.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <p>{game.shortDescription}</p>
          <div className="row">
            <button className="btn btn--sm btn--ghost" disabled>
              Coming Later
            </button>
          </div>
        </div>
      </article>
    );
  }

  const fullTitle = game.titleItalic
    ? `${game.title} ${game.titleItalic}`
    : game.title;

  return (
    <article ref={ref} className="gcard reveal">
      <div className="art">
        <Image
          src={game.keyVisual}
          alt={`${fullTitle} key art`}
          width={1920}
          height={1080}
        />
      </div>
      <div className="body">
        <Kicker>{`${game.number} · ${game.statusLabel.split(" · ")[0]}`}</Kicker>
        <h3>{fullTitle}</h3>
        <div className="gmeta">
          {game.tags.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <p>{game.shortDescription}</p>
        <div className="row">
          <Button size="sm" href={`/games/${game.slug}`}>
            View Game <Arrow />
          </Button>
          {game.steamUrl && (
            <Button variant="ghost" size="sm" href={game.steamUrl}>
              Steam
            </Button>
          )}
          {game.youtubeUrl && (
            <Button variant="ghost" size="sm" href={game.youtubeUrl}>
              Trailer
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
