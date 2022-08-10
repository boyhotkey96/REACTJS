import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(() => 1);

  const [info, setInfo] = useState({
    name: "boyhotkey96",
    age: 1996,
  });

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleInfo = () => {
    setInfo((prev) => {
      return {
        ...prev,
        position: "dev front end",
      };
    });
    console.log(info);
  };

  return (
    <div className="App">
      <button
        style={{ margin: "20px", padding: "20px", cursor: "pointer" }}
        onClick={() => {
          handleClick();
          handleInfo();
        }}
      >
        {counter}
      </button>
    </div>
  );
}

export default App;
