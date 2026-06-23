import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import { categories, projects } from "./data/projects";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
      const searchableText = [
        project.name,
        project.description,
        project.category,
        project.status,
        ...project.tech,
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = query === "" || searchableText.includes(query);

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const stats = useMemo(() => {
    const featuredCount = projects.filter((project) => project.featured).length;
    const categoryCount = categories.length - 1;

    return {
      featuredCount,
      categoryCount,
      totalProjects: projects.length,
    };
  }, []);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedStatus("All");
  };

  return (
    <>
      <Header />
      <main>
        <Hero {...stats} />

        <section className="section-heading" id="projects">
          <p className="eyebrow">Project Library</p>
          <h2>Browse Codex-built projects</h2>
          <p>
            Search by name, filter by category, or open a repository directly from
            any project card.
          </p>
        </section>

        <Filters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onStatusChange={setSelectedStatus}
          onReset={resetFilters}
        />

        <div className="result-bar" aria-live="polite">
          Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong>{" "}
          projects
        </div>

        <ProjectGrid projects={filteredProjects} />

        <section className="stats-band" id="stats" aria-label="Project statistics">
          <div>
            <strong>{stats.totalProjects}</strong>
            <span>Total projects</span>
          </div>
          <div>
            <strong>{stats.categoryCount}</strong>
            <span>Categories</span>
          </div>
          <div>
            <strong>{stats.featuredCount}</strong>
            <span>Featured projects</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
