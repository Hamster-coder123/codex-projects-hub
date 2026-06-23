import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>Codex Projects Hub</p>
      <a href="https://github.com/Hamster-coder123" target="_blank" rel="noreferrer">
        <Github size={17} aria-hidden="true" />
        Hamster-coder123
      </a>
    </footer>
  );
}
