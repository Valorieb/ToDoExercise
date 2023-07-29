function App() {
  //component creates a state of initial todos
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },

    {
      text: "meet friend for lunch",
      isCompleted: false,
    },

    {
      text: "build todo app",
      isCompleted: false,
    },
    {
      text: "take Gabe for walk",
      isCompleted: false,
    },
    {
      text: "make smoothies",
      isCompleted: false,
    },
  ]);

  //return loops through all todos and creates a div tag for each where the key is the index value and the inner text is the value pair.
  return (
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>
          {todo.text}
        </div>
      ))}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
