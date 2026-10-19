import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let email = "";
  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  if (!EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email, like you@company.com." }, { status: 422 });
  }
  // TODO: save `email` to your provider (Resend, Loops, Mailchimp, a database…).
  console.log("[waitlist]", email);
  return NextResponse.json({ ok: true });
}
