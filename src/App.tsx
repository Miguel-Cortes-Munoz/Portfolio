import Navbar from './components/navbar'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/Project'

function App() {
  return (
    <>
      <Navbar name="Miguel" />

      <main>
        <h1>Software Developer</h1>

        <p>
          I build software across web, systems, and data.
        </p>

        <section id="projects">
          <h2>Projects</h2>

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default App