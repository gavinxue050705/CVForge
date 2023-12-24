function ExperienceSection({
  company,
  position,
  location,
  description,
  startDate,
  endDate,
}) {
  return (
    <div>
      <h2>{position}</h2>
      <p>{company}</p>
      <p>{location}</p>
      <p>
        {startDate}
        {endDate}
      </p>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceSection;
