import Input from "../Input";

function Education({
  index,
  onChange,
  degree,
  school,
  location,
  startDate,
  endDate,
}) {
  return (
    <div className="container" index={index}>
      <h2>{school}</h2>
      <Input
        id="degree"
        label="Degree"
        placeholder="Enter degree"
        value={degree}
        onChange={onChange(index)}
      />
      <Input
        id="school"
        label="School"
        placeholder="Enter school name"
        value={school}
        onChange={onChange(index)}
      />
      <Input
        id="location"
        label="Location"
        placeholder="Enter location"
        value={location}
        onChange={onChange(index)}
      />
      <Input
        id="startDate"
        label="Start Date"
        placeholder="Enter start date"
        value={startDate}
        onChange={onChange(index)}
      />
      <Input
        id="endDate"
        label="End Date"
        placeholder="Enter end date"
        value={endDate}
        onChange={onChange(index)}
      />
    </div>
  );
}

export default Education;
