"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [userValue, setUserValue] = useState("");
  const [fetchedUserValue, setFetchedUserValue] = useState({});

  async function addUser() {
    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
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

  async function fetchSpecificUser() {
    if (!userValue) {
      alert("Enter a user ID");
      return;
    }
    try {
      const res = await fetch(`/api/users/${userValue}`);
      if (res.ok) {
        const data = await res.json();
        setFetchedUserValue(data);
      } else {
        setFetchedUserValue(null);
        alert("User not found");
      }
    } catch (err) {
      console.error("Failed to fetch specific user", err);
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

      <div>
        <h3>Fetch a Specific User by ID</h3>
        <input
          type="number"
          placeholder="Enter user ID"
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
        <button onClick={fetchSpecificUser}>Get Specific User</button>

        {fetchedUserValue && (
          <p>
            {fetchedUserValue.id} - {fetchedUserValue.name}
          </p>
        )}
      </div>
    </div>
  );
}
