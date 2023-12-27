import ButtonAdd from "../ButtonAdd";
import ButtonRemove from "../ButtonRemove";
import Education from "./Education";

function EducationForm({ educations, onChange, onAdd, onRemove }) {
  return (
    <div className="container">
      <h2>Education</h2>
      {educations.map((education, i) => (
        <>
          <Education
            index={i}
            onChange={onChange}
            degree={education.degree}
            school={education.school}
            location={education.location}
            startDate={education.startDate}
            endDate={education.endDate}
          />
          <ButtonRemove onRemove={onRemove} index={i} />
        </>
      ))}
      <ButtonAdd onAdd={onAdd} section="Education" />
    </div>
  );
}

export default EducationForm;
