import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../helpers/procesoPesado";
import "../06-memos/memorize.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoProcesoPesado}</p>

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
