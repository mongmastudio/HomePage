"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import RevGallery from "@/components/revenant/RevGallery";
import { downloads, pressInquiry, factsheet } from "@/content/press";
import { games } from "@/content/games";
import { site } from "@/content/site";
import { useLanguage } from "@/components/common/LanguageProvider";

const copy = {
  heroKicker: { ko: "/ 프레스 키트", en: "/ press kit", zh: "/ 媒体资料包" },
  h1It: { ko: "프레스 키트.", en: "Press Kit.", zh: "媒体资料包。" },
  heroLead: {
    ko: "미디어, 크리에이터, 파트너를 위한 공식 자료 모음입니다.",
    en: "Official materials for media, creators, and partners.",
    zh: "面向媒体、创作者与合作伙伴的官方资料合集。",
  },
  downloadPressKit: {
    ko: "프레스 키트 다운로드",
    en: "Download Press Kit",
    zh: "下载媒体资料包",
  },
  contact: { ko: "문의", en: "Contact", zh: "联系我们" },

  factsheetKicker: { ko: "/ 팩트시트", en: "/ factsheet", zh: "/ 信息表" },
  factsheetHeading: {
    ko: "게임 팩트시트",
    en: "Game Factsheet",
    zh: "游戏信息表",
  },
  keyVisualAlt: {
    ko: "Revenant Survivors 키 비주얼",
    en: "Revenant Survivors key visual",
    zh: "Revenant Survivors 主视觉图",
  },
  downloadKeyArt: {
    ko: "키아트 다운로드",
    en: "Download Key Art",
    zh: "下载关键美术图",
  },
  watchTrailer: { ko: "트레일러 보기", en: "Watch Trailer", zh: "观看预告片" },

  assetsKicker: {
    ko: "/ 에셋 · 다운로드",
    en: "/ assets · downloads",
    zh: "/ 资源 · 下载",
  },
  assetsHeading: { ko: "에셋 다운로드", en: "Download assets", zh: "下载资源" },
  assetsLead: {
    ko: "아래 자료는 Google Drive 링크로 연결될 예정입니다.",
    en: "The materials below will link to Google Drive.",
    zh: "以下资料将链接到 Google Drive。",
  },
  openDrive: { ko: "Drive 열기 →", en: "Open drive →", zh: "打开 Drive →" },

  trailerKicker: {
    ko: "/ 트레일러 · 비디오",
    en: "/ trailer · video",
    zh: "/ 预告片 · 视频",
  },
  trailerHeading: {
    ko: "공식 트레일러",
    en: "Official trailer",
    zh: "官方预告片",
  },
  trailerLead: {
    ko: "미디어 사용이 가능한 공식 트레일러입니다.",
    en: "Official trailer available for media use.",
    zh: "可供媒体使用的官方预告片。",
  },
  trailerTitle: {
    ko: "Revenant Survivors 트레일러",
    en: "Revenant Survivors Trailer",
    zh: "Revenant Survivors 预告片",
  },
  watchOnYoutube: {
    ko: "YouTube에서 보기",
    en: "Watch on YouTube",
    zh: "在 YouTube 观看",
  },
  downloadVideoFiles: {
    ko: "비디오 파일 다운로드",
    en: "Download Video Files",
    zh: "下载视频文件",
  },

  screenshotsKicker: {
    ko: "/ 스크린샷 · 스크린샷",
    en: "/ screenshots · screenshots",
    zh: "/ 截图 · 截图",
  },
  screenshotsHeading: {
    ko: "스크린샷 미리보기",
    en: "Screenshot preview",
    zh: "截图预览",
  },
  screenshotsLead: {
    ko: "키 비주얼과 곧 추가될 인게임 스크린샷입니다.",
    en: "Key visuals and upcoming in-game screenshots.",
    zh: "主视觉图与即将加入的游戏内截图。",
  },
  tileKeyVisual: { ko: "키 비주얼", en: "Key visual", zh: "主视觉图" },
  tile02: { ko: "스크린샷 · 02", en: "Screenshot · 02", zh: "截图 · 02" },
  tile03: { ko: "스크린샷 · 03", en: "Screenshot · 03", zh: "截图 · 03" },
  tile04: { ko: "GIF · 04", en: "GIF · 04", zh: "GIF · 04" },
  tile05: { ko: "스크린샷 · 05", en: "Screenshot · 05", zh: "截图 · 05" },
  tile06: { ko: "스크린샷 · 06", en: "Screenshot · 06", zh: "截图 · 06" },
  downloadScreenshots: {
    ko: "스크린샷 다운로드",
    en: "Download Screenshots",
    zh: "下载截图",
  },

  studioKicker: {
    ko: "/ 스튜디오 설명 · 스튜디오 소개",
    en: "/ studio description · studio intro",
    zh: "/ 工作室介绍 · 工作室介绍",
  },
  studioHeading: {
    ko: "Mongma Studio 소개",
    en: "About Mongma Studio",
    zh: "关于 Mongma Studio",
  },
  studioBody1: {
    ko: "Mongma Studio는 한국 서울에 자리 잡은 작은 인디 게임 스튜디오입니다. 독특한 세계와 오래 남는 플레이를 만들기 위해 작은 규모로 깊게 다듬습니다.",
    en: "Mongma Studio is a small indie game studio based in Seoul, Korea. We work at a small scale to craft distinctive worlds and gameplay that lingers.",
    zh: "Mongma Studio 是一家位于韩国首尔的小型独立游戏工作室。我们以小规模深入打磨，创造独特世界与令人难忘的玩法。",
  },
  studioBody2Pre: {
    ko: "현재 첫 번째 프로젝트인 ",
    en: "We are currently developing our first project, ",
    zh: "我们目前正在开发首个项目 ",
  },
  studioBody2Post: {
    ko: "를 개발 중이며, 이후로도 한 가지 장르에 묶이지 않는 다양한 작품을 천천히 이어갈 예정입니다.",
    en: ", and we plan to slowly continue with a variety of works not bound to a single genre.",
    zh: "，之后也会慢慢推出不被单一类型束缚的多样作品。",
  },

  inquiryKicker: {
    ko: "/ 문의 · 문의처",
    en: "/ inquiry · contacts",
    zh: "/ 咨询 · 联系方式",
  },
  inquiryHeading: {
    ko: "프레스 및 파트너 연락처",
    en: "Press & partner contacts",
    zh: "媒体与合作伙伴联系",
  },
  inquiryLead: {
    ko: "필요한 문의 종류에 맞는 채널을 선택해 주세요.",
    en: "Choose the channel that best fits your inquiry.",
    zh: "请选择最符合咨询类型的渠道。",
  },
  sendEmail: { ko: "이메일 보내기", en: "Send Email", zh: "发送邮件" },
};

