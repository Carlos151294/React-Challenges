import Collapsible from "./Collapsible";

const Instructions = () => (
  <>
    <h2>Tic Tac Toe</h2>
    <Collapsible>
      <span>Implement a Tic Tac Toe game</span>
      <span>Display the winner or next player</span>
      <span>Click on a square to make a move</span>
      <span>
        The game is over when there is a winner or all squares are filled
      </span>
    </Collapsible>
  </>
);

const App = () => {
  return <i>Content here</i>;
};

export const Tictactoe = () => {
  // Display winner or next player
  return (
    <div id="tic-tac-toe" className="container">
      <Instructions />
      <App />
    </div>
  );
};
