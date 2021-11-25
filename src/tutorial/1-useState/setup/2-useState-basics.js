import React, { useState } from "react";

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
