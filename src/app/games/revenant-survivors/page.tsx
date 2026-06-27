"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import RevGallery from "@/components/revenant/RevGallery";
import CommunitySection from "@/components/home/CommunitySection";
import { useLanguage } from "@/components/common/LanguageProvider";
import { games } from "@/content/games";
import { site } from "@/content/site";
import { revenantCommunityChannels } from "@/content/navigation";

const copy = {
  iconAlt: { ko: "아이콘", en: "icon", zh: "图标" },
  wishlistOnSteam: {
    ko: "Steam 위시리스트에 추가",
    en: "Wishlist on Steam",
    zh: "添加到 Steam 愿望单",
  },
  watchTrailer: { ko: "트레일러 보기", en: "Watch Trailer", zh: "观看预告片" },
  downloadPressKit: {
    ko: "프레스 키트 다운로드",
    en: "Download Press Kit",
    zh: "下载媒体资料包",
  },

  trailerKicker: {
    ko: "/ 트레일러 · 트레일러",
    en: "/ trailer · trailer",
    zh: "/ 预告片 · 预告片",
  },
  trailerH2: { ko: "밤을 향한", en: "First Look", zh: "走入黑夜的" },
  trailerH2It: { ko: "첫 공개.", en: "into the night.", zh: "初次亮相。" },
  trailerLead: {
    ko: "짧은 트레일러 한 편. 분위기, 보스, 그리고 영혼 흡수의 첫 장면을 담았습니다.",
    en: "A short trailer showing the mood, bosses, and the first glimpse of soul absorption.",
    zh: "一支短预告片，展示氛围、Boss，以及灵魂吸收的第一眼。",
  },
  trailerWord: { ko: "트레일러", en: "Trailer", zh: "预告片" },
  watchOnYouTube: {
    ko: "YouTube에서 보기",
    en: "Watch on YouTube",
    zh: "在 YouTube 观看",
  },

  overviewKicker: {
    ko: "/ 개요 · 게임 정보",
    en: "/ overview · game info",
    zh: "/ 概览 · 游戏信息",
  },
  overviewH2: { ko: "어둠을 빼앗는", en: "A roguelite", zh: "一款夺取黑暗的" },
  overviewH2It: {
    ko: "로그라이트.",
    en: "about stealing the dark.",
    zh: "Roguelite。",
  },
  overviewLead: {
    ko: "보스를 쓰러뜨리는 것이 끝이 아니라 시작입니다. 그 힘을 빼앗아 빌드를 바꾸고, 더 깊은 밤으로 나아가세요.",
    en: "Defeating a boss is not the end, but the beginning. Steal its power, reshape your build, and step deeper into the night.",
    zh: "击败 Boss 不是终点，而是开始。夺取它的力量，重塑构筑，向更深的黑夜前进。",
  },

  factTitle: { ko: "제목", en: "Title", zh: "标题" },
  factGenre: { ko: "장르", en: "Genre", zh: "类型" },
  factPlatform: { ko: "플랫폼", en: "Platform", zh: "平台" },
  factSetting: { ko: "배경", en: "Setting", zh: "背景" },
  factStatus: { ko: "상태", en: "Status", zh: "状态" },
  factStudio: { ko: "스튜디오", en: "Studio", zh: "工作室" },
  factLanguages: { ko: "지원 언어", en: "Languages", zh: "支持语言" },
  settingFallback: { ko: "다크 판타지", en: "Dark Fantasy", zh: "黑暗奇幻" },
  languagesFallback: {
    ko: "한국어 · English · 简体中文",
    en: "Korean · English · Simplified Chinese",
    zh: "韩语 · 英语 · 简体中文",
  },

  featuresKicker: {
    ko: "/ 특징 · 핵심 시스템",
    en: "/ features · core systems",
    zh: "/ 特色 · 核心系统",
  },
  featuresH2: { ko: "밤을 지탱하는", en: "Four pillars", zh: "黑夜的" },
  featuresH2It: { ko: "네 기둥.", en: "of the night.", zh: "四大支柱。" },
  featuresLead: {
    ko: "한 줄로 설명할 수 있는 시스템 네 가지. 하지만 조합은 매번 달라집니다.",
    en: "Four systems you can explain in one line, but combine differently every run.",
    zh: "四个可以用一句话说明的系统，但每次组合都会不同。",
  },

  galleryKicker: {
    ko: "/ 갤러리 · 스크린샷",
    en: "/ gallery · screenshots",
    zh: "/ 图库 · 截图",
  },
  galleryH2: { ko: "달리는 길에서 본", en: "Sights", zh: "奔跑途中" },
  galleryH2It: { ko: "장면들.", en: "from the run.", zh: "所见。" },
  galleryLead: {
    ko: "키 비주얼과 곧 추가될 인게임 스크린샷 자리입니다.",
    en: "Key visuals and placeholders for in-game screenshots coming soon.",
    zh: "这里展示主视觉图，以及即将加入的游戏内截图占位。",
  },
  tileKeyArt: {
    ko: "Revenant Survivors 키아트",
    en: "Revenant Survivors key art",
    zh: "Revenant Survivors 关键美术图",
  },
  tile02: { ko: "스크린샷 · 02", en: "Screenshot · 02", zh: "截图 · 02" },
  tile03: { ko: "스크린샷 · 03", en: "Screenshot · 03", zh: "截图 · 03" },
  tile04: { ko: "GIF · 보스 · 04", en: "GIF · Boss · 04", zh: "GIF · Boss · 04" },
  tile05: { ko: "스크린샷 · 05", en: "Screenshot · 05", zh: "截图 · 05" },
  tile06: {
    ko: "GIF · 시너지 · 06",
    en: "GIF · Synergy · 06",
    zh: "GIF · 协同 · 06",
  },
  tile07: { ko: "스크린샷 · 07", en: "Screenshot · 07", zh: "截图 · 07" },
  tile08: { ko: "스크린샷 · 08", en: "Screenshot · 08", zh: "截图 · 08" },

  steamKicker: {
    ko: "/ 위시리스트 · 위시리스트",
    en: "/ wishlist · wishlist",
    zh: "/ 愿望单 · 愿望单",
  },
  steamH2: {
    ko: "밤이 시작되기 전, Steam에서 함께해 주세요.",
    en: "Stand on Steam, before the night begins.",
    zh: "在黑夜开始前，于 Steam 上支持我们。",
  },
  steamLead: {
    ko: "위시리스트는 인디 게임에게 가장 큰 응원입니다. 출시 소식과 업데이트를 가장 먼저 받아보세요.",
    en: "Wishlists are one of the biggest ways to support an indie game. Get release news and updates first.",
    zh: "愿望单是支持独立游戏最重要的方式之一。第一时间获得发售消息与更新。",
  },
  followOnSteam: {
    ko: "Steam에서 팔로우",
    en: "Follow on Steam",
    zh: "在 Steam 关注",
  },

  pressKicker: {
    ko: "/ 프레스 · 미디어용 자료",
    en: "/ press · media assets",
    zh: "/ 媒体 · 媒体资料",
  },
  pressH2: {
    ko: "미디어, 크리에이터, 파트너를 위해.",
    en: "For media, creators & partners.",
    zh: "面向媒体、创作者与合作伙伴。",
  },
  pressLead: {
    ko: "로고, 키 비주얼, 스크린샷, 트레일러, 보도자료까지 필요한 자료를 모았습니다.",
    en: "Logos, key visuals, screenshots, trailers, and press materials are gathered here.",
    zh: "这里汇集了 Logo、主视觉图、截图、预告片与新闻资料。",
  },
  viewPressKit: {
    ko: "프레스 키트 보기",
    en: "View Press Kit",
    zh: "查看媒体资料包",
  },
  contact: { ko: "문의", en: "Contact", zh: "联系我们" },

  communityKicker: {
    ko: "/ 커뮤니티 · 커뮤니티",
    en: "/ community · community",
    zh: "/ 社区 · 社区",
  },
  communityH2: {
    ko: "우리와 함께 걸어 주세요.",
    en: "Walk with us.",
    zh: "与我们同行。",
  },
  communityAria: {
    ko: "Revenant 커뮤니티",
    en: "Revenant community",
    zh: "Revenant 社区",
  },
};

