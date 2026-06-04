import Image from "next/image";
import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import RevGallery from "@/components/revenant/RevGallery";
import CommunitySection from "@/components/home/CommunitySection";
import { games } from "@/content/games";
import { site } from "@/content/site";
import { revenantCommunityChannels } from "@/content/navigation";

export default function RevenantPage() {
  const game = games.find((g) => g.id === "revenant-survivors")!;

  return (
    <main id="page-revenant" data-screen-label="03 Revenant Survivors">
      <section className="rev-hero" aria-labelledby="rev-h1">
        <div className="wrap">
          <div className="badge-row">
            {game.icon ? (
              <Image
                className="icon-badge"
                src={game.icon}
                alt={`${game.title} icon`}
                width={64}
                height={64}
              />
            ) : null}
            <div>
              <div className="mono" style={{ color: "#c08a7d" }}>
                / Mongma Studio · {game.number}
              </div>
              <div
                className="mono"
                style={{ color: "#c08a7d", marginTop: 4 }}
              >
                {game.statusLabel}
              </div>
            </div>
          </div>
          <h1 id="rev-h1">
            {game.title}
            <br />
            <span className="it serif">{game.titleItalic}</span>
          </h1>
          <p className="tagline">{game.tagline}</p>
          <div className="rev-cta">
            {game.steamUrl && (
              <Button href={game.steamUrl}>
                Wishlist on Steam <Arrow />
              </Button>
            )}
            <Button variant="ghost" href="#rev-trailer">
              Watch Trailer
            </Button>
            <Button variant="ghost" href="/press">
              Download Press Kit
            </Button>
          </div>
        </div>
      </section>

      {/* trailer */}
      <section className="section" id="rev-trailer">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>/ trailer · 트레일러</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                First Look <span className="it serif">into the night.</span>
              </h2>
            </div>
            <p className="lede">
              짧은 트레일러 한 편. 분위기, 보스, 그리고 영혼 흡수의 첫 장면.
            </p>
          </div>
          <Reveal
            className="trailer-frame"
            style={{ boxShadow: "10px 10px 0 0 #2a0000" }}
          >
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
            {game.steamUrl && (
              <Button variant="ghost" href={game.steamUrl}>
                Wishlist on Steam
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* overview */}
      <section className="section">
        <div className="wrap">
          <div className="rev-overview">
            <div>
              <Kicker>/ overview · 게임 정보</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 14px" }}>
                A roguelite{" "}
                <span className="it serif">about stealing the dark.</span>
              </h2>
              <p className="lede">
                보스를 쓰러뜨리는 것이 끝이 아니라 시작입니다. 그들의 힘과
                기술을 그대로 빼앗아, 다음 보스 앞에 또 다른 자신으로
                마주서세요.
              </p>
              <div className="rev-tags">
                {game.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <dl className="fact-table">
              {[
                { label: "Title", value: game.title + " Survivors" },
                { label: "Genre", value: game.genre },
                { label: "Platform", value: game.platform },
                { label: "Setting", value: game.setting ?? "Dark Fantasy" },
                { label: "Status", value: game.statusLabel },
                { label: "Studio", value: "Mongma Studio" },
                {
                  label: "Languages",
                  value: game.languages ?? "한국어 · English · 简体中文",
                },
              ].map((r) => (
                <div key={r.label} className="row">
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 14 }}>
            <div>
              <Kicker>/ features · 핵심 시스템</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                Four pillars <span className="it serif">of the night.</span>
              </h2>
            </div>
            <p className="lede">
              한 줄로 설명할 수 있는 시스템 네 가지. 그 위에 모든 빌드와
              캐릭터가 쌓입니다.
            </p>
          </div>
          <Reveal className="feat-grid">
            {(game.features ?? []).map((f) => (
              <div key={f.num} className="feat">
                <span className="num">{f.num}</span>
                <h4>{f.title}</h4>
                <p>{f.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* gallery */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 14 }}>
            <div>
              <Kicker>/ gallery · 스크린샷</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                Sights <span className="it serif">from the run.</span>
              </h2>
            </div>
            <p className="lede">
              키 비주얼과 곧 추가될 인게임 스크린샷 자리. 클릭하면
              라이트박스로 열립니다.
            </p>
          </div>
          <RevGallery
            id="gallery"
            tiles={[
              {
                large: true,
                src: game.keyVisual,
                label: "Revenant Survivors key art",
              },
              { placeholder: true, label: "Screenshot · 02" },
              { placeholder: true, label: "Screenshot · 03" },
              { placeholder: true, label: "GIF · Boss · 04" },
              { placeholder: true, label: "Screenshot · 05" },
              { placeholder: true, label: "GIF · Synergy · 06" },
              { placeholder: true, label: "Screenshot · 07" },
              { placeholder: true, label: "Screenshot · 08" },
            ]}
          />
        </div>
      </section>

      {/* steam strip */}
      <section className="steam-strip">
        <div className="wrap">
          <Kicker style={{ color: "#c08a7d" }}>/ wishlist · 위시리스트</Kicker>
          <h2>Stand on Steam, before the night begins.</h2>
          <p
            className="lede"
            style={{ color: "#e9d6cc", maxWidth: "48ch", margin: "0 auto" }}
          >
            위시리스트는 인디 게임에게 가장 큰 응원입니다. 출시 직전, 가장
            먼저 알려드릴게요.
          </p>
          <div className="row">
            {game.steamUrl && (
              <>
                <Button href={game.steamUrl}>
                  Wishlist on Steam <Arrow />
                </Button>
                <Button variant="ghost" href={game.steamUrl}>
                  Follow on Steam
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* press CTA */}
      <section className="section">
        <div className="wrap two-col">
          <div>
            <Kicker>/ press · 미디어용 자료</Kicker>
            <h2 className="h-section" style={{ margin: "14px 0 14px" }}>
              For media, creators &amp; partners.
            </h2>
            <p className="lede">
              로고, 키 비주얼, 스크린샷, 트레일러, 보도자료까지. 한 곳에서
              받아볼 수 있도록 정리했습니다.
            </p>
          </div>
          <div className="cta-row" style={{ alignSelf: "center" }}>
            <Button href="/press">
              View Press Kit <Arrow />
            </Button>
            <Button variant="ghost" href="#press-kit-drive-placeholder">
              Download Press Kit
            </Button>
            <Button variant="ghost" href="/contact">
              Contact
            </Button>
          </div>
        </div>
      </section>

      {/* community */}
      <section className="section">
        <div className="wrap">
          <Kicker>/ community · 커뮤니티</Kicker>
          <h2 className="h-section" style={{ margin: "14px 0 22px" }}>
            Walk with us.
          </h2>
          <CommunitySection
            variant="revenant"
            ariaLabel="Revenant community"
            channels={revenantCommunityChannels}
            listStyle={{ borderTop: "1px solid var(--rev-rule)" }}
            linkStyle={{
              borderColor: "var(--rev-rule)",
              color: "var(--rev-ink)",
            }}
          />
        </div>
      </section>
    </main>
  );
}
