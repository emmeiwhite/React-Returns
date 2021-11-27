import React, { useState, useEffect } from "react";

const ShowHide = () => {
  return (
    <div>
      <Item />
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
