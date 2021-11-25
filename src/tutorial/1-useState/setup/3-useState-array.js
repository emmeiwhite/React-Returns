import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button>remove</button>
          </div>
        );
      })}

      <button className="btn">clear items</button>
    </>
  );
};

export default UseStateArray;
