# Codex Projects Hub — Website Plan

## 1. Site Purpose

Codex Projects Hub is a central portfolio-style website for collecting and presenting every project built with Codex. It should act as a clean project directory where visitors can quickly understand what each project does, what technologies it uses, and where to find the source code.

The site is mainly for:

- Visitors who want to browse completed and in-progress Codex projects.
- Friends, teachers, collaborators, or recruiters who want a quick overview of the work.
- The project owner, who needs one easy place to organize and update project links.

The website exists so projects do not stay scattered across GitHub repositories, local folders, chats, or notes. Instead, every project appears in one searchable, filterable hub, with each project card linking directly to its GitHub repository.

## 2. Core Features

- Project cards: Each project appears as a clean card with its name, description, category, tech stack, status, and GitHub link.
- GitHub repo links: Clicking a project card or button opens the matching GitHub repository in a new tab.
- Search bar: Visitors can search projects by name, description, category, or technology.
- Category filters: Visitors can filter projects by categories such as Telegram Bots, Websites, Automation, Games, AI Tools, Utilities, School Projects, and Experiments.
- Tech stack tags: Each card shows technologies such as Python, React, Vite, Streamlit, Arduino, OpenCV, or Telegram API.
- Status labels: Projects can show labels such as Active, Completed, In Progress, Experimental, or Archived.
- Responsive design: The layout should work well on desktop, tablet, and mobile.
- Easy project data editing: All project information should live in one simple data file so new projects can be added without editing the whole UI.
- Featured project support: Selected projects can optionally be highlighted later.
- External link behavior: GitHub links should open in a new browser tab.
- Empty state: If no projects match the search or filters, the site should show a simple message.
- Clear reset option: Visitors should be able to clear search and filters quickly.

## 3. Page Structure

### Header

The header should stay simple and recognizable. It should include the site name, a short navigation area, and optionally a GitHub profile link.

Suggested header content:

- Site name: Codex Projects Hub
- Navigation links: Projects, About, GitHub
- GitHub profile link: `https://github.com/Hamster-coder123`

### Hero Section

The hero section should introduce the website immediately. It should explain that this is a collection of Codex-built projects and give visitors a quick sense of what they can do on the page.

Suggested hero content:

- Main heading: Codex Projects Hub
- Short subtitle: A searchable portfolio of projects built with Codex.
- Optional stats row: total projects, categories, featured projects
- Primary action: Browse Projects
- Secondary action: View GitHub Profile

### Filter/Search Section

This section should sit above the project grid. It should make browsing feel fast and natural.

Recommended controls:

- Search input for project names, descriptions, and technologies.
- Category filter buttons or dropdown.
- Status filter dropdown or segmented control.
- Optional tech stack filter.
- Reset filters button.

### Project Grid

The project grid is the main content of the site. It should display all project cards in a responsive grid.

Recommended behavior:

- Desktop: 3 cards per row when space allows.
- Tablet: 2 cards per row.
- Mobile: 1 card per row.
- Cards should have consistent height where possible.
- The whole card can be clickable, with a clear GitHub button inside.

### Footer

The footer should be minimal and useful.

Suggested footer content:

- Site name
- Short line such as: Built to organize Codex projects.
- GitHub profile link
- Optional year

### Optional Future Pages

- About page: Explain who built the projects and what Codex Projects Hub is for.
- Statistics page: Show totals by category, tech stack, and project status.
- Timeline page: Show projects in chronological order.
- Featured projects page: Highlight the most polished or important projects.
- Tags page: Browse projects by technology or topic.

## 4. Project Card Design

Each project card should be compact, readable, and useful at a glance.

Each card should include:

- Project name
- Short description
- Category
- Tech stack tags
- Project status
- GitHub repo link
- Optional date created
- Optional screenshot or icon

Recommended card layout:

- Top area: optional icon, screenshot, or category badge.
- Main area: project name and short description.
- Tag area: technology tags such as Python, React, Telegram API, or Arduino.
- Footer area: status label and GitHub link/button.

Recommended card behavior:

