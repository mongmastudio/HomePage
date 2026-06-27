"use client";

import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import { supportOptions, supportWhy } from "@/content/support";
import { site } from "@/content/site";
import { useLanguage } from "@/components/common/LanguageProvider";

const copy = {
  heroKicker: { ko: "/ 지원 · 후원", en: "/ support · support", zh: "/ 支持 · 支持" },
  heroH1Normal: {
    ko: "우리가 만드는 세계를",
    en: "Support the worlds",
    zh: "支持",
  },
  heroH1Italic: {
    ko: "응원해 주세요.",
    en: "we are building.",
    zh: "我们正在打造的世界。",
  },
  heroLead: {
    ko: "몽마 스튜디오가 더 자유롭고 개성 있는 게임을 만들 수 있도록 응원해 주세요.",
    en: "Help Mongma Studio create freer, more distinctive games.",
    zh: "帮助 Mongma Studio 创作更自由、更有个性的游戏。",
  },
  btnDiscord: { ko: "Discord 참여하기", en: "Join Discord", zh: "加入 Discord" },
  btnSteam: { ko: "Steam 위시리스트에 추가", en: "Wishlist on Steam", zh: "添加到 Steam 愿望单" },
  btnBusiness: { ko: "비즈니스 문의", en: "Contact Business", zh: "商务联系" },
  whyKicker: {
    ko: "/ 후원 이유 · 왜 후원인가요?",
    en: "/ why support · why support us?",
    zh: "/ 为什么支持 · 为什么支持我们？",
  },
  whyH2: { ko: "왜 후원인가요?", en: "Why support us?", zh: "为什么支持我们？" },
  whyLead: {
    ko: "우리는 마케팅 예산도, 광고도 없는 작은 팀입니다. 여러분의 관심이 다음 빌드와 다음 세계를 움직입니다.",
    en: "We are a small team without a big marketing budget or ads. Your support helps shape the next build and the next world.",
    zh: "我们是一个没有大量营销预算和广告的小团队。你的支持会推动下一个版本与下一个世界。",
  },
  waysKicker: {
    ko: "/ 후원 방식 · 후원 방식",
    en: "/ ways to support · support options",
    zh: "/ 支持方式 · 支持选项",
  },
  waysH2: { ko: "후원 방식", en: "Support options", zh: "支持选项" },
  waysLead: {
    ko: "현재는 안내 위주입니다. 결제 / 후원 링크는 준비되는 대로 연결됩니다.",
    en: "This page is currently informational. Payment and support links will be connected later.",
    zh: "当前页面以说明为主。支付与支持链接将在准备好后接入。",
  },
  noteStrong: { ko: "안내 · ", en: "Note · ", zh: "说明 · " },
  noteBody: {
    ko: "후원 옵션과 결제 링크는 추후 연결됩니다. 결제 · 정기 후원 기능은 준비 중입니다.",
    en: "Support options and payment links will be connected later. Payments and recurring support are in preparation.",
    zh: "支持选项和支付链接将在之后接入。支付与定期支持功能正在准备中。",
  },
  stamp: {
    ko: "정직하게 · 인디답게 · 천천히",
    en: "Honest · Indie · Slow",
    zh: "真诚 · 独立 · 慢慢来",
  },
};

export default function SupportPage() {
  const { tr } = useLanguage();
  return (
    <main id="page-support" data-screen-label="05 Support">
      <section className="support-hero wrap">
        <Kicker>{tr(copy.heroKicker)}</Kicker>
        <h1 className="h-display">
          {tr(copy.heroH1Normal)} <em className="it">{tr(copy.heroH1Italic)}</em>
        </h1>
        <p className="lede" style={{ marginTop: 14 }}>
          {tr(copy.heroLead)}
        </p>
        <div className="cta-row">
          <Button href="https://discord.gg/Gz2CtFPYBK">
            {tr(copy.btnDiscord)} <Arrow />
          </Button>
          <Button variant="accent" href={site.social.steamRevenant}>
            {tr(copy.btnSteam)}
          </Button>
          <Button variant="ghost" href={`mailto:${site.email.business}`}>
            {tr(copy.btnBusiness)}
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>{tr(copy.whyKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.whyH2)}
              </h2>
            </div>
            <p className="lede">{tr(copy.whyLead)}</p>
          </div>
          <Reveal className="why-grid">
            {supportWhy.map((w) => (
              <div key={tr(w.num)} className="why">
                <span className="num">{tr(w.num)}</span>
                <h4>{tr(w.title)}</h4>
                <p>{tr(w.description)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>{tr(copy.waysKicker)}</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                {tr(copy.waysH2)}
              </h2>
            </div>
            <p className="lede">{tr(copy.waysLead)}</p>
          </div>
          <Reveal className="support-options">
            {supportOptions.map((o, i) => (
              <article key={i} className={`support-card ${o.accent}`}>
                <span className="num">{tr(o.num)}</span>
                <h4>{tr(o.title)}</h4>
                <p>{tr(o.description)}</p>
                <div className="row">
                  {"disabled" in o.primary && o.primary.disabled ? (
                    <button className="btn btn--sm" disabled>
                      {tr(o.primary.label)}
                    </button>
                  ) : (
                    <Button size="sm" href={(o.primary as { href: string }).href}>
                      {tr(o.primary.label)}
                    </Button>
                  )}
                  {o.secondary && (
                    <Button
                      variant="ghost"
                      size="sm"
                      href={o.secondary.href}
                    >
                      {tr(o.secondary.label)}
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="disclaimer">
            <p>
              <strong>{tr(copy.noteStrong)}</strong>
              {tr(copy.noteBody)}
            </p>
            <span className="stamp">{tr(copy.stamp)}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
