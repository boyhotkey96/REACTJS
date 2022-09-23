import { useEffect, useRef, useState } from "react";

function ContentTest() {
  const [count, setCount] = useState(360);

  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }, [count]);

  return <p>{count}</p>;
}

function Countdown() {
  const initialCount = 180;
  const [count, setCount] = useState(initialCount);
  const countRefDown = useRef(null);
  const countRefUp = useRef(null);
  // countRefDown.current = count

  const handleCountdown = () => {
    clearInterval(countRefUp.current);
    countRefDown.current = setInterval(() => {
      setCount((prev) => {
        const result = prev - 1;
        console.log(result);
        return result;
      });
    }, 1000);
  };

  const handleCountup = () => {
    clearInterval(countRefDown.current);
    countRefUp.current = setInterval(() => {
      setCount((prev) => {
        const result = prev + 1;
        console.log(result);
        return result;
      });
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRefDown.current);
    clearInterval(countRefUp.current);
    setCount(initialCount);
  };

  return (
    <div style={{ padding: "30px", fontSize: "28px" }}>
      <button onClick={handleReset}>Reset</button>
      <button style={{ cursor: "pointer" }} onClick={handleCountdown}>
        -
      </button>
      <button style={{ cursor: "pointer" }} onClick={handleCountup}>
        +
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Countdown;
