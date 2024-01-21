import ProjectsSection from "./ProjectsSection";

function ProjectsDisplay({ projects }) {
  return (
    <div className="resume-section">
      <h2>PROJECTS</h2>
      <hr />
      {projects.map((project) => (
        <ProjectsSection
          name={project.name}
          technologies={project.technologies}
          description={project.description}
        />
      ))}
    </div>
  );
}
export default ProjectsDisplay;
