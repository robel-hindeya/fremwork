"use client";

import { useState } from "react";

export default function Features() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("git clone https://github.com/your-org/fremwork-app.git");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="product" className="v-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="v-section-head">
          <div className="v-badge">
            <span className="v-badge-dot" />
            Product Features
          </div>
          <h2 className="v-title">The tedious parts are already handled.</h2>
          <p className="v-subtitle">
            Everything between your idea and production software is automated, readable, and under your control.
          </p>
        </div>

        {/* Vercel-style Bento Grid */}
        <div className="v-bento-grid">
          {/* Card 1: Briefs become projects (Large Hero Card) */}
          <div className="v-bento-card v-bento-span-2">
            <div className="v-bento-content">
              <div className="v-card-tag">NATURAL LANGUAGE TO CODE</div>
              <h3 className="v-card-title">Briefs become projects</h3>
              <p className="v-card-desc">
                Write what you want in your own words. Fremwork scaffolds the app, the data model and the screens, then tells you what it chose and why.
              </p>
            </div>

            {/* Interactive Terminal / Scaffold Visualizer */}
            <div className="v-terminal-mock">
              <div className="v-terminal-header">
                <div className="v-terminal-dots">
                  <span className="v-dot v-dot-red" />
                  <span className="v-dot v-dot-yellow" />
                  <span className="v-dot v-dot-green" />
                </div>
                <div className="v-terminal-title">fremwork brief --live</div>
                <div className="v-terminal-status">● Streaming</div>
              </div>

              <div className="v-terminal-body">
                <div className="v-prompt-bubble">
                  <span className="v-prompt-label">Prompt:</span>
                  <span className="v-prompt-text">
                    &ldquo;A subscription booking app with Stripe checkout, auth, and real-time dashboard.&rdquo;
                  </span>
                </div>

                <div className="v-scaffold-tree">
                  <div className="v-tree-item">
                    <span className="v-tree-icon">✓</span>
                    <span className="v-tree-path">prisma/schema.prisma</span>
                    <span className="v-tree-reason">PostgreSQL schema (User, Org, Booking, Tier)</span>
                  </div>
                  <div className="v-tree-item">
                    <span className="v-tree-icon">✓</span>
                    <span className="v-tree-path">app/api/auth/[...auth]/route.ts</span>
                    <span className="v-tree-reason">OAuth + Magic Link authentication</span>
                  </div>
                  <div className="v-tree-item">
                    <span className="v-tree-icon">✓</span>
                    <span className="v-tree-path">app/dashboard/analytics/page.tsx</span>
                    <span className="v-tree-reason">Server components with streaming UI</span>
                  </div>
                  <div className="v-tree-item">
                    <span className="v-tree-icon">✓</span>
                    <span className="v-tree-path">api/webhooks/stripe/route.ts</span>
                    <span className="v-tree-reason">Stripe customer portal &amp; checkout sync</span>
                  </div>
                </div>

                <div className="v-terminal-footer">
                  <div className="v-decision-box">
                    <span className="v-decision-label">Why Fremwork chose this:</span>
                    <span className="v-decision-text">
                      Next.js 15 App Router + Edge handlers for zero-cold-start latency and automatic type safety.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Changes you can read */}
          <div className="v-bento-card">
            <div className="v-bento-content">
              <div className="v-card-tag">AUDITABLE DIFFS</div>
              <h3 className="v-card-title">Changes you can read</h3>
              <p className="v-card-desc">
                Every edit arrives as a plain diff with a reason attached. Accept it, adjust it or roll it back. Nothing lands behind your back.
              </p>
            </div>

            {/* Vercel-style Diff Visualizer */}
            <div className="v-diff-mock">
              <div className="v-diff-header">
                <span className="v-diff-file">checkout/route.ts</span>
                <span className="v-diff-badge">Reason: Add team seat pricing</span>
              </div>
              <div className="v-diff-body">
                <div className="v-diff-line v-diff-ctx">
                  <span className="v-ln">12</span>
                  <span className="v-code">export async function POST(req) &#123;</span>
                </div>
                <div className="v-diff-line v-diff-del">
                  <span className="v-ln">13</span>
                  <span className="v-code">- const price = TIER_BASE;</span>
                </div>
                <div className="v-diff-line v-diff-add">
                  <span className="v-ln">13</span>
                  <span className="v-code">+ const price = calculateSeats(team.size);</span>
                </div>
                <div className="v-diff-line v-diff-add">
                  <span className="v-ln">14</span>
                  <span className="v-code">+ await stripe.subscriptions.update(id, &#123; price &#125;);</span>
                </div>
                <div className="v-diff-line v-diff-ctx">
                  <span className="v-ln">15</span>
                  <span className="v-code">  return Response.json(&#123; ok: true &#125;);</span>
                </div>
              </div>
              <div className="v-diff-footer">
                <span className="v-diff-status">✓ 1 addition · 1 deletion</span>
                <span className="v-diff-action">Rollback ready</span>
              </div>
            </div>
          </div>

          {/* Card 3: Code you keep */}
          <div className="v-bento-card">
            <div className="v-bento-content">
              <div className="v-card-tag">ZERO LOCK-IN</div>
              <h3 className="v-card-title">Code you keep</h3>
              <p className="v-card-desc">
                Everything lives in a repository you own, in frameworks you already know. Take it elsewhere any day, no export step.
              </p>
            </div>

            {/* Vercel-style Repo & Clone Box */}
            <div className="v-repo-mock">
              <div className="v-repo-head">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="v-repo-name">robel-hindeya/fremwork</span>
                <span className="v-repo-badge">Public</span>
              </div>

              <div className="v-stack-tags">
                <span className="v-stack-tag">Next.js 15</span>
                <span className="v-stack-tag">React 19</span>
                <span className="v-stack-tag">TypeScript</span>
                <span className="v-stack-tag">Tailwind</span>
                <span className="v-stack-tag">Prisma</span>
              </div>

              <div className="v-clone-box">
                <span className="v-clone-cmd">git clone https://github.com/robel-hindeya/fremwork.git</span>
                <button
                  type="button"
                  className="v-copy-btn"
                  onClick={handleCopy}
                  aria-label="Copy clone command"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="v-repo-foot">
                <span>Standard Git repository</span>
                <span>•</span>
                <span>Zero proprietary runtime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
