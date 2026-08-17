import type { Metadata } from "next";
import Link from "next/link";
import { hackathonProjects, navLinks, projects, skills } from "../portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Aryamaan Dash across AI efficiency, embedded systems, machine learning, full-stack software, and digital logic.",
};

function HomeLink() {
  return (
    <Link className="home-link" href="/">
      Aryamaan Dash
    </Link>
  );
}

type Project = (typeof projects)[number] | (typeof hackathonProjects)[number];

function ProjectList({
  items,
  label,
  nested = false,
}: {
  items: readonly Project[];
  label: string;
  nested?: boolean;
}) {
  const ProjectHeading = nested ? "h3" : "h2";

  return (
    <ul className="project-list" aria-label={label}>
      {items.map((project) => (
        <li className="project-card wide" key={project.title}>
          <div>
            <p className="project-type">{project.type}</p>
            <ProjectHeading>{project.title}</ProjectHeading>
            <p>{project.summary}</p>
          </div>
          <div className="project-actions">
            <a href={project.href} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {"liveHref" in project ? (
              <a href={project.liveHref} target="_blank" rel="noreferrer">
                Live site
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  return (
    <main className="site-shell projects-page">
      <nav className="site-nav" aria-label="Primary navigation">
        <HomeLink />
        <div className="nav-actions">
          <div className="nav-links">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </nav>

      <header className="page-heading">
        <h1>Projects</h1>
        <p>
          Selected work across AI efficiency, embedded audio, machine learning,
          study tools, AI education, and processor design.
        </p>
      </header>

      <ProjectList items={projects} label="Project list" />

      <section className="section-block" aria-labelledby="hackathon-projects-heading">
        <h2 id="hackathon-projects-heading">Hackathon Projects</h2>
        <ProjectList items={hackathonProjects} label="Hackathon project list" nested />
      </section>

      <section className="section-block" aria-labelledby="project-skills-heading">
        <h2 id="project-skills-heading">Tools I Use</h2>
        <ul className="skill-strip">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <Link href="/" className="text-link">
          Back home
        </Link>
        <a href="/Aryamaan-Dash-Resume.pdf">Resume PDF</a>
      </footer>
    </main>
  );
}
