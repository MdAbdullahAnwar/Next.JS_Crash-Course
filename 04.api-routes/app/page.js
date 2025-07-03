"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  async function addUser() {
    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    if (res.ok) {
      setName(""); 
      await fetchUsers(); 
    } else {
      alert("Error adding user");
    }
  }

  async function fetchUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    if (Array.isArray(data)) {
      setUsers(data);
    } else {
      setUsers([]);
    }
  }

  return (
    <div>
      <div>
        <h1>Enter the name of the user</h1>
        <input
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      <button onClick={fetchUsers}>Get Users</button>

      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
