import { useEffect, useRef, useState } from "react";
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
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <>
      {/* Hero */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-1000 ${
          entered ? "opacity-0 pointer-events-none" : "opacity-100"
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
        {entered && <Navbar name="Miguel Cortes Munoz" />}

        <div
          ref={contentRef}
          className="min-h-screen bg-linear-to-br from-midnight via-blue to-midnight "
        >
          <div id="about" className="pt-8"></div>

          {/* About Me */}
          <section className="container mx-auto px-4 py-24 ">
            <h1 className="text-4xl font-bold text-mist mb-12 text-Center ">
              About Me
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-mist/20">
                  <img
                    src="/PortraitEdit.jpg"
                    alt="Miguel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* About text */}
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-mist">
                  Hi, I'm Miguel.
                </h2>

                <p className="text-lg text-mist/80 leading-relaxed">
                  I'm a computer science graduate who enjoys building things and
                  figuring out how they work. I particularly enjoy working on
                  projects that combine software, systems, and problem solving.
                </p>

                <p className="text-lg text-mist/80 leading-relaxed">
                  Outside of programming, I enjoy working on personal projects,
                  learning new technologies, and exploring different interests.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 rounded-full bg-indigo/30 text-mist">
                    C++
                  </span>

                  <span className="px-4 py-2 rounded-full bg-indigo/30 text-mist">
                    Python
                  </span>

                  <span className="px-4 py-2 rounded-full bg-indigo/30 text-mist">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-indigo/30 text-mist">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Projects */}
          <section id="projects" className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-mist mb-8">Projects</h1>

            <div className="container mx-auto px-2 py-8 grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          {/* Education & Skills */}
          <section id="education" className="container mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold text-mist mb-12">
              Education & Skills
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className="text-2xl font-semibold text-mist mb-6">
                  Education
                </h2>

                <div className="rounded-2xl border border-mist/10 bg-midnight/30 p-6">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-mist">
                        Bachelor of Science in Computer Science
                      </h3>

                      <p className="text-indigo-200 mt-1">
                        University of Lethbridge
                      </p>
                    </div>

                    <span className="text-sm text-mist/60 whitespace-nowrap">
                      2026
                    </span>
                  </div>

                  <p className="text-mist/70 leading-relaxed">
                    Minor in Mathematics. Developed a strong foundation in
                    software development, algorithms, data structures,
                    databases, computer networks, and systems.
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-mist/80 mb-3">
                      Areas of Study
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-indigo/30 text-sm text-mist">
                        Algorithms
                      </span>

                      <span className="px-3 py-1 rounded-full bg-indigo/30 text-sm text-mist">
                        Data Structures
                      </span>

                      <span className="px-3 py-1 rounded-full bg-indigo/30 text-sm text-mist">
                        Databases
                      </span>

                      <span className="px-3 py-1 rounded-full bg-indigo/30 text-sm text-mist">
                        Computer Networks
                      </span>

                      <span className="px-3 py-1 rounded-full bg-indigo/30 text-sm text-mist">
                        Systems
                      </span>

                      <span className="px-3 py-1 rounded-full bg-indigo/30 text-sm text-mist">
                        Mathematics
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-2xl font-semibold text-mist mb-6">
                  Skills
                </h2>

                <div className="space-y-6">
                  {/* Languages */}
                  <div>
                    <h3 className="text-lg font-medium text-mist mb-3">
                      Languages
                    </h3>

                    <div className="text-mist/80 flex flex-wrap gap-3">
                      <span className="skill">C++</span>
                      <span className="skill">Python</span>
                      <span className="skill">TypeScript</span>
                      <span className="skill">JavaScript</span>
                      <span className="skill">SQL</span>
                      <span className="skill">C#</span>
                      <span className="skill">Java</span>
                    </div>
                  </div>

                  {/* Frontend */}
                  <div>
                    <h3 className="text-lg font-medium text-mist mb-3">
                      Frontend
                    </h3>

                    <div className=" text-mist/80 flex flex-wrap gap-3">
                      <span className="skill">React</span>
                      <span className="skill">HTML</span>
                      <span className="skill">CSS</span>
                      <span className="skill">Tailwind CSS</span>
                    </div>
                  </div>

                  {/* Backend & Data */}
                  <div>
                    <h3 className="text-lg font-medium text-mist mb-3">
                      Backend & Data
                    </h3>

                    <div className="text-mist/80 flex flex-wrap gap-3">
                      <span className="skill">Node.js</span>
                      <span className="skill">.NET</span>
                      <span className="skill">SQL</span>
                      <span className="skill">PostgreSQL</span>
                    </div>
                  </div>

                  {/* Systems */}
                  <div>
                    <h3 className="text-lg font-medium text-mist mb-3">
                      Systems & Tools
                    </h3>

                    <div className="text-mist/80 flex flex-wrap gap-3">
                      <span className="skill">Linux</span>
                      <span className="skill">Git</span>
                      <span className="skill">TCP/IP</span>
                      <span className="skill">Networking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-mist mb-15 flex ">
              Contact Me
            </h1>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-mist mb-2">
                Let's get in touch
              </h2>

              <p className="text-lg text-mist/70 leading-relaxed mb-8">
                Whether you have a job opportunity, want to collaborate, or just
                want to say hello, I'd love to hear from you.
              </p>

              {/* Email */}
              <a
                href="mailto:Miguel.CortesMunoz@outlook.com"
                className="inline-block text-xl text-indigo-200 hover:text-mist transition-colors mb-10"
              >
                Miguel.CortesMunoz@outlook.com
              </a>

              {/* Links */}
              <div className="flex justify-center flex-wrap gap-4">
                <a
                  href="https://github.com/Miguel-Cortes-Munoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-mist/20 text-mist hover:bg-mist/10 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/miguel-cortes-munoz-472a74359/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-mist/20 text-mist hover:bg-mist/10 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="/MiguelCortesMunoz_DEVresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-indigo/40 text-mist hover:bg-indigo/60 transition"
                >
                  Resume
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
