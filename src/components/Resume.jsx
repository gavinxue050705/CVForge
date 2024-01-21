import "../styles/Resume.css";
import EducationDisplay from "./education/EducationDisplay";
import ExperienceDisplay from "./experience/ExperienceDisplay";
import PersonalSection from "./personal/PersonalSection";
import ProjectsDisplay from "./projects/ProjectsDisplay";

function Resume({ personal, experience, education, projects }) {
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
      <ProjectsDisplay projects={projects} />
    </div>
  );
}

export default Resume;
