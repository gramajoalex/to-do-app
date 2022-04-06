import React, { useState } from "react";
import "../01-useState/counterApp.css";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });
  const { counter1, counter2 } = state;

  const handleAddCounter = () => {
    if (counter1 >= 0) {
      return setCounter({ ...state, counter1: counter1 + 1 });
    }
  };
  const handleSubtractCounter = () => {
    if (counter1 > 0) {
      setCounter({ ...state, counter1: counter1 - 1 });
    }
  };

  return (
    <>
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleAddCounter}>
        +1
      </button>
      <button className="btn btn-primary" onClick={handleSubtractCounter}>
        -1
      </button>
    </>
  );
};
