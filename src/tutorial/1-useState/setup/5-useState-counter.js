import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  /*   Here we want to make multiple button clicks and expect them to increase the counter after certain time (say 3 seconds)*/

  /* --
  const handleIncrease = () => {
    setTimeout(() => {
      setCount(count + 1); // This wouldn't work
    }, 3000);
  };

  const handleDecrease = () => {
    setTimeout(() => {
      setCount(count - 1); // This would also not work
    }, 3000);
  };
  --*/

  /* Both the above function would not work as expected, because our state value is not updated while 3 seconds passed, it stayed the old one
  Solution is to update the state using function as argument to setCount(f) */

  const handleIncrease = () => {
    setTimeout(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      }); // This wouldn't work
    }, 3000);
  };

  const handleDecrease = () => {
    setTimeout(() => {
      setCount((prevCount) => {
        return prevCount - 1;
      }); // This would also not work
    }, 3000);
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

      <h2 style={{ margin: "4rem 0" }}>More Complex Counter</h2>
      <h1>{count}</h1>

      <button className="btn" onClick={handleIncrease}>
        increase
      </button>
      <button className="btn" onClick={handleReset}>
        reset
      </button>
      <button className="btn" onClick={handleDecrease}>
        decrease
      </button>
    </>
  );
};

export default UseStateCounter;
