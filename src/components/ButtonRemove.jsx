function ButtonRemove({ onRemove, index }) {
  return (
    <div>
      <button onClick={onRemove(index)}>Remove</button>
    </div>
  );
}

export default ButtonRemove;
