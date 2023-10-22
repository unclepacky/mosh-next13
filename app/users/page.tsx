import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store"
  // });
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10, // if 10 seconds passed wince the last fetch then the next fetch will be served from the server and not from the cache
    },
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default UsersPage;
