function ButtonRemove({ onRemove, index }) {
  return (
    <div className="button-remove">
      <button onClick={onRemove(index)}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default ButtonRemove;
