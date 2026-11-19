import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="brand brand-footer" href="/about-us" aria-label="Workforce Engineering Limited">
          <Image src="/workforce-logo.svg" alt="Workforce Engineering Limited" width={460} height={112} />
        </Link>
        <p>Building with purpose.<br />Creating what lasts.</p>
        <div className="footer-links"><Link href="/about-us">About us</Link></div>
        <div className="footer-contact"><span>ACCRA, GHANA</span><a href="mailto:info@workforceengineeringlimited.com">info@workforceengineeringlimited.com</a><a href="tel:+233552760549">+233 55 276 0549</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Workforce Engineering Limited</span><span>BUILT ON TRUST. MADE TO ENDURE.</span></div>
    </footer>
  );
}
