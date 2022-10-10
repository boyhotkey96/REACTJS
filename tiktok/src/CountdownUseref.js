import { useState, useRef, useEffect, useCallback } from "react";
import ContentMemo from "./ContentMemouseCallback";

function CountdownUseref() {
  const [count, setCount] = useState(60);

  let timerId = useRef(69);
  // console.log(timerId)

  // getCounted
  let prevCount = useRef(count);
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  console.log(count, prevCount.current);

  // getElement h1 and log
  const h1Ref = useRef();
  useEffect(() => {
    console.log(h1Ref.current);
  }, []);

  // Handle event click button start
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((preCount) => preCount - 1);
    }, 1000);
    console.log("Start: ", timerId);
  };

  // Handle event click button stop
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stop: ", timerId);
  };

  // Handle Increase count
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  });

  return (
    <div style={{ padding: "20px" }}>
      <ContentMemo onIncrease={handleIncrease} />
      <h1 ref={h1Ref} style={{ fontSize: "72px" }}>
        {count}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default CountdownUseref;
