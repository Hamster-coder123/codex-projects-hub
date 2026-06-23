import { ArrowDown, Github, Sparkles } from "lucide-react";

export default function Hero({ totalProjects, featuredCount, categoryCount }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Built with Codex
        </p>
        <h1>Codex Projects Hub</h1>
        <p className="hero-text">
          A searchable portfolio of projects built with Codex, organized by category,
          technology, and status.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Browse Projects
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/Hamster-coder123"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Project collection summary">
        <div className="orbital-map" aria-hidden="true">
          <span className="node node-main">Hub</span>
          <span className="node node-a">Bots</span>
          <span className="node node-b">AI</span>
          <span className="node node-c">Games</span>
          <span className="node node-d">Web</span>
        </div>
        <div className="stat-row">
          <div>
            <strong>{totalProjects}</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>{categoryCount}</strong>
            <span>Categories</span>
          </div>
          <div>
            <strong>{featuredCount}</strong>
            <span>Featured</span>
          </div>
        </div>
      </div>
    </section>
  );
}
