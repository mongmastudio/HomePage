import Image from "next/image";
import Button from "@/components/common/Button";
import Sticker from "@/components/common/Sticker";
import Arrow from "@/components/common/Arrow";
import { heroCopy, heroStickers } from "@/content/home";
import { games } from "@/content/games";
import { site } from "@/content/site";

export default function HeroSection() {
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
                  {s.label}
                </Sticker>
              ) : (
                <Sticker key={i}>{s.label}</Sticker>
              ),
            )}
          </div>
          <h1 id="hero-h1" className="h-display">
            {heroCopy.headlineLine1}
            <br />
            <span className="it">{heroCopy.headlineLine2Italic}</span>
            <br />
            {heroCopy.headlineLine3}
          </h1>
          <p className="lede" style={{ marginTop: 18 }}>
            {heroCopy.lede}
          </p>
          <div className="hero-cta-row">
            <Button href="/games">
              View Our Games <Arrow />
            </Button>
            <Button variant="ghost" href="/games/revenant-survivors">
              View Revenant Survivors
            </Button>
            <Button variant="accent" href={site.social.steamRevenant}>
              Wishlist on Steam
            </Button>
          </div>
        </div>

        <div className="hero-collage" aria-hidden="false">
          <div className="hero-card kv float">
            <div className="meta">
              <span>Featured Game · No.01</span>
              <span>1920×1080</span>
            </div>
            <Image
              className="kv-img"
              src={revenant?.keyVisual ?? "/assets/revenant-survivors-key-visual.png"}
              alt="Revenant Survivors key visual"
              width={1920}
              height={1080}
            />
          </div>
          <div className="hero-card logo">
            <div className="meta">
              <span>Studio Mark</span>
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
            <span className="mono">{heroCopy.noteLabel}</span>
            <p>{heroCopy.noteBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
