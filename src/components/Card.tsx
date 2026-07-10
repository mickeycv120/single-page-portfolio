import type { Project } from "../types/project-type";

type CardProps = {
  project: Project;
};

export const Card = ({ project }: CardProps) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="relative inset-0 overflow-hidden">
        <div className="flex flex-col gap-4 items-center justify-center absolute w-full h-full bg-black/80 opacity-0 hover:opacity-100">
          <button className="cursor-pointer">VIEW PROJECT</button>
          <button className="cursor-pointer">VIEW CODE</button>
        </div>
        <img className="w-full h-auto block" src={project.image} alt={project.title} />
      </div>
      <h3 className="text-heading-m">{project.title}</h3>
      <ul className="flex flex-row gap-3">
        {project.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
};