- Hover effect slightly lifts the card or changes the border color.
- GitHub button should be visually clear.
- Entire card may open the repository, but the button should still exist for clarity.
- Cards should remain readable on small screens.

## 5. Project Categories

Useful project categories:

- Telegram Bots
- Websites
- Automation
- Games
- AI Tools
- Utilities
- School Projects
- Experiments

Category guidance:

- Telegram Bots: Bots built for Telegram workflows, reminders, commits, lyrics, or utilities.
- Websites: Landing pages, portfolio pages, Streamlit pages, and web apps.
- Automation: Scripts or tools that automate repeated actions.
- Games: Browser games, terminal games, or simple interactive game projects.
- AI Tools: Projects involving models, tracking, machine learning, or AI-assisted workflows.
- Utilities: Small helpful tools such as autoclickers or helper scripts.
- School Projects: Projects made for school assignments or learning demonstrations.
- Experiments: Early prototypes, tests, and ideas that may grow later.

## 6. Initial Project List

| Project | Category | Short Description | Possible Tech Stack | Status | GitHub Repo URL |
|---|---|---|---|---|---|
| Milipedia | Websites | A wiki-style or information website project. | HTML, CSS, JavaScript, React | In Progress | `https://github.com/Hamster-coder123/milipedia` |
| Telegram Bot | Telegram Bots | A general-purpose Telegram bot project. | Python, Telegram API | Active | `https://github.com/Hamster-coder123/telegram-bot` |
| Telegram Reminder Bot | Telegram Bots | A Telegram bot for setting reminders and receiving notifications. | Python, Telegram API, Scheduler | Active | `https://github.com/Hamster-coder123/telegram-reminder-bot` |
| Telegram GitHub Commit Bot | Telegram Bots | A bot that reports or tracks GitHub commits through Telegram. | Python, Telegram API, GitHub API | In Progress | `https://github.com/Hamster-coder123/telegram-github-commit-bot` |
| Telegram Song Lyrics Bot | Telegram Bots | A bot that helps users find song lyrics through Telegram. | Python, Telegram API, Lyrics API | Completed | `https://github.com/Hamster-coder123/telegram-song-lyrics-bot` |
| Streamlit Landing Page | Websites | A simple landing page or web interface built with Streamlit. | Python, Streamlit | Completed | `https://github.com/Hamster-coder123/streamlit-landing-page` |
| Snake Game | Games | A classic Snake game project. | Python, Pygame or JavaScript | Completed | `https://github.com/Hamster-coder123/snake-game` |
| Tic Tac Toe | Games | A simple Tic Tac Toe game for practicing game logic and UI. | Python or JavaScript, HTML, CSS | Completed | `https://github.com/Hamster-coder123/tic-tac-toe` |
| ASL Tracking Model | AI Tools | A model or computer vision project for tracking American Sign Language gestures. | Python, OpenCV, MediaPipe, Machine Learning | In Progress | `https://github.com/Hamster-coder123/asl-tracking-model` |
| Fitness Trainer | AI Tools | A fitness assistant or trainer project, possibly using tracking or guided exercises. | Python, OpenCV, MediaPipe, Streamlit | In Progress | `https://github.com/Hamster-coder123/fitness-trainer` |
| Autoclicker | Utilities | A utility for automating repeated mouse clicks. | Python, PyAutoGUI | Completed | `https://github.com/Hamster-coder123/autoclicker` |
| Arduino Robot Project | School Projects | A robotics project using Arduino hardware and sensors. | Arduino, C++, Electronics | In Progress | `https://github.com/Hamster-coder123/arduino-robot-project` |

Note: The repository names above use clean lowercase slug formats. If the actual GitHub repositories use different names, update the `repoUrl` values in the project data file.

## 7. Data Structure

Project data should be stored separately from the interface code in a file such as:

```text
src/data/projects.js
```

Recommended object structure:

```js
{
  name: "Project Name",
  description: "Short explanation of the project.",
  repoUrl: "https://github.com/Hamster-coder123/repo-name",
  category: "Telegram Bots",
  tech: ["Python", "Telegram API"],
  status: "Active",
  featured: false
}
```

