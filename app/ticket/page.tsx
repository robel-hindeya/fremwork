import type { Metadata } from "next";
import Header from "@/components/Header";
import TicketCard from "@/components/TicketCard";
import TicketActions from "@/components/TicketActions";

export const metadata: Metadata = {
  title: "Here's your ticket — Fremwork",
  description: "General Admission ticket for Fremwork Meetup at Hub One, Addis Ababa.",
};

type PageProps = {
  searchParams?: Promise<{ name?: string; code?: string; no?: string }>;
};

export default async function TicketPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const attendee = params?.name || "Abel Tesfaye";
  const code = params?.code || "FW-YAKWSX";
  const ticketNumber = params?.no || "No. 0001";

  return (
    <>
      <Header />
      <main id="top">
        <div className="wrap ticket-page">
          <div className="ticket-inner">
            {/* Eyebrow & Main Title */}
            <div className="t-eyebrow">YOU&apos;RE IN</div>
            <h1 className="t-heading">Here&apos;s your ticket.</h1>

            {/* The Ticket Graphic */}
            <div className="ticket-wrapper">
              <TicketCard
                attendee={attendee}
                code={code}
                ticketNumber={ticketNumber}
                date="Dec 05, 2026"
                time="17:00"
                place="Hub One, Addis Ababa"
                eventName="Fremwork Meetup"
              />
            </div>

            {/* Action Controls */}
            <TicketActions />
          </div>
        </div>
      </main>
    </>
  );
}
