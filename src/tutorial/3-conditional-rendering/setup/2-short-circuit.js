import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("truth stands out clear");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <main>
      {/*
       {if(true){console.log("Hello World")}} 
       This expression is not allowed within JSX.
       Because it doesno't return any value. Instead 
       we make use of the short-circuit operator and ternairy operators when required
       */}

      {/* <h2>{firstValue}</h2>
      <h2>{secondValue}</h2> */}

      {/* <h2>{firstValue}</h2> */}
      {text || "I am the text"}
      {text && <h3>Text is not present</h3>}
    </main>
  );
};

export default ShortCircuit;
