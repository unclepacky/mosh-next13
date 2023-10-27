interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10, // if 10 seconds passed wince the last fetch then the next fetch will be served from the server and not from the cache
    },
  });
  const users: User[] = await res.json();

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UserTable;
