import type { Metadata } from "next";
import Link from "next/link";
import { interests, navLinks, projects, skills } from "./portfolio";

export const metadata: Metadata = {
  title: "Aryamaan Dash",
  description:
    "UC Irvine computer science and engineering student building embedded, machine learning, and robotics projects.",
};

const name = "Aryamaan Dash";
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
        <h1 id="intro-heading" className="name-lockup">
          Hello, my name is {name}.
        </h1>
        <p className="intro-copy">
          I am a UC Irvine computer science and engineering student with a
          mathematics minor. My interests lie within the fields of embedded systems, machine learning, and autonomous robotics, with
          work spanning audio DSP and hardware-aware software.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="https://www.linkedin.com/in/aryamaan-dash-a8589a2b7/" target = "_blank">
            Get in touch
          </a>
          <a href="/Aryamaan-Dash-Resume.pdf">Read my resume ↗</a>
        </div>
      </section>

      <section className="section-block" aria-labelledby="focus-heading">
        <h2 id="focus-heading">Current Focus</h2>
        <ul className="interest-list">
          {interests.map((interest) => (
            <li className="interest-row" key={interest.title}>
              <span className="row-index">{interest.kicker}</span>
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
          <Link href="/projects" className="text-link">
            View all projects -&gt;
          </Link>
        </div>
        <ul className="project-list compact">
          {featuredProjects.map((project) => (
            <li className="project-card" key={project.title}>
              <div>
                <p className="project-kicker">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <a className="row-arrow" href={project.href} target="_blank" rel="noreferrer">
                View ↗
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
        <a href="mailto:aryamd2@uci.edu">Send me an email ↗</a>
      </footer>
    </main>
  );
}
