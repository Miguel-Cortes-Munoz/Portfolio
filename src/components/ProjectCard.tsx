import { useState } from "react";
import type { Project } from "../data/projects";
import ProjectModal from "./ProjectModal";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className="bg-indigo/40 backdrop-blur-sm border border-periwinkle/20 rounded-2xl p-6 text-left hover:border-teal/40 transition-colors cursor-pointer"
      >
        <h2 className="text-lg font-semibold text-mist mb-2">{project.title}</h2>
        <p className="text-sm text-lavender/80 mb-4">{project.description}</p>
        <p className="text-xs text-periwinkle mb-4">
          {project.technologies.join(" · ")}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-sm font-medium text-teal underline underline-offset-4 hover:text-mist transition-colors"
          >
            <span>GitHub</span>
          </a>

          <span className="text-xs text-periwinkle/60">click for more</span>
        </div>
      </article>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}