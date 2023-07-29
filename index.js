function App() {
  //component creates a state of initial todos
  const [todos, setTodos] = React.useState([
    {
      text: "Learn react",
      isCompleted: false,
    },

    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },

    {
      text: "Build todo app",
      isCompleted: false,
    },
    {
      text: "Take Gabe for walk",
      isCompleted: false,
    },
    {
      text: "Make smoothies",
      isCompleted: false,
    },
  ]);

  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    //default behavior is to reload the page. This prevents that.
    e.preventDefault();
    //if the value is empty, do nothing.
    if (!value) return;
    //otherwise it will add new todos. This object gets the spread of current todos and adds another todo object.
    const newTodos = [...todos, { text: value, isCompleted: false }];
    //updates the old todo list to the new todo list (changes to current state)
    setTodos(newTodos);
    //clears form
    setValue("");
  };

  const removeTodo = (e) => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    //updates state to new todo list
    setTodos(temp);
  };

  //return loops through all todos and creates a div tag for each where the key is the index value and the inner text is the value pair.
  return (
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>
          {todo.text}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo ..."
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
