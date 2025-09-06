import { useState } from "react";

type Sybmol = "clubs" | "diamond" | "hearts" | "spades";

interface Card {
  symbol: Sybmol;
  value: string;
}

const ALL_CARDS: Card[] = [
  {
    symbol: "clubs",
    value: "1",
  },
  {
    symbol: "clubs",
    value: "2",
  },
  {
    symbol: "clubs",
    value: "3",
  },
  {
    symbol: "clubs",
    value: "4",
  },
  {
    symbol: "clubs",
    value: "5",
  },
  {
    symbol: "clubs",
    value: "6",
  },
  {
    symbol: "clubs",
    value: "7",
  },
  {
    symbol: "clubs",
    value: "8",
  },
  {
    symbol: "clubs",
    value: "9",
  },
  {
    symbol: "clubs",
    value: "10",
  },
  {
    symbol: "clubs",
    value: "J",
  },
  {
    symbol: "clubs",
    value: "Q",
  },
  {
    symbol: "clubs",
    value: "K",
  },
  {
    symbol: "diamond",
    value: "1",
  },
  {
    symbol: "diamond",
    value: "2",
  },
  {
    symbol: "diamond",
    value: "3",
  },
  {
    symbol: "diamond",
    value: "4",
  },
  {
    symbol: "diamond",
    value: "5",
  },
  {
    symbol: "diamond",
    value: "6",
  },
  {
    symbol: "diamond",
    value: "7",
  },
  {
    symbol: "diamond",
    value: "8",
  },
  {
    symbol: "diamond",
    value: "9",
  },
  {
    symbol: "diamond",
    value: "10",
  },
  {
    symbol: "diamond",
    value: "J",
  },
  {
    symbol: "diamond",
    value: "Q",
  },
  {
    symbol: "diamond",
    value: "K",
  },
  {
    symbol: "hearts",
    value: "1",
  },
  {
    symbol: "hearts",
    value: "2",
  },
  {
    symbol: "hearts",
    value: "3",
  },
  {
    symbol: "hearts",
    value: "4",
  },
  {
    symbol: "hearts",
    value: "5",
  },
  {
    symbol: "hearts",
    value: "6",
  },
  {
    symbol: "hearts",
    value: "7",
  },
  {
    symbol: "hearts",
    value: "8",
  },
  {
    symbol: "hearts",
    value: "9",
  },
  {
    symbol: "hearts",
    value: "10",
  },
  {
    symbol: "hearts",
    value: "J",
  },
  {
    symbol: "hearts",
    value: "Q",
  },
  {
    symbol: "hearts",
    value: "K",
  },
  {
    symbol: "spades",
    value: "1",
  },
  {
    symbol: "spades",
    value: "2",
  },
  {
    symbol: "spades",
    value: "3",
  },
  {
    symbol: "spades",
    value: "4",
  },
  {
    symbol: "spades",
    value: "5",
  },
  {
    symbol: "spades",
    value: "6",
  },
  {
    symbol: "spades",
    value: "7",
  },
  {
    symbol: "spades",
    value: "8",
  },
  {
    symbol: "spades",
    value: "9",
  },
  {
    symbol: "spades",
    value: "10",
  },
  {
    symbol: "spades",
    value: "J",
  },
  {
    symbol: "spades",
    value: "Q",
  },
  {
    symbol: "spades",
    value: "K",
  },
];

const shuffle = (deck: Card[]) => {
  const updatedCards = [...deck];

  for (let i = 0; i < deck.length; i++) {
    // select random number from 0 to length of the deck
    const shuffle = Math.floor(Math.random() * deck.length);

    // swapping logic
    const aux = updatedCards[i];
    updatedCards[i] = updatedCards[shuffle];
    updatedCards[shuffle] = aux;
  }

  return updatedCards;
};

interface CardProps {
  card: Card;
}

const CardItem = ({ card }: CardProps) => {
  return (
    <li className="card">
      <div className="card-up-side">
        <div className="flex-column align-items-center">
          <span>{card.value}</span>
          {card.symbol === "diamond" && <span className="red">&#9830;</span>}
          {card.symbol === "hearts" && <span className="red">&#9829;</span>}
          {card.symbol === "clubs" && <span>&#9827;</span>}
          {card.symbol === "spades" && <span>&#9824;</span>}
        </div>
      </div>
      <div className="card-down-side">
        <div className="rotate flex-column align-items-center">
          <span>{card.value}</span>
          {card.symbol === "diamond" && <span className="red">&#9830;</span>}
          {card.symbol === "hearts" && <span className="red">&#9829;</span>}
          {card.symbol === "clubs" && <span>&#9827;</span>}
          {card.symbol === "spades" && <span>&#9824;</span>}
        </div>
      </div>
    </li>
  );
};

const App = () => {
  const [deck, setDeck] = useState<Card[]>(ALL_CARDS); // remaining cards
  const [hand, setHand] = useState<Card[]>([]);
  const [discard, setDiscard] = useState<Card[]>([]);

  const handleDraw = () => {
    const shuffled = shuffle(deck);
    const firstFive = shuffled.slice(0, 5);
    const remainingCards = shuffled.filter((_card, index) => index > 4);
    const discardedCards = [...discard, ...hand];

    // check if firstFive length < 5
    if (firstFive.length < 5) {
      setHand([...firstFive, ...shuffle(discardedCards.slice(0, 3))]);
      setDeck(shuffle(discardedCards.slice(3)));
      // reset discard cards (not finished/verified)
      setDiscard([]);
      return;
    }

    setHand(firstFive);
    setDeck(remainingCards);
    setDiscard(discardedCards);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        Remaining Cards: {deck.length}{" "}
        <button onClick={handleDraw}>Draw 5</button>
      </div>
      <ul className="cards">
        {hand.map((card) => (
          <CardItem key={`${card.symbol}${card.value}`} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default App;
