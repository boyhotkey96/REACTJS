import { useState, useRef, useEffect } from "react";
import ContentMemo from "./ContentMemo";

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

  return (
    <div style={{ padding: "20px" }}>
      <ContentMemo count={timerId.current} />
      <h1 ref={h1Ref} style={{ fontSize: "72px" }}>
        {count}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default CountdownUseref;
