import ButtonRemove from "../ButtonRemove";
import Input from "../Input";
import TextArea from "../TextArea";

function Projects({
  index,
  onChange,
  name,
  technologies,
  description,
  onRemove,
}) {
  return (
    <div className="subsection" index={index}>
      <div className="row-remove">
        <div className="row-remove-heading">
          <h2>Projects {index + 1}</h2>
        </div>
        <div className="row-remove-button">
          <ButtonRemove onRemove={onRemove} index={index} />
        </div>
      </div>
      <Input
        id="name"
        label="Project Name"
        placeholder="Enter Project Name"
        value={name}
        onChange={onChange(index)}
      />
      <Input
        id="technologies"
        label="Technolgies"
        placeholder="Enter Technologies"
        value={technologies}
        onChange={onChange(index)}
      />
      <TextArea
        id="description"
        label="Description"
        placeholder="Enter Description"
        value={description}
        onChange={onChange(index)}
      />
    </div>
  );
}

export default Projects;
