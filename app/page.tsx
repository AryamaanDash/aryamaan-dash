import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { interests, navLinks, projects, skills } from "./portfolio";
import { ThemeToggle } from "./theme-toggle";

export const metadata: Metadata = {
  title: "Aryamaan Dash",
  description:
    "UC Irvine computer science and engineering student building embedded, machine learning, and robotics projects.",
};

const name = "Aryamaan Dash";
const featuredProjects = projects.slice(0, 3);

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
          <ThemeToggle />
        </div>
      </nav>

      <section className="hero-section" aria-labelledby="intro-heading">
        <div className="name-stage" aria-label="Animated name introduction">
          <div className="name-grid" aria-hidden="true" />
          <h1 id="intro-heading" className="name-lockup" aria-label={name}>
            {name.split("").map((letter, index) => (
              <span
                aria-hidden="true"
                className={letter === " " ? "name-space" : undefined}
                key={`${letter}-${index}`}
                style={{ animationDelay: `${index * 0.055}s` }}
              >
                {letter === " " ? "\u00a0" : letter}
              </span>
            ))}
          </h1>
          <div className="scanline" aria-hidden="true" />
        </div>

        <div className="intro-panel">
          <Image
            className="profile-image"
            src="https://avatars.githubusercontent.com/u/113083416?v=4"
            alt="Aryamaan Dash"
            width={86}
            height={86}
            priority
          />
          <div>
            <p className="intro-line">Hello, my name is Aryamaan Dash.</p>
            <p className="intro-copy">
              I am a UC Irvine computer science and engineering student with a
              mathematics minor, building embedded systems, machine learning
              models, audio DSP projects, and robotics-oriented systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="focus-heading">
        <h2 id="focus-heading">Current Focus</h2>
        <p className="section-copy">
          I am especially interested in embedded systems, machine learning, and
          autonomous robotics, with projects that connect low-level hardware,
          signals, and learned models.
        </p>
        <div className="interest-grid">
          {interests.map((interest) => (
            <article className="interest-card" key={interest.title}>
              <span>{interest.kicker}</span>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="projects-heading">
        <div className="section-heading-row">
          <h2 id="projects-heading">Selected Projects</h2>
          <Link href="/projects" className="text-link">
            View all projects -&gt;
          </Link>
        </div>
        <div className="project-list compact">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <p className="project-kicker">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.href} target="_blank" rel="noreferrer">
                Open project
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Tools I Use</h2>
        <div className="skill-strip">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <a href="mailto:aryamd2@uci.edu">aryamd2@uci.edu</a>
      </footer>
    </main>
  );
}
