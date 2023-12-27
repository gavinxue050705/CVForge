function ButtonAdd({ onAdd, section }) {
  return (
    <div className="button-add">
      <button onClick={onAdd}>
        <i class="fa-regular fa-square-plus"></i>
      </button>
    </div>
  );
}

export default ButtonAdd;
