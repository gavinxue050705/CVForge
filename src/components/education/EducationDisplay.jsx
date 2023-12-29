import EducationSection from "./EducationSection";

function EducationDisplay({ educations }) {
  return (
    <div className="resume-section">
      <h2>EDUCATION</h2>
      <hr />
      {educations.map((education) => (
        <EducationSection
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
export default EducationDisplay;
