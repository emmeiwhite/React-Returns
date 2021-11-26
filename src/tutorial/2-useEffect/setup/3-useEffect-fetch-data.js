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
    <>
      <h3>github users</h3>
      <ul className="users">
        {users &&
          users.map((user) => {
            const { id, avatar_url, login, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <p>{login}</p>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
