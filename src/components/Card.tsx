import type { Project } from "../types/project-type";

type CardProps = {
  project: Project;
};

export const Card = ({ project }: CardProps) => {
  return (
    <article className="flex flex-col gap-2">
      <img src={project.image} alt={project.title} />
      <h3 className="text-heading-m">{project.title}</h3>
      <ul className="flex flex-row gap-3">
        {project.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
};
