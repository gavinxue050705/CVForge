function ExperienceSection({
  company,
  position,
  location,
  description,
  startDate,
  endDate,
}) {
  return (
    <div className="resume-subsection">
      <div className="row-subsection">
        <div className="row-subsection-left">
          <h3>{company}</h3>
        </div>
        <div className="row-subsection-right">
          <p>
            {startDate} - {endDate}
          </p>
        </div>
      </div>
      <div className="row-subsection">
        <div className="row-subsection-left">
          <p>{position}</p>
        </div>
        <div className="row-subsection-right">
          <p>{location}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceSection;
