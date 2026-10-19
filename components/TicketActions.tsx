"use client";

import Link from "next/link";

export default function TicketActions() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="t-actions">
      <button
        type="button"
        className="t-btn-print"
        onClick={handlePrint}
        id="print-ticket-btn"
      >
        Print or save as PDF
      </button>
      <Link href="/#product" className="t-link-more" id="more-events-link">
        More events
      </Link>
    </div>
  );
}
