import React, { useState, useEffect } from "react";
// useEffect is used for all Side Effects. console.log, API calls etc etc
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // By Default useEffect runs after every re-render and performs site effects
  useEffect(() => {
    console.log("useEffect Hook Invoked !!!");
    document.title = `updated title ${value}`; // performing site effect
  }, [value]); // Here we are passing a dependency list in the form of an array

  // useEffect different setups... Second Parameter

  // When we are using second argument as array this will run only once at the start
  useEffect(() => {
    // This is same as componentDidMount()
    console.log("This will run the first time only");
  }, []);

  return (
    <main>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase Value
      </button>
    </main>
  );
};

export default UseEffectBasics;
