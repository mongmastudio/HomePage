import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import Arrow from "@/components/common/Arrow";
import { supportOptions, supportWhy } from "@/content/support";
import { site } from "@/content/site";

export default function SupportPage() {
  return (
    <main id="page-support" data-screen-label="05 Support">
      <section className="support-hero wrap">
        <Kicker>/ support · 후원</Kicker>
        <h1 className="h-display">
          Support the worlds <em className="it">we are building.</em>
        </h1>
        <p className="lede" style={{ marginTop: 14 }}>
          몽마 스튜디오가 더 자유롭고 개성 있는 게임을 만들 수 있도록 응원해
          주세요. 큰 후원이 아니어도, 작은 응원 하나하나가 다음 한 페이지를
          그릴 시간을 만들어 줍니다.
        </p>
        <div className="cta-row">
          <Button href="https://discord.gg/Gz2CtFPYBK">
            Join Discord <Arrow />
          </Button>
          <Button variant="accent" href={site.social.steamRevenant}>
            Wishlist on Steam
          </Button>
          <Button variant="ghost" href={`mailto:${site.email.business}`}>
            Contact Business
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>/ why support · 왜 후원인가요?</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                Why support us?
              </h2>
            </div>
            <p className="lede">
              우리는 마케팅 예산도, 광고도 없는 작은 팀입니다. 응원의 형태가
              곧 다음 작품의 가능성이 됩니다.
            </p>
          </div>
          <Reveal className="why-grid">
            {supportWhy.map((w) => (
              <div key={w.num} className="why">
                <span className="num">{w.num}</span>
                <h4>{w.title}</h4>
                <p>{w.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 24 }}>
            <div>
              <Kicker>/ ways to support · 후원 방식</Kicker>
              <h2 className="h-section" style={{ margin: "14px 0 0" }}>
                Support options
              </h2>
            </div>
            <p className="lede">
              현재는 안내 위주입니다. 결제 / 후원 링크는 정식 페이지가
              준비되는 대로 차근차근 연결됩니다.
            </p>
          </div>
          <Reveal className="support-options">
            {supportOptions.map((o, i) => (
              <article key={i} className={`support-card ${o.accent}`}>
                <span className="num">{o.num}</span>
                <h4>{o.title}</h4>
                <p>{o.description}</p>
                <div className="row">
                  {"disabled" in o.primary && o.primary.disabled ? (
                    <button className="btn btn--sm" disabled>
                      {o.primary.label}
                    </button>
                  ) : (
                    <Button size="sm" href={(o.primary as { href: string }).href}>
                      {o.primary.label}
                    </Button>
                  )}
                  {o.secondary && (
                    <Button
                      variant="ghost"
                      size="sm"
                      href={o.secondary.href}
                    >
                      {o.secondary.label}
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
              <strong>Note · </strong>Support options and payment links will be
              connected later. 결제 · 정기 후원 등의 기능은 정식 후원
              페이지가 준비되는 대로 천천히 추가됩니다. 무리한 후원이 아닌,
              가장 편안한 형태로 응원해 주세요.
            </p>
            <span className="stamp">Honest · Indie · Slow</span>
          </div>
        </div>
      </section>
    </main>
  );
}
