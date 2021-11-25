import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const handleRemove = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => handleRemove(id)}>remove</button>
          </div>
        );
      })}

      {/* deleting all the items on button click */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
