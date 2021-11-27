import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div class="form-control">
        <label htmlFor="userName">Name :</label>
        <input type="text" name="userName" id="userName" />
      </div>

      <div class="form-control">
        <label htmlFor="userEmail">Email :</label>
        <input type="text" name="userEmail" id="userEmail" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledInputs;
