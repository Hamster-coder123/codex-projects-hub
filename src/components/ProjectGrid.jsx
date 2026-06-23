import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>No projects found</h3>
        <p>No Codex project entries are available yet.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
