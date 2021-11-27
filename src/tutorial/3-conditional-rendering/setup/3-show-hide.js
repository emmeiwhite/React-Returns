import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [error, isError] = useState(false);
  return (
    <div>
      <button onClick={() => isError(!error)} className="btn">
        Toggle error;
      </button>
      {!error && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <h1>Width </h1>
      <h3>{size}px</h3>
    </main>
  );
};

// cleanup functionality
export default ShowHide;
