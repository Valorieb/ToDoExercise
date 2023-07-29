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

  const addTodo = (text) => {
    //This object gets the spread of current todos and adds another todo object.
    const newTodos = [...todos, { text: text, isCompleted: false }];
    //updates the old todo list to the new todo list (changes to current state)
    setTodos(newTodos);
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
      <TodoForm addTodo={addTodo} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
