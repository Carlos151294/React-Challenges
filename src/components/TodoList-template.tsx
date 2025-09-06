import React from "react";

const App = () => {
  const [value, setValue] = React.useState<string>("");
  const [list, setList] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setList((prev) => [...prev, value]);
    setValue("");
  };

  const handleRemove = (item: string) => {
    setList((prev) => prev.filter((value) => item !== value));
  };

  return (
    <>
      <input className="round-input" value={value} onChange={handleChange} />
      <button className="action" onClick={handleClick}>
        Add
      </button>
      <ul>
        {list.map((item, idx) => (
          <li key={`${item}${idx}`} onClick={() => handleRemove(item)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
