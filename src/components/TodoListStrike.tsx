import Collapsible from "./Collapsible";

const Instructions = () => (
  <>
    <h2>To-do List with Strikethrough</h2>
    <Collapsible>
      <span>Create a to-do list</span>
      <span>Click on each item to strikethrough item</span>
      <span>Click on item again to remove strikethrough</span>
    </Collapsible>
  </>
);

const App = () => {
  return <i>Content here</i>;
};

const TodoListStrike = () => {
  return (
    <div id="todo-list-strikethrough" className="container">
      <Instructions />
      <App />
    </div>
  );
};

export default TodoListStrike;