Recommended optional fields:

```js
{
  createdAt: "2026-06-23",
  screenshot: "/screenshots/project-name.png",
  icon: "bot",
  repoName: "repo-name"
}
```

Storing project data separately makes the website easier to update because the project list becomes the only place that needs editing when a new project is added. The React components can stay focused on layout, filtering, and rendering cards, while `projects.js` acts like a small database.

Benefits:

- Easier to add new projects.
- Easier to fix repo links.
- Easier to filter and search.
- Easier to reuse project data on future pages.
- Less risk of breaking the layout when updating content.

## 8. Design Style

The site should look modern, calm, and professional, while staying simple enough to build and maintain.

Requirements:

- Dark mode
- Modern layout
- Clean typography
- Card-based design
- Minimal colors
- Mobile-friendly
- Professional but simple

Suggested color palette:

- Background: `#0F172A`
- Surface/card: `#111827`
- Raised surface: `#1F2937`
- Primary text: `#F8FAFC`
- Secondary text: `#CBD5E1`
- Muted text: `#94A3B8`
- Accent: `#38BDF8`
- Accent hover: `#0EA5E9`
- Border: `#334155`
- Success/status active: `#22C55E`
- Warning/status in progress: `#F59E0B`
- Archived/experimental: `#A78BFA`

Suggested font style:

- Use a modern sans-serif font.
- Good options: Inter, system UI, Segoe UI, or Arial.
- Keep headings bold but not oversized.
- Keep body text readable with comfortable line height.

Suggested card layout:

- Dark card background with a subtle border.
- 8px border radius.
- Clear spacing between title, description, tags, and footer.
- Category badge near the top.
- Status label near the bottom.
- GitHub button aligned consistently.

Suggested hover effects:

- Slight upward movement.
- Border changes to accent color.
- GitHub button brightens.
- No heavy animations.

Suggested button styles:

- Primary buttons: accent background with dark or white text.
- Secondary buttons: transparent background with border.
- Filter buttons: compact pill-like buttons, but not overly rounded.
- Active filters should be clearly highlighted.

## 9. User Flow

1. User opens the homepage.
2. User sees the Codex Projects Hub header and hero section.
3. User scrolls to the project collection or clicks Browse Projects.
4. User searches by project name, keyword, or technology.
5. User filters projects by category or status.
6. User scans the project cards.
7. User clicks a project card or GitHub button.
8. The GitHub repository opens in a new tab.
9. User returns to the hub to explore more projects.

The flow should feel quick. A visitor should be able to understand the site within a few seconds and open a repository without needing instructions.

## 10. Technical Stack

Recommended stack:

- React
- Vite
- Plain CSS or Tailwind CSS
- GitHub Pages for deployment

Recommended choice:

- React + Vite + plain CSS for the first version.

Why this stack is suitable:

- React makes it easy to build reusable components such as `ProjectCard`, `Filters`, and `Header`.
- Vite is fast, simple, and beginner-friendly for React projects.
- Plain CSS keeps the first version lightweight and easy to understand.
- Tailwind CSS can be added later if faster utility-based styling is preferred.
- GitHub Pages is free and works well for a static portfolio website.
- GitHub Actions can automatically redeploy the site after every push.

## 11. File Structure

Recommended file structure:

```text
codex-projects-hub/
  package.json
  index.html
  README.md
  .gitignore
  vite.config.js
  src/
    main.jsx
    App.jsx
    styles.css
    components/
      Header.jsx
      Hero.jsx
      Filters.jsx
      ProjectGrid.jsx
      ProjectCard.jsx
      Footer.jsx
    data/
      projects.js
    assets/
      screenshots/
  .github/
    workflows/
      deploy.yml
```

File responsibilities:

