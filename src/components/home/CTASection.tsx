"use client";

import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import { site } from "@/content/site";
import { homeContactCta } from "@/content/home";
import { useLanguage } from "@/components/common/LanguageProvider";

const copy = {
  allContact: {
    ko: "모든 문의 채널",
    en: "All contact channels",
    zh: "所有联系渠道",
  },
  pressKit: { ko: "프레스 키트", en: "Press Kit", zh: "媒体资料包" },
};

export default function CTASection() {
  const { tr } = useLanguage();
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-h">
      <div className="wrap">
        <div>
          <Kicker style={{ color: "#bdb29a" }}>{tr(homeContactCta.kicker)}</Kicker>
          <h2 id="contact-cta-h" style={{ marginTop: 14 }}>
            {tr(homeContactCta.headline)}{" "}
            <span
              className="serif italic"
              style={{ color: "var(--yellow)" }}
            >
              {tr(homeContactCta.headlineItalic)}
            </span>
          </h2>
        </div>
        <div className="ccrow">
          <Button href={`mailto:${site.email.press}`}>
            {site.email.press}
          </Button>
          <Button href="/contact">{tr(copy.allContact)}</Button>
          <Button href="/press">{tr(copy.pressKit)}</Button>
        </div>
      </div>
    </section>
  );
}
