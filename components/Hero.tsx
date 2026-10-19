import Link from "next/link";
import BuildPanel from "./BuildPanel";

export default function Hero() {
  return (
    <section className="v-hero-section">
      <div className="v-hero-glow" aria-hidden="true" />
      <div className="wrap v-hero-wrap">
        <div className="v-hero-content">
          <div className="v-badge">
            <span className="v-badge-dot" />
            Next-generation Software Builder
          </div>

          <h1 className="v-hero-title">
            Say it.<br />
            <span className="v-hero-highlight">Ship it.</span>
          </h1>

          <p className="v-hero-lead">
            Fremwork turns a plain-language brief into working software. Sign-in, data and deploys come built in, so your time goes to the part only you can write.
          </p>

          <div className="v-hero-actions">
            <Link className="v-hero-btn-primary" href="/#waitlist">
              Join the waitlist
            </Link>
            <Link className="v-hero-btn-secondary" href="/#frame">
              See how it works →
            </Link>
          </div>
        </div>

        <div className="v-hero-panel-wrap">
          <BuildPanel />
        </div>
      </div>
    </section>
  );
}