- `package.json`: Project scripts and dependencies.
- `index.html`: Main HTML entry point.
- `vite.config.js`: Vite configuration, including GitHub Pages base path.
- `src/main.jsx`: React entry point.
- `src/App.jsx`: Main app layout and state.
- `src/components/Header.jsx`: Top navigation.
- `src/components/Hero.jsx`: Intro section.
- `src/components/Filters.jsx`: Search and filter controls.
- `src/components/ProjectGrid.jsx`: Displays filtered project cards.
- `src/components/ProjectCard.jsx`: Individual project card.
- `src/components/Footer.jsx`: Footer section.
- `src/data/projects.js`: Editable project list.
- `src/styles.css`: Global styles and responsive layout.
- `src/assets/screenshots/`: Optional project screenshots.
- `.github/workflows/deploy.yml`: GitHub Actions deployment workflow.

## 12. GitHub Pages Deployment Plan

Repository name:

```text
codex-projects-hub
```

Live URL format:

```text
https://Hamster-coder123.github.io/codex-projects-hub/
```

Deployment approach:

1. Create a GitHub repository named `codex-projects-hub`.
2. Build the website with Vite React.
3. Configure Vite with the correct base path.
4. Add a GitHub Actions workflow that builds and deploys the site.
5. Enable GitHub Pages in the repository settings.
6. Set GitHub Pages source to GitHub Actions.
7. Push changes to the main branch.
8. Wait for the deployment workflow to finish.
9. Visit the live URL and verify the site loads.

Vite base path configuration:

```js
export default {
  base: "/codex-projects-hub/"
}
```

GitHub Actions deployment workflow:

- Trigger on pushes to `main`.
- Install dependencies.
- Build the Vite site.
- Upload the `dist` folder.
- Deploy to GitHub Pages.

The exact workflow file should be placed at:

```text
.github/workflows/deploy.yml
```

## 13. Maintenance Plan

To add a new project later:

1. Open `src/data/projects.js`.
2. Add a new project object to the array.
3. Include the project name, description, repository URL, category, tech stack, status, and featured value.
4. Save the file.
5. Test the site locally.
6. Commit the change.
7. Push to GitHub.
8. GitHub Actions redeploys the site automatically.
9. Open the live site and confirm the new project appears.

Recommended rules for keeping data clean:

- Use consistent category names.
- Use consistent status values.
- Keep descriptions short.
- Use lowercase kebab-case repository slugs in URLs.
- Keep tech tags simple, such as `Python`, `React`, `Vite`, `Telegram API`, or `Arduino`.
- Update statuses when a project changes.

Suggested status values:

- Active
- Completed
- In Progress
- Experimental
- Archived

## 14. Future Feature Ideas

- Project screenshots
- Featured projects
- Project timeline
- GitHub API integration
- Repo stats
- Language filters
- Last updated dates
- Tags page
- Search by tech stack
- Sorting by newest/oldest
- Sorting by project name
- Sorting by status
- Project detail modal
- Copy repo URL button
- GitHub profile stats
- Automatic repo import from GitHub
- Light/dark theme toggle
- Favorite projects section
- Keyboard-friendly search
- Downloadable project list

## 15. Final Build Checklist

1. Create the `codex-projects-hub` GitHub repository.
2. Set up a Vite React project.
3. Install dependencies.
4. Create the recommended file structure.
5. Create the main layout in `src/App.jsx`.
6. Build the header.
7. Build the hero section.
8. Add `src/data/projects.js`.
9. Add the starter project list.
10. Build the `ProjectCard` component.
11. Build the `ProjectGrid` component.
12. Build the search input.
13. Add category filters.
14. Add status filters.
15. Add reset filter behavior.
16. Style the site with dark mode.
17. Style cards, buttons, tags, and labels.
18. Make the layout responsive.
19. Test on desktop width.
20. Test on tablet width.
21. Test on mobile width.
22. Check that every GitHub link opens correctly.
23. Configure the Vite base path as `/codex-projects-hub/`.
24. Add the GitHub Actions deployment workflow.
25. Push the project to GitHub.
26. Enable GitHub Pages with GitHub Actions as the source.
27. Wait for deployment to complete.
28. Open `https://Hamster-coder123.github.io/codex-projects-hub/`.
29. Verify the live site loads correctly.
30. Verify search, filters, and project links work on the live site.
