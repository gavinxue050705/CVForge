import ExperienceSection from "./ExperienceSection";

function ExperienceDisplay({ experiences }) {
  return (
    <div>
      {experiences.map((experience) => (
        <ExperienceSection
          company={experience.company}
          position={experience.position}
          location={experience.location}
          description={experience.description}
          startDate={experience.startDate}
          endDate={experience.endDate}
        />
      ))}
    </div>
  );
}
export default ExperienceDisplay;
