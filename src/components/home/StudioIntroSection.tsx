"use client";

import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import { studioIntro } from "@/content/home";
import { useLanguage } from "@/components/common/LanguageProvider";

export default function StudioIntroSection() {
  const { tr } = useLanguage();
  return (
    <section className="section" aria-labelledby="studio-intro">
      <div className="wrap">
        <Reveal className="two-col">
          <div>
            <Kicker>{tr(studioIntro.kicker)}</Kicker>
            <h2
              id="studio-intro"
              className="h-section"
              style={{ margin: "14px 0 22px" }}
            >
              {tr(studioIntro.headline)}{" "}
              <span className="serif italic">{tr(studioIntro.headlineItalic)}</span>
            </h2>
          </div>
          <p className="studio-bigtext">
            {tr(studioIntro.bigtextLine1)}
            <br />
            {tr(studioIntro.bigtextLine2)}
            <em>{tr(studioIntro.bigtextLine2Em)}</em>
            {tr(studioIntro.bigtextLine2End)}
          </p>
        </Reveal>

        <div className="spacer-lg"></div>

        <Reveal className="studio-grid">
          {studioIntro.cards.map((c, i) => (
            <div key={i} className="studio-card">
              <span className="num">{tr(c.num)}</span>
              <h3>{tr(c.title)}</h3>
              <p>{tr(c.description)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
