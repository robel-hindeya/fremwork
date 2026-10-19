import Link from "next/link";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="dark foot">
      <div className="wrap foot-in">
        <Link href="/" className="brand"><Mark size={30} frame="#FFFFFF" /><span>Fremwork</span></Link>
        <nav className="foot-nav" aria-label="Footer">
          <Link href="/#product">Product</Link>
          <Link href="/ticket">Events</Link>
          <Link href="/#frame">How it works</Link>
          <Link href="/#waitlist">Waitlist</Link>
          <a href="#top">Back to top</a>
        </nav>
        <div className="copy">© 2026 Fremwork</div>
      </div>
    </footer>
  );
}
