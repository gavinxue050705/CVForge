import Education from "./Education";

function EducationForm({ educations, onChange }) {
  return (
    <div>
      {educations.map((education, i) => (
        <Education
          index={i}
          onChange={onChange}
          degree={education.degree}
          school={education.school}
          location={education.location}
          startDate={education.startDate}
          endDate={education.endDate}
        />
      ))}
    </div>
  );
}

export default EducationForm;
