import Kicker from "@/components/common/Kicker";
import Reveal from "@/components/common/Reveal";
import { futureProjects } from "@/content/games";

const ACCENT_CLASS: Record<"violet" | "blue" | "green", string> = {
  violet: "rm rm--violet",
  blue: "rm rm--blue",
  green: "rm rm--green",
};

export default function FutureGamesSection() {
  return (
    <section className="section" aria-labelledby="future-h">
      <div className="wrap">
        <div className="two-col" style={{ marginBottom: 36 }}>
          <div>
            <Kicker>/ roadmap · 다음 세계들</Kicker>
            <h2
              id="future-h"
              className="h-section"
              style={{ margin: "14px 0 0" }}
            >
              More worlds,{" "}
              <span className="serif italic">being sketched.</span>
            </h2>
          </div>
          <p className="lede">
            몽마 스튜디오는 한 가지 장르에 묶이지 않습니다. 다음 프로젝트는 어쩌면
            완전히 다른 분위기일 수도 있어요.
          </p>
        </div>
        <Reveal className="roadmap">
          {futureProjects.map((p) => (
            <div key={p.id} className={ACCENT_CLASS[p.accent]}>
              <span className="stamp">{p.stamp}</span>
              <div>
                <span className="mono">{p.label}</span>
                <h4>{p.title}</h4>
                <p>{p.description}</p>
              </div>
              <span className="mono" style={{ color: "var(--ink-mute)" }}>
                {p.footnote}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
