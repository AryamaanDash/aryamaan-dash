import type { Metadata } from "next";
import Link from "next/link";
import { interests, navLinks, projects, skills } from "./portfolio";

export const metadata: Metadata = {
  title: "Aryamaan Dash",
  description:
    "University of California-Irvine computer science and engineering student building software, embedded systems, and machine learning projects.",
};

const featuredProjects = projects.slice(0, 3);

function HomeLink() {
  return (
    <Link className="home-link" href="/">
      Aryamaan Dash
    </Link>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
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

      <section className="hero-section" aria-labelledby="intro-heading">
        <h1 id="intro-heading" className="visually-hidden">
          About Aryamaan Dash
        </h1>
        <p className="intro-copy">
          Hello, my name is <b>Aryamaan Dash</b>. I'm pursuing a B.S. in Computer Science & Engineering and a Mathematics minor. My work
          spans software engineering, embedded systems, and machine learning.
        </p>
        <div className="hero-actions">
          <a href="https://www.linkedin.com/in/aryamaan-dash-a8589a2b7/" target="_blank" rel="noreferrer">
            Get in touch
          </a>
          <a href="/Aryamaan-Dash-Resume.pdf">Read my resume</a>
        </div>
      </section>

      <section className="section-block" aria-labelledby="focus-heading">
        <h2 id="focus-heading">Current Focus</h2>
        <ul className="interest-list">
          {interests.map((interest) => (
            <li className="interest-row" key={interest.title}>
              <div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block" aria-labelledby="projects-heading">
        <div className="section-heading-row">
          <h2 id="projects-heading">Selected Projects</h2>
          <Link href="/projects" className="text-link projects-button">
            View all projects -&gt;
          </Link>
        </div>
        <ul className="project-list compact">
          {featuredProjects.map((project) => (
            <li className="project-card" key={project.title}>
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                View project
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Tools I Use</h2>
        <ul className="skill-strip">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <span>© Aryamaan Dash</span>
        <a href="mailto:aryamaan.dash@icloud.com">Send me an email</a>
      </footer>
    </main>
  );
}
