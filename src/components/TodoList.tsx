import Collapsible from "./Collapsible";

const Instructions = () => (
  <>
    <h2>To-do List</h2>
    <Collapsible>
      <span>Create a to-do list</span>
      <span>Click on each item to remove item from list</span>
    </Collapsible>
  </>
);

const App = () => {
  return <i>Content here</i>;
};

const TodoList = () => {
  return (
    <div id="todo-list" className="container">
      <Instructions />
      <App />
    </div>
  );
};

export default TodoList;
