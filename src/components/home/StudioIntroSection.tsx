import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import { studioIntro } from "@/content/home";

export default function StudioIntroSection() {
  return (
    <section className="section" aria-labelledby="studio-intro">
      <div className="wrap">
        <Reveal className="two-col">
          <div>
            <Kicker>{studioIntro.kicker}</Kicker>
            <h2
              id="studio-intro"
              className="h-section"
              style={{ margin: "14px 0 22px" }}
            >
              {studioIntro.headline}{" "}
              <span className="serif italic">{studioIntro.headlineItalic}</span>
            </h2>
          </div>
          <p className="studio-bigtext">
            {studioIntro.bigtextLine1}
            <br />
            {studioIntro.bigtextLine2}
            <em>{studioIntro.bigtextLine2Em}</em>
            {studioIntro.bigtextLine2End}
          </p>
        </Reveal>

        <div className="spacer-lg"></div>

        <Reveal className="studio-grid">
          {studioIntro.cards.map((c, i) => (
            <div key={i} className="studio-card">
              <span className="num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
