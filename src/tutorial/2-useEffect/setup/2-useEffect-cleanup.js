import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(0);

  /* One Important thing about hooks is that we cannot use them within conditionals 
     If we try the below code it will throw an error:
      React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render
  */

  /* ---
  if (value > 5) {
    useEffect(() => {
      console.log("useEffect Hook Invoked !!!");
      document.title = `updated title ${value}`;
    });
  }
  --- */

  // Solution would be to be conditional within the callback function
  useEffect(() => {
    if (value > 5) {
      console.log("useEffect Hook Invoked !!!");
      document.title = `updated title ${value}`;
    }
  });

  return (
    <main>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase Value
      </button>
    </main>
  );
};

export default UseEffectCleanup;
