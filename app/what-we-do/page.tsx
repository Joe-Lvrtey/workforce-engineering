import type { Metadata } from "next";
import Link from "next/link";
import { openGraphBase, site } from "../site";
import { Footer } from "../footer";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Construction, renovation and project management services from Workforce Engineering Limited in Accra, Ghana.",
  alternates: { canonical: "/what-we-do" },
  openGraph: { ...openGraphBase, url: "/what-we-do", title: `What We Do | ${site.name}`, description: "Construction, renovation and project management services from Workforce Engineering Limited in Accra, Ghana." },
  // Draft page, not linked from the site yet. Remove to allow indexing.
  robots: { index: false, follow: true },
};

const offerings = [
  { id: "01", title: "Building construction", lead: "From a clear brief to a confident handover.", body: "We deliver new residential, commercial and institutional buildings with the planning, coordination and on-site care needed to move from concept to completion.", points: ["Residential & multi-unit builds", "Commercial & office construction", "Institutional buildings"] },
  { id: "02", title: "Renovation & fit-out", lead: "Make the space you have work better.", body: "We renew existing buildings and interiors, helping clients adapt their spaces to changing needs while respecting what already works.", points: ["Building upgrades & extensions", "Interior fit-outs", "Repairs & refurbishment"] },
  { id: "03", title: "Project management", lead: "A steady hand at every stage.", body: "We coordinate the decisions, teams and resources that keep a project moving. Our focus is clear communication, practical problem-solving and reliable progress.", points: ["Planning & coordination", "Programme and cost oversight", "Site supervision"] },
  { id: "04", title: "Pre-construction support", lead: "Better preparation. Better outcomes.", body: "Early advice can prevent costly surprises later. We help clients define their scope, understand the site and prepare for a smoother construction process.", points: ["Scope & feasibility discussions", "Site and buildability review", "Delivery planning"] },
];

export default function WhatWeDo() {
  return <><header className="site-header"><Link className="brand" href="/"><img src="/workforce-logo.png" alt="Workforce Engineering Limited" /></Link><nav aria-label="Main navigation"><Link href="/what-we-do">What we do</Link><Link href="/about-us">About us</Link><Link href="/contact">Contact</Link></nav><Link className="header-cta" href="/contact">Start a project <span>↗</span></Link></header>
    <main><section className="page-hero services-hero"><div className="page-hero-image"/><div className="page-hero-shade"/><div className="page-hero-content"><p className="eyebrow light">OUR SERVICES</p><h1>From first idea<br />to <em>final detail.</em></h1><p>Practical expertise for projects that deserve to be done right.</p></div><div className="page-breadcrumb"><Link href="/">HOME</Link><span>/</span> WHAT WE DO</div></section>
      <section className="service-intro section-wrap"><p className="eyebrow">HOW WE HELP</p><h2>One trusted team.<br /><em>Every step forward.</em></h2><p>Every project is different. We listen first, then shape the right team and approach around your goals, site and budget.</p></section>
      <section className="offerings">{offerings.map((item, index)=><article className={`offering ${index % 2 ? "offering-alt" : ""}`} key={item.id}><div className="section-wrap offering-inner"><span className="offering-id">{item.id} <i>—</i></span><div className="offering-main"><p className="eyebrow">{item.title.toUpperCase()}</p><h2>{item.lead}</h2><p>{item.body}</p><Link className="text-link" href="/contact">Discuss your project <span>→</span></Link></div><ul>{item.points.map(point=><li key={point}><span>↗</span>{point}</li>)}</ul></div></article>)}</section>
      <section className="services-bottom"><p className="eyebrow light">HAVE A PROJECT IN MIND?</p><h2>Let’s find the right<br /><em>way to build it.</em></h2><Link className="button button-gold" href="/contact">Talk to our team <span>↗</span></Link></section>
    </main><Footer/></>;
}
