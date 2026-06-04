import Button from "@/components/common/Button";
import Kicker from "@/components/common/Kicker";
import { site } from "@/content/site";
import { homeContactCta } from "@/content/home";

export default function CTASection() {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-h">
      <div className="wrap">
        <div>
          <Kicker style={{ color: "#bdb29a" }}>{homeContactCta.kicker}</Kicker>
          <h2 id="contact-cta-h" style={{ marginTop: 14 }}>
            {homeContactCta.headline}{" "}
            <span
              className="serif italic"
              style={{ color: "var(--yellow)" }}
            >
              {homeContactCta.headlineItalic}
            </span>
          </h2>
        </div>
        <div className="ccrow">
          <Button href={`mailto:${site.email.press}`}>
            {site.email.press}
          </Button>
          <Button href="/contact">All contact channels</Button>
          <Button href="/press">Press Kit</Button>
        </div>
      </div>
    </section>
  );
}
