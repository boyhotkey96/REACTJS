import { useReducer } from "react";

// Init State
const initState = 0;

// Action
const COUNT_DOWN = "down";
const COUNT_UP = "up";

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case COUNT_DOWN:
      return state - 1;
    case COUNT_UP:
      return state + 1;
    default:
      throw new Error("Error: Invalid!");
  }
};

function CountuseReducer() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "42px" }}>
        Count: <span style={{ color: "red" }}>{count}</span>
      </h1>
      <button onClick={() => dispatch(COUNT_DOWN)}>Down</button>
      <button onClick={() => dispatch(COUNT_UP)}>Up</button>
    </div>
  );
}

export default CountuseReducer;
