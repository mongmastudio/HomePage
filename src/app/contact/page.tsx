import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Arrow from "@/components/common/Arrow";
import { pressInquiry } from "@/content/press";
import { contactCommunityChannels } from "@/content/navigation";
import { site } from "@/content/site";

const sectionSuffix: Record<string, string> = {
  "No.01": "No.01 · General",
  "No.02": "No.02 · Press",
  "No.03": "No.03 · Creators",
  "No.04": "No.04 · Business",
};

export default function ContactPage() {
  return (
    <main id="page-contact" data-screen-label="06 Contact">
      <section className="press-hero wrap">
        <Kicker>/ contact · 문의</Kicker>
        <h1 className="h-display">
          Say hello, <span className="it">in any tongue.</span>
        </h1>
        <p className="lede" style={{ marginTop: 14 }}>
          메일 한 통이면 충분합니다. 아래 4개의 채널 중 가장 가까운 곳으로
          보내주시면, 가능한 빠르게 답장드릴게요.
        </p>
        <div className="cta-row">
          <Button href={`mailto:${site.email.general}`}>
            {site.email.general}
          </Button>
          <Button variant="ghost" href="https://discord.gg/Gz2CtFPYBK">
            Join Discord
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            {pressInquiry.map((p) => (
              <article key={p.num} className="contact-block">
                <Kicker>{sectionSuffix[p.num] ?? p.num}</Kicker>
                <h3>{p.title}</h3>
                <a className="email" href={`mailto:${p.email}`}>
                  {p.email}
                </a>
                <p className="uses">{p.uses}</p>
                <a className="btn btn--sm mail-btn" href={`mailto:${p.email}`}>
                  Send Email <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <Kicker>/ community · 커뮤니티</Kicker>
            <h2 className="h-section" style={{ margin: "14px 0 14px" }}>
              Or just hang around.
            </h2>
            <p className="lede">
              메일이 부담스럽다면 커뮤니티에서 가볍게 인사해 주셔도 좋아요.
            </p>
          </div>
          <nav className="community-list" aria-label="Contact community">
            {contactCommunityChannels.map((c) => (
              <a
                key={c.href + c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.label} <Arrow />
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
