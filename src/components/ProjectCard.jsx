import { Activity, BookOpen, Bot, ExternalLink, Gamepad2, Github, ScanSearch } from "lucide-react";

const iconMap = {
  activity: Activity,
  book: BookOpen,
  bot: Bot,
  gamepad: Gamepad2,
  scan: ScanSearch,
};

export default function ProjectCard({ project }) {
  const Icon = iconMap[project.icon] || Github;
  const statusClass = project.status.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="project-card">
      <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>
        <div className="card-body">
          <div className="card-heading">
            <div className="card-title-row">
              <span className="card-icon" aria-hidden="true">
                <Icon size={18} />
              </span>
              <h2>{project.name}</h2>
            </div>
            <span className={`status status-${statusClass}`}>{project.status}</span>
          </div>
          <p>{project.description}</p>
          <div className="card-meta">
            <span className="category-badge">{project.category}</span>
          </div>
          <div className="tag-list" aria-label={`${project.name} technology stack`}>
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="card-footer">
          <span>
            <Github size={17} aria-hidden="true" />
            Open Repo
          </span>
          <ExternalLink size={17} aria-hidden="true" />
        </div>
      </a>
    </article>
  );
}
