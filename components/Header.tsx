import Link from "next/link";
import Mark from "./Mark";

export default function Header() {
  return (
    <header className="wrap header">
      <Link href="/" className="brand" aria-label="Fremwork home">
        <Mark size={34} frame="#0A0A0A" />
        <span>Fremwork</span>
      </Link>
      <nav className="navlinks" aria-label="Main">
        <Link className="navlink" href="/#product">Product</Link>
        <Link className="navlink" href="/ticket">Events</Link>
        <Link className="navlink" href="/#frame">How it works</Link>
      </nav>
      <Link className="btn btn-sm" href="/#waitlist">Join the waitlist</Link>
    </header>
  );
}
