import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(0);

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
