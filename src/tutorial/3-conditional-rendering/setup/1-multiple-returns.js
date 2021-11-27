import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [error, isError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // let's use fetch this time

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setUser(data);
        console.log(data);
      })
      .catch((err) => {
        isError(true);
        console.log("error");
      });
  }, []); // Now it will prevent infinite loop

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error) {
    return <h2>Error ...</h2>;
  }

  return (
    <main className="user">
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} />
      <p>{user.bio}</p>
    </main>
  );
};

export default MultipleReturns;