export default function RevenantPage() {
  const { tr } = useLanguage();
  const game = games.find((g) => g.id === "revenant-survivors")!;

  const facts = [
    { label: copy.factTitle, value: `${tr(game.title)} Survivors` },
    { label: copy.factGenre, value: tr(game.genre) },
    { label: copy.factPlatform, value: tr(game.platform) },
    {
      label: copy.factSetting,
      value: game.setting ? tr(game.setting) : tr(copy.settingFallback),
    },
    { label: copy.factStatus, value: tr(game.statusLabel) },
    { label: copy.factStudio, value: "Mongma Studio" },
    {
      label: copy.factLanguages,
      value: game.languages ? tr(game.languages) : tr(copy.languagesFallback),
    },
  ];

  return (
    <main id="page-revenant" data-screen-label="03 Revenant Survivors">
      <section className="rev-hero" aria-labelledby="rev-h1">
        <div className="wrap">
          <div className="badge-row">
            {game.icon ? (
              <Image
                className="icon-badge"
                src={game.icon}
                alt={`${tr(game.title)} ${tr(copy.iconAlt)}`}
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
                {tr(game.statusLabel)}
              </div>
            </div>
          </div>
          <h1 id="rev-h1">
            {tr(game.title)}
            <br />
            <span className="it serif">
              {game.titleItalic ? tr(game.titleItalic) : null}
            </span>
          </h1>
          <p className="tagline">{game.tagline ? tr(game.tagline) : null}</p>
          <div className="rev-cta">
            {game.steamUrl && (
              <Button href={game.steamUrl}>
                {tr(copy.wishlistOnSteam)} <Arrow />
              </Button>
            )}
            <Button variant="ghost" href="#rev-trailer">
              {tr(copy.watchTrailer)}
            </Button>
            <Button variant="ghost" href="/press">
              {tr(copy.downloadPressKit)}
            </Button>
          </div>
        </div>
      </section>

      {/* trailer */}
      <section className="section" id="rev-trailer">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>{tr(copy.trailerKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.trailerH2)}{" "}
                <span className="it serif">{tr(copy.trailerH2It)}</span>
              </h2>
            </div>
            <p className="lede">{tr(copy.trailerLead)}</p>
          </div>
          <Reveal
            className="trailer-frame"
            style={{ boxShadow: "10px 10px 0 0 #2a0000" }}
          >
            <iframe
              src={site.social.youtubeTrailerEmbed}
              title={`${tr(game.title)} ${
                game.titleItalic ? tr(game.titleItalic) : ""
              } ${tr(copy.trailerWord)}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Reveal>
          <div className="trailer-row">
            <Button href={site.social.youtubeTrailer}>
              {tr(copy.watchOnYouTube)} <Arrow />
            </Button>
            {game.steamUrl && (
              <Button variant="ghost" href={game.steamUrl}>
                {tr(copy.wishlistOnSteam)}
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
              <Kicker>{tr(copy.overviewKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 14px" }}>
                {tr(copy.overviewH2)}{" "}
                <span className="it serif">{tr(copy.overviewH2It)}</span>
              </h2>
              <p className="lede">{tr(copy.overviewLead)}</p>
              <div className="rev-tags">
                {game.tags.map((t) => (
                  <span key={t.en}>{tr(t)}</span>
                ))}
              </div>
            </div>
            <dl className="fact-table">
              {facts.map((r) => (
                <div key={r.label.en} className="row">
                  <dt>{tr(r.label)}</dt>
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
              <Kicker>{tr(copy.featuresKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.featuresH2)}{" "}
                <span className="it serif">{tr(copy.featuresH2It)}</span>
              </h2>
            </div>
            <p className="lede">{tr(copy.featuresLead)}</p>
          </div>
          <Reveal className="feat-grid">
            {(game.features ?? []).map((f) => (
              <div key={f.num.en} className="feat">
                <span className="num">{tr(f.num)}</span>
                <h4>{tr(f.title)}</h4>
                <p>{tr(f.description)}</p>
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
              <Kicker>{tr(copy.galleryKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.galleryH2)}{" "}
                <span className="it serif">{tr(copy.galleryH2It)}</span>
              </h2>
            </div>
            <p className="lede">{tr(copy.galleryLead)}</p>
          </div>
          <RevGallery
            id="gallery"
            tiles={[
              {
                large: true,
                src: game.keyVisual,
                label: tr(copy.tileKeyArt),
              },
              { placeholder: true, label: tr(copy.tile02) },
              { placeholder: true, label: tr(copy.tile03) },
              { placeholder: true, label: tr(copy.tile04) },
              { placeholder: true, label: tr(copy.tile05) },
              { placeholder: true, label: tr(copy.tile06) },
              { placeholder: true, label: tr(copy.tile07) },
              { placeholder: true, label: tr(copy.tile08) },
            ]}
          />
        </div>
      </section>

      {/* steam strip */}
      <section className="steam-strip">
        <div className="wrap">
          <Kicker style={{ color: "#c08a7d" }}>{tr(copy.steamKicker)}</Kicker>
          <h2>{tr(copy.steamH2)}</h2>
          <p
            className="lede"
            style={{ color: "#e9d6cc", maxWidth: "48ch", margin: "0 auto" }}
          >
            {tr(copy.steamLead)}
          </p>
          <div className="row">
            {game.steamUrl && (
              <>
                <Button href={game.steamUrl}>
                  {tr(copy.wishlistOnSteam)} <Arrow />
                </Button>
                <Button variant="ghost" href={game.steamUrl}>
                  {tr(copy.followOnSteam)}
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
            <Kicker>{tr(copy.pressKicker)}</Kicker>
            <h2 className="h-section" style={{ margin: "14px 0 14px" }}>
              {tr(copy.pressH2)}
            </h2>
            <p className="lede">{tr(copy.pressLead)}</p>
          </div>
          <div className="cta-row" style={{ alignSelf: "center" }}>
            <Button href="/press">
              {tr(copy.viewPressKit)} <Arrow />
            </Button>
            <Button variant="ghost" href="#press-kit-drive-placeholder">
              {tr(copy.downloadPressKit)}
            </Button>
            <Button variant="ghost" href="/contact">
              {tr(copy.contact)}
            </Button>
          </div>
        </div>
      </section>

      {/* community */}
      <section className="section">
        <div className="wrap">
          <Kicker>{tr(copy.communityKicker)}</Kicker>
          <h2 className="h-section" style={{ margin: "14px 0 22px" }}>
            {tr(copy.communityH2)}
          </h2>
          <CommunitySection
            variant="revenant"
            ariaLabel={tr(copy.communityAria)}
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
