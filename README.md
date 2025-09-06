# React-Challenges
React exercises to warm up before a React Coding Interview.

### Template solutions
For most exercises, there's is a template solution you can enable in case you want to look at the final result to clarify what needs to be done in each exercise or in case you are a bit lost and want to take a look at the sample solution.

To enable a template solution, you just have to comment the following block of code:

```jsx
const App = () => {
   return <i>Content here</i>;
};
```

And just add the import from the template solution at the top:

```javascript
import App from "./TodoList-template";
```

So final code to test a template solution would look like this:


```jsx
import Collapsible from "./Collapsible";
import App from "./TodoList-template";

const Instructions = () => (
  <>
    <h2>To-do List</h2>
    <Collapsible>
      <span>Create a to-do list</span>
      <span>Click on each item to remove item from list</span>
    </Collapsible>
  </>
);

// const App = () => {
//   return <i>Content here</i>;
// };

const TodoList = () => {
  return (
    <div id="todo-list" className="container">
      <Instructions />
      <App />
    </div>
  );
};

export default TodoList;
```
