import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

// Data is everything in programming. At the end of the day we manipulate data
const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // Async function for API calls and async function always returns a promise.
  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers(); // Note that we have used a seperate async function because we cannot use that here in useEffect, useEffect always returns a clean up function, But async function always returns a promise
  }, []);
  return (
    <main className="container">
      {users &&
        users.map((user) => {
          const { id, avatar_url, login } = user;
          return (
            <div key={id}>
              <img src={avatar_url} alt={`github user`} />
              <p>{login}</p>
            </div>
          );
        })}
    </main>
  );
};

export default UseEffectFetchData;
