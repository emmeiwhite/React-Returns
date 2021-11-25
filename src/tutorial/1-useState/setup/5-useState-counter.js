import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h2>Regular Counter</h2>
      <h1>{count}</h1>

      <button className="btn" onClick={() => setCount(count + 1)}>
        increase
      </button>
      <button className="btn" onClick={handleReset}>
        reset
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        decrease
      </button>
    </>
  );
};

export default UseStateCounter;
