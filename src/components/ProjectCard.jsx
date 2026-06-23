import {
  Activity,
  Bell,
  BookOpen,
  Bot,
  Cpu,
  ExternalLink,
  Gamepad2,
  GitCommitHorizontal,
  Github,
  Grid3X3,
  LayoutTemplate,
  MousePointerClick,
  Music,
  ScanSearch,
} from "lucide-react";

const iconMap = {
  activity: Activity,
  bell: Bell,
  book: BookOpen,
  bot: Bot,
  cpu: Cpu,
  gamepad: Gamepad2,
  git: GitCommitHorizontal,
  grid: Grid3X3,
  layout: LayoutTemplate,
  mouse: MousePointerClick,
  music: Music,
  scan: ScanSearch,
};

export default function ProjectCard({ project }) {
  const Icon = iconMap[project.icon] || Github;
  const statusClass = project.status.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="project-card">
      <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}>
        <div className="card-visual">
          <Icon size={34} aria-hidden="true" />
          {project.featured && <span className="featured-pill">Featured</span>}
        </div>

        <div className="card-body">
          <div className="card-heading">
            <span className="category-badge">{project.category}</span>
            <span className={`status status-${statusClass}`}>{project.status}</span>
          </div>

          <h3>{project.name}</h3>
          <p>{project.description}</p>

          <div className="tag-list" aria-label={`${project.name} technology stack`}>
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="card-footer">
          <span>
            <Github size={17} aria-hidden="true" />
            Repository
          </span>
          <ExternalLink size={17} aria-hidden="true" />
        </div>
      </a>
    </article>
  );
}
