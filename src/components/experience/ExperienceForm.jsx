import Experience from "./Experience";

function ExperienceForm({ experiences, onChange }) {
  return (
    <div>
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
        />
      ))}
    </div>
  );
}

export default ExperienceForm;
