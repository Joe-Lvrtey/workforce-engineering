import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="brand brand-footer" href="/about-us" aria-label="Workforce Engineering Limited">
          <Image src="/workforce-logo.png" alt="Workforce Engineering Limited" width={757} height={220} />
        </Link>
        <p>Building with purpose.<br />Creating what lasts.</p>
        <div className="footer-links"><Link href="/about-us">About us</Link></div>
        <div className="footer-contact">
          <span>ACCRA, GHANA</span>
          <a href="mailto:workforceengineeringlimited@gmail.com">workforceengineeringlimited@gmail.com</a>
          <a href="tel:+233547016610">+233 54 701 6610</a>
          {/* TODO: add second phone +233 20 936 348X once the client confirms the missing digit (X). Not rendered until then. */}
          <div>P.O. Box 5295, Accra-North, Ghana</div>
          <div>House No. C45/12, Abavana School Junction, Pigfarm Newtown Circle Road, near PNC Head Office, Accra</div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Workforce Engineering Limited</span><span>BUILT ON TRUST. MADE TO ENDURE.</span></div>
    </footer>
  );
}
