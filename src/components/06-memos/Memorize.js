import React, { useState } from "react";
import "../06-memos/memorize.css";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-outline-primary ms-2"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
