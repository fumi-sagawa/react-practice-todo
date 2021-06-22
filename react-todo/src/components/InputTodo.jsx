export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "5px",
  };

  const { value, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
