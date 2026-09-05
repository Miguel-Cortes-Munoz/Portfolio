import { useRef, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(false);
  
  const enterSite = () => {
    setShowNavbar(true);
    contentRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Hero onEnter={enterSite} />

      <div ref={contentRef}>
        {showNavbar && <Navbar name="about me" />}

        <div className="min-h-screen bg-linear-to-br from-midnight via-indigo to-midnight">
          <div className="container mx-auto px-4 py-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
