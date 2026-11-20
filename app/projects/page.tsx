import type { Metadata } from "next";
import Link from "next/link";
import { openGraphBase, site } from "../site";
import { Header } from "../header";
import { Footer } from "../footer";
import { delay } from "../delay";

const description =
  "Roadworks, building construction, civil works and site supervision by Workforce Engineering Limited across Accra and Ghana.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { ...openGraphBase, url: "/projects", title: `Projects | ${site.name}`, description },
};

type Project = {
  tag: string;
  title: string;
  location: string;
  body: string;
  scope: string[];
  image: string;
  alt: string;
  /** Set for stock photography, so it is never mistaken for our own site. */
  representative?: boolean;
  portrait?: boolean;
};

// TODO: replace representative images and generic entries with named client projects and real site photos.
const projects: Project[] = [
  {
    tag: "ROADS",
    title: "Asphalt surfacing & road rehabilitation",
    location: "Accra",
    body: "Our crews prepared and compacted the base, then laid and finished a new asphalt surface, working section by section to keep the community moving while the road was rebuilt.",
    scope: ["Base preparation & compaction", "Asphalt paving & finishing", "Edges, kerbs & drainage"],
    image: "/accra-roadworks.jpg",
    alt: "Workforce crew in orange overalls finishing fresh asphalt behind a paver in Accra",
  },
  {
    tag: "SUPERVISION",
    title: "Site inspection & progress review",
    location: "Ghana",
    body: "Our engineers walk every site with clients and partners, reviewing quality, safety and progress before work moves to the next stage. Nothing is signed off from a desk.",
    scope: ["Joint site walks with clients", "Quality & safety checks", "Progress reporting"],
    image: "/team-site-visit.jpg",
    alt: "Three engineers in hard hats and hi-vis vests on a site visit at a waterside construction site",
    portrait: true,
  },
  {
    tag: "BUILDINGS",
    title: "Reinforced concrete structures",
    location: "Ghana",
    body: "From reinforcement fixing to the final pour, structural work is set out, checked and recorded at every level, so the frame matches the design and passes inspection first time.",
    scope: ["Setting out & reinforcement", "Formwork & concrete pours", "Stage inspections"],
    image: "/building-works.jpg",
    alt: "Construction workers fixing steel reinforcement on a concrete slab",
    representative: true,
  },
  {
    tag: "CIVIL WORKS",
    title: "Earthworks & site preparation",
    location: "Ghana",
    body: "Clearing, cutting, filling and grading with the right plant for the ground, so foundations, roads and drainage start on a stable, well-prepared base.",
    scope: ["Clearing & excavation", "Cut, fill & grading", "Drainage set-out"],
    image: "/earthworks.jpg",
    alt: "Excavators and a bulldozer working on a large earthworks site",
    representative: true,
  },
];

const stages = [
  { title: "Survey & mobilise", body: "We study the site, confirm the scope and bring the right people and plant." },
  { title: "Groundwork", body: "Clearing, earthworks and drainage set the base for everything after." },
  { title: "Build", body: "Structures and surfaces go up in stages, each one checked before the next." },
  { title: "Inspect & hand over", body: "Final tests, snagging and a clean handover with the records to match." },
];

export default function Projects() {
  return <><Header current="projects" />
    <main>
      <section className="page-hero projects-hero"><div className="page-hero-image"/><div className="page-hero-shade"/><div className="page-hero-content"><p className="eyebrow light">OUR PROJECTS</p><h1>Work you can<br /><em>stand on.</em></h1><p>A look at the roads, structures and groundwork our teams deliver across Accra and beyond.</p></div><div className="page-breadcrumb"><Link href="/">HOME</Link><span>/</span> PROJECTS</div></section>

      <section className="statement section-wrap">
        <div data-reveal><p className="eyebrow">ON SITE</p><span className="small-rule"/></div>
        <div data-reveal><h2>Every project carries <em>our name.</em></h2><p>We build with our own teams and stay involved from the first survey to the final handover. These are the kinds of works we take on, and how we run them.</p></div>
      </section>

      <section className="project-list">
        {projects.map((p, i) => (
          <article className={`project-row ${i % 2 ? "project-row-flip" : ""}`} key={p.title}>
            <div className="section-wrap project-inner">
              <figure className={`project-media ${p.portrait ? "project-media-portrait" : ""}`} data-reveal>
                {/* eslint-disable-next-line @next/next/no-img-element -- static local photo, sized by CSS */}
                <img src={p.image} alt={p.alt} loading={i === 0 ? "eager" : "lazy"} />
                {p.representative && <figcaption>Representative image</figcaption>}
              </figure>
              <div className="project-copy" data-reveal style={delay(120)}>
                <p className="eyebrow">{p.tag} <i>· {p.location}</i></p>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
                <ul>{p.scope.map((s) => <li key={s}><span>↗</span>{s}</li>)}</ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="stages"><div className="section-wrap">
        <div className="reasons-heading" data-reveal><p className="eyebrow light">FROM GROUNDWORK TO HANDOVER</p><h2>How a Workforce <em>site runs.</em></h2></div>
        <ol className="stage-track">{stages.map((s, i) => <li key={s.title} data-reveal style={delay(i * 110)}><span>0{i + 1}</span><h3>{s.title}</h3><p>{s.body}</p></li>)}</ol>
      </div></section>

      <section className="about-cta section-wrap" data-reveal><p className="eyebrow">NEXT ON THE LIST</p><h2>Your project could be <em>here.</em></h2><div className="cta-actions"><a className="button button-dark" href={`mailto:${site.email}`}>Start a conversation <span>↗</span></a><Link className="text-link" href="/what-we-do">What we do <span>→</span></Link></div></section>
    </main><Footer/></>;
}
