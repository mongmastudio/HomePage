import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import { site } from "@/content/site";

export default function MediaSection() {
  return (
    <section className="section" id="trailer-home">
      <div className="wrap">
        <div className="two-col" style={{ marginBottom: 24 }}>
          <div>
            <Kicker>/ trailer · 공식 트레일러</Kicker>
            <h2 className="h-section" style={{ margin: "14px 0 0" }}>
              Revenant Survivors —{" "}
              <span className="serif italic">First Look.</span>
            </h2>
          </div>
          <p className="lede">
            첫 번째 트레일러. 게임의 분위기와 코어 루프를 짧게 담았습니다.
          </p>
        </div>
        <Reveal className="trailer-frame">
          <iframe
            src={site.social.youtubeTrailerEmbed}
            title="Revenant Survivors Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Reveal>
        <div className="trailer-row">
          <Button href={site.social.youtubeTrailer}>
            Watch on YouTube <Arrow />
          </Button>
          <Button variant="ghost" href={site.social.steamRevenant}>
            Wishlist on Steam
          </Button>
        </div>
      </div>
    </section>
  );
}
