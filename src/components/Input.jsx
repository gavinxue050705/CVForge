function Input({ id, label, placeholder, value, onChange }) {
  return (
    <div className="input">
      <h3 className="label">{label}</h3>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
