import React, { useState } from "react";

/**
 * GENERAL RULES FOR HOOKS:
 * 1. use
 * 2. component that uses hooks should be named in Uppercase
 * 3. must be in the function/component body
 * 4. cannot call conditionaly
 */

const UseStateBasics = () => {
  const [text, setText] = useState("Random Text");

  const handleClick = (e) => {
    if (text === "Random Text") {
      setText("Updated Text");
    } else {
      setText("Random Text");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
