import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import { newsItems } from "@/content/home";

export default function NewsSection() {
  return (
    <section className="section" aria-labelledby="news-h">
      <div className="wrap">
        <div className="two-col" style={{ marginBottom: 28 }}>
          <div>
            <Kicker>/ news · 새 소식</Kicker>
            <h2
              id="news-h"
              className="h-section"
              style={{ margin: "14px 0 0" }}
            >
              Field notes &amp; updates
            </h2>
          </div>
          <p className="lede">
            스튜디오에서 일어나는 작은 일들. 데모, 개발 노트, 페이지 오픈 등.
          </p>
        </div>
        <Reveal className="news-grid">
          {newsItems.map((n, i) => {
            const styleFor =
              n.accent === "yellow"
                ? {
                    background:
                      "color-mix(in oklab, var(--yellow) 35%, var(--paper))",
                  }
                : n.accent === "blue"
                  ? {
                      background:
                        "color-mix(in oklab, var(--blue) 18%, var(--paper))",
                    }
                  : undefined;
            return (
              <article key={i} className="news-card" style={styleFor}>
                <span className="date">{n.date}</span>
                <h4>{n.title}</h4>
                <p>{n.body}</p>
                <span className="more">{n.more}</span>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
