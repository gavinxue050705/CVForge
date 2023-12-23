function Input({ type, id, label, placeholder, value }) {
  return (
    <div className="input">
      <h3>{label}</h3>
      {type === "textarea" ? (
        <textarea
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
        ></textarea>
      ) : (
        <input type={type} id={id} placeholder={placeholder} value={value} />
      )}
    </div>
  );
}

export default Input;
