import Collapsible from "./Collapsible";
import bingo from "../assets/bingo.avif";

const Instructions = () => (
  <>
    <h2>Bingo</h2>
    <Collapsible>
      <span>Create a bingo board game</span>
      <span>
        The board is a 5x5 grid of random numbers and the columns are assigned
        specific number ranges:
        <span>B: 1–15</span>
        <span>I: 16–30</span>
        <span>N: 31–45</span>
        <span>G: 46–60</span>
        <span>O: 61–75</span>
      </span>
      <img src={bingo} alt="bingo" width={200} style={{ marginTop: "1rem" }} />
    </Collapsible>
  </>
);

const App = () => {
  return <i>Content here</i>;
};

export const Bingo = () => {
  return (
    <div id="bingo" className="container">
      <Instructions />
      <App />
    </div>
  );
};
