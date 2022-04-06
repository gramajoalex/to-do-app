import React, { useRef } from "react";
import "./focusScreen.css";

export const FocusScreen = () => {
  const inputRef = useRef();
  //   console.log(ref);

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Nombre"
      />
      <button onClick={handleClick} className="btn btn-outline-primary mt-3">
        Focus
      </button>
    </div>
  );
};
