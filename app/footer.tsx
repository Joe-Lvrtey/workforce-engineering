import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="brand brand-footer" href="/about-us" aria-label="Workforce Engineering Limited">
          <img src="/workforce-logo.svg" alt="Workforce Engineering Limited" />
        </Link>
        <p>Building with purpose.<br />Creating what lasts.</p>
        <div className="footer-links"><Link href="/about-us">About us</Link></div>
        <div className="footer-contact"><span>ACCRA, GHANA</span><a href="mailto:info@workorceengineeringlimited.com">info@workorceengineeringlimited.com</a><a href="tel:+233552760549">+233 55 276 0549</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Workforce Engineering Limited</span><span>BUILT ON TRUST. MADE TO ENDURE.</span></div>
    </footer>
  );
}
