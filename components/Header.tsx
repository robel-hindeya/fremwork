import Link from "next/link";
import Mark from "./Mark";

export default function Header() {
  return (
    <header className="v-header-outer">
      <div className="wrap v-header-container">
        <Link href="/" className="brand" aria-label="Fremwork home">
          <Mark size={28} frame="#FFFFFF" core="#C6F432" />
          <span>Fremwork</span>
        </Link>
        <nav className="navlinks" aria-label="Main">
          <Link className="navlink" href="/#product">Product</Link>
          <Link className="navlink" href="/ticket">Events</Link>
          <Link className="navlink" href="/#frame">How it works</Link>
        </nav>
        <Link className="v-header-cta" href="/#waitlist">
          Join the waitlist
        </Link>
      </div>
    </header>
  );
}
