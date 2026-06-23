import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Codex Projects Hub home">
        <span>Codex Projects Hub</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        <a
          className="github-link"
          href="https://github.com/Hamster-coder123"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={18} aria-hidden="true" />
          GitHub
        </a>
      </nav>
    </header>
  );
}
