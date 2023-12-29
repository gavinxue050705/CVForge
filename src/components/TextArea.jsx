function TextArea({ id, label, placeholder, value, onChange }) {
  return (
    <div className="textarea">
      <h3 className="label">{label}</h3>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
