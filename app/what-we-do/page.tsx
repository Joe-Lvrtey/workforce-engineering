import type { Metadata } from "next";
import Link from "next/link";
import { openGraphBase, site } from "../site";
import { Header } from "../header";
import { Footer } from "../footer";
import { delay } from "../delay";

const description =
  "Road construction, building construction, civil engineering, real estate development, transportation and consultancy from Workforce Engineering Limited in Accra, Ghana.";

export const metadata: Metadata = {
  title: "What We Do",
  description,
  alternates: { canonical: "/what-we-do" },
  openGraph: { ...openGraphBase, url: "/what-we-do", title: `What We Do | ${site.name}`, description },
};

const sectors = [
  { tag: "ROADS & TRANSPORT", title: "Roads that carry a community", body: "New roads, rehabilitation and resurfacing, with the drainage and finishing that keep them in service for years.", image: "/accra-roadworks.jpg" },
  { tag: "BUILDINGS", title: "Structures built to standard", body: "Residential, commercial and institutional buildings, taken from foundations to a finished, inspected handover.", image: "/building-works.jpg" },
  { tag: "CIVIL WORKS", title: "The groundwork everything stands on", body: "Site clearing, earthworks, drainage and utility routes, prepared properly so what follows goes up right.", image: "/earthworks.jpg" },
];

const services = [
  { id: "01", title: "Road construction", lead: "Built for traffic, weather and time.", body: "We construct and rehabilitate roads, from sub-base preparation and compaction to asphalt surfacing, kerbs and side drains. Every layer is checked before the next goes down.", points: ["New roads & access routes", "Rehabilitation & resurfacing", "Drainage, kerbs & road furniture"] },
  { id: "02", title: "Building construction", lead: "From a clear brief to a confident handover.", body: "Our teams deliver residential, commercial and institutional buildings, coordinating trades and materials on site so the work matches the drawings and the budget.", points: ["Residential & multi-unit builds", "Commercial & office buildings", "Institutional & public buildings"] },
  { id: "03", title: "Civil engineering", lead: "We lay the groundwork, literally.", body: "Site preparation, earthworks, culverts and drainage, water and utility installation. The unseen work that decides whether a project lasts.", points: ["Earthworks & site preparation", "Culverts & storm drainage", "Water & utility installation"] },
  { id: "04", title: "Real estate development", lead: "Developments planned to be lived in.", body: "We take development projects from land and feasibility through design and construction, with one team responsible for the result.", points: ["Feasibility & planning", "Design coordination", "Construction & delivery"] },
  { id: "05", title: "Transportation services", lead: "The right equipment, where it's needed.", body: "We move plant, materials and equipment safely to and between sites, keeping projects supplied and on programme.", points: ["Haulage of materials", "Plant & equipment movement", "Site logistics support"] },
  { id: "06", title: "Consultancy & project management", lead: "We plan the build before we build.", body: "Estimates, programmes and risks are worked out early. On site, we supervise quality and progress so clients always know where their project stands.", points: ["Estimating & scheduling", "Site supervision & inspection", "Risk & quality management"] },
];

const reasons = [
  { title: "Our own teams", body: "Our engineers and crews do the work themselves, so responsibility never gets lost between subcontractors." },
  { title: "Checked at every stage", body: "Each layer, pour and finish is inspected before the next begins, not just at the end." },
  { title: "Safety on every site", body: "The health of our people, our clients and the public comes before speed, on every job." },
  { title: "Local know-how", body: "More than a decade in Ghana means we understand the ground, the climate, the suppliers and the approvals." },
];

const figures: { value: string; count?: number; suffix?: string; label: string }[] = [
  { value: "2013", label: "Founded in Accra" },
  { value: "13+", count: 13, suffix: "+", label: "Years building in Ghana" },
  { value: "6", count: 6, suffix: "", label: "Service lines, one team" },
  { value: "4", count: 4, suffix: "", label: "Stages, plan to handover" },
];

export default function WhatWeDo() {
  return <><Header current="what-we-do" />
    <main>
      <section className="page-hero services-hero"><div className="page-hero-image"/><div className="page-hero-shade"/><div className="page-hero-content"><p className="eyebrow light">WHAT WE DO</p><h1>Planned properly.<br /><em>Built to last.</em></h1><p>Roads, buildings and civil works delivered by our own teams, from first survey to final handover.</p></div><div className="page-breadcrumb"><Link href="/">HOME</Link><span>/</span> WHAT WE DO</div></section>

      <section className="statement section-wrap">
        <div data-reveal><p className="eyebrow">HOW WE WORK</p><span className="small-rule"/></div>
        <div data-reveal><h2>One team, one standard, <em>on time and on budget.</em></h2><p>We plan before we build. Costs, programmes and risks are worked out early, so the site runs to plan and there are fewer surprises once work begins.</p></div>
      </section>

      <section className="figures"><div className="section-wrap figures-grid">
        {figures.map((f, i) => <div className="figure" key={f.label} data-reveal style={delay(i * 90)}><strong data-count={f.count} data-suffix={f.suffix}>{f.value}</strong><span>{f.label}</span></div>)}
      </div></section>

      <section className="sectors"><div className="section-wrap">
        <div className="sectors-heading" data-reveal><p className="eyebrow">WHERE WE WORK</p><h2>Three sectors. <em>One way of working.</em></h2></div>
        <div className="sector-grid">
          {sectors.map((s, i) => <article className="sector-card" key={s.tag} data-reveal style={delay(i * 110)}><div className="sector-image" style={{ backgroundImage: `url('${s.image}')` }}/><div className="sector-body"><p className="eyebrow">{s.tag}</p><h3>{s.title}</h3><p>{s.body}</p></div></article>)}
        </div>
      </div></section>

      <section className="offerings">{services.map((item, index) => <article className={`offering ${index % 2 ? "offering-alt" : ""}`} key={item.id}><div className="section-wrap offering-inner" data-reveal><span className="offering-id">{item.id} <i>—</i></span><div className="offering-main"><p className="eyebrow">{item.title.toUpperCase()}</p><h2>{item.lead}</h2><p>{item.body}</p></div><ul>{item.points.map(point => <li key={point}><span>↗</span>{point}</li>)}</ul></div></article>)}</section>

      <section className="reasons"><div className="section-wrap">
        <div className="reasons-heading" data-reveal><p className="eyebrow light">WHY WORKFORCE</p><h2>Clear on site. <em>Clear with clients.</em></h2></div>
        <div className="reason-grid">{reasons.map((r, i) => <article key={r.title} data-reveal style={delay(i * 90)}><span>0{i + 1}</span><h3>{r.title}</h3><p>{r.body}</p></article>)}</div>
      </div></section>

      <section className="about-cta section-wrap" data-reveal><p className="eyebrow">GOT A PROJECT IN MIND?</p><h2>Let’s plan it <em>together.</em></h2><div className="cta-actions"><a className="button button-dark" href={`mailto:${site.email}`}>Email our team <span>↗</span></a><Link className="text-link" href="/projects">See our projects <span>→</span></Link></div></section>
    </main><Footer/></>;
}
