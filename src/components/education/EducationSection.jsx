function EducationSection({ degree, school, location, startDate, endDate }) {
  return (
    <div>
      <h2>{degree}</h2>
      <p>{school}</p>
      <p>{location}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </div>
  );
}

export default EducationSection;
