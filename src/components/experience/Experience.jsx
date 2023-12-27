import Input from "../Input";

function Experience({
  index,
  onChange,
  company,
  position,
  startDate,
  endDate,
  location,
  description,
}) {
  return (
    <div index={index}>
      <h2>Experience {index + 1}</h2>
      <Input
        id="company"
        label="Company Name"
        placeholder="Enter Company Name"
        value={company}
        onChange={onChange(index)}
      />
      <Input
        id="position"
        label="Position Title"
        placeholder="Enter Position Title"
        value={position}
        onChange={onChange(index)}
      />
      <Input
        id="startDate"
        label="Start Date"
        placeholder="Enter Start Date"
        value={startDate}
        onChange={onChange(index)}
      />
      <Input
        id="endDate"
        label="End Date"
        placeholder="Enter End Date"
        value={endDate}
        onChange={onChange(index)}
      />
      <Input
        id="location"
        label="Location"
        placeholder="Enter Location"
        value={location}
        onChange={onChange(index)}
      />
      <Input
        id="description"
        label="Description"
        placeholder="Enter Description"
        value={description}
        onChange={onChange(index)}
      />
      {/* <button>Submit</button> */}
    </div>
  );
}

export default Experience;
