import Input from "../Input";

function Experience({
  onChange,
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
        type="text"
        id="company"
        label="Company Name"
        placeholder="Enter Company Name"
        value={company}
        onChange={onChange}
      />
      <Input
        type="text"
        id="position"
        label="Position Title"
        placeholder="Enter Position Title"
        value={position}
        onChange={onChange}
      />
      <Input
        type="text"
        id="startDate"
        label="Start Date"
        placeholder="Enter Start Date"
        value={startDate}
        onChange={onChange}
      />
      <Input
        type="text"
        id="endDate"
        label="End Date"
        placeholder="Enter End Date"
        value={endDate}
        onChange={onChange}
      />
      <Input
        type="text"
        id="location"
        label="Location"
        placeholder="Enter Location"
        value={location}
        onChange={onChange}
      />
      <Input
        type="text"
        id="description"
        label="Description"
        placeholder="Enter Description"
        value={description}
        onChange={onChange}
      />
      <button>Submit</button>
    </div>
  );
}

export default Experience;
