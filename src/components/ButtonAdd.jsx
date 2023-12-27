function ButtonAdd({ onAdd, section }) {
  return (
    <div className="button-add">
      <button onClick={onAdd}>Add {section}</button>
    </div>
  );
}

export default ButtonAdd;
