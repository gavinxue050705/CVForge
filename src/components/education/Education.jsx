import ButtonRemove from "../ButtonRemove";
import Input from "../Input";

function Education({
  index,
  onChange,
  degree,
  school,
  location,
  startDate,
  endDate,
  onRemove,
}) {
  return (
    <div className="subsection" index={index}>
      <div className="row-remove">
        <div className="row-remove-heading">
          <h2>Education {index + 1}</h2>
        </div>
        <div className="row-remove-button">
          <ButtonRemove onRemove={onRemove} index={index} />
        </div>
      </div>

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
      <div className="row-date">
        <div className="row-date-start">
          <Input
            id="startDate"
            label="Start Date"
            placeholder="Enter start date"
            value={startDate}
            onChange={onChange(index)}
          />
        </div>
        <div className="row-date-end">
          <Input
            id="endDate"
            label="End Date"
            placeholder="Enter end date"
            value={endDate}
            onChange={onChange(index)}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
