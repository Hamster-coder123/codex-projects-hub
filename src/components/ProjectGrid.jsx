import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>No projects found</h3>
        <p>Try changing the search term, category, or status filter.</p>
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
