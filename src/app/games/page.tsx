import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import GameCard from "@/components/games/GameCard";
import { games } from "@/content/games";

export default function GamesPage() {
  return (
    <main id="page-games" data-screen-label="02 Games">
      <section className="page-header wrap">
        <Kicker>/ games · 게임</Kicker>
        <h1 className="h-display">
          A growing shelf of{" "}
          <span className="it">worlds &amp; experiments.</span>
        </h1>
        <p className="lede" style={{ marginTop: 14 }}>
          Mongma Studio가 만들고 있는, 또는 만들 예정인 게임들. 지금은 단 한
          편이지만, 곧 더 많은 세계가 이 선반에 오릅니다.
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
            <Kicker style={{ color: "#bdb29a" }}>/ keep watching</Kicker>
            <h2 style={{ marginTop: 14 }}>
              More games{" "}
              <span
                className="serif italic"
                style={{ color: "var(--yellow)" }}
              >
                will live here.
              </span>
            </h2>
          </div>
          <div className="ccrow">
            <Button href="https://discord.gg/Gz2CtFPYBK">Join Discord</Button>
            <Button href="/support">Support the studio</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
