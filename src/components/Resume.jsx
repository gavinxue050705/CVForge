import ExperienceSection from "./experience/ExperienceSection";
import PersonalSection from "./personal/PersonalSection";

function Resume({ personal, experience }) {
  console.log(personal);
  return (
    <div className="resume">
      <PersonalSection
        name={personal.name}
        email={personal.email}
        phone={personal.phone}
        address={personal.address}
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
