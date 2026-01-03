import React, { useEffect, useState } from 'react';

const About = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Datas from API</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default About;
