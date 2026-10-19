"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "loading" | "done">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!EMAIL.test(v)) return setStatus("error");
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: v }) });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setEmail(v);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="wrap waitlist">
      <h2>Start with one sentence.</h2>
      <div className="wl-form">
        {status === "done" ? (
          <div className="done" role="status">
            <div className="done-title">You&apos;re on the list.</div>
            <p>We&apos;ll email {email} when your invite is ready.</p>
            <div style={{ marginTop: "18px" }}>
              <Link href={`/ticket?name=${encodeURIComponent(email.split("@")[0].replace(/[._]/g, " "))}`} className="btn btn-sm">
                View your ticket →
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="email">Work email</label>
            <input id="email" className="field" type="email" name="email" placeholder="you@company.com" autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }} />
            {status === "error" && <p role="alert" className="err">Enter a valid email, like you@company.com.</p>}
            <button className="btn full" type="submit" disabled={status === "loading"}>{status === "loading" ? "Joining…" : "Join the waitlist"}</button>
            <p className="note">Early access opens in waves. We email once when your invite is ready.</p>
          </form>
        )}
      </div>
    </section>
  );
}
