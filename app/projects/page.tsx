import type { Metadata } from "next";
import Link from "next/link";
import { navLinks, projects, skills } from "../portfolio";
import { ThemeToggle } from "../theme-toggle";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Aryamaan Dash across embedded systems, machine learning, audio DSP, and digital logic.",
};

function HomeLink() {
  return (
    <Link className="home-link" href="/" aria-label="Home">
      <svg
        aria-hidden="true"
        className="home-icon"
        fill="none"
        height="18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="18"
      >
        <path d="m3 10.5 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
      <span>Home</span>
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
          <ThemeToggle />
        </div>
      </nav>

      <header className="page-heading">
        <p className="status-pill">selected work</p>
        <h1>Projects</h1>
        <p>
          A focused set of projects pulled from my resume and GitHub, spanning
          embedded audio, ML models, study tooling, AI education, and processor
          design.
        </p>
      </header>

      <section className="project-list" aria-label="Project list">
        {projects.map((project) => (
          <article className="project-card wide" key={project.title}>
            <div>
              <p className="project-kicker">{project.type}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
            <div className="tag-row">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-actions">
              <a href={project.href} target="_blank" rel="noreferrer">
                Github
              </a>
              {"liveHref" in project ? (
                <a href={project.liveHref} target="_blank" rel="noreferrer">
                  Live site
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="section-block" aria-labelledby="project-skills-heading">
        <h2 id="project-skills-heading">Skill Surface</h2>
        <div className="skill-strip">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
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
