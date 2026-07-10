import { Card } from "../components/Card";
import { data } from "../constants/projects";

export const Projects = () => {
  return (
    <section className="py-22">
      <div className="flex flex-row items-center justify-between mb-16">
        <h2 className="text-heading-xl">Projects</h2>
        <button>CONTACT ME</button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {data.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
