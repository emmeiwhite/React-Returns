import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // Our useEffect will run every time the component re-renders but also the cleanup function will run with it in this scenario
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", handleResize);

    // For clean up
    return () => {
      console.log("I am a clean up function");
      window.removeEventListener("resize", handleResize);
    };
  });

  console.log("render");
  return (
    <main>
      <h2>{width} px</h2>
    </main>
  );
};

export default UseEffectCleanup;
