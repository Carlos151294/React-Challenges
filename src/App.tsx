import React from "react";
import "./App.css";
import { Exercises } from "./constants";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [component, setComponent] = React.useState<React.JSX.Element>(
    <TodoList />
  );

  return (
    <div className="wrapper">
      <nav className="sidenav">
        <ul>
          {Exercises.map((exercise, index) => (
            <li key={exercise.id} className={exercise?.done ? "done" : ""}>
              <a
                href={`#${exercise.id}`}
                className={exercise.done ? "done" : ""}
                onClick={() => setComponent(exercise.component)}
              >
                {index + 1}. {exercise.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="main-content">
        <section className="challenges">{component}</section>
      </div>
    </div>
  );
};

export default App;
