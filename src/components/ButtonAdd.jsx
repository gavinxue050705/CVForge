function ButtonAdd({ onAdd }) {
  return (
    <div className="button-add">
      <button onClick={onAdd}>
        <i className="fa-regular fa-square-plus"></i>
      </button>
    </div>
  );
}

export default ButtonAdd;
