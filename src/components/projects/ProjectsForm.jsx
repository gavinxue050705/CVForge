import ButtonAdd from "../ButtonAdd";
import Projects from "./Projects";

function ProjectsForm({ projects, onChange, onAdd, onRemove, onDrop }) {
  return (
    <div className="container">
      <h2 onClick={onDrop} className="section-header">
        <i className="fa-solid fa-briefcase"></i> Projects
      </h2>
      <div id="form-projects">
        {projects.map((project, i) => (
          <Projects
            index={i}
            onChange={onChange}
            name={project.name}
            technologies={project.technologies}
            description={project.description}
            onRemove={onRemove}
          />
        ))}
        <ButtonAdd onAdd={onAdd} />
      </div>
    </div>
  );
}

export default ProjectsForm;
