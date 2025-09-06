import Collapsible from "./Collapsible";
// import App from './Stopwatch-template';

const Instructions = () => (
  <>
    <h2>Stopwatch</h2>
    <Collapsible>
      Implement a stopwatch that can be started, paused, and reset with
      following formats: <i>MM:ss:mm</i>
    </Collapsible>
  </>
);

const App = () => {
  return <i>Content here</i>;
};

export const Stopwatch = () => {
  return (
    <div id="stopwatch" className="container">
      <Instructions />
      <App />
    </div>
  );
};
