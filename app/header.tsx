import Link from "next/link";
import Image from "next/image";
import { Motion } from "./motion";

type Page = "about" | "what-we-do" | "projects";

const links: { id: Page; href: string; label: string }[] = [
  { id: "about", href: "/", label: "About us" },
  { id: "what-we-do", href: "/what-we-do", label: "What we do" },
  { id: "projects", href: "/projects", label: "Projects" },
];

export function Header({ current }: { current: Page }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Workforce Engineering Limited, home">
        <Image src="/workforce-logo.png" alt="Workforce Engineering Limited" width={757} height={220} preload />
      </Link>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.id} href={link.href} aria-current={link.id === current ? "page" : undefined}>
            {link.label}
          </Link>
        ))}
        <span className="nav-disabled">Contact</span>
      </nav>
      <Motion />
    </header>
  );
}
