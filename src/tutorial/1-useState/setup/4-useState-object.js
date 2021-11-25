import React, { useState } from "react";

// useState with Object and object spread operator
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Emmei",
    age: 29,
    message: "life is journey of ups and downs",
  });

  const handleMessageChange = () => {
    setPerson({
      ...person,
      message: "But we must never give up and keep our focus",
    });
  };
  return (
    <>
      {" "}
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={handleMessageChange}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
