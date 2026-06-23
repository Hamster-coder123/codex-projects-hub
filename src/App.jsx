import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import LoadingIntro from "./components/LoadingIntro";
import { projects } from "./data/projects";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 2600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? <LoadingIntro /> : null}
      <div className="page-shell">
        <Header />
        <main>
          <Hero />
          <section id="projects" aria-label="Project list">
            <ProjectGrid projects={projects} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
