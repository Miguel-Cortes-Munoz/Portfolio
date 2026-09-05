import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-indigo/40 backdrop-blur-sm border border-periwinkle/20 rounded-2xl p-6 text-left hover:border-teal/40 transition-colors">
      <h2 className="text-lg font-semibold text-mist mb-2">{project.title}</h2>
      <p className="text-sm text-lavender/80 mb-4">{project.description}</p>
      <p className="text-xs text-periwinkle mb-4">
        {project.technologies.join(" · ")}
      </p>
      href={project.github}
      className="text-sm font-medium text-teal underline underline-offset-4
      hover:text-mist transition-colors" GitHub
    </article>
  );
}
