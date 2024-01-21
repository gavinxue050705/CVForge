import BulletPoints from "../BulletPoints";

function ProjectsSection({ name, technologies, description }) {
  return (
    <div className="resume-subsection">
      <div className="row-subsection-left">
        <h3>
          {name} |<span> {technologies}</span>
        </h3>
      </div>
      <div className="bullet-points">
        <BulletPoints text={description} />
      </div>
    </div>
  );
}

export default ProjectsSection;