export default function PressPage() {
  const { tr } = useLanguage();
  const game = games.find((g) => g.id === "revenant-survivors")!;

  return (
    <main id="page-press" data-screen-label="04 Press Kit">
      <section className="press-hero wrap">
        <Kicker>{tr(copy.heroKicker)}</Kicker>
        <h1 className="h-display">
          Revenant Survivors <span className="it">{tr(copy.h1It)}</span>
        </h1>
        <p className="lede" style={{ marginTop: 14 }}>
          {tr(copy.heroLead)}
        </p>
        <div className="cta-row">
          <Button href="#press-kit-drive-placeholder">
            {tr(copy.downloadPressKit)} <Arrow />
          </Button>
          <Button variant="ghost" href="/contact">
            {tr(copy.contact)}
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="factsheet">
            <div>
              <Kicker>{tr(copy.factsheetKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 22px" }}>
                {tr(copy.factsheetHeading)}
              </h2>
              <dl className="fs-table">
                {factsheet.map((r, i) => (
                  <div key={i} className="row">
                    <dt>{tr(r.label)}</dt>
                    <dd>
                      {r.isContact ? (
                        <a
                          href={`mailto:${site.email.general}`}
                          style={{ borderBottom: "1px dashed var(--ink-mute)" }}
                        >
                          {tr(r.value)}
                        </a>
                      ) : (
                        tr(r.value)
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <div className="fs-img">
                <Image
                  src={game.keyVisual}
                  alt={tr(copy.keyVisualAlt)}
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
                  {tr(copy.downloadKeyArt)}
                </Button>
                <Button variant="ghost" size="sm" href={site.social.youtubeTrailer}>
                  {tr(copy.watchTrailer)}
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
              <Kicker>{tr(copy.assetsKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.assetsHeading)}
              </h2>
            </div>
            <p className="lede">{tr(copy.assetsLead)}</p>
          </div>
          <Reveal className="dl-grid">
            {downloads.map((d, i) => (
              <div key={i} className="dl">
                <span className="lbl">{tr(d.lbl)}</span>
                <h4>{tr(d.title)}</h4>
                <span className="sz">{tr(d.size)}</span>
                <a className="dl-btn" href="#press-kit-drive-placeholder">
                  {tr(copy.openDrive)}
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
              <Kicker>{tr(copy.trailerKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.trailerHeading)}
              </h2>
            </div>
            <p className="lede">{tr(copy.trailerLead)}</p>
          </div>
          <Reveal className="trailer-frame">
            <iframe
              src={site.social.youtubeTrailerEmbed}
              title={tr(copy.trailerTitle)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Reveal>
          <div className="trailer-row">
            <Button href={site.social.youtubeTrailer}>
              {tr(copy.watchOnYoutube)} <Arrow />
            </Button>
            <Button variant="ghost" href="#press-kit-drive-placeholder">
              {tr(copy.downloadVideoFiles)}
            </Button>
          </div>
        </div>
      </section>

      {/* screenshot preview */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 18 }}>
            <div>
              <Kicker>{tr(copy.screenshotsKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.screenshotsHeading)}
              </h2>
            </div>
            <p className="lede">{tr(copy.screenshotsLead)}</p>
          </div>
          <RevGallery
            id="press-gallery"
            gridStyle={{ gridTemplateColumns: "repeat(4,1fr)" }}
            tiles={[
              {
                large: true,
                src: game.keyVisual,
                label: tr(copy.tileKeyVisual),
                borderColor: "var(--ink)",
              },
              {
                placeholder: true,
                label: tr(copy.tile02),
                borderColor: "var(--ink)",
                pattern: true,
              },
              {
                placeholder: true,
                label: tr(copy.tile03),
                borderColor: "var(--ink)",
                pattern: true,
              },
              {
                placeholder: true,
                label: tr(copy.tile04),
                borderColor: "var(--ink)",
                pattern: true,
              },
              {
                placeholder: true,
                label: tr(copy.tile05),
                borderColor: "var(--ink)",
                pattern: true,
              },
              {
                placeholder: true,
                label: tr(copy.tile06),
                borderColor: "var(--ink)",
                pattern: true,
              },
            ]}
          />
          <div className="cta-row">
            <Button href="#press-kit-drive-placeholder">
              {tr(copy.downloadScreenshots)} <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* studio description */}
      <section className="section">
        <div className="wrap two-col">
          <div>
            <Kicker>{tr(copy.studioKicker)}</Kicker>
            <h2 className="h-section" style={{ margin: "14px 0 16px" }}>
              {tr(copy.studioHeading)}
            </h2>
          </div>
          <div>
            <p className="lede" style={{ marginBottom: 18 }}>
              {tr(copy.studioBody1)}
            </p>
            <p className="lede">
              {tr(copy.studioBody2Pre)}
              <strong>Revenant Survivors</strong>
              {tr(copy.studioBody2Post)}
            </p>
          </div>
        </div>
      </section>

      {/* inquiry contacts */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>{tr(copy.inquiryKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.inquiryHeading)}
              </h2>
            </div>
            <p className="lede">{tr(copy.inquiryLead)}</p>
          </div>
          <div className="contact-grid">
            {pressInquiry.map((p) => (
              <article key={p.num} className="contact-block">
                <Kicker>{p.num}</Kicker>
                <h3>{tr(p.title)}</h3>
                <a className="email" href={`mailto:${p.email}`}>
                  {p.email}
                </a>
                <p className="uses">{tr(p.uses)}</p>
                <a
                  className="btn btn--sm mail-btn"
                  href={`mailto:${p.email}`}
                >
                  {tr(copy.sendEmail)} <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
