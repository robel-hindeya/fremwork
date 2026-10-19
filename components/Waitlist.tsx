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
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: v }),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setEmail(v);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="v-section v-waitlist-section">
      {/* Ambient Vercel-style Spotlight */}
      <div className="v-spotlight" aria-hidden="true" />

      <div className="wrap v-waitlist-wrap">
        <div className="v-waitlist-box">
          <div className="v-badge">
            <span className="v-badge-dot" />
            Early Access
          </div>

          <h2 className="v-waitlist-title">Start with one sentence.</h2>
          <p className="v-waitlist-subtitle">
            Ship software without spending weeks on boilerplate. Join the next cohort.
          </p>

          <div className="v-waitlist-form-container">
            {status === "done" ? (
              <div className="v-waitlist-done" role="status">
                <div className="v-done-badge">
                  <span className="v-done-check">✓</span>
                  <span>You&apos;re on the list</span>
                </div>
                <h3 className="v-done-title">Welcome aboard.</h3>
                <p className="v-done-desc">
                  We&apos;ll email <strong>{email}</strong> when your invite is ready.
                </p>
                <div className="v-done-actions">
                  <Link
                    href={`/ticket?name=${encodeURIComponent(
                      email.split("@")[0].replace(/[._]/g, " ")
                    )}`}
                    className="v-btn v-btn-primary"
                  >
                    View your event ticket →
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="v-form" noValidate>
                <div className="v-input-group">
                  <label htmlFor="email" className="v-visually-hidden">
                    Work email
                  </label>
                  <div className="v-input-bar">
                    <div className="v-input-prefix">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      className="v-email-input"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      required
                    />
                    <button
                      className="v-submit-btn"
                      type="submit"
                      disabled={status === "loading"}
                      id="waitlist-submit"
                    >
                      {status === "loading" ? "Joining…" : "Join the waitlist"}
                    </button>
                  </div>
                </div>

                {status === "error" && (
                  <p role="alert" className="v-form-err">
                    Enter a valid email, like you@company.com.
                  </p>
                )}

                <p className="v-form-note">
                  Early access opens in waves. We email once when your invite is ready.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
