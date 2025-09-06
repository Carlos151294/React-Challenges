import React from "react";

// 1 : 20 : 30
// 60 * 100 + 20 * 100 + 30
// 1 min = 6000 mili
// 1 sec = 100 mili
// 1 mili = unit

// 1 - 100
// x - 2030

// 1 - 10

const Stopwatch = () => {
  const [inProgress, setInProgress] = React.useState(false);
  const [count, setCount] = React.useState(8030);

  const minutes = Math.floor(count / 6000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((count % 6000) / 100)
    .toString()
    .padStart(2, "0");
  const mili = Math.floor(count % 100)
    .toString()
    .padStart(2, "0");

  React.useEffect(() => {
    if (!inProgress) return;

    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [inProgress]);

  return (
    <div>
      <div>
        <button onClick={() => setInProgress(true)}>Start</button>
        <button onClick={() => setInProgress(false)}>Pause</button>
        <button
          onClick={() => {
            setInProgress(false);
            setCount(5900);
          }}
        >
          Reset
        </button>
      </div>
      <span style={{ fontSize: "20px" }}>
        {minutes}:{seconds}:{mili}
      </span>
    </div>
  );
};

export default Stopwatch;
