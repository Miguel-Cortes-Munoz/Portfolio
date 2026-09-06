// components/ProjectModal.tsx
import { useEffect } from "react";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/80 backdrop-blur-sm px-4 py-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-indigo border border-periwinkle/20 p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-lavender/60 hover:text-mist transition-colors cursor-pointer"
        >
          close
        </button>

        <h2 className="text-2xl font-semibold text-mist mb-2">{project.title}</h2>
        <p className="text-sm text-periwinkle mb-6">
          {project.technologies.join(" · ")}
        </p>

        {project.screenshots.length > 0 && (
          <div className="flex flex-col gap-4 mb-6">
            {project.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="rounded-xl border border-periwinkle/20"
              />
            ))}
          </div>
        )}

        <p className="text-sm text-lavender/80 mb-4">{project.description}</p>
        <p className="text-sm text-lavender/70 mb-6">{project.details}</p>
        <a
        
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-teal underline underline-offset-4 hover:text-mist transition-colors"
        >
          view on GitHub
        </a>
      </div>
    </div>
  );
}