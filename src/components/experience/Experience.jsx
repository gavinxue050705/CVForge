import Input from "../Input";

function Experience({
  onCompanyChange,
  onPositionChange,
  onLocationChange,
  onDescriptionChange,
  onStartDateChange,
  onEndDateChange,
  company,
  position,
  startDate,
  endDate,
  location,
  description,
}) {
  return (
    <div className="container">
      <h2>Experience</h2>
      <Input
        id="company"
        label="Company Name"
        placeholder="Enter Company Name"
        value={company}
        onChange={onCompanyChange}
      />
      <Input
        id="position"
        label="Position Title"
        placeholder="Enter Position Title"
        value={position}
        onChange={onPositionChange}
      />
      <Input
        id="startDate"
        label="Start Date"
        placeholder="Enter Start Date"
        value={startDate}
        onChange={onStartDateChange}
      />
      <Input
        id="endDate"
        label="End Date"
        placeholder="Enter End Date"
        value={endDate}
        onChange={onEndDateChange}
      />
      <Input
        id="location"
        label="Location"
        placeholder="Enter Location"
        value={location}
        onChange={onLocationChange}
      />
      <Input
        id="description"
        label="Description"
        placeholder="Enter Description"
        value={description}
        onChange={onDescriptionChange}
      />
      <button>Submit</button>
    </div>
  );
}

export default Experience;
