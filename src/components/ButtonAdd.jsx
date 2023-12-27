function ButtonAdd({ onAdd, section }) {
  return (
    <div>
      <button onClick={onAdd}>Add {section}</button>
    </div>
  );
}

export default ButtonAdd;
