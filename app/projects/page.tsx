import type { Metadata } from "next";
import Link from "next/link";
import { navLinks, projects, skills } from "../portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Aryamaan Dash across embedded systems, machine learning, audio DSP, and digital logic.",
};

function HomeLink() {
  return (
    <Link className="home-link" href="/">
      Aryamaan Dash
    </Link>
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
          Selected work across embedded audio, machine learning, study tools,
          AI education, and processor design.
        </p>
      </header>

      <ul className="project-list" aria-label="Project list">
        {projects.map((project) => (
          <li className="project-card wide" key={project.title}>
            <div>
              <p className="project-kicker">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
            <div className="project-actions">
              <a href={project.href} target="_blank" rel="noreferrer">
                Github ↗
              </a>
              {"liveHref" in project ? (
                <a href={project.liveHref} target="_blank" rel="noreferrer">
                  Live site ↗
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      <section className="section-block" aria-labelledby="project-skills-heading">
        <h2 id="project-skills-heading">Skill Surface</h2>
        <ul className="skill-strip">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <Link href="/" className="text-link">
          &lt;- Back home
        </Link>
        <a href="/Aryamaan-Dash-Resume.pdf">Resume PDF</a>
      </footer>
    </main>
  );
}
