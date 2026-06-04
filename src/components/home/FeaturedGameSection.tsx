import Image from "next/image";
import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import type { Game } from "@/content/games";

type Props = {
  game: Game;
};

export default function FeaturedGameSection({ game }: Props) {
  return (
    <section className="featured-rev" aria-labelledby="featured-rev">
      <div className="wrap section">
        <Reveal className="fr-grid">
          <div className="fr-img">
            <Image
              src={game.keyVisual}
              alt={`${game.title} key art`}
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
              <span>Featured · {game.number}</span>
            </div>
          </div>
          <div>
            <Kicker>/ featured game · 진행 중인 프로젝트</Kicker>
            <h2
              id="featured-rev"
              className="h-section"
              style={{ margin: "14px 0 18px" }}
            >
              {game.title}{" "}
              {game.titleItalic && (
                <span className="it serif">{game.titleItalic}</span>
              )}
            </h2>
            <p className="lede">{game.description}</p>
            <div className="fr-meta">
              <div>
                <small>Genre</small>
                {game.genre}
              </div>
              <div>
                <small>Platform</small>
                {game.platform}
              </div>
              <div>
                <small>Status</small>
                {game.statusLabel}
              </div>
              <div>
                <small>Studio</small>Mongma Studio
              </div>
            </div>
            <div className="fr-cta">
              <Button href={`/games/${game.slug}`}>
                View Game <Arrow />
              </Button>
              {game.steamUrl && (
                <Button variant="ghost" href={game.steamUrl}>
                  Wishlist on Steam
                </Button>
              )}
              <Button variant="ghost" href="#trailer-home">
                Watch Trailer
              </Button>
              <Button variant="ghost" href="/press">
                Press Kit
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
