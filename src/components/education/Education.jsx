import Input from "../Input";

function Education({ onChange, degree, school, location, startDate, endDate }) {
  return (
    <div className="container">
      <h2>Education</h2>
      <Input
        id="degree"
        label="Degree"
        placeholder="Enter degree"
        value={degree}
        onChange={onChange}
      />
      <Input
        id="school"
        label="School"
        placeholder="Enter school name"
        value={school}
        onChange={onChange}
      />
      <Input
        id="location"
        label="Location"
        placeholder="Enter location"
        value={location}
        onChange={onChange}
      />
      <Input
        id="startDate"
        label="Start Date"
        placeholder="Enter start date"
        value={startDate}
        onChange={onChange}
      />
      <Input
        id="endDate"
        label="End Date"
        placeholder="Enter end date"
        value={endDate}
        onChange={onChange}
      />
    </div>
  );
}

export default Education;
