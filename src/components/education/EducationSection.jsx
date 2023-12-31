function EducationSection({ degree, school, location, startDate, endDate }) {
  return (
    <div className="resume-subsection">
      <div className="row-subsection">
        <div className="row-subsection-left">
          <h3>{school}</h3>
        </div>
        <div className="row-subsection-right">
          <p>{location}</p>
        </div>
      </div>
      <div className="row-subsection italic">
        <div className="row-subsection-left">
          <p>{degree}</p>
        </div>
        <div className="row-subsection-right">
          <p>
            {startDate} - {endDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
