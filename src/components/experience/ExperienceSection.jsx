function ExperienceSection({
  company,
  position,
  location,
  description,
  startDate,
  endDate,
}) {
  function BulletPoints({ text }) {
    console.log(text);
    const newLine = text.indexOf("\n");
    if (newLine !== -1) {
      const nextLine = BulletPoints(text.substring(newLine));
      return (
        <>
          <p>{text.substring(0, newLine + 1)}</p>
          <br />
          {nextLine}
        </>
      );
    } else {
      return <p>{text}</p>;
    }
  }
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
      <div className="bullet-points">
        <BulletPoints text={description} />
      </div>
    </div>
  );
}

export default ExperienceSection;
