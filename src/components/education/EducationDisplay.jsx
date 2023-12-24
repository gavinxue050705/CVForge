import EducationSection from "./EducationSection";

function EducationDisplay({ educations }) {
  return (
    <div>
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
