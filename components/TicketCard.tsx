"use client";

import Mark from "./Mark";

type Props = {
  attendee?: string;
  ticketNumber?: string;
  code?: string;
  date?: string;
  time?: string;
  place?: string;
  eventName?: string;
};

// Concentric hexagon paths generator (flat-top, pointed sides)
function HexagonBackground() {
  const radii = [70, 115, 160, 205, 250];
  const cx = 190;
  const cy = 190;

  return (
    <svg
      className="t-bg-hex"
      viewBox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {radii.map((r, i) => {
        // Hexagon vertices with flat top and flat bottom, pointed left & right (angles: 0, 60, 120, 180, 240, 300)
        const points = Array.from({ length: 6 }).map((_, idx) => {
          const angle = (idx * 60 * Math.PI) / 180;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(" ");

        return (
          <polygon
            key={i}
            points={points}
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1.5"
          />
        );
      })}
    </svg>
  );
}

// Fremwork cute robot mascot
function Mascot() {
  return (
    <svg
      width="78"
      height="68"
      viewBox="0 0 78 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fremwork Mascot"
      className="t-mascot-svg"
    >
      {/* Arms waving */}
      <line x1="20" y1="42" x2="6" y2="30" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="5" cy="29" r="2.5" fill="#FFFFFF" />

      <line x1="56" y1="42" x2="70" y2="30" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="71" cy="29" r="2.5" fill="#FFFFFF" />

      {/* Feet */}
      <rect x="29" y="58" width="4" height="7" rx="1.5" fill="#FFFFFF" />
      <rect x="43" y="58" width="4" height="7" rx="1.5" fill="#FFFFFF" />

      {/* Head / Body outer frame */}
      <rect x="20" y="22" width="36" height="36" rx="4" fill="#FFFFFF" />

      {/* Head / Body inner dark screen */}
      <rect x="23" y="25" width="30" height="30" rx="2" fill="#0E0E0E" />

      {/* Volt green square offset accent badge on top right */}
      <rect x="46" y="14" width="16" height="16" rx="2" fill="#C6F432" />

      {/* Eyes */}
      <rect x="29" y="35" width="3.5" height="3.5" rx="0.5" fill="#C6F432" />
      <rect x="43" y="35" width="3.5" height="3.5" rx="0.5" fill="#C6F432" />

      {/* Cute smiling mouth */}
      <path
        d="M33 44 C34.5 47, 41.5 47, 43 44"
        stroke="#C6F432"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Crisp QR Code SVG
function QRCode() {
  // 21x21 QR Code matrix representation (1 = black module, 0 = green)
  const matrix = [
    // 1-7
    [1,1,1,1,1,1,1, 0, 1,0,1,1,0, 0, 1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1, 0, 0,1,1,0,1, 0, 1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1, 0, 1,0,1,1,0, 0, 1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1, 0, 0,1,0,1,1, 0, 1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1, 0, 1,1,0,0,1, 0, 1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1, 0, 0,1,1,1,0, 0, 1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1, 0, 1,0,1,0,1, 0, 1,1,1,1,1,1,1],
    // 8
    [0,0,0,0,0,0,0, 0, 1,1,0,1,0, 0, 0,0,0,0,0,0,0],
    // 9-13
    [1,0,1,1,0,1,1, 1, 0,1,1,0,1, 1, 1,0,1,1,0,1,0],
    [0,1,0,1,1,0,0, 1, 1,0,1,1,0, 0, 0,1,1,0,1,0,1],
    [1,1,1,0,0,1,1, 0, 1,1,0,0,1, 1, 1,0,0,1,1,1,0],
    [0,1,0,1,1,0,1, 1, 0,1,1,0,1, 0, 1,1,0,1,0,1,1],
    [1,0,1,1,0,1,0, 0, 1,0,0,1,1, 1, 0,1,1,0,1,0,0],
    // 14
    [0,0,0,0,0,0,0, 0, 1,1,0,1,0, 0, 1,0,1,1,0,1,1],
    // 15-21
    [1,1,1,1,1,1,1, 0, 0,1,1,0,1, 0, 1,1,0,0,1,0,1],
    [1,0,0,0,0,0,1, 0, 1,0,1,1,0, 1, 0,1,1,1,0,1,0],
    [1,0,1,1,1,0,1, 0, 0,1,0,1,1, 0, 1,0,1,0,1,1,1],
    [1,0,1,1,1,0,1, 0, 1,1,1,0,0, 1, 1,1,0,1,0,0,1],
    [1,0,1,1,1,0,1, 0, 0,1,0,1,1, 0, 0,1,1,1,1,0,1],
    [1,0,0,0,0,0,1, 0, 1,0,1,1,0, 1, 1,0,0,1,0,1,0],
    [1,1,1,1,1,1,1, 0, 0,1,1,0,1, 0, 1,1,1,0,1,1,1],
  ];

  const size = 154;
  const modSize = size / 21;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="t-qr-svg"
      aria-label="Ticket QR code"
    >
      {matrix.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          cell === 1 ? (
            <rect
              key={`${rIdx}-${cIdx}`}
              x={cIdx * modSize}
              y={rIdx * modSize}
              width={modSize + 0.1}
              height={modSize + 0.1}
              fill="#0A0A0A"
            />
          ) : null
        )
      )}
    </svg>
  );
}

export default function TicketCard({
  attendee = "Abel Tesfaye",
  ticketNumber = "No. 0001",
  code = "FW-YAKWSX",
  date = "Dec 05, 2026",
  time = "17:00",
  place = "Hub One, Addis Ababa",
  eventName = "Fremwork Meetup",
}: Props) {
  return (
    <div className="ticket-card" id="fremwork-ticket">
      {/* Dark Main Section */}
      <div className="t-main">
        <HexagonBackground />

        {/* Top: Logo */}
        <div className="t-brand">
          <Mark size={24} frame="#FFFFFF" core="#8C8C8C" />
          <span>Fremwork</span>
        </div>

        {/* Middle: Badge & Title */}
        <div className="t-mid">
          <div className="t-badge">GENERAL ADMISSION</div>
          <h2 className="t-title">{eventName}</h2>
        </div>

        {/* Meta info: Date, Time, Place */}
        <div className="t-meta-grid">
          <div className="t-meta-col">
            <span className="t-label">DATE</span>
            <span className="t-value">{date}</span>
          </div>
          <div className="t-meta-col">
            <span className="t-label">TIME</span>
            <span className="t-value">{time}</span>
          </div>
          <div className="t-meta-col">
            <span className="t-label">PLACE</span>
            <span className="t-value">{place}</span>
          </div>
        </div>

        {/* Attendee Row & Mascot with connecting dotted line */}
        <div className="t-attendee-bar">
          <div className="t-attendee-col">
            <span className="t-label">ATTENDEE</span>
            <span className="t-attendee-name">{attendee}</span>
          </div>
          <div className="t-dotted-lead" aria-hidden="true" />
          <div className="t-mascot-wrap">
            <Mascot />
          </div>
        </div>
      </div>

      {/* Ticket Seam with semicircular notches and dashed perforation */}
      <div className="t-seam" aria-hidden="true">
        <div className="t-notch t-notch-top" />
        <div className="t-perforation" />
        <div className="t-notch t-notch-bottom" />
      </div>

      {/* Volt Green Stub */}
      <div className="t-stub">
        <div className="t-stub-head">
          <span className="t-stub-tag">ADMIT ONE</span>
          <span className="t-stub-no">{ticketNumber}</span>
        </div>

        <div className="t-qr-container">
          <div className="t-qr-box">
            <QRCode />
          </div>
          <div className="t-qr-code">{code}</div>
        </div>

        <div className="t-stub-foot">
          <div className="t-stub-tier">General admission</div>
          <div className="t-stub-domain">FREMWORK.COM</div>
        </div>
      </div>
    </div>
  );
}
