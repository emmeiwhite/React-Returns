import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("truth stands out clear");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  const [error, isError] = useState(false);

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

      <div>
        <button className="btn" onClick={() => isError(!error)}>
          toggle an error ^_^
        </button>
        <h2>Ternairy Operator</h2>
        {error && <h3>Error...</h3>}
        {error ? <p> There is something wrong</p> : <p>All is well</p>}
      </div>
    </main>
  );
};

export default ShortCircuit;
