import Link from "next/link";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="v-footer">
      <div className="wrap v-footer-inner">
        <Link href="/" className="brand">
          <Mark size={24} frame="#FFFFFF" core="#C6F432" />
          <span>Fremwork</span>
        </Link>
        <nav className="v-footer-nav" aria-label="Footer">
          <Link href="/#product">Product</Link>
          <Link href="/ticket">Events</Link>
          <Link href="/#frame">How it works</Link>
          <Link href="/#waitlist">Waitlist</Link>
          <a href="#top">Back to top</a>
        </nav>
        <div className="v-footer-status">
          <span className="v-status-dot" />
          <span>All systems normal</span>
        </div>
        <div className="v-footer-copy">© 2026 Fremwork Inc.</div>
      </div>
    </footer>
  );
}
