function Input({ type, id, label, placeholder, value, onChange }) {
  return (
    <div className="input">
      <h3>{label}</h3>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
