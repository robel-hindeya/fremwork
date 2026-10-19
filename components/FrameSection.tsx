import Mark from "./Mark";

export default function FrameSection() {
  return (
    <section id="frame" className="dark">
      <div className="wrap frame-grid">
        <div className="frame-copy">
          <h2>The frame is solved. The core is yours.</h2>
          <div className="legend">
            <div className="legend-item">
              <span className="swatch" style={{ background: "#fff" }} aria-hidden="true" />
              <div>
                <div className="legend-title">The frame</div>
                <p>Sign-in, payments, database, email and deploys. Built once, kept up to date, never rewritten for each new project.</p>
              </div>
            </div>
            <div className="legend-item">
              <span className="swatch" style={{ background: "#C6F432" }} aria-hidden="true" />
              <div>
                <div className="legend-title">The core</div>
                <p>The screens, rules and words that only your product has. This is where you and Fremwork spend your time.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-art">
          <Mark size={440} frame="#FFFFFF" core="#C6F432" label="The Fremwork mark: an open frame with a core block in its corner" className="big-mark" />
        </div>
      </div>
    </section>
  );
}
