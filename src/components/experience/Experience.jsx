import ButtonRemove from "../ButtonRemove";
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
  onRemove,
}) {
  return (
    <div className="subsection" index={index}>
      <div className="row-remove">
        <div className="row-remove-heading">
          <h2>Experience {index + 1}</h2>
        </div>
        <div className="row-remove-button">
          <ButtonRemove onRemove={onRemove} index={index} />
        </div>
      </div>
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
      <div className="row-date">
        <div className="row-date-start">
          <Input
            id="startDate"
            label="Start Date"
            placeholder="Enter Start Date"
            value={startDate}
            onChange={onChange(index)}
          />
        </div>
        <div className="row-date-end">
          <Input
            id="endDate"
            label="End Date"
            placeholder="Enter End Date"
            value={endDate}
            onChange={onChange(index)}
          />
        </div>
      </div>
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
    </div>
  );
}

export default Experience;
