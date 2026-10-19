const ROWS = [
  { title: "Briefs become projects", body: "Write what you want in your own words. Fremwork scaffolds the app, the data model and the screens, then tells you what it chose and why." },
  { title: "Changes you can read", body: "Every edit arrives as a plain diff with a reason attached. Accept it, adjust it or roll it back. Nothing lands behind your back." },
  { title: "Code you keep", body: "Everything lives in a repository you own, in frameworks you already know. Take it elsewhere any day, no export step." },
];

export default function Features() {
  return (
    <section id="product" className="wrap features">
      <h2>The tedious parts are already handled.</h2>
      <div>
        {ROWS.map((r) => (
          <div className="row" key={r.title}>
            <h3 className="r-title">{r.title}</h3>
            <p className="r-desc">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
