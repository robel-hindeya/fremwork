"use client";

import { useState } from "react";

const CASES = [
  { label: "Booking app", prompt: "A booking app for my yoga studio, with class packs and Stripe payments.",
    plan: ["Sign-in with email links", "Class schedule and bookings", "Stripe checkout for packs", "Studio admin dashboard", "Deploy to a preview URL"] },
  { label: "Support triage", prompt: "An internal tool that reads support emails, labels them and assigns each to a teammate.",
    plan: ["Shared inbox sync", "AI labels and priority", "Assign to a teammate", "Audit log of changes", "Deploy to a preview URL"] },
  { label: "Waitlist site", prompt: "A waitlist site where people move up the line by inviting friends.",
    plan: ["Landing page", "Signup form with validation", "Referral links and rank", "Confirmation emails", "Deploy to a preview URL"] },
];

export default function BuildPanel() {
  const [sel, setSel] = useState(0);
  const cur = CASES[sel];
  return (
    <div className="core" aria-label="Interactive example of a Fremwork build">
      <div className="core-head"><span>Your brief</span><span>Pick an example</span></div>
      <p className="prompt">{cur.prompt}<span className="caret" aria-hidden="true" /></p>
      <div className="chips" role="group" aria-label="Example briefs">
        {CASES.map((c, i) => (
          <button key={c.label} type="button" className={`chip${i === sel ? " on" : ""}`} aria-pressed={i === sel} onClick={() => setSel(i)}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="rule" />
      <div className="core-head"><span>Fremwork builds</span></div>
      <ul className="plan">
        {cur.plan.map((t, i) => (
          <li key={t}>
            <span aria-hidden="true" className={i === cur.plan.length - 1 ? "dot ring" : "dot"} />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
