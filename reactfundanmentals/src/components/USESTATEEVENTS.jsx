import React, { useState } from "react";

export default function USESTATEEVENTS() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count > 0) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    if (count > 0) {
      setCount(count === 0);
    }
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="increment" onClick={increment}>
        +
      </button>
      <button className="reset" onClick={reset}>
        reset
      </button>
      <button className="decrement" onClick={decrement}>
        -
      </button>
    </div>
  );
}
