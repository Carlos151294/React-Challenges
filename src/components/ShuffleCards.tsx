import Collapsible from "./Collapsible";
import cardDeck from "../assets/card-deck.png";
import "./ShuffleCards.css";

const Instructions = () => (
  <>
    <h2>Shuffle Cards</h2>
    <Collapsible>
      <img src={cardDeck} alt="shuffle-cards" height={140} />
      <span>
        Build a simple app that keeps track of a shuffled standard deck of{" "}
        <a
          href="https://en.wikipedia.org/wiki/Standard_52-card_deck"
          target="_blank"
        >
          52 cards
        </a>{" "}
        and a hand of 5 cards
      </span>
      <span>
        A button that when pressed, discards the hand into a discard pile and
        draws 5 more from the remaining cards. If there are no more cards
        remaining, the discard pile should be shuffled back into the remaining
        cards.
      </span>
      <span>A counter displaying how many cards remain</span>
      <span>
        An area displaying the five cards currently in the hand. The cards
        should show the value, the suit and have the correct color as in the
        picture above. We do not need the symbols in the middle of the cards
        (pips and faces). The cards should be implemented in HTML and CSS, not
        as images.
      </span>
    </Collapsible>
  </>
);

const App = () => {
  return <i>Content here</i>;
};

export const ShuffleCards = () => {
  return (
    <div id="shuffle-cards" className="container">
      <Instructions />
      <App />
    </div>
  );
};
