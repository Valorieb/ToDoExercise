function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    //default behavior is to reload the page. This prevents that.
    e.preventDefault();
    //if the value is empty, do nothing.
    if (!value) return;
    //otherwise it will add new todos (see index.js).
    addTodo(value);
    //clears form
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo ..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
