import EducationSection from "./education/EducationSection";
import ExperienceSection from "./experience/ExperienceSection";
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
      <EducationSection
        degree={education.degree}
        school={education.school}
        location={education.location}
        startDate={education.startDate}
        endDate={education.endDate}
      />
      <ExperienceSection
        company={experience.company}
        position={experience.position}
        location={experience.location}
        description={experience.description}
        startDate={experience.startDate}
        endDate={experience.endDate}
      />
    </div>
  );
}

export default Resume;
