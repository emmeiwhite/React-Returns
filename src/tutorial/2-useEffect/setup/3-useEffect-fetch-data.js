import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

// Data is everything in programming. At the end of the day we manipulate data
const UseEffectFetchData = () => {
  const [user, setUsers] = useState([]);

  // Async function for API calls and async function always returns a promise.
  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getUsers(); // Note that we have used a seperate async function because we cannot use that here in useEffect, useEffect always returns a clean up function, But async function always returns a promise
  }, []);
  return <h2>fetch data</h2>;
};

export default UseEffectFetchData;
