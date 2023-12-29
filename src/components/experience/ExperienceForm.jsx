import ButtonAdd from "../ButtonAdd";
import Experience from "./Experience";

function ExperienceForm({ experiences, onChange, onAdd, onRemove, onDrop }) {
  return (
    <div className="container">
      <h2 onClick={onDrop} className="section-header">
        <i className="fa-solid fa-briefcase"></i> Experience
      </h2>
      <div id="form-experience">
        {experiences.map((experience, i) => (
          <Experience
            index={i}
            onChange={onChange}
            company={experience.company}
            position={experience.position}
            location={experience.location}
            description={experience.description}
            startDate={experience.startDate}
            endDate={experience.endDate}
            onRemove={onRemove}
          />
        ))}
        <ButtonAdd onAdd={onAdd} section="Experience" />
      </div>
    </div>
  );
}

export default ExperienceForm;
