"use client";

import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Arrow from "@/components/common/Arrow";
import { pressInquiry } from "@/content/press";
import { contactCommunityChannels } from "@/content/navigation";
import { site } from "@/content/site";
import { useLanguage } from "@/components/common/LanguageProvider";
import type { Localized } from "@/content/i18n";

const sectionKicker: Record<string, Localized> = {
  "No.01": { ko: "No.01 · 일반", en: "No.01 · General", zh: "No.01 · 一般" },
  "No.02": { ko: "No.02 · 프레스", en: "No.02 · Press", zh: "No.02 · 媒体" },
  "No.03": { ko: "No.03 · 크리에이터", en: "No.03 · Creators", zh: "No.03 · 创作者" },
  "No.04": { ko: "No.04 · 비즈니스", en: "No.04 · Business", zh: "No.04 · 商务" },
};

const copy = {
  heroKicker: {
    ko: "/ 문의 · 문의",
    en: "/ contact · contact",
    zh: "/ 联系 · 联系我们",
  },
  heroH1: {
    ko: "어떤 언어로든",
    en: "Say hello,",
    zh: "用任何语言来",
  },
  heroH1It: {
    ko: "인사해 주세요.",
    en: "in any tongue.",
    zh: "打个招呼吧。",
  },
  heroLead: {
    ko: "메일 한 통이면 충분합니다. 아래 4개의 채널 중 가장 가까운 곳으로 보내 주세요.",
    en: "One email is enough. Choose the most fitting channel from the four below.",
    zh: "一封邮件就足够。请从下方四个渠道中选择最合适的一个。",
  },
  joinDiscord: {
    ko: "Discord 참여하기",
    en: "Join Discord",
    zh: "加入 Discord",
  },
  sendEmail: {
    ko: "이메일 보내기",
    en: "Send Email",
    zh: "发送邮件",
  },
  communityKicker: {
    ko: "/ 커뮤니티 · 커뮤니티",
    en: "/ community · community",
    zh: "/ 社区 · 社区",
  },
  communityHeading: {
    ko: "가볍게 머물러도 좋아요.",
    en: "Or just hang around.",
    zh: "或者只是来逛逛。",
  },
  communityLead: {
    ko: "메일이 부담스럽다면 커뮤니티에서 가볍게 인사해 주셔도 좋습니다.",
    en: "If email feels too formal, feel free to say hello in the community.",
    zh: "如果觉得邮件太正式，也欢迎在社区轻松打个招呼。",
  },
  communityAria: {
    ko: "문의 커뮤니티",
    en: "Contact community",
    zh: "联系社区",
  },
};

export default function ContactPage() {
  const { tr } = useLanguage();
  return (
    <main id="page-contact" data-screen-label="06 Contact">
      <section className="press-hero wrap">
        <Kicker>{tr(copy.heroKicker)}</Kicker>
        <h1 className="h-display">
          {tr(copy.heroH1)} <span className="it">{tr(copy.heroH1It)}</span>
        </h1>
        <p className="lede" style={{ marginTop: 14 }}>
          {tr(copy.heroLead)}
        </p>
        <div className="cta-row">
          <Button href={`mailto:${site.email.general}`}>
            {site.email.general}
          </Button>
          <Button variant="ghost" href="https://discord.gg/Gz2CtFPYBK">
            {tr(copy.joinDiscord)}
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            {pressInquiry.map((p) => (
              <article key={p.num} className="contact-block">
                <Kicker>
                  {tr(
                    sectionKicker[p.num] ?? {
                      ko: p.num,
                      en: p.num,
                      zh: p.num,
                    },
                  )}
                </Kicker>
                <h3>{tr(p.title)}</h3>
                <a className="email" href={`mailto:${p.email}`}>
                  {p.email}
                </a>
                <p className="uses">{tr(p.uses)}</p>
                <a className="btn btn--sm mail-btn" href={`mailto:${p.email}`}>
                  {tr(copy.sendEmail)} <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <Kicker>{tr(copy.communityKicker)}</Kicker>
            <h2 className="h-section" style={{ margin: "14px 0 14px" }}>
              {tr(copy.communityHeading)}
            </h2>
            <p className="lede">{tr(copy.communityLead)}</p>
          </div>
          <nav className="community-list" aria-label={tr(copy.communityAria)}>
            {contactCommunityChannels.map((c) => (
              <a
                key={c.href + tr(c.label)}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tr(c.label)} <Arrow />
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
