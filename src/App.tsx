import { useRef, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  const enterSite = () => {
    setEntered(true);
  };

  return (
    <>
     <div>
    {/* Hero */}
    <div
        className={`fixed inset-0 z-40 transition-opacity duration-1000 ${
            entered
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
        }`}
    >
        <Hero onEnter={enterSite} />
    </div>

    {/* Main website */}
    <div
        className={`transition-opacity duration-1000 ${
            entered ? "opacity-100" : "opacity-0"
        }`}
    >

        {entered && <Navbar name="about me" />}
        <div
            ref={contentRef}
            className="min-h-screen bg-linear-to-br from-midnight via-indigo to-midnight"
        >
            <div className="container mx-auto px-4 py-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default App;
