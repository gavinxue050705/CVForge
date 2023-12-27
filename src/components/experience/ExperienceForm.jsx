import ButtonAdd from "../ButtonAdd";
import ButtonRemove from "../ButtonRemove";
import Experience from "./Experience";

function ExperienceForm({ experiences, onChange, onAdd, onRemove }) {
  return (
    <div className="container">
      <h2>Experience</h2>
      {experiences.map((experience, i) => (
        <>
          <Experience
            index={i}
            onChange={onChange}
            company={experience.company}
            position={experience.position}
            location={experience.location}
            description={experience.description}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
          <ButtonRemove onRemove={onRemove} index={i} />
        </>
      ))}
      <ButtonAdd onAdd={onAdd} section="Experience" />
    </div>
  );
}

export default ExperienceForm;
