import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName && userEmail) {
      console.log("Form Submit");
    } else {
      alert("Fill form fields to post the form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-control">
        <label htmlFor="userName">Name :</label>
        <input
          type="text"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          id="userName"
        />
      </div>

      <div className="form-control">
        <label htmlFor="userEmail">Email :</label>
        <input
          type="text"
          name="userEmail"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          id="userEmail"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledInputs;
