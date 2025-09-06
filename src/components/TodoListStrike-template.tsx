import React, { useState } from "react";

interface Todo {
  name: string;
  done: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    if (todos.filter((n: Todo) => n.name === value).length === 0) {
      setTodos([...todos, { name: value, done: false }]);
    }
    setValue("");
  };

  const handleOnItemClick = (todo: string) => {
    const updatedTodos = todos.map((n: Todo) => {
      if (n.name === todo) {
        return { ...n, done: !n.done };
      }
      return n;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        className="round-input"
        type="text"
        value={value}
        onChange={changeHandler}
      />{" "}
      <button className="action" onClick={submitHandler}>
        Add
      </button>
      <hr />
      <ul>
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <li
                className={todo.done ? "strike-through" : undefined}
                key={index}
                onClick={() => handleOnItemClick(todo.name)}
              >
                {todo.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
