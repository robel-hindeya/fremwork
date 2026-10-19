"use client";

import Mark from "./Mark";

export default function FrameSection() {
  const FRAME_ITEMS = [
    { name: "Sign-in", desc: "OAuth, magic links, session tokens & secure passkeys", status: "Active" },
    { name: "Payments", desc: "Stripe billing, recurring invoices & customer portal", status: "Ready" },
    { name: "Database", desc: "PostgreSQL, automated Prisma migrations & Edge connection pool", status: "Synced" },
    { name: "Email", desc: "Transactional templates & reliable delivery via Resend", status: "Connected" },
    { name: "Deploys", desc: "Instant Edge CDN, automatic preview URLs & global SSL", status: "Automated" },
  ];

  const CORE_ITEMS = [
    { name: "The screens", desc: "Custom visual interfaces, client state, and responsive layouts" },
    { name: "The rules", desc: "Proprietary business logic, pricing formulas, and team workflows" },
    { name: "The words", desc: "Product copy, onboarding steps, and unique brand voice" },
  ];

  return (
    <section id="frame" className="v-section v-frame-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="v-section-head">
          <div className="v-badge">
            <span className="v-badge-dot" />
            Architecture
          </div>
          <h2 className="v-title">The frame is solved. The core is yours.</h2>
          <p className="v-subtitle">
            A clear line between what is universal and what makes your product uniquely valuable.
          </p>
        </div>

        {/* Comparative Architecture Cards */}
        <div className="v-arch-grid">
          {/* Left Column: The Frame */}
          <div className="v-arch-card v-arch-frame">
            <div className="v-arch-header">
              <div className="v-arch-pill v-pill-frame">SOLVED INFRASTRUCTURE</div>
              <h3 className="v-arch-title">The frame</h3>
              <p className="v-arch-desc">
                Sign-in, payments, database, email and deploys. Built once, kept up to date, never rewritten for each new project.
              </p>
            </div>

            <div className="v-arch-list">
              {FRAME_ITEMS.map((item) => (
                <div key={item.name} className="v-arch-item">
                  <div className="v-arch-item-left">
                    <span className="v-arch-check">✓</span>
                    <div>
                      <div className="v-arch-item-name">{item.name}</div>
                      <div className="v-arch-item-sub">{item.desc}</div>
                    </div>
                  </div>
                  <span className="v-arch-tag">{item.status}</span>
                </div>
              ))}
            </div>

            <div className="v-arch-card-footer">
              <span className="v-arch-metric">0 hours spent rewiring boilerplate</span>
            </div>
          </div>

          {/* Center Brand Icon Highlight */}
          <div className="v-arch-center-art" aria-hidden="true">
            <div className="v-art-glow" />
            <Mark size={140} frame="#FFFFFF" core="#C6F432" label="Fremwork frame and core" />
            <div className="v-art-connector">
              <span className="v-art-line" />
            </div>
          </div>

          {/* Right Column: The Core */}
          <div className="v-arch-card v-arch-core">
            <div className="v-arch-header">
              <div className="v-arch-pill v-pill-core">YOUR PRODUCT</div>
              <h3 className="v-arch-title v-core-title">The core</h3>
              <p className="v-arch-desc">
                The screens, rules and words that only your product has. This is where you and Fremwork spend your time.
              </p>
            </div>

            <div className="v-arch-list">
              {CORE_ITEMS.map((item) => (
                <div key={item.name} className="v-arch-item v-core-item">
                  <div className="v-arch-item-left">
                    <span className="v-core-dot" />
                    <div>
                      <div className="v-arch-item-name v-core-name">{item.name}</div>
                      <div className="v-arch-item-sub">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="v-core-canvas">
              <div className="v-canvas-head">
                <span className="v-canvas-dot" />
                <span className="v-canvas-title">Your Distinctive Logic</span>
              </div>
              <div className="v-canvas-snippet">
                <code>
                  <span className="v-kw">export default function</span> <span className="v-fn">CustomEngine</span>() &#123;<br />
                  &nbsp;&nbsp;<span className="v-comment">// All your engineering effort goes right here</span><br />
                  &nbsp;&nbsp;<span className="v-kw">return</span> &lt;<span className="v-tag">UniqueProductExperience</span> /&gt;;<br />
                  &#125;
                </code>
              </div>
            </div>

            <div className="v-arch-card-footer v-core-footer">
              <span className="v-core-metric">100% focused on your differentiator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
