import { RotateCcw, Search } from "lucide-react";
import { categories, statuses } from "../data/projects";

export default function Filters({
  searchTerm,
  selectedCategory,
  selectedStatus,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onReset,
}) {
  return (
    <section className="filters" aria-label="Project filters">
      <div className="search-wrap">
        <Search size={18} aria-hidden="true" />
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search projects, tech, or descriptions"
          aria-label="Search projects"
        />
      </div>

      <div className="filter-groups">
        <label>
          <span>Category</span>
          <select
            aria-label="Category"
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Status</span>
          <select
            aria-label="Status"
            value={selectedStatus}
            onChange={(event) => onStatusChange(event.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <button className="reset-button" type="button" onClick={onReset}>
          <RotateCcw size={16} aria-hidden="true" />
          Reset
        </button>
      </div>
    </section>
  );
}
