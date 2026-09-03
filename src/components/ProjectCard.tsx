import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <p>{project.technologies.join(' · ')}</p>

      <a href={project.github}>
        GitHub
      </a>
    </article>
  )
}