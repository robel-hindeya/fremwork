import BuildPanel from "./BuildPanel";

export default function Hero() {
  return (
    <section className="wrap">
      <div className="frame">
        <div className="hero-text">
          <h1>Say it.<br />Ship it.</h1>
          <p className="lead">
            Fremwork turns a plain-language brief into working software. Sign-in, data and deploys come
            built in, so your time goes to the part only you can write.
          </p>
          <div className="cta-row">
            <a className="btn" href="#waitlist">Join the waitlist</a>
            <a className="textlink" href="#frame">See how it works</a>
          </div>
        </div>
        <BuildPanel />
      </div>
    </section>
  );
}
