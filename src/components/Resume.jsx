import EducationDisplay from "./education/EducationDisplay";
import ExperienceDisplay from "./experience/ExperienceDisplay";
import PersonalSection from "./personal/PersonalSection";

function Resume({ personal, experience, education }) {
  return (
    <div className="resume">
      <PersonalSection
        name={personal.name}
        email={personal.email}
        phone={personal.phone}
        address={personal.address}
      />
      <EducationDisplay educations={education} />
      <ExperienceDisplay experiences={experience} />
    </div>
  );
}

export default Resume;
