import type { Project } from "../types/project-type";

type CardProps = {
  project: Project;
};

export const Card = ({ project }: CardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={project.image} alt={project.title} />
      <h1>{project.title}</h1>
      <ul>
        {project.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
