import Input from "../Input";

function Education({
  onDegreeChange,
  onSchoolChange,
  onLocationChange,
  onStartDateChange,
  onEndDateChange,
  degree,
  school,
  location,
  startDate,
  endDate,
}) {
  return (
    <div className="container">
      <h2>Education</h2>
      <Input
        id="degree"
        label="Degree"
        placeholder="Enter degree"
        value={degree}
        onChange={onDegreeChange}
      />
      <Input
        id="school"
        label="School"
        placeholder="Enter school name"
        value={school}
        onChange={onSchoolChange}
      />
      <Input
        id="location"
        label="Location"
        placeholder="Enter location"
        value={location}
        onChange={onLocationChange}
      />
      <Input
        id="startDate"
        label="Start Date"
        placeholder="Enter start date"
        value={startDate}
        onChange={onStartDateChange}
      />
      <Input
        id="endDate"
        label="End Date"
        placeholder="Enter end date"
        value={endDate}
        onChange={onEndDateChange}
      />
    </div>
  );
}

export default Education;
