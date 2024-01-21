import BulletPoints from "../BulletPoints";

function ProjectsSection({ name, technologies, description }) {
  return (
    <div className="resume-subsection">
      <h3>{name}</h3>
      <p>{technologies}</p>
      <div className="bullet-points">
        <BulletPoints text={description} />
      </div>
    </div>
  );
}

export default ProjectsSection;
