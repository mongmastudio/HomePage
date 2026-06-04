import Image from "next/image";
import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import RevGallery from "@/components/revenant/RevGallery";
import { downloads, pressInquiry } from "@/content/press";
import { games } from "@/content/games";
import { site } from "@/content/site";

export default function PressPage() {
  const game = games.find((g) => g.id === "revenant-survivors")!;

  return (
    <main id="page-press" data-screen-label="04 Press Kit">
      <section className="press-hero wrap">
        <Kicker>/ press kit · 보도자료</Kicker>
        <h1 className="h-display">
          Revenant Survivors <span className="it">Press Kit.</span>
        </h1>
        <p className="lede" style={{ marginTop: 14 }}>
          Official materials for media, creators, and partners. — 미디어,
          크리에이터, 파트너를 위한 공식 자료 모음입니다.
        </p>
        <div className="cta-row">
          <Button href="#press-kit-drive-placeholder">
            Download Press Kit <Arrow />
          </Button>
          <Button variant="ghost" href="/contact">
            Contact
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="factsheet">
            <div>
              <Kicker>/ factsheet</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 22px" }}>
                Game Factsheet
              </h2>
              <dl className="fs-table">
                {[
                  { label: "Game Title", value: "Revenant Survivors" },
                  { label: "Developer", value: "Mongma Studio" },
                  { label: "Publisher", value: "Mongma Studio" },
                  { label: "Genre", value: "Action Horde Survival Roguelite" },
                  { label: "Platform", value: "PC · Steam" },
                  { label: "Release Date", value: "Coming Soon · TBA" },
                  { label: "Status", value: "In Development" },
                  {
                    label: "Languages",
                    value: "한국어 · English · 简体中文",
                  },
                  { label: "Price", value: "TBA" },
                ].map((r) => (
                  <div key={r.label} className="row">
                    <dt>{r.label}</dt>
                    <dd>{r.value}</dd>
                  </div>
                ))}
                <div className="row">
                  <dt>Contact</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email.general}`}
                      style={{ borderBottom: "1px dashed var(--ink-mute)" }}
                    >
                      {site.email.general}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <div className="fs-img">
                <Image
                  src={game.keyVisual}
                  alt="Revenant Survivors key visual"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="cta-row">
                <Button
                  variant="ghost"
                  size="sm"
                  href="#press-kit-drive-placeholder"
                >
                  Download Key Art
                </Button>
                <Button variant="ghost" size="sm" href={site.social.youtubeTrailer}>
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* downloads */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>/ assets · 다운로드</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                Download assets
              </h2>
            </div>
            <p className="lede">
              아래 자료는 Google Drive 링크로 연결될 예정입니다. 현재는
              자리표시용 링크로 표시됩니다.
            </p>
          </div>
          <Reveal className="dl-grid">
            {downloads.map((d, i) => (
              <div key={i} className="dl">
                <span className="lbl">{d.lbl}</span>
                <h4>{d.title}</h4>
                <span className="sz">{d.size}</span>
                <a className="dl-btn" href="#press-kit-drive-placeholder">
                  Open drive →
                </a>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* trailer */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>/ trailer · 비디오</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                Official trailer
              </h2>
            </div>
            <p className="lede">
              미디어 사용 가능한 공식 트레일러. 보도용 캡처 컷도 함께 제공될
              예정입니다.
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
            <Button variant="ghost" href="#press-kit-drive-placeholder">
              Download Video Files
            </Button>
          </div>
        </div>
      </section>

      {/* screenshot preview */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 18 }}>
            <div>
              <Kicker>/ screenshots · 스크린샷</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                Screenshot preview
              </h2>
            </div>
            <p className="lede">
              키 비주얼과 곧 추가될 인게임 스크린샷의 자리표시. 클릭으로
              확대됩니다.
            </p>
          </div>
          <RevGallery
            id="press-gallery"
            gridStyle={{ gridTemplateColumns: "repeat(4,1fr)" }}
            tiles={[
              {
                large: true,
                src: game.keyVisual,
                label: "Key visual",
                borderColor: "var(--ink)",
              },
              {
                placeholder: true,
                label: "Screenshot · 02",
                borderColor: "var(--ink)",
                pattern: true,
              },
              {
                placeholder: true,
                label: "Screenshot · 03",
                borderColor: "var(--ink)",
                pattern: true,
              },
              {
                placeholder: true,
                label: "GIF · 04",
                borderColor: "var(--ink)",
                pattern: true,
              },
              {
                placeholder: true,
                label: "Screenshot · 05",
                borderColor: "var(--ink)",
                pattern: true,
              },
              {
                placeholder: true,
                label: "Screenshot · 06",
                borderColor: "var(--ink)",
                pattern: true,
              },
            ]}
          />
          <div className="cta-row">
            <Button href="#press-kit-drive-placeholder">
              Download Screenshots <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* studio description */}
      <section className="section">
        <div className="wrap two-col">
          <div>
            <Kicker>/ studio description · 스튜디오 소개</Kicker>
            <h2 className="h-section" style={{ margin: "14px 0 16px" }}>
              About Mongma Studio
            </h2>
          </div>
          <div>
            <p className="lede" style={{ marginBottom: 18 }}>
              Mongma Studio는 한국 서울에 자리 잡은 작은 인디 게임
              스튜디오입니다. 큰 회사의 공식과 트렌드 대신, 손으로 다듬은
              시스템과 분위기 있는 세계를 만드는 것에 집중합니다.
            </p>
            <p className="lede">
              현재 첫 번째 프로젝트인 <strong>Revenant Survivors</strong>를
              개발 중이며, 이후로도 한 가지 장르에 묶이지 않는 다양한 작품을
              천천히 이어갈 예정입니다.
            </p>
          </div>
        </div>
      </section>

      {/* inquiry contacts */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>/ inquiry · 문의처</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                Press &amp; partner contacts
              </h2>
            </div>
            <p className="lede">
              필요한 문의 종류에 맞는 메일 주소로 연락해주세요. 가능한 빠르게
              답장드립니다.
            </p>
          </div>
          <div className="contact-grid">
            {pressInquiry.map((p) => (
              <article key={p.num} className="contact-block">
                <Kicker>{p.num}</Kicker>
                <h3>{p.title}</h3>
                <a className="email" href={`mailto:${p.email}`}>
                  {p.email}
                </a>
                <p className="uses">{p.uses}</p>
                <a
                  className="btn btn--sm mail-btn"
                  href={`mailto:${p.email}`}
                >
                  Send Email <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
